webpackJsonp([5],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySyndicatePageModule", function() { return MySyndicatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_syndicate__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_badge__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_syndicate_service__ = __webpack_require__(789);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MySyndicatePageModule = (function () {
    function MySyndicatePageModule() {
    }
    return MySyndicatePageModule;
}());
MySyndicatePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_syndicate__["a" /* MySyndicatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_syndicate__["a" /* MySyndicatePage */]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_badge__["a" /* Badge */], __WEBPACK_IMPORTED_MODULE_5__providers_syndicate_service__["a" /* SyndicateService */]]
    })
], MySyndicatePageModule);

//# sourceMappingURL=my-syndicate.module.js.map

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

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Badge; });
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
 * @name Badge
 * @description
 * The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.
 *
 * Requires Cordova plugin: cordova-plugin-badge. For more info, please see the [Badge plugin docs](https://github.com/katzer/cordova-plugin-badge).
 *
 * @usage
 * ```typescript
 * import { Badge } from '@ionic-native/badge';
 *
 * constructor(private badge: Badge) { }
 *
 * ...
 *
 * this.badge.set(10);
 * this.badge.increase(1);
 * this.badge.clear();
 * ```
 */
var Badge = (function (_super) {
    __extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Clear the badge of the app icon.
     * @returns {Promise<boolean>}
     */
    Badge.prototype.clear = function () { return; };
    /**
     * Set the badge of the app icon.
     * @param {number} badgeNumber  The new badge number.
     * @returns {Promise<any>}
     */
    Badge.prototype.set = function (badgeNumber) { return; };
    /**
     * Get the badge of the app icon.
     * @returns {Promise<any>}
     */
    Badge.prototype.get = function () { return; };
    /**
     * Increase the badge number.
     * @param {number} increaseBy  Count to add to the current badge number
     * @returns {Promise<any>}
     */
    Badge.prototype.increase = function (increaseBy) { return; };
    /**
     * Decrease the badge number.
     * @param {number} decreaseBy  Count to subtract from the current badge number
     * @returns {Promise<any>}
     */
    Badge.prototype.decrease = function (decreaseBy) { return; };
    /**
     * Determine if the app has permission to show badges.
     * @returns {Promise<any>}
     */
    Badge.prototype.hasPermission = function () { return; };
    /**
     * Register permission to set badge notifications
     * @returns {Promise<any>}
     */
    Badge.prototype.registerPermission = function () { return; };
    Badge.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Badge.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Badge.prototype, "clear", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], Badge.prototype, "set", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Badge.prototype, "get", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], Badge.prototype, "increase", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], Badge.prototype, "decrease", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Badge.prototype, "hasPermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Badge.prototype, "registerPermission", null);
    Badge = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'Badge',
            plugin: 'cordova-plugin-badge',
            pluginRef: 'cordova.plugins.notification.badge',
            repo: 'https://github.com/katzer/cordova-plugin-badge',
            platforms: ['Android', 'Browser', 'iOS', 'Windows']
        })
    ], Badge);
    return Badge;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cus_header_cus_header__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_arrow_header_new_arrow_header__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__synd_cus_header1_synd_cus_header1__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__synd_cus_header2_synd_cus_header2__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_bar_progress_bar__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popup_confirm_payment_popup_confirm_payment__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__components_cus_header_cus_header__["a" /* CusHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__new_arrow_header_new_arrow_header__["a" /* NewArrowHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__synd_cus_header1_synd_cus_header1__["a" /* SyndCusHeader1Component */],
            __WEBPACK_IMPORTED_MODULE_5__synd_cus_header2_synd_cus_header2__["a" /* SyndCusHeader2Component */],
            __WEBPACK_IMPORTED_MODULE_7__popup_confirm_payment_popup_confirm_payment__["a" /* PopupConfirmPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_6__progress_bar_progress_bar__["a" /* ProgressBarComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__components_cus_header_cus_header__["a" /* CusHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__new_arrow_header_new_arrow_header__["a" /* NewArrowHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__synd_cus_header1_synd_cus_header1__["a" /* SyndCusHeader1Component */],
            __WEBPACK_IMPORTED_MODULE_5__synd_cus_header2_synd_cus_header2__["a" /* SyndCusHeader2Component */],
            __WEBPACK_IMPORTED_MODULE_7__popup_confirm_payment_popup_confirm_payment__["a" /* PopupConfirmPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_6__progress_bar_progress_bar__["a" /* ProgressBarComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CusHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_params__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_badge__ = __webpack_require__(780);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CusHeaderComponent = (function () {
    function CusHeaderComponent(params, badge) {
        this.params = params;
        this.badge = badge;
        this.showBell = false;
        // @Input('notification-count') notificationCount;  
        this.homeClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.log('CusHeaderComponent');
        this.inboxBellCount();
    }
    CusHeaderComponent.prototype.inboxBellCount = function () {
        var _this = this;
        this.unreadCount = this.params.unreadCount;
        this.params.events.subscribe('unread-count', function (count) {
            console.log('CusHeaderComponent::', count);
            _this.unreadCount = count;
            if (_this.unreadCount == undefined) {
                _this.unreadCount = 0;
                _this.badge.set(_this.unreadCount);
                _this.showBell = true;
            }
            else {
                _this.badge.set(_this.unreadCount);
                _this.showBell = true;
            }
            console.log("unread count is ----------------->>>>>>>>>>>>>>>>> ", _this.unreadCount);
        });
    };
    CusHeaderComponent.prototype.ngAfterViewInit = function () { };
    CusHeaderComponent.prototype.goHomePage = function () {
        this.params.goTab(0);
        /*
        if (this.homeClicked) {
            this.homeClicked.emit();
        }else{
            
        }*/
    };
    CusHeaderComponent.prototype.ionViewWillEnter = function () {
        console.log("I'm alive!");
        this.animateButton();
    };
    CusHeaderComponent.prototype.animateButton = function () {
        this.input.start({ type: 'bounce', duration: '5000' });
    };
    return CusHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('animation'),
    __metadata("design:type", Object)
], CusHeaderComponent.prototype, "input", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", Object)
], CusHeaderComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('isHome'),
    __metadata("design:type", Object)
], CusHeaderComponent.prototype, "isHome", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CusHeaderComponent.prototype, "homeClicked", void 0);
CusHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cus-header',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\components\cus-header\cus-header.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{title}}</ion-title>\n        <ion-buttons end>\n            <!-- <button *ngIf="!isHome" ion-button icon-only (click)="goHomePage()">\n                <ion-icon name="md-home"></ion-icon>\n            </button> -->\n            <button ion-button class="buttonNotification" icon-only menuToggle="menu1" *ngIf="showBell && unreadCount>0">\n                <ion-icon name="notification_ico" class="bell-icon"></ion-icon>\n                <ion-badge item-right mode="ios" color="badge">{{unreadCount}}</ion-badge>\n            </button>\n            <button ion-button icon-only menuToggle="menu1" *ngIf="showBell && unreadCount==0">\n                <ion-icon name="notification_ico" class="bell-icon"></ion-icon>\n                <ion-badge item-right mode="ios" color="badge">{{unreadCount}}</ion-badge>\n            </button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\components\cus-header\cus-header.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_params__["a" /* Params */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_badge__["a" /* Badge */]])
], CusHeaderComponent);

