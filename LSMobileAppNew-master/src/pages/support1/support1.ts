import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { SupportPage } from '../support/support';


/**
 * Generated class for the Support1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-support1',
  templateUrl: 'support1.html',
})
export class Support1Page {
  items;
  constructor(public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  taponitem(i)
  {
    if(i==2)
    {
      this.navCtrl.setRoot(SupportPage);
    }
  }
  close()
  {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Support1Page');
  }

  syndicateManagement(){
 this.navCtrl.setRoot(SupportPage);
  }
  initializeItems() {
    this.items = [
      'Payment Billing and Subscription',
      'Tickets,Lines or Draws',
      'Syndicate Management',
      'Games and Scratch Cards',
      'Vouchers',
      'Accounts',
      'Cancellation'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
   
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}





