webpackJsonp([46],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSoundProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppSoundProvider = (function () {
    function AppSoundProvider(nativeAudio, platform) {
        this.nativeAudio = nativeAudio;
        this.audioType = 'html5';
        this.sounds = [];
        if (platform.is('cordova')) {
            this.audioType = 'native';
        }
        this.preload('buttonClick', 'assets/sound/button-tap.wav');
        this.preload('cardFlip', 'assets/sound/Card-Flip-003.wav');
        this.preload('gamePlay', 'assets/sound/Game-Play-Button-002.wav');
        this.preload('menuClick', 'assets/sound/Menu-click004.wav');
        this.preload('refresh', 'assets/sound/Page_Refresh-005.wav');
        this.preload('inbox', 'assets/sound/error.wav');
        this.preload('Error', 'assets/sound/inbox-notification.wav');
    }
    AppSoundProvider.prototype.preload = function (key, asset) {
        if (this.audioType === 'html5') {
            var audio = {
                key: key,
                asset: asset,
                type: 'html5'
            };
            this.sounds.push(audio);
        }
        else {
            this.nativeAudio.preloadSimple(key, asset);
            var audio = {
                key: key,
                asset: key,
                type: 'native'
            };
            this.sounds.push(audio);
        }
    };
    AppSoundProvider.prototype.play = function (key) {
        // let audio = this.sounds.find((sound) => {
        //     return sound.key === key;
        // });
        // if(audio.type === 'html5'){
        //     let audioAsset = new Audio(audio.asset);
        //     audioAsset.play();
        // } else {
        //     this.nativeAudio.play(audio.asset).then((res) => {
        //         console.log(res);
        //     }, (err) => {
        //         console.log(err);
        //     });
        // }
    };
    return AppSoundProvider;
}());
AppSoundProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* Platform */]])
], AppSoundProvider);

