import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import {
	App, NavController, NavParams, Platform, LoadingController, AlertController,
	ModalController, Content, IonicPage, Tabs
} from 'ionic-angular';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { ActionSheetController } from 'ionic-angular'
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';

import { Params } from '../../services/params';
import { HomeService } from '../../services/service.home';
import { DatabaseService } from '../../services/db.service';
import { CacheController } from '../../services/cache_controller';
import { AccountService } from '../../services/account.service';
import { CommonService } from '../../services/common.service';

import { badgesOs } from '../../services/badges.service';

import { AppSoundProvider } from '../../providers/app-sound/app-sound';
import { Camera } from 'ionic-native'
import { File, FileEntry } from '@ionic-native/file';

import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../../services/auth.service';
import { Tab } from 'ionic-angular/navigation/nav-interfaces';
import { HomePage } from '../home/home';
declare var webengage: any;
declare var isIos: any;
import * as $ from 'jquery';

@IonicPage()
@Component({
	selector: 'page-account',
	templateUrl: 'account.html'
})
export class AccountPage {
	loaded: boolean;
	serialNumber: any;
	badgesLoaded: boolean = false;
	bonusCredit: number;
	rewardPoints: number;
	badgesForYou: any;
	waveShowingAccount: boolean = true;
	@ViewChild(Content) content: Content;
	@ViewChild("homeTabs") homeTabs: Tabs;
	private cache: CacheController;

	private profileProgress: number = 50;
	private refreshCache: boolean = false;
	private unreadCount: number = 0;
	downShowing = 0;
	image_Data: string = "assets/icon/user.svg";
	down_arrow_showing = 0

	winning_balanceAPI;
	reward_pointsAPI;
	bonus_creditAPI;


	private homeMessage: any = {};

	private accountDetails: any = {
		//bonus_credit: 0.00,
		message: "",
		msn: "",
		nick_name: null,
		profile_image: "",
		reward_points: 0,
		winning_balance: 0.00,
		percentage: 0
	};
	buttonLabels = [];
	options: ActionSheetOptions = {

		subtitle: 'Are you sure you want to log out?',
		buttonLabels: this.buttonLabels,
		addCancelButtonWithLabel: 'Cancel',
		addDestructiveButtonWithLabel: 'Log Out',
		// androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
		destructiveButtonLast: true

	};

	constructor(
		public app: App,
		private params: Params,
		private storage: Storage,
		private homepage: HomePage,
		public navParams: NavParams,
		public actionSheetCtrl: ActionSheetController,
		private iab: InAppBrowser,
		public authSrv: AuthService,
		public platform: Platform,
		private srvDb: DatabaseService,
		private _badgesOs: badgesOs,
		private srvHome: HomeService,
		private navCtrl: NavController,
		public appSound: AppSoundProvider,
		private srvAccount: AccountService,
		public modalCtrl: ModalController,
		private loadingCtrl: LoadingController,
		private alertCtrl: AlertController,
		public cdRef: ChangeDetectorRef,
		private file: File,
		private http: Http,
		public commonSrv: CommonService,
		private actionSheet: ActionSheet,
		private tab: Tabs) {
		setTimeout(() => {
			this.lastCalling()
		}, 3000);
	}

	ionViewDidLoad() {

	}

	scrollHandlerAccount(event) {

	}
	delay(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	loadAccountData() {

	}
	updateNickName() {

	}

	logout() {
		console.log("AccountPage::logout");
		this.appSound.play('buttonClick');

		// this.cache.clearDatabaseOnLogout();
		localStorage.removeItem("imageUrl")
		this.storage.remove('session_ID');


		this.storage.remove('session_ID');
		this.storage.remove('user_session_token');
		this.storage.remove('user_session_id');
		this.storage.remove('session');

		this.storage.remove('DF_EMAIL');
		this.storage.remove('DF_PASSWORD');

		localStorage.removeItem("arrow_accountP")
		localStorage.removeItem("affiliateP")
		localStorage.removeItem("affiliate2P")
		localStorage.removeItem("badgeP")
		localStorage.removeItem("chkWinningP")
		localStorage.removeItem("HelpP")
		localStorage.removeItem("redeemP")
		localStorage.removeItem("yourOffersP")
		localStorage.removeItem("yourGamesP")


		this.platform.ready().then((readySource) => {

			if (this.platform.is('cordova')) {
				webengage.engage();
				webengage.user.logout();
			}

		});


		this.storage.remove('session')
			.then(
				data => {
					console.log(data);
					let nav = this.app.getRootNav();
					nav.setRoot('AuthPage', { tab: 1 });
				},
				error => console.log(error)
			);
	}

	showUpdateDetailsModal() {

	}

	openUrl(url: string) {
		this.appSound.play('buttonClick');
		let opt: string = "location=no,toolbarposition=top";
		this.iab.create(url, "_blank", opt);
	}

	goHomePage() {
		this.appSound.play('buttonClick');
		this.params.goHomePage();
	}

	openWebView(str: string) {
		this.appSound.play('buttonClick');
		let opt: string = "location=no,toolbarposition=top";
		this.iab.create(CommonService.sitename + str, 'blank', opt);
	}

	updateNickname(nick) {

	}
	moveToBadgeOs() {

	}
	openCreditModule() {
		this.appSound.play('buttonClick');
		// this.navCtrl.push('OffersPage', { "app": "outside" })
		localStorage.setItem('accountsToSendBonus', '1')
		this.params.goTab(4)
	}
	openGetGamesModule() {
		this.appSound.play('buttonClick');
		localStorage.setItem('accountsToRedeemGame', '1')
		this.params.goTab(3)
	}
	private openGallery() {

	}
	lastCalling() {
		this.waveShowingAccount = false
	}
	uploadImage() {

	}

	selectProfileImage() {

	}
	private error;
	private loading: any;
	private uploadPhoto(imageFileUri: any): void {

	}

	private readFile(file: any) {

	}


	private customerId: string = "";

	uploadAPI_Image(image_url: any) {


	}
	private handleError(error: Response | any) {
		this.loading.dismiss();
		this.appSound.play('Error');
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

	ionViewWillEnter() {
	}
	goToBadgesView(badge: any) {

	}
	presentActionSheet() {
		if (this.platform.is('cordova')) {
			this.actionSheet.show(this.options).then((buttonIndex: number) => {
				console.log('Button pressed: ' + buttonIndex);
				if (buttonIndex == 1) {
					this.logout()
					localStorage.setItem('isAppLogin', null);
				}
			});
		}
		else {
			this.logout()

			localStorage.removeItem('isAppLogin');
		}

	}
	ngOnDestroy() {
		if (!this.cdRef['destroyed'])
			this.cdRef.detach(); // try this
	}

	ionViewWillLeave() {
		var data = $('.profile-picture').attr('src');
		localStorage.setItem('imageUrl', data);
		this.homepage.updateProfilePic(data);
	}


}
