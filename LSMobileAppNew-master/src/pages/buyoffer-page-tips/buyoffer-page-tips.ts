import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, Platform  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-buyoffer-page-tips',
  templateUrl: 'buyoffer-page-tips.html',
})
export class BuyofferPageTipsPage {

  constructor(public viewCtr:ViewController){

    }
    close(data){
        this.viewCtr.dismiss(data);
    }

}