//# sourceMappingURL=cus-header.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewArrowHeaderComponent; });
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


var NewArrowHeaderComponent = (function () {
    function NewArrowHeaderComponent(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Hello CusHeader Component');
    }
    NewArrowHeaderComponent.prototype.close = function () {
        var check = localStorage.getItem("windowCall");
        if (check) {
            localStorage.removeItem("windowCall");
            window.history.back();
        }
        else {
            this.navCtrl.pop();
        }
    };
    NewArrowHeaderComponent.prototype.ngAfterViewInit = function () {
    };
    return NewArrowHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", Object)
], NewArrowHeaderComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('notification-count'),
    __metadata("design:type", Object)
], NewArrowHeaderComponent.prototype, "notificationCount", void 0);
NewArrowHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'newArrow-Header',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\components\new-arrow-header\new-arrow-header.html"*/'<ion-navbar hideBackButton="true">\n  <ion-icon class="icon" ios="ios-arrow-back" md="md-arrow-back" (click)="close()"></ion-icon>\n  <ion-title class="title">{{title}}</ion-title>\n</ion-navbar>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\components\new-arrow-header\new-arrow-header.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
], NewArrowHeaderComponent);

//# sourceMappingURL=new-arrow-header.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyndCusHeader1Component; });
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


var SyndCusHeader1Component = (function () {
    function SyndCusHeader1Component(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Hello CusHeader Component');
    }
    SyndCusHeader1Component.prototype.close = function () {
        this.navCtrl.pop();
    };
    SyndCusHeader1Component.prototype.ngAfterViewInit = function () {
    };
    return SyndCusHeader1Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", Object)
], SyndCusHeader1Component.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('notification-count'),
    __metadata("design:type", Object)
], SyndCusHeader1Component.prototype, "notificationCount", void 0);
SyndCusHeader1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'synd-cus-header1',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\components\synd-cus-header1\synd-cus-header1.html"*/'  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n          <span class="icon-cross" style="content: url(./assets/img/close.svg);min-width: 14px"></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\components\synd-cus-header1\synd-cus-header1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
], SyndCusHeader1Component);

//# sourceMappingURL=synd-cus-header1.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyndCusHeader2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(778);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SyndCusHeader2Component = (function () {
    function SyndCusHeader2Component(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Hello CusHeader Component');
    }
    SyndCusHeader2Component.prototype.skip = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    SyndCusHeader2Component.prototype.ngAfterViewInit = function () {
    };
    return SyndCusHeader2Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", Object)
], SyndCusHeader2Component.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('subtitle'),
    __metadata("design:type", Object)
], SyndCusHeader2Component.prototype, "subtitle", void 0);
SyndCusHeader2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'synd-cus-header2',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\components\synd-cus-header2\synd-cus-header2.html"*/'  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="skip()">\n            <!--<ion-icon ios="md-close" md="md-close"></ion-icon>-->\n            SKIP\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar class="my-sub-head">\n    <span class="sp2">{{subtitle}}</span>\n  </ion-toolbar>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\components\synd-cus-header2\synd-cus-header2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
], SyndCusHeader2Component);

