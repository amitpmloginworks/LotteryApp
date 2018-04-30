webpackJsonp([13],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSyndicate2PageModule", function() { return ManageSyndicate2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_syndicate2__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_syndicate_leave_service__ = __webpack_require__(797);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ManageSyndicate2PageModule = (function () {
    function ManageSyndicate2PageModule() {
    }
    return ManageSyndicate2PageModule;
}());
ManageSyndicate2PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__manage_syndicate2__["a" /* ManageSyndicate2Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manage_syndicate2__["a" /* ManageSyndicate2Page */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__manage_syndicate2__["a" /* ManageSyndicate2Page */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_syndicate_leave_service__["a" /* leaveSyndicate */]],
    })
], ManageSyndicate2PageModule);

//# sourceMappingURL=manage-syndicate2.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return leaveSyndicate; });
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






var leaveSyndicate = (function () {
    function leaveSyndicate(http, params) {
        this.http = http;
        this.params = params;
        this.customerId = "";
        console.log("VoucherService");
    }
    leaveSyndicate.prototype.getChkWinningsSlider = function () {
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
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/checkmywin_slider/"
        var parameter = {
            "request": [
                {
                    "page_id": "9",
                    "screen_id": "9..1.1",
                    "module_name": "get_checkmywin_slider",
                    "customer_id": this.customerId
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    leaveSyndicate.prototype.managedSyndicatePause = function (sId) {
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
        //let action = "https://nima.lottosocial.com/wp-json/mobi/v2/privatesyndicate/"
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].sessionId,
                    "action": "leave_private_syndicate",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "12",
                    "screen_id": "12.3",
                    "module_name": "manage_syndicate",
                    "customer_id": this.customerId,
                    "private_syndicate_id": sId,
                    "syndicate_type": "managed",
                    "syndicate_status": "PAUSE"
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    leaveSyndicate.prototype.getSyndicateSize = function (sId, type) {
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
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/syndicate_size/"
        var parameter = {
            "request": [
                {
                    "session_ID": "avjtjgu0f257f0orggqufcn5g2",
                    "action": "manage_syndicate",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "12",
                    "screen_id": "12.5",
                    "module_name": "get_syndicate_size",
                    "customer_id": this.customerId,
                    "syndicate_id": sId,
                    "syndicate_type": type
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    leaveSyndicate.prototype.manageSyndicateLeave = function (sId) {
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
        //let action = "https://nima.lottosocial.com/wp-json/mobi/v2/privatesyndicate/"
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].sessionId,
                    "action": "leave_private_syndicate",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "12",
                    "screen_id": "12.3",
                    "module_name": "manage_syndicate",
                    "customer_id": this.customerId,
                    "syndicate_id": sId,
                    "syndicate_type": "managed",
                    "syndicate_status": "CANCEL"
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    leaveSyndicate.prototype.privateSyndicateMembers = function (sId) {
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
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/member/"
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "5",
                    "screen_id": "5.1",
                    "action": "get syndicate meembers",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_private_syndicate_members",
                    "customer_id": this.customerId,
                    "private_syndicate_id": sId,
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    leaveSyndicate.prototype.privateSyndicateLeave = function (sId) {
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
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/privatesyndicate/"
        var action = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].REDIS_API_URL;
        console.log(action);
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].sessionId,
                    "action": "manage_syndicate",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "12",
                    "screen_id": "12.3",
                    "module_name": "manage_syndicate",
                    "customer_id": this.customerId,
                    "syndicate_id": sId,
                    "syndicate_type": "private",
                    "syndicate_status": "LEAVE"
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    return leaveSyndicate;
}());
leaveSyndicate = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__params__["a" /* Params */]])
], leaveSyndicate);

//# sourceMappingURL=syndicate_leave.service.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageSyndicate2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_syndicate_leave_service__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_sound_app_sound__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageSyndicate2Page = (function () {
    function ManageSyndicate2Page(iab, platform, navCtrl, navParams, appSound, leveSynd, loadingCtrl, viewCtrl, modalCtrl, app) {
        this.iab = iab;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appSound = appSound;
        this.leveSynd = leveSynd;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.dynamicText = "CHECK";
        this.syndicate = this.navParams.get("syndicate");
        this.sId = this.syndicate.syndicate_id;
        if (this.syndicate.syndicate_end_date == 'oneoff') {
            this.oneOff = true;
        }
    }
    ManageSyndicate2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManageSyndicatePage');
    };
    ManageSyndicate2Page.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    ManageSyndicate2Page.prototype.close = function () {
        this.appSound.play('buttonClick');
        this.navCtrl.pop();
    };
    ManageSyndicate2Page.prototype.leaveSyndicate = function () {
        var _this = this;
        this.appSound.play('buttonClick');
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present().then(function () {
            _this.leveSynd.privateSyndicateMembers(_this.sId.syndicate_id).subscribe(function (data) {
                if (data) {
                    loader.dismiss();
                    var leave2Modal = _this.modalCtrl.create('Leave2Page', { syndId: _this.sId, members: data.response[0].get_private_syndicate_members.response });
                    leave2Modal.onDidDismiss(function (data) {
                        console.log(data);
                    });
                    leave2Modal.present();
                }
            });
        });
    };
    ManageSyndicate2Page.prototype.agreement = function () {
        this.appSound.play('buttonClick');
        this.navCtrl.push('TandcPage');
    };
    ManageSyndicate2Page.prototype.viewRecent = function () {
        var _this = this;
        this.appSound.play('buttonClick');
        // this.navCtrl.push('RecentDrawPage');
        var modal = this.modalCtrl.create("RecentDrawPage");
        modal.present();
        modal.onDidDismiss(function () {
            _this.viewCtrl.dismiss().then(function () {
            });
        });
    };
    ManageSyndicate2Page.prototype.viewTicket = function () {
        this.appSound.play('buttonClick');
        this.navCtrl.push('YourTicketsPage');
    };
    ManageSyndicate2Page.prototype.Invite = function () {
        this.appSound.play('buttonClick');
        this.navCtrl.push('InviteFriendsPage');
    };
    ManageSyndicate2Page.prototype.openUrl = function (url) {
        var _this = this;
        this.appSound.play('buttonClick');
        this.platform.ready().then(function () {
            if (typeof cordova !== 'undefined') {
                var browser = _this.iab.create(url, "_blank", 'location=no,toolbarposition=top');
            }
        });
    };
    ManageSyndicate2Page.prototype.getSize = function () {
        var _this = this;
        this.appSound.play('buttonClick');
        this.waveShowingAccount = true;
        this.result = false;
        this.leveSynd.getSyndicateSize(this.sId, this.syndicate.syndicate_type).subscribe(function (data) {
            if (data) {
                if (data.response[0].get_syndicate_size.response.status == "SUCCESS") {
                    _this.waveShowingAccount = false;
                    _this.sizeOfSyndicate = data.response[0].get_syndicate_size.response.syndicate_size;
                    _this.result = true;
                }
                else {
                    _this.waveShowingAccount = false;
                    _this.result = true;
                    _this.dynamicText = "TRY AGAIN";
                }
            }
        });
    };
    return ManageSyndicate2Page;
}());
ManageSyndicate2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-manage-syndicate2',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\manage-syndicate2\manage-syndicate2.html"*/'<ion-header>\n  <ion-navbar class="mynav">\n    <ion-title>Manage your syndicate</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <span class="icon-cross" style="content: url(./assets/img/close.svg);min-width: 14px"></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main-bg">\n  <div class="main-c">\n    <div class="light-header main-text-padding">SYNDICATE INFO:</div>\n    <div class="main-text-padding">NAME:\n      <span class="lb">{{syndicate?.syndicate_name}}</span>\n    </div>\n    <div class="main-text-padding">CREATED:\n      <span class="lb">{{syndicate?.syndicate_start_date | date:\'shortDate\'}}</span>\n    </div>\n    <div class="main-text-padding">END:\n      <span class="lb">{{syndicate.syndicate_end_date}}</span>\n    </div>\n    <div class="main-text-padding">SYNDICATE SIZE:\n      <span class="lb" *ngIf="!waveShowingAccount && !result" (tap)="getSize()">{{dynamicText}}</span>\n      <span *ngIf="waveShowingAccount" class="lb">\n        <span class="tooltip t1">\n          <i class="icon3 icon-chat grey">\n            <span class="dot dot-left"></span>\n            <span class="dot"></span>\n            <span class="dot dot-right"></span>\n          </i>\n        </span>\n      </span>\n      <span *ngIf="result && !waveShowingAccount" class="lb">{{sizeOfSyndicate}}</span>\n    </div>\n    <div class="bline"></div>\n    <div class="light-header main-text-padding">PLAYING IN </div>\n    <div class="product-name-wrapper">\n      <span>\n        <p *ngFor="let playing of syndicate.product_group" class="tkt-day">{{playing?.product_name | uppercase}}</p>\n      </span>\n    </div>\n    <div class="main-text-padding">10 Euromillions line in every Tuesday and Friday draw</div>\n  </div>\n  <!-- <div class="sub-c" (click)="openUrl(\'https://help.lotto-social.com/hc/en-us\')"><ion-icon name="ios-help-circle-outline" class="s-ic" style="color: #2F76D1;"></ion-icon>Need help?<ion-icon name="arrow-forward" class="a-ic"></ion-icon></div> -->\n  <div class="sub-c" (click)="viewRecent()">\n    <!-- <span style="content: url(../assets/icon/history-ico.svg); width: 14px;margin-right: 2px;"></span> -->\n    Recent draws\n    <ion-icon name="arrow-forward" class="a-ic"></ion-icon>\n  </div>\n  <div class="sub-c" (click)="viewTicket()">\n    <!-- <span style="content: url(../assets/icon/syndicates_ico.svg); width: 14px;margin-right: 2px;"></span> -->\n    View tickets\n    <ion-icon name="arrow-forward" class="a-ic"></ion-icon>\n  </div>\n  <!-- <div class="sub-c" (click)="Invite()"><span style="content: url(../assets/icon/group-ico.svg); width: 14px;margin-right: 2px;"></span>Invite friends<ion-icon name="arrow-forward" class="a-ic"></ion-icon></div> -->\n  <!-- <div class="sub-c" style="margin-top: 1px;" (click)="openUrl(\'https://nima.lottosocial.com/webview-auth/?redirect_to=members&customer_id=1970400&customer_token=818113679640\')"><span style="content: url(../assets/icon/chat-ico.svg); width: 14px;margin-right: 2px;"></span>Chat with members<ion-icon name="arrow-forward" class="a-ic"></ion-icon></div> -->\n  <div class="sub-c" (click)="agreement()">View syndicate agreement\n    <ion-icon name="arrow-forward" class="a-ic"></ion-icon>\n  </div>\n  <div class="leave-text-wrap">\n    <a (click)="leaveSyndicate()">Leave syndicate</a>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\manage-syndicate2\manage-syndicate2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_3__services_syndicate_leave_service__["a" /* leaveSyndicate */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ManageSyndicate2Page);

//# sourceMappingURL=manage-syndicate2.js.map

/***/ })

});
//# sourceMappingURL=13.js.map