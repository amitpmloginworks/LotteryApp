import { Component } from '@angular/core';
import {IonicPage,NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tandc',
  templateUrl: 'tandc.html'
})
export class TandcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TandcPage');
  }
  ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
  }
  close() {
    this.navCtrl.pop();
  }

}
