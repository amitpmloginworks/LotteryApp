webpackJsonp([24],{

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TandcPageModule", function() { return TandcPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tandc__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TandcPageModule = (function () {
    function TandcPageModule() {
    }
    return TandcPageModule;
}());
TandcPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tandc__["a" /* TandcPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tandc__["a" /* TandcPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tandc__["a" /* TandcPage */]
        ]
    })
], TandcPageModule);

//# sourceMappingURL=tandc.module.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TandcPage; });
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


var TandcPage = (function () {
    function TandcPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    TandcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TandcPage');
    };
    TandcPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    TandcPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    return TandcPage;
}());
TandcPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tandc',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\tandc\tandc.html"*/'<!--\n  Generated template for the Tandc page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mynav">\n    <ion-title>Terms and conditions</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n          <span class="icon-cross" style="content: url(./assets/img/close.svg);min-width: 14px"></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main-bg">\n  <div class="main-c">\n    <div style="border-bottom: 1px solid #D8D8D8;padding-bottom: 10px">Agree to terms & conditions before proceeding</div>\n    <div style="font-weight: bold; padding: 10px 0;">Please take some time to read the following terms and agree(at the bottom of thescreen) to continue creating your syndicate.</div>\n    <div style="padding: 10px 0;">your syndicate name will be: Hatchster syndicate Every members in your syndicate will refer and get reffered to it as \'Hatchster syndicate\' \n      unless the syndicate name is changed.</div>\n    <div style="padding: 10px 0">Hatchster syndicate will play on a recuring base meaning that your selected draws(check below) will be played every week until the syndicate is stopped</div>\n    <div style="padding: 10px 0">\'Hatchster syndicate\' is setup as<br/>\n      Your syndicate \'Hatchster syndicate\' will play in the following lotteries:\n      <ul style="-webkit-padding-start: 20px;-webkit-margin-before: 0em;">\n        <li>Euromillions Tuesday</li>\n        <li>Euromillions Friday</li>\n        <li>Lotto Wednessday</li>\n      </ul>      \n    </div>\n    <div>\n      Each member will contribute equally to the syndicate \'Hatchster syndicate\' as follow:\n      <ul style="-webkit-padding-start: 20px;-webkit-margin-before: 0em;">\n        <li>Euromillions Tuesday 1 line(s) (per member)</li>\n        <li>Euromillions Friday 1 line(s) (per member)</li>\n        <li>Lotto Wednessday 2 line(s) (per member)</li>\n      </ul>\n    </div>\n    <div>\n      Every member will be charged &#8356;9 for the total of the draws selected. Breakdown as follows:\n      <ul style="-webkit-padding-start: 20px;-webkit-margin-before: 0em;">\n        <li>Euromillions Tuesday 1 line(s) = &#8356;2.50 </li>\n        <li>Euromillions Friday 1 line(s) = &#8356;2.50</li>\n        <li>Lotto Wednessday 2 line(s) = &#8356;4.00</li>\n      </ul>\n    </div>\n    <div>\n      As you selected an ongoing syndicate every member of the syndicate will be charged as follows:\n      <ul style="-webkit-padding-start: 20px;-webkit-margin-before: 0em;">\n        <li>First round of draw = &#8356;9 charged on the moment of purchase</li>\n        <li>Subsequent draws = &#8356;36 charged every 4 weeks prior the draws occur</li>\n      </ul>\n    </div>\n    <div style="padding: 10px 0">\n      Every member of the syndicate will get an equal share of every winning for the lines purchased regardless of the ownership of the line.<br/>\n      If a member did not contribute with their own line on any given lottery draw they will not recieve their share of winnings as not being part of the syndicate.\n      They will get their share back again once a payment is completed.\n    </div>\n    <div style="padding: 10px 0">\n      For its very nature a syndicate can not be formed by only one person. For this reason LottoSocial reserves the right to be part of your syndicate, and therefore recieve a\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\tandc\tandc.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
], TandcPage);

//# sourceMappingURL=tandc.js.map

/***/ })

});
//# sourceMappingURL=24.js.map