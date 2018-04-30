webpackJsonp([34],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSyndicatePageModule", function() { return ManageSyndicatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_syndicate__ = __webpack_require__(835);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ManageSyndicatePageModule = (function () {
    function ManageSyndicatePageModule() {
    }
    return ManageSyndicatePageModule;
}());
ManageSyndicatePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__manage_syndicate__["a" /* ManageSyndicatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manage_syndicate__["a" /* ManageSyndicatePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__manage_syndicate__["a" /* ManageSyndicatePage */]
        ]
    })
], ManageSyndicatePageModule);

//# sourceMappingURL=manage-syndicate.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageSyndicatePage; });
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


//import { LeavePage } from '../leave/leave';

var ManageSyndicatePage = (function () {
    function ManageSyndicatePage(navCtrl, appSound, navParams, viewCtrl, modalCtrl, app) {
        this.navCtrl = navCtrl;
        this.appSound = appSound;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.oneOff = false;
        this.syndicate = this.navParams.get("syndicate");
        this.sId = this.syndicate.syndicate_id;
        if (this.syndicate.syndicate_end_date == 'oneoff') {
            this.oneOff = true;
        }
    }
    ManageSyndicatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManageSyndicatePage');
    };
    ManageSyndicatePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    ManageSyndicatePage.prototype.close = function () {
        this.appSound.play('buttonClick');
        this.navCtrl.pop();
    };
    ManageSyndicatePage.prototype.leaveSyndicate = function () {
        var _this = this;
        this.appSound.play('buttonClick');
        var leaveModal = this.modalCtrl.create("LeavePage", { syndId: this.sId, billingDate: this.syndicate.resume_billing_date });
        leaveModal.onDidDismiss(function (data) {
            if (data == 'offerPage')
                _this.viewCtrl.dismiss(data);
        });
        leaveModal.present();
    };
    return ManageSyndicatePage;
}());
ManageSyndicatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-manage-syndicate',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\manage-syndicate\manage-syndicate.html"*/'<!--\n  Generated template for the ManageSyndicate page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mynav">\n    <ion-title>Manage your syndicate</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n          <span class="icon-cross" style="content: url(./assets/img/close.svg);min-width: 14px"></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main-bg">\n  <div class="main-c">\n    <div class="light-header" >SYNDICATE INFO:</div>\n    <div class="main-text-padding" >NAME: <span class="lb">{{syndicate?.syndicate_name}}</span></div>\n    <div class="main-text-padding">CREATED: <span class="lb">{{syndicate?.syndicate_start_date | date:\'shortDate\'}}</span></div>\n    <div class="main-text-padding">END: <span class="lb">{{syndicate.syndicate_end_date}}</span></div>\n    <div class="main-text-padding">MEMBERS: <span class="lb">49</span></div>\n    <div class="bline"></div>\n    <div class="light-header main-text-padding ">PLAYING IN </div>\n    <div class="euro-text-wrapper" >\n        <span>\n            <p *ngFor="let playing of syndicate.product_group" class="tkt-day">{{playing?.product_name | uppercase}}</p>\n          </span>\n      </div>\n    <div class="main-c-text" >10 Euromillions line in every Tuesday and Friday draw</div>\n  </div>\n  <!-- <div class="sub-c"><ion-icon name="ios-help-circle-outline" class="s-ic" style="color: #2F76D1;"></ion-icon>Need help?<ion-icon name="arrow-forward" class="a-ic"></ion-icon></div> -->\n  <div class="sub-c"><span style="content: url(../assets/icon/history-ico.svg); width: 14px;margin-right: 2px;"></span>Recent draws<ion-icon name="arrow-forward" class="a-ic"></ion-icon></div>\n  <div class="sub-c"><span style="content: url(../assets/icon/syndicates_ico.svg); width: 14px;margin-right: 2px;"></span> View tickets<ion-icon name="arrow-forward" class="a-ic"></ion-icon></div>\n  <div class="sub-c">View syndicate agreement<ion-icon name="arrow-forward" class="a-ic"></ion-icon></div>\n  <div *ngIf="syndicate.syndicate_end_date==\'oneoff\'" class="leave-text"> <a (click)="leaveSyndicate()">Leave syndicate</a></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\manage-syndicate\manage-syndicate.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ManageSyndicatePage);

//# sourceMappingURL=manage-syndicate.js.map

/***/ })

});
//# sourceMappingURL=34.js.map