import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, App } from 'ionic-angular';
//import { LeavePage } from '../leave/leave';
import { AppSoundProvider } from '../../providers/app-sound/app-sound';
@IonicPage()
@Component({
  selector: 'page-manage-syndicate',
  templateUrl: 'manage-syndicate.html'
})
export class ManageSyndicatePage {
  syndicate: any;
  sId: any;
  oneOff: boolean = false;

  constructor(public navCtrl: NavController, public appSound: AppSoundProvider,
    public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, public app: App) {
    this.syndicate = this.navParams.get("syndicate")
    this.sId = this.syndicate.syndicate_id;
    if (this.syndicate.syndicate_end_date == 'oneoff') {
      this.oneOff = true
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageSyndicatePage');
  }
  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }
  close() {
    this.appSound.play('buttonClick');
    this.navCtrl.pop();
  }
  leaveSyndicate() {
    this.appSound.play('buttonClick');
    let leaveModal = this.modalCtrl.create("LeavePage", { syndId: this.sId, billingDate: this.syndicate.resume_billing_date });
    leaveModal.onDidDismiss(data => {
      if (data == 'offerPage')
        this.viewCtrl.dismiss(data)
    });
    leaveModal.present();
  }

}
