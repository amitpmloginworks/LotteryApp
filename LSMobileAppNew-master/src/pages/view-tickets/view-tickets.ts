import { Component } from '@angular/core';
import {IonicPage,NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-tickets',
  templateUrl: 'view-tickets.html'
})
export class ViewTicketsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewTicketsPage');
  }
  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }
  close() {
    this.navCtrl.pop();
  }

}