//# sourceMappingURL=app-sound.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__params__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthService = (function () {
    function AuthService(http, file, params, plt, storage, transfer) {
        this.http = http;
        this.file = file;
        this.params = params;
        this.plt = plt;
        this.storage = storage;
        this.transfer = transfer;
        this.apiUrl = 'https://nima.lottosocial.com/wp-json/mobi/v2/';
        /*

        this.isAndroid = plt.is('android');
        this.isCordova = plt.is('cordova');
        this.isIOS = plt.is('ios');

        let connHandler = (evt)=>{
            //console.log('****** CONN CHANGED *******', evt.type);
            this.connType = network.type;
            if(evt.type == 'online') this.isOnline = true;
            else this.isOnline = false;
        }

        plt.ready()
        .then((source)=>{

            this.ready = true;

            if(this.isCordova){

                this.connType = network.type;
                if(network.type != 'none') this.isOnline = true;

                this.network.onchange().subscribe(connHandler);
                this.network.onConnect().subscribe(connHandler);
                this.network.onDisconnect().subscribe(connHandler);
                
                this.plt.pause.subscribe(()=>{
                    //console.log('*******CORDOVA PAUSE*******');
                });

                this.plt.resume.subscribe(()=>{
                    console.log('******CORDOVA RESUME*******');
                    setTimeout(()=>{
                        this.connType = this.network.type;
                        console.log('******ON RESUME CONN TYPE******', this.connType);
                    }, 3000);
                });
            }
            
        })
        .catch(this.handleError);

        */
    }
    Object.defineProperty(AuthService, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]], [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]]];
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.makeId = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 26; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    AuthService.prototype.handleError = function (error) {
        console.log('NATIVE SERVICE ONREADY ERROR: ', error);
    };
    AuthService.prototype.loginUser = function (country_code, tel, password) {
        console.log("AuthService::loginUser", __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId, __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline);
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId || __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId == "") {
            __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId = this.makeId();
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        var action = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].REDIS_API_URL;
        //let action = CommonService.version + '/login/';
        var login = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "1",
                    "screen_id": "1.1",
                    "action": "login_mobile_app",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "login",
                    "mobile": tel,
                    "password": password,
                    "country_code": country_code // "44"
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderDF()
        });
        console.log("login", login);
        var response = this.http.post(action, login, opt).map(function (res) { return res.json(); });
        return response;
    };
    AuthService.prototype.getJWTToken = function (email, password) {
        console.log("AuthService::loginUser", __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId, __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline);
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId || __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId == "") {
            __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId = this.makeId();
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        var action = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].version + '/user/session';
        // Create request object
        var jwtRequest = {
            "email": email,
            "password": password,
            "remember_me": true
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getDFHeaderUser()
        });
        console.log("jwtRequest", jwtRequest);
        var response = this.http.post(__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].apiDFUser + action, jwtRequest, opt).map(function (res) { return res.json(); });
        return response;
    };
    AuthService.prototype.refreshJWT = function (currentJwt) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        myHeaders.set('Content-type', 'application/json');
        myHeaders.append('X-DreamFactory-Api-Key', '6498a8ad1beb9d84d63035c5d1120c007fad6de706734db9689f8996707e0f7d');
        myHeaders.append('X-DreamFactory-Session-Token', currentJwt);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: myHeaders
        });
        var response = this.http.put('http://api3.hatchster.com/api/v2/user/session', '', opt).map(function (res) { return res.json(); });
        return response;
    };
    AuthService.prototype.forgotPassword = function (mobile, country_code) {
        console.log("AuthService::loginUser", __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId, __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline);
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId || __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId == "") {
            __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId = this.makeId();
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        //let action = CommonService.version + '/login/';
        var action = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].REDIS_API_URL;
        var forgotPassword = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "1",
                    "screen_id": "1.1",
                    "action": "forgetpwd_mobile_app",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "forget_password",
                    "mobile": mobile,
                    "country_code": country_code // "44"
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, forgotPassword, opt).map(function (res) { return res.json(); });
        return response;
    };
    AuthService.prototype.updateVisitorLog = function (os) {
        var _this = this;
        console.log("AuthService::updateVisitorLog", __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId, __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline);
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId || __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId == "") {
            __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId = this.makeId();
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].nullObserver;
        }
        // let action = CommonService.apiUrl + CommonService.version + '/visitor/';
        var action = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].REDIS_API_URL;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
            var getDetailUrl = 'http://www.ip-api.com/json';
            _this.http.get(getDetailUrl).map(function (res) { return res.json(); }).take(1).subscribe(function (value) {
                console.log("my details: ", value);
                var login = {
                    "request": [
                        {
                            "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                            "page_id": "1",
                            "screen_id": "1.1",
                            "action": "update visitor log",
                            "website": "Lotto Social",
                            "website_id": "27",
                            "source_site": "mobi.lottosocial.com",
                            "module_name": "update_visitor_log",
                            "ip_address": value.query,
                            "visit_url": "mobile_land",
                            "referer": "mobile_land",
                            "php_sid": "sd1344535KSFF",
                            "user_device": "mobile",
                            "user_os": os,
                            "user_location": value.regionName,
                            "user_browser": "",
                            "user_country": value.country,
                            "user_browser_version": "",
                            "viewport_device_type": ""
                        }
                    ]
                };
                var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
                    headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
                });
                var response = _this.http.post(action, login, opt).map(function (res) { return res.json(); });
                response.take(1).subscribe(function (visitorData) {
                    if (visitorData) {
                        var visitorId = visitorData.response[0].update_visitor_log.response.visitor_id;
                        observer.next(visitorId);
                    }
                    observer.complete();
                }, function (err) {
                    console.log('firstTimeLoad err', err);
                });
            }, function (err) { });
        });
    };
    /*
   email:"s@w.com",
   first_name:"1",
   free_reg_msn:"23423423423",
   free_reg_pwd:"zssdasdfasdf",
   image:"",
   last_name:"2",
   mobile:"23423423423"
   */
    /**
     * New user registration API call (DF version)
     *
     * @param {any}
     */
    /*    addUser(user:any) {
            console.log("addUser", user);
            if (!CommonService.sessionId || CommonService.sessionId == "") {
                CommonService.sessionId = this.makeId();
            }
    
            if (!CommonService.isOnline) {
                this.params.setIsInternetAvailable(false);
                return;
            }
    
            let value = {
                "session_ID": CommonService.sessionId,
                "page_ID": "1",
                "screen_id": "1.2",
                "action": "login_mobile_app",
                "website": "Lotto Social",
                "website_id": "27",
                "source_site": "mobi.lottosocial.com",
                "module_name": "register",
    
                "mobile": user.mobile,
                "password": user.free_reg_pwd,
                "country_code": user.country_code,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                "profile_image_url": user.profile_image_url
            };
    
            let valueStr = JSON.stringify(value)
            console.log("value string:", valueStr );
            // valueStr = valueStr.replace( /"/g, "\\\"" )
            console.log("value string:", valueStr );
    
            let action = CommonService.apiUrlDF + 'proc_freeRegistrationStep1_Mobile_App';
            let signup =
            {
                "params": [
                {
                    "name": "json_request",
                    "param_type": "IN",
                    "value": valueStr,
                    "type": "NVARCHAR(MAX)",
                    "length": 0
                },
                {
                    "name": "response",
                    "param_type": "OUT",
                    "value": "",
                    "type": "NVARCHAR(MAX)"
                }
                ],
                "request_source":"mobile_app"
            };
    
    
            let opt: RequestOptions = new RequestOptions({
                headers: CommonService.getHeaderDF()
            });
            
            console.log("addUser", signup);
            var response = this.http.post(action,
                signup, opt).map(res => res.json());
            return response;
        }*/
    /**
     * New user registration API call (WP version)
     *
     * @param {any}
     */
    AuthService.prototype.addUser = function (user) {
        console.log("addUser", user);
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId || __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId == "") {
            __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId = this.makeId();
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        // let action = CommonService.version + '/register/';
        var action = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].REDIS_API_URL;
        var signup = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "1",
                    "screen_id": "1.2",
                    "action": "login_mobile_app",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "register",
                    "mobile": user.free_reg_msn,
                    "password": user.free_reg_pwd,
                    "country_code": user.country_code,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "email": user.email,
                    "profile_image_url": user.profile_image_url,
                    "uuid": user.uuid
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log("addUser", signup);
        var response = this.http.post(action, signup, opt).map(function (res) { return res.json(); });
        return response;
    };
    AuthService.prototype.uploadProfilePic = function (filePath) {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        var server = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].apiUrl +
            __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].version + '/upload/?process=profile&module_name=image_upload';
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        myHeaders.set('Authorization', 'Oauth oauth_consumer_key = "NDes1FKC0Kkg",' +
            'oauth_token="djKnEJjJ7TYw0VJEsxGEtlfg",' +
            'oauth_signature_method="HMAC-SHA1",' +
            'oauth_timestamp="1490087533",' +
            'oauth_nonce="dWL9pr",' +
            'oauth_version="1.0",' +
            'oauth_signature="mQF41gSF7KIuVqzqcI0nSX1UklE%3D"');
        myHeaders.append('Content-type', 'multipart/form-data');
        var extension = filePath.substr(filePath.lastIndexOf('.') + 1);
        var options = {
            fileKey: 'file',
            // fileName: 'name.jpg',
            // mimeType: "multipart/form-data",
            headers: myHeaders
        };
        var formData = new FormData();
        formData.append('image', filePath);
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            var fileTransfer = _this.transfer.create();
            fileTransfer.upload(filePath, encodeURI(server), options)
                .then(function (data) {
                // success
                console.log("success" + data);
                if (data && data.response && data.response.status == 'SUCCESS') {
                    observer.next(data.response);
                }
                else {
                    observer.next(Error("Image upload error."));
                }
                observer.complete();
            }, function (err) {
                // error
                observer.next(err);
                observer.complete();
            });
        });
    };
    AuthService.prototype.getLoggedInUser = function () {
        // return firebase.auth().currentUser;
    };
    AuthService.prototype.onAuthStateChanged = function (callback) {
        // return firebase.auth().onAuthStateChanged(callback);
    };
    AuthService.prototype.get_credit_offer = function () {
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        // let action = CommonService.apiUrl + CommonService.version + "/offers/"
        var action = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var body = {
            "request": [
                {
                    "page_id": "2",
                    "screen_id": "2.3",
                    "module_name": "get_credit_offer",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log("get_credit_offer", action);
        var response = this.http.post(action, body, opt).map(function (res) { return res.json(); });
        return response;
    };
    AuthService.prototype.get_fetch_offer = function () {
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        //let action = CommonService.apiUrl + CommonService.version + "/offers/"
        var action = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].REDIS_API_URL;
        var body = {
            "page_id": "2", "screen_id": "2..1", "module_name": "get_credit_offer",
            "customer_id": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, body, opt).map(function (res) { return res.json(); });
        return response;
    };
    AuthService.prototype.get_Credit_Points = function () {
        var action = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].REDIS_API_URL;
        //let action = CommonService.apiUrl + CommonService.version + "/profile/"
        var body = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "action": "login_mobile_app",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "1",
                    "screen_id": "1.6",
                    "module_name": "get_account_details",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, body, opt).map(function (res) { return res.json(); });
        return response;
    };
    AuthService.prototype.your_games = function () {
        // let action = CommonService.apiUrl + CommonService.version + "/games/"
        var action = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var body = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "3",
                    "screen_id": "3.1",
                    "action": "your_game",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_your_game_list",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, body, opt).map(function (res) { return res.json(); });
        return response;
    };
    AuthService.prototype.redeem_game = function () {
        //let action = CommonService.apiUrl + CommonService.version + "/games/"
        var action = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var body = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "3",
                    "screen_id": "3.3",
                    "action": "buy_game",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_your_game_list_game_slider",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id
                },
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "3",
                    "screen_id": "3.1",
                    "action": "your_game",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_buy_game_list_redeem_products",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id
                },
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "3",
                    "screen_id": "3.2",
                    "action": "your_game",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_buy_game_list",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id
                },
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, body, opt).map(function (res) { return res.json(); });
        return response;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_9__params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */]])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatabaseService = DatabaseService_1 = (function () {
    function DatabaseService(sqlite, platform) {
        var _this = this;
        this.sqlite = sqlite;
        this.platform = platform;
        this.tableCount = 5;
        this.databaseCreated = 0;
        // console.log("DatabaseService");
        platform.ready().then(function () { return _this.createDatabase(); });
    }
    DatabaseService.prototype.createDatabase = function () {
        var _this = this;
        this.sqlite.create({
            name: DatabaseService_1.databaseName,
            location: "default"
        }).then(function (db) {
            console.log("database created");
            _this.database = db;
            // open sqlite database
            _this.prepareSqliteDatabase();
        }, function (error) {
            console.error("Unable to open database", error);
        });
    };
    DatabaseService.prototype.insert = function (tableName, columnsName, columnsValues) {
        var _this = this;
        console.log("INSERT INTO " + tableName
            + " ( " + columnsName + ") VALUES (" + columnsValues + ")");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (observer) {
            _this.database.executeSql("INSERT INTO " + tableName
                + " ( " + columnsName + ") VALUES (" + columnsValues + ")", [])
                .then(function (data) {
                console.log("INSERTED: " + JSON.stringify(data));
                observer.next(data);
                observer.complete();
            }, function (error) {
                console.log("ERROR: " + JSON.stringify(error.err));
                observer.next(error);
                observer.complete();
            });
        });
    };
    DatabaseService.prototype.update = function (tableName, columnsNames, columnsValues, whereClause, whereArgs) {
        var _this = this;
        console.log("UPDATE " + tableName + columnsNames + " " + whereClause, columnsValues.concat(whereArgs));
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (observer) {
            _this.database.executeSql("UPDATE " + tableName + columnsNames + " " + whereClause, columnsValues.concat(whereArgs))
                .then(function (data) {
                console.log("UPDATED: " + JSON.stringify(data));
                observer.next(data);
                observer.complete();
            }, function (error) {
                console.log("ERROR: " + JSON.stringify(error.err));
                observer.next(error);
                observer.complete();
            });
        });
    };
    DatabaseService.prototype.select = function (tableName, columnsNames, whereClause, whereArgs) {
        var query = "SELECT " + columnsNames + " FROM " + tableName + " " + whereClause;
        console.log(query, whereArgs);
        return this.database.executeSql(query, whereArgs)
            .then(function (data) {
            console.log("ROWS: " + JSON.stringify(data));
        }, function (error) {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    };
    DatabaseService.prototype.raw_query = function (query, params) {
        var _this = this;
        if (!this.platform.is('cordova')) {
            return new Promise(function (resolve, reject) {
                resolve({ rows: [] });
            });
        }
        if (this.databaseCreated >= this.tableCount) {
            console.log(query);
            return this.database.executeSql(query, params);
        }
        else {
            this.createDatabase();
            return new Promise(function (resolve, reject) {
                var source = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(400)
                    .take(60)
                    .subscribe(function (res) {
                    console.log("observing ", _this.databaseCreated, _this.tableCount, res);
                    if (_this.databaseCreated >= _this.tableCount) {
                        source.unsubscribe();
                        console.log("executing " + query);
                        _this.database.executeSql(query, params).then(function (res) {
                            console.log("result ", res);
                            for (var i = 0; i < res.rows.length; i++) {
                                console.log("row " + i + ": ", res.rows.item(i));
                            }
                            resolve(res);
                        }, function (err) {
                            reject(err);
                        });
                    }
                    if (res > 58) {
                        reject(Error("Database taking too long to respond"));
                    }
                });
            });
        }
    };
    DatabaseService.prototype.prepareSqliteDatabase = function () {
        var _this = this;
        console.log("prepareSqliteDatabase()");
        var tblAppPageCreate = "CREATE TABLE IF NOT EXISTS `tbl_App_Page` ("
            + "`Page_ID` INTEGER PRIMARY KEY,"
            + "`Page_Name` varchar(300) NULL,"
            + "`Date_Created` datetime NULL)";
        this.database.executeSql(tblAppPageCreate, {}).then(function (data) {
            _this.databaseCreated++;
            // console.log("TABLE Page CREATED: ", this.databaseCreated, tblPageCreate, data);
        }, function (error) {
            console.error("Unable to execute sql", error);
        });
        var tblAppModuleCreate = "CREATE TABLE IF NOT EXISTS `tbl_App_Module` ("
            + "`App_Module_ID` INTEGER PRIMARY KEY AUTOINCREMENT, "
            + "`Json_Data` TEXT NULL, "
            + "`Expiry_Status` varchar(25) NULL, "
            + "`Modified_By` varchar(50) NULL, "
            + "`Expiry_Date` datetime NULL, "
            + "`Modified_Date` datetime NULL)";
        this.database.executeSql(tblAppModuleCreate, {}).then(function (data) {
            _this.databaseCreated++;
            // console.log("TABLE Module CREATED: ", this.databaseCreated, tblModuleCreate, data);
        }, function (error) {
            console.error("Unable to execute sql", error);
        });
        var tblAppPageModuleCreate = "CREATE TABLE IF NOT EXISTS `tbl_App_Page_Module` ( "
            + "`Page_Module_ID` INTEGER PRIMARY KEY AUTOINCREMENT,"
            + "`Page_ID` INTEGER NULL,"
            + "`Module_ID` INTEGER NULL,"
            + "`End_Point` varchar(25) NULL,"
            + "`Modified_Date` datetime NULL,"
            + "`Date_Created` datetime NULL)";
        // + "`Produst_ID` INTEGER NULL,"
        // + "`Offer_ID` INTEGER NULL"
        this.database.executeSql(tblAppPageModuleCreate, {}).then(function (data) {
            _this.databaseCreated++;
            // console.log("TABLE PageModule CREATED: ", this.databaseCreated, tblPageModuleCreate, data);
        }, function (error) {
            console.error("Unable to execute sql", error);
        });
        var tblAppReference = "CREATE TABLE IF NOT EXISTS `tbl_App_Reference` ( "
            + "`App_ID` INTEGER PRIMARY KEY,"
            + "`App_Version` varchar(100) NULL,"
            + "`APP_Token` varchar(100) NULL,"
            + "`User_ID` INTEGER NULL,"
            + "`User_Token` varchar(50) NULL)";
        this.database.executeSql(tblAppReference, {}).then(function (data) {
            _this.databaseCreated++;
            // console.log("TABLE PageModule CREATED: ", this.databaseCreated, tblAppReference, data);
        }, function (error) {
            console.error("Unable to execute sql", error);
        });
        var tblCustomerContactList = "CREATE TABLE IF NOT EXISTS `tbl_Customer_Contact_List` ( "
            + "`Contact_ID` INTEGER PRIMARY KEY,"
            + "`First_Name` varchar(100) NULL,"
            + "`Surname` varchar(100) NULL,"
            + "`Mobile_Number` INTEGER NULL,"
            + "`Selected` INT2 NULL, "
            + "`Date_Created` datetime NULL)";
        this.database.executeSql(tblCustomerContactList, {}).then(function (data) {
            _this.databaseCreated++;
            // console.log("TABLE PageModule CREATED: ", this.databaseCreated, tblCustomerContactList, data);
        }, function (error) {
            console.error("Unable to execute sql", error);
        });
        // WP REST API tables create
        var tblPageCreate = "CREATE TABLE IF NOT EXISTS `tbl_Page` ("
            + "`Page_ID` INTEGER PRIMARY KEY AUTOINCREMENT,"
            + "`Page_Name` varchar(300) NULL,"
            + "`Complete_Json_Data` TEXT NULL,"
            + "`Update` TINYINT NULL,"
            + "`Status` varchar(25) NULL,"
            + "`Modified_By` varchar(50) NULL,"
            + "`Modified_Date` datetime NULL,"
            + "`Date_Created` datetime NULL)";
        this.database.executeSql(tblPageCreate, {}).then(function (data) {
            _this.databaseCreated++;
            // console.log("TABLE Page CREATED: ", this.databaseCreated, tblPageCreate, data);
        }, function (error) {
            console.error("Unable to execute sql", error);
        });
        var tblModuleCreate = "CREATE TABLE IF NOT EXISTS `tbl_Module` ("
            + "`Module_ID` INTEGER PRIMARY KEY AUTOINCREMENT, "
            + "`Module_Name` Varchar(100) NULL, "
            + "`SP_Name` Varchar(100) NULL, "
            + "`Module_Json` TEXT NULL, "
            + "`Status` varchar(25) NULL, "
            + "`Modified_By` varchar(50) NULL, "
            + "`Modified_Date` datetime NULL, "
            + "`Date_Created` datetime NULL)";
        this.database.executeSql(tblModuleCreate, {}).then(function (data) {
            _this.databaseCreated++;
            // console.log("TABLE Module CREATED: ", this.databaseCreated, tblModuleCreate, data);
        }, function (error) {
            console.error("Unable to execute sql", error);
        });
        var tblPageModuleCreate = "CREATE TABLE IF NOT EXISTS `tbl_Page_Module` ( "
            + "`Page_Module_ID` INTEGER PRIMARY KEY AUTOINCREMENT,"
            + "`Page_ID` INTEGER NULL,"
            + "`Module_ID` INTEGER NULL,"
            + "`Expired` TINYINT NULL,"
            + "`Expire_At` Varchar(50) NULL,"
            + "`Status` varchar(25) NULL,"
            + "`Modified_By` varchar(50) NULL,"
            + "`Modified_Date` datetime NULL,"
            + "`Date_Created` datetime NULL) ";
        this.database.executeSql(tblPageModuleCreate, {}).then(function (data) {
            _this.databaseCreated++;
            // console.log("TABLE PageModule CREATED: ", this.databaseCreated, tblPageModuleCreate, data);
        }, function (error) {
            console.error("Unable to execute sql", error);
        });
    };
    return DatabaseService;
}());
DatabaseService.databaseName = "lottosocial.db";
DatabaseService = DatabaseService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* Platform */]])
], DatabaseService);

