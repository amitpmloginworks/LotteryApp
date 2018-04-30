import { Component } from '@angular/core';
import { NavController, NavParams, Platform,IonicPage} from 'ionic-angular';

import { Network } from '@ionic-native/network';

import { Params } from '../../services/params';

@IonicPage()
@Component({
  selector: 'page-offline',
  templateUrl: 'offline.html',
})
export class OfflinePage  {
    constructor(
      private params:Params,
      public navCtrl: NavController, 
      private network:Network ) {
    }
  
    checkInternet(){
      console.log("checkInternet()");
  
      if (this.params && this.network.type != "none") {
        this.params.setIsInternetAvailable(this.network.type != "none")
      }
    }
  }
