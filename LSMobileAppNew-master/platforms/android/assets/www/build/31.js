webpackJsonp([31],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlaypagePageModule", function() { return OverlaypagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlaypage__ = __webpack_require__(842);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OverlaypagePageModule = (function () {
    function OverlaypagePageModule() {
    }
    return OverlaypagePageModule;
}());
OverlaypagePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__overlaypage__["a" /* OverlaypagePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__overlaypage__["a" /* OverlaypagePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__overlaypage__["a" /* OverlaypagePage */]
        ]
    })
], OverlaypagePageModule);

//# sourceMappingURL=overlaypage.module.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlaypagePage; });
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



var OverlaypagePage = (function () {
    function OverlaypagePage(navCtrl, alertCtrl, viewctrl, appSound, navParms, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.viewctrl = viewctrl;
        this.appSound = appSound;
        this.navParms = navParms;
        this.loadingCtrl = loadingCtrl;
        this.counter = 1;
    }
    OverlaypagePage.prototype.dismissPopUp = function (data) {
        if (data === void 0) { data = 1; }
        this.appSound.play('buttonClick');
        this.viewctrl.dismiss(data);
    };
    OverlaypagePage.prototype.closeOverlay = function (data) {
        if (data === void 0) { data = 1; }
        this.appSound.play('buttonClick');
        this.counter++;
        if (this.counter > 9) {
            this.viewctrl.dismiss(data);
        }
    };
    return OverlaypagePage;
}());
OverlaypagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-overlaypage',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\overlaypage\overlaypage.html"*/' <ion-content class="overlay" text-center ion-fixed padding scroll="false"  (click)="closeOverlay()">\n  <!-- Home Menu -->\n  \n  <div *ngIf="counter==0"style="position: absolute;">\n       <img src="assets/img/sideMenu.png" class="c0SideMenu">\n      <img src="assets/img/share.svg" class="c0arrow">\n     \n  </div>\n  <div  *ngIf="counter==0" class="homeDiv">\n      <p class="c0Description">\n      <span class="descriptionInner">\n          QUICK TOUR {{counter}}/9<br>\n      </span> \n      Click here for useful links on the app.\n  </p>  \n</div>\n  \n\n   <div *ngIf="counter==2" class="c2MainDiv">\n          <div class="homeCardDiv"><p class="c2Description">\n                  <span  class="descriptionInner">\n                          QUICK TOUR {{counter}}/9<br>\n                      </span> \n              Useful information about the service .</p>  </div>\n          \n      <img src="assets/img/share.svg" class="c2arrow">\n         \n          <img src="assets/img/homepage.png" class="c2img"><br>\n   </div>\n\n\n  <!-- Credit and Points Menu -->\n\n   <div *ngIf="counter==8 || counter==9" class="c89MinDiv">\n      <img src="assets/img/creditPoints.png" class="c89Image">\n      <span *ngIf="counter==9">\n              <img src="assets/img/share.svg" class="c89arrow">\n              <div class="rotetDiv fstDiv11"><p class="c9Div">\n                      <span  class="descriptionInner">\n                              QUICK TOUR {{counter}}/9<br>\n                          </span> \n                  Your Credit in Store / Offers pages.</p> </div>\n      </span>\n      <span  *ngIf="counter==8">\n              <img src="assets/img/share.svg" class="c8arrow">\n              \n              <div class="rotetDiv fstDiv12"><p class="c8Description">\n                      <span  class="descriptionInner">\n                              QUICK TOUR {{counter}}/9<br>\n                          </span> \n                  Spend your points on the Games section.</p> </div>\n          \n      </span>\n  </div>\n\n   <!-- Store Information -->\n   <span  *ngIf="counter==4">\n  <div class="rotetDiv fstDiv"><p class="c4MainDiv">\n      <span class="descriptionInner">\n          QUICK TOUR {{counter}}/9<br>\n      </span> \n      Click here for useful links on the app.</p>  </div>\n\n  <img src="assets/img/share.svg" class="c4arrow"> \n</span>\n\n      <!-- Manage Syndicate -->\n      <span *ngIf="counter==5">\n  <div class="rotetDiv sndDiv"><p class="c5mainDiv">\n          <span  class="descriptionInner">\n                  QUICK TOUR {{counter}}/9<br>\n              </span>  \n      Manage your syndicates.</p> </div>\n  <img src="assets/img/share.svg" class="c5arrow">\n</span>\n\n  <!-- Games -->\n  <span *ngIf="counter==6">\n  <div class="rotetDiv thrdDiv"><p class="c6MainDiv">\n          <span  class="descriptionInner">\n                  QUICK TOUR {{counter}}/9<br>\n              </span>  \n      Your games & games for you.</p>  </div>\n  <img src="assets/img/share.svg" class="c6arrow"> \n</span>\n      <!-- offer -->\n<span *ngIf="counter==7" >\n<div class="rotetDiv fourthDiv"><p class="c7MainDiv">\n      <span  class="descriptionInner">\n              QUICK TOUR {{counter}}/9<br>\n          </span>  \n  Special offers available.</p>  </div>\n  <img src="assets/img/share.svg" class="c7arrow"> \n</span>\n <!-- pullup -->\n <span *ngIf="counter==3">\n <div class="rotetDiv pullUpDiv"><p class="c3MainDiv">\n      <span  class="descriptionInner">\n              QUICK TOUR {{counter}}/9<br>\n          </span>    \n  Latest news and  programmes for you.</p>  </div>\n  <img src="assets/img/share.svg" class="c3arrow"> \n  </span> \n  <!-- bottom image -->\n   \n  <!-- <div *ngIf="counter==4"  class="overlayDiv1">\n      <img src="assets/img/tour_store.png" style="width:90%;border: 5px solid gray">\n  </div>\n  <div *ngIf="counter==5"  class="overlayDiv1">\n      <img src="assets/img/tour_syndicate.png" style="width:90%;border: 5px solid gray">\n  </div>\n  <div *ngIf="counter==6"  class="overlayDiv1">\n      <img src="assets/img/tour_games.png" style="width:90%;border: 5px solid gray">\n  </div>\n  <div *ngIf="counter==7"  class="overlayDiv1">\n      <img src="assets/img/tour_offers.png" style="width:90%;border: 5px solid gray">\n  </div>\n  \n   -->\n  \n   <div *ngIf="counter==4"  class="overlayDiv1">\n      <img src="assets/img/exp.png" style="width:16%;position: absolute;left: 5%;top:5%;height: 70%">\n  </div>\n  <div *ngIf="counter==5"  class="overlayDiv1">\n      <img src="assets/img/exp1.png" style="width:19%;position: absolute;left: 22%;top:5%;height:70%">\n  </div>\n  <div *ngIf="counter==6"  class="overlayDiv1">\n      <img src="assets/img/exp2.png" style="width:16%;position: absolute;right: 20%;top:7%;height:69%">\n  </div>\n  <div *ngIf="counter==7"  class="overlayDiv1">\n      <img src="assets/img/exp3.png" style="width:17%;position: absolute;right: 1%;top:5%;height: 70%">\n  </div>\n\n\n  <div *ngIf="counter==3"  class="overlayDiv">\n          <img src="assets/img/pullup.png" style="width:95%;border: 5px solid gray">\n      </div>\n\n  <!-- Notification -->\n\n  <span *ngIf="counter==1">\n  <img src="assets/img/message-count.png" class="messageCountIcon">\n  <div  class=" fourthDivRight"><p class="c1Description">\n       <span  class="descriptionInner">\n          QUICK TOUR {{counter}}/9<br>\n      </span> \n      Click here for in app messages. </p></div>\n  <img src="assets/img/share.svg" class="message_count_icon-arrow"> \n  </span>\n\n  <input type="button" value="TAP TO CONTINUE"  (click)="closeOverlay()" class="continue"> \n\n \n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\overlaypage\overlaypage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
], OverlaypagePage);

//# sourceMappingURL=overlaypage.js.map

/***/ })

});
//# sourceMappingURL=31.js.map