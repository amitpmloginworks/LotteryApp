webpackJsonp([16],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileEmailModule", function() { return EditProfileEmailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_email__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditProfileEmailModule = (function () {
    function EditProfileEmailModule() {
    }
    return EditProfileEmailModule;
}());
EditProfileEmailModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile_email__["a" /* EditProfileEmail */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile_email__["a" /* EditProfileEmail */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile_email__["a" /* EditProfileEmail */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */]]
    })
], EditProfileEmailModule);

//# sourceMappingURL=edit-profile-email.module.js.map

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

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileEmail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_sound_app_sound__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProfileEmail = (function () {
    function EditProfileEmail(events, navParams, navCtrl, srvAccount, appSound, loadingCtrl, alertCtrl, modalCtrl) {
        this.events = events;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.srvAccount = srvAccount;
        this.appSound = appSound;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.email = {
            current_email: "",
            new_email: "",
            confirm_email: "",
            current_password: ""
        };
        this.warningEmail = false;
        console.log('EditProfileEmail ', navParams.data);
        this.email.current_email = navParams.data.accountData.email_address;
    }
    EditProfileEmail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfileEmail');
    };
    EditProfileEmail.prototype.submitEmail = function (emailForm) {
        var _this = this;
        this.appSound.play('buttonClick');
        console.log('EditProfileEmail::submitEmail() ', this.email);
        if (this.email.new_email != this.email.confirm_email) {
            this.warningEmail = true;
            return;
        }
        else {
            this.warningEmail = false;
        }
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        // load data
        this.srvAccount.saveEmail(this.email).take(1)
            .subscribe(function (success) {
            loader.dismiss();
            console.log("EditProfileDetails::submitDetails", success);
            if (success) {
                var res = success.response[0].update_customer_email.response;
                console.log("EditProfileDetails::submitDetails", res);
                var modal = _this.modalCtrl.create("ProfileUpdateModalPage", {
                    message: res.message,
                    awardIssuedMessage: res.award_issued_msg,
                });
                modal.present();
                // let alert = this.alertCtrl.create({
                // 	title: res.status,
                // 	subTitle: res.message,
                // 	buttons: ['Dismiss']
                // });
                // alert.present();
            }
        }, function (err) {
            loader.dismiss();
            _this.appSound.play('Error');
            console.log("AccountPage::ionViewDidLoad", err);
        });
    };
    EditProfileEmail.prototype.closeMe = function () {
        this.appSound.play('buttonClick');
        console.log('EditProfileEmail::dismiss() ');
        var data = { 'foo': 'bar' };
        this.events.publish('closeMe', data);
    };
    EditProfileEmail.prototype.showPassword = function (input, inputId) {
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
    return EditProfileEmail;
}());
EditProfileEmail = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-edit-profile-email',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\edit-profile\edit-profile-email\edit-profile-email.html"*/'\n<ion-header>\n    \n      <ion-navbar>\n        <ion-title>Edit Profile</ion-title>\n        <ion-buttons end>\n            <button ion-button clear icon-only (click)="closeMe()">\n                <ion-icon name="md-close" ></ion-icon>\n            </button>\n        </ion-buttons>\n      </ion-navbar>\n    </ion-header>\n    \n    <ion-content >\n        <form #emailForm="ngForm" (ngSubmit)="submitEmail(emailForm)">\n        <ion-grid>	\n        <ion-row>\n            <ion-item>\n                <ion-label stacked>Current email</ion-label>\n                <ion-input type="email" name="current_email" [disabled]="true" [(ngModel)]="email.current_email" placeholder="" required></ion-input>\n            </ion-item>\n        </ion-row>\n    \n        <ion-row>\n            <ion-item>\n                <ion-label stacked>New email</ion-label>\n                <ion-input type="email" name="new_email" [(ngModel)]="email.new_email" required></ion-input>\n            </ion-item>\n        </ion-row>\n    \n        <ion-row>\n            <ion-item>\n                <ion-label stacked>Confirm email</ion-label>\n                <ion-input type="email" name="confirm_email" [(ngModel)]="email.confirm_email" required></ion-input>\n            </ion-item>\n        </ion-row>\n    \n        <ion-row >\n            <ion-item>\n                <ion-label stacked>Confirm password</ion-label>\n                <ion-input #current_password type="password" name="current_password" [(ngModel)]="email.current_password" required minlength="6" [attr.minlength]="6" ></ion-input>\n                <ion-icon item-right *ngIf="showPass" name="ios-eye" (click)="showPassword(current_password)"></ion-icon>\n                <ion-icon item-right *ngIf="!showPass" name="ios-eye-off" (click)="showPassword(current_password,\'current_password\')"></ion-icon>\n            </ion-item>\n    \n            <p>* At least 6 characters. No special characters allowed.</p>\n        </ion-row>\n    \n        </ion-grid>\n    \n        <p *ngIf="warningEmail" class="warning"><ion-icon name="ios-warning-outline"> </ion-icon> Email does not match</p>\n        \n    \n        <div padding>\n            <button class="center" type="submit" ion-button text-center full color="secondary" >UPDATE email</button>\n        </div>\n    \n        </form>\n    </ion-content>\n    '/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\edit-profile\edit-profile-email\edit-profile-email.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */],
        __WEBPACK_IMPORTED_MODULE_2__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
], EditProfileEmail);

//# sourceMappingURL=edit-profile-email.js.map

/***/ })

});
//# sourceMappingURL=16.js.map