//# sourceMappingURL=synd-cus-header2.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    return ProgressBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
    __metadata("design:type", Object)
], ProgressBarComponent.prototype, "progress", void 0);
ProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'progress-bar',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\components\progress-bar\progress-bar.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n      <!-- {{progress}}% -->\n  </div>\n</div>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\components\progress-bar\progress-bar.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupConfirmPaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_offer_service__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_params__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_sound_app_sound__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PopupConfirmPaymentComponent = (function () {
    function PopupConfirmPaymentComponent(params, iab, srvOffer, 
        // public navCtrl: NavController,
        viewCtrl, alertCtrl, appSound, loadingCtrl, navCtrl, storage) {
        this.params = params;
        this.iab = iab;
        this.srvOffer = srvOffer;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.appSound = appSound;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.slideInUp = false;
        this.confirmPayment = false;
        this.showBuyNowView = false;
        this.confirmPaymentSuccess = true;
        this.buttonValu = "";
        //public payment_Type:any;
        this.offer_detail = "";
        this.syndicate = {
            syndicate_name: "",
            total_cost: 0.00
        };
        this.offer = {
            syndicate_name: "",
            total_cost: 0.00
        };
        this.onPaymentComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.log('Hello PopupConfirmPaymentComponent Component');
        this.tabbarElement = document.querySelector('.tabbar');
    }
    PopupConfirmPaymentComponent.prototype.ngOnChanges = function (changes) {
        if (localStorage.getItem("buttonText")) {
            this.buttonValu = localStorage.getItem("buttonText");
        }
        if (changes["existingPaymilCards"] && changes["existingPaymilCards"].currentValue) {
            this.cardsValue = changes["existingPaymilCards"].currentValue;
            console.log("existingPaymilCards", this.cardsValue);
            for (var i = 0; i < this.cardsValue.length; ++i) {
                console.log("existingPaymilCards", this.cardsValue[i]);
                if (this.cardsValue[i].get_customer_paymill_card_details) {
                    this.cardsList = this.cardsValue[i].get_customer_paymill_card_details.response.cards;
                    this.offer_detail = this.cardsValue[i].get_customer_paymill_card_details.response.offer_name;
                }
                else if (this.cardsValue[i].get_customer_details) {
                    this.customerDetails = this.cardsValue[i].get_customer_details.response;
                }
                else if (this.cardsValue[i].offer) {
                    this.syndicate = this.cardsValue[i].offer;
                }
                else if (this.cardsValue[i].syndicate) {
                    this.syndicate = this.cardsValue[i].syndicate;
                }
            }
            // console.log("cardsList", this.cardsList );
            // console.log("customerDetails", this.customerDetails );
        }
        if (changes["paymentType"] && changes["paymentType"].currentValue) {
            this.payment_Type = changes["paymentType"].currentValue;
            console.log("existingPaymilCards", this.payment_Type);
        }
    };
    PopupConfirmPaymentComponent.prototype.ngOnInit = function () {
    };
    PopupConfirmPaymentComponent.prototype.buyNow = function () {
        console.log("PopupConfirmPaymentComponent::buyNow", this.cardSelected);
        this.appSound.play('buttonClick');
        if (this.cardSelected == '-1') {
            var opt = "location=no,toolbarposition=top";
            var str = 'https://nima.lottosocial.com/webview-auth/?redirect_to=free_reg&customer_id=1970400&customer_token=818113679640&Offer_ID=1188';
            // this.showBuyNowView = 
            !this.showBuyNowView;
            this.iab.create(str, 'blank', opt);
        }
        else if (typeof this.cardSelected == 'undefined') {
            alert("Select a card");
        }
        else {
            this.makeCardPayment(this.cardSelected);
        }
    };
    PopupConfirmPaymentComponent.prototype.makeCardPayment = function (selectedCardIndex) {
        var _this = this;
        this.appSound.play('buttonClick');
        var loader = this._showLoader();
        if (!selectedCardIndex) {
            loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: "Error!",
                subTitle: "Please select any option to make a payment",
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
        var card = this.cardsList[parseInt(selectedCardIndex)];
        console.log("PopupConfirmPaymentComponent::makeCardPayment", selectedCardIndex, card);
        if (card) {
            this.srvOffer.processPaymillCardPayment(this.syndicate, this.customerDetails, card).subscribe(function (data) {
                console.log("PopupConfirmPaymentComponent::checkCardExists() success", data);
                loader.dismiss();
                _this.showBuyNowView = true;
                data = data.response[0];
                debugger;
                if (data.process_paymill_card_payment) {
                    data = data.process_paymill_card_payment.response;
                    _this.payment_Type2 = _this.payment_Type;
                    console.log(_this.payment_Type);
                    _this.confirmPaymentSuccess = (data.status == "SUCCESS");
                }
                // if (this.onPaymentComplete) {
                //     this.onPaymentComplete.emit();
                // }
            }, function (err) {
                console.log("PopupConfirmPaymentComponent::checkCardExists() error", err);
                loader.dismiss();
                _this.confirmPaymentSuccess = false;
                _this.params.setIsInternetAvailable(false);
            });
        }
        else {
            loader.dismiss();
        }
    };
    PopupConfirmPaymentComponent.prototype.try_again = function () {
        this.appSound.play('buttonClick');
        this.togglePopup();
        this.confirmPaymentSuccess = true;
        this.showBuyNowView = false;
    };
    PopupConfirmPaymentComponent.prototype.viewTickets = function () {
        var _this = this;
        this.appSound.play('buttonClick');
        this.togglePopup();
        this.showBuyNowView = false;
        this.navCtrl.popToRoot().then(function () {
            _this.params.goTab(1);
        });
    };
    PopupConfirmPaymentComponent.prototype.viewOffers = function () {
        this.tabbarElement.style.display = 'flex';
        this.appSound.play('buttonClick');
        this.togglePopup();
        this.params.goTab(4);
        this.showBuyNowView = false;
    };
    PopupConfirmPaymentComponent.prototype.close = function () {
        var _this = this;
        this.togglePopup();
        this.showBuyNowView = false;
        this.navCtrl.popToRoot().then(function () {
            _this.params.goTab(2);
        });
    };
    PopupConfirmPaymentComponent.prototype.togglePopup = function () {
        var _this = this;
        console.log("showWhatsOn: " + this.slideInUp);
        if (this.slideInUp) {
            var timeoutId_1 = setTimeout(function () {
                _this.confirmPayment = !_this.confirmPayment;
                clearTimeout(timeoutId_1);
            }, 500);
            this.slideInUp = !this.slideInUp;
        }
        else {
            this.confirmPayment = !this.confirmPayment;
            var timeoutId_2 = setTimeout(function () {
                _this.slideInUp = !_this.slideInUp;
                clearTimeout(timeoutId_2);
            }, 10);
        }
    };
    PopupConfirmPaymentComponent.prototype._showLoader = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        return loader;
    };
    PopupConfirmPaymentComponent.prototype.viewTicketsCash = function () {
        this.togglePopup();
        this.params.goTab(1);
    };
    PopupConfirmPaymentComponent.prototype.getMoreLines = function () {
        this.togglePopup();
    };
    PopupConfirmPaymentComponent.prototype.backTohomeOffer = function () {
        this.togglePopup();
    };
    PopupConfirmPaymentComponent.prototype.viewTicketsFork = function () {
        var _this = this;
        this.togglePopup();
        this.tabbarElement.style.display = 'flex';
        this.navCtrl.popToRoot().then(function () {
            _this.params.goTab(1);
        });
    };
    PopupConfirmPaymentComponent.prototype.closeCashOffer = function () {
        this.togglePopup();
    };
    return PopupConfirmPaymentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PopupConfirmPaymentComponent.prototype, "onPaymentComplete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('existing-cards'),
    __metadata("design:type", Object)
], PopupConfirmPaymentComponent.prototype, "existingPaymilCards", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("payment-type"),
    __metadata("design:type", Object)
], PopupConfirmPaymentComponent.prototype, "paymentType", void 0);
PopupConfirmPaymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'popup-confirm-payment',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\components\popup-confirm-payment\popup-confirm-payment.html"*/'<div class="popup" *ngIf="confirmPayment" style="z-index: 102;">\n  <ion-backdrop disable-activated="" style="opacity:.5; z-index: 10;" role="presentation"></ion-backdrop>\n\n  <div class="popup-content animated" [ngClass]="(slideInUp) ? \'slideInUp\' : \'slideOutDown\' ">\n\n    <div class="payment-popover">\n      <p class="header" text-center>Confirm Purchase</p>\n      <span *ngIf="offer_detail">\n        <ion-item text-center text-wrap no-lines>\n          <p text-center style="margin-bottom: 10px">{{offer_detail}}</p>\n        </ion-item>\n      </span>\n      <ion-scroll style="width:100%;height:40vh" scrollY="true">\n        <ion-list radio-group class="windows" [(ngModel)]="cardSelected" scroll="true">\n          <ion-list-header text-center>\n            <span>\n              <ion-icon name="md-lock" color="secondary"></ion-icon>\n            </span>\n            <span style="font-size: 15px">Secure payment details</span>\n          </ion-list-header>\n\n          <ion-item *ngFor="let card of cardsList; let i = index">\n            <ion-label>Use preferred card:\n              <br>{{card.card_type | uppercase}} ending with {{card.last4_digit}}</ion-label>\n            <ion-radio value="{{i}}" item-left color="secondary" checked="{{(i==0)?true:false}}"></ion-radio>\n          </ion-item>\n          <ion-item style="border-bottom: 0px">\n            <ion-label>Use a different card</ion-label>\n            <ion-radio value="-1" item-left color="secondary"></ion-radio>\n          </ion-item>\n\n        </ion-list>\n      </ion-scroll>\n      <div>\n        <button class="center" ion-button padding color="secondary" (click)="buyNow(syndicate.total_cost)">Buy &pound;{{buttonValu}}</button>\n      </div>\n\n      <div>\n        <button class="center" ion-button clear (click)="togglePopup()">Not now</button>\n      </div>\n\n      <div class="buy-now" *ngIf="showBuyNowView">\n        <div class="outer buy-success" *ngIf="confirmPaymentSuccess">\n          <ion-grid class="middle">\n            <ion-row>\n              <img class="center" src="./assets/icon/check.svg" width="70" height="70" />\n            </ion-row>\n            <ion-row>\n              <p class="center" style="color: white;" text-center color="light">Syndicate {{syndicate.syndicate_name}} created!\n                <br>What you want to do next?\n              </p>\n            </ion-row>\n            <ion-row>\n              <button class="center" *ngIf="!payment_Type2==\'CashOffer\'" ion-button padding outline round color="light" (click)="viewTickets()">VIEW TICKETS</button>\n              <button class="center" *ngIf="payment_Type2==\'CashOffer\'" ion-button padding outline round color="light" (click)="viewTicketsCash()">VIEW MORE OFFERS</button>\n              <button class="center" *ngIf="payment_Type2==\'homeOffer\'" ion-button padding outline round color="light" (click)="viewTicketsCash()">View Tickets</button>\n            </ion-row>\n            <ion-row>\n              <button class="center" *ngIf="!payment_Type2==\'CashOffer\'" ion-button padding outline round color="light" (click)="viewOffers()">VIEW MORE OFFERS</button>\n              <button class="center" *ngIf="payment_Type2==\'CashOffer\'" ion-button padding outline round color="light" (click)="getMoreLines()">GET MORE LINES</button>\n            </ion-row>\n            <ion-row>\n              <button class="center" *ngIf="payment_Type2==\'syndicate\'" ion-button padding outline round color="light" (click)="viewTickets()">VIEW TICKETS</button>\n              <button class="center" *ngIf="payment_Type2==\'forkOffer\'" ion-button padding outline round color="light" (click)="viewTicketsFork()">VIEW TICKETS</button>\n              <!-- <button class="center" *ngIf="payment_Type==\'syndicate\'" ion-button padding outline round color="light" (click)="viewOffers()">VIEW TICKETS</button> -->\n            </ion-row>\n            <!-- <ion-row style="padding-top:150px;"> -->\n            <ion-row>\n              <button class="center" *ngIf="payment_Type2==\'syndicate\'" ion-button padding outline round color="light" (click)="close()">CLOSE</button>\n              <button class="center" *ngIf=" payment_Type2==\'cashOffer\'" ion-button padding outline round color="light" (click)="closeCashOffer()">CLOSE</button>\n              <button class="center" *ngIf=" payment_Type2==\'voucher\'" ion-button padding outline round color="light" (click)="closeCashOffer()">CLOSE</button>\n              <button class="center" *ngIf="payment_Type2==\'homeOffer\'" ion-button padding outline round color="light" (click)="backTohomeOffer()">BACK TO HOME</button>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <div class="outer buy-fail" *ngIf="!confirmPaymentSuccess">\n          <ion-grid class="middle">\n            <ion-row>\n              <img class="center" src="./assets/icon/cross.svg" width="80" height="80" />\n            </ion-row>\n            <ion-row>\n              <p class="center" text-center color="light">An error as occurred,\n                <br>please try again</p>\n            </ion-row>\n            <ion-row>\n              <button class="center" ion-button padding outline round color="light" (click)="try_again()">TRY AGAIN</button>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n\n      </div>\n\n    </div>\n\n  </div>\n</div>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\components\popup-confirm-payment\popup-confirm-payment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_4__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], PopupConfirmPaymentComponent);

