webpackJsonp([40],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyofferPageTipsPageModule", function() { return BuyofferPageTipsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyoffer_page_tips__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { OfferbuyPageModule} from '../../pages/offerbuy/offerbuy.module'
var BuyofferPageTipsPageModule = (function () {
    function BuyofferPageTipsPageModule() {
    }
    return BuyofferPageTipsPageModule;
}());
BuyofferPageTipsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__buyoffer_page_tips__["a" /* BuyofferPageTipsPage */],
        ],
        imports: [
            // OfferbuyPageModule,
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buyoffer_page_tips__["a" /* BuyofferPageTipsPage */]),
        ],
    })
], BuyofferPageTipsPageModule);

//# sourceMappingURL=buyoffer-page-tips.module.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyofferPageTipsPage; });
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


var BuyofferPageTipsPage = (function () {
    function BuyofferPageTipsPage(viewCtr) {
        this.viewCtr = viewCtr;
    }
    BuyofferPageTipsPage.prototype.close = function (data) {
        this.viewCtr.dismiss(data);
    };
    return BuyofferPageTipsPage;
}());
BuyofferPageTipsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-buyoffer-page-tips',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\buyoffer-page-tips\buyoffer-page-tips.html"*/'<ion-content class="modal-page" padding ion-fixed>\n  <ion-list>\n    <ion-row>\n      <ion-col col-12>\n        <iframe style="height: 200px;width: 300px" src="https://www.youtube.com/embed/oAdSzICZBNw" frameborder="0" allowfullscreen></iframe>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button class="game-thanku-btn-transparent" (click)="close()">\n          No, Thanks\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\buyoffer-page-tips\buyoffer-page-tips.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
], BuyofferPageTipsPage);

//# sourceMappingURL=buyoffer-page-tips.js.map

/***/ })

});
//# sourceMappingURL=40.js.map