var DatabaseService_1;
//# sourceMappingURL=db.service.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
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


/**
 * Generated class for the SupportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SupportPage = (function () {
    function SupportPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SupportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupportPage');
    };
    SupportPage.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    return SupportPage;
}());
SupportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-support',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\support\support.html"*/'<!--\n  Generated template for the SupportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n\n    <ion-title text-center class="title-text-style" >Support</ion-title>\n    <ion-buttons class="button-title" left>\n        <button ion-button icon-only clear (click)="goBack()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n        </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:#ffff">\n\n  \n  <button ion-button icon-only clear outline item-right (click)=" goBack()" class="subtitle-style" >\n      <ion-icon style="margin-left: -12px;" name="arrow-back"></ion-icon> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p> Creating Syndicates</p></button>\n  <div class="text-style-p p-top">\n    <p class="p-style">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n        sed do eiusmod tempor incididunt ut labore .\n\n      </p>\n     </div>\n     <div class="text-style-p">\n      <p class="p-style">\n         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \n         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \n         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \n         pariatur.\n         </p>\n       </div>\n<div class="text-style-p">\n       <p class="p-style">\n         Excepteur sint occaecat cupidatat non proident, sunt in culpa \n         qui officia deserunt mollit anim id est laborum.\n         Ut enim ad\n        </p>\n      \n</div>\n <img class="center" src="assets/icon/multimedia.png">\n <p  class="text-style" >Send Email</p>\n <p  class="text-info-style" >If this doesnot help-contact support </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\support\support.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], SupportPage);

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		737,
		0
	],
	"../pages/affiliate-popups/affiliate-popups.module": [
		736,
		19
	],
	"../pages/agreement/agreement.module": [
		738,
		6
	],
	"../pages/auth/auth.module": [
		777,
		43
	],
	"../pages/blog-element/blog-element.module": [
		739,
		42
	],
	"../pages/blog-elmentdetail/blog-elmentdetail.module": [
		740,
		41
	],
	"../pages/buyoffer-page-tips/buyoffer-page-tips.module": [
		741,
		40
	],
	"../pages/check-winnings/check-winnings.module": [
		743,
		18
	],
	"../pages/create-syndicate/create-syndicate.module": [
		742,
		3
	],
	"../pages/edit-profile/edit-profile-details/edit-profile-details.module": [
		732,
		17
	],
	"../pages/edit-profile/edit-profile-email/edit-profile-email.module": [
		733,
		16
	],
	"../pages/edit-profile/edit-profile-password/edit-profile-password.module": [
		734,
		15
	],
	"../pages/edit-profile/edit-profile.module": [
		744,
		10
	],
	"../pages/event-blog/event-blog.module": [
		745,
		39
	],
	"../pages/example/example.module": [
		746,
		38
	],
	"../pages/games/games.module": [
		747,
		37
	],
	"../pages/help/help.module": [
		748,
		36
	],
	"../pages/home/home.module": [
		735,
		14
	],
	"../pages/inbox-popup/inbox-popup.module": [
		751,
		35
	],
	"../pages/login/login.module": [
		749,
		11
	],
	"../pages/manage-syndicate/manage-syndicate.module": [
		750,
		34
	],
	"../pages/manage-syndicate2/manage-syndicate2.module": [
		752,
		13
	],
	"../pages/my-syndicate/my-syndicate.module": [
		753,
		5
	],
	"../pages/new-syndicate/new-syndicate.module": [
		754,
		9
	],
	"../pages/offers/offers.module": [
		757,
		33
	],
	"../pages/offline/offline.module": [
		755,
		32
	],
	"../pages/overlaypage/overlaypage.module": [
		756,
		31
	],
	"../pages/profile-update-modal/profile-update-modal.module": [
		758,
		30
	],
	"../pages/redeem-games/game-blog/game-blog.module": [
		759,
		29
	],
	"../pages/redeem-games/redeem-games.module": [
		760,
		28
	],
	"../pages/refer-friend-page/refer-friend-page.module": [
		761,
		2
	],
	"../pages/send-bonus/send-bonus.module": [
		762,
		27
	],
	"../pages/signup/signup.module": [
		763,
		20
	],
	"../pages/splash/splash.module": [
		764,
		26
	],
	"../pages/store/store.module": [
		765,
		1
	],
	"../pages/support/support.module": [
		766,
		44
	],
	"../pages/support1/support1.module": [
		767,
		45
	],
	"../pages/syndicate-created-modal/syndicate-created-modal.module": [
		768,
		25
	],
	"../pages/syndicates/syndicates.module": [
		769,
		8
	],
	"../pages/tabs/tabs.module": [
		770,
		12
	],
	"../pages/tandc/tandc.module": [
		771,
		24
	],
	"../pages/update/update.module": [
		772,
		21
	],
	"../pages/view-tickets/view-tickets.module": [
		773,
		23
	],
	"../pages/your-games/your-games.module": [
		774,
		7
	],
	"../pages/your-offers/your-offers.module": [
		775,
		22
	],
	"../pages/your-tickets/your-tickets.module": [
		776,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 197;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Params; });
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