//# sourceMappingURL=popup-confirm-payment.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyndicateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_common_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SyndicateService = (function () {
    function SyndicateService(http, sanitizer, file) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.file = file;
        this.apiUrl = 'https://nima.lottosocial.com/wp-json/mobi/v2/';
    }
    Object.defineProperty(SyndicateService, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]]];
        },
        enumerable: true,
        configurable: true
    });
    SyndicateService.getHeader = function () {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.set('Content-type', 'application/json');
        myHeaders.append('Authorization', 'Oauth oauth_consumer_key = "NDes1FKC0Kkg",' +
            'oauth_signature_method="HMAC-SHA1",' +
            'oauth_timestamp="1490087533",' +
            'oauth_nonce="dWL9pr",' +
            'oauth_version="1.0",' +
            'oauth_token="djKnEJjJ7TYw0VJEsxGEtlfg",' +
            'oauth_signature="mQF41gSF7KIuVqzqcI0nSX1UklE%3D"');
        return myHeaders;
    };
    SyndicateService.prototype.getcovers = function () {
        // let action = 'privatesyndicate/';
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.1",
                    "action": "ilist_banner",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_syndicate_images_lib",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id
                }]
        };
        //let headopt = SyndicateService.getHeader();
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.uploadCover = function (filePath) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.set('Authorization', 'Oauth oauth_consumer_key = "NDes1FKC0Kkg",' +
            'oauth_token="djKnEJjJ7TYw0VJEsxGEtlfg",' +
            'oauth_signature_method="HMAC-SHA1",' +
            'oauth_timestamp="1490087533",' +
            'oauth_nonce="dWL9pr",' +
            'oauth_version="1.0",' +
            'oauth_signature="mQF41gSF7KIuVqzqcI0nSX1UklE%3D"');
        myHeaders.append('Content-type', 'multipart/form-data');
        // var options = {
        //   fileKey: "file",
        //   fileName: 'img'+new Date().getTime(),
        //   chunkedMode: false,
        //   mimeType: "multipart/form-data",
        //   params : {
        //     'fileName':'img'+new Date().getTime()
        //   }
        // };
        var extension = filePath.substr(filePath.lastIndexOf('.') + 1);
        var options = {
            fileKey: 'file',
            //fileName: 'name.jpg',
            chunkedMode: false,
            mimeType: "multipart/form-data",
            headers: myHeaders
        };
        // console.log('inside service upload');
        // console.log(imgdata)
        console.log('inside upload service');
        console.log(extension);
        console.log(filePath);
        var apiUrl = 'https://nima.lottosocial.com/wp-json/mobi/v2/upload/?process=syndicate';
        // let headopt = SyndicateService.getHeader();
        //  let formData:FormData = new FormData();
        var formData = new FormData();
        formData.append('image', filePath);
        console.log('formdata', apiUrl, options);
        console.log(formData);
        return this.http.post(apiUrl, formData, options)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.getLotteries = function () {
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.3",
                    "action": "syndicate_lotteries",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_syndicate_lotteries",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id
                }]
        };
        //let headopt = SyndicateService.getHeader();
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.createSynd = function (d) {
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.4",
                    "action": "syndicate_lotteries",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "create_private_syndicate",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id,
                    "syndicate_name": JSON.parse(localStorage.getItem('sdetails')).title,
                    "image_url": JSON.parse(localStorage.getItem('sdetails')).image,
                    "type": localStorage.getItem('cardType'),
                    "product_group": d.product_group
                }]
        };
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.getTerms = function (id) {
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.5",
                    "action": "syndicate_terms",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_private_syndicate_terms",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id,
                    "private_syndicate_id": id
                }
            ]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.syndnumber = function (id) {
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.6",
                    "action": "get_syndicate",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_private_syndicate_details",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id,
                    "private_syndicate_id": id
                }
            ]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.saveTickets = function (sid, arr) {
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/privatesyndicate/";
        //let headopt = SyndicateService.getHeader();
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        // let headopt = SyndicateService.getHeader();
        // let action = CommonService.REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.9",
                    "action": "syndicate_buy",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "save_private_syndicate_tickets",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id,
                    "private_syndicate_id": sid,
                    "product_group": arr,
                }
            ]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.getBigJack = function (id) {
        // let action = CommonService.apiUrl + CommonService.version + "/privatesyndicate";
        // let headopt = SyndicateService.getHeader();
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.7",
                    "action": "get_private_syndicate_offers",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "fetch_lottery_products",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id
                },
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.7",
                    "action": "jackpot_list",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_big_jackpot_list",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id,
                    "private_syndicate_id": id
                },
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.7.1",
                    "action": "get_private_syndicate_offers",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "fetch_lottery_products_private_syndicate",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id
                }
            ]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.buySyndicate = function (data) {
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        // let action = "privatesyndicate";
        // let headopt = SyndicateService.getHeader();
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.syndicateList = function () {
        // let action = "privatesyndicate";
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        // let headopt = SyndicateService.getHeader();
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "6",
                    "screen_id": "6.1",
                    "action": "syndicate_list",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_syndicate_list",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id,
                }]
        };
        console.log('inside console');
        console.log(__WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session);
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.getTickets = function (pid, sid, stype) {
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        //let action = "https://nima.lottosocial.com/wp-json/mobi/v2/ticket/";
        //let headopt = SyndicateService.getHeader();
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "6",
                    "screen_id": "6.2",
                    "action": "syndicate_ticket",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_tickets",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id,
                    "syndicate_id": sid,
                    "product_id": pid,
                    "syndicate_type": stype
                }
            ]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.getBadgeOS = function () {
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/badgeos";
        // let headopt = SyndicateService.getHeader();
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "action": "get_badgeos",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "9",
                    "screen_id": "9.4",
                    "module_name": "get_badgeos",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id
                }
            ]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.loadWinnings = function () {
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        //let action = "https://nima.lottosocial.com/wp-json/mobi/v2/checkmywin/";
        //let headopt = SyndicateService.getHeader();
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "6",
                    "screen_id": "6.1",
                    "action": "get_prev_check_list",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_previous_check_list",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id
                }]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.checkWinnings = function () {
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        //let action = "https://nima.lottosocial.com/wp-json/mobi/v2/checkmywin/";
        // let headopt = SyndicateService.getHeader();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "9",
                    "screen_id": "9.1",
                    "action": "profile_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "cliamable_syndicates",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id
                }]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.checkwinFinal = function () {
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/checkmywin/";
        // let headopt = SyndicateService.getHeader();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "9",
                    "screen_id": "9.2",
                    "action": "get_win",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "check_mywinnings",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id
                }]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.prizeBreakDown = function () {
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/checkmywin/";
        // let headopt = SyndicateService.getHeader();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "9",
                    "screen_id": "9.2",
                    "action": "get_win",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "check_mywinnings",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id
                }]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.convertCash = function (claimevent_id) {
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/checkmywin/";
        // let headopt = SyndicateService.getHeader();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "9",
                    "screen_id": "9.3",
                    "action": "convert_cash",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "convert_credit_to_cash",
                    "claimevent_id": claimevent_id,
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id
                }]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.getSyndicateMeembers = function (sid) {
        //let action = "https://nima.lottosocial.com/wp-json/mobi/v2/member/";
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        //   let headopt = SyndicateService.getHeader();
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "5",
                    "screen_id": "5.1",
                    "action": "get syndicate meembers",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_private_syndicate_members",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id,
                    "private_syndicate_id": sid
                }]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.insertContact = function (cArr, sid) {
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/member/";
        // let headopt = SyndicateService.getHeader();
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
            "page_ID": "5",
            "screen_id": "5.2",
            "action": "contact_inserted",
            "website": "Lotto Social",
            "website_id": "27",
            "source_site": "mobi.lottosocial.com",
            "module_name": "insert_contacts",
            "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id,
            "private_syndicate_id": sid,
            "contact_group": cArr
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.socialsharing = function () {
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/socialsharing";
        // let headopt = SyndicateService.getHeader();
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "action": "get_mgm_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "5",
                    "screen_id": "5.2.1",
                    "module_name": "get_social_sharing",
                    "program_id": "9",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id
                }
            ]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.geInvitedSyndicateDetails = function (pid) {
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/privatesyndicate/";
        // let headopt = SyndicateService.getHeader();
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "12",
                    "screen_id": "12.1",
                    "action": "invited_on_login",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_invited_private_syndicate",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id,
                    "private_syndicate_id": pid
                }]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.joinSyndicate = function (pId, mId, groupId) {
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/privatesyndicate/";
        // let headopt = SyndicateService.getHeader();
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "12",
                    "screen_id": "12.2",
                    "action": "click_to_join",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "group_id": groupId,
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "join_private_syndicate",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id,
                    "private_syndicate_id": pId,
                    "invite_member_id": mId,
                    "join_status": "JOINED"
                }]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.DeclineInvite = function (pid, mid) {
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/privatesyndicate/";
        // let headopt = SyndicateService.getHeader();
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "action": "click_to_decline",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "12",
                    "screen_id": "12.3",
                    "module_name": "join_private_syndicate",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id,
                    "private_syndicate_id": pid,
                    "invite_member_id": mid,
                    "join_status": "declined"
                }]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.profanity = function (name) {
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/profanity_validate/";
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.1.1",
                    "action": "profanity_check",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "profanity_check",
                    "str": name
                }]
        };
        //let headopt = SyndicateService.getHeader();
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    SyndicateService.prototype.create_order_id = function (p_arr) {
        // let action = "https://nima.lottosocial.com/wp-json/mobi/v2/privatesyndicate_order/ ";
        // let headopt = SyndicateService.getHeader();
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [{
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].sessionId,
                    "action": "create_order_id",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "4",
                    "screen_id": "4.9.1",
                    "module_name": "create_order_id_for_PS_Payment",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.customer_id,
                    "ps_cart": p_arr
                }]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    //Prize summary API
    SyndicateService.prototype.getPrizeBreakDown = function () {
        var action = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].REDIS_API_URL;
        var headopt = __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].getHeaderForJWT();
        var data = {
            "request": [{
                    "page_id": "2",
                    "screen_id": "2..3",
                    "module_name": "get_prize_breakdown",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */].session.session_ID,
                    "claim_type": "lottery",
                    "claim_event_id": 150802
                }]
        };
        return this.http.post(action, data, { headers: headopt })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    return SyndicateService;
}());
SyndicateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], File])
], SyndicateService);

