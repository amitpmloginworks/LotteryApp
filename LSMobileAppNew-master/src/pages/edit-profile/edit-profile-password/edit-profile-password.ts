import { Component } from '@angular/core';
import { NavController, NavParams, Events, LoadingController, PopoverController, AlertController, IonicPage } from 'ionic-angular';
import { AppSoundProvider } from '../../../providers/app-sound/app-sound';
import { AccountService } from '../../../services/account.service';
import { AuthService } from '../../../services/auth.service';
import { CommonService } from '../../../services/common.service';
declare var $: any;
@IonicPage()
@Component({
    selector: 'page-edit-profile-password',
    templateUrl: 'edit-profile-password.html'
})
export class EditProfilePassword {
    warningPassword: boolean = false;
    warningPasswordText: any;
    warningPhonePopup: boolean = false;
    forgetPassResponseText: any;
    public password = {
        current_password: '',
        new_password: '',
        confirm_password: ""
    };

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
    //
    warningPasswordMatch: boolean = false;
    public countryNumberMobile: string = "";
    public forgotPassPopup = false;
    public forgotPassPopupConfirm = false;
    public forgotPassPopupFail = false;
    public errorMsg: string = "dfs";

    public login: any = {
        free_reg_msn: '',
        free_reg_pwd: ''
    };
    constructor(public navCtrl: NavController,
        public events: Events,
        public navParams: NavParams,
        public appSound: AppSoundProvider,
        private srvAccount: AccountService,
        public authSrv: AuthService,
        private loadingCtrl: LoadingController,
        public commonSrv: CommonService,
        private popoverCtrl: PopoverController,
        private alertCtrl: AlertController) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EditProfilePassword');
    }

    submitPassword(passwordForm) {
        this.appSound.play('buttonClick');
        console.log('EditProfilePassword::submitEmail() ', this.password);
          
        if (this.password.current_password == "") {
            this.warningPassword = true
            this.warningPasswordText = "Please enter the current password";
            return
        }

        if (this.password.new_password == "") {
            this.warningPassword = true
            this.warningPasswordText = "Please enter the new password";
            return
        }
        if (this.password.new_password.length < 6) {
            this.warningPasswordText = "Password must contain at least 6 characters..";
            this.warningPassword = true
            return;
        }
        if (this.validate_pwd(this.password.new_password) == true) {
            this.warningPasswordText = "Password contains invalid characters.";
            this.warningPassword = true
            return;
        }

        if (this.password.confirm_password == "") {
            this.warningPassword = true
            this.warningPasswordText = "Please enter the new password again";
            return
        }
        this.warningPassword = false



        if (this.password.new_password != this.password.confirm_password) {
            this.warningPasswordMatch = true;
            return;
        } else {
            this.warningPasswordMatch = false;
        }

        let loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`,
        });
        loader.present();

        // load data
        this.srvAccount.updatePassword(this.password).take(1)
            .subscribe((success: any) => {
                loader.dismiss();

                console.log("EditProfilePassword::submitPassword", success);
                if (success) {
                    let res = success.response[0].update_customer_password.response;

                    console.log("EditProfilePassword::submitPassword", res);


                    let alert = this.alertCtrl.create({
                        title: res.status,
                        subTitle: res.message,
                        buttons: [
                            {
                                text : 'Dismiss',
                                role : 'Dismiss',
                               
                            }
                        ],
                        cssClass : 'edit-pswd-alertBtn',
                    });
                    alert.present();
                }


            }, err => {
                loader.dismiss();
                this.appSound.play('Error');
                console.log("EditProfilePassword::submitPassword", err);
            });
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
                // this.params.setIsInternetAvailable(false);

            },
            () => { }
        );

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

    forgotPassword(ev) {
        // let free_reg_msn = "" + this.selectedCountryMobile.dialCode + this.login.mobile;


        // if (this.phoneValidator(free_reg_msn)) {
        //     this.warningPhonePopup = true;
        //     return;
        // }
        // this.warningPhonePopup = false;

        // let loader = this.loadingCtrl.create({
        //     spinner: 'hide',
        //     content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`,
        // });
        // loader.present();
        // this.authSrv.forgotPassword(this.selectedCountryMobile.dialCode, this.login.mobile).subscribe(
        //     data => {

        //         loader.dismiss();
        //         // this.showSuccess();
        //         console.log("successful", data);
        //         this.forgotPassPopupFail = false;
        //         this.forgotPassPopupConfirm = true;

        //         // go to home page
        //         if (data && data.status != "error") {
        //         } else {
        //         }

        //     },
        //     err => {

        //         loader.dismiss();
        //         console.log("error", err);
        //         // show offline

        //         this.errorMsg = err;
        //         this.forgotPassPopupFail = true;
        //         // this.forgotPassPopupConfirm = true;
        //         // this.forgotPassPopup = false;
        //         //  this.params.setIsInternetAvailable(false);
        //     },
        //     () => {

        //         console.log("complete");
        //         //   this.forgotPassPopup = false;
        //     }
        // );

    }
    submitMobile() {

        let free_reg_msn = "" + this.selectedCountryMobile.dialCode + this.login.mobile;

        console.log("submitMobile", free_reg_msn);
        // if (this.phoneValidator(free_reg_msn)) {
        //     this.warningPhonePopup = true;
        //     return;
        // }
        // this.warningPhonePopup = false;

        if (this.phoneValidator(free_reg_msn)) {
            this.warningPhonePopup = true;
            return;
        }

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
                // show offline

                this.errorMsg = err;
                this.forgotPassPopupFail = true;
                // this.forgotPassPopupConfirm = true;
                // this.forgotPassPopup = false;
                //  this.params.setIsInternetAvailable(false);
            },
            () => {

                console.log("complete");
                //   this.forgotPassPopup = false;
            }
        );

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
    closeMe() {
        this.appSound.play('buttonClick');
        console.log('EditProfilePassword::dismiss() ');
        let data = { 'foo': 'bar' };
        this.events.publish('closeMe', data);
    }
    backButtonPopupClose() {
        this.appSound.play('buttonClick');
        this.warningPhonePopup = false;
        this.forgotPassPopupConfirm = false;
        this.forgotPassPopupFail = false;
        this.forgotPassPopup = false;

    }
    showPassword(input: any, inputId: any) {

        var id = inputId;
        this.appSound.play('buttonClick');
        input.type = input.type === 'password' ? 'text' : 'password';
        if (input.type === 'password') {
            $(id).attr('type', 'password');
            $("input[name=" + id + "]").attr('type', 'password');
        }
        else {
            $(id).attr('type', 'text');
            $("input[name=" + id + "]").attr('type', 'text');
        }
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

}
