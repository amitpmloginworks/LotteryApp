webpackJsonp([20],{

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_unique_device_id__ = __webpack_require__(800);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_unique_device_id__["a" /* UniqueDeviceID */]]
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniqueDeviceID; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_core__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
 * @name Unique Device ID
 * @description
 * This plugin produces a unique, cross-install, app-specific device id.
 *
 * @usage
 * ```typescript
 * import { UniqueDeviceID } from '@ionic-native/unique-device-id';
 *
 * constructor(private uniqueDeviceID: UniqueDeviceID) { }
 *
 * ...
 *
 * this.uniqueDeviceID.get()
 *   .then((uuid: any) => console.log(uuid))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
var UniqueDeviceID = (function (_super) {
    __extends(UniqueDeviceID, _super);
    function UniqueDeviceID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a unique, cross-install, app-specific device id.
     * @return {Promise<string>} Returns a promise that resolves when something happens
     */
    UniqueDeviceID.prototype.get = function () { return; };
    UniqueDeviceID.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    UniqueDeviceID.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], UniqueDeviceID.prototype, "get", null);
    UniqueDeviceID = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'UniqueDeviceID',
            plugin: 'cordova-plugin-uniquedeviceid',
            pluginRef: 'window.plugins.uniqueDeviceID',
            repo: 'https://github.com/Paldom/UniqueDeviceID',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], UniqueDeviceID);
    return UniqueDeviceID;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_params__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_common_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Rx__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_native__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_unique_device_id__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_app_sound_app_sound__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NewSyndicatePage } from '../new-syndicate/new-syndicate';













var SignupPage = (function () {
    function SignupPage(app, http, file, network, storage, platform, transfer, navCtrl, navParams, appSound, commonSrv, alertCtrl, toastCtrl, popoverCtrl, loadingCtrl, authSrv, params, uniqueDeviceID) {
        this.app = app;
        this.http = http;
        this.file = file;
        this.network = network;
        this.storage = storage;
        this.platform = platform;
        this.transfer = transfer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appSound = appSound;
        this.commonSrv = commonSrv;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authSrv = authSrv;
        this.params = params;
        this.uniqueDeviceID = uniqueDeviceID;
        this.toolTipDiv = false;
        this.showPass = false;
        this.selectedCountry = {
            name: "United Kingdom",
            iso2: "gb",
            dialCode: "44",
            priority: 0,
            areaCodes: null
        };
        this.warningPassword = false;
        this.warningPhone = false;
        // public country_number:string = "";
        // public countries:any[];
        this.signup = {
            first_name: '',
            last_name: '',
            image: "",
            profile_image_url: "",
            email: "",
            free_reg_msn: '',
            free_reg_pwd: '',
            mobile: '',
            country_code: "",
            uuid: ""
        };
        console.log('SignupPage', network);
        this.tabs = navCtrl.parent;
        platform.ready().then(function () {
            console.log('ready');
        });
    }
    SignupPage.prototype.loadCountries = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this.commonSrv.getCountry().subscribe(function (data) {
            loader.dismiss();
            if (data) {
                // this.countries = data.response[0].get_country_code_flag.response.country_code_group;
                // this.selectedCountry = this.countries[0];
                // console.log("countries successful", this.countries);
            }
        }, function (err) {
            loader.dismiss();
            console.log("error", err);
            _this.alertCtrl.create({
                title: 'Error!!!',
                subTitle: 'Internet disabled or server error.',
                buttons: [
                    {
                        text: 'OK',
                        handler: function (data) {
                            _this.platform.exitApp();
                        }
                    }
                ],
                enableBackdropDismiss: false
            });
        }, function () { });
    };
    SignupPage.prototype.selectProfileImage = function () {
        console.log("selectProfileImage");
        this.openGallery();
    };
    SignupPage.prototype.openGallery = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: __WEBPACK_IMPORTED_MODULE_12_ionic_native__["a" /* Camera */].PictureSourceType.PHOTOLIBRARY,
            destinationType: __WEBPACK_IMPORTED_MODULE_12_ionic_native__["a" /* Camera */].DestinationType.FILE_URI,
            quality: 70,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: __WEBPACK_IMPORTED_MODULE_12_ionic_native__["a" /* Camera */].EncodingType.JPEG,
            correctOrientation: true
        };
        __WEBPACK_IMPORTED_MODULE_12_ionic_native__["a" /* Camera */].getPicture(cameraOptions).then(function (fileUri) {
            _this.signup.image = fileUri;
            localStorage.setItem("imageUrl", fileUri);
            //this.uploadImage()
            _this.uploadPhoto(_this.signup.image);
            _this.uniqueDeviceID.get()
                .then(function (uuid) { return _this.signup.uuid = uuid; })
                .catch(function (error) { return console.log(error); });
        }),
            function (err) { return console.log(err); };
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.presentPopover = function (ev) {
        var _this = this;
        console.log('SignupPage::presentPopover	');
        /*
                if (this.countries == null) {
                    if (CommonService.countries) {
                        this.countries = CommonService.countries
                        this.selectedCountry = this.countries[0]
                    }else{
                        this.loadCountries();
                        return;
                    }
                }
        */
        // commented for API being ready
        this.countryPopOver = this.popoverCtrl.create('CountryListPopPage', {
            // countries: this.countries,
            cb: function (data) {
                console.log("on selected country", data);
                _this.selectedCountry = data;
                // this.country_number = data.country_code;
            }
        });
        this.countryPopOver.present({ ev: ev });
    };
    SignupPage.prototype.showPassword = function (input) {
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
    };
    SignupPage.prototype.uploadImage = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        this.authSrv.uploadProfilePic(this.signup.image).subscribe(function (data) {
            loader.dismiss();
            console.log("image upload successful", data);
            _this.signup.profile_image_url = data.response.image_name1;
        }, function (err) {
            loader.dismiss();
            console.log("image upload error", err);
        }, function () { return console.log("image upload complete"); });
    };
    SignupPage.prototype.submitSignup = function (form) {
        var _this = this;
        this.appSound.play('buttonClick');
        localStorage.setItem('isInstall', "firstTimeInstall");
        var img = localStorage.getItem('userimg');
        this.prepareMobile();
        this.signup.country_code = this.selectedCountry.dialCode;
        this.signup.profile_image_url = img;
        console.log("submitSignup", this.signup, form);
        //text and email validation
        if (this.signup.first_name == '' || this.signup.first_name.toLowerCase() == "null") {
            this.warningPhone = true;
            this.warningPhoneMsg = "Please enter your first name.";
            // alert('');
            return;
        }
        else if (!this.validate_name(this.signup.first_name)) {
            this.warningPhone = true;
            this.warningPhoneMsg = "First name should be alphabets.";
            // alert('.');
            return;
        }
        else if (this.signup.first_name.length > 20) {
            this.warningPhone = true;
            this.warningPhoneMsg = "First name should be maximum of 20 characters.";
            // alert('');
            return;
        }
        if (this.signup.last_name == '' || this.signup.last_name.toLowerCase() == "null") {
            this.warningPhone = true;
            this.warningPhoneMsg = "Please enter the surname.";
            return;
        }
        else if (!this.validate_name(this.signup.last_name)) {
            alert('Surname should be alphabets.');
            return;
        }
        else if (this.signup.last_name.length > 20) {
            this.warningPhone = true;
            this.warningPhoneMsg = "Surname should be maximum of 20 characters.";
            return;
        }
        if (this.signup.email == '') {
            this.warningPhone = true;
            this.warningPhoneMsg = 'Please enter the email.';
            return;
        }
        else if (!this.validateEmail(this.signup.email)) {
            this.warningPhone = true;
            this.warningPhoneMsg = 'Please enter Valid email..';
            return;
        }
        this.warningPhone = false;
        //phone validation
        if (!this.signup.mobile) {
            this.warningPhone = true;
            this.warningPhoneMsg = "Please enter your mobile number.";
            return;
        }
        else if (this.signup.mobile != "" && !this.validateNumeric(this.signup.mobile)) {
            this.warningPhone = true;
            this.warningPhoneMsg = "Please enter a valid Mobile Number.";
            return;
        }
        else if (this.signup.mobile.length < 5) {
            this.warningPhone = true;
            this.warningPhoneMsg = "Mobile number too short, please enter a valid number.";
            return;
        }
        else if (this.signup.mobile.length > 12) {
            this.warningPhone = true;
            this.warningPhoneMsg = "Mobile number too long, please enter a valid number.";
            return;
        }
        this.warningPhone = false;
        //password validation
        if (this.signup.free_reg_pwd == '') {
            this.passwordMsg = "Please enter your password";
            this.warningPassword = true;
            return;
        }
        else if (this.signup.free_reg_pwd.length < 6) {
            this.passwordMsg = "Password must contain at least 6 characters..";
            this.warningPassword = true;
            return;
        }
        else if (this.validate_pwd(this.signup.free_reg_pwd) == true) {
            this.passwordMsg = "Password contains invalid characters.";
            this.warningPassword = true;
            return;
        }
        this.warningPassword = false;
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        //console.log("Before", data);
        this.authSrv.addUser(this.signup).subscribe(function (data) {
            loader.dismiss();
            _this.uniqueDeviceID.get()
                .then(function (uuid) { return _this.signup.uuid = uuid; })
                .catch(function (error) { return console.log(error); });
            console.log("user registration successful", data);
            // show register success message and redirect to login
            try {
                data = data.response;
            }
            catch (e) {
                data = undefined;
            }
            console.log("After", data);
            if (data.length && data[0].register && data[0].register.response && data[0].register.response.status == "FAIL") {
                // registration failed
                // this.toastCtrl.create({
                // 	message: 'Registration FAILED!',
                // 	duration: 3000,
                // }).present()
                var alert_1 = _this.alertCtrl.create({
                    title: data[0].register.response.status,
                    subTitle: data[0].register.response.message,
                    buttons: ['Ok']
                });
                alert_1.present();
            }
            else {
                _this.onRegistrationSuccess(data);
            }
        }, function (err) {
            loader.dismiss();
            console.log("user registration error", err);
        }, function () { return console.log("user registration complete"); });
    };
    SignupPage.prototype.onRegistrationSuccess = function (data) {
        var _this = this;
        console.log('onRegistrationSuccess', data);
        // this.submitLogin();
        if (data.length && data[0].register && data[0].register.response && data[0].register.response.message == "both_exists") {
            var alert_2 = this.alertCtrl.create({
                title: 'Cool!',
                subTitle: "You already have an account with us. We're loggin you in..",
                buttons: [
                    {
                        text: 'OK',
                        handler: function () { _this.submitLogin(); }
                    }
                ]
            });
            alert_2.present();
        }
        else if (data.length && data[0].register && data[0].register.response && data[0].register.response.message == 'msn_exists') {
            var alert_3 = this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'An account with this mobile number already exists, enter correct password to login or try with other new msn',
                buttons: [
                    {
                        text: 'OK',
                        handler: function (data) {
                            // this.tabs.select(1)
                        }
                    }
                ]
            });
            alert_3.present();
        }
        else {
            this.getJWTToken(data[0].register.response);
        }
    };
    SignupPage.prototype.prepareMobile = function () {
        var free_reg_msn = this.signup.mobile;
        var msn_len = free_reg_msn.length;
        // var countryData = $('#free_reg_msn').intlTelInput("getSelectedCountryData");/44
        var cc = this.selectedCountry.dialCode.replace('+', '');
        if (free_reg_msn.substr(0, 1) == "0") {
            var p = free_reg_msn.substr(1, msn_len);
            free_reg_msn = cc + p;
        }
        else if (free_reg_msn.substr(0, cc.length) == cc) {
            var p = free_reg_msn.substr(cc.length, msn_len);
            free_reg_msn = cc + p;
        }
        else {
            free_reg_msn = cc + free_reg_msn;
        }
        this.signup.free_reg_msn = free_reg_msn;
    };
    SignupPage.prototype.phoneValidator = function (value) {
        if (value !== '') {
            if (!value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
                return true;
            }
        }
        return false;
    };
    SignupPage.prototype.validate_pwd = function (name_value) {
        var name_value = name_value.toLowerCase();
        var nameRegex = /[^a-zA-Z0-9]/;
        return nameRegex.test(name_value);
    };
    SignupPage.prototype.submitLogin = function () {
        var _this = this;
        console.log("submitLogin", this.signup);
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        this.authSrv.loginUser(this.selectedCountry.dialCode, this.signup.free_reg_msn, this.signup.free_reg_pwd)
            .subscribe(function (data) {
            loader.dismiss();
            // this.showSuccess();
            console.log("user login successful", data);
            try {
                data = data.response[0].login.response;
            }
            catch (e) {
                data = undefined;
            }
            // go to home page
            if (data && data.status != 'FAIL') {
                _this.getJWTToken(data);
            }
        }, function (err) {
            loader.dismiss();
            console.log("user registration error", err);
        }, function () { return console.log("user registration complete"); });
    };
    SignupPage.prototype.getJWTToken = function (data) {
        var _this = this;
        this.storage.set('DF_EMAIL', data.df_customer_details.email);
        this.storage.set('DF_PASSWORD', data.df_customer_details.pword);
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/vid/blue_bg.gif\" style=\"height:100px!important\">",
        });
        loader.present();
        this.authSrv.getJWTToken(data.df_customer_details.email, data.df_customer_details.pword).subscribe(function (successData) {
            loader.dismiss();
            // go to home page
            __WEBPACK_IMPORTED_MODULE_3__services_common_service__["a" /* CommonService */].session = data;
            var datetime = new Date();
            datetime.setHours(datetime.getHours() + 10);
            var ne = _this.storage.get("session_ID");
            _this.storage.set('session_ID', __WEBPACK_IMPORTED_MODULE_3__services_common_service__["a" /* CommonService */].sessionId);
            _this.storage.set('user_session_token', successData.session_token);
            __WEBPACK_IMPORTED_MODULE_3__services_common_service__["a" /* CommonService */].JWT = successData.session_token;
            _this.storage.set('session_token_time', datetime);
            console.log("datetime of token", datetime);
            _this.storage.set('user_session_id', successData.session_id);
            _this.storage.set('session', JSON.stringify(data))
                .then(function (data) { return console.log(data); }, function (error) { return console.log(error); });
            var nav = _this.app.getRootNav();
            nav.setRoot('HomePage');
        }, function (error) {
            loader.dismiss();
            console.log("user login error", error);
            // show offline
            _this.params.setIsInternetAvailable(false);
        }, function () { });
    };
    SignupPage.prototype.goInvited = function (ev) {
        this.appSound.play('buttonClick');
        var nav = this.app.getRootNav();
        nav.setRoot('SignupInvitedPage');
    };
    SignupPage.prototype.goLogin = function (ev) {
        this.appSound.play('buttonClick');
        this.tabs.select(1);
    };
    SignupPage.prototype.uploadPhoto = function (imageFileUri) {
        var _this = this;
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...'
        });
        this.loading.present();
        this.file.resolveLocalFilesystemUrl(imageFileUri)
            .then(function (entry) { return entry.file(function (file) { return _this.readFile(file); }); })
            .catch(function (err) { return console.log(err); });
    };
    SignupPage.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: 'image/jpg' });
            _this.postData(imgBlob, file.name);
        };
        reader.readAsArrayBuffer(file);
    };
    SignupPage.prototype.postData = function (blob, fileName) {
        var _this = this;
        var server = __WEBPACK_IMPORTED_MODULE_3__services_common_service__["a" /* CommonService */].apiUrl +
            __WEBPACK_IMPORTED_MODULE_3__services_common_service__["a" /* CommonService */].version + '/upload/?process=profile';
        var extension = fileName.substr(fileName.lastIndexOf('.') + 1);
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]();
        myHeaders.set('Authorization', 'Oauth oauth_consumer_key = "NDes1FKC0Kkg",' +
            'oauth_token="djKnEJjJ7TYw0VJEsxGEtlfg",' +
            'oauth_signature_method="HMAC-SHA1",' +
            'oauth_timestamp="1490087533",' +
            'oauth_nonce="dWL9pr",' +
            'oauth_version="1.0",' +
            'oauth_signature="mQF41gSF7KIuVqzqcI0nSX1UklE%3D"');
        var options = {
            fileKey: fileName,
            fileName: fileName,
            mimeType: "image/" + extension,
            headers: myHeaders
        };
        console.log("SignupPage:: upload image options:", options);
        this.http.post(server, blob, options)
            .catch(function (err) { return _this.handleError(err); })
            .map(function (response) { return response.json(); })
            .subscribe(function (ok) {
            _this.loading.dismiss();
            console.log("uploadPhoto:");
            console.log(ok);
            localStorage.setItem('userimg', ok.response.image_name);
            //this.navCtrl.push(CreateSyndicatePage, {'image': ok.response.image_url});
        });
    };
    SignupPage.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        this.error = errMsg;
        return __WEBPACK_IMPORTED_MODULE_11_rxjs_Rx__["Observable"].throw(errMsg);
    };
    SignupPage.prototype.validateNumeric = function (strValue) {
        var objRegExp = /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;
        return objRegExp.test(strValue);
    };
    SignupPage.prototype.validate_name = function (name_value) {
        var nameRegex = /^[a-zA-Z]+(([\_\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
        var valid_name = name_value.match(nameRegex);
        return valid_name;
    };
    SignupPage.prototype.validateEmail = function (strValue) {
        var objRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return objRegExp.test(strValue);
    };
    SignupPage.prototype.toolTipWhy = function () {
        if (this.toolTipDiv) {
            this.toolTipDiv = false;
        }
        else {
            this.toolTipDiv = true;
        }
    };
    return SignupPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Tabs */])
], SignupPage.prototype, "tabsRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('animation'),
    __metadata("design:type", Object)
], SignupPage.prototype, "input", void 0);
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\signup\signup.html"*/'<ion-header>\n	<ion-navbar>\n		<p padding-left> </p>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<h4 class="headline">Create Free Account</h4>\n	<ion-avatar item-center icon-left>\n		<div class="lotto-logo">\n\n			<img class="profile-picture" src="{{ signup.image ? signup.image : \'assets/icon/user.svg\' }}" width="72" height="72" alt="Profile"\n			 (click)="selectProfileImage()" />\n\n			<img class="update-icon" width="16" height="16" src="assets/icon/update_arrows.svg" alt="Update" (click)="selectProfileImage()"\n			/>\n\n		</div>\n	</ion-avatar>\n\n\n	<form #signupForm="ngForm" (ngSubmit)="submitSignup(signupForm)">\n		<ion-grid>\n\n			<ion-row>\n				<ion-col col-6>\n					<ion-item>\n						<ion-input type="text" name="first_name" [(ngModel)]="signup.first_name" placeholder="First name" required></ion-input>\n					</ion-item>\n				</ion-col>\n				<ion-col class="last-name" col-6>\n					<ion-item>\n						<ion-input type="text" name="last_name" [(ngModel)]="signup.last_name" placeholder="Last name" required></ion-input>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n\n			<ion-row>\n				<ion-item>\n					<!-- <ion-label>Email address</ion-label> -->\n					<ion-input type="email" name="email" [(ngModel)]="signup.email" placeholder="Email address" required></ion-input>\n				</ion-item>\n			</ion-row>\n			<ion-row>\n				<ion-col col-2>\n					<ion-item *ngIf="selectedCountry" class="remove-inner" (click)="presentPopover($event)">\n						<span item-right ion-button clear icon-right class="{{\'flag-icon flag-icon-\' + selectedCountry.iso2 }}" width="16" height="16"></span>\n						<!-- <span item-right ion-button clear icon-right width="16" height="16" >{{selectedCountry.iso2 | uppercase}}</span> -->\n						<ion-icon item-right name="arrow-down" class="small-icon"></ion-icon>\n					</ion-item>\n				</ion-col>\n				<ion-col col-8 #popoverText>\n					<ion-item>\n						<ion-input type="tel" name="mobile" [(ngModel)]="signup.mobile" placeholder="Mobile number" required></ion-input>\n					</ion-item>\n				</ion-col>\n				<ion-col col-2 #popoverText>\n					<ion-item>\n						<span (click)="toolTipWhy()">Why ?</span>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n			<div></div>\n			<div class="toolTip t1" *ngIf="toolTipDiv">\n				<span class="textData" item-content>We need your mobile number for these manay reasons, please enter this correctly. </span>\n			</div>\n			<ion-row>\n				<ion-col col-10>\n					<ion-item>\n						<ion-input #input type="password" id=\'pwd\' name="password" [(ngModel)]="signup.free_reg_pwd" placeholder="Choose password*"\n						 required minlength="6" [attr.minlength]="6"></ion-input>\n						<button class="btn" type="button"></button>\n					</ion-item>\n				</ion-col>\n				<ion-col col-2>\n					<ion-item>\n						<ion-icon item-right *ngIf="showPass;else passNot" name="ios-eye" (click)="showPassword(input)"></ion-icon>\n						<ng-template #passNot>\n							<ion-icon item-right name="ios-eye-off" (click)="showPassword(input)"></ion-icon>\n						</ng-template>\n\n					</ion-item>\n				</ion-col>\n				<p>* At least 6 characters. No special characters allowed.</p>\n			</ion-row>\n\n		</ion-grid>\n\n		<p *ngIf="warningPhone" class="warning">\n			<ion-icon name="ios-warning-outline"> </ion-icon> {{warningPhoneMsg}}</p>\n		<p *ngIf="warningPassword" class="warning">\n			<ion-icon name="ios-warning-outline"> </ion-icon> {{passwordMsg}}</p>\n		<div padding>\n			<button class="btn btn-join btn-block" type="submit">SIGN UP</button>\n		</div>\n		<!-- <p><a text-center class="center" (click)="goInvited($event)">In case Invited<ion-icon name="ios-arrow-round-forward"></ion-icon></a></p>\n		<p><a text-center class="center" (click)="goLogin($event)">Already a member? Sign in here <ion-icon name="ios-arrow-round-forward"></ion-icon></a></p> -->\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Ashok Kumar\Downloads\LSMobileAppNew-master\LSMobileAppNew-master\src\pages\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_14__providers_app_sound_app_sound__["a" /* AppSoundProvider */],
        __WEBPACK_IMPORTED_MODULE_3__services_common_service__["a" /* CommonService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2__services_params__["a" /* Params */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_unique_device_id__["a" /* UniqueDeviceID */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=20.js.map