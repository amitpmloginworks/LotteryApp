import { Component, ViewChild, NgZone, OnInit, ChangeDetectorRef } from '@angular/core';
import {
    Platform, MenuController, Nav, NavController, LoadingController,
    AlertController, ModalController, IonicPage, ItemSliding, Item
} from 'ionic-angular';
import { Splashscreen, StatusBar } from 'ionic-native';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';
import { Params } from '../../services/params';
import { HomeService } from '../../services/service.home';
import { DatabaseService } from '../../services/db.service';
import { CommonService } from '../../services/common.service';
import { CacheController } from '../../services/cache_controller';
import { AuthService } from '../../services/auth.service';
import { AppSoundProvider } from '../../providers/app-sound/app-sound';

declare var webengage: any;
declare var cordova: any;
export interface PageInterface {
    title: string;
    component: any;
    icon: string;
    index?: number;
}
@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {
    userCodeMgm: any;
    currentJWT: any;
    @ViewChild('slidingItem') slideItm: ItemSliding;
    @ViewChild('item') Itm: Item;
    @ViewChild('btn-unread') btnRead: any;
    versionNumber: Promise<any>;
    accountDetails: any;
    static userNick: any;
    nickName: any;
    ngOnInit(): void {
        this.platform.ready().then((readySource) => {
            var CurrentUserid = localStorage.getItem('appCurrentUserid');
            if (this.platform.is('cordova')) {
                webengage.engage();
                webengage.track('Home Page', {
                    "UserId": CurrentUserid,
                });
                webengage.screen("HomePage")
                webengage.notification.onDismiss((inAppData) => {
                });
                webengage.engage();
            }
        });
    }
    @ViewChild(Nav) nav: Nav;
    @ViewChild("messageDetails") messageDetails;

    private cache: CacheController;
    image_Data: any;
    rootPage: any = 'TabsPage';
    messageLoading = false;
    imageUpdate: string = ""

    private homeMessage: any;
    public messages: any[] = [];

    constructor(
        public zone: NgZone,
        public params: Params,
        private iab: InAppBrowser,
        private storage: Storage,
        public platform: Platform,
        public authSrv: AuthService,
        private srvHome: HomeService,
        public menu: MenuController,
        private navCtrl: NavController,
        private srvDb: DatabaseService,
        private commonSrv: CommonService,
        public cdRef: ChangeDetectorRef,
        public appSound: AppSoundProvider,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private _modalCtrl: ModalController,

    ) {


        this.cache = new CacheController(params, platform, srvDb, srvHome, alertCtrl);

        this.params.events.subscribe('home-data', data => {
            console.log(data, "home data");
            for (var i = data.length - 1; i >= 0; i--) {
                if (data[i].get_home_message) {
                    this.homeMessage = data[i].get_home_message.response;
                    if (this.homeMessage.notification) {
                        // this.messages = this.homeMessage.notification;
                    }
                    params.setUnreadCount(this.homeMessage.count);
                }
                if (data[i].get_account_details) {
                    this.accountDetails = data[i].get_account_details.response;
                    this.updateCode()
                    this.updateNick()
                    if (this.accountDetails.profile_image) {
                        this.image_Data = this.accountDetails.profile_image
                        return
                    }
                    else if (localStorage.getItem("imageUrl")) {
                        this.image_Data = localStorage.getItem("imageUrl")
                        return
                    }
                }
            }
            console.log("HomePage::home data", this.homeMessage, this.messages);
        });
        this.checkForNewRelease()
    }
    ionViewDidEnter() {
        if (this.messageDetails) {
            this.messageDetails.togglePopup();
        }
        setTimeout(() => {
            this.getAnotherTokenLife()
        }, 5000);

        setInterval(() => { this.refreshToken(); }, 1200000)
        setInterval(() => { this.getAnotherTokenLife(); }, 15000000)
    }
    ionViewDidLoad() {

        console.log('ionViewDidLoad HomePage');
        //set gloabal variable if for app is open already

    }
    refreshToken() {
        this.currentJWT = "";
        this.storage.get('user_session_token').then((dataToken) => {
            this.currentJWT = dataToken;
            console.log('token homepage', this.currentJWT)
            CommonService.JWT = "";
        })
        setTimeout(() => {
            if (this.currentJWT) {
                this.authSrv.refreshJWT(this.currentJWT).subscribe((data) => {
                    console.log(data)
                    CommonService.JWT = data.session_token;
                    this.commonSrv.updateJWT(data.session_token)
                    this.storage.set('user_session_token', data.session_token);
                })
            }
        }, 5000);


    }
    getAnotherTokenLife() {
        var email;
        var passWord;
        this.storage.get('DF_EMAIL').then((val) => {
            console.log("splash df email", val)
            email = val;
        });
        this.storage.get('DF_PASSWORD').then((val) => {
            console.log("splash df password", val)
            passWord = val;
        });
        setTimeout(() => {
            if (email) {
                this.authSrv.getJWTToken(email, passWord).subscribe((successData) => {
                    console.log("retrived the new data for JWT", successData)
                    this.storage.set('session_ID', CommonService.sessionId);
                    this.storage.set('user_session_token', successData.session_token);
                    this.storage.set('user_session_id', successData.session_id);

                })
            }
        }, 5000);
    }
    ionViewWillEnter() {
        console.log("ionViewWillEnter in home page")
        this.commonSrv.trackSegmentPage("Home", "HomePage").subscribe(
            data => {
                console.log("track segment called");
            },
            err => {
            },
            () => { }
        );
    }

    closeMenu1() {
        this.menu.close();
        this.srvHome.getHomeMessages().take(1).subscribe((data) => {
            this.zone.run(() => {
                this.homeMessage = data.response[0].get_home_message.response;
                this.params.setUnreadCount(this.homeMessage.count);
            });

        }, (err) => {
            console.log("onOpenRightMenu error ", err);
        })
    }

    onLeftMenuSelection(selection) {
        console.log("HomePage::onLeftMenuSelection");
        this.appSound.play('menuClick');
        this.menu.close();
        switch (selection) {
            case 'accounts':
                this.params.goPage('AccountPage')
                break
            case 'help':
                this.params.goPage('HelpPage')
                //   let opt:string = "toolbarposition=top";
                // this.iab.create('https://help.lotto-social.com/hc/en-us', 'blank', opt);
                break
        }
    }

    openPage(page: PageInterface) {
        this.menu.close();

        if (page.index) {
            this.nav.setRoot(page.component, { tabIndex: page.index });
        } else {
            this.nav.setRoot(page.component).catch(() => {
                console.log("Didn't set nav root");
            });
        }
    }

    goPage(page) {
        this.menu.close();

        switch (page) {
            case 'create_syndicate':
                this.nav.setRoot('CreateSyndicatePage');
                break;

            default:
                // code...
                break;
        }

    }

    openWebView(str: string) {
        this.appSound.play('buttonClick');

        // let browser = this.iab.create(CommonService.sitename + str, 'blank', opt);
        const browser = cordova.InAppBrowser.open(CommonService.sitename + str, 'blank', 'location=no,toolbarposition=top');

        browser.on('loadstart').subscribe(data => {
            StatusBar.hide();
        })
        browser.on('loadstop').subscribe(data => {
            StatusBar.hide()
        })
    }
    // notification menu
    onOpenRightMenu() {
        this.appSound.play('menuClick');
        this.zone.run(() => {
            this.messageLoading = true;
        });
        this.srvHome.getHomeMessages().take(1).subscribe((data) => {
            console.log("onOpenRightMenu success ", data);
            this.zone.run(() => {
                this.appSound.play('inbox');
                var items: ItemSliding
                this.messageLoading = false;
                this.homeMessage = data.response[0].get_home_message.response;
                this.messages = this.homeMessage.notification;
                this.params.setUnreadCount(this.homeMessage.count);
                if (this.homeMessage.count > 0) {
                    setTimeout(() => {
                        this.slideItm.setElementClass("active-sliding", true);
                        this.slideItm.setElementClass("active-slide", true);
                        this.slideItm.setElementClass("active-options-right", true);
                        this.Itm.setElementStyle("transform", "translate3d(-140px, 0px, 0px)");

                        //close back

                        setTimeout(() => {
                            this.slideItm.close();
                            setTimeout(() => {
                                this.slideItm.setElementClass("active-sliding", false);
                                this.slideItm.setElementClass("active-slide", false);
                                this.slideItm.setElementClass("active-options-right", false);
                            }, 1000);


                        }, 2000);

                    }, 1000);

                }
            });

        }, (err) => {
            console.log("onOpenRightMenu error ", err);
        })
    }


    checkForNewRelease() {
        this.commonSrv.getNewRelease().subscribe(data => {
            console.log("checkForNewRelease", data);

            if (data.response) {
                let response = data.response[0].get_new_release.response;
                if (response && response.status == 'success') {
                    CommonService.updateAvailable = true;
                    // show update
                    //this.rootPage = 'UpdatePage'
                }
            }

            Splashscreen.hide();
        },
            err => {
                // show offline
                this.params.setIsInternetAvailable(false);
            },
            () => { });
    }

    onOpenLeftMenu() {
        this.appSound.play('menuClick');
        // if (localStorage.getItem("imageUrl")) {
        //     this.image_Data = localStorage.getItem("imageUrl")
        // }
        // else if (this.imageUpdate != "") {
        //     this.image_Data = this.imageUpdate
        // }
        // else {
        //     this.image_Data = "assets/icon/user.svg"
        // }
    }

    markAsRead(cardId: any, index) {
        this.appSound.play('buttonClick');
        var btn = document.getElementById('btnRead' + index).style.backgroundColor = 'gray'

        this.srvHome.markAsRead(cardId).subscribe((data) => {
            if (data) {
                if (data.response[0].mark_home_inbox_message.response.status == 'SUCCESS') {
                    console.log("msg read")
                }
            }
        })

    }

    deleteNotification(cardId: any, index) {
        this.appSound.play('buttonClick');
        this.srvHome.deleteMsg(cardId).subscribe((data) => {
            if (data) {
                if (data.response[0].delete_home_inbox_message.response.status == 'SUCCESS') {

                    document.getElementById("delete" + index).style.display = 'none';
                }
            }
        }), (Err) => {
            this.appSound.play('Error');

        }
    }

    saveItem() {
        console.log("saveItem()");
    }
    alert(i: any) {
        this.appSound.play('buttonClick');
        let inboxPopup = this._modalCtrl.create('inboxModal', { CurrentMessage: this.messages[i] });
        inboxPopup.present();
    }
    mgmPage() {
        this.appSound.play('buttonClick');
        let mgmModal = this._modalCtrl.create('referFriend');
        mgmModal.present();
    }
    updateNick() {

        if (!HomePage.userNick) {
            this.nickName = this.accountDetails.nick_name
            if (this.nickName == "null") {
                this.nickName = ""
            }
        } else if (!HomePage.userNick && !this.accountDetails.nick_name) {
            this.nickName = " "
        }
        else {
            this.nickName = HomePage.userNick
        }

    }
    updateCode() {

        this.userCodeMgm = this.accountDetails.user_code
        if (!this.userCodeMgm) {
            this.userCodeMgm = ""
        }
        else if (this.userCodeMgm == "null") {
            this.userCodeMgm = "";
        }
    }
    updateProfilePic(imageUrl: any) {
        if (imageUrl && imageUrl.includes('https')) {
            this.image_Data = imageUrl
        }
    }
}

