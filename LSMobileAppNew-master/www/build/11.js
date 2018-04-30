webpackJsonp([11,14],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(778);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_module__ = __webpack_require__(735);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__home_home_module__["HomePageModule"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_params__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_home__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_db_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_cache_controller__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_app_sound_app_sound__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = HomePage_1 = (function () {
    function HomePage(zone, params, iab, storage, platform, authSrv, srvHome, menu, navCtrl, srvDb, commonSrv, cdRef, appSound, alertCtrl, loadingCtrl, _modalCtrl) {
        var _this = this;
        this.zone = zone;
        this.params = params;
        this.iab = iab;
        this.storage = storage;
        this.platform = platform;
        this.authSrv = authSrv;
        this.srvHome = srvHome;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.srvDb = srvDb;
        this.commonSrv = commonSrv;
        this.cdRef = cdRef;
        this.appSound = appSound;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this._modalCtrl = _modalCtrl;
        this.rootPage = 'TabsPage';
        this.messageLoading = false;
        this.imageUpdate = "";
        this.messages = [];
        this.cache = new __WEBPACK_IMPORTED_MODULE_9__services_cache_controller__["a" /* CacheController */](params, platform, srvDb, srvHome, alertCtrl);
        this.params.events.subscribe('home-data', function (data) {
            console.log(data, "home data");
            for (var i = data.length - 1; i >= 0; i--) {
                if (data[i].get_home_message) {
                    _this.homeMessage = data[i].get_home_message.response;
                    if (_this.homeMessage.notification) {
                        // this.messages = this.homeMessage.notification;
                    }
                    params.setUnreadCount(_this.homeMessage.count);
                }
                if (data[i].get_account_details) {
                    _this.accountDetails = data[i].get_account_details.response;
                    _this.updateCode();
                    _this.updateNick();
                    if (_this.accountDetails.profile_image) {
                        _this.image_Data = _this.accountDetails.profile_image;
                        return;
                    }
                    else if (localStorage.getItem("imageUrl")) {
                        _this.image_Data = localStorage.getItem("imageUrl");
                        return;
                    }
                }
            }
            console.log("HomePage::home data", _this.homeMessage, _this.messages);
        });
        this.checkForNewRelease();
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            var CurrentUserid = localStorage.getItem('appCurrentUserid');
            if (_this.platform.is('cordova')) {
                webengage.engage();
                webengage.track('Home Page', {
                    "UserId": CurrentUserid,
                });
                webengage.screen("HomePage");
                webengage.notification.onDismiss(function (inAppData) {
                });
                webengage.engage();
            }
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.messageDetails) {
            this.messageDetails.togglePopup();
        }
        setTimeout(function () {
            _this.getAnotherTokenLife();
        }, 5000);
        setInterval(function () { _this.refreshToken(); }, 1200000);
        setInterval(function () { _this.getAnotherTokenLife(); }, 15000000);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        //set gloabal variable if for app is open already
    };
    HomePage.prototype.refreshToken = function () {
        var _this = this;
        this.currentJWT = "";
        this.storage.get('user_session_token').then(function (dataToken) {
            _this.currentJWT = dataToken;
            console.log('token homepage', _this.currentJWT);
            __WEBPACK_IMPORTED_MODULE_8__services_common_service__["a" /* CommonService */].JWT = "";
        });
        setTimeout(function () {
            if (_this.currentJWT) {
                _this.authSrv.refreshJWT(_this.currentJWT).subscribe(function (data) {
                    console.log(data);
                    __WEBPACK_IMPORTED_MODULE_8__services_common_service__["a" /* CommonService */].JWT = data.session_token;
                    _this.commonSrv.updateJWT(data.session_token);
                    _this.storage.set('user_session_token', data.session_token);
                });
            }
        }, 5000);
    };
    HomePage.prototype.getAnotherTokenLife = function () {
        var _this = this;
        var email;
        var passWord;
        this.storage.get('DF_EMAIL').then(function (val) {
            console.log("splash df email", val);
            email = val;
        });
        this.storage.get('DF_PASSWORD').then(function (val) {
            console.log("splash df password", val);
            passWord = val;
        });
        setTimeout(function () {
            if (email) {
                _this.authSrv.getJWTToken(email, passWord).subscribe(function (successData) {
                    console.log("retrived the new data for JWT", successData);
                    _this.storage.set('session_ID', __WEBPACK_IMPORTED_MODULE_8__services_common_service__["a" /* CommonService */].sessionId);
                    _this.storage.set('user_session_token', successData.session_token);
                    _this.storage.set('user_session_id', successData.session_id);
                });
            }
        }, 5000);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter in home page");
        this.commonSrv.trackSegmentPage("Home", "HomePage").subscribe(function (data) {
            console.log("track segment called");
        }, function (err) {
        }, function () { });
    };
    HomePage.prototype.closeMenu1 = function () {
        var _this = this;
        this.menu.close();
        this.srvHome.getHomeMessages().take(1).subscribe(function (data) {
            _this.zone.run(function () {
                _this.homeMessage = data.response[0].get_home_message.response;
                _this.params.setUnreadCount(_this.homeMessage.count);
            });
        }, function (err) {
            console.log("onOpenRightMenu error ", err);
        });
    };
    HomePage.prototype.onLeftMenuSelection = function (selection) {
        console.log("HomePage::onLeftMenuSelection");
        this.appSound.play('menuClick');
        this.menu.close();
        switch (selection) {
            case 'accounts':
                this.params.goPage('AccountPage');
                break;
            case 'help':
                this.params.goPage('HelpPage');
                //   let opt:string = "toolbarposition=top";
                // this.iab.create('https://help.lotto-social.com/hc/en-us', 'blank', opt);
                break;
        }
    };
    HomePage.prototype.openPage = function (page) {
        this.menu.close();
        if (page.index) {
            this.nav.setRoot(page.component, { tabIndex: page.index });
        }
        else {
            this.nav.setRoot(page.component).catch(function () {
                console.log("Didn't set nav root");
            });
        }
    };
    HomePage.prototype.goPage = function (page) {
        this.menu.close();
        switch (page) {
            case 'create_syndicate':
                this.nav.setRoot('CreateSyndicatePage');
                break;
            default:
                // code...
                break;
        }
    };
    HomePage.prototype.openWebView = function (str) {
        this.appSound.play('buttonClick');
        // let browser = this.iab.create(CommonService.sitename + str, 'blank', opt);
        var browser = cordova.InAppBrowser.open(__WEBPACK_IMPORTED_MODULE_8__services_common_service__["a" /* CommonService */].sitename + str, 'blank', 'location=no,toolbarposition=top');
        browser.on('loadstart').subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["c" /* StatusBar */].hide();
        });
        browser.on('loadstop').subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["c" /* StatusBar */].hide();
        });
    };
    // notification menu
    HomePage.prototype.onOpenRightMenu = function () {
        var _this = this;
        this.appSound.play('menuClick');
        this.zone.run(function () {
            _this.messageLoading = true;
        });
        this.srvHome.getHomeMessages().take(1).subscribe(function (data) {
            console.log("onOpenRightMenu success ", data);
            _this.zone.run(function () {
                _this.appSound.play('inbox');
                var items;
                _this.messageLoading = false;
                _this.homeMessage = data.response[0].get_home_message.response;
                _this.messages = _this.homeMessage.notification;
                _this.params.setUnreadCount(_this.homeMessage.count);
                if (_this.homeMessage.count > 0) {
                    setTimeout(function () {
                        _this.slideItm.setElementClass("active-sliding", true);
                        _this.slideItm.setElementClass("active-slide", true);
                        _this.slideItm.setElementClass("active-options-right", true);
                        _this.Itm.setElementStyle("transform", "translate3d(-140px, 0px, 0px)");
                        //close back
                        setTimeout(function () {
                            _this.slideItm.close();
                            setTimeout(function () {
                                _this.slideItm.setElementClass("active-sliding", false);
                                _this.slideItm.setElementClass("active-slide", false);
                                _this.slideItm.setElementClass("active-options-right", false);
                            }, 1000);
                        }, 2000);
                    }, 1000);
                }
            });
        }, function (err) {
            console.log("onOpenRightMenu error ", err);
        });
    };
    HomePage.prototype.checkForNewRelease = function () {
        var _this = this;
        this.commonSrv.getNewRelease().subscribe(function (data) {
            console.log("checkForNewRelease", data);
            if (data.response) {
                var response = data.response[0].get_new_release.response;
                if (response && response.status == 'success') {
                    __WEBPACK_IMPORTED_MODULE_8__services_common_service__["a" /* CommonService */].updateAvailable = true;
                    // show update
                    //this.rootPage = 'UpdatePage'
                }
            }
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* Splashscreen */].hide();
        }, function (err) {
            // show offline
            _this.params.setIsInternetAvailable(false);
        }, function () { });
    };
    HomePage.prototype.onOpenLeftMenu = function () {
        this.appSound.play('menuClick');
        // if (localStorage.getItem("imageUrl")) {
        //     this.image_Data = localStorage.getItem("imageUrl")
        // }
        // else if (this.imageUpdate != "") {
        //     this.image_Data = this.imageUpdate
        // }
        // else {
        //     this.image_Data = "assets/icon/user.svg"
        // }
    };
    HomePage.prototype.markAsRead = function (cardId, index) {
        this.appSound.play('buttonClick');
        var btn = document.getElementById('btnRead' + index).style.backgroundColor = 'gray';
        this.srvHome.markAsRead(cardId).subscribe(function (data) {
            if (data) {
                if (data.response[0].mark_home_inbox_message.response.status == 'SUCCESS') {
                    console.log("msg read");
                }
            }
        });
    };
    HomePage.prototype.deleteNotification = function (cardId, index) {
        var _this = this;
        this.appSound.play('buttonClick');
        this.srvHome.deleteMsg(cardId).subscribe(function (data) {
            if (data) {
                if (data.response[0].delete_home_inbox_message.response.status == 'SUCCESS') {
                    document.getElementById("delete" + index).style.display = 'none';
                }
            }
        }), function (Err) {
            _this.appSound.play('Error');
        };
    };
    HomePage.prototype.saveItem = function () {
        console.log("saveItem()");
    };
    HomePage.prototype.alert = function (i) {
        this.appSound.play('buttonClick');
        var inboxPopup = this._modalCtrl.create('inboxModal', { CurrentMessage: this.messages[i] });
        inboxPopup.present();
    };
    HomePage.prototype.mgmPage = function () {
        this.appSound.play('buttonClick');
        var mgmModal = this._modalCtrl.create('referFriend');
        mgmModal.present();
    };
    HomePage.prototype.updateNick = function () {
        if (!HomePage_1.userNick) {
            this.nickName = this.accountDetails.nick_name;
            if (this.nickName == "null") {
                this.nickName = "";
            }
        }
        else if (!HomePage_1.userNick && !this.accountDetails.nick_name) {
            this.nickName = " ";
        }
        else {
            this.nickName = HomePage_1.userNick;
        }
    };
    HomePage.prototype.updateCode = function () {
        this.userCodeMgm = this.accountDetails.user_code;
        if (!this.userCodeMgm) {
            this.userCodeMgm = "";
        }
        else if (this.userCodeMgm == "null") {
            this.userCodeMgm = "";
        }
    };
    HomePage.prototype.updateProfilePic = function (imageUrl) {
        if (imageUrl && imageUrl.includes('https')) {
            this.image_Data = imageUrl;
        }
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slidingItem'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ItemSliding */])
], HomePage.prototype, "slideItm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('item'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Item */])
], HomePage.prototype, "Itm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btn-unread'),
    __metadata("design:type", Object)
], HomePage.prototype, "btnRead", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */])
], HomePage.prototype, "nav", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("messageDetails"),
    __metadata("design:type", Object)
], HomePage.prototype, "messageDetails", void 0);
HomePage = HomePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\home\home.html"*/'<ion-menu side="right" type="push" swipeEnabled=false [content]="content" id="menu1" (ionOpen)="onOpenRightMenu()">\n\n  <ion-content class="home-right-menu-wrapper">\n\n    <ion-item class="notification-bar">\n      <ion-icon name="ios-log-out" (click)="closeMenu1()"></ion-icon>\n      <span class="home-msg-header-text"> Notifications</span>\n    </ion-item>\n\n    <ion-list>\n      <ion-item *ngIf="messageLoading">\n        <ion-spinner class="center" name="bubbles"></ion-spinner>\n      </ion-item>\n\n      <ion-item-sliding #slidingItem id="delete{{i}}" *ngFor="let message of messages let i=index">\n        <ion-item #item class="home-msg-wrapper" text-wrap (tap)="alert(i)">\n          <span item-left>\n            <img *ngIf="message.icon_url" src="{{message.icon_url}}" alt="" width="24" height="24" />\n            <img *ngIf="!message.icon_url" src="assets/icon/notification_ico.svg" alt="" width="16" height="16" />\n          </span>\n          <!-- <span class="notific-new"></span> -->\n          <p class="home-msg-card-title">{{message.card_title}}</p>\n        </ion-item>\n\n        <ion-item-options side="right">\n          <button ion-button class="btn-delete" (click)="deleteNotification(message.card_id,i)">Delete</button>\n          <button ion-button id="btnRead{{i}}" *ngIf="message.status==\'unread\'" class="btn-read" (tap)="markAsRead(message.card_id,i)">Mark As Read</button>\n          <button ion-button *ngIf="message.status==\'read\'" class="btn-unread">Mark As Read</button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu side="left" type="overlay" swipeEnabled=false [content]="content" persistent="true" id="menu2" (ionOpen)="onOpenLeftMenu()">\n  <ion-content class="menuLeftBg">\n    <!-- <ion-item text-center> -->\n    <div class="home-leftMenu-wrapper">\n\n      <div class="home-leftMenu-profile-wrap">\n        <ion-avatar class="account-avatarSlide">\n          <img class="profile-pictureSlide" src="{{image_Data}}" width="72" height="72" />\n          <span class="home-profile-name-text">Hi,</span>\n          <span class="home-profile-name">{{nickName}}</span>\n        </ion-avatar>\n      </div>\n\n\n\n    </div>\n    <div class="UpperPart">\n      <p class="home-rightMenu-acc-desc">\n\n        {{accountDetails?.program_description}}\n      </p>\n    </div>\n    <ion-item text-center>\n      <div class="sidemenuCoupon" (click)="mgmPage()">\n        <ion-row class="home-referCode">\n          <ion-col class="home-referCode-wrapper" col-7>\n            <span class="home-userCode">{{userCodeMgm}}</span>\n          </ion-col>\n          <ion-col col-5>\n            <ion-icon ios="ios-share-outline" md="ios-share-outline" class="shareBucketicon"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-item>\n    <!-- <ion-item class="notification-bar"> </ion-item> -->\n    <ion-list>\n      <ion-item text-wrap (tap)="onLeftMenuSelection(\'accounts\')">\n        <span class="color">Accounts </span>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n    <ion-item text-wrap class="home-rightMenu-help" (click)="onLeftMenuSelection(\'help\')">\n      <span class="color">Help</span>\n    </ion-item>\n\n    <ion-item>\n      <div text-center>\n        <img class="home-rightMenu-foo-icon" src="assets/icon/logo_ico.svg" height="20px" width="20px">\n        <span class="home-rightMenu-foo-text">Lotto Social app version 2.6.1</span>\n      </div>\n    </ion-item>\n  </ion-footer>\n</ion-menu>\n\n<!-- <popup-message-details #messageDetails [existing-cards]="userCards"></popup-message-details> -->\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_5__services_params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_6__services_service_home__["a" /* HomeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_7__services_db_service__["a" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_8__services_common_service__["a" /* CommonService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_11__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
], HomePage);

