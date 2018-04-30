import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import {
    App, NavController, Platform, NavParams, PopoverController,
    LoadingController, AlertController, IonicPage, ModalController, Tabs
} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { CommonService } from '../../services/common.service';
import { AuthService } from '../../services/auth.service';
import { Params } from '../../services/params';
import { AppSoundProvider } from '../../providers/app-sound/app-sound';

declare var webengage: any;
declare var $: any;
@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {
    forgetPassResponseText: any;
    mobileValidationError: string;
    wrongPass: boolean = false;
    @ViewChild('animation') input;
    @ViewChild('loginForm') LoginData: any;
    public countryPopOver: any;
    public selectedCountry: any = {
        name: "United Kingdom",
        iso2: "gb",
        dialCode: "44",
        priority: 0,
        areaCodes: null
    };

    public selectedCountryMobile: any = {
        name: "United Kingdom",
        iso2: "gb",
        dialCode: "44",
        priority: 0,
        areaCodes: null
    };
    public countryNumberMobile: string = "";
    public forgotPassPopup = false;
    public forgotPassPopupConfirm = false;
    public forgotPassPopupFail = false;
    public warningPhone = false;
    public warningPhonePopup = false;
    public showPass = false;
    public errorMsg: string = "dfs";

    // public countryes:any[];

    private storageReady: boolean = false;

    public login: any = {
        free_reg_msn: '',
        free_reg_pwd: ''
    };

    constructor(
        public app: App,
        private params: Params,
        private network: Network,
        private storage: Storage,
        public platform: Platform,
        public appSound: AppSoundProvider,
        public authSrv: AuthService,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        public navCtrl: NavController,
        public commonSrv: CommonService,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        private popoverCtrl: PopoverController,
        public cdRef: ChangeDetectorRef,
    ) {

        var a = this.params;
        storage.ready().then(() => this.storageReady = true);

    }

    loadCountries() {
        let loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`,
        });
        loader.present();

        this.commonSrv.getCountry().subscribe(
            data => {
                loader.dismiss();
                console.log("loadCountries", data);
                if (data
                    && data.response[0]
                    && data.response[0].get_country_code_flag
                    && data.response[0].get_country_code_flag.response
                    && data.response[0].get_country_code_flag.response.country_code_group
                ) {

                    // this.countryes = data.response[0].get_country_code_flag.response.country_code_group
                    // this.selectedCountry = this.countryes[0];
                    // this.countryNumber = this.selectedCountry.country_code;
                    // console.log("countries successful", this.countryes);
                }
            },
            err => {
                loader.dismiss();
                console.log("error", err);
                // show offline
                this.params.setIsInternetAvailable(false);

            },
            () => { }
        );

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    presentPopover(ev) {
        this.countryPopOver = this.popoverCtrl.create('CountryListPopPage', {
            cb: (data) => {
                console.log("on selected country", data);
                this.selectedCountry = data;
            }

        });

        this.countryPopOver.present({ ev: ev });
        this.countryPopOver.onDidDismiss((data) => {
            if (data) {

                this.selectedCountryMobile.name = data.name;
                this.selectedCountryMobile.dialCode = data.dialCode;
                this.selectedCountryMobile.iso2 = data.iso2;
            }
        })
    }

    presentPopoverMobile(ev) {

        this.countryPopOver = this.popoverCtrl.create('CountryListPopPage', {
            cb: (data) => {
                console.log("on selected country", data);
                this.selectedCountryMobile = data;
                this.countryNumberMobile = data.dialCode;
            }
        });
        this.countryPopOver.present({ ev: ev });

    }

    backButtonPopupClose() {
        this.appSound.play('buttonClick');
        this.forgotPassPopupConfirm = false;
        this.forgotPassPopupFail = false;
        this.forgotPassPopup = false;
        this.selectedCountryMobile.name = this.selectedCountry.name;
        this.selectedCountryMobile.dialCode = this.selectedCountry.dialCode;
        this.selectedCountryMobile.iso2 = this.selectedCountry.iso2;
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

        // this.cdRef.detectChanges();
    }


    submitLogin() {

        this.appSound.play('buttonClick');
        if (this.LoginData.form.controls.password._value == "") {
            return alert("Enter login details correctly")
        }
        this.prepareMobile();

        this.login.country_code = this.selectedCountry.dialCode;
        console.log("submitLogin", this.login);


        // if (this.phoneValidator(this.login.free_reg_msn)) {
        //     this.warningPhone = true;
        //     return;
        // }
        //   this.warningPhone = false;

        //phone validation

        if (this.login.free_reg_msn == "") {
            this.warningPhone = true;
            this.mobileValidationError = "Please enter your mobile number."
            return
        }
        else if (this.login.free_reg_msn != "" && !this.validateNumeric(this.login.free_reg_msn)) {
            this.warningPhone = true;
            this.mobileValidationError = "Please enter a valid Mobile Number."
            return

        }
        else if (this.login.free_reg_msn.length < 5) {
            this.warningPhone = true;
            this.mobileValidationError = "Mobile number too short, please enter a valid number."
            return
        }
        else if (this.login.free_reg_msn.length > 12) {
            this.warningPhone = true;
            this.mobileValidationError = "Mobile number too long, please enter a valid number."
            return
        }
        // else if (this.login.mobile.substr(0, 2) != "07" && this.login.mobile.substr(0, 2) != "44") {
        //     alert("Please enter a valid UK number starting with 07 or 44");
        // }

        //password validation
        if (this.login.free_reg_pwd == '') {
            alert("Please enter your password")
            return;
        } else if (this.login.free_reg_pwd.length < 6) {
            alert('Password must contain at least 6 characters..')
            return;
        } else if (this.validate_pwd(this.login.free_reg_pwd) == true) {
            alert('Password contains invalid characters.')
            return;
        }


        let loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`,
        });
        loader.present();

        localStorage.setItem('appCurrentUserid', this.login.free_reg_msn);

        this.authSrv.loginUser(this.selectedCountry.dialCode, this.login.free_reg_msn,
            this.login.free_reg_pwd).subscribe(

                data => {

                    console.log("user login successful", data);
                    try {
                        data = data.response[0].login.response;
                        localStorage.setItem('isAppLogin', data);
                    } catch (e) {
                        data = undefined;
                    }

                    console.log("user login data", data);
                    // store in secure storage
                    console.log("is cordova",
                        this.platform.is('cordova'),
                        (data.status != "FAIL"));

                    // get authorization token
                    if (data) {
                        if (data.status != "FAIL") {

                            loader.dismiss();

                            this.getJWTToken(data);

                        } else {

                            loader.dismiss();

                            let alert = this.alertCtrl.create({
                                title: data.status,
                                subTitle: data.message,
                                buttons: ['Ok']
                            });
                            alert.present();



                            // let modal = this.modalCtrl.create('CommonErrorModelPage', { errorInfo: data })
                            // modal.present();
                            // modal.onDidDismiss(data => {
                            //        
                            //     if (data == "signup") {
                            //            
                            //         var tabs: Tabs = this.navCtrl.parent;
                            //         tabs.select(0);

                            //     }
                            // })

                        }
                    }

                },
                err => {

                    loader.dismiss();
                    console.log("user login error", err);

                    // show offline
                    this.params.setIsInternetAvailable(false);
                },
                () => console.log("user login complete")
            );

        this.platform.ready().then((readySource) => {
            if (this.platform.is('cordova')) {
                webengage.engage();
                webengage.user.login(this.login.free_reg_msn);
                webengage.screen("LoginPage")
                webengage.notification.onDismiss((inAppData) => {
                });
                webengage.engage();
            }
        });

    }

    getJWTToken(data) {
        this.storage.set('DF_EMAIL', data.df_customer_details.email);
        this.storage.set('DF_PASSWORD', data.df_customer_details.pword);
        console.log(data)
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
                    .then(() => this.redirectToHome())
                    .catch(e => console.log("login error", e));

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

    redirectToHome() {
        this.navCtrl.setRoot('HomePage');
    }

    submitMobile() {
        let free_reg_msn = "" + this.selectedCountryMobile.dialCode + this.login.mobile;

        console.log("submitMobile", free_reg_msn);
        if (this.phoneValidator(free_reg_msn)) {
            this.warningPhonePopup = true;
            return;
        }
        this.warningPhonePopup = false;

        let loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`,
        });
        loader.present();
        this.authSrv.forgotPassword(this.selectedCountryMobile.dialCode, this.login.mobile).subscribe(
            data => {
                loader.dismiss();
                console.log("successful", data);
                if (data.response[0].forget_password.response.status == "SUCCESS") {
                    this.forgetPassResponseText = data.response[0].forget_password.response.message
                    this.forgotPassPopupConfirm = true;
                    this.forgotPassPopupFail = false;
                }
                else {
                    this.forgotPassPopupConfirm = false;
                    this.forgotPassPopupFail = true;
                    this.forgetPassResponseText = data.response[0].forget_password.response.message
                }

            },
            err => {

                loader.dismiss();
                console.log("error", err);
                this.errorMsg = err;
                this.forgotPassPopupFail = true;
            },
            () => {
                console.log("complete");
            }
        );

    }


    prepareMobile() {
        let free_reg_msn = this.login.mobile;
        let msn_len = free_reg_msn.length;
        // var countryData = $('#free_reg_msn').intlTelInput("getSelectedCountryData");/44

        var cc = this.selectedCountry.dialCode.replace('+', '');
        if (this.login.mobile.substr(0, 1) == "0") {
            var p = this.login.mobile.substr(1, msn_len);
            free_reg_msn = cc + p;
        } else if (free_reg_msn.substr(0, cc.length) == cc) {
            var p = free_reg_msn.substr(cc.length, msn_len);
            free_reg_msn = cc + p;
        } else {
            free_reg_msn = cc + this.login.mobile;
        }
        this.login.free_reg_msn = free_reg_msn;
    }

    phoneValidator(value: string): boolean {
        if (value !== '') {
            if (!value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
                return true;
            }
        }
        return false;
    }
    validateNumeric(strValue) {
        var objRegExp = /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;
        return objRegExp.test(strValue);
    }

    validate_pwd(name_value) {
        var name_value = name_value.toLowerCase();
        var nameRegex = /[^a-zA-Z0-9]/;
        return nameRegex.test(name_value);
    }
    ngOnDestroy() {
        this.cdRef.detach(); // try this
    }
}






