webpackJsonp([33],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offers__ = __webpack_require__(839);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OffersPageModule = (function () {
    function OffersPageModule() {
    }
    return OffersPageModule;
}());
OffersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__offers__["a" /* OffersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offers__["a" /* OffersPage */]),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__offers__["a" /* OffersPage */]]
    })
], OffersPageModule);

//# sourceMappingURL=offers.module.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_params__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_sound_app_sound__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OffersPage = (function () {
    function OffersPage(navCtrl, navParams, params, appSound, platform, storage, navparm, iab, tab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.params = params;
        this.appSound = appSound;
        this.platform = platform;
        this.storage = storage;
        this.navparm = navparm;
        this.iab = iab;
        this.tab = tab;
        this.toptab = "offer";
        this.tab1Root = "YourOffersPage";
        this.tab2Root = "SendBonusPage";
        this.myIndex = parseInt(localStorage.getItem("accountsToSendBonus"));
        localStorage.removeItem("accountsToSendBonus");
    }
    OffersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            var CurrentUserid = localStorage.getItem('appCurrentUserid');
            if (_this.platform.is('cordova')) {
                webengage.engage();
                webengage.track('Offers Page', {
                    "UserId": CurrentUserid,
                });
            }
        });
    };
    OffersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OffersPage');
    };
    OffersPage.prototype.tabChange = function () {
        this.appSound.play('menuClick');
    };
    OffersPage.prototype.onSelectTab = function (tab) {
        this.appSound.play('menuClick');
        if (tab == 'store') {
            this.goToStore();
        }
    };
    OffersPage.prototype.goToStore = function () {
        var _this = this;
        this.appSound.play('menuClick');
        this.storage.get('session')
            .then(function (data) {
            var session = JSON.parse(data);
            _this.platform.ready().then(function () {
                if (typeof cordova !== 'undefined') {
                    var browser = _this.iab.create('https://nima.lottosocial.com/webview-auth/?redirect_to=store-new&customer_id=' + session.customer_id + '&customer_token=' + session.customer_token + '', '_blank', 'location=no,toolbarposition=top');
                }
            });
        }, function (error) {
            _this.params.setIsInternetAvailable(false);
            console.log(error);
        });
    };
    OffersPage.prototype.ionViewWillEnter = function () {
    };
    return OffersPage;
}());
OffersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-offers',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\offers\offers.html"*/'<ion-tabs tabsPlacement="top" color="primary" (ionChange)="tabChange()" [selectedIndex]="myIndex" >\n    <ion-tab [root]="tab1Root" tabTitle="OFFERS FOR YOU" (ionSelect)="onSelectTab(\'OFFER\')"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="SPEND BONUS CREDIT" (ionSelect)="onSelectTab(\'CREDIT\')"></ion-tab>\n    <!-- <ion-tab  tabTitle="STORE" (ionSelect)="onSelectTab(\'store\')"></ion-tab> -->\n</ion-tabs>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\offers\offers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_5__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Tabs */]])
], OffersPage);

//# sourceMappingURL=offers.js.map

/***/ })

});
//# sourceMappingURL=33.js.map