var HomePage_1;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheController; });
var CacheController = (function () {
    function CacheController(params, platform, srvDb, srvHome, alertCtrl) {
        this.params = params;
        this.platform = platform;
        this.srvDb = srvDb;
        this.srvHome = srvHome;
        this.alertCtrl = alertCtrl;
        this.expiresInMinutes = 5;
    }
    CacheController.prototype.loadModules = function (action, page_id, module_names, refreshCache) {
        var _this = this;
        if (refreshCache === void 0) { refreshCache = false; }
        if (!this.platform.is('cordova')) {
            return this.fetchModuleDataFromAPI(action, page_id, module_names);
        }
        var early = new Date();
        early.setMinutes(early.getMinutes() + this.expiresInMinutes);
        var sel_query = "SELECT t2.Module_Json FROM tbl_Page_Module as t1 JOIN tbl_Module as t2 ";
        sel_query += "on (t1.Module_ID = t2.Module_ID) where t2.Module_Json !='' AND t2.Date_Created <=? ";
        sel_query += "AND t2.Module_Name IN (?)";
        return new Promise(function (resolve, reject) {
            _this.srvDb.raw_query(sel_query, [early, module_names.join(",")]).then(function (res) {
                // console.log("local data", res);
                if (!refreshCache && res && res.rows.length > 0) {
                    var data = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        data.push(JSON.parse(res.rows.item(i).Module_Json));
                    }
                    resolve(data);
                }
                else {
                    console.log("fetching remote data");
                    // Fetch the Data from Remote API Start
                    _this.fetchModuleDataFromAPI(action, page_id, module_names)
                        .then(function (data) {
                        resolve(data);
                    }, function (err) {
                        reject(err);
                    });
                }
            }, function (err) {
                console.log(module_names + " local db error ", err);
            });
        });
    };
    CacheController.prototype.fetchModuleDataFromAPI = function (action, pageId, moduleNames) {
        var _this = this;
        console.log("fetchModuleDataFromAPI", moduleNames);
        return new Promise(function (resolve, reject) {
            var count = 0;
            _this.srvHome.getModules(action, pageId, moduleNames).take(1)
                .subscribe(function (data) {
                // console.log("fetchModuleDataFromAPI successful", data);
                if (data) {
                    resolve(data.response);
                    // Fetch the Data from Remote API End
                    // Insert the remote response into local db
                    _this.cacheFetchedData(pageId, data.response);
                }
                else {
                    reject(Error("Data not found"));
                }
            }, function (err) {
                count++;
                if (count == 1) {
                    _this.params.setIsInternetAvailable(false);
                }
                console.log("error on " + action, err);
                // show offline
                reject(err);
            }, function () { });
        });
    };
    CacheController.prototype.cacheFetchedData = function (page_id, fetchedData) {
        var _this = this;
        console.log("cacheFetchedData", fetchedData);
        var module_json = fetchedData;
        var result_page_id = -1;
        // 1.tbl_Page 
        var insert_query = "INSERT OR REPLACE INTO tbl_Page(`Page_ID`,`Complete_Json_Data`,`Status`,`Date_Created`) ";
        insert_query += "VALUES(?,?,?,?); ";
        this.srvDb.raw_query(insert_query, [page_id, JSON.stringify(fetchedData), 'active', new Date()]).then(function (page_result) {
            console.log("INSERT ID -> ", page_result);
            if (!page_result) {
                return;
            }
            result_page_id = page_result.insertId;
            // 2.tbl_modules 
            for (var i = 0; i < fetchedData.length; ++i) {
                var keys = Object.keys(fetchedData[i]);
                console.log("cacheFetchedData keys", keys);
                insert_query = "INSERT OR REPLACE INTO tbl_Module(`Module_Name`,`Module_Json`,`Status`,`Date_Created`) VALUES(?,?,?,?); ";
                _this.srvDb.raw_query(insert_query, [keys[0], JSON.stringify(module_json[i]), 'active', new Date()]).then(function (module_result) {
                    console.log("INSERT ID -> ", module_result);
                    // 3.tbl_Page_Module 
                    insert_query = "INSERT OR REPLACE INTO tbl_Page_Module(`Page_ID`,`Module_ID`,`Status`,`Date_Created`) VALUES(?,?,?,?); ";
                    _this.srvDb.raw_query(insert_query, [result_page_id, module_result.insertId, 'active', new Date()]).then(function (result) {
                        console.log("INSERT ID -> ", result);
                    }, function (error) {
                        console.error(error);
                    });
                }, function (error) {
                    console.error(error);
                });
            }
        }, function (error) {
            console.error(error);
        });
    };
    CacheController.prototype.clearDatabaseOnLogout = function () {
        console.log("CacheController::clearDatabaseOnLogout ");
        // delete tbl_Page table data
        var delete_page = "DELETE FROM tbl_Page;";
        this.srvDb.raw_query(delete_page, []).then(function (page_result) {
            // console.log("clearDatabaseOnLogout SUCCESS ", page_result );
        }, function (error) {
            console.error(error);
        });
        // tbl_Page_Module get_home_card", "get_account_details", "get_home_message"
        var tbl_Page_Module = "DELETE FROM get_home_card; ";
        this.srvDb.raw_query(tbl_Page_Module, []).then(function (module_result) {
            // console.log("clearDatabaseOnLogout SUCCESS ", module_result );
        }, function (error) {
            console.error(error);
        });
        var get_account_details = "DELETE FROM get_account_details; ";
        this.srvDb.raw_query(get_account_details, []).then(function (module_result) {
            // console.log("clearDatabaseOnLogout SUCCESS ", module_result );
        }, function (error) {
            console.error(error);
        });
        var get_home_message = "DELETE FROM get_home_message; ";
        this.srvDb.raw_query(get_home_message, []).then(function (module_result) {
            // console.log("clearDatabaseOnLogout SUCCESS ", module_result );
        }, function (error) {
            console.error(error);
        });
        var delete_module = "DELETE FROM tbl_Module; ";
        this.srvDb.raw_query(delete_module, []).then(function (module_result) {
            // console.log("clearDatabaseOnLogout SUCCESS ", module_result );
        }, function (error) {
            console.error(error);
        });
        // delete tbl_Page_Module data
        var delete_page_module = "DELETE FROM tbl_Page_Module; ";
        this.srvDb.raw_query(delete_page_module, []).then(function (result) {
            // console.log("clearDatabaseOnLogout SUCCESS ", result);
        }, function (error) {
            console.error(error);
        });
    };
    return CacheController;
}());

