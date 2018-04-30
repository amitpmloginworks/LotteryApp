import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, AlertController, Platform,IonicPage } from 'ionic-angular';
import { AppSoundProvider } from '../../providers/app-sound/app-sound';

@IonicPage()
@Component({
  selector: 'page-overlaypage',
  templateUrl: 'overlaypage.html',
})
export class OverlaypagePage {
  counter:any = 1;
  constructor(public navCtrl: NavController,
      public alertCtrl: AlertController,
      private viewctrl: ViewController,public appSound: AppSoundProvider,
      private navParms: NavParams, private loadingCtrl: LoadingController) {
  }
  dismissPopUp(data:any=1) {
    this.appSound.play('buttonClick');
      this.viewctrl.dismiss(data);
  }

  closeOverlay(data:any=1) {
    this.appSound.play('buttonClick');
     this.counter++;
     if(this.counter>9)
     {
       this.viewctrl.dismiss(data);
     }
    
  }
}