webpackJsonp([42],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogElementPageModule", function() { return BlogElementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_element__ = __webpack_require__(823);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlogElementPageModule = (function () {
    function BlogElementPageModule() {
    }
    return BlogElementPageModule;
}());
BlogElementPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__blog_element__["a" /* BlogElementPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blog_element__["a" /* BlogElementPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__blog_element__["a" /* BlogElementPage */]
        ]
    })
], BlogElementPageModule);

//# sourceMappingURL=blog-element.module.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogElementPage; });
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



var BlogElementPage = (function () {
    function BlogElementPage(navCtrl, loadingCtrl, navParams, modalCtrlr, appSound) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.modalCtrlr = modalCtrlr;
        this.appSound = appSound;
        this.profileImage = "";
        this.showImage = false;
        this.homeBlog = this.navParams.get("homeBlog");
        this.millionerImage = this.navParams.get("millionerImage");
    }
    BlogElementPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">"
        });
        loader.present();
        setTimeout(function () {
            _this.done = true;
            loader.dismiss();
        }, 2000);
        var currentDate = new Date();
        var locale = "en-us";
        this.currentMonth = currentDate.toLocaleString(locale, { month: "long" });
        //get Full Day Name
        var weekday = new Array(7);
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        weekday[7] = "Sunday";
        var dayIndex = currentDate.getDay();
        this.currentweekday = weekday[dayIndex];
        this.currentDate = currentDate.getDate();
        if (localStorage.getItem("profileImage") !== undefined && localStorage.getItem("profileImage") !== null && localStorage.getItem("profileImage") !== "") {
            this.profileImage = localStorage.getItem("profileImage");
            this.showImage = true;
        }
    };
    BlogElementPage.prototype.goElementDetails = function (item, pageAPI) {
        this.navCtrl.push('BlogElmentdetailPage', { blogDetail: item, APIcall: pageAPI });
    };
    BlogElementPage.prototype.mgmOpenPage = function () {
        this.appSound.play('buttonClick');
        this.navCtrl.push('referFriend');
    };
    BlogElementPage.prototype.closeBlogClick = function () {
        console.log("clicked");
        this.navCtrl.pop();
    };
    return BlogElementPage;
}());
BlogElementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-blog-element',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\blog-element\blog-element.html"*/'<ion-content ion-fixed padding text-center>\n    <div class="closeion-div">\n        <ion-icon ios="ios-close" (click)="closeBlogClick()" class="close-icon" md="md-close"></ion-icon>\n    </div>\n    <div class="datetext">\n        {{currentweekday}} {{currentDate}} {{currentMonth}}\n    </div>\n    <div style="position: relative">\n        <ion-row>\n            <ion-col col-9 item-left>\n                <span style="float: left;font-size: 2em;">\n                    What\'s on Today\n                </span>\n            </ion-col>\n            <ion-col col-3 item-right>\n                <ion-avatar class="account-avatar">\n                    <img *ngIf="showImage" class="profile-picture" src="{{profileImage}}" />\n                    <img *ngIf="!showImage" class="profile-picture" src="assets/img/150.png" />\n                </ion-avatar>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div *ngIf="done">\n        <ion-card *ngFor="let item of homeBlog" (click)="goElementDetails(item,\'blog\')" class="homeBlogItem">\n            <div>\n                <div class="blogimagetext">\n                    <span class="imageSpan">Latest Blog Post\n                    </span>\n                </div>\n                <img *ngIf="item.image" src="{{item.image}}" class="itemImage">\n                <img *ngIf="!item.image" src="assets/img/150.png" class="assetsImage">\n\n            </div>\n            <div class="bottom-content">\n                <span class="bottom-text">TRY SOMETHING NEW</span>\n                <br/>\n                <span class="render_content">{{item.content.rendered | slice:0:100 }}\n                ....</span>\n            </div>\n        </ion-card>\n        <ion-card *ngFor="let c of millionerImage" (click)="goElementDetails(c,\'event\')" class="millionerImg">\n            <div>\n                <div class="blogimagetext">\n                    <span class="imageSpan">Latest Events\n                    </span>\n                </div>\n                <img src="{{c.image_url}}">\n            </div>\n        </ion-card>\n        <ion-card class="itemCard">\n            <img src="assets/img/mgm_blog_thumb.jpg" (tap)="mgmOpenPage()">\n            <ion-card-content text-center>\n                £5 CREDIT FOR YOU AND YOUR FRIEND!\n            </ion-card-content>\n\n            <button class="center" ion-button item-right clear small>\n                <div (click)="mgmOpenPage()" class="blog-element-more">Find out more\n                    <ion-icon name="md-arrow-round-forward"></ion-icon>\n                </div>\n            </button>\n        </ion-card>\n    </div>\n\n\n\n\n</ion-content>\n<!-- <ion-content style="margin-bottom: 0px!important;z-index: 10">\n        <ion-card class="big-content" style="background: #333!important">\n    \n    \n          <div class="top-slides-wrapper">\n            <ion-slides class="top-slides" slidesPerView=1.07 spaceBetween="10" style="padding: 0px 5px 0px 6px;">\n              <ion-slide style="width:261px!important;" *ngFor="let item of homeBlog">\n                <div>\n                  <img *ngIf="item.image" src="{{item.image}}" style="width: 100%;height:20vh;">\n                  <img *ngIf="!item.image" src="assets/img/150.png" style="width: 100%;height: 11vh">\n                  <span class="storeslidetext">\n                    <p style="color: white;word-wrap: break-word;padding: 5px;font-weight: 800">{{item.content.rendered}}</p>\n                  </span>\n    \n                \n                </div>\n              </ion-slide>\n    \n    \n            </ion-slides>\n          </div>\n          <ion-slides style="padding: 0px 5px 0px 6px;" spaceBetween=10 slidesPerView=1.5>\n            <ion-slide style="width: 51%" *ngFor="let c of millionerImage" (tap)=openModal(c)>\n              <img src="{{c.image_url}}" width="150" height="100" style="height: 17.5vh;margin-top: 8px;">\n            </ion-slide>\n          </ion-slides>\n    \n    \n          <ion-card class="popup-main" *ngIf="footerState == 1">\n            <img src="assets/img/mgm_blog_thumb.jpg" (tap)="mgmOpenPage()">\n            <ion-card-content text-center>\n              £5 CREDIT FOR YOU AND YOUR FRIEND!\n            </ion-card-content>\n    \n            <button class="center" ion-button item-right clear small>\n              <div (click)="mgmOpenPage()" style="z-index: 0;margin-top: -18px">Find out more\n                <ion-icon name="md-arrow-round-forward"></ion-icon>\n              </div>\n            </button>\n          </ion-card>\n    \n        </ion-card>\n      </ion-content> -->'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\blog-element\blog-element.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_app_sound_app_sound__["a" /* AppSoundProvider */]])
], BlogElementPage);

//# sourceMappingURL=blog-element.js.map

/***/ })

});
//# sourceMappingURL=42.js.map