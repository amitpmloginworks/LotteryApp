webpackJsonp([21],{

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageModule", function() { return UpdatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_market__ = __webpack_require__(804);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UpdatePageModule = (function () {
    function UpdatePageModule() {
    }
    return UpdatePageModule;
}());
UpdatePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__update__["a" /* UpdatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update__["a" /* UpdatePage */]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_market__["a" /* Market */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__update__["a" /* UpdatePage */]
        ]
    })
], UpdatePageModule);

//# sourceMappingURL=update.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Market; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(27);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Market
 * @description
 * Opens an app's page in the market place (Google Play, App Store)
 *
 * @usage
 * ```typescript
 * import { Market } from '@ionic-native/market';
 *
 * constructor(private market: Market) { }
 *
 * ...
 *
 * this.market.open('your.package.name');
 *
 * ```
 */
var Market = (function (_super) {
    __extends(Market, _super);
    function Market() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens an app in Google Play / App Store
     * @param appId {string} Package name
     * @return {Promise<any>}
     */
    Market.prototype.open = function (appId) { return; };
    /**
     * Search apps by keyword
     * @param keyword {string} Keyword
     * @return {Promise<any>}
     */
    Market.prototype.search = function (keyword) { return; };
    Market.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Market.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackStyle: 'object',
            successName: 'success',
            errorName: 'failure'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Market.prototype, "open", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackStyle: 'object',
            successName: 'success',
            errorName: 'failure',
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Market.prototype, "search", null);
    Market = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'Market',
            plugin: 'cordova-plugin-market',
            pluginRef: 'cordova.plugins.market',
            repo: 'https://github.com/xmartlabs/cordova-plugin-market',
            platforms: ['Android', 'iOS']
        })
    ], Market);
    return Market;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_market__ = __webpack_require__(804);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdatePage = (function () {
    //spaceBetween:number ;
    function UpdatePage(market, navCtrl) {
        this.market = market;
        this.navCtrl = navCtrl;
        this.tabbarElement = document.querySelector('.tabbar');
        //   this.spaceBetween = Math.floor( platform.width() * -0.14 );
    }
    UpdatePage.prototype.updateNow = function () {
        this.tabbarElement.style.display = 'flex';
        this.market.open('com.appv2.lottosocial').then(function (data) {
            console.log(data);
        });
        this.navCtrl.pop();
    };
    UpdatePage.prototype.ionViewWillEnter = function () {
        this.tabbarElement.style.display = 'none';
    };
    UpdatePage.prototype.ionViewWillLeave = function () {
        this.tabbarElement.style.display = 'flex';
    };
    return UpdatePage;
}());
UpdatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-update',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\update\update.html"*/'<ion-content>\n  <img src="assets/image/img.png" class="update_img">\n  <ion-grid>\n      <ion-row text-center>\n          <ion-col col-12>\n          <p class="main_text">Exciting news , a new version of Lotto Social app is avaliable for you.That includes:</p>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12>\n              <ul class="list_text">\n              <li>Description for the updated feature</li>\n              <li>Description for the updated feature <br>on tow lines</li>\n              <li>Another description for the updated feature</li>\n              </ul>\n          </ion-col>\n      </ion-row>\n      <ion-row text-center>\n          <ion-col col-12>\n              <button ion-button color="secondary" round class="update_btn" (click)="updateNow()">UPDATE NOW</button>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\update\update.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_market__["a" /* Market */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
], UpdatePage);

//# sourceMappingURL=update.js.map

/***/ })

});
//# sourceMappingURL=21.js.map