webpackJsonp([18],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckWinningsPageModule", function() { return CheckWinningsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_winnings__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_syndicate_service__ = __webpack_require__(789);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckWinningsPageModule = (function () {
    function CheckWinningsPageModule() {
    }
    return CheckWinningsPageModule;
}());
CheckWinningsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__check_winnings__["a" /* CheckWinningsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__check_winnings__["a" /* CheckWinningsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__check_winnings__["a" /* CheckWinningsPage */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_syndicate_service__["a" /* SyndicateService */]],
    })
], CheckWinningsPageModule);

//# sourceMappingURL=check-winnings.module.js.map

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

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckWinningsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_syndicate_service__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_sound_app_sound__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_params__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckWinningsPage = (function () {
    function CheckWinningsPage(navCtrl, navParams, app, modalCtrl, viewCtrl, appSound, _syndService, loadingCtrl, cdRef, params) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.appSound = appSound;
        this._syndService = _syndService;
        this.loadingCtrl = loadingCtrl;
        this.cdRef = cdRef;
        this.params = params;
        this.myWinnings = [];
        this.downShowing = 0;
        this.down_arrow_showing = 0;
        this.nav = this.app.getRootNav();
        this.loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
    }
    CheckWinningsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckWinningsPage');
        this.loadWinnings();
    };
    CheckWinningsPage.prototype.ionViewWillEnter = function () {
        //    
        // var tabs: Tabs = this.navCtrl.parent.parent;
    };
    CheckWinningsPage.prototype.loadWinnings = function () {
        var _this = this;
        this.loader.present();
        this._syndService.loadWinnings()
            .subscribe(function (res) {
            console.log(res);
            var a = localStorage.getItem("chkWinningP");
            if (localStorage.getItem("chkWinningP") == undefined || localStorage.getItem("chkWinningP") == null) {
                _this.down_arrow_showing = 1;
            }
            else {
                _this.down_arrow_showing = 0;
            }
            localStorage.setItem("chkWinningP", "1");
            _this.loader.dismiss();
            _this.myWinnings = res.response["0"].get_previous_check_list.response.previous_check_group;
            setTimeout(function () {
                _this.down_arrow_showing = 0;
                _this.downShowing = 1;
                localStorage.setItem("chkWinningP", "1");
                _this.cdRef.detectChanges();
                console.log("value changed for dwn arow in yours offer");
            }, 3000);
            // this.content.enableScrollListener();
        }), function (Err) {
            var a = localStorage.getItem("chkWinningP");
            if (localStorage.getItem("chkWinningP") == undefined || localStorage.getItem("chkWinningP") == null) {
                _this.down_arrow_showing = 1;
            }
            else {
                _this.down_arrow_showing = 0;
            }
            setTimeout(function () {
                _this.down_arrow_showing = 0;
                _this.downShowing = 1;
                localStorage.setItem("chkWinningP", "1");
                _this.cdRef.detectChanges();
                console.log("value changed for dwn arow in yours offer");
            }, 3000);
            _this.loader.dismiss();
            _this.appSound.play('Error');
            alert("Error occured");
        };
    };
    return CheckWinningsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], CheckWinningsPage.prototype, "content", void 0);
CheckWinningsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-check-winnings',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\check-winnings\check-winnings.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="marg-top-12 main-bg" (ionScroll)="scrollHandlerSyndicate($event)" id="winningContent">\n  <div id="innerWinnings">\n    <div class="main-div">\n      <ion-row>\n        <ion-col class="g-header">HAVE YOU CHECKED YOUR TICKETS?</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Check all your tickets for the past 30 days.\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Every time you check a valid ticket you ALSO get Reward Point to spend towards FREE Instant win games!\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button >CHECK MY WINNINGS</button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class="list-div">\n      <ion-row>\n        <ion-col class="g-header" style="color:black">List of your previous checks</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col> Log of activities for the last 60 days </ion-col>\n      </ion-row>\n      <ion-row class="border-b" style="padding-top: 10px;">\n        <ion-col class="overFlow" col-3> Check Date </ion-col>\n        <ion-col col-2 style="white-space: nowrap"> Lottery</ion-col>\n        <ion-col col-2> Points</ion-col>\n        <ion-col col-2> Prizes </ion-col>\n        <ion-col col-3> View </ion-col>\n      </ion-row>\n      <div style="padding: 0 10px">\n        <ion-row class="border-b list-d" *ngFor="let v of myWinnings;">\n          <ion-col col-3> {{v.check_date}} </ion-col>\n\n          <ion-col col-2 *ngIf="v.check_type == \'cash\';else showcashchecktype">\n            <span class="icon-s lottery-check"  style="content: url(./assets/icon/lottery-check.svg);min-width: 14px"></span>\n          </ion-col>\n          <ng-template #showcashchecktype>\n            <ion-col col-2>\n              <span class="icon-s lottery-check-grey" style="content: url(./assets/icon/lottery-check-gray.svg);min-width: 14px"></span>\n            </ion-col>\n          </ng-template>\n\n          <ion-col col-2 *ngIf="v.check_type == \'reward\';else showrewardchecktype">\n            <span class="icon-s" style="content: url(./assets/icon/rwp_icon.svg);min-width: 14px"></span>\n          </ion-col>\n          <ng-template #showrewardchecktype>\n            <ion-col col-2>\n              <span class="icon-s" style="content: url(./assets/icon/rwp_icon-gray.svg);min-width: 14px"></span>\n            </ion-col>\n          </ng-template>\n          <ion-col col-2 *ngIf="v.check_type == \'award\';else showawardchecktype">\n            <span class="icon-s" style="content: url(./assets/icon/other_prizes_ico.svg);min-width: 14px"></span>\n          </ion-col>\n          <ng-template #showawardchecktype>\n            <ion-col col-2>\n              <span class="icon-s" style="content: url(./assets/icon/other_prizes_gray_ico.svg);min-width: 14px"></span>\n            </ion-col>\n          </ng-template>\n          <ion-col col-3>\n            <span class="icon-s" (click)="openPrizePage()" style="content: url(./assets/icon/view_more.svg);min-width: 14px"></span>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<div *ngIf="down_arrow_showing==1">\n  <span *ngIf="downShowing==0">\n    <div class="arrow" style="z-index: 9; border: none;background-image: url(\'assets/img/down_arrow_pulsate.png\');" id="newDiv"></div>\n  </span>\n</div>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\check-winnings\check-winnings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_syndicate_service__["a" /* SyndicateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_4__services_params__["a" /* Params */]])
], CheckWinningsPage);

//# sourceMappingURL=check-winnings.js.map

/***/ })

});
//# sourceMappingURL=18.js.map