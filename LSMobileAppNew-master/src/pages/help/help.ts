import { Component,ChangeDetectorRef,ViewChild,ElementRef} from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, ModalController,Tabs,ScrollEvent, IonicPage } from 'ionic-angular';
import { Content } from 'ionic-angular'

import { Inject, HostListener } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { DOCUMENT } from "@angular/platform-browser";
import {InAppBrowser} from '@ionic-native/in-app-browser'
import { AppSoundProvider } from '../../providers/app-sound/app-sound';

import {Support1Page} from '../support1/support1';


@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  @ViewChild(Content) content: Content;
  @ViewChild('newDiv') fileInput:ElementRef;
  downShowing = 0;
  down_arrow_showing = 0;
  lottoSocialGamesHalf:any;
  material_icon = 0;
  lottoSocialBonusHalf:any;
  items = [];
  constructor(public navCtrl: NavController,
     private viewctrl:ViewController,
     public appSound: AppSoundProvider,
     public cdRef: ChangeDetectorRef,
    public iab:InAppBrowser,
  public modalCtrl:ModalController) {
    this.lottoSocialGamesHalf="halfLotto"
    this.lottoSocialBonusHalf="halfBonus"
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  // ionViewWillEnter(){
  //   if(this.content.ionScrollStart){
  //     this.scrollHandler(this)
  //   }
  // }
  ionViewWillEnter() {
    // this.content.enableScrollListener();
    var a = localStorage.getItem("HelpP")
    if(localStorage.getItem("HelpP") == undefined || localStorage.getItem("HelpP") == null)
    {
      this.down_arrow_showing = 1
    }
    else{
      this.down_arrow_showing = 0
    }
    localStorage.setItem("HelpP","1")

 }
 openAppBrw(){
  this.appSound.play('buttonClick');
   //let browser = this.iab.create(" https://help.lotto-social.com/hc/en-us","_blank",'location=no,toolbarposition=top')
  //  this.navCtrl.push(Support1Page);
  let supportModal = this.modalCtrl.create(Support1Page);
  supportModal.present(); 
}
  scrollHandler(event){
    this.material_icon = 1
      var innerDiv = document.getElementById('inner').scrollHeight;
      var scrollDiv = document.getElementById('contents').clientHeight;
      
      var valu = scrollDiv + this.content.scrollTop
      // console.log("sdsdsdsdsdsdsds", innerDiv, scrollDiv, valu)
      if (valu > innerDiv) 
      {
        console.log("botom")
        this.downShowing = 1
        this.cdRef.detectChanges();
    }
    else
    {
      this.downShowing = 0
      this.down_arrow_showing = 0
      this.cdRef.detectChanges();
    }
    }
  

  openSyndicatePage(){
    this.appSound.play('buttonClick');
    var tabs: Tabs = this.navCtrl.parent;
      tabs.select(1);
  }
  openGamesPage(){
    this.appSound.play('buttonClick');
    var tabs: Tabs = this.navCtrl.parent;
      tabs.select(3);
  }
  openOfferPage(){
    this.appSound.play('buttonClick');
    var tabs: Tabs = this.navCtrl.parent;
      tabs.select(4);
  }
  changeVal(val){
    this.appSound.play('buttonClick');
    this.lottoSocialGamesHalf = val
  }
  changeValBonus(val){
    this.appSound.play('buttonClick');
    this.lottoSocialBonusHalf = val
  }
 
  close(){
    this.viewctrl.dismiss();
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}

