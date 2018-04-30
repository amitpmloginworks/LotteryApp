import { Component } from '@angular/core';
import { Platform, AlertController, Modal, ModalController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { SplashPage } from '../pages/splash/splash';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { DatabaseService } from '../services/db.service';
import { CommonService } from '../services/common.service';
import { AuthService } from '../services/auth.service';
import { Params } from '../services/params';
import { OfflinePage } from '../pages/offline/offline';
import { Network } from '@ionic-native/network';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import{ExamplePage} from "../pages/example/example";
import {SupportPage } from '../pages/support/support';
import {Support1Page} from '../pages/support1/support1';
declare let cordova: any;
@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = 'SplashPage';
    noNetworkModal: Modal;

    constructor(
        public http: Http,
        public device: Device,
        private params: Params,
        private network: Network,
        private storage: Storage,
        public platform: Platform,
        public dbSrv: DatabaseService,
        public commonSrv: CommonService,
        public authSrv: AuthService,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,

    ) {

        platform.ready().then((value) => {

            //instabug
            if (this.platform.is('cordova')) {
                cordova.plugins.instabug.activate(
                    {
                        ios: "21c16afbbb7c89d64847aa4ac5d92a86"
                    },
                    "shake",
                    {
                        commentRequired: true,
                        colorTheme: "dark"
                    },
                    function () {
                        console.log("Instabug initialized.");
                    },
                    function (error) {
                        console.log("Instabug could not be initialized - " + error);
                    }
                );
            }

            // StatusBar.hide();
            StatusBar.backgroundColorByHexString('#3478CE');

            this.loadCountries();
            branchInit();
            storage.get('firstTimeLoad').then((firstTimeLoad: any) => {
                console.log('firstTimeLoad storage', firstTimeLoad);
                if (!firstTimeLoad) {
                    authSrv.updateVisitorLog(device.platform + " " + device.version).subscribe(
                        value => {
                            storage.set('firstTimeLoad', value);
                        })
                }
            })

            CommonService.isOnline = (network.type != "none");
            this.noNetworkModal = this.modalCtrl.create('OfflinePage');
            params.events.subscribe('network', (available) => {
                CommonService.isOnline = available;
                if (available) {
                    this.noNetworkModal.dismiss();
                } else {
                    this.noNetworkModal.present();
                }
            });

            // save current staus of network
            network.onConnect().subscribe(() => {
                CommonService.isOnline = true;
            });
            network.onDisconnect().subscribe(() => {
                CommonService.isOnline = false;
            });
            // network.onchange().subscribe((data)=> {
            //     console.log("network status changed: ", data);
            // });

        });

        platform.resume.subscribe(() => {
            branchInit();
        });

        // Branch initialization
        const branchInit = () => {
            // only on devices
            if (!platform.is('cordova')) { return }
            const Branch = window['Branch'];

            Branch.initSession(data => {
                console.log(data);
                if (data['+clicked_branch_link']) {
                    let link = "";
                    let getModeuleName = data['~referring_link'];

                    let moduleName = getModeuleName.split('/')[3];
                    let containlink = moduleName;
                    if (containlink.search("vouchers") != -1) {
                        containlink = "vouchers";
                        link = 'your-vouchers';

                    }
                    else if (containlink.search("games") != -1) {
                        containlink = "Games";
                        link = 'play-games';

                    }
                    else if (containlink.search("affiliate") != -1) {
                        containlink = "affiliate";
                        link = 'affiliate';

                    }
                    else if (containlink.search("checkwinnings") != -1) {
                        containlink = "checkwinnings";
                        link = 'checkwinnings';
                    }
                    else if (containlink.search("ps") != -1) {
                        this.getdata(getModeuleName)
                        containlink = "ps"
                        link = 'ps'
                    }
                    else if (containlink.search("private") != -1) {
                        containlink = "private"
                        link = 'private'
                    }
                    else {
                        containlink = "vouchers"
                    }
                    var keyword = data['KeyWord']
                    if (keyword == "psInvite") {
                        containlink = "ps"
                        link = 'ps'
                    }
                    // read deep link data on click
                    console.log(data);
                    //set variable if brach ios is call
                    localStorage.setItem('branchIoCall', data);
                    var isLogin = localStorage.getItem('isAppLogin');
                    // if user is not login
                    if (isLogin !== undefined && isLogin !== null && isLogin !== "") {
                        // if user login and already open app then branch io direct redirect page
                        var appFullyLoaded = sessionStorage.getItem('appFullyLoaded');
                        if (appFullyLoaded != undefined && appFullyLoaded !== null && appFullyLoaded !== "" && appFullyLoaded === "true") {
                            localStorage.setItem("windowCall", "true")
                            switch (containlink) {
                                case "vouchers":
                                    localStorage.setItem("voucherCode", data['vouchercode']);
                                    window.location.href = '#/nav/n4/home/nav/n5/tabs/tabs/t0/home/your-vouchers';
                                    break;
                                case "Games":
                                    containlink = ""
                                    localStorage.setItem('gameId', data['gameId'])
                                    window.location.href = '#/nav/n4/' + link + "/" + data['gameId']
                                    break;
                                case "affiliate":
                                    window.location.href = '#/nav/n4/' + link;
                                    break;
                                case "checkwinnings":
                                    link = 'checkwinnings'
                                    window.location.href = '#/nav/n4/home/nav/n5/tabs/tabs/t0/syndicates/syndicates/tabs/t1/c-h-e-c-k-w-i-n-n-i-n-g-s/check-winnings'
                                    break;
                                case "ps":
                                    window.location.href = '#/nav/n4/signup-invited';
                                    break;
                                case "private":
                                    window.location.href = '#/nav/n4/home/nav/n5/tabs/tabs/t0/home/new-syndicate'
                                    break;
                                default:
                                    break;
                            }
                        }
                        else {
                            // check if app is close and allready login then
                            // go for store page and store page will called the 
                            // specific branch io page
                            localStorage.setItem("windowCall", "true")
                            localStorage.setItem('branchIoClicking', 'true');
                            if (containlink == "vouchers")
                                localStorage.setItem("voucherCode", data['vouchercode']);
                            else if (containlink == "Games")
                                localStorage.setItem('gameId', data['gameId'])
                            else if (containlink == "ps") {
                                this.getdata(getModeuleName)
                            }
                            localStorage.setItem('linkUrlPointing', link);
                            localStorage.setItem('branchIoCall', JSON.stringify(data));
                            window.localStorage['branchData'] = data;

                        }
                    }
                }
            });
        }
    }



    routeToHome() {
        console.log("is cordova", this.platform.is('cordova'));
    }

    loadCountries() {

        this.commonSrv.getCountry().subscribe(data => {
            if (data.response) {
                CommonService.countries = data.response[0].get_country_code_flag.response.country_code_group;
            }

            // console.log("countries loaded", CommonService.countries);
            Splashscreen.hide();
        },
            err => {
                // show offline
                this.params.setIsInternetAvailable(false);
            },
            () => { });
    }
    getdata(data: any) {
        var params = new URL(data).searchParams
        var psID = params.get("psId")
        var memberId = params.get("memberId")

        localStorage.setItem("psId", psID);
        // localStorage.setItem("memeberId", data['member_id']);
    }
}
