webpackJsonp([15],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePasswordModule", function() { return EditProfilePasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_password__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditProfilePasswordModule = (function () {
    function EditProfilePasswordModule() {
    }
    return EditProfilePasswordModule;
}());
EditProfilePasswordModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile_password__["a" /* EditProfilePassword */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile_password__["a" /* EditProfilePassword */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile_password__["a" /* EditProfilePassword */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */]]
    })
], EditProfilePasswordModule);

//# sourceMappingURL=edit-profile-password.module.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__params__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountService = (function () {
    function AccountService(http, params, file) {
        this.http = http;
        this.params = params;
        this.file = file;
        this.customerId = "";
    }
    Object.defineProperty(AccountService, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]]];
        },
        enumerable: true,
        configurable: true
    });
    AccountService.prototype.loadProfile = function () {
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        // let server = CommonService.apiUrl + CommonService.version + '/profile/';
        var server = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].REDIS_API_URL;
        var data = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "7",
                    "screen_id": "7.2",
                    "action": "profile_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_customer_details",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session.customer_id
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        // console.log("AccountService::loadProfile", data);
        var response = this.http.post(server, data, opt).map(function (res) { return res.json(); });
        return response;
    };
    AccountService.prototype.saveDetails = function (details) {
        console.log("saveDetails", details);
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        //let action = CommonService.apiUrl + CommonService.version + '/profile/';
        var action = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].REDIS_API_URL;
        var reqData = {
            "request": [Object.assign({
                    "session_ID": "avjtjgu0f257f0orggqufcn5g2",
                    "page_ID": "7",
                    "screen_id": "7.3",
                    "action": "update_customer_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "update_customer_details",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session.customer_id
                }, details)]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log("saveDetails", reqData);
        var response = this.http.post(action, reqData, opt).map(function (res) { return res.json(); });
        return response;
    };
    AccountService.prototype.saveImageUrl = function (image_url) {
        console.log("inside voucher list");
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        this.customerId = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session.customer_id;
        var action = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].REDIS_API_URL;
        //let action = "https://nima.lottosocial.com/wp-json/mobi/v2/profile/"
        var parameter = {
            "request": [
                {
                    "session_ID": "avjtjgu0f257f0orggqufcn5g2",
                    "page_ID": "7",
                    "screen_id": "7.5",
                    "action": "profile_pwd_update",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "update_customer_profile",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session.customer_id,
                    "profile_image_url": image_url,
                }
            ]
        };
        var a = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session.customer_id;
        var b = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].sessionId;
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    AccountService.prototype.saveEmail = function (details) {
        console.log("saveDetails", details);
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        // let action = CommonService.apiUrl + CommonService.version + '/profile/';
        var action = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].REDIS_API_URL;
        var reqData = {
            "request": [Object.assign({
                    "session_ID": "avjtjgu0f257f0orggqufcn5g2",
                    "page_ID": "7",
                    "screen_id": "7.4",
                    "action": "profile_email_update",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "update_customer_email",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session.customer_id
                }, details)]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log("saveDetails", reqData);
        var response = this.http.post(action, reqData, opt).map(function (res) { return res.json(); });
        return response;
    };
    AccountService.prototype.updatePassword = function (details) {
        console.log("updatePassword", details);
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        //  let action = CommonService.apiUrl + CommonService.version + '/profile/';
        var action = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].REDIS_API_URL;
        var reqData = {
            "request": [Object.assign({
                    "session_ID": "avjtjgu0f257f0orggqufcn5g2",
                    "page_ID": "7",
                    "screen_id": "7.5",
                    "action": "profile_pwd_update",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "update_customer_password",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session.customer_id
                }, details)]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log("updatePassword", reqData);
        var response = this.http.post(action, reqData, opt).map(function (res) { return res.json(); });
        return response;
    };
    AccountService.prototype.updateNick = function (nick) {
        console.log("updateNick", nick);
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        // let action = CommonService.apiUrl + CommonService.version + '/profile/';
        var action = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].REDIS_API_URL;
        var reqData = {
            "request": [
                {
                    "session_ID": "avjtjgu0f257f0orggqufcn5g2",
                    "page_ID": "7",
                    "screen_id": "7.2",
                    "action": "update_nick",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "update_nick_name",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session.customer_id,
                    "nick_name": nick
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log("updateNick", reqData);
        var response = this.http.post(action, reqData, opt).map(function (res) { return res.json(); });
        return response;
    };
    AccountService.prototype.getLoggedInUser = function () {
        // return firebase.auth().currentUser;
    };
    AccountService.prototype.onAuthStateChanged = function (callback) {
        // return firebase.auth().onAuthStateChanged(callback);
    };
    return AccountService;
}());
AccountService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__params__["a" /* Params */],
        File])
], AccountService);

