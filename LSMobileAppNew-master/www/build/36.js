webpackJsonp([36],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(832);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpPageModule = (function () {
    function HelpPageModule() {
    }
    return HelpPageModule;
}());
HelpPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]
        ]
    })
], HelpPageModule);

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_sound_app_sound__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__support1_support1__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HelpPage = (function () {
    function HelpPage(navCtrl, viewctrl, appSound, cdRef, iab, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewctrl = viewctrl;
        this.appSound = appSound;
        this.cdRef = cdRef;
        this.iab = iab;
        this.modalCtrl = modalCtrl;
        this.downShowing = 0;
        this.down_arrow_showing = 0;
        this.material_icon = 0;
        this.items = [];
        this.lottoSocialGamesHalf = "halfLotto";
        this.lottoSocialBonusHalf = "halfBonus";
        for (var i = 0; i < 30; i++) {
            this.items.push(this.items.length);
        }
    }
    // ionViewWillEnter(){
    //   if(this.content.ionScrollStart){
    //     this.scrollHandler(this)
    //   }
    // }
    HelpPage.prototype.ionViewWillEnter = function () {
        // this.content.enableScrollListener();
        var a = localStorage.getItem("HelpP");
        if (localStorage.getItem("HelpP") == undefined || localStorage.getItem("HelpP") == null) {
            this.down_arrow_showing = 1;
        }
        else {
            this.down_arrow_showing = 0;
        }
        localStorage.setItem("HelpP", "1");
    };
    HelpPage.prototype.openAppBrw = function () {
        this.appSound.play('buttonClick');
        //let browser = this.iab.create(" https://help.lotto-social.com/hc/en-us","_blank",'location=no,toolbarposition=top')
        //  this.navCtrl.push(Support1Page);
        var supportModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__support1_support1__["a" /* Support1Page */]);
        supportModal.present();
    };
    HelpPage.prototype.scrollHandler = function (event) {
        this.material_icon = 1;
        var innerDiv = document.getElementById('inner').scrollHeight;
        var scrollDiv = document.getElementById('contents').clientHeight;
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
    HelpPage.prototype.openSyndicatePage = function () {
        this.appSound.play('buttonClick');
        var tabs = this.navCtrl.parent;
        tabs.select(1);
    };
    HelpPage.prototype.openGamesPage = function () {
        this.appSound.play('buttonClick');
        var tabs = this.navCtrl.parent;
        tabs.select(3);
    };
    HelpPage.prototype.openOfferPage = function () {
        this.appSound.play('buttonClick');
        var tabs = this.navCtrl.parent;
        tabs.select(4);
    };
    HelpPage.prototype.changeVal = function (val) {
        this.appSound.play('buttonClick');
        this.lottoSocialGamesHalf = val;
    };
    HelpPage.prototype.changeValBonus = function (val) {
        this.appSound.play('buttonClick');
        this.lottoSocialBonusHalf = val;
    };
    HelpPage.prototype.close = function () {
        this.viewctrl.dismiss();
    };
    HelpPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 30; i++) {
                _this.items.push(_this.items.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    return HelpPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], HelpPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('newDiv'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], HelpPage.prototype, "fileInput", void 0);
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-help',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\help\help.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n        <ion-icon class="icon" ios="ios-arrow-back" md="md-arrow-back" (click)="close()"></ion-icon>\n        <ion-title>Personal Guide</ion-title>\n        <ion-buttons end>\n            <div class="help-header-div" *ngIf="material_icon==1" (click)="openAppBrw()" >\n                <!-- <i class="icon icon-chat grey">\n                    <span class="dot dot-left"></span>\n                    <span class="dot"></span>\n                    <span class="dot dot-right"></span>\n                </i> -->\n                <img  src="https://visualpharm.com/assets/214/Globe%20Bulb-595b40b65ba036ed117d4165.svg" class="circle_inside_Img">\n            </div>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content (ionScroll)="scrollHandler($event)" class="ionContentDesign" id="contents">\n    \n\n    <div id="inner">\n\n        <ion-card text-center  class="cardMainDesign">\n\n            <div class="cardMainDiv">\n                <span class="badgeDesing"> NEW</span>\n                <p class="cardHeading">Check your winnings</p>\n                <p class="winnings-text">You can simply check your winnings by going to\n                    <span (click)="openSyndicatePage()">your syndicate page</span> and tapping on the\n                    <span class="winningText-check" >"CHECK WINNING"</span> tab</p>\n                <div>\n                    <iframe class="help-frame"  src="https://www.youtube.com/embed/bjBXap_4lzk"\n                        frameborder="0" allowfullscreen></iframe>\n                </div>\n                <p class="watch-video-text">\n                    <i>Watch video to find out more about checking winnings</i>\n                </p>\n                <input type="button" class=btnGotIt value="GOT IT"  (click)="openSlider()">\n                <ion-icon class="button-check" ios="ios-checkmark" md="md-checkmark"></ion-icon>\n            </div>\n        </ion-card>\n\n        <div class="marked-header">\n            <div class="marked-header-text">\n                MARKED AS READ\n            </div>\n        </div>\n\n        <ion-card text-center text-wrap class="card-marked">\n            <div class="card-marked-header">\n                <span class="card-mark">\n                    <ion-icon class="card-mark-icon" ios="ios-checkmark" md="md-checkmark"></ion-icon>\n                </span>\n                <p>LOTTO SOCIAL GAMES</p>\n                <div class="show-button">\n                    <span class="pmic" *ngIf="lottoSocialGamesHalf==\'halfLotto\'" (click)="changeVal(\'fullLotto\')">\n                        <ion-icon class="arrow" ios="ios-arrow-down" md="md-arrow-down" ></ion-icon>\n                    </span>\n                    <span class="pmic" *ngIf="lottoSocialGamesHalf==\'fullLotto\'" (click)="changeVal(\'halfLotto\')">\n                        <ion-icon class="arrow" ios="ios-arrow-up" md="md-arrow-up" ></ion-icon>\n                    </span>\n                </div>\n            </div>\n            <div>\n                <div id="container" [class.active]="lottoSocialGamesHalf==\'fullLotto\'">\n                    <div class="parent1 part-1">\n                        <div class="parent2">\n                            <div class="parent3 part-1">\n                                <!-- <p *ngIf="lottoSocialGamesHalf==\'halfLotto\'" style="font-size: 16px;padding: 3px 15px 8px 15px;color: #2C2C2C">\n                                        You can play and get more games from the\n                                        <span style="color: #316BCB">game page</span>. The games are split between ...\n                                        <span style="color: #316BCB" (click)="changeVal(\'fullLotto\')">read more</span>\n                                    </p> -->\n                                    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n                                <p *ngIf="lottoSocialGamesHalf==\'fullLotto\'" style="font-size: 16px;padding: 3px 15px 8px 15px;color: #2C2C2C">\n                                \n                                    instant win games and story games.Instant win games operates like You can play and get more games from the\n                                    <span class="help-color-text"  >game page</span>. The games are split between instant win games and story games. Instant\n                                    win games operates like scratchcards: in every play you have a chance to hit the £7,000\n                                    prize! The story games are divided in chapters and levels. Beat each level in a chapter\n                                    to receive a special prize and all the chapter in the game to win the top prize.\n                                    <span class="help-color-text">Test your skills know </span>.\n                                  \n                                    <!-- <span style="color: #316BCB;padding-left: 10px" (click)="changeVal(\'halfLotto\')"> show less..</span> -->\n                                </p>\n                            </ion-infinite-scroll>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ion-card>\n     \n        <ion-card text-center text-wrap class="card-marked">\n            <div class="card-marked-header">\n                <span class="card-mark">\n                    <ion-icon class="card-mark-icon" ios="ios-checkmark" md="md-checkmark"></ion-icon>\n                </span>\n                <p>BONUS CREDIT</p>\n                <div class="show-button">\n                    <span class="pmic" *ngIf="lottoSocialBonusHalf==\'halfBonus\'" (click)="changeValBonus(\'fullBonus\')">\n                        <ion-icon ios="ios-arrow-down" md="md-arrow-down" class="show-button-bonus" ></ion-icon>\n                    </span>\n                    <span class="pmic" *ngIf="lottoSocialBonusHalf==\'fullBonus\'" (click)="changeValBonus(\'halfBonus\')">\n                        <ion-icon ios="ios-arrow-up" md="md-arrow-up" class="show-button-bonus" ></ion-icon>\n                    </span>\n                </div>\n            </div>\n            <div>\n               \n                <div id="container" [class.active]="lottoSocialBonusHalf==\'fullBonus\'">\n                    <div class="parent1 part-2">\n                        <div class="parent2">\n                            <div class="parent3 part-2">\n                                \n                                <!-- <p *ngIf="lottoSocialBonusHalf==\'halfBonus\'" style="font-size: 16px;padding: 3px 15px 8px 15px;color: #2C2C2C">\n                                        You can spend your bonus credit in the\n                                        <span style="color: #316BCB">offer page</span>. by clicking on "SPEND BONUS ...\n                                        <span style="color: #316BCB" (click)="changeValBonus(\'fullBonus\')">read more</span>\n                                    </p> -->\n                                <p *ngIf="lottoSocialBonusHalf==\'fullBonus\'" class="help-half-bonus">\n                                    CREDIT" and chossing from any lottery available! Accumulate bounus credit by converting your small cash wins. You can spend\n                                    your bonus credit in the\n                                    <span style="color: #316BCB">offer page</span>. by clicking on "SPEND BONUS CREDIT" and chossing from any lottery\n                                    available! Accumulate bounus credit by converting your small cash wins (60p or less)\n                                    into bonus credit worth 4 times its cash value! That\'s right, if you convert your £1\n                                    cash win into bonus credit you \'ll instantly get £4 to spend towards otther lotteries.\n                                    That\'s 4 time more chances to win any jackpot! \n                                  \n                                    <!-- <span style="color: #316BCB;padding-left: 10px" (click)="changeValBonus(\'halfBonus\')"> show less</span> -->\n                                </p>\n                            \n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n               \n            </div>\n        </ion-card>\n \n    </div>\n    <br>\n    <div *ngIf="down_arrow_showing==1">\n            <span *ngIf="downShowing==0">\n                <div class="arrow" style="z-index: 9; border: none;background-image: url(\'assets/img/down_arrow_pulsate.png\');" id="newDiv"></div>\n            </span>\n        </div> \n    \n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\help\help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ })

});
//# sourceMappingURL=36.js.map