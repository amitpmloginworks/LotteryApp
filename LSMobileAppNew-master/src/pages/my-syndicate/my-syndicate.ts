import { Component, ViewChild, ChangeDetectorRef, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { NavController, IonicPage, NavParams, Events, App, Tabs, LoadingController, ViewController, ModalController } from 'ionic-angular';

import { SyndicateService } from '../../providers/syndicate-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { OfferService } from '../../services/offer.service';
import { CommonService } from '../../services/common.service';
import { AppSoundProvider } from '../../providers/app-sound/app-sound';
import { Content, Platform } from 'ionic-angular'

declare var $: any;
declare var cordova: any;
@IonicPage()
@Component({
    selector: 'page-my-syndicate',
    templateUrl: 'my-syndicate.html',
})
export class MySyndicatePage {
    @ViewChild(Content) content: Content;
    @ViewChild("confirmPayment") confirmPayment;
    @ViewChildren("synd") synd;

    private syndArr = [];
    private toggled = [];


    userCards: any;
    userCardsCount: number = 0;
    customerToken: string;
    jackpotList: any
    jackpotGroup: any
    chatcount: any;
    customer_id: any;
    viewEmpty: boolean = false;
    downShowing = 0;
    down_arrow_showing = 0;


    constructor(
        public app: App,
        public iab: InAppBrowser,
        public navParams: NavParams,
        public events: Events,
        public modalCtrl: ModalController,
        public platform: Platform,
        public srvOffer: OfferService,
        public navCtrl: NavController,
        public appSound: AppSoundProvider,
        public _syndService: SyndicateService,
        public loadingCtrl: LoadingController,
        public cdRef: ChangeDetectorRef) {

        this.events.subscribe("reloadSyndicate", (data) => {
            this.loadSyndicate()
            this.checkCardExists()
        })

    }

    ionViewDidLoad() {
        this.customer_id = CommonService.session.customer_id;
    }

    animateSyndicateList() {
        console.log("index is ")
    }

    // ionViewWillEnter() {
    //     this.delay(4000);
    //     this.content.enableScrollListener();
    // }
    openOfferPage() {
        this.appSound.play('buttonClick');
        var tabs: Tabs = this.navCtrl.parent.parent.parent;
        tabs.select(4);
    }
    scrollHandlerSyndicate(event) {

        var innerDiv = document.getElementById('innerMySyndicate').scrollHeight;
        var scrollDiv = document.getElementById('asynd').clientHeight;

        var valu = scrollDiv + this.content.scrollTop
        console.log("sdsdsdsdsdsdsds", innerDiv, scrollDiv, valu)
        if (valu > innerDiv) {
            console.log("botom")
            this.downShowing = 1
            this.cdRef.detectChanges();
        }
        else {
            this.downShowing = 0
            this.down_arrow_showing = 0
            this.cdRef.detectChanges();
        }
    }
    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    ionViewDidEnter() {
        if (sessionStorage.getItem("firstTimeSyndicate") != "true") {
            this.checkCardExists()
            this.loadSyndicate()
        }

    }
    checkwins() {
        this.appSound.play('buttonClick');
        var t: Tabs = this.navCtrl.parent;
        t.select(1);
    }
    manage_syndicates(sd: any) {
        this.appSound.play('buttonClick');
        let Modal = this.modalCtrl.create('ManageSyndicatePage', { syndicate: sd });
        Modal.onDidDismiss(data => {
            if (data == 'offerPage') {
                var tabs: Tabs = this.navCtrl.parent.parent.parent;
                tabs.select(4)
            }

        })
        Modal.present();
    }
    manage_syndicates2(sd: any) {
        this.appSound.play('buttonClick');
        let Modal = this.modalCtrl.create('ManageSyndicate2Page', { syndicate: sd });
        Modal.present();
        // this.appSound.play('buttonClick');
        // this.app.getRootNav().push(ManageSyndicate2Page);
    }

    viewTickets(i) {

        this.appSound.play('buttonClick');
        var grp = this.syndArr[i].product_group;
        var sid = this.syndArr[i].syndicate_id;
        var stype = this.syndArr[i].syndicate_type;
        this.app.getRootNav().push('YourTicketsPage', { 'products': grp, 'synd': sid, 'stype': stype });
    }

    viewPrivateTickets(productGroup: any, syndicate_id: any, syndicate_type: any) {
        this.appSound.play('buttonClick');
        this.app.getRootNav().push('YourTicketsPage', { 'products': productGroup, 'synd': syndicate_id, 'stype': syndicate_type });
    }

    loadSyndicate() {
        // let loader = this.loadingCtrl.create({
        //     spinner: 'hide',
        //     content: `<img src="assets/vid/blue_bg2.gif" style="height:100px!important">`,
        // });
        // loader.present();
        this._syndService.syndicateList().subscribe((res) => {
            console.log('syndicate list');
            sessionStorage.setItem("firstTimeSyndicate", "true")
            // loader.dismiss();
            if (res.response[0].get_syndicate_list.response.syndicate_group) {
                this.syndArr = res.response[0].get_syndicate_list.response.syndicate_group;
                var a = localStorage.getItem("syndicateP")
                if (localStorage.getItem("syndicateP") == undefined || localStorage.getItem("syndicateP") == null) {
                    this.down_arrow_showing = 1
                }
                else {
                    this.down_arrow_showing = 0
                }
                localStorage.setItem("syndicateP", "1")
                console.log("syndSrr is ", this.syndArr)
                setTimeout(() => {
                    this.down_arrow_showing = 0
                    this.cdRef.detectChanges()
                    console.log("value changed for dwn arow in syndicate")
                }, 3000);
                if (res.response[0].get_syndicate_list.response.peepso_notification_count)
                    this.chatcount = res.response[0].get_syndicate_list.response.peepso_notification_count.data["ps-js-notifications"].count;

                if (this.chatcount > 0) {
                    $(".ctNow").removeClass('pulse');
                }
                if (this.syndArr) {
                    if (this.syndArr.length == 0) {
                        this.viewEmpty = true;
                    }
                    for (var i = 0; i < this.syndArr.length; i++) {
                        this.toggled.push(false);
                    }
                    this.toggled[0] = true;
                }
                // setTimeout(() => {
                //     $(this._syndElements["_results"][0].nativeElement).animate({ height: 200 }, 600, () => { });
                // }, 2000);
                console.log(this.syndArr);
            }
            else {
                this.viewEmpty = true;
            }

        })


    }

    toggleAcc(event: Event, i) {

        // let elem = $(event.target);

        this.appSound.play('buttonClick');
        // let counts = this.syndArr[i].product_group.length
        //   console.log("counts are , ", counts)
        //   document.querySelector('.text');
        this.toggled[i] = !this.toggled[i];
        // if (this._syndElements)
        //     if (this.toggled[i])
        //         $(this._syndElements["_results"][i].nativeElement).animate({ height: 200 }, 200, () => { });
        //     else
        //         setTimeout(() => {
        //             $(this._syndElements["_results"][i].nativeElement).animate({ height: 0 }, 600, () => { });
        //         }, 2000);
        $(this).css("--hei", "500px");
        this.cdRef.detectChanges()

        // this.modifyVars({
        //     '@bgcolor': 'blue',
        //     '@textcolor': 'red'
        //     });   
    }

    checkCardExists() {
        console.log("OffersPage::checkCardExists()");
        let loader = this._showLoader();
        this.srvOffer.getJackpotList().subscribe((data) => {
            console.log("OffersPage::getJackpotList() success", data);
            if (data.response && data.response[0].get_big_jackpot_list) {
                this.jackpotList = data.response[0].get_big_jackpot_list.response;
                this.customerToken = this.jackpotList.customer_token;
            }

            loader.dismiss();

        }, (err) => {
            console.log("OffersPage::getJackpotList() error", err);
            loader.dismiss();
        });
    }


    showPaymentOptions(syndicate) {
        console.log("OffersPage::showPaymentOptions()", syndicate);

        this.appSound.play('buttonClick');

        if (this.customerToken) {
            let opt: string = "location=no,toolbarposition=top";
            let str = 'https://nima.lottosocial.com/webview-auth/?redirect_to=free_reg'
            str += '&customer_id=1970400&customer_token=' + this.customerToken + '&Offer_ID=1188'
            this.iab.create(str, 'blank', opt);
        } else {
            let loader = this._showLoader();
            // get all the cards details
            this.srvOffer.getExistingPaymilCardsDetails().subscribe((data) => {
                console.log("OffersPage::showPaymentOptions() success", data);
                data.response.push({ syndicate: syndicate });
                this.userCards = data.response;
                loader.dismiss();
                this.confirmPayment.togglePopup();
            }, (err) => {
                console.log("OffersPage::showPaymentOptions() error", err);
                loader.dismiss();
            })
        }
    }

    chatNow(i) {
        this.platform.ready().then(() => {
            if (typeof cordova !== 'undefined') {
                const browser = this.iab.create('https://nima.lottosocial.com/webview-auth/?redirect_to=' + this.syndArr[i].peepso_group_url + '&customer_id=' + this.customer_id + '&customer_token=' + this.customerToken + '', '_blank', 'location=no,toolbarposition=top');

            }
        });


    }

    addMembers() {
        this.appSound.play('buttonClick');
    }

    private _showLoader() {
        let loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: `<img src="assets/vid/blue_bg2.gif" style="height:100px!important">`,
        });
        loader.present()
        return loader;
    }
    Invite(sid: any) {
        this.appSound.play('buttonClick');
        console.log(sid);
        this.app.getRootNav().push('InviteFriendsPage', { sid: sid });
    }
    joinSynd() {
        this.appSound.play('buttonClick');
        var tabs: Tabs = this.navCtrl.parent.parent.parent;
        tabs.select(4);
    }


}
