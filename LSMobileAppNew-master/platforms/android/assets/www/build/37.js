webpackJsonp([37],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesPageModule", function() { return GamesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__games__ = __webpack_require__(832);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GamesPageModule = (function () {
    function GamesPageModule() {
    }
    return GamesPageModule;
}());
GamesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__games__["a" /* GamesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__games__["a" /* GamesPage */]),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__games__["a" /* GamesPage */]]
    })
], GamesPageModule);

//# sourceMappingURL=games.module.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_params__ = __webpack_require__(37);
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





var GamesPage = (function () {
    function GamesPage(platform, params, navParams, appSound, commonSrv, navCtrl) {
        this.platform = platform;
        this.params = params;
        this.navParams = navParams;
        this.appSound = appSound;
        this.commonSrv = commonSrv;
        this.navCtrl = navCtrl;
        this.tab1Root = "YourGamesPage";
        this.tab2Root = "RedeemGamesPage";
        this.gameGroup = {};
        console.log('GamesPage', this.navParams.data);
        if (this.navParams.data.game) {
            this.gameGroup = this.navParams.data.game.game_group;
        }
        this.myIndex = parseInt(localStorage.getItem("accountsToRedeemGame"));
        localStorage.removeItem("accountsToRedeemGame");
    }
    GamesPage.prototype.ngOnInit = function () {
        var _this = this;
        var CurrentUserid = localStorage.getItem('appCurrentUserid');
        this.platform.ready().then(function (readySource) {
            if (_this.platform.is('cordova')) {
                webengage.engage();
                webengage.track('Game Page', {
                    "UserId": CurrentUserid,
                });
            }
        });
    };
    GamesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GamesPage', this.navParams.data);
    };
    GamesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.commonSrv.trackSegmentPage("Games", "GamesPage").subscribe(function (data) {
            console.log("track segment called");
        }, function (err) {
            _this.appSound.play('Error');
            alert("Error occured");
        }, function () { });
    };
    GamesPage.prototype.tabChange = function () {
        this.appSound.play('menuClick');
    };
    return GamesPage;
}());
GamesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-games',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\games\games.html"*/'<ion-tabs tabsPlacement="top" color="primary" (ionChange)="tabChange()" [selectedIndex]="myIndex">\n    <ion-tab [root]="tab1Root" tabTitle="MY GAMES" [rootParams]="gameGroup"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="GET GAMES"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\games\games.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__services_params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_2__services_common_service__["a" /* CommonService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
], GamesPage);

//# sourceMappingURL=games.js.map

/***/ })

});
//# sourceMappingURL=37.js.map