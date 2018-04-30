webpackJsonp([17],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileDetailsModule", function() { return EditProfileDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_details__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditProfileDetailsModule = (function () {
    function EditProfileDetailsModule() {
    }
    return EditProfileDetailsModule;
}());
EditProfileDetailsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile_details__["a" /* EditProfileDetails */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile_details__["a" /* EditProfileDetails */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile_details__["a" /* EditProfileDetails */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */]]
    })
], EditProfileDetailsModule);

//# sourceMappingURL=edit-profile-details.module.js.map

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

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_sound_app_sound__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_params__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfileDetails = (function () {
    function EditProfileDetails(navCtrl, events, modalCtrl, srvAccount, params, toastCtrl, appSound, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.srvAccount = srvAccount;
        this.params = params;
        this.toastCtrl = toastCtrl;
        this.appSound = appSound;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.details = {
            image: "",
            profile_image_url: "",
            email: "",
            free_reg_msn: '',
            free_reg_pwd: '',
            mobile: '',
            country_code: ""
        };
        console.log('EditProfileDetails');
    }
    EditProfileDetails.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EditProfileDetails');
        this.events.subscribe('edit-profile', function (accountData) {
            _this.details = accountData;
            console.log('EditProfileDetails', _this.details);
        }), function (Err) {
            _this.appSound.play('Error');
            alert("Error occured");
        };
    };
    EditProfileDetails.prototype.closeMe = function () {
        this.appSound.play('buttonClick');
        console.log('EditProfileDetails::dismiss() ');
        var data = { 'foo': 'bar' };
        this.events.publish('closeMe', data);
    };
    EditProfileDetails.prototype.submitDetails = function (detailsForm) {
        var _this = this;
        this.appSound.play('buttonClick');
        console.log('EditProfileDetails::submitDetails() ', this.details);
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        // load data
        this.srvAccount.saveDetails(this.details).take(1)
            .subscribe(function (data) {
            loader.dismiss();
            if (data) {
                console.log("EditProfileDetails::submitDetails", data);
                var modal = _this.modalCtrl.create("ProfileUpdateModalPage", {
                    message: data.response[0].update_customer_details.response.message,
                    awardIssuedMessage: data.response[0].update_customer_details.response.award_issued_msg
                });
                modal.present();
                modal.onDidDismiss(function (data) {
                    if (data) {
                        _this.closeMe();
                        setTimeout(function () {
                            localStorage.setItem('accountsToSendBonus', '1');
                            _this.params.goTab(4);
                        }, 1000);
                    }
                });
                // let toaster = this.toastCtrl.create({
                // 	message: data.response[0].update_customer_details.response.message,
                // 	duration: 3000,
                // 	position: 'top'
                // });
                // toaster.present()
            }
        }, function (err) {
            loader.dismiss();
            _this.appSound.play('Error');
            console.log("AccountPage::ionViewDidLoad", err);
        });
    };
    EditProfileDetails.prototype.updateNickname = function () {
    };
    return EditProfileDetails;
}());
EditProfileDetails = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-edit-profile-details',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\edit-profile\edit-profile-details\edit-profile-details.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Edit Profile</ion-title>\n        <ion-buttons end>\n            <button ion-button clear icon-only (click)="closeMe()">\n                <ion-icon name="md-close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <form #detailsForm="ngForm" (ngSubmit)="submitDetails(detailsForm)">\n        <ion-grid>\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label stacked>Title</ion-label>\n                        <ion-select [(ngModel)]="details.title" name=\'title\' interface="popover">\n                            <ion-option value="Mr">Mr</ion-option>\n                            <ion-option value="Mrs">Mrs</ion-option>\n                            <ion-option value="Mrs">Miss</ion-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n                <ion-col class="last-name" col-6>\n                    <ion-item style="margin-top:1% ">\n                        <ion-label stacked>First name</ion-label>\n                        <ion-input type="text" name="first_name" [(ngModel)]="details.first_name" required></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item>\n                    <ion-label stacked>Last name</ion-label>\n                    <ion-input type="text" name="last_name" [(ngModel)]="details.last_name" required></ion-input>\n                </ion-item>\n            </ion-row>\n\n            <ion-row>\n                <ion-item>\n                    <ion-label stacked>Date of birth</ion-label>\n                    <ion-datetime displayFormat="YYYY-MMM-DD" name="dob" pickerFormat="YYYY MMM DD" [(ngModel)]="details.dob"></ion-datetime>\n                    <!-- <ion-input type="text" name="dob" [(ngModel)]="details.dob" required></ion-input> -->\n                </ion-item>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label stacked>Postcode</ion-label>\n                        <ion-input type="text" name="postcode" [(ngModel)]="details.postcode"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col class="last-name" col-6>\n                    <ion-item>\n                        <ion-label stacked>City</ion-label>\n                        <ion-input type="text" name="city" [(ngModel)]="details.city" required></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item>\n                    <ion-label stacked>Address line</ion-label>\n                    <ion-input type="text" name="address1" [(ngModel)]="details.address1" required></ion-input>\n                </ion-item>\n            </ion-row>\n\n            <ion-row>\n                <ion-item>\n                    <ion-input type="text" name="address2" [(ngModel)]="details.address2"></ion-input>\n                </ion-item>\n            </ion-row>\n\n        </ion-grid>\n\n        <p *ngIf="warningPhone" class="warning">\n            <ion-icon name="ios-warning-outline"> </ion-icon> Please enter a valid mobile number</p>\n        <p *ngIf="warningPassword" class="warning">\n            <ion-icon name="ios-warning-outline"> </ion-icon> Please enter a valid password</p>\n\n        <div padding>\n            <button class="center" type="submit" ion-button text-center padding full color="secondary">update details</button>\n        </div>\n    </form>\n    <div class="edit-nickname-wrapper">\n            <ion-row>\n                    <ion-item>\n                        <ion-label stacked>update nickname</ion-label>\n                        <ion-input type="text" name="nickname" [(ngModel)]="nickname" required></ion-input>\n                    </ion-item>\n                </ion-row>\n                <button ion-button class="edit-nickname-update" color="secondary">update</button>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\edit-profile\edit-profile-details\edit-profile-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */],
        __WEBPACK_IMPORTED_MODULE_4__services_params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], EditProfileDetails);

//# sourceMappingURL=edit-profile-details.js.map

/***/ })

});
//# sourceMappingURL=17.js.map