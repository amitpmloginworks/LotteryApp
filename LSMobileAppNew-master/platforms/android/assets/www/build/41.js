webpackJsonp([41],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogElmentdetailPageModule", function() { return BlogElmentdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_elmentdetail__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlogElmentdetailPageModule = (function () {
    function BlogElmentdetailPageModule() {
    }
    return BlogElmentdetailPageModule;
}());
BlogElmentdetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__blog_elmentdetail__["a" /* BlogElmentdetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blog_elmentdetail__["a" /* BlogElmentdetailPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__blog_elmentdetail__["a" /* BlogElmentdetailPage */]
        ]
    })
], BlogElmentdetailPageModule);

//# sourceMappingURL=blog-elmentdetail.module.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogElmentdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_home__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogElmentdetailPage = (function () {
    function BlogElmentdetailPage(navCtrl, srvHome, navParams, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.srvHome = srvHome;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.tabbarElement = document.querySelector('.tabbar');
        //data
        this.blogData = this.navParams.get("blogDetail");
        // this.EventData = this.navParams.get("event")
        this.apiCall = this.navParams.get("APIcall");
        if (this.apiCall == "blog") {
            this.callAPItoGetDetails(this.apiCall, this.blogData.ID);
        }
        else {
            this.callAPItoGetDetails(this.apiCall, this.blogData.event_id);
        }
    }
    BlogElmentdetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.done = true;
        }, 2000);
        console.log('ionViewDidLoad BlogElmentdetailPage');
    };
    BlogElmentdetailPage.prototype.ionViewWillEnter = function () {
        this.tabbarElement.style.display = 'none';
    };
    BlogElmentdetailPage.prototype.ionViewWillLeave = function () {
        this.tabbarElement.style.display = 'flex';
    };
    BlogElmentdetailPage.prototype.closeBlogClick = function () {
        this.viewCtrl.dismiss();
        this.tabbarElement.style.display = 'flex';
    };
    BlogElmentdetailPage.prototype.callAPItoGetDetails = function (APIcallText, id) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loading.present().then(function () {
            console.log('ionViewDidLoad PlayGamePage');
            _this.displayDetailImage = _this.blogData.image ? _this.blogData.image : _this.blogData.image_url;
            if (APIcallText == "blog") {
                _this.srvHome.getBlogDetails(id).subscribe(function (data) {
                    if (data) {
                        loading.dismiss();
                        _this.dataFromAPI = data.response[0].get_blog_contents.response.content;
                        if (_this.dataFromAPI) {
                            _this.decodeHtmlEntity(_this.dataFromAPI);
                        }
                    }
                    else {
                        loading.dismiss();
                    }
                });
            }
            else if (APIcallText == "event") {
                _this.srvHome.getEventDetails(id).subscribe(function (data) {
                    if (data) {
                        loading.dismiss();
                        _this.dataFromAPI = data.response[0].get_event_contents.response.content;
                        if (_this.dataFromAPI) {
                            _this.decodeHtmlEntity(_this.dataFromAPI);
                        }
                        else {
                            loading.dismiss();
                        }
                    }
                });
            }
        });
    };
    BlogElmentdetailPage.prototype.decodeHtmlEntity = function (dataCode) {
        var sampleTxt = document.createElement("textarea");
        sampleTxt.innerHTML = dataCode;
        this.decodedHtml = sampleTxt.value;
    };
    return BlogElmentdetailPage;
}());
BlogElmentdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-blog-elmentdetail',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\blog-elmentdetail\blog-elmentdetail.html"*/'<ion-content class="elementDetail-content" >\n    <div *ngIf="done">\n        <div class="closeion-div" (tap)="closeBlogClick()">\n            <ion-icon ios="ios-close" class="close-icon" md="md-close"></ion-icon>\n        </div>\n        <img src="{{displayDetailImage}}" >\n\n        <br>\n\n        <div class="detailImgText"  [innerHTML]="decodedHtml">\n            <!-- <span>\n                No Data is available!\n            </span> -->\n            \n        </div>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\blog-elmentdetail\blog-elmentdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_service_home__["a" /* HomeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
], BlogElmentdetailPage);

//# sourceMappingURL=blog-elmentdetail.js.map

/***/ })

});
//# sourceMappingURL=41.js.map