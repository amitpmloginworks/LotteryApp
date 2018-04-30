webpackJsonp([25],{

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyndicateCreatedModalPageModule", function() { return SyndicateCreatedModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__syndicate_created_modal__ = __webpack_require__(852);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SyndicateCreatedModalPageModule = (function () {
    function SyndicateCreatedModalPageModule() {
    }
    return SyndicateCreatedModalPageModule;
}());
SyndicateCreatedModalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__syndicate_created_modal__["a" /* SyndicateCreatedModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__syndicate_created_modal__["a" /* SyndicateCreatedModalPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__syndicate_created_modal__["a" /* SyndicateCreatedModalPage */]
        ]
    })
], SyndicateCreatedModalPageModule);

//# sourceMappingURL=syndicate-created-modal.module.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyndicateCreatedModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_sound_app_sound__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SyndicateCreatedModalPage = (function () {
    function SyndicateCreatedModalPage(navCtrl, appSound, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.appSound = appSound;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.sname = this.navParams.get('s_name');
    }
    SyndicateCreatedModalPage.prototype.ionViewDidLoad = function () {
        this.deviceHeight = window.screen.height;
        var h = $('.m-div3').height();
        this.topmar = (this.deviceHeight - h) / 2;
    };
    SyndicateCreatedModalPage.prototype.dismissm = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    SyndicateCreatedModalPage.prototype.agree = function () {
        var _this = this;
        var data = { 'foo': 'bar' };
        this.appSound.play('buttonClick');
        this.viewCtrl.dismiss(data).then(function () {
            _this.navCtrl.push('CreateSyndicate5Page');
        });
        //this.navCtrl.push(TabsPage);
        //this.app.getRootNav().push(TabsPage); 
        //  this.navCtrl.setRoot(TabsPage, {tabIndex: 1})
        //let option = [{tabIndex: 1}]
        //this.navCtrl.popToRoot()
        //this.navCtrl.setRoot(TabsPage, {tabIndex: 1});
    };
    SyndicateCreatedModalPage.prototype.find = function () {
    };
    return SyndicateCreatedModalPage;
}());
SyndicateCreatedModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-syndicate-created-modal',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\syndicate-created-modal\syndicate-created-modal.html"*/'<ion-content style="background-color: rgba(0, 0, 0, 0.6);">\n  <div class="m-div3" style="height:auto; padding: 20px;" [style.margin-top.px]="topmar">\n      <div style="height: 100%; background:#00A651; color:white;border-radius: 3px; padding: 75px 25px;text-align:center">\n        <div style="font-weight: bold;"><img src="./assets/icon/check.svg" style="width:60px;"/></div>\n        <div style="padding: 15px 0;font-size: 16px;">Your Private Syndicate {{sname}} has been created successfully.</div>\n        <div style="padding-bottom: 10px;">\n          <a class="w-anc" (click)="agree()">PROCEED</a>\n        </div>\n        <!--<div>\n          <a class="w-anc" (click)="find()">REDEEM GAMES</a>\n        </div>-->\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\syndicate-created-modal\syndicate-created-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_app_sound_app_sound__["a" /* AppSoundProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], SyndicateCreatedModalPage);

//# sourceMappingURL=syndicate-created-modal.js.map

/***/ })

});
//# sourceMappingURL=25.js.map