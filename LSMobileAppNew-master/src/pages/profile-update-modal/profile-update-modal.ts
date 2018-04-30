import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile-update-modal',
  templateUrl: 'profile-update-modal.html',
})
export class ProfileUpdateModalPage {

  awardMsg: any;
  messageShow: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.messageShow = this.navParams.get("message");
    this.awardMsg = this.navParams.get("awardIssuedMessage")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileUpdateModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  moveToOffers() {
    let data = { 'foo': 'bar' }
    this.viewCtrl.dismiss(data)
  }

}
