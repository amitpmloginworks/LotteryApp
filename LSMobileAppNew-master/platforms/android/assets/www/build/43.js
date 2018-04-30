webpackJsonp([43],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(822);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthPageModule = (function () {
    function AuthPageModule() {
    }
    return AuthPageModule;
}());
AuthPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]]
    })
], AuthPageModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_params__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthPage = (function () {
    function AuthPage(params, network, navParams, navCtrl, modalCtrl) {
        this.params = params;
        this.network = network;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.tab1Root = 'SignupPage';
        this.tab2Root = 'LoginPage';
        this.selectedTabId = navParams.get('tab');
    }
    AuthPage.prototype.ionViewWillEnter = function () {
        console.log("AuthPage::ionViewDidLoad", this.network.type);
        // if (this.params) {
        //     this.params.setIsInternetAvailable(this.network.type != "none");
        // }
        if (this.selectedTabId) {
            this.tabsRef.select(this.selectedTabId);
        }
    };
    return AuthPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Tabs */])
], AuthPage.prototype, "tabsRef", void 0);
AuthPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\auth\auth.html"*/'<ion-tabs #tabs preloadTabs="false" class="ios-header">\n  <ion-tab [root]="tab1Root" tabTitle="SIGNUP" ></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="LOGIN"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\auth\auth.html"*/,
        selector: 'page-auth'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
], AuthPage);

//# sourceMappingURL=auth.js.map

/***/ })

});
//# sourceMappingURL=43.js.map