import { Component } from '@angular/core';
import { NavController, NavParams, Platform,IonicPage } from 'ionic-angular';

import { Market } from '@ionic-native/market';
@IonicPage()
@Component({
	selector: 'page-update',
	templateUrl: 'update.html',
})
export class UpdatePage {
	tabbarElement: any;

	//spaceBetween:number ;
	constructor(
		private market: Market,
		public navCtrl: NavController) {
		this.tabbarElement = document.querySelector('.tabbar');
		//   this.spaceBetween = Math.floor( platform.width() * -0.14 );

	}

	updateNow() {
		   
		this.tabbarElement.style.display = 'flex';
		this.market.open('com.appv2.lottosocial').then((data) => {
			console.log(data);
		})
		this.navCtrl.pop();
	}
	ionViewWillEnter() {
		this.tabbarElement.style.display = 'none';
	}
	ionViewWillLeave() {
		this.tabbarElement.style.display = 'flex';
	}

}