import { Component, ViewChild, OnInit, NgZone } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, LoadingController, AlertController, Tabs } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { YourOffersPage } from '../your-offers/your-offers';
import { SendBonusPage } from '../send-bonus/send-bonus';
import { Params } from '../../services/params';
import { AppSoundProvider } from '../../providers/app-sound/app-sound';
declare var cordova: any;
declare var webengage: any;
import * as $ from "jquery";
@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage implements OnInit {

  myIndex: number;
  ngOnInit(): void {
    this.platform.ready().then((readySource) => {
      var CurrentUserid = localStorage.getItem('appCurrentUserid');
      if (this.platform.is('cordova')) {
        webengage.engage();
        webengage.track('Offers Page', {
          "UserId": CurrentUserid,
        });
      }
    });
  }
  toptab: string = "offer";
  tab1Root: string = "YourOffersPage";
  tab2Root: string = "SendBonusPage";


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private params: Params,
    public appSound: AppSoundProvider,
    public platform: Platform,
    private storage: Storage,
    public navparm: NavParams,
    private iab: InAppBrowser,
    public tab: Tabs) {
    this.myIndex = parseInt(localStorage.getItem("accountsToSendBonus"))
    localStorage.removeItem("accountsToSendBonus")

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }

  tabChange() {
    this.appSound.play('menuClick');
  }
  onSelectTab(tab: any) {
    this.appSound.play('menuClick');
    if (tab == 'store') {
      this.goToStore()
    }
  }


  goToStore() {
    this.appSound.play('menuClick');
    this.storage.get('session')
      .then(
        data => {
          let session: any = JSON.parse(data);
          this.platform.ready().then(() => {
            if (typeof cordova !== 'undefined') {
              var browser = this.iab.create('https://nima.lottosocial.com/webview-auth/?redirect_to=store-new&customer_id=' + session.customer_id + '&customer_token=' + session.customer_token + '', '_blank', 'location=no,toolbarposition=top')
            }
          });
        }, error => {

          this.params.setIsInternetAvailable(false);
          console.log(error)
        }
      );
  }

  ionViewWillEnter() {

  }







}
