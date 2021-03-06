import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { CommonService } from '../../services/common.service';

import { Params } from '../../services/params';

import { AppSoundProvider } from '../../providers/app-sound/app-sound';
declare var webengage: any;
@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage implements OnInit {

  tab1Root = "YourGamesPage";
  tab2Root = "RedeemGamesPage";

  gameGroup: any = {};
  myIndex: number;

  constructor(
    public platform: Platform,
    private params: Params,
    private navParams: NavParams,
    public appSound: AppSoundProvider,
    public commonSrv: CommonService,
    private navCtrl: NavController) {

    console.log('GamesPage', this.navParams.data);
    if (this.navParams.data.game) {
      this.gameGroup = this.navParams.data.game.game_group;
    }
    this.myIndex = parseInt(localStorage.getItem("accountsToRedeemGame"))
    localStorage.removeItem("accountsToRedeemGame")

  }
  ngOnInit(): void {
    var CurrentUserid = localStorage.getItem('appCurrentUserid');
    this.platform.ready().then((readySource) => {
      if (this.platform.is('cordova')) {
        webengage.engage();
        webengage.track('Game Page', {
          "UserId": CurrentUserid,
        });
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage', this.navParams.data);
  }
  ionViewWillEnter() {

    this.commonSrv.trackSegmentPage("Games", "GamesPage").subscribe(
      data => {
        console.log("track segment called");
      },
      err => {
        this.appSound.play('Error');
        alert("Error occured");
      },
      () => { }
    );
  }

  tabChange() {
    this.appSound.play('menuClick');
  }
}