webpackJsonp([23],{

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTicketsPageModule", function() { return ViewTicketsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_tickets__ = __webpack_require__(857);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewTicketsPageModule = (function () {
    function ViewTicketsPageModule() {
    }
    return ViewTicketsPageModule;
}());
ViewTicketsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__view_tickets__["a" /* ViewTicketsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_tickets__["a" /* ViewTicketsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__view_tickets__["a" /* ViewTicketsPage */]
        ]
    })
], ViewTicketsPageModule);

//# sourceMappingURL=view-tickets.module.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTicketsPage; });
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


var ViewTicketsPage = (function () {
    function ViewTicketsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ViewTicketsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewTicketsPage');
    };
    ViewTicketsPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    ViewTicketsPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    return ViewTicketsPage;
}());
ViewTicketsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-view-tickets',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\view-tickets\view-tickets.html"*/'<!--\n  Generated template for the ViewTickets page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mynav">\n    <ion-title>Your tickets</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n          <span class="icon-cross" style="content: url(./assets/img/close.svg);min-width: 14px"></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background: black;">\n  <div style="margin-top:12px;">\n    <img src="./assets/img/lines.png" style="width: 100%;" />\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\view-tickets\view-tickets.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
], ViewTicketsPage);

//# sourceMappingURL=view-tickets.js.map

/***/ })

});
//# sourceMappingURL=23.js.map