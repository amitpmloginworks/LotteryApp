import { Component, ViewChild } from '@angular/core';
import {
	App, Platform, Tabs, NavController, NavParams, AlertController,
	PopoverController, LoadingController, ToastController, IonicPage
} from 'ionic-angular';

import { CacheController } from '../../services/cache_controller';

// import { NewSyndicatePage } from '../new-syndicate/new-syndicate';
import { Params } from '../../services/params';

import { CommonService } from '../../services/common.service';
import { AuthService } from '../../services/auth.service';

import { Transfer } from '@ionic-native/transfer';
import { File, FileEntry } from '@ionic-native/file';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';

import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Camera } from 'ionic-native'
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { AppSoundProvider } from '../../providers/app-sound/app-sound';
declare var $: any;
@IonicPage()
@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html'
})
export class SignupPage {
	toolTipDiv: boolean = false;
	warningPhoneMsg: string;
	passwordMsg: string;
	@ViewChild('tabs') tabsRef: Tabs;
	@ViewChild('animation') input;

	public showPass = false;
	public tabs: Tabs;
	private cache: CacheController
	private imageSrc: string;
	private baseUrl;
	image_name1: any;
	image_name11: string;
	newImage: any;

	public selectedCountry: any = {
		name: "United Kingdom",
		iso2: "gb",
		dialCode: "44",
		priority: 0,
		areaCodes: null
	};
	public countryPopOver: any;
	public warningPassword: boolean = false;
	public warningPhone: boolean = false;
	// public country_number:string = "";

	// public countries:any[];

	public signup = {
		first_name: '',
		last_name: '',
		image: "",
		profile_image_url: "",
		email: "",
		free_reg_msn: '',
		free_reg_pwd: '',
		mobile: '',
		country_code: "",
		uuid: ""
	};


	constructor(
		public app: App,
		private http: Http,
		private file: File,
		private network: Network,
		private storage: Storage,
		public platform: Platform,
		private transfer: Transfer,
		public navCtrl: NavController,
		public navParams: NavParams,
		public appSound: AppSoundProvider,
		public commonSrv: CommonService,
		public alertCtrl: AlertController,
		public toastCtrl: ToastController,

		private popoverCtrl: PopoverController,
		private loadingCtrl: LoadingController,
		public authSrv: AuthService,
		public params: Params,
		private uniqueDeviceID: UniqueDeviceID) {

		console.log('SignupPage', network);

		this.tabs = navCtrl.parent;
		platform.ready().then(() => {
			console.log('ready');
		});
	}

	loadCountries() {
		let loader = this.loadingCtrl.create({
			content: "Please wait..."
		});
		loader.present();

		this.commonSrv.getCountry().subscribe(
			data => {
				loader.dismiss();

				if (data) {
					// this.countries = data.response[0].get_country_code_flag.response.country_code_group;
					// this.selectedCountry = this.countries[0];
					// console.log("countries successful", this.countries);
				}
			},
			err => {
				loader.dismiss();
				console.log("error", err);

				this.alertCtrl.create({
					title: 'Error!!!',
					subTitle: 'Internet disabled or server error.',
					buttons: [
						{
							text: 'OK',
							handler: data => {
								this.platform.exitApp();
							}
						}
					],
					enableBackdropDismiss: false
				});

			}, () => { });

	}

	selectProfileImage() {
		console.log("selectProfileImage");
		this.openGallery()
	}
	private openGallery(): void {
		let cameraOptions = {
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			destinationType: Camera.DestinationType.FILE_URI,
			quality: 70,
			targetWidth: 1000,
			targetHeight: 1000,
			encodingType: Camera.EncodingType.JPEG,
			correctOrientation: true
		}
		Camera.getPicture(cameraOptions).then((fileUri) => {
			this.signup.image = fileUri
			localStorage.setItem("imageUrl", fileUri)

			//this.uploadImage()
			this.uploadPhoto(this.signup.image)
			this.uniqueDeviceID.get()
				.then((uuid: any) => this.signup.uuid = uuid)
				.catch((error: any) => console.log(error));


		}),
			err => console.log(err);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SignupPage');
	}

