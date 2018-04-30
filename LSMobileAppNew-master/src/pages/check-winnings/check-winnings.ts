import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Nav, ViewController, LoadingController, ModalController } from 'ionic-angular';
import { SyndicateService } from '../../providers/syndicate-service';
import { Content, Tabs } from 'ionic-angular'
import { AppSoundProvider } from '../../providers/app-sound/app-sound';
import { Params } from '../../services/params';


@IonicPage()
@Component({
  selector: 'page-check-winnings',
  templateUrl: 'check-winnings.html'
})
export class CheckWinningsPage {
  nav: NavController;
  @ViewChild(Content) content: Content;
  private myWinnings: any = [];
  loader: any;
  downShowing = 0;
  down_arrow_showing = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public appSound: AppSoundProvider,
    public _syndService: SyndicateService,
    public loadingCtrl: LoadingController,
    public cdRef: ChangeDetectorRef, public params: Params,
  ) {
    this.nav = this.app.getRootNav();
    this.loader = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`,
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckWinningsPage');
    this.loadWinnings();
  }
  ionViewWillEnter() {
    //    
    // var tabs: Tabs = this.navCtrl.parent.parent;

  }



  loadWinnings() {
    this.loader.present();
    this._syndService.loadWinnings()
      .subscribe((res) => {
        console.log(res);
        var a = localStorage.getItem("chkWinningP")
        if (localStorage.getItem("chkWinningP") == undefined || localStorage.getItem("chkWinningP") == null) {
          this.down_arrow_showing = 1
        }
        else {
          this.down_arrow_showing = 0
        }
        localStorage.setItem("chkWinningP", "1")
        this.loader.dismiss();
        this.myWinnings = res.response["0"].get_previous_check_list.response.previous_check_group;
        setTimeout(() => {
          this.down_arrow_showing = 0
          this.downShowing = 1
          localStorage.setItem("chkWinningP", "1")
          this.cdRef.detectChanges()
          console.log("value changed for dwn arow in yours offer")
        }, 3000);
        // this.content.enableScrollListener();
      }), (Err) => {
        var a = localStorage.getItem("chkWinningP")
        if (localStorage.getItem("chkWinningP") == undefined || localStorage.getItem("chkWinningP") == null) {
          this.down_arrow_showing = 1
        }
        else {
          this.down_arrow_showing = 0
        }
        setTimeout(() => {
          this.down_arrow_showing = 0
          this.downShowing = 1
          localStorage.setItem("chkWinningP", "1")
          this.cdRef.detectChanges()
          console.log("value changed for dwn arow in yours offer")
        }, 3000);

        this.loader.dismiss();
        this.appSound.play('Error');
        alert("Error occured")
      }
  }




}
