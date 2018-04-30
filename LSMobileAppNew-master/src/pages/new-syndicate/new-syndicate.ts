import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Platform, IonicPage, ViewController } from 'ionic-angular';
import { AppSoundProvider } from '../../providers/app-sound/app-sound';
import { Params } from '../../services/params';

declare var webengage: any;
@IonicPage()
@Component({
  selector: 'page-new-syndicate',
  templateUrl: 'new-syndicate.html'
})
export class NewSyndicatePage implements OnInit {
  tabbarElement: any;
  ngOnInit(): void {
    this.tabbarElement.style.display = 'none';
    this.platform.ready().then((readySource) => {
      var CurrentUserid = localStorage.getItem('appCurrentUserid');
      if (this.platform.is('cordova')) {
        webengage.engage();
        webengage.track('New Syndicate Page', {
          "UserId": CurrentUserid,
        });
      }
    });
  }


  constructor(public navCtrl: NavController,
    public platform: Platform,
    public params: Params,
    public viewCtrl: ViewController,
    public appSound: AppSoundProvider,
    public navParams: NavParams) {
        
    this.tabbarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewSyndicatePage');
  }
  ionViewWillEnter() {
        
    this.tabbarElement.style.display = 'none';
  }
  ionViewWillLeave() {
        
    this.tabbarElement.style.display = 'flex';
  }

  goPage(page: number) {
    this.appSound.play('buttonClick');
    this.navCtrl.push('AddSyndicatePage', { tab: page });
  }
  close() {
    var data = "foo"
    var checkAppbrowser = localStorage.getItem("windowCall");
    if (checkAppbrowser == "true" && checkAppbrowser != undefined && checkAppbrowser !== null) {
      localStorage.removeItem("windowCall")
      //window.history.back();
      this.params.goTab(2)
    }
    else {
      this.viewCtrl.dismiss(data)
    }
  }


}