	presentPopover(ev) {
		console.log('SignupPage::presentPopover	');
		/*
				if (this.countries == null) {
					if (CommonService.countries) {
						this.countries = CommonService.countries
						this.selectedCountry = this.countries[0]
					}else{
						this.loadCountries();
						return;
					}
				}
		*/
		// commented for API being ready
		this.countryPopOver = this.popoverCtrl.create('CountryListPopPage', {
			// countries: this.countries,
			cb: (data) => {
				console.log("on selected country", data);
				this.selectedCountry = data;
				// this.country_number = data.country_code;
			}
		});
		this.countryPopOver.present({ ev: ev });

	}

	showPassword(input: any): any {
		this.appSound.play('buttonClick');
		this.showPass = !this.showPass;
		input.type = input.type === 'password' ? 'text' : 'password';
		if (input.type === 'password') {
			$('#pwd').attr('type', 'password');
			$("input[name='password']").attr('type', 'password');
		}
		else {
			$('#pwd').attr('type', 'text');
			$("input[name='password']").attr('type', 'text');
		}
	}

	uploadImage() {

		let loader = this.loadingCtrl.create({
			spinner: 'hide',
			content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`,
		});
		loader.present();

		this.authSrv.uploadProfilePic(this.signup.image).subscribe(
			(data: any) => {
				loader.dismiss();
				console.log("image upload successful", data);
				this.signup.profile_image_url = data.response.image_name1;
			},
			err => {
				loader.dismiss();
				console.log("image upload error", err);
			},
			() => console.log("image upload complete")
		);

	}

	submitSignup(form: any) {
		this.appSound.play('buttonClick');

		localStorage.setItem('isInstall', "firstTimeInstall");
		var img = localStorage.getItem('userimg');
		this.prepareMobile();
		this.signup.country_code = this.selectedCountry.dialCode;
		this.signup.profile_image_url = img
		console.log("submitSignup", this.signup, form);
		//text and email validation
		if (this.signup.first_name == '' || this.signup.first_name.toLowerCase() == "null") {
			this.warningPhone = true;
			this.warningPhoneMsg = "Please enter your first name."
			// alert('');
			return
		}

		else if (!this.validate_name(this.signup.first_name)) {
			this.warningPhone = true;
			this.warningPhoneMsg = "First name should be alphabets."
			// alert('.');
			return
		}
		else if (this.signup.first_name.length > 20) {
			this.warningPhone = true;
			this.warningPhoneMsg = "First name should be maximum of 20 characters."
			// alert('');
			return
		}

		if (this.signup.last_name == '' || this.signup.last_name.toLowerCase() == "null") {
			this.warningPhone = true;
			this.warningPhoneMsg = "Please enter the surname."
			return
		}
		else if (!this.validate_name(this.signup.last_name)) {
			alert('Surname should be alphabets.');
			return
		}
		else if (this.signup.last_name.length > 20) {
			this.warningPhone = true;
			this.warningPhoneMsg = "Surname should be maximum of 20 characters."
			return;
		}
		if (this.signup.email == '') {
			this.warningPhone = true;
			this.warningPhoneMsg = 'Please enter the email.'
			return;
		}
		else if (!this.validateEmail(this.signup.email)) {
			this.warningPhone = true;
			this.warningPhoneMsg = 'Please enter Valid email..'
			return;

		}
		this.warningPhone = false;
		//phone validation
		if (!this.signup.mobile) {
			this.warningPhone = true;
			this.warningPhoneMsg = "Please enter your mobile number."
			return
		}
		else if (this.signup.mobile != "" && !this.validateNumeric(this.signup.mobile)) {
			this.warningPhone = true;
			this.warningPhoneMsg = "Please enter a valid Mobile Number."
			return

		}
		else if (this.signup.mobile.length < 5) {
			this.warningPhone = true;
			this.warningPhoneMsg = "Mobile number too short, please enter a valid number."
			return
		}
		else if (this.signup.mobile.length > 12) {
			this.warningPhone = true;
			this.warningPhoneMsg = "Mobile number too long, please enter a valid number."
			return
		}


		this.warningPhone = false

		//password validation
		if (this.signup.free_reg_pwd == '') {
			this.passwordMsg = "Please enter your password";
			this.warningPassword = true;
			return
		} else if (this.signup.free_reg_pwd.length < 6) {
			this.passwordMsg = "Password must contain at least 6 characters..";
			this.warningPassword = true;
			return;
		} else if (this.validate_pwd(this.signup.free_reg_pwd) == true) {
			this.passwordMsg = "Password contains invalid characters.";
			this.warningPassword = true;
			return;
		}

		this.warningPassword = false



		let loader = this.loadingCtrl.create({
			spinner: 'hide',
			content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`,
		});
		loader.present();
		//console.log("Before", data);
		this.authSrv.addUser(this.signup).subscribe(
			data => {

				loader.dismiss();

				this.uniqueDeviceID.get()
					.then((uuid: any) => this.signup.uuid = uuid)
					.catch((error: any) => console.log(error));

				console.log("user registration successful", data);

				// show register success message and redirect to login
				try {
					data = data.response;
				} catch (e) {
					data = undefined;
				}

				console.log("After", data);
				if (data.length && data[0].register && data[0].register.response && data[0].register.response.status == "FAIL") {
					// registration failed
					// this.toastCtrl.create({
					// 	message: 'Registration FAILED!',
					// 	duration: 3000,

					// }).present()
					let alert = this.alertCtrl.create({
						title: data[0].register.response.status,
						subTitle: data[0].register.response.message,
						buttons: ['Ok']
					});
					alert.present();


				} else {

					this.onRegistrationSuccess(data)
				}
			},
			err => {
				loader.dismiss();
				console.log("user registration error", err);
			},
			() => console.log("user registration complete")
		);

	}

