webpackJsonp([39],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBlogPageModule", function() { return EventBlogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_blog__ = __webpack_require__(830);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventBlogPageModule = (function () {
    function EventBlogPageModule() {
    }
    return EventBlogPageModule;
}());
EventBlogPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__event_blog__["a" /* EventBlogPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_blog__["a" /* EventBlogPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__event_blog__["a" /* EventBlogPage */]
        ]
    })
], EventBlogPageModule);

//# sourceMappingURL=event-blog.module.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventBlogPage; });
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


var EventBlogPage = (function () {
    function EventBlogPage(navPrms, navctrl) {
        this.navPrms = navPrms;
        this.navctrl = navctrl;
        this.eventData = this.navPrms.get("event");
        this.convertDate(this.eventData.start, this.eventData.end);
        this.blogContent = this.eventData.details;
        this.decodeHtmlEntity();
    }
    EventBlogPage.prototype.convertDate = function (startDate, endDate) {
        this.sDate = new Date(parseInt(startDate));
        this.startDate = this.sDate.toDateString();
        this.eDate = new Date(parseInt(endDate));
        this.endDate = this.eDate.toDateString();
    };
    EventBlogPage.prototype.close = function () {
        this.navctrl.popAll();
    };
    EventBlogPage.prototype.decodeHtmlEntity = function () {
        var sampleTxt = document.createElement("textarea");
        sampleTxt.innerHTML = this.blogContent;
        this.decodedHtml = sampleTxt.value;
    };
    return EventBlogPage;
}());
EventBlogPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-event-blog',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\event-blog\event-blog.html"*/'<ion-content class="modalPageEvent">\n  <!-- <img class="close-button" src="http://www.clker.com/cliparts/t/f/J/i/7/C/amazon-style-close-button-hi.png" style="height:60px;width: 60px;text-align: right"> -->\n  <ion-list class="listEventModal">\n      <ion-row>\n          <ion-col>\n              <ion-item text-center text-wrap>\n                  <h2 text-wrap class="text-center" >{{eventData?.name}}</h2>\n              </ion-item>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-6>\n              <span>\n                  <span class="spans">Start Date</span>\n                  <p>{{startDate}}</p>\n              </span>\n          </ion-col>\n          <ion-col col-6>\n              <span>\n                  <span class="spans">End Date</span>\n                  <p>{{endDate}}</p>\n              </span>\n          </ion-col>\n\n      </ion-row>\n      <ion-col col-12>\n          <img src={{eventData?.image_url}} >\n      </ion-col>\n      <ion-col>\n          <div id="details" [innerHTML]="decodedHtml"></div>\n      </ion-col>\n  </ion-list>\n  <ion-list>\n      <button ion-button full clas="text-center"  (tap)="close()">Close</button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\event-blog\event-blog.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
], EventBlogPage);

//# sourceMappingURL=event-blog.js.map

/***/ })

});
//# sourceMappingURL=39.js.map