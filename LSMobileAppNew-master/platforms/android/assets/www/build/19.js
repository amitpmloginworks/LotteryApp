webpackJsonp([19],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffiliatePopupsPageModule", function() { return AffiliatePopupsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__affiliate_popups__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_voucherList_service__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AffiliatePopupsPageModule = (function () {
    function AffiliatePopupsPageModule() {
    }
    return AffiliatePopupsPageModule;
}());
AffiliatePopupsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__affiliate_popups__["a" /* AffiliatePopupsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__affiliate_popups__["a" /* AffiliatePopupsPage */]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_voucherList_service__["a" /* VoucherService */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__affiliate_popups__["a" /* AffiliatePopupsPage */]
        ]
    })
], AffiliatePopupsPageModule);

//# sourceMappingURL=affiliate-popups.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherService; });
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






var VoucherService = (function () {
    function VoucherService(http, params) {
        this.http = http;
        this.params = params;
        this.customerId = "";
        console.log("VoucherService");
    }
    VoucherService.prototype.getVoucherList = function () {
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
        console.log("getModules", __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session);
        console.log("custome id is ", this.customerId);
        var action = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/voucher/ "
        var parameter = {
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
                    "customer_id": this.customerId
                },
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "20",
                    "screen_id": "20.2",
                    "action": "get_voucher",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_issued_voucher_code",
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
    VoucherService.prototype.getPopUpVoucherData = function (mNumber, code) {
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
        console.log("getModules", __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session);
        console.log("custome id is ", this.customerId);
        var action = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        //let action = "https://nima.lottosocial.com/wp-json/mobi/v2/voucher_validation"
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "20",
                    "screen_id": "20.2",
                    "action": "get_voucher",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "validate_voucher",
                    "customer_id": this.customerId,
                    "voucher": code,
                    "email_address ": "",
                    "mobile_number": mNumber
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    VoucherService.prototype.getPopUpVoucherSucess = function (mNumber, code, gift_status, visitor_id, offer_id) {
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
        var action = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        //let action = "https://nima.lottosocial.com/wp-json/mobi/v2/voucher_claim "
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "20",
                    "screen_id": "20.2",
                    "action": "save_gift_voucher",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "save_gift_voucher",
                    "customer_id": this.customerId,
                    "voucher": code,
                    "mobile_number": mNumber,
                    "gift_status": gift_status,
                    "visitor_id": visitor_id,
                    "offer_id": offer_id,
                    "prosub_id": "",
                    "tp1": "tp1",
                    "tp2": "tp2",
                    "other": "Other"
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    return VoucherService;
}());
VoucherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__params__["a" /* Params */]])
], VoucherService);