	onRegistrationSuccess(data: any) {
		console.log('onRegistrationSuccess', data);
		// this.submitLogin();
		if (data.length && data[0].register && data[0].register.response && data[0].register.response.message == "both_exists") {

			let alert = this.alertCtrl.create({
				title: 'Cool!',
				subTitle: "You already have an account with us. We're loggin you in..",
				buttons: [
					{
						text: 'OK',
						handler: () => { this.submitLogin(); }
					}]
			});
			alert.present();
		} else if (data.length && data[0].register && data[0].register.response && data[0].register.response.message == 'msn_exists') {

			let alert = this.alertCtrl.create({
				title: 'Error!',
				subTitle: 'An account with this mobile number already exists, enter correct password to login or try with other new msn',
				buttons: [
					{
						text: 'OK',
						handler: (data) => {
							// this.tabs.select(1)
						}
					}]
			});
			alert.present();
		} else {
			this.getJWTToken(data[0].register.response);
		}

	}

	prepareMobile() {
		let free_reg_msn = this.signup.mobile;
		let msn_len = free_reg_msn.length;
		// var countryData = $('#free_reg_msn').intlTelInput("getSelectedCountryData");/44

		var cc = this.selectedCountry.dialCode.replace('+', '');
		if (free_reg_msn.substr(0, 1) == "0") {
			var p = free_reg_msn.substr(1, msn_len);
			free_reg_msn = cc + p;
		} else if (free_reg_msn.substr(0, cc.length) == cc) {
			var p = free_reg_msn.substr(cc.length, msn_len);
			free_reg_msn = cc + p;
		} else {
			free_reg_msn = cc + free_reg_msn;
		}
		this.signup.free_reg_msn = free_reg_msn;
	}

	phoneValidator(value: string): boolean {
		if (value !== '') {
			if (!value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
				return true;
			}
		}
		return false;
	}

	validate_pwd(name_value) {
		  
		var name_value = name_value.toLowerCase();
		var nameRegex = /[^a-zA-Z0-9]/;
		return nameRegex.test(name_value);
	}