var Params = (function () {
    function Params(events) {
        // console.log( "Params()" );
        this.events = events;
        this.networkConnection = false;
        this.params = {};
        this.homeData = {};
    }
    Params.prototype.setIsInternetAvailable = function (avail) {
        this.networkConnection = avail;
        this.events.publish("network", avail);
    };
    Params.prototype.setHomeData = function (data) {
        this.homeData = data;
        this.events.publish("home-data", data);
    };
    Params.prototype.setUnreadCount = function (data) {
        this.unreadCount = data;
        this.events.publish("unread-count", data);
    };
    Params.prototype.goHomePage = function () {
        this.events.publish("go-home");
    };
    Params.prototype.goTab = function (tabIndex) {
        this.events.publish("go-tab", tabIndex);
    };
    Params.prototype.goPage = function (page) {
        this.events.publish("go-page", page);
    };
    return Params;
}());
Params = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
], Params);

//# sourceMappingURL=params.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// app/shared/services/auth.service.ts





var CommonService = CommonService_1 = (function () {
    function CommonService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.storage.get('user_session_token').then(function (val) {
            CommonService_1.JWT = val;
            console.log(CommonService_1.JWT);
        });
    }
    Object.defineProperty(CommonService, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]], [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]]];
        },
        enumerable: true,
        configurable: true
    });
    CommonService.getHeaderJson = function () {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.set('Content-type', 'application/json');
        /*
        
        OAuth oauth_consumer_key="NDes1FKC0Kkg",
        oauth_token="djKnEJjJ7TYw0VJEsxGEtlfg",
        oauth_signature_method="HMAC-SHA1",
        oauth_timestamp="1490087533",
        oauth_nonce="dWL9pr",
        oauth_version="1.0",
        oauth_signature="mQF41gSF7KIuVqzqcI0nSX1UklE%3D"
        
        OAuth oauth_consumer_key="NDes1FKC0Kkg", oauth_token="djKnEJjJ7TYw0VJEsxGEtlfg", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1490087533", oauth_nonce="dWL9pr", oauth_version="1.0", oauth_signature="mQF41gSF7KIuVqzqcI0nSX1UklE%3D"
        
        */
        myHeaders.append('Authorization', 'Oauth oauth_consumer_key = "NDes1FKC0Kkg",' +
            'oauth_token="djKnEJjJ7TYw0VJEsxGEtlfg",' +
            'oauth_signature_method="HMAC-SHA1",' +
            'oauth_timestamp="1490087533",' +
            'oauth_nonce="dWL9pr",' +
            'oauth_version="1.0",' +
            'oauth_signature="mQF41gSF7KIuVqzqcI0nSX1UklE%3D"');
        return myHeaders;
    };
    CommonService.getHeaderDF = function () {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.set('Content-type', 'application/json');
        myHeaders.append('X-DreamFactory-Api-Key', '5e617cc3809087b481a7cfec1254256bc2dc586ca5c6551a5c59967703461755');
        return myHeaders;
    };
    CommonService.getDFHeaderUser = function () {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.set('Content-type', 'application/json');
        myHeaders.append('X-DreamFactory-Api-Key', '6498a8ad1beb9d84d63035c5d1120c007fad6de706734db9689f8996707e0f7d');
        return myHeaders;
    };
    CommonService.getHeaderForJWT = function () {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.set('Content-type', 'application/json');
        myHeaders.append('X-DreamFactory-Api-Key', '5e617cc3809087b481a7cfec1254256bc2dc586ca5c6551a5c59967703461755');
        myHeaders.append('X-DreamFactory-Session-Token', CommonService_1.JWT);
        return myHeaders;
    };
    CommonService.prototype.updateJWT = function (RecievedData) {
        CommonService_1.JWT = RecievedData;
    };
    CommonService.prototype.getCountry = function () {
        if (CommonService_1.countries) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(CommonService_1.countries);
                observer.complete();
            });
        }
        else {
            var action = CommonService_1.REDIS_API_URL;
            // let action = CommonService.version + '/login/';
            var data = {
                "request": [
                    {
                        "page_id": "1",
                        "screen_id": "1.1",
                        "module_name": "get_country_code_flag"
                    }
                ]
            };
            var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            myHeaders.set('Content-type', 'application/json');
            var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: CommonService_1.getHeaderForJWT()
            });
            var response = this.http.post(action, data, opt)
                .map(function (res) { return res.json(); });
            return response;
        }
    };
    CommonService.prototype.getNewRelease = function () {
        //let action = CommonService.apiUrl + CommonService.version + '/login/';
        var action = CommonService_1.REDIS_API_URL;
        var data = {
            "request": [
                {
                    "session_ID": CommonService_1.sessionId,
                    "page_ID": "1",
                    "screen_id": "1.9",
                    "action": "new_release",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_new_release"
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: CommonService_1.getHeaderForJWT()
        });
        console.log("get_new_release", action, data);
        var response = this.http.post(action, data, opt)
            .map(function (res) { return res.json(); });
        return response;
    };
    CommonService.prototype.trackSegmentPage = function (page_Name, page_Url) {
        if (CommonService_1.session) {
            //let action = CommonService.version + '/segment_page';
            var action = CommonService_1.REDIS_API_URL;
            var data = {
                "request": [
                    {
                        "customer_id": CommonService_1.session.customer_id,
                        "page_name": page_Name,
                        "page_url": page_Url,
                        "module_name": 'wp_segment_tracking'
                    }
                ]
            };
            var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: CommonService_1.getHeaderForJWT()
            });
            var response = this.http.post(action, data, opt)
                .map(function (res) { return res.json(); });
            return response;
        }
    };
    CommonService.prototype.getCreditPoints = function () {
        //let action = "https://nima.lottosocial.com/wp-json/mobi/v2/voucher/"
        var action = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var data = {
            "request": [
                {
                    "session_ID": CommonService_1.sessionId,
                    "action": "get_account_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "7",
                    "screen_id": "7.1",
                    "module_name": "get_balance_details",
                    "customer_id": CommonService_1.session.customer_id
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: CommonService_1.getHeaderForJWT()
        });
        console.log("getCreditPoints", action, data);
        var response = this.http.post(action, data, opt)
            .map(function (res) { return res.json(); });
        return response;
    };
    CommonService.prototype.getValue = function (key) {
        return this.storage.get(key);
    };
    CommonService.prototype.getInvalidModules = function (parameters) {
        if (CommonService_1.session) {
            var action = CommonService_1.REDIS_API_URL;
            var parameter = { request: [] };
            parameter.request.push({
                module_name: "validate_module_name_serial",
                module_data: parameters
            });
            var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: CommonService_1.getHeaderForJWT()
            });
            console.log(JSON.stringify(parameter));
            var response = this.http.post(action, parameter, opt)
                .map(function (res) { return res.json(); });
            return response;
        }
    };
    return CommonService;
}());
CommonService.SecureStorageUser = 'lotto_user';
CommonService.sessionId = "";
CommonService.userSessionId = "";
CommonService.userSessionToken = "";
CommonService.isOnline = false;
CommonService.updateAvailable = false;
CommonService.sitename = 'https://nima.lottosocial.com/';
CommonService.apiUrl = 'https://nima.lottosocial.com/wp-json/mobi/';
CommonService.REDIS_API_URL = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
CommonService.BRANCH_IO_KEY = "key_test_epDCJkvrmUr5cYlfLpLIOopjxFopHJES";
CommonService.BRANCH_IO_URL = "https://api.branch.io/v1/url";
CommonService.version = 'v2';
CommonService.apiUrlDF = 'http://api.hatchster.com/api/v2/sqllbtnima2016/_proc/';
CommonService.apiDFUser = 'http://api3.hatchster.com/api/';
CommonService.nullObserver = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
    observer.next(null);
    observer.complete();
});
CommonService = CommonService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], CommonService);