//# sourceMappingURL=cache_controller.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_params__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app_sound_app_sound__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(app, params, network, storage, platform, appSound, authSrv, navParams, modalCtrl, navCtrl, commonSrv, alertCtrl, loadingCtrl, popoverCtrl, cdRef) {
        var _this = this;
        this.app = app;
        this.params = params;
        this.network = network;
        this.storage = storage;
        this.platform = platform;
        this.appSound = appSound;
        this.authSrv = authSrv;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.commonSrv = commonSrv;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.cdRef = cdRef;
        this.wrongPass = false;
        this.selectedCountry = {
            name: "United Kingdom",
            iso2: "gb",
            dialCode: "44",
            priority: 0,
            areaCodes: null
        };
        this.selectedCountryMobile = {
            name: "United Kingdom",
            iso2: "gb",
            dialCode: "44",
            priority: 0,
            areaCodes: null
        };
        this.countryNumberMobile = "";
        this.forgotPassPopup = false;
        this.forgotPassPopupConfirm = false;
        this.forgotPassPopupFail = false;
        this.warningPhone = false;
        this.warningPhonePopup = false;
        this.showPass = false;
        this.errorMsg = "dfs";
        // public countryes:any[];
        this.storageReady = false;
        this.login = {
            free_reg_msn: '',
            free_reg_pwd: ''
        };
        var a = this.params;
        storage.ready().then(function () { return _this.storageReady = true; });
    }
    LoginPage.prototype.loadCountries = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        this.commonSrv.getCountry().subscribe(function (data) {
            loader.dismiss();
            console.log("loadCountries", data);
            if (data
                && data.response[0]
                && data.response[0].get_country_code_flag
                && data.response[0].get_country_code_flag.response
                && data.response[0].get_country_code_flag.response.country_code_group) {
                // this.countryes = data.response[0].get_country_code_flag.response.country_code_group
                // this.selectedCountry = this.countryes[0];
                // this.countryNumber = this.selectedCountry.country_code;
                // console.log("countries successful", this.countryes);
            }
        }, function (err) {
            loader.dismiss();
            console.log("error", err);
            // show offline
            _this.params.setIsInternetAvailable(false);
        }, function () { });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.presentPopover = function (ev) {
        var _this = this;
        this.countryPopOver = this.popoverCtrl.create('CountryListPopPage', {
            cb: function (data) {
                console.log("on selected country", data);
                _this.selectedCountry = data;
            }
        });
        this.countryPopOver.present({ ev: ev });
        this.countryPopOver.onDidDismiss(function (data) {
            if (data) {
                _this.selectedCountryMobile.name = data.name;
                _this.selectedCountryMobile.dialCode = data.dialCode;
                _this.selectedCountryMobile.iso2 = data.iso2;
            }
        });
    };
    LoginPage.prototype.presentPopoverMobile = function (ev) {
        var _this = this;
        this.countryPopOver = this.popoverCtrl.create('CountryListPopPage', {
            cb: function (data) {
                console.log("on selected country", data);
                _this.selectedCountryMobile = data;
                _this.countryNumberMobile = data.dialCode;
            }
        });
        this.countryPopOver.present({ ev: ev });
    };
    LoginPage.prototype.backButtonPopupClose = function () {
        this.appSound.play('buttonClick');
        this.forgotPassPopupConfirm = false;
        this.forgotPassPopupFail = false;
        this.forgotPassPopup = false;
        this.selectedCountryMobile.name = this.selectedCountry.name;
        this.selectedCountryMobile.dialCode = this.selectedCountry.dialCode;
        this.selectedCountryMobile.iso2 = this.selectedCountry.iso2;
    };
    LoginPage.prototype.showPassword = function (input) {
        this.appSound.play('buttonClick');
        this.showPass = !this.showPass;
        input.type = input.type === 'password' ? 'text' : 'password';
        if (input.type === 'password') {
            $('#pwd').attr('type', 'password');
            $("input[name='password']").attr('type', 'password');
        }
        else {
            $('#pwd').attr('type', 'text');
            $("input[name='password']").attr('type', 'text');
        }
        // this.cdRef.detectChanges();
    };
    LoginPage.prototype.submitLogin = function () {
        var _this = this;
        this.appSound.play('buttonClick');
        if (this.LoginData.form.controls.password._value == "") {
            return alert("Enter login details correctly");
        }
        this.prepareMobile();
        this.login.country_code = this.selectedCountry.dialCode;
        console.log("submitLogin", this.login);
        // if (this.phoneValidator(this.login.free_reg_msn)) {
        //     this.warningPhone = true;
        //     return;
        // }
        //   this.warningPhone = false;
        //phone validation
        if (this.login.free_reg_msn == "") {
            this.warningPhone = true;
            this.mobileValidationError = "Please enter your mobile number.";
            return;
        }
        else if (this.login.free_reg_msn != "" && !this.validateNumeric(this.login.free_reg_msn)) {
            this.warningPhone = true;
            this.mobileValidationError = "Please enter a valid Mobile Number.";
            return;
        }
        else if (this.login.free_reg_msn.length < 5) {
            this.warningPhone = true;
            this.mobileValidationError = "Mobile number too short, please enter a valid number.";
            return;
        }
        else if (this.login.free_reg_msn.length > 12) {
            this.warningPhone = true;
            this.mobileValidationError = "Mobile number too long, please enter a valid number.";
            return;
        }
        // else if (this.login.mobile.substr(0, 2) != "07" && this.login.mobile.substr(0, 2) != "44") {
        //     alert("Please enter a valid UK number starting with 07 or 44");
        // }
        //password validation
        if (this.login.free_reg_pwd == '') {
            alert("Please enter your password");
            return;
        }
        else if (this.login.free_reg_pwd.length < 6) {
            alert('Password must contain at least 6 characters..');
            return;
        }
        else if (this.validate_pwd(this.login.free_reg_pwd) == true) {
            alert('Password contains invalid characters.');
            return;
        }
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        localStorage.setItem('appCurrentUserid', this.login.free_reg_msn);
        this.authSrv.loginUser(this.selectedCountry.dialCode, this.login.free_reg_msn, this.login.free_reg_pwd).subscribe(function (data) {
            console.log("user login successful", data);
            try {
                data = data.response[0].login.response;
                localStorage.setItem('isAppLogin', data);
            }
            catch (e) {
                data = undefined;
            }
            console.log("user login data", data);
            // store in secure storage
            console.log("is cordova", _this.platform.is('cordova'), (data.status != "FAIL"));
            // get authorization token
            if (data) {
                if (data.status != "FAIL") {
                    loader.dismiss();
                    _this.getJWTToken(data);
                }
                else {
                    loader.dismiss();
                    var alert_1 = _this.alertCtrl.create({
                        title: data.status,
                        subTitle: data.message,
                        buttons: ['Ok']
                    });
                    alert_1.present();
                    // let modal = this.modalCtrl.create('CommonErrorModelPage', { errorInfo: data })
                    // modal.present();
                    // modal.onDidDismiss(data => {
                    //        
                    //     if (data == "signup") {
                    //            
                    //         var tabs: Tabs = this.navCtrl.parent;
                    //         tabs.select(0);
                    //     }
                    // })
                }
            }
        }, function (err) {
            loader.dismiss();
            console.log("user login error", err);
            // show offline
            _this.params.setIsInternetAvailable(false);
        }, function () { return console.log("user login complete"); });
        this.platform.ready().then(function (readySource) {
            if (_this.platform.is('cordova')) {
                webengage.engage();
                webengage.user.login(_this.login.free_reg_msn);
                webengage.screen("LoginPage");
                webengage.notification.onDismiss(function (inAppData) {
                });
                webengage.engage();
            }
        });
    };
    LoginPage.prototype.getJWTToken = function (data) {
        var _this = this;
        this.storage.set('DF_EMAIL', data.df_customer_details.email);
        this.storage.set('DF_PASSWORD', data.df_customer_details.pword);
        console.log(data);
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        this.authSrv.getJWTToken(data.df_customer_details.email, data.df_customer_details.pword).subscribe(function (successData) {
            loader.dismiss();
            // go to home page
            __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session = data;
            var datetime = new Date();
            datetime.setHours(datetime.getHours() + 10);
            var ne = _this.storage.get("session_ID");
            _this.storage.set('session_ID', __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId);
            _this.storage.set('user_session_token', successData.session_token);
            __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].JWT = successData.session_token;
            _this.storage.set('session_token_time', datetime);
            console.log("datetime of token", datetime);
            _this.storage.set('user_session_id', successData.session_id);
            _this.storage.set('session', JSON.stringify(data))
                .then(function () { return _this.redirectToHome(); })
                .catch(function (e) { return console.log("login error", e); });
            var nav = _this.app.getRootNav();
            nav.setRoot('HomePage');
        }, function (error) {
            loader.dismiss();
            console.log("user login error", error);
            // show offline
            _this.params.setIsInternetAvailable(false);
        }, function () { });
    };
    LoginPage.prototype.redirectToHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    LoginPage.prototype.submitMobile = function () {
        var _this = this;
        var free_reg_msn = "" + this.selectedCountryMobile.dialCode + this.login.mobile;
        console.log("submitMobile", free_reg_msn);
        if (this.phoneValidator(free_reg_msn)) {
            this.warningPhonePopup = true;
            return;
        }
        this.warningPhonePopup = false;
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        this.authSrv.forgotPassword(this.selectedCountryMobile.dialCode, this.login.mobile).subscribe(function (data) {
            loader.dismiss();
            console.log("successful", data);
            if (data.response[0].forget_password.response.status == "SUCCESS") {
                _this.forgetPassResponseText = data.response[0].forget_password.response.message;
                _this.forgotPassPopupConfirm = true;
                _this.forgotPassPopupFail = false;
            }
            else {
                _this.forgotPassPopupConfirm = false;
                _this.forgotPassPopupFail = true;
                _this.forgetPassResponseText = data.response[0].forget_password.response.message;
            }
        }, function (err) {
            loader.dismiss();
            console.log("error", err);
            _this.errorMsg = err;
            _this.forgotPassPopupFail = true;
        }, function () {
            console.log("complete");
        });
    };
    LoginPage.prototype.prepareMobile = function () {
        var free_reg_msn = this.login.mobile;
        var msn_len = free_reg_msn.length;
        // var countryData = $('#free_reg_msn').intlTelInput("getSelectedCountryData");/44
        var cc = this.selectedCountry.dialCode.replace('+', '');
        if (this.login.mobile.substr(0, 1) == "0") {
            var p = this.login.mobile.substr(1, msn_len);
            free_reg_msn = cc + p;
        }
        else if (free_reg_msn.substr(0, cc.length) == cc) {
            var p = free_reg_msn.substr(cc.length, msn_len);
            free_reg_msn = cc + p;
        }
        else {
            free_reg_msn = cc + this.login.mobile;
        }
        this.login.free_reg_msn = free_reg_msn;
    };
    LoginPage.prototype.phoneValidator = function (value) {
        if (value !== '') {
            if (!value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
                return true;
            }
        }
        return false;
    };
    LoginPage.prototype.validateNumeric = function (strValue) {
        var objRegExp = /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;
        return objRegExp.test(strValue);
    };
    LoginPage.prototype.validate_pwd = function (name_value) {
        var name_value = name_value.toLowerCase();
        var nameRegex = /[^a-zA-Z0-9]/;
        return nameRegex.test(name_value);
    };
    LoginPage.prototype.ngOnDestroy = function () {
        this.cdRef.detach(); // try this
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('animation'),
    __metadata("design:type", Object)
], LoginPage.prototype, "input", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginForm'),
    __metadata("design:type", Object)
], LoginPage.prototype, "LoginData", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\login\login.html"*/'<ion-header>\n	<ion-navbar>\n		<p padding-left> </p>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<img class="lotto-logo center" src="assets/img/logo@3x.png" alt="Logo">\n\n	<p class="headline">Welcome back</p>\n\n	<form #loginForm="ngForm" (ngSubmit)="submitLogin()">\n\n		<ion-grid>\n			<ion-row>\n				<ion-col col-2>\n					<ion-item *ngIf="selectedCountry" class="remove-inner" (click)="presentPopover($event)">\n						<span item-right ion-button clear icon-right class="{{\'flag-icon flag-icon-\' + selectedCountry.iso2 }}" width="16" height="16"></span>\n						<!-- <span item-right ion-button clear width="16" height="16" > {{selectedCountry.iso2 | uppercase}}</span> -->\n						<ion-icon item-right name="arrow-down" class="small-icon"></ion-icon>\n					</ion-item>\n				</ion-col>\n				<ion-col col-10 #popoverText>\n					<ion-item>\n						<ion-input type="tel" name="mobile" [(ngModel)]="login.mobile" placeholder="Enter your mobile number" required></ion-input>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-10>\n					<ion-item class=\'pwdinput\'>\n\n						<ion-input id=\'pwd\' class=\'pwdinput\' #input type="password" name="password" [(ngModel)]="login.free_reg_pwd" [attr.minlength]="6"\n						 minlength="6" placeholder="Enter your password"></ion-input>\n					</ion-item>\n				</ion-col>\n				<ion-col col-2>\n					<ion-item>\n						<ion-icon item-right *ngIf="showPass" name="ios-eye" (click)="showPassword(input)"></ion-icon>\n						<ion-icon item-right *ngIf="!showPass" name="ios-eye-off" (click)="showPassword(input)"></ion-icon>\n\n					</ion-item>\n				</ion-col>\n			</ion-row>\n\n		</ion-grid>\n\n		<p *ngIf="warningPhone" class="warning">\n			<ion-icon name="ios-warning-outline"> </ion-icon> {{mobileValidationError}}</p>\n		<div>\n			<div padding>\n				<button class="btn btn-login btn-block " type="submit">LOGIN</button>\n			</div>\n		</div>\n		<p>\n			<a text-center class="center" (click)="forgotPassPopup=true;">Forgot your password?</a>\n		</p>\n	</form>\n\n</ion-content>\n\n<div class="popup" *ngIf="forgotPassPopup">\n	<ion-backdrop (click)="forgotPassPopup=!forgotPassPopup;" disable-activated="" class="forgot-password-backdrop" role="presentation"\n	 tappable=""></ion-backdrop>\n\n	<div class="popover-content center">\n		<ion-card>\n			<div *ngIf="forgotPassPopupFail" class="errorcard">\n				<button ion-button icon-only class="failedBackground btn-card" (click)="backButtonPopupClose()">\n					<ion-icon class="faild-icon">\n						<img src="assets/icon/failed_icon.png"> </ion-icon>\n				</button>\n				<ion-row text-center>\n					<ion-col col-12 class="messagecolor">\n						{{forgetPassResponseText}}\n					</ion-col>\n				</ion-row>\n				<ion-row class="move-btn-row">\n					<ion-col col-12>\n						<button class="failedMoveToVoucherButton btn-move" ion-button outline round color="light" (click)="backButtonPopupClose()">TRY AGAIN</button>\n					</ion-col>\n				</ion-row>\n			</div>\n\n			<div *ngIf="forgotPassPopupConfirm" class="forgot-pass-confirmed">\n				<img class="lotto-logo center" src="assets/icon/check.svg" alt="Check" width="100" height="100" />\n				<p text-center color="light">{{forgetPassResponseText}}</p>\n\n				<div padding>\n					<button class="center auth-button" ion-button outline round color="light" (click)="backButtonPopupClose()">Back to login</button>\n				</div>\n			</div>\n\n			<div *ngIf="!forgotPassPopupConfirm && !forgotPassPopupFail">\n				<p text-center padding>Enter the mobile number for your account to receive a password reminder</p>\n				<form #loginForm="ngForm" (ngSubmit)="submitMobile()">\n					<ion-grid>\n						<ion-row>\n							<ion-col col-2>\n								<ion-item class="remove-inner" (click)="presentPopoverMobile($event)">\n									<span *ngIf="selectedCountryMobile" item-right ion-button clear icon-right class="{{\'flag-icon flag-icon-\' + selectedCountryMobile.iso2 }}"\n									 width="16" height="16"></span>\n									<ion-icon item-right name="arrow-down" class="small-icon"></ion-icon>\n								</ion-item>\n							</ion-col>\n							<ion-col col-10 #popoverText>\n								<ion-item>\n									<ion-input type="tel" name="mobile" [(ngModel)]="login.mobile" placeholder="Enter your mobile number" required></ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n\n					</ion-grid>\n\n					<p *ngIf="warningPhonePopup" class="warning">\n						<ion-icon name="ios-warning-outline"> </ion-icon> Please enter a valid mobile number</p>\n\n					<div padding>\n						<button class="btn btn-positive" type="submit">RECOVER PASSWORD</button>\n						<p>\n							<a text-center class="center" (click)="forgotPassPopup=false; ">\n								<ion-icon name="ios-arrow-round-back"></ion-icon> Back to login.</a>\n						</p>\n					</div>\n				</form>\n			</div>\n		</ion-card>\n	</div>\n\n</div>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_6__services_params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=11.js.map