	submitLogin() {
		console.log("submitLogin", this.signup);

		let loader = this.loadingCtrl.create({
			spinner: 'hide',
			content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`,
		});
		loader.present();

		this.authSrv.loginUser(this.selectedCountry.dialCode, this.signup.free_reg_msn, this.signup.free_reg_pwd)
			.subscribe(
				data => {
					loader.dismiss();
					// this.showSuccess();
					console.log("user login successful", data);

					try {
						data = data.response[0].login.response;
					} catch (e) {
						data = undefined;
					}

					// go to home page
					if (data && data.status != 'FAIL') {

						this.getJWTToken(data);
					}
				},
				err => {
					loader.dismiss();
					console.log("user registration error", err);
				},
				() => console.log("user registration complete")
			);
	}

	getJWTToken(data) {
		this.storage.set('DF_EMAIL', data.df_customer_details.email);
		this.storage.set('DF_PASSWORD', data.df_customer_details.pword);
		let loader = this.loadingCtrl.create({
			spinner: 'hide',
			content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`,
		});
		loader.present();

		this.authSrv.getJWTToken(data.df_customer_details.email, data.df_customer_details.pword).subscribe(

			successData => {

				loader.dismiss();

				// go to home page
				CommonService.session = data;
				var datetime = new Date();
				datetime.setHours(datetime.getHours() + 10)
				var ne = this.storage.get("session_ID")
				this.storage.set('session_ID', CommonService.sessionId);
				this.storage.set('user_session_token', successData.session_token);
				CommonService.JWT = successData.session_token;
				this.storage.set('session_token_time', datetime)
				console.log("datetime of token", datetime)
				this.storage.set('user_session_id', successData.session_id);
				this.storage.set('session', JSON.stringify(data))
					.then(
						data => console.log(data),
						error => console.log(error)
					);
				let nav = this.app.getRootNav();
				nav.setRoot('HomePage');

			},
			error => {

				loader.dismiss();
				console.log("user login error", error);

				// show offline
				this.params.setIsInternetAvailable(false);
			},
			() => { }
		);
	}

	goInvited(ev) {
		this.appSound.play('buttonClick');
		let nav = this.app.getRootNav();
		nav.setRoot('SignupInvitedPage');
	}
	goLogin(ev) {
		this.appSound.play('buttonClick');
		this.tabs.select(1);
	}


	// upload file
	private error;
	private loading: any;
	private uploadPhoto(imageFileUri: any): void {
		this.error = null;
		this.loading = this.loadingCtrl.create({
			content: 'Uploading...'
		});

		this.loading.present();

		this.file.resolveLocalFilesystemUrl(imageFileUri)
			.then(entry => (<FileEntry>entry).file(file => this.readFile(file)))
			.catch(err => console.log(err));
	}

	private readFile(file: any) {
		const reader = new FileReader();
		reader.onloadend = () => {
			const imgBlob = new Blob([reader.result], { type: 'image/jpg' });

			this.postData(imgBlob, file.name);
		};
		reader.readAsArrayBuffer(file);
	}

	private postData(blob: any, fileName: string) {
		let server = CommonService.apiUrl +
			CommonService.version + '/upload/?process=profile';

		var extension = fileName.substr(fileName.lastIndexOf('.') + 1);
		let myHeaders: Headers = new Headers();
		myHeaders.set('Authorization',
			'Oauth oauth_consumer_key = "NDes1FKC0Kkg",' +
			'oauth_token="djKnEJjJ7TYw0VJEsxGEtlfg",' +
			'oauth_signature_method="HMAC-SHA1",' +
			'oauth_timestamp="1490087533",' +
			'oauth_nonce="dWL9pr",' +
			'oauth_version="1.0",' +
			'oauth_signature="mQF41gSF7KIuVqzqcI0nSX1UklE%3D"'
		);


		let options = {
			fileKey: fileName,
			fileName: fileName,
			mimeType: "image/" + extension,
			headers: myHeaders
		};

		console.log("SignupPage:: upload image options:", options);
		this.http.post(server, blob, options)
			.catch(err => this.handleError(err))
			.map(response => response.json())
			// .finally(() => console.log('inside finaly'))
			.subscribe((ok) => {
				this.loading.dismiss();
				console.log("uploadPhoto:");
				console.log(ok);
				localStorage.setItem('userimg', ok.response.image_name)
				//this.navCtrl.push(CreateSyndicatePage, {'image': ok.response.image_url});
			});
	}

	private handleError(error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		this.error = errMsg;
		return Observable.throw(errMsg);
	}
	validateNumeric(strValue) {
		var objRegExp = /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;
		return objRegExp.test(strValue);
	}
	validate_name(name_value) {
		var nameRegex = /^[a-zA-Z]+(([\_\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
		var valid_name = name_value.match(nameRegex)
		return valid_name;
	}
	validateEmail(strValue) {
		var objRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return objRegExp.test(strValue);
	}
	toolTipWhy() {
		if (this.toolTipDiv) {
			this.toolTipDiv = false
		}
		else {
			this.toolTipDiv = true
		}
	}
}