var CommonService_1;
//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__params__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomeService = (function () {
    function HomeService(http, params, storage, platform, transfer, file) {
        this.http = http;
        this.params = params;
        this.storage = storage;
        this.platform = platform;
        this.transfer = transfer;
        this.file = file;
        this.customerId = "";
        console.log("HomeService");
    }
    Object.defineProperty(HomeService, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]]];
        },
        enumerable: true,
        configurable: true
    });
    HomeService.prototype.getModules = function (action, page_id, module_names) {
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        this.customerId = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id;
        console.log("getModules", __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session);
        var parameter = { request: [] };
        for (var i = 0; i < module_names.length; ++i) {
            parameter.request.push({
                page_id: page_id,
                screen_id: "1.4",
                module_name: module_names[i],
                customer_id: this.customerId
            });
        }
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT(),
        });
        //let url = CommonService.apiUrl + CommonService.version + '/' + action + '/';
        var url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        console.log("getOffers", url, parameter);
        var response = this.http.post(url, parameter, opt).map(function (res) { return res.json(); });
        return response;
    };
    HomeService.prototype.getHomeCard = function (module_name) {
        console.log("getHomeCard");
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        var action = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        //let action = CommonService.version + '/home/';
        var parameter = {
            "request": [
                {
                    "page_id": "1",
                    "screen_id": "1.4",
                    "module_name": module_name,
                    "customer_id": this.customerId
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    HomeService.prototype.getHomeEventsBlog = function () {
        console.log("getHomeCard");
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        var action = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        //let action = CommonService.version + '/home/';
        var parameter = {
            "request": [
                {
                    "page_id": "1",
                    "screen_id": "1.6.2",
                    "module_name": "get_home_blog",
                    "customer_id": this.customerId
                },
                {
                    "page_id": "1",
                    "screen_id": "1.6.1",
                    "module_name": "get_home_events",
                    "customer_id": this.customerId
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    HomeService.prototype.getHomeMessages = function () {
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session) {
            return null;
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        // let url = CommonService.apiUrl + CommonService.version + '/limb/';
        var url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "action": "login_mobile_app",
                    "page_id": "1",
                    "screen_id": "1.8",
                    "module_name": "get_home_message",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(url, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    HomeService.prototype.getCreditOffers = function () {
        console.log("HomeService::getCreditOffers");
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        var url = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].apiUrlDF + 'proc_get_credit_offers_mobile_app';
        var parameter = {
            "params": [{
                    "name": "json_request",
                    "param_type": "IN",
                    "value": "{\"page_id\": \"2\",\"screen_id\": \"2..1\",\"module_name\":\"get_credit_offer\",\"customer_id\": \"1970400\"}",
                    "type": "NVARCHAR(500)",
                    "length": 0
                },
                {
                    "name": "response",
                    "param_type": "OUT",
                    "value": "",
                    "type": "NVARCHAR(max)"
                }],
            "request_source": "mobile_app"
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderDF()
        });
        var response = this.http.post(url, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    HomeService.prototype.markAsRead = function (cardId) {
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session) {
            return null;
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        console.log("getHomeCard");
        var url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        // let url = 'https://nima.lottosocial.com/wp-json/mobi/v2/limb/';
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "1",
                    "screen_id": "1.6.3",
                    "action": "get_card_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "mark_home_inbox_message",
                    "customer_id": this.customerId,
                    "card_id": cardId
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(url, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    HomeService.prototype.deleteMsg = function (cardId) {
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session) {
            return null;
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        var url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        // let url = 'https://nima.lottosocial.com/wp-json/mobi/v2/limb/';
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "1",
                    "screen_id": "1.6.3",
                    "action": "get_card_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "delete_home_inbox_message",
                    "customer_id": this.customerId,
                    "card_id": cardId
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(url, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    //event details
    HomeService.prototype.getEventDetails = function (eventId) {
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session) {
            return null;
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        var url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "action": "get_event_contents",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "1",
                    "screen_id": "1.6.4",
                    "module_name": "get_event_contents",
                    "event_id": eventId
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(url, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    //Blog details
    HomeService.prototype.getBlogDetails = function (blogId) {
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session) {
            return null;
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        var url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "action": "get_blog_contents",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "1",
                    "screen_id": "1.6.3",
                    "module_name": "get_blog_contents",
                    "blog_id": blogId
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(url, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    return HomeService;
}());
HomeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_9__params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
], HomeService);

//# sourceMappingURL=service.home.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__params__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OfferService = (function () {
    function OfferService(http, params, storage, platform) {
        this.http = http;
        this.params = params;
        this.storage = storage;
        this.platform = platform;
        this.customerId = "";
        console.log("OfferService");
        console.log(this.params);
    }
    Object.defineProperty(OfferService, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]]];
        },
        enumerable: true,
        configurable: true
    });
    OfferService.prototype.getJackpotList = function () {
        console.log("getExistingPaymilCards", __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session);
        if (!__WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        var action = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        // let action = CommonService.apiUrl + CommonService.version + '/privatesyndicate/';
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.7",
                    "action": "jackpot_list",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_big_jackpot_list",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session.customer_id,
                    "private_syndicate_id": "298"
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log("getExistingPaymilCards", action, parameter, opt);
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    OfferService.prototype.processPaymillCardPayment = function (offer, customer, payment) {
        console.log("getExistingPaymilCards", offer, customer, payment);
        if (!__WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        // let action =
        //     CommonService.apiUrl +
        //     CommonService.version + '/paywithtoken/';
        var action = __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].REDIS_API_URL;
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.11",
                    "action": "process_paymill_card_payment",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "process_paymill_card_payment",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session.customer_id,
                    "title": customer.title,
                    "first_name": customer.first_name,
                    "last_name": customer.last_name,
                    "dob": customer.dob,
                    "phone": customer.mobile_number,
                    "mobile": customer.mobile_number,
                    "email": customer.email_address,
                    "amount": offer.total_cost,
                    "customer_web_lead_id": "",
                    "TP1": "",
                    "TP2": "",
                    "p_type": "10",
                    "offer_id": offer.offer_id,
                    "status": "",
                    "prosub_id": offer.prosub_id,
                    "payment_currency": "GBP",
                    "payment_type": "payment",
                    "award_id": "",
                    "transaction_log_id": "",
                    "customer_payment_stored_detail_id": payment.pay_stored_detail_id,
                    "client_id": payment.client_id,
                    "client_pay_id": payment.client_pay_id
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log("getExistingPaymilCards", action, parameter, opt);
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    OfferService.prototype.getExistingPaymilCardsDetails = function () {
        console.log("getExistingPaymilCardsDetails", __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session);
        if (!__WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        // let action = CommonService.apiUrlDF + 'Proc_fetch_private_syndicates_Mobile_App';
        //let action = CommonService.apiUrl + CommonService.version + '/privatesyndicate/';
        var action = __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].REDIS_API_URL;
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.10",
                    "action": "get_card_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_customer_paymill_card_details",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session.customer_id,
                    "p_type": "10",
                    "paymill_offer_id": "1019"
                }, {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "7",
                    "screen_id": "7.2",
                    "action": "profile_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_customer_details",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session.customer_id
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log("getExistingPaymilCardsDetails", action, parameter, opt);
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    OfferService.prototype.getExistingPaymilCardsDetails2 = function () {
        console.log("getExistingPaymilCardsDetails", __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session);
        if (!__WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        // let action = CommonService.apiUrlDF + 'Proc_fetch_private_syndicates_Mobile_App';
        //let action = CommonService.apiUrl + CommonService.version + '/privatesyndicate/';
        var action = __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].REDIS_API_URL;
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.10",
                    "action": "get_card_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_customer_paymill_card_details",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session.customer_id,
                    "p_type": "10",
                    "from_process": "profile"
                }, {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "7",
                    "screen_id": "7.2",
                    "action": "profile_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_customer_details",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session.customer_id
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log("getExistingPaymilCardsDetails", action, parameter, opt);
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    OfferService.prototype.buyCurrentOfferOnHomeCard = function (offerId) {
        console.log("getExistingPaymilCardsDetails", __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session);
        if (!__WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return;
        }
        // let action = CommonService.apiUrlDF + 'Proc_fetch_private_syndicates_Mobile_App';
        //let action = CommonService.apiUrl + CommonService.version + '/privatesyndicate/';
        var action = __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].REDIS_API_URL;
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.10",
                    "action": "get_card_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_customer_paymill_card_details",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session.customer_id,
                    "p_type": "10",
                    "paymill_offer_id": offerId
                }, {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "7",
                    "screen_id": "7.2",
                    "action": "profile_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_customer_details",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session.customer_id
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log("getExistingPaymilCardsDetails", action, parameter, opt);
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    OfferService.prototype.buy_Credit_Offer = function (offerId, visitorId) {
        //let apiUrl:string = 'https://nima.lottosocial.com/wp-json/mobi/v2/payment/';
        //let apiUrl: string = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var apiUrl = __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].REDIS_API_URL;
        var body = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session.session_ID,
                    "action": "buy credit offer",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "2",
                    "screen_id": "2.2",
                    "module_name": "buy_credit_offer",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].session.customer_id,
                    "offer_id": offerId,
                    "visitor_id": visitorId
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(apiUrl, body, opt).map(function (res) { return res.json(); });
        return response;
    };
    return OfferService;
}());
OfferService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* Platform */]])
], OfferService);

//# sourceMappingURL=offer.service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Support1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support_support__ = __webpack_require__(143);
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
 * Generated class for the Support1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Support1Page = (function () {
    function Support1Page(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.initializeItems();
    }
    Support1Page.prototype.taponitem = function (i) {
        if (i == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__support_support__["a" /* SupportPage */]);
        }
    };
    Support1Page.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    Support1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Support1Page');
    };
    Support1Page.prototype.syndicateManagement = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__support_support__["a" /* SupportPage */]);
    };
    Support1Page.prototype.initializeItems = function () {
        this.items = [
            'Payment Billing and Subscription',
            'Tickets,Lines or Draws',
            'Syndicate Management',
            'Games and Scratch Cards',
            'Vouchers',
            'Accounts',
            'Cancellation'
        ];
    };
    Support1Page.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return Support1Page;
}());
Support1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-support1',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\support1\support1.html"*/'\n\n\n<ion-content padding style="background-color: rgba(0,0,0,.1);">\n    <div class="content-page">\n    <div class="content-header" >\n    <p class="text-style">Support</p>\n    <button ion-button icon-end clear class="button-style" (click)="close()">\n     \n      <ion-icon name="close"></ion-icon>\n    </button>\n    </div>\n     <div style="display: flex;\n      justify-content: center;">\n      <ion-searchbar style="width: 65%;" (ionInput)="getItems($event)"></ion-searchbar>\n    </div>\n    <hr class="hr-style" >\n   \n    <div  class="div-box" *ngFor="let item of items;let i=index" (click)="taponitem(i)">\n     <div  class="div-box1" >\n      <p class="label-style"  >  {{ item }}</p>\n     </div>\n     <div class="div-box2" >\n    <img  class="arrow-style"  src="assets/icon/001-arrows.png">\n    </div>\n    </div>\n   <div class="mail-box" >\n    <ion-row>\n      <img  style="height: 25px;" src="assets/icon/001-multimedia.png">\n    </ion-row>\n    </div>\n    <div class="mail-textbox" >\n    <ion-row>\n      <p  class="mail-text" >Send Email</p>\n    </ion-row>\n    </div>\n    <div class="info-box" >\n    <ion-row>\n      <p>If need further help,then email us.</p>\n    </ion-row>\n    </div>\n   </div>\n    </ion-content>\n    '/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\support1\support1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], Support1Page);

//# sourceMappingURL=support1.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
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



var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, appSound) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appSound = appSound;
        this.showSilde = 0;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
        // setTimeout(() => {
        //   this.showSilde=1;
        // }, 8000);
    };
    WelcomePage.prototype.goLogin = function () {
        console.log("goLogin");
        this.appSound.play('buttonClick');
        this.navCtrl.push('AuthPage', { tab: 1 });
    };
    WelcomePage.prototype.goSignup = function () {
        console.log("goSignup");
        this.appSound.play('buttonClick');
        this.navCtrl.push('AuthPage', { tab: 0 });
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\welcome\welcome.html"*/'<ion-content style="height: 100%!important">\n	<img class="lotto-logo center" src="assets/img/logo@3x.png" alt="Logo">\n	<video preload="auto" autoplay loop class="video bg-vid" playsinline>\n		<source src="assets/vid/1-shutterstock_v4503179.mp4" type=\'video/mp4\'>\n	</video>\n	<!-- <ion-slides class="slides" autoplay="4000" pager>\n		<ion-slide>\n			<video preload="auto" autoplay loop class="video bg-vid" playsinline>\n				<source src="assets/vid/1-shutterstock_v4503179.mp4" type=\'video/mp4\'>\n			</video>\n			<div class="box">\n				<header class="center">\n					<h1>Welcome to\n						<br>LottoSocial</h1>\n					<p>Join our syndicates and get more chances to win jackpots!</p>\n				</header>\n			</div>\n		</ion-slide>\n\n		<ion-slide>\n			<video preload="auto" autoplay loop class="video bg-vidAeroplane" playsinline>\n				<source src="assets/vid/convertedVideo.mp4" type=\'video/mp4\'>\n			</video>\n			<div class="box">\n				<header class="center">\n					<h1>One click checker</h1>\n					<p>This button is your new friend, click him every time you want to check your tickets</p>\n				</header>\n			</div>\n		</ion-slide>\n\n		<ion-slide>\n			<video preload="auto" autoplay loop class="video bg-vid" playsinline>\n				<source src="assets/vid/3-learning-languages-flags.mp4" type=\'video/mp4\'>\n			</video>\n			<div class="box">\n				<header class="center">\n					<h1>Bonus Credit</h1>\n					<p>You can convert your winnings to bonus credit to buy more lottery lines for free</p>\n				</header>\n			</div>\n		</ion-slide>\n\n		<ion-slide>\n			<video preload="auto" autoplay loop class="video bg-vid" playsinline>\n				<source src="assets/vid/4-online-games.mp4" type=\'video/mp4\'>\n			</video>\n			<div class="box">\n				<header class="center">\n					<h1>Reward Points</h1>\n					<p>Every time you check for your winnings you\'ll also get reward points</p>\n				</header>\n			</div>\n		</ion-slide>\n\n\n		</ion-slides> -->\n	<ion-slides autoplay="4000" pager loop>\n		<ion-slide>\n			<div class="box">\n				<header class="center">\n					<h1>Welcome to\n						<br>LottoSocial</h1>\n					<p>Join our syndicates and get more chances to win jackpots!</p>\n				</header>\n			</div>\n		</ion-slide>\n\n		<ion-slide>\n			<div class="box">\n				<header class="center">\n					<h1>One click checker</h1>\n					<p>This button is your new friend, click him every time you want to check your tickets</p>\n				</header>\n			</div>\n		</ion-slide>\n\n		<ion-slide>\n\n			<div class="box">\n				<header class="center">\n					<h1>Bonus Credit</h1>\n					<p>You can convert your winnings to bonus credit to buy more lottery lines for free</p>\n				</header>\n			</div>\n		</ion-slide>\n\n		<ion-slide>\n			<div class="box">\n				<header class="center">\n					<h1>Reward Points</h1>\n					<p>Every time you check for your winnings you\'ll also get reward points</p>\n				</header>\n			</div>\n		</ion-slide>\n	</ion-slides>\n\n	<ion-grid class="bottom">\n		<ion-row>\n			<ion-col width-50>\n				<button ion-button color="secondary" full (click)="goLogin()">LOGIN</button>\n			</ion-col>\n			<ion-col width-50>\n				<button ion-button color="secondary" block (click)="goSignup()">SIGNUP</button>\n			</ion-col>\n		</ion-row>\n\n	</ion-grid>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\welcome\welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_app_sound_app_sound__["a" /* AppSoundProvider */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(409);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_audio__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_service_home__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_sqlite__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_transfer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_paymentService__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_params__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_device__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_db_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_app_sound_app_sound__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_offer_service__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_simple_timer__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_simple_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_playgame_service__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_branch_io_service__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_welcome_welcome__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_native_page_transitions__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_support_support__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_support1_support1__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































// import {CusHeaderComponent} from '../components/cus-header/cus-header'
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_27__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_support_support__["a" /* SupportPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_support1_support1__["a" /* Support1Page */]
            // CusHeaderComponent
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                autoFocusAssist: false,
                scrollAssist: false,
                tabsPlacement: 'top',
                iconMode: 'ios',
                tabsHighlight: true,
                mode: 'md',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                statusbarPadding: false
            }, {
                links: [
                    { loadChildren: '../pages/affiliate-popups/affiliate-popups.module#AffiliatePopupsPageModule', name: 'AffiliatePopupsPage', segment: 'affiliate-popups', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/agreement/agreement.module#AgreementPageModule', name: 'AgreementPage', segment: 'agreement', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/blog-element/blog-element.module#BlogElementPageModule', name: 'BlogElementPage', segment: 'blog-element', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/blog-elmentdetail/blog-elmentdetail.module#BlogElmentdetailPageModule', name: 'BlogElmentdetailPage', segment: 'blog-elmentdetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/buyoffer-page-tips/buyoffer-page-tips.module#BuyofferPageTipsPageModule', name: 'BuyofferPageTipsPage', segment: 'buyoffer-page-tips', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-syndicate/create-syndicate.module#CreateSyndicatePageModule', name: 'CreateSyndicatePage', segment: 'create-syndicate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/check-winnings/check-winnings.module#CheckWinningsPageModule', name: 'CheckWinningsPage', segment: 'check-winnings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile-details/edit-profile-details.module#EditProfileDetailsModule', name: 'EditProfileDetails', segment: 'edit-profile-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile-email/edit-profile-email.module#EditProfileEmailModule', name: 'EditProfileEmail', segment: 'edit-profile-email', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile-password/edit-profile-password.module#EditProfilePasswordModule', name: 'EditProfilePassword', segment: 'edit-profile-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-blog/event-blog.module#EventBlogPageModule', name: 'EventBlogPage', segment: 'event-blog', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/example/example.module#ExamplePageModule', name: 'ExamplePage', segment: 'example', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/games/games.module#GamesPageModule', name: 'GamesPage', segment: 'games', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/manage-syndicate/manage-syndicate.module#ManageSyndicatePageModule', name: 'ManageSyndicatePage', segment: 'manage-syndicate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inbox-popup/inbox-popup.module#inboxModalPageModule', name: 'inboxModal', segment: 'inbox-popup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/manage-syndicate2/manage-syndicate2.module#ManageSyndicate2PageModule', name: 'ManageSyndicate2Page', segment: 'manage-syndicate2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-syndicate/my-syndicate.module#MySyndicatePageModule', name: 'MySyndicatePage', segment: 'my-syndicate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/new-syndicate/new-syndicate.module#NewSyndicatePageModule', name: 'NewSyndicatePage', segment: 'new-syndicate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/offline/offline.module#OfflinePageModule', name: 'OfflinePage', segment: 'offline', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/overlaypage/overlaypage.module#OverlaypagePageModule', name: 'OverlaypagePage', segment: 'overlaypage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/offers/offers.module#OffersPageModule', name: 'OffersPage', segment: 'offers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile-update-modal/profile-update-modal.module#ProfileUpdateModalPageModule', name: 'ProfileUpdateModalPage', segment: 'profile-update-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/redeem-games/game-blog/game-blog.module#GameBlogPageModule', name: 'gameBlog', segment: 'game-blog', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/redeem-games/redeem-games.module#RedeemGamesPageModule', name: 'RedeemGamesPage', segment: 'redeem-games', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/refer-friend-page/refer-friend-page.module#ReferFriendPageModule', name: 'referFriend', segment: 'refer-friend-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/send-bonus/send-bonus.module#SendBonusPageModule', name: 'SendBonusPage', segment: 'send-bonus', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/store/store.module#StorePageModule', name: 'StorePage', segment: 'store', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/support1/support1.module#Support1PageModule', name: 'Support1Page', segment: 'support1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/syndicate-created-modal/syndicate-created-modal.module#SyndicateCreatedModalPageModule', name: 'SyndicateCreatedModalPage', segment: 'syndicate-created-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/syndicates/syndicates.module#SyndicatesPageModule', name: 'SyndicatesPage', segment: 'syndicates', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tandc/tandc.module#TandcPageModule', name: 'TandcPage', segment: 'tandc', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/update/update.module#UpdatePageModule', name: 'UpdatePage', segment: 'update', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/view-tickets/view-tickets.module#ViewTicketsPageModule', name: 'ViewTicketsPage', segment: 'view-tickets', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/your-games/your-games.module#YourGamesPageModule', name: 'YourGamesPage', segment: 'your-games', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/your-offers/your-offers.module#YourOffersPageModule', name: 'YourOffersPage', segment: 'your-offers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/your-tickets/your-tickets.module#YourTicketsPageModule', name: 'YourTicketsPage', segment: 'your-tickets', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_21__angular_forms__["b" /* FormsModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_27__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_support_support__["a" /* SupportPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_support1_support1__["a" /* Support1Page */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_22__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_14__services_paymentService__["a" /* paymentService */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */],
            __WEBPACK_IMPORTED_MODULE_23__services_offer_service__["a" /* OfferService */],
            __WEBPACK_IMPORTED_MODULE_16__services_params__["a" /* Params */],
            __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_19__services_db_service__["a" /* DatabaseService */],
            __WEBPACK_IMPORTED_MODULE_8__services_service_home__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_20__services_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_24_ng2_simple_timer__["SimpleTimer"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_25__services_playgame_service__["a" /* PlayGame */],
            __WEBPACK_IMPORTED_MODULE_26__services_branch_io_service__["a" /* branchIo */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_db_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_params__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(http, device, params, network, storage, platform, dbSrv, commonSrv, authSrv, alertCtrl, modalCtrl) {
        var _this = this;
        this.http = http;
        this.device = device;
        this.params = params;
        this.network = network;
        this.storage = storage;
        this.platform = platform;
        this.dbSrv = dbSrv;
        this.commonSrv = commonSrv;
        this.authSrv = authSrv;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.rootPage = 'SplashPage';
        platform.ready().then(function (value) {
            //instabug
            if (_this.platform.is('cordova')) {
                cordova.plugins.instabug.activate({
                    ios: "21c16afbbb7c89d64847aa4ac5d92a86"
                }, "shake", {
                    commentRequired: true,
                    colorTheme: "dark"
                }, function () {
                    console.log("Instabug initialized.");
                }, function (error) {
                    console.log("Instabug could not be initialized - " + error);
                });
            }
            // StatusBar.hide();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["c" /* StatusBar */].backgroundColorByHexString('#3478CE');
            _this.loadCountries();
            branchInit();
            storage.get('firstTimeLoad').then(function (firstTimeLoad) {
                console.log('firstTimeLoad storage', firstTimeLoad);
                if (!firstTimeLoad) {
                    authSrv.updateVisitorLog(device.platform + " " + device.version).subscribe(function (value) {
                        storage.set('firstTimeLoad', value);
                    });
                }
            });
            __WEBPACK_IMPORTED_MODULE_6__services_common_service__["a" /* CommonService */].isOnline = (network.type != "none");
            _this.noNetworkModal = _this.modalCtrl.create('OfflinePage');
            params.events.subscribe('network', function (available) {
                __WEBPACK_IMPORTED_MODULE_6__services_common_service__["a" /* CommonService */].isOnline = available;
                if (available) {
                    _this.noNetworkModal.dismiss();
                }
                else {
                    _this.noNetworkModal.present();
                }
            });
            // save current staus of network
            network.onConnect().subscribe(function () {
                __WEBPACK_IMPORTED_MODULE_6__services_common_service__["a" /* CommonService */].isOnline = true;
            });
            network.onDisconnect().subscribe(function () {
                __WEBPACK_IMPORTED_MODULE_6__services_common_service__["a" /* CommonService */].isOnline = false;
            });
            // network.onchange().subscribe((data)=> {
            //     console.log("network status changed: ", data);
            // });
        });
        platform.resume.subscribe(function () {
            branchInit();
        });
        // Branch initialization
        var branchInit = function () {
            // only on devices
            if (!platform.is('cordova')) {
                return;
            }
            var Branch = window['Branch'];
            Branch.initSession(function (data) {
                console.log(data);
                if (data['+clicked_branch_link']) {
                    var link = "";
                    var getModeuleName = data['~referring_link'];
                    var moduleName = getModeuleName.split('/')[3];
                    var containlink = moduleName;
                    if (containlink.search("vouchers") != -1) {
                        containlink = "vouchers";
                        link = 'your-vouchers';
                    }
                    else if (containlink.search("games") != -1) {
                        containlink = "Games";
                        link = 'play-games';
                    }
                    else if (containlink.search("affiliate") != -1) {
                        containlink = "affiliate";
                        link = 'affiliate';
                    }
                    else if (containlink.search("checkwinnings") != -1) {
                        containlink = "checkwinnings";
                        link = 'checkwinnings';
                    }
                    else if (containlink.search("ps") != -1) {
                        _this.getdata(getModeuleName);
                        containlink = "ps";
                        link = 'ps';
                    }
                    else if (containlink.search("private") != -1) {
                        containlink = "private";
                        link = 'private';
                    }
                    else {
                        containlink = "vouchers";
                    }
                    var keyword = data['KeyWord'];
                    if (keyword == "psInvite") {
                        containlink = "ps";
                        link = 'ps';
                    }
                    // read deep link data on click
                    console.log(data);
                    //set variable if brach ios is call
                    localStorage.setItem('branchIoCall', data);
                    var isLogin = localStorage.getItem('isAppLogin');
                    // if user is not login
                    if (isLogin !== undefined && isLogin !== null && isLogin !== "") {
                        // if user login and already open app then branch io direct redirect page
                        var appFullyLoaded = sessionStorage.getItem('appFullyLoaded');
                        if (appFullyLoaded != undefined && appFullyLoaded !== null && appFullyLoaded !== "" && appFullyLoaded === "true") {
                            localStorage.setItem("windowCall", "true");
                            switch (containlink) {
                                case "vouchers":
                                    localStorage.setItem("voucherCode", data['vouchercode']);
                                    window.location.href = '#/nav/n4/home/nav/n5/tabs/tabs/t0/home/your-vouchers';
                                    break;
                                case "Games":
                                    containlink = "";
                                    localStorage.setItem('gameId', data['gameId']);
                                    window.location.href = '#/nav/n4/' + link + "/" + data['gameId'];
                                    break;
                                case "affiliate":
                                    window.location.href = '#/nav/n4/' + link;
                                    break;
                                case "checkwinnings":
                                    link = 'checkwinnings';
                                    window.location.href = '#/nav/n4/home/nav/n5/tabs/tabs/t0/syndicates/syndicates/tabs/t1/c-h-e-c-k-w-i-n-n-i-n-g-s/check-winnings';
                                    break;
                                case "ps":
                                    window.location.href = '#/nav/n4/signup-invited';
                                    break;
                                case "private":
                                    window.location.href = '#/nav/n4/home/nav/n5/tabs/tabs/t0/home/new-syndicate';
                                    break;
                                default:
                                    break;
                            }
                        }
                        else {
                            // check if app is close and allready login then
                            // go for store page and store page will called the 
                            // specific branch io page
                            localStorage.setItem("windowCall", "true");
                            localStorage.setItem('branchIoClicking', 'true');
                            if (containlink == "vouchers")
                                localStorage.setItem("voucherCode", data['vouchercode']);
                            else if (containlink == "Games")
                                localStorage.setItem('gameId', data['gameId']);
                            else if (containlink == "ps") {
                                _this.getdata(getModeuleName);
                            }
                            localStorage.setItem('linkUrlPointing', link);
                            localStorage.setItem('branchIoCall', JSON.stringify(data));
                            window.localStorage['branchData'] = data;
                        }
                    }
                }
            });
        };
    }
    MyApp.prototype.routeToHome = function () {
        console.log("is cordova", this.platform.is('cordova'));
    };
    MyApp.prototype.loadCountries = function () {
        var _this = this;
        this.commonSrv.getCountry().subscribe(function (data) {
            if (data.response) {
                __WEBPACK_IMPORTED_MODULE_6__services_common_service__["a" /* CommonService */].countries = data.response[0].get_country_code_flag.response.country_code_group;
            }
            // console.log("countries loaded", CommonService.countries);
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* Splashscreen */].hide();
        }, function (err) {
            // show offline
            _this.params.setIsInternetAvailable(false);
        }, function () { });
    };
    MyApp.prototype.getdata = function (data) {
        var params = new URL(data).searchParams;
        var psID = params.get("psId");
        var memberId = params.get("memberId");
        localStorage.setItem("psId", psID);
        // localStorage.setItem("memeberId", data['member_id']);
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */],
        __WEBPACK_IMPORTED_MODULE_8__services_params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__services_db_service__["a" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_6__services_common_service__["a" /* CommonService */],
        __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return paymentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__params__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var paymentService = (function () {
    function paymentService(http, params) {
        this.http = http;
        this.params = params;
        this.customerId = "";
        console.log("PaymentService");
    }
    paymentService.prototype.getPaymentDescription = function () {
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        this.customerId = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session.customer_id;
        var action = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].REDIS_API_URL;
        //let action = "https://nima.lottosocial.com/wp-json/mobi/v2/payment/  "
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "4",
                    "screen_id": "4.10",
                    "action": "get_card_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_customer_paymill_card_details",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session.customer_id,
                    "p_type": "10",
                    "paymill_offer_id": "1019"
                },
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": "7",
                    "screen_id": "7.2",
                    "action": "profile_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_customer_details",
                    "customer_id": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session.customer_id
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    paymentService.prototype.redeemGame = function (visitor_id, productCount, price, productName, productDetail, awardId) {
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        this.customerId = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session.customer_id;
        //let action = "https://nima.lottosocial.com/wp-json/mobi/v2/payment/"
        var action = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].sessionId,
                    "action": "login_mobile_app",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "3",
                    "screen_id": "3.7",
                    "module_name": "reward_payment_process",
                    "customer_id": this.customerId,
                    "product_name": productName,
                    "product_detail": productDetail,
                    "visitor_id": visitor_id,
                    "award_id": awardId,
                    "product_count": productCount,
                    "price_per_product": price
                }
            ]
        };
        console.log(parameter);
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    return paymentService;
}());
paymentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__params__["a" /* Params */]])
], paymentService);

