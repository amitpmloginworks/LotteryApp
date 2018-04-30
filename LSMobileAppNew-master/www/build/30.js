webpackJsonp([30],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUpdateModalPageModule", function() { return ProfileUpdateModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_update_modal__ = __webpack_require__(842);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileUpdateModalPageModule = (function () {
    function ProfileUpdateModalPageModule() {
    }
    return ProfileUpdateModalPageModule;
}());
ProfileUpdateModalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile_update_modal__["a" /* ProfileUpdateModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_update_modal__["a" /* ProfileUpdateModalPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__profile_update_modal__["a" /* ProfileUpdateModalPage */]
        ]
    })
], ProfileUpdateModalPageModule);

//# sourceMappingURL=profile-update-modal.module.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileUpdateModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileUpdateModalPage = (function () {
    function ProfileUpdateModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.messageShow = this.navParams.get("message");
        this.awardMsg = this.navParams.get("awardIssuedMessage");
    }
    ProfileUpdateModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileUpdateModalPage');
    };
    ProfileUpdateModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProfileUpdateModalPage.prototype.moveToOffers = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    return ProfileUpdateModalPage;
}());
ProfileUpdateModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile-update-modal',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\profile-update-modal\profile-update-modal.html"*/'<!--\n  Generated template for the ProfileUpdateModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding class="profile-update-modal-page">\n  <div class="buycard">\n    <button ion-button icon-only class="btn-check">\n      <ion-icon class="btn-check-icon">\n        <img src="assets/icon/check_icon.png"> </ion-icon>\n    </button>\n    <div style="text-align: center ;margin-top : 15%;color: white;font-size: 2.5vh">\n      <span>{{messageShow}}</span>\n    </div>\n    <div *ngIf="awardMsg" style="text-align: center ;margin-top : 2%;color: white;font-size: 2.5vh">\n      <span>{{awardMsg}}</span>\n    </div>\n    <ion-row *ngIf="awardMsg">\n      <ion-col col-12>\n        <button ion-button outline round class="btnDissmiss" color="light" (click)="moveToOffers()">MOVE TO OFFERS</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button outline round class="btnDissmiss" color="light" (click)="dismiss()">Close me!!</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\profile-update-modal\profile-update-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
], ProfileUpdateModalPage);

//# sourceMappingURL=profile-update-modal.js.map

/***/ })

});
//# sourceMappingURL=30.js.map