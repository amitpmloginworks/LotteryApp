import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AppSoundProvider } from '../../providers/app-sound/app-sound';


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  showSilde:any=0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appSound: AppSoundProvider) {
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    // setTimeout(() => {
    //   this.showSilde=1;
    // }, 8000);

  }

  goLogin() {
       
    console.log("goLogin");
    this.appSound.play('buttonClick');
    this.navCtrl.push('AuthPage', { tab: 1 });
  }

  goSignup() {
    console.log("goSignup");
    this.appSound.play('buttonClick');
    this.navCtrl.push('AuthPage', { tab: 0 });
  }

}