//# sourceMappingURL=paymentService.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayGame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__params__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PlayGame = (function () {
    function PlayGame(http, params, storage, platform, transfer, file) {
        this.http = http;
        this.params = params;
        this.storage = storage;
        this.platform = platform;
        this.transfer = transfer;
        this.file = file;
        this.customerId = "";
    }
    Object.defineProperty(PlayGame, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]]];
        },
        enumerable: true,
        configurable: true
    });
    PlayGame.prototype.getGameInfo = function (GameID, action, page_id, module_names) {
        if (action === void 0) { action = "post"; }
        if (page_id === void 0) { page_id = "3"; }
        if (module_names === void 0) { module_names = "get_game_info"; }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        this.customerId = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id;
        console.log("getModules", __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session);
        var parameter = {
            "request": [
                {
                    "action": "play_game",
                    "page_id": "3",
                    "screen_id": "3.2",
                    "module_name": "get_game_info",
                    "customer_id": this.customerId,
                    "game_id": GameID
                },
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "page_ID": page_id,
                    "screen_id": "3.6",
                    "action": "get_recent_winners",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_game_recent_winners",
                    "customer_id": this.customerId,
                    "game_id": GameID
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log(__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderJson());
        // let url = CommonService.apiUrl + "v2/playgame/";
        var url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var response = this.http.post(url, parameter, opt).map(function (res) { return res.json(); });
        return response;
    };
    //get Badges
    PlayGame.prototype.getGameBadges = function (gameId) {
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        this.customerId = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id;
        console.log("getModules", __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session);
        var parameter = { request: [] };
        parameter.request.push({
            "website": "Lotto Social",
            "website_id": "27",
            "source_site": "mobi.lottosocial.com",
            "module_name": "badges",
            "customer_id": this.customerId,
            "game_id": gameId
        });
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log(__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderJson());
        //let url = CommonService.apiUrl + "v2/getgamebadges/";
        var url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var response = this.http.post(url, parameter, opt).map(function (res) { return res.json(); });
        return response;
    };
    //fetching game booster info
    PlayGame.prototype.getGameBooster = function (customerAward_logId, action, page_id, module_names) {
        if (action === void 0) { action = "post"; }
        if (page_id === void 0) { page_id = "3"; }
        if (module_names === void 0) { module_names = "activate_game_booster"; }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        this.customerId = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id;
        console.log("getModules", __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session);
        var parameter = { request: [] };
        parameter.request.push({
            page_id: page_id,
            screen_id: "3.1",
            action: 'play_game',
            module_name: module_names,
            customer_id: this.customerId,
            customer_award_log_id: customerAward_logId,
        });
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log(__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT());
        //  let url = CommonService.apiUrl + "v2/activatebooster/";
        var url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var response = this.http.post(url, parameter, opt).map(function (res) { return res.json(); });
        return response;
    };
    //Game Thank you page info
    PlayGame.prototype.gameThankyouPage = function (customerAward_logId, gameName) {
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        this.customerId = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id;
        console.log("getModules", __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session);
        var parameter = {
            "request": [
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "page_id": 3,
                    "screen_id": "3.7",
                    "module_name": "get_game_info_thankyou_page",
                    "customer_id": this.customerId,
                    "customer_award_log_id": customerAward_logId
                },
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "customer_id": this.customerId,
                    "page_id": "3",
                    "screen_id": "3.7",
                    "module_name": "get_game_reviews",
                    "product_name": gameName,
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log(__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT());
        //let url = CommonService.apiUrl + "v2/playgamethankyou/";
        var url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var response = this.http.post(url, parameter, opt).map(function (res) { return res.json(); });
        return response;
    };
    PlayGame.prototype.submitTip = function (prod_name, comments, gameLevel) {
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        this.customerId = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id;
        var parameter = {
            "request": [
                {
                    "page_id": "3",
                    "screen_id": "3.7.1",
                    "module_name": "insert_game_review",
                    "customer_id": this.customerId,
                    "product_name": prod_name,
                    "comment_content": comments,
                    "comment_author_ip": "",
                    "comment_agent": "mobile app device details",
                    "game_level": gameLevel
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log(__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT());
        //let url = CommonService.apiUrl + "v2/gamereview/";
        var url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var response = this.http.post(url, parameter, opt).map(function (res) { return res.json(); });
        return response;
    };
    PlayGame.prototype.gameLossResult = function (customer_award_log_id, gameName) {
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        this.customerId = __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].session.customer_id;
        var parameter = {
            "request": [
                {
                    "module_name": "get_loss_game_info_thankyou_page",
                    "customer_id": this.customerId,
                    "customer_award_log_id": customer_award_log_id
                    //  "customer_award_log_id": "010000003D60C19E0E2EBA0E5B1A3C52E49EFDCEBEA10A51C4E1A335"
                },
                // { "customer_award_log_id": "01000000781411BECE6AD987DB75E3CAEA8FD1AD3E9F2E3D7ABC5051", "module_name": "get_loss_game_info_thankyou_page", "customer_id": "1971263" },
                {
                    "session_ID": __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].sessionId,
                    "customer_id": this.customerId,
                    "page_id": "3",
                    "screen_id": "3.7",
                    "module_name": "get_game_reviews",
                    "product_name": gameName,
                }
            ]
        };
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT()
        });
        console.log(__WEBPACK_IMPORTED_MODULE_8__common_service__["a" /* CommonService */].getHeaderForJWT());
        //let url = CommonService.apiUrl + "v2/gamereview/";
        var url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
        var response = this.http.post(url, parameter, opt).map(function (res) { return res.json(); });
        return response;
    };
    return PlayGame;
}());
PlayGame = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_9__params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
], PlayGame);

//# sourceMappingURL=playgame.service.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return branchIo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__params__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var branchIo = (function () {
    function branchIo(http, params) {
        this.http = http;
        this.params = params;
        this.customerId = "";
    }
    //Create branch.io link
    branchIo.prototype.createBranchIOlLinkForPsInvite = function (syndId) {
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].session) {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].isOnline) {
            this.params.setIsInternetAvailable(false);
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
        var action = __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].BRANCH_IO_URL;
        var parameter = {
            "branch_key": __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */].BRANCH_IO_KEY,
            "data": {
                "ps_Id": syndId,
                "KeyWord": "psInvite",
            }
        };
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.set('Content-type', 'application/json');
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: myHeaders
        });
        var response = this.http.post(action, parameter, opt).map(function (response) { return response.json(); });
        return response;
    };
    return branchIo;
}());
branchIo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__params__["a" /* Params */]])
], branchIo);

//# sourceMappingURL=branch.io.service.js.map

/***/ })

},[404]);
//# sourceMappingURL=main.js.map