//# sourceMappingURL=syndicate-service.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySyndicatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_syndicate_service__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_offer_service__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_sound_app_sound__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MySyndicatePage = (function () {
    function MySyndicatePage(app, iab, navParams, events, modalCtrl, platform, srvOffer, navCtrl, appSound, _syndService, loadingCtrl, cdRef) {
        var _this = this;
        this.app = app;
        this.iab = iab;
        this.navParams = navParams;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.srvOffer = srvOffer;
        this.navCtrl = navCtrl;
        this.appSound = appSound;
        this._syndService = _syndService;
        this.loadingCtrl = loadingCtrl;
        this.cdRef = cdRef;
        this.syndArr = [];
        this.toggled = [];
        this.userCardsCount = 0;
        this.viewEmpty = false;
        this.downShowing = 0;
        this.down_arrow_showing = 0;
        this.events.subscribe("reloadSyndicate", function (data) {
            _this.loadSyndicate();
            _this.checkCardExists();
        });
    }
    MySyndicatePage.prototype.ionViewDidLoad = function () {
        this.customer_id = __WEBPACK_IMPORTED_MODULE_5__services_common_service__["a" /* CommonService */].session.customer_id;
    };
    MySyndicatePage.prototype.animateSyndicateList = function () {
        console.log("index is ");
    };
    // ionViewWillEnter() {
    //     this.delay(4000);
    //     this.content.enableScrollListener();
    // }
    MySyndicatePage.prototype.openOfferPage = function () {
        this.appSound.play('buttonClick');
        var tabs = this.navCtrl.parent.parent.parent;
        tabs.select(4);
    };
    MySyndicatePage.prototype.scrollHandlerSyndicate = function (event) {
        var innerDiv = document.getElementById('innerMySyndicate').scrollHeight;
        var scrollDiv = document.getElementById('asynd').clientHeight;
        var valu = scrollDiv + this.content.scrollTop;
        console.log("sdsdsdsdsdsdsds", innerDiv, scrollDiv, valu);
        if (valu > innerDiv) {
            console.log("botom");
            this.downShowing = 1;
            this.cdRef.detectChanges();
        }
        else {
            this.downShowing = 0;
            this.down_arrow_showing = 0;
            this.cdRef.detectChanges();
        }
    };
    MySyndicatePage.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    MySyndicatePage.prototype.ionViewDidEnter = function () {
        if (sessionStorage.getItem("firstTimeSyndicate") != "true") {
            this.checkCardExists();
            this.loadSyndicate();
        }
    };
    MySyndicatePage.prototype.checkwins = function () {
        this.appSound.play('buttonClick');
        var t = this.navCtrl.parent;
        t.select(1);
    };
    MySyndicatePage.prototype.manage_syndicates = function (sd) {
        var _this = this;
        this.appSound.play('buttonClick');
        var Modal = this.modalCtrl.create('ManageSyndicatePage', { syndicate: sd });
        Modal.onDidDismiss(function (data) {
            if (data == 'offerPage') {
                var tabs = _this.navCtrl.parent.parent.parent;
                tabs.select(4);
            }
        });
        Modal.present();
    };
    MySyndicatePage.prototype.manage_syndicates2 = function (sd) {
        this.appSound.play('buttonClick');
        var Modal = this.modalCtrl.create('ManageSyndicate2Page', { syndicate: sd });
        Modal.present();
        // this.appSound.play('buttonClick');
        // this.app.getRootNav().push(ManageSyndicate2Page);
    };
    MySyndicatePage.prototype.viewTickets = function (i) {
        this.appSound.play('buttonClick');
        var grp = this.syndArr[i].product_group;
        var sid = this.syndArr[i].syndicate_id;
        var stype = this.syndArr[i].syndicate_type;
        this.app.getRootNav().push('YourTicketsPage', { 'products': grp, 'synd': sid, 'stype': stype });
    };
    MySyndicatePage.prototype.viewPrivateTickets = function (productGroup, syndicate_id, syndicate_type) {
        this.appSound.play('buttonClick');
        this.app.getRootNav().push('YourTicketsPage', { 'products': productGroup, 'synd': syndicate_id, 'stype': syndicate_type });
    };
    MySyndicatePage.prototype.loadSyndicate = function () {
        var _this = this;
        // let loader = this.loadingCtrl.create({
        //     spinner: 'hide',
        //     content: `<img src="assets/vid/blue_bg2.gif" style="height:100px!important">`,
        // });
        // loader.present();
        this._syndService.syndicateList().subscribe(function (res) {
            console.log('syndicate list');
            sessionStorage.setItem("firstTimeSyndicate", "true");
            // loader.dismiss();
            if (res.response[0].get_syndicate_list.response.syndicate_group) {
                _this.syndArr = res.response[0].get_syndicate_list.response.syndicate_group;
                var a = localStorage.getItem("syndicateP");
                if (localStorage.getItem("syndicateP") == undefined || localStorage.getItem("syndicateP") == null) {
                    _this.down_arrow_showing = 1;
                }
                else {
                    _this.down_arrow_showing = 0;
                }
                localStorage.setItem("syndicateP", "1");
                console.log("syndSrr is ", _this.syndArr);
                setTimeout(function () {
                    _this.down_arrow_showing = 0;
                    _this.cdRef.detectChanges();
                    console.log("value changed for dwn arow in syndicate");
                }, 3000);
                if (res.response[0].get_syndicate_list.response.peepso_notification_count)
                    _this.chatcount = res.response[0].get_syndicate_list.response.peepso_notification_count.data["ps-js-notifications"].count;
                if (_this.chatcount > 0) {
                    $(".ctNow").removeClass('pulse');
                }
                if (_this.syndArr) {
                    if (_this.syndArr.length == 0) {
                        _this.viewEmpty = true;
                    }
                    for (var i = 0; i < _this.syndArr.length; i++) {
                        _this.toggled.push(false);
                    }
                    _this.toggled[0] = true;
                }
                // setTimeout(() => {
                //     $(this._syndElements["_results"][0].nativeElement).animate({ height: 200 }, 600, () => { });
                // }, 2000);
                console.log(_this.syndArr);
            }
            else {
                _this.viewEmpty = true;
            }
        });
    };
    MySyndicatePage.prototype.toggleAcc = function (event, i) {
        // let elem = $(event.target);
        this.appSound.play('buttonClick');
        // let counts = this.syndArr[i].product_group.length
        //   console.log("counts are , ", counts)
        //   document.querySelector('.text');
        this.toggled[i] = !this.toggled[i];
        // if (this._syndElements)
        //     if (this.toggled[i])
        //         $(this._syndElements["_results"][i].nativeElement).animate({ height: 200 }, 200, () => { });
        //     else
        //         setTimeout(() => {
        //             $(this._syndElements["_results"][i].nativeElement).animate({ height: 0 }, 600, () => { });
        //         }, 2000);
        $(this).css("--hei", "500px");
        this.cdRef.detectChanges();
        // this.modifyVars({
        //     '@bgcolor': 'blue',
        //     '@textcolor': 'red'
        //     });   
    };
    MySyndicatePage.prototype.checkCardExists = function () {
        var _this = this;
        console.log("OffersPage::checkCardExists()");
        var loader = this._showLoader();
        this.srvOffer.getJackpotList().subscribe(function (data) {
            console.log("OffersPage::getJackpotList() success", data);
            if (data.response && data.response[0].get_big_jackpot_list) {
                _this.jackpotList = data.response[0].get_big_jackpot_list.response;
                _this.customerToken = _this.jackpotList.customer_token;
            }
            loader.dismiss();
        }, function (err) {
            console.log("OffersPage::getJackpotList() error", err);
            loader.dismiss();
        });
    };
    MySyndicatePage.prototype.showPaymentOptions = function (syndicate) {
        var _this = this;
        console.log("OffersPage::showPaymentOptions()", syndicate);
        this.appSound.play('buttonClick');
        if (this.customerToken) {
            var opt = "location=no,toolbarposition=top";
            var str = 'https://nima.lottosocial.com/webview-auth/?redirect_to=free_reg';
            str += '&customer_id=1970400&customer_token=' + this.customerToken + '&Offer_ID=1188';
            this.iab.create(str, 'blank', opt);
        }
        else {
            var loader_1 = this._showLoader();
            // get all the cards details
            this.srvOffer.getExistingPaymilCardsDetails().subscribe(function (data) {
                console.log("OffersPage::showPaymentOptions() success", data);
                data.response.push({ syndicate: syndicate });
                _this.userCards = data.response;
                loader_1.dismiss();
                _this.confirmPayment.togglePopup();
            }, function (err) {
                console.log("OffersPage::showPaymentOptions() error", err);
                loader_1.dismiss();
            });
        }
    };
    MySyndicatePage.prototype.chatNow = function (i) {
        var _this = this;
        this.platform.ready().then(function () {
            if (typeof cordova !== 'undefined') {
                var browser = _this.iab.create('https://nima.lottosocial.com/webview-auth/?redirect_to=' + _this.syndArr[i].peepso_group_url + '&customer_id=' + _this.customer_id + '&customer_token=' + _this.customerToken + '', '_blank', 'location=no,toolbarposition=top');
            }
        });
    };
    MySyndicatePage.prototype.addMembers = function () {
        this.appSound.play('buttonClick');
    };
    MySyndicatePage.prototype._showLoader = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg2.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        return loader;
    };
    MySyndicatePage.prototype.Invite = function (sid) {
        this.appSound.play('buttonClick');
        console.log(sid);
        this.app.getRootNav().push('InviteFriendsPage', { sid: sid });
    };
    MySyndicatePage.prototype.joinSynd = function () {
        this.appSound.play('buttonClick');
        var tabs = this.navCtrl.parent.parent.parent;
        tabs.select(4);
    };
    return MySyndicatePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], MySyndicatePage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("confirmPayment"),
    __metadata("design:type", Object)
], MySyndicatePage.prototype, "confirmPayment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])("synd"),
    __metadata("design:type", Object)
], MySyndicatePage.prototype, "synd", void 0);
MySyndicatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-my-syndicate',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\my-syndicate\my-syndicate.html"*/'<!--\n  Generated template for the MySyndicate page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<popup-confirm-payment #confirmPayment [existing-cards]="userCards"></popup-confirm-payment>\n<ion-content class="main-bg" id="asynd" (ionScroll)="scrollHandlerSyndicate($event)">\n  <div id="innerMySyndicate">\n    <div id="sstate" *ngIf="syndArr.length > 0">\n      <div *ngFor="let sd of syndArr; let i = index;">\n        <div class="synd-card" *ngIf="sd.syndicate_type !=\'PRIVATE\'">\n          <ion-card>\n            <div>\n              <!--<img [src]="sd.image_url">-->\n              <div>\n                <img [src]="sd.image_url">\n                <div class="c-title">\n                  {{sd.syndicate_name}}\n                </div>\n                <ion-item>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col col-50 class="left">\n                        <span class="date-lbl">Created: {{sd.syndicate_start_date | date: format}}</span>\n                      </ion-col>\n                      <ion-col col-50 class="right">\n                        <span class="date-lbl" style="margin-right: 30px;">End date: {{sd.syndicate_end_date}}</span>\n                        <span class="pmic" *ngIf="!toggled[i]" (tap)="toggleAcc($event, i)">\n                          <ion-icon ios="ios-arrow-down" md="md-arrow-down" style="font-weight: bold;"></ion-icon>\n                        </span>\n                        <span class="pmic" *ngIf="toggled[i]" (tap)="toggleAcc($event, i)">\n                          <ion-icon ios="ios-arrow-up" md="md-arrow-up" style="font-weight: bold;"></ion-icon>\n                        </span>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n              </div>\n              <div id="container" [class.active]="toggled[i]">\n                <div class="parent1 part-1">\n                  <div class="parent2">\n                    <div class="parent3 part-1">\n                      <span *ngIf="sd.product_group.length>0">\n                        <ion-item style="border-bottom: 1px solid #AAAAAA">\n                          <ion-grid>\n                            <ion-row *ngFor="let tkt of sd.product_group;let j = index;">\n                              <ion-col col-3 class="left" style="vertical-align: -webkit-baseline-middle">\n                                <input type="button" value="{{tkt?.product_name}}" style="color: white;border: none;border-radius: 2px; font-size: 12px;padding: 5px;height: 30px;max-width:100%;overflow: hidden;white-space: nowrap;text-overflow:ellipsis;background-color: #255FC7"\n                                  (tap)="viewPrivateTickets(sd.product_group,sd.syndicate_id,sd.syndicate_type)">\n                              </ion-col>\n                              <ion-col col-9 class="right">\n                                <p class="ticketsInfoP" style="margin-left: 0px!important"> x {{tkt.ticket_count}} tickets {{tkt.ticket_valid_date}}</p>\n                              </ion-col>\n                            </ion-row>\n                          </ion-grid>\n                        </ion-item>\n                      </span>\n                      <ion-item style="border-bottom: 1px solid #AAAAAA">\n                        <div>\n                          <button ion-button class="btn" style="float: left!important;width: 40%!important" (tap)="openOfferPage()"> BUY MORE </button>\n                          <button ion-button class="btn" style="float: right!important;width: 40%!important" (tap)="viewTickets(i)"> YOUR TICKETS </button>\n                        </div>\n                      </ion-item>\n\n                      <ion-item style="font-size: 14px;border-bottom: 1px solid #AAAAAA">\n                        <span *ngIf="sd.check_status == \'CHECKED\'">\n                          <div (tap)="checkwins()" class="ckNow pulse" style="width: 48%;display: inline-block">\n                            <span class="icon-s" style="content: url(./assets/img/status_check.png);min-width: 14px;width: 17px;vertical-align: text-bottom;"></span>\n                            <span class="synd-f">CHECK NOW!</span>\n                          </div>\n                        </span>\n                        <span *ngIf="sd.check_status == \'SYNDICATE DUE TO PLAY\'">\n                          <div style="width: 48%;display: inline-block">\n                            <span class="icon-s" style="content: url(./assets/img/status_due.png);min-width: 14px;width: 19px;vertical-align: text-bottom;"></span>\n                            <span class="synd-f">DUE TO PLAY</span>\n                          </div>\n                        </span>\n\n                        <ion-col class="right" style="text-align: right;display: inline-block;width: 50%">\n                          <span class="tkt-a" (tap)="manage_syndicates(sd)">\n                            <ion-icon ios="ios-settings" md="md-settings" style="margin-top: auto !important;transform: scale(1.1,1.1);"></ion-icon>\n                            <ion-col style="top: -2px">\n                              <span class="synd-f" style="color:#000000;">SETTINGS</span>\n                            </ion-col>\n                          </span>\n                        </ion-col>\n                      </ion-item>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-card>\n        </div>\n\n        <div class="synd-card" *ngIf="sd.syndicate_type ==\'PRIVATE\'">\n          <ion-card>\n            <div>\n              <!--<img [src]="sd.image_url">-->\n              <div>\n                <img [src]="sd.image_url">\n                <div class="c-title">\n                  {{sd.syndicate_name}}\n                </div>\n                <ion-item>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col col-5 class="left">\n                        <span class="date-lbl" style="margin-right: 2px;">\n                          <button ion-button class="ctNow chat-btn pulse" (tap)="chatNow(i)">CHAT NOW</button>\n                          <span class="circle">\n                            <img src="./assets/img/chat_bubble.png" />\n                            <span style="padding: 5px;">{{chatcount}}</span>\n                          </span>\n                        </span>\n                      </ion-col>\n                      <ion-col col-7 class="left" style="line-height: 25px;">\n                        <span class="date-lbl" style="font-size: 12px;">PLAYING MEMBERS:</span>\n                        <span style="font-size: 12px; color: #B7B7B7;">{{sd.member_playing_count}}/{{sd.members_count}}</span>\n                        <span class="pmic" *ngIf="!toggled[i]" (tap)="toggleAcc($event, i)">\n                          <ion-icon ios="ios-arrow-down" md="md-arrow-down" style="font-weight: bold;margin-top: 2px;font-size: 1em;color: #B7B7B7"></ion-icon>\n                        </span>\n                        <span class="pmic" *ngIf="toggled[i]" (tap)="toggleAcc($event, i)">\n                          <ion-icon ios="ios-arrow-up" md="md-arrow-up" style="font-weight: bold;margin-top: 2px;font-size: 1em;color: #B7B7B7"></ion-icon>\n                        </span>\n                      </ion-col>\n                      <!--<ion-col col-50 class="left"><span class="date-lbl"><button ion-button class="chat-btn">CHAT NOW</button><span class="circle" style="background: url(\'./assets/img/chat_bubble.png\'); background-size: cover;">10</span></span></ion-col>\n                      <ion-col col-50 class="right" style="line-height: 34px;"><span class="date-lbl">PLAYING MEMBERS:</span>{{sd.member_playing_count}}/{{sd.members_count}}</ion-col>-->\n                    </ion-row>\n                    <!--<ion-row>\n                      <ion-col col-50 class="left"><span class="tkt-lbl">Your tickets</span></ion-col>\n                      <ion-col col-50 class="right"><span class="tkt-a" (tap)="manage_syndicates2()">Manage syndicate</span></ion-col>\n                    </ion-row>-->\n                  </ion-grid>\n                </ion-item>\n              </div>\n              <div id="container" [class.active]="toggled[i]">\n                <div class="parent1 part-1">\n                  <div class="parent2">\n                    <div class="parent3 part-1">\n                      <ion-item text-wrap text-center>\n                        <ion-grid text-center>\n                          <ion-row text-center *ngFor="let pd of sd.product_group; let j = index;">\n                            <ion-col col-3 class="left" style="vertical-align: -webkit-baseline-middle">\n                              <input type="button" value="{{sd.product_group[j]?.product_name}}" [style.backgroundColor]="sd.product_group[j].product_color? sd.product_group[j].product_color :\'#316BCB\' "\n                                style="color: white;border: none;border-radius: 2px; font-size: 12px;padding: 5px;height: 30px;max-width:100%;overflow: hidden;white-space: nowrap;text-overflow:ellipsis"\n                                (tap)="viewPrivateTickets(sd.product_group,sd.syndicate_id,sd.syndicate_type)">\n                            </ion-col>\n                            <ion-col col-9>\n                              <p class="ticketsInfoP"> x {{sd?.product_group[j]?.ticket_count}} ticketsd Valid for {{sd?.product_group[j]?.ticket_valid_date}}</p>\n                            </ion-col>\n                          </ion-row>\n\n                        </ion-grid>\n                      </ion-item>\n                      <!-- <ion-row style="padding: 5px 12px; background: #FEE5E5" *ngIf="sd.purchased_status">\n                                <ion-col class="left" style="color: #C10A09;">You haven\'t bought tickets for your syndicate yet</ion-col>\n                                <ion-col class="right">\n                                  <button ion-button class="btn2" (tap)="showPaymentOptions(sd)"> BUY NOW </button>\n                                </ion-col>\n                              </ion-row> -->\n                      <ion-item *ngIf="sd.purchased_status">\n                        <ion-row style="padding: 0 5px 10px 5px;">\n                          <ion-col col-50 class="left">\n                            <span class="tkt-lbl"></span>\n                          </ion-col>\n                          <ion-col col-50 class="right">\n                            <span class="tkt-a" (tap)="manage_syndicates2(sd)">\n                              <ion-icon ios="ios-settings" md="md-settings"></ion-icon>\n                            </span>\n                          </ion-col>\n                        </ion-row>\n                        <div style="padding:0; text-align: center">\n                          <button ion-button class="btn" (tap)="Invite(sd.syndicate_id)">ADD MEMBERS</button>\n                        </div>\n                      </ion-item>\n                      <ion-item *ngIf="!sd.purchased_status">\n\n                        <div style="padding:0; text-align: center; float: left;">\n                          <button ion-button class="btn" (tap)="Invite(sd.syndicate_id)">ADD MEMBERS</button>\n                        </div>\n                        <div style="padding:0; text-align: center;float: right;">\n                          <button ion-button class="btn" (tap)="viewTickets(i)"> VIEW TICKETS </button>\n                        </div>\n                      </ion-item>\n                      <ion-item style="height: 30px">\n                        <ion-row>\n                          <ion-col col-50 class="left" (tap)="checkwins()">\n                            <span class="icon-s" style="content: url(./assets/img/status_due.png);min-width: 14px;width: 17px;vertical-align: text-bottom;"></span>\n                            <span class="synd-f">DUE TO PLAY</span>\n                          </ion-col>\n                          <ion-col col-50 class="right">\n                            <span class="tkt-a" (tap)="manage_syndicates2(sd)">\n                              <ion-icon ios="ios-settings" md="md-settings" style="margin-top: auto !important;transform: scale(1.1,1.1);"></ion-icon>\n                              <ion-col style="top: -2px">\n                                <span class="synd-f" style="color:#000000;">SETTINGS</span>\n                              </ion-col>\n                            </span>\n                          </ion-col>\n                        </ion-row>\n                      </ion-item>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n\n    <div id="container" [class.active]="syndArr.length == 0 && viewEmpty">\n      <div class="parent1 part-1">\n        <div class="parent2">\n          <div class="parent3 part-1">\n            <div class="danger">\n              <div style="font-family: lato-black;">NO TICKETS FOUND</div>\n              <div>YOU\'VE GOT TO BE IN TO WIN IT</div>\n            </div>\n\n            <div class="sub-div pad-10" style="border-bottom: 1px solid #ccc;">\n              <div style="font-weight: bold;">Let me tell you why you should join a syndicate</div>\n              <ion-row style="padding-top: 10px;">\n                <ion-col col-3 style="padding: 20px;">\n                  <img src="./assets/icon/settings_ico.svg" />\n                </ion-col>\n                <ion-col col-9 style="text-align: left">\n                  <div style="color:#B7B7B7;">MORE TICKETS = MORE CHANCES</div>\n                  <div>Your syndicate companions will share their lines with you meaning more chances for everyone</div>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div class="pad-10" style="border-bottom: 1px solid #ccc;">\n              <ion-row>\n                <ion-col col-3 style="padding: 20px;">\n                  <img src="./assets/icon/payment_ico.svg" />\n                </ion-col>\n                <ion-col col-9 style="text-align: left">\n                  <div style="color:#B7B7B7;">NO HIDDEN FEES</div>\n                  <div>100% of your winnings is equally shared among the members of your syndicate. No hidden fees, no surprise</div>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div class="pad-10" style="border-bottom: 1px solid #ccc;">\n              <ion-row>\n                <ion-col col-3 style="padding: 20px;">\n                  <img src="./assets/icon/syndicate_ico.svg" />\n                </ion-col>\n                <ion-col col-9 style="text-align: left">\n                  <div style="color:#B7B7B7;">MORE THAN JUST LOTTERY</div>\n                  <div>Get rewards points to play games every time you check your winnings, bonus credits to get more tickets\n                    for free, competition, prize draws and a lot more!</div>\n                </ion-col>\n              </ion-row>\n              <div class="f-bold green" style="padding-top: 15px;">SO WHAT ARE YOU WAITING FOR?</div>\n              <div class="f-bold">Click the green button below to join or start a new syndicate!</div>\n            </div>\n\n            <div class="btn-div">\n              <button ion-button (tap)="joinSynd()" class="btn">JOIN A SYNDICATE</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<div *ngIf="down_arrow_showing==1">\n  <span *ngIf="downShowing==0">\n    <div class="arrow" style="z-index: 9; border: none;background-image: url(\'assets/img/down_arrow_pulsate.png\');" id="newDiv"></div>\n  </span>\n</div>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\my-syndicate\my-syndicate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_syndicate_service__["a" /* SyndicateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], MySyndicatePage);

//# sourceMappingURL=my-syndicate.js.map

/***/ })

});
//# sourceMappingURL=5.js.map