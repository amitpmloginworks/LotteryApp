webpackJsonp([35],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inboxModalPageModule", function() { return inboxModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inbox_popup__ = __webpack_require__(835);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var inboxModalPageModule = (function () {
    function inboxModalPageModule() {
    }
    return inboxModalPageModule;
}());
inboxModalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__inbox_popup__["a" /* inboxModal */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inbox_popup__["a" /* inboxModal */])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__inbox_popup__["a" /* inboxModal */]]
    })
], inboxModalPageModule);

//# sourceMappingURL=inbox-popup.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inboxModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_sound_app_sound__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var inboxModal = (function () {
    function inboxModal(_navParams, appSound, platform, viewctrl) {
        this._navParams = _navParams;
        this.appSound = appSound;
        this.platform = platform;
        this.viewctrl = viewctrl;
        this.customerId = __WEBPACK_IMPORTED_MODULE_2__services_common_service__["a" /* CommonService */].session.customer_id;
        this.customerToken = __WEBPACK_IMPORTED_MODULE_2__services_common_service__["a" /* CommonService */].session.customer_token;
        this.PageData = this._navParams.get("CurrentMessage");
    }
    inboxModal.prototype.openWebView = function (url) {
        var _this = this;
        this.appSound.play('buttonClick');
        this.platform.ready().then(function () {
            if (typeof cordova !== 'undefined') {
                var browser = cordova.InAppBrowser.open('https://nima.lottosocial.com/webview-auth/?redirect_to=' + [url] + '&customer_id=' + _this.customerId + '&customer_token=' + _this.customerToken + '', '_blank', 'location=no');
            }
        });
        // const browser = cordova.InAppBrowser.open('https://nima.lottosocial.com/webview-auth/?redirect_to=' + [url] + '&customer_id=' + this.customerId + '&customer_token=' + this.customerToken + '', '_blank','location=no');
    };
    inboxModal.prototype.dismissPopUp = function (data) {
        this.viewctrl.dismiss(data);
    };
    return inboxModal;
}());
inboxModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'inbox-modal',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\inbox-popup\inbox-popup.html"*/'<ion-navbar class="modal-wrapper" *navbar>\n    <ion-title>Inbox Modal</ion-title>\n</ion-navbar>\n<ion-content padding class="inbox-modal-page" text-center>\n    <h3  >{{PageData?.card_title}}</h3>\n    <img class="popup-img" src="{{PageData?.icon_url}}" />\n    <p>{{PageData?.description}}</p>\n    <button ion-button color="secondary" (click)="openWebView(PageData?.button_url)">\n        {{PageData?.button_label}}\n    </button>\n\n    <p (click)="dismissPopUp()" class="popup-dismiss" >Not Now</p>\n</ion-content>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\inbox-popup\inbox-popup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_app_sound_app_sound__["a" /* AppSoundProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
], inboxModal);

//# sourceMappingURL=inbox-popup.js.map

/***/ })

});
//# sourceMappingURL=35.js.map