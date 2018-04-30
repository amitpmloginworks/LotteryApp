webpackJsonp([12],{

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(853);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    return TabsPageModule;
}());
TabsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]]
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

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

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_params__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_home__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_db_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_cache_controller__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app_sound_app_sound__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(778);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TabsPage = (function () {
    function TabsPage(el, renderer, cdRef, params, storage, navParams, events, navCtrl, iab, platform, _home, srvDb, srvHome, menuCtrl, appSound, modalCtrl, loadingCtrl, alertCtrl) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.params = params;
        this.storage = storage;
        this.navParams = navParams;
        this.events = events;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.platform = platform;
        this._home = _home;
        this.srvDb = srvDb;
        this.srvHome = srvHome;
        this.menuCtrl = menuCtrl;
        this.appSound = appSound;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.tab1Root = 'StorePage';
        this.tab2Root = 'StorePage';
        this.tab3Root = 'SyndicatesPage';
        this.tab4Root = 'GamesPage';
        this.tab5Root = 'AccountPage';
        this.tab6Root = 'OffersPage';
        this.mySelectedIndex = 2;
        this.menuCtrl;
        console.log("TabsPage", navParams.data);
        this.cache = new __WEBPACK_IMPORTED_MODULE_7__services_cache_controller__["a" /* CacheController */](params, platform, srvDb, srvHome, alertCtrl);
        this.gameData = "game data";
        this.mySelectedIndex = navParams.data.tabIndex || 2;
        if (this.params.events) {
            this.params.events.subscribe('go-page', function (page) {
                var currentTab = _this.homeTabs.getActiveChildNav();
                console.log("go-page", page, currentTab);
                try {
                    if (page && currentTab.enabled) {
                        if (currentTab._views[1]) {
                            currentTab._views[1].dismiss();
                        }
                        _this.appSound.play('menuClick');
                        currentTab.push(page);
                        // this.navCtrl.push(page)
                    }
                }
                catch (e) {
                    console.log("why the hell", e);
                }
            });
            this.params.events.subscribe('go-tab', function (tabIndex) {
                if (tabIndex) {
                    try {
                        _this.homeTabs.select(tabIndex);
                    }
                    catch (e) {
                        console.log("home tab null", e);
                    }
                }
                else {
                    tabIndex = 2;
                    try {
                        _this.homeTabs.select(tabIndex);
                    }
                    catch (e) {
                        console.log("home tab null", e);
                    }
                }
            });
        }
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log("TabsPage::ionViewDidLoad");
        this.homeTabs.select(this.mySelectedIndex);
    };
    TabsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // this.initData();
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present().then(function () {
            _this.cache.loadModules("home", "1", ["get_home_card", "get_account_details", "get_home_message"])
                .then(function (data) {
                loader.dismiss().then(function () {
                    console.log("TabsPage::ionViewDidEnter", data);
                    _this.params.setHomeData(data);
                });
            }, function (err) {
                loader.dismiss().then(function () {
                    // show offline
                    _this.params.setIsInternetAvailable(false);
                    console.log("TabsPage::ionViewDidEnter", err);
                });
            });
        });
    };
    TabsPage.prototype.onSelectTab = function (tab) {
        var tabss = this.homeTabs.getActiveChildNav();
        if (tabss._views[1] && tab != "sideMenu") {
            for (var i = 1; i < tabss._views.length; i++) {
                tabss._views[i].dismiss();
            }
        }
        var menu1 = this.menuCtrl.getMenus();
        console.log("TabsPage::onSelectTab", tab);
        this.appSound.play('menuClick');
        switch (tab) {
            case 'account':
                // this.renderer.setElementClass(this.homeTabs.getNativeElement(), 'hidehome', false)
                // this.renderer.setElementClass(this.homeTabs.getNativeElement(), 'hide-account', true)
                break;
            case 'sideMenu':
                menu1[1].open();
                break;
            case 'store':
                this.goToStore();
                break;
            case 'homePage':
                this.params.goTab(2);
                break;
            case 'syndicates':
                this.events.publish("reloadSyndicate");
                break;
            default:
                // this.renderer.setElementClass(this.homeTabs.getNativeElement(), 'hidehome', true)
                // this.renderer.setElementClass(this.homeTabs.getNativeElement(), 'hide-account', false)
                break;
        }
    };
    TabsPage.prototype.populateHomeData = function (data) {
        this.homeCardData = data;
        this.gameData = this.homeCardData.game;
        this.homeData = this.homeCardData.information_for_you;
        this.params.setHomeData(this.homeData);
    };
    TabsPage.prototype.goToStore = function () {
        var _this = this;
        // console.log("goToStore()");
        this.storage.get('session')
            .then(function (data) {
            var session = JSON.parse(data);
            //   let url = 'https://nima.lottosocial.com/webview-auth/?redirect_to=store-new&customer_id=';
            //   url += session.customer_id + '&customer_token=' + session.customer_token;
            //   console.log("session data", data, url);
            //   let opt:string = "toolbarposition=top";
            //   const browser = this.iab.create(url, "_blank", opt);
            _this.platform.ready().then(function () {
                if (typeof cordova !== 'undefined') {
                    var browser = _this.iab.create('https://nima.lottosocial.com/webview-auth/?redirect_to=store-new&customer_id=' + session.customer_id + '&customer_token=' + session.customer_token + '', '_blank', 'location=no,toolbarposition=top');
                    // browser.on("loadstop").
                    //     subscribe(
                    //     (data) => {
                    //         // alert(data)
                    //         browser.insertCSS({ code: "body{background-color:#4286f4!important;}" })
                    //     },
                    //     err => {
                    //         console.log("InAppBrowser Loadstop Event Error: " + err);
                    //     });
                }
            });
        }, function (error) {
            _this.params.setIsInternetAvailable(false);
            console.log(error);
        });
    };
    TabsPage.prototype.ngOnDestroy = function () {
        if (!this.cdRef['destroyed'])
            this.cdRef.detach(); // try this
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("homeTabs"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Tabs */])
], TabsPage.prototype, "homeTabs", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\tabs\tabs.html"*/'<ion-tabs #homeTabs class="homeTabs" [selectedIndex]="mySelectedIndex" tabsLayout="icon-top" tabsPlacement="bottom">\n	<!-- <ion-tab tabTitle="Store" tabIcon="store" (ionSelect)="onSelectTab(\'store\')"></ion-tab> -->\n	<ion-tab tabIcon="Menu" tabTitle="More" (ionSelect)="onSelectTab(\'sideMenu\')"></ion-tab>\n	<ion-tab [root]="tab3Root" tabTitle="My Syndicates" tabIcon="syndicates" (ionSelect)="onSelectTab(\'syndicates\')"></ion-tab>\n	<ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home-black" ([rootParams])="homeData" (ionSelect)="onSelectTab(\'home\')"></ion-tab>\n	<ion-tab [root]="tab4Root" tabTitle="Games" tabIcon="games" [rootParams]="gameData" (ionSelect)="onSelectTab(\'games\')"></ion-tab>\n	<!-- <ion-tab [root]="tab5Root" tabTitle="Account" tabIcon="account" (ionSelect)="onSelectTab(\'account\')"></ion-tab> -->\n	<ion-tab [root]="tab6Root" tabTitle="Store" tabIcon="offers" (ionSelect)="onSelectTab(\'offers\')"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_4__services_params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */],
        __WEBPACK_IMPORTED_MODULE_6__services_db_service__["a" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_5__services_service_home__["a" /* HomeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=12.js.map