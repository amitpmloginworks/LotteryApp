import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, Events, LoadingController, ToastController, IonicPage } from 'ionic-angular';

import { AccountService } from '../../../services/account.service';
import { AppSoundProvider } from '../../../providers/app-sound/app-sound';
import { Params } from '../../../services/params';
@IonicPage()
@Component({
	selector: 'page-edit-profile-details',
	templateUrl: 'edit-profile-details.html'
})
export class EditProfileDetails {
 
	nickname : any;
	public details = {
		image: "",
		profile_image_url: "",
		email: "",
		free_reg_msn: '',
		free_reg_pwd: '',
		mobile: '',
		country_code: ""
	};

	constructor(public navCtrl: NavController,
		public events: Events,
		private modalCtrl: ModalController,
		private srvAccount: AccountService,
		private params: Params,
		private toastCtrl: ToastController,
		public appSound: AppSoundProvider,
		private loadingCtrl: LoadingController,
		public navParams: NavParams) {

		console.log('EditProfileDetails');

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditProfileDetails');
		this.events.subscribe('edit-profile', accountData => {
			this.details = accountData;
			console.log('EditProfileDetails', this.details);
		}), (Err) => {
			this.appSound.play('Error');
			alert("Error occured")
		}
	}

	closeMe() {
		this.appSound.play('buttonClick');
		console.log('EditProfileDetails::dismiss() ');
		let data = { 'foo': 'bar' };
		this.events.publish('closeMe', data);
	}


	submitDetails(detailsForm) {
		this.appSound.play('buttonClick');
		console.log('EditProfileDetails::submitDetails() ', this.details);

		let loader = this.loadingCtrl.create({
			spinner: 'hide',
			content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`,
		});
		loader.present();

		// load data
		this.srvAccount.saveDetails(this.details).take(1)
			.subscribe((data: any) => {
				loader.dismiss();
				if (data) {
					console.log("EditProfileDetails::submitDetails", data);
					let modal = this.modalCtrl.create("ProfileUpdateModalPage", {
						message: data.response[0].update_customer_details.response.message,
						awardIssuedMessage: data.response[0].update_customer_details.response.award_issued_msg
					});
					modal.present();
					modal.onDidDismiss(data => {
						if (data) {
							this.closeMe()
							setTimeout(() => {
								localStorage.setItem('accountsToSendBonus', '1')
								this.params.goTab(4)
							}, 1000);
						}

					})
					// let toaster = this.toastCtrl.create({
					// 	message: data.response[0].update_customer_details.response.message,
					// 	duration: 3000,
					// 	position: 'top'
					// });
					// toaster.present()

				}

			}, err => {
				loader.dismiss();
				this.appSound.play('Error');
				console.log("AccountPage::ionViewDidLoad", err);
			});
	}

	updateNickname(){
		
	}


}