//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_sound_app_sound__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_common_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditProfilePassword = (function () {
    function EditProfilePassword(navCtrl, events, navParams, appSound, srvAccount, authSrv, loadingCtrl, commonSrv, popoverCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.navParams = navParams;
        this.appSound = appSound;
        this.srvAccount = srvAccount;
        this.authSrv = authSrv;
        this.loadingCtrl = loadingCtrl;
        this.commonSrv = commonSrv;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.warningPassword = false;
        this.warningPhonePopup = false;
        this.password = {
            current_password: '',
            new_password: '',
            confirm_password: ""
        };
        this.selectedCountry = {
            name: "United Kingdom",
            iso2: "gb",
            dialCode: "44",
            priority: 0,
            areaCodes: null
        };
        this.selectedCountryMobile = {
            name: "United Kingdom",
            iso2: "gb",
            dialCode: "44",
            priority: 0,
            areaCodes: null
        };
        //
        this.warningPasswordMatch = false;
        this.countryNumberMobile = "";
        this.forgotPassPopup = false;
        this.forgotPassPopupConfirm = false;
        this.forgotPassPopupFail = false;
        this.errorMsg = "dfs";
        this.login = {
            free_reg_msn: '',
            free_reg_pwd: ''
        };
    }
    EditProfilePassword.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePassword');
    };
    EditProfilePassword.prototype.submitPassword = function (passwordForm) {
        var _this = this;
        this.appSound.play('buttonClick');
        console.log('EditProfilePassword::submitEmail() ', this.password);
        if (this.password.current_password == "") {
            this.warningPassword = true;
            this.warningPasswordText = "Please enter the current password";
            return;
        }
        if (this.password.new_password == "") {
            this.warningPassword = true;
            this.warningPasswordText = "Please enter the new password";
            return;
        }
        if (this.password.new_password.length < 6) {
            this.warningPasswordText = "Password must contain at least 6 characters..";
            this.warningPassword = true;
            return;
        }
        if (this.validate_pwd(this.password.new_password) == true) {
            this.warningPasswordText = "Password contains invalid characters.";
            this.warningPassword = true;
            return;
        }
        if (this.password.confirm_password == "") {
            this.warningPassword = true;
            this.warningPasswordText = "Please enter the new password again";
            return;
        }
        this.warningPassword = false;
        if (this.password.new_password != this.password.confirm_password) {
            this.warningPasswordMatch = true;
            return;
        }
        else {
            this.warningPasswordMatch = false;
        }
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        // load data
        this.srvAccount.updatePassword(this.password).take(1)
            .subscribe(function (success) {
            loader.dismiss();
            console.log("EditProfilePassword::submitPassword", success);
            if (success) {
                var res = success.response[0].update_customer_password.response;
                console.log("EditProfilePassword::submitPassword", res);
                var alert_1 = _this.alertCtrl.create({
                    title: res.status,
                    subTitle: res.message,
                    buttons: [
                        {
                            text: 'Dismiss',
                            role: 'Dismiss',
                        }
                    ],
                    cssClass: 'edit-pswd-alertBtn',
                });
                alert_1.present();
            }
        }, function (err) {
            loader.dismiss();
            _this.appSound.play('Error');
            console.log("EditProfilePassword::submitPassword", err);
        });
    };
    EditProfilePassword.prototype.loadCountries = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        this.commonSrv.getCountry().subscribe(function (data) {
            loader.dismiss();
            console.log("loadCountries", data);
            if (data
                && data.response[0]
                && data.response[0].get_country_code_flag
                && data.response[0].get_country_code_flag.response
                && data.response[0].get_country_code_flag.response.country_code_group) {
                // this.countryes = data.response[0].get_country_code_flag.response.country_code_group
                // this.selectedCountry = this.countryes[0];
                // this.countryNumber = this.selectedCountry.country_code;
                // console.log("countries successful", this.countryes);
            }
        }, function (err) {
            loader.dismiss();
            console.log("error", err);
            // show offline
            // this.params.setIsInternetAvailable(false);
        }, function () { });
    };
    EditProfilePassword.prototype.presentPopover = function (ev) {
        var _this = this;
        this.countryPopOver = this.popoverCtrl.create('CountryListPopPage', {
            cb: function (data) {
                console.log("on selected country", data);
                _this.selectedCountry = data;
            }
        });
        this.countryPopOver.present({ ev: ev });
        this.countryPopOver.onDidDismiss(function (data) {
            if (data) {
                _this.selectedCountryMobile.name = data.name;
                _this.selectedCountryMobile.dialCode = data.dialCode;
                _this.selectedCountryMobile.iso2 = data.iso2;
            }
        });
    };
    EditProfilePassword.prototype.forgotPassword = function (ev) {
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
    };
    EditProfilePassword.prototype.submitMobile = function () {
        var _this = this;
        var free_reg_msn = "" + this.selectedCountryMobile.dialCode + this.login.mobile;
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
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        this.authSrv.forgotPassword(this.selectedCountryMobile.dialCode, this.login.mobile).subscribe(function (data) {
            loader.dismiss();
            console.log("successful", data);
            if (data.response[0].forget_password.response.status == "SUCCESS") {
                _this.forgetPassResponseText = data.response[0].forget_password.response.message;
                _this.forgotPassPopupConfirm = true;
                _this.forgotPassPopupFail = false;
            }
            else {
                _this.forgotPassPopupConfirm = false;
                _this.forgotPassPopupFail = true;
                _this.forgetPassResponseText = data.response[0].forget_password.response.message;
            }
        }, function (err) {
            loader.dismiss();
            console.log("error", err);
            // show offline
            _this.errorMsg = err;
            _this.forgotPassPopupFail = true;
            // this.forgotPassPopupConfirm = true;
            // this.forgotPassPopup = false;
            //  this.params.setIsInternetAvailable(false);
        }, function () {
            console.log("complete");
            //   this.forgotPassPopup = false;
        });
    };
    EditProfilePassword.prototype.presentPopoverMobile = function (ev) {
        var _this = this;
        this.countryPopOver = this.popoverCtrl.create('CountryListPopPage', {
            cb: function (data) {
                console.log("on selected country", data);
                _this.selectedCountryMobile = data;
                _this.countryNumberMobile = data.dialCode;
            }
        });
        this.countryPopOver.present({ ev: ev });
    };
    EditProfilePassword.prototype.closeMe = function () {
        this.appSound.play('buttonClick');
        console.log('EditProfilePassword::dismiss() ');
        var data = { 'foo': 'bar' };
        this.events.publish('closeMe', data);
    };
    EditProfilePassword.prototype.backButtonPopupClose = function () {
        this.appSound.play('buttonClick');
        this.warningPhonePopup = false;
        this.forgotPassPopupConfirm = false;
        this.forgotPassPopupFail = false;
        this.forgotPassPopup = false;
    };
    EditProfilePassword.prototype.showPassword = function (input, inputId) {
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
    };
    EditProfilePassword.prototype.phoneValidator = function (value) {
        if (value !== '') {
            if (!value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
                return true;
            }
        }
        return false;
    };
    EditProfilePassword.prototype.validate_pwd = function (name_value) {
        var name_value = name_value.toLowerCase();
        var nameRegex = /[^a-zA-Z0-9]/;
        return nameRegex.test(name_value);
    };
    return EditProfilePassword;
}());
EditProfilePassword = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-edit-profile-password',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\edit-profile\edit-profile-password\edit-profile-password.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Edit Profile</ion-title>\n		<ion-buttons end>\n			<button ion-button clear icon-only (click)="closeMe()">\n				<ion-icon name="md-close"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<form #passForm="ngForm" (ngSubmit)="submitPassword(passwordForm)">\n		<ion-grid>\n			<ion-row>\n				<ion-item>\n					<ion-label stacked>Current password</ion-label>\n					<ion-input #current_password type="password" name="current_password" [(ngModel)]="password.current_password" required="required"\n					 minlength="6" [attr.minlength]="6"></ion-input>\n					<ion-icon item-right *ngIf="showPass;else editEye1" name="ios-eye" (click)="showPassword(current_password)"></ion-icon>\n					<ng-template #editEye1>\n						<ion-icon item-right name="ios-eye-off" (click)="showPassword(current_password,\'current_password\')"></ion-icon>\n					</ng-template>\n\n				</ion-item>\n			</ion-row>\n\n			<ion-row>\n				<ion-item>\n					<ion-label stacked>New password</ion-label>\n					<ion-input #new_password type="password" name="new_password" [(ngModel)]="password.new_password" required minlength="6" [attr.minlength]="6"></ion-input>\n					<ion-icon item-right *ngIf="showPass; else editEye2" name="ios-eye" (click)="showPassword(new_password)"></ion-icon>\n					<ng-template #editEye2>\n						<ion-icon item-right name="ios-eye-off" (click)="showPassword(new_password,\'new_password\')"></ion-icon>\n					</ng-template>\n\n				</ion-item>\n			</ion-row>\n\n			<ion-row>\n				<ion-item>\n					<ion-label stacked>Confirm password</ion-label>\n					<ion-input #confirm_password type="password" name="confirm_password" [(ngModel)]="password.confirm_password" required minlength="6"\n					 [attr.minlength]="6"></ion-input>\n					<ion-icon item-right *ngIf="showPass; else editEye3" name="ios-eye" (click)="showPassword(confirm_password)"></ion-icon>\n					<ng-template #editEye3>\n						<ion-icon item-right name="ios-eye-off" (click)="showPassword(confirm_password,\'confirm_password\')"></ion-icon>\n					</ng-template>\n\n				</ion-item>\n			</ion-row>\n\n		</ion-grid>\n\n\n		<p *ngIf="warningPassword" class="warning">\n			<ion-icon name="ios-warning-outline"> </ion-icon> {{warningPasswordText}}</p>\n		<p *ngIf="warningPasswordMatch" class="warning">\n			<ion-icon name="ios-warning-outline"> </ion-icon> Passwords does not match</p>\n\n		<p>\n			<a text-center class="center" (click)="forgotPassPopup=true;">Forgot Password</a>\n		</p>\n\n		<div padding>\n			<button class="center" type="submit" ion-button text-center full color="secondary">UPdate password</button>\n		</div>\n	</form>\n</ion-content>\n\n\n\n\n<div class="popup" *ngIf="forgotPassPopup" style="z-index: 102;margin-top:188px;">\n	<!-- <ion-backdrop (click)="forgotPassPopup=!forgotPassPopup && warningPhonePopup=!warningPhonePopup " disable-activated="" style="opacity: .5;"\n	 role="presentation" tappable=""></ion-backdrop> -->\n	<ion-backdrop (click)="backButtonPopupClose()" disable-activated="" style="opacity: .5;" role="presentation" tappable=""></ion-backdrop>\n\n	<div class="popover-content center">\n		<ion-card>\n\n			<!-- <ion-list *ngIf="forgotPassPopupFail" class="errorcardGetGame" ion-fixed>\n				<button ion-button icon-only class="successIconBuyGame">\n					<ion-icon style="width:70px; ">\n						<img class="thumbNailImg" src="assets/icon/failed_icon.png"> </ion-icon>\n				</button>\n				<p>An error has occured. Please try again later</p>\n				<ion-row style="padding-top: 5%; height: 45px">\n					<ion-col col-12>\n						<button ion-button outline round class="moveToVoucher" color="light" (click)="closePopup()">Got it</button>\n					</ion-col>\n				</ion-row>\n			</ion-list> -->\n\n\n\n			<div *ngIf="forgotPassPopupFail" class="errorcard">\n				<button ion-button icon-only class="failedBackground btn-card" (click)="backButtonPopupClose()">\n					<ion-icon style="width:50px; ">\n						<img src="assets/icon/failed_icon.png"> </ion-icon>\n				</button>\n				<ion-row text-center>\n					<ion-col col-12 class="messagecolor">\n						{{forgetPassResponseText}}\n						<!-- {{errorMsg}}\n						<br> please try again -->\n					</ion-col>\n				</ion-row>\n				<ion-row style="margin-top: 20px">\n					<ion-col col-12>\n						<button class="failedMoveToVoucherButton btn-move" ion-button outline round color="light" (click)="backButtonPopupClose()">TRY AGAIN</button>\n					</ion-col>\n				</ion-row>\n			</div>\n\n			<div *ngIf="forgotPassPopupConfirm" class="forgot-pass-confirmed">\n				<img class="lotto-logo center" src="assets/icon/check.svg" alt="Check" width="100" height="100" />\n				<p text-center color="light">{{forgetPassResponseText}}</p>\n\n				<div padding>\n					<!-- <button class="center auth-button" style="width:63%" ion-button outline round color="light" (click)="forgotPassPopup=false;">Back to Edit Profile</button> -->\n					<button class="center auth-button" ion-button outline round color="light" (click)="backButtonPopupClose()">Back to login</button>\n\n				</div>\n			</div>\n\n			<div *ngIf="!forgotPassPopupConfirm && !forgotPassPopupFail">\n				<p text-center padding>Enter the mobile number for your account to receive a password reminder</p>\n\n				<form #loginForm="ngForm" (ngSubmit)="submitMobile()">\n					<ion-grid>\n						<ion-row>\n							<ion-col col-2>\n								<ion-item class="remove-inner  country-code-wrapper " (click)="presentPopoverMobile($event)">\n									<span *ngIf="selectedCountryMobile" item-right ion-button clear icon-right class="{{\'flag-icon flag-icon-\' + selectedCountryMobile.iso2 }}"\n									 width="16" height="16"></span>\n									<ion-icon item-right name="arrow-down" class="small-icon"></ion-icon>\n								</ion-item>\n							</ion-col>\n							<ion-col col-10 #popoverText>\n								<ion-item>\n									<ion-input type="tel" name="mobile" [(ngModel)]="login.mobile" placeholder="Enter your mobile number" required></ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n\n					</ion-grid>\n\n					<p *ngIf="warningPhonePopup" class="warning">\n						<ion-icon name="ios-warning-outline"> </ion-icon> Please enter a valid mobile number</p>\n\n					<div padding>\n						<button class="btn btn-positive" type="submit">RECOVER PASSWORD</button>\n						<p>\n							<!-- <a text-center class="center" (click)="backButtonPopupClose()"> -->\n							<a text-center class="center" (click)="backButtonPopupClose()">\n\n								<ion-icon name="ios-arrow-round-back"></ion-icon> Back to Edit Profile.</a>\n						</p>\n					</div>\n				</form>\n			</div>\n		</ion-card>\n	</div>\n\n</div>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\edit-profile\edit-profile-password\edit-profile-password.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */],
        __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__services_common_service__["a" /* CommonService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], EditProfilePassword);

//# sourceMappingURL=edit-profile-password.js.map

/***/ })

});
//# sourceMappingURL=15.js.map