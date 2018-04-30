webpackJsonp([26],{

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageModule", function() { return SplashPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splash__ = __webpack_require__(848);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplashPageModule = (function () {
    function SplashPageModule() {
    }
    return SplashPageModule;
}());
SplashPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__splash__["a" /* SplashPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__splash__["a" /* SplashPage */]),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__splash__["a" /* SplashPage */]]
    })
], SplashPageModule);

//# sourceMappingURL=splash.module.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_common_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SplashPage = (function () {
    function SplashPage(storage, authSrv, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.authSrv = authSrv;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //check the storage is ready or not    
        this.storage.ready().then(function () {
            var email;
            var passWord;
            var newDate;
            var tokenTime;
            var dateTimeNow = new Date();
            _this.storage.get('DF_EMAIL').then(function (val) {
                console.log("splash df email", val);
                email = val;
            });
            _this.storage.get('DF_PASSWORD').then(function (val) {
                console.log("splash df password", val);
                passWord = val;
            });
            _this.storage.get('session_token_time').then(function (val) {
                console.log("token expiry time", val);
                if (val) {
                    newDate = new Date(val);
                    tokenTime = newDate;
                }
            });
            _this.storage.get('session').then(function (val) {
                __WEBPACK_IMPORTED_MODULE_5__services_common_service__["a" /* CommonService */].session = JSON.parse(val);
                console.log('Your session is', val);
                setTimeout(function () {
                    //Checking the user token(DF credentials)
                    if (email) {
                        //Checking the if token is valid or not
                        if (dateTimeNow < newDate) {
                            _this.storage.get('session_ID').then(function (val) {
                                __WEBPACK_IMPORTED_MODULE_5__services_common_service__["a" /* CommonService */].sessionId = val;
                            });
                            _this.storage.get('user_session_id').then(function (val) {
                                __WEBPACK_IMPORTED_MODULE_5__services_common_service__["a" /* CommonService */].userSessionId = val;
                            });
                            _this.storage.get('user_session_token').then(function (val) {
                                __WEBPACK_IMPORTED_MODULE_5__services_common_service__["a" /* CommonService */].userSessionToken = val;
                            });
                            //if valid then setting the home page as root 
                            setTimeout(function () {
                                _this.navCtrl.setRoot('HomePage');
                            }, 0);
                        }
                        else if (!tokenTime) {
                            _this.storage.remove('session_token_time');
                            _this.storage.remove('user_session_token');
                            __WEBPACK_IMPORTED_MODULE_5__services_common_service__["a" /* CommonService */].JWT = "";
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* WelcomePage */]);
                        }
                        else {
                            //in case if token is expired
                            var datetime = new Date();
                            datetime.setHours(datetime.getHours() + 10);
                            _this.authSrv.getJWTToken(email, passWord).subscribe(function (successData) {
                                console.log("retrived the new data for JWT", successData);
                                _this.storage.set('session_ID', __WEBPACK_IMPORTED_MODULE_5__services_common_service__["a" /* CommonService */].sessionId);
                                _this.storage.set('user_session_token', successData.session_token);
                                _this.storage.set('user_session_id', successData.session_id);
                                _this.storage.set('session_token_time', datetime);
                                __WEBPACK_IMPORTED_MODULE_5__services_common_service__["a" /* CommonService */].JWT = successData.session_token;
                                _this.storage.get('session_ID').then(function (val) {
                                    __WEBPACK_IMPORTED_MODULE_5__services_common_service__["a" /* CommonService */].sessionId = val;
                                });
                                _this.storage.get('user_session_id').then(function (val) {
                                    __WEBPACK_IMPORTED_MODULE_5__services_common_service__["a" /* CommonService */].userSessionId = val;
                                });
                                _this.storage.get('user_session_token').then(function (val) {
                                    __WEBPACK_IMPORTED_MODULE_5__services_common_service__["a" /* CommonService */].userSessionToken = val;
                                });
                                setTimeout(function () {
                                    _this.navCtrl.setRoot('HomePage');
                                }, 500);
                            }, function (error) {
                                console.log("user login error", error);
                            }, function () { });
                        }
                    }
                    else {
                        //if no user token then setting to welcome page
                        _this.storage.remove('session_token_time');
                        _this.storage.remove('user_session_token');
                        __WEBPACK_IMPORTED_MODULE_5__services_common_service__["a" /* CommonService */].JWT = "";
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }, 0);
            });
        });
    }
    return SplashPage;
}());
SplashPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-splash',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\splash\splash.html"*/'<ion-content>\n    \n    <!-- <img class="center" src="assets/vid/blue_bg.gif"> -->\n    <div style="height: 100vh;width: 100vw;background-color: #255FC7">\n\n    </div>\n    </ion-content>\n    '/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\splash\splash.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], SplashPage);

//# sourceMappingURL=splash.js.map

/***/ })

});
//# sourceMappingURL=26.js.map