//# sourceMappingURL=voucherList_service.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AffiliatePopupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_voucherList_service__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AffiliatePopupsPage = (function () {
    function AffiliatePopupsPage(navCtrl, st, alertCtrl, viewctrl, navParms, voucher_service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.st = st;
        this.alertCtrl = alertCtrl;
        this.viewctrl = viewctrl;
        this.navParms = navParms;
        this.voucher_service = voucher_service;
        this.loadingCtrl = loadingCtrl;
        this.result = [];
        this.resultDate = [];
        this.day = [];
        this.hrs = [];
        this.mins = [];
        this.sec = [];
        this.halfMinFirst = [];
        this.halfMinSecond = [];
        this.halfSecFirst = [];
        this.halfSecSecond = [];
        this.fifteenSec = 900000;
        this.timer0button = 'Subscribe';
        this.TimeLeft = "";
        this.NewTimeLeft = "";
        this.now = new Date().getTime();
        this.finalValue = this.now + this.fifteenSec;
    }
    AffiliatePopupsPage.prototype.dismissPopUp = function (data) {
        this.viewctrl.dismiss(data);
    };
    AffiliatePopupsPage.prototype.done = function () {
    };
    AffiliatePopupsPage.prototype.ionViewWillEnter = function () {
        this.st.newTimer('1sec', 1);
        this.subscribeTimer0();
    };
    AffiliatePopupsPage.prototype.subscribeTimer0 = function () {
        var _this = this;
        if (this.timer0Id) {
            // Unsubscribe if timer Id is defined
            this.st.unsubscribe(this.timer0Id);
            this.timer0Id = undefined;
            this.timer0button = 'Subscribe';
            console.log('timer 0 Unsubscribed.');
        }
        else {
            var UTCstring = (new Date()).toUTCString();
            console.log("dateis iis isisis s ", UTCstring);
            // Subscribe if timer Id is undefined
            // var now = new Date(); 
            // var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
            // console.log("date is ", now.toUTCString())
            this.timer0Id = this.st.subscribe('1sec', function () { return _this.calTime(); });
            this.timer0button = 'Unsubscribe';
            console.log('timer 0 Subscribed.');
        }
        console.log(this.st.getSubscription());
    };
    AffiliatePopupsPage.prototype.calTime = function () {
        var nowLatest = new Date().getTime();
        var delta = Math.floor((nowLatest - this.finalValue) / 1000);
        if (delta < 0) {
            delta = Math.abs(delta);
        }
        var dayCal = Math.floor(delta / 86400);
        delta %= 86400;
        var hourCal = Math.floor(delta / 3600);
        delta %= 3600;
        var minuteCal = Math.floor(delta / 60);
        delta %= 60;
        var secondsCal = Math.floor(delta);
        this.day = (dayCal <= 9) ? '0' + dayCal : dayCal;
        this.hrs = (hourCal <= 9) ? '0' + hourCal : hourCal;
        this.mins = (minuteCal <= 9) ? '0' + minuteCal : minuteCal;
        this.sec = (secondsCal <= 9) ? '0' + secondsCal : secondsCal;
        this.halfMinFirst = String(this.mins).substr(0, 1);
        this.halfMinSecond = String(this.mins).substr(1, 2);
        this.halfSecFirst = String(this.sec).substr(0, 1);
        this.halfSecSecond = String(this.sec).substr(1, 2);
        if (this.now == nowLatest) {
            this.st.unsubscribe(this.timer0Id);
            this.timer0Id = undefined;
        }
    };
    return AffiliatePopupsPage;
}());
AffiliatePopupsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-affiliate-popups',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\affiliate-popups\affiliate-popups.html"*/'<ion-content class="modal-page" text-center ion-fixed padding>\n  <ion-list>\n      <ion-label style="margin-top: 6%; font-size: 16px" text-wrap text-center>INCREASE YOUR WINNING CHANCES TODAY!</ion-label>\n      <ion-item text-wrap align-left no-lines style="padding-top: 10px">\n          <div>\n              <table class="table">\n                  <tr>\n                      <h3 class="text-wrap" style="text-align: center; ">Get 10 EuroMillions lines + 10 UK Millionaire Maker enties + games for only 1... but hurry up this offer expires in: </h3>\n                  </tr>\n              </table>\n          </div>\n      </ion-item>\n      <ion-item no-lines text-wrap>\n          <div style="  margin: 5px; text-align:center">\n              <span class="expButton">{{halfMinFirst}}</span>\n              <span class="expButton">{{halfMinSecond}}</span>\n              <span style="font-size: 40px; font-weight:bold;">:</span>\n              <span class="expButton">{{halfSecFirst}}</span>\n              <span class="expButton">{{halfSecSecond}}</span>\n          </div>\n      </ion-item>\n      <ion-item text-center no-lines>\n          <div class = "text-align-center">\n              <input type="button" value="GET My 10 LINES + GAMES" class="getMy10Line" (click)="done() ">\n          </div>\n          <div  class = "text-align-center padding-top">\n              <p style="text-decoration: none !important;color: #4E85D4; text-align: center; font-size: 15px;\n                  " (click)="dismissPopUp() ">I don\'t want it </p>\n          </div>\n      </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\affiliate-popups\affiliate-popups.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer__["SimpleTimer"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_voucherList_service__["a" /* VoucherService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
], AffiliatePopupsPage);

//# sourceMappingURL=affiliate-popups.js.map

/***/ })

});
//# sourceMappingURL=19.js.map