webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.backgrounds = [
            'assets/background/background-1.jpg',
            'assets/background/background-2.jpg',
            'assets/background/background-3.jpg',
            'assets/background/background-4.jpg'
        ];
    }
    HomePage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    HomePage.prototype.slideChanged = function () {
        //let currentIndex = this.slides.getActiveIndex();
        //console.log('Current index is', currentIndex);
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]) === "function" && _a || Object)
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\bloodlife\bloodlifeApp\src\pages\home\home.html"*/'<!--\n\n  <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n-->\n\n\n\n<ion-content class="bodyClass transparent-header" hide-header fullscreen no-padding>\n\n  <ion-slides class=" " style="position: fixed" pager="false" autoplay="2000" loop="true" speed="3500" effect="fade">\n\n      <ion-slide class="swiper-no-swiping slide-background" *ngFor="let background of backgrounds" \n\n      [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n\n      </ion-slide>\n\n  </ion-slides>\n\n\n\n  <ion-header>\n\n      <ion-navbar>\n\n          <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <div class="imageWrapperHead">\n\n          <img class="headerImage" src="assets/imgs/stand01.png" alt="header Image">\n\n        </div>\n\n      </ion-navbar>\n\n  </ion-header>\n\n  <div class="ion-card">\n\n      <ion-slides class="ion-card" slides autoplay="3000" loop="true" speed="500" pager (ionSlideDidChange)="slideChanged()">\n\n          <ion-slide class="image-carousel">\n\n              <img class="imageClass" src="assets/imgs/download1.jpg" alt="Product Image">\n\n          </ion-slide>\n\n          <ion-slide class="image-carousel">\n\n              <img class="imageClass" src="assets/imgs/download1.jpg" alt="Product Image">\n\n          </ion-slide>\n\n          <ion-slide class="image-carousel">\n\n              <img class="imageClass" src="assets/imgs/download1.jpg" alt="Product Image">\n\n          </ion-slide>\n\n      </ion-slides>\n\n  </div>\n\n\n\n  <ion-grid>\n\n      <ion-row>\n\n          <ion-col col-6>\n\n              <div class="buttonPanel buttonPanel-left">\n\n                  <button (click)="deposit_click()" class="buttonMenus" ion-button full> <ion-icon class="ion-icon" name="ios-briefcase-outline"></ion-icon></button>\n\n                  <span class="menuTittle"> Deposit </span>\n\n              </div>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n              <div class="buttonPanel buttonPanel-right">\n\n                  <button (click)="withdraw_click()" class="buttonMenus" ion-button full><ion-icon class="ion-icon" name="ios-card"></ion-icon></button>\n\n                  <span class="menuTittle"> Withdrawal </span>\n\n              </div>\n\n          </ion-col>\n\n\n\n          <ion-col col-6>\n\n                  <div class="buttonPanel buttonPanel-left">\n\n                      <button (click)="savings_click()" class="buttonMenus" ion-button full><ion-icon class="ion-icon" name="md-reorder"></ion-icon></button>\n\n                      <span class="menuTittle"> Savings </span>\n\n                  </div>\n\n              </ion-col>\n\n\n\n          <ion-col col-6>\n\n              <div class="buttonPanel buttonPanel-right">\n\n                  <button (click)="loans_click()" class="buttonMenus" ion-button full><ion-icon class="ion-icon" name="ios-albums-outline"></ion-icon></button>\n\n                  <span class="menuTittle"> Loans </span>\n\n              </div>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n                  <div class="buttonPanel buttonPanel-left">\n\n                      <button (click)="transfer_click()" class="buttonMenus" ion-button full><ion-icon class="ion-icon" name="ios-cloud-upload-outline"></ion-icon></button>\n\n                      <span class="menuTittle"> Transfer </span>\n\n                  </div>\n\n              </ion-col>\n\n          <ion-col col-6>\n\n              <div class="buttonPanel buttonPanel-right">\n\n                  <button (click)="reports_click()" class="buttonMenus" ion-button full><ion-icon class="ion-icon" name="md-pulse"></ion-icon></button>\n\n                  <span class="menuTittle"> Reports </span>\n\n              </div>\n\n          </ion-col>\n\n\n\n\n\n      </ion-row>\n\n  </ion-grid>\n\n\n\n  <div class="help-blocked"></div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\bloodlife\bloodlifeApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/** pages */

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]; //HomePage
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\bloodlife\bloodlifeApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\xampp\htdocs\bloodlife\bloodlifeApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(270);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        if (this.platform.is('android') || this.platform.is('ios')) {
            this.loadMap();
        }
    };
    SearchPage.prototype.loadMap = function () {
        var mapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
        var marker = this.map.addMarkerSync({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 43.0741904,
                lng: -89.3809802
            }
        });
        marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
            alert('clicked');
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\xampp\htdocs\bloodlife\bloodlifeApp\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div style="width: 100%;height: 100%;" id="map_canvas" #map_canvas></div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\bloodlife\bloodlifeApp\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.backgroundImage = 'assets/img/background/background-6.jpg';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goToLogin = function () {
        this.slider.slideTo(1);
    };
    LoginPage.prototype.goToSignup = function () {
        this.slider.slideTo(2);
    };
    LoginPage.prototype.slideNext = function () {
        this.innerSlider.slideNext();
    };
    LoginPage.prototype.slidePrevious = function () {
        this.innerSlider.slidePrev();
    };
    LoginPage.prototype.presentLoading = function (message) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            duration: 500
        });
        loading.onDidDismiss(function () {
            var alert = _this.alertCtrl.create({
                title: 'Success',
                subTitle: message,
                buttons: ['Dismiss']
            });
            alert.present();
        });
        loading.present();
    };
    LoginPage.prototype.login = function () {
        this.presentLoading('Thanks for signing up!');
        // this.navCtrl.push(HomePage);
    };
    LoginPage.prototype.signup = function () {
        this.presentLoading('Thanks for signing up!');
        // this.navCtrl.push(HomePage);
    };
    LoginPage.prototype.resetPassword = function () {
        this.presentLoading('An e-mail was sent with your new password.');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], LoginPage.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('innerSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], LoginPage.prototype, "innerSlider", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\bloodlife\bloodlifeApp\src\pages\login\login.html"*/'<ion-content class="transparent-header" [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}">\n  <ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  <ion-slides #slider class="content-slider" direction="vertical">\n    <ion-slide class="swiper-no-swiping">\n      <div padding>\n        <img class="logo" src="assets/img/logo/logo-pr.png" />\n        <ion-slides class="text-slider" autoplay="2000">\n          <ion-slide>\n            <h3> Really nice stuff </h3>\n          </ion-slide>\n          <ion-slide>\n            <img src="assets/img/misc/emoji.png" />\n          </ion-slide>\n          <ion-slide>\n            <h3> Unique experiences given to you for just a couple bucks </h3>\n          </ion-slide>\n          <ion-slide>\n            <h3> Share what you love </h3>\n          </ion-slide>\n        </ion-slides>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button round color="light" class="login-button" (click)="goToLogin()">SIGN IN</button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button round color="light" class="login-button" (click)="goToSignup()">SIGN UP</button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-slide>\n    <ion-slide class="zoom swiper-no-swiping">\n      <ion-slides #innerSlider class="content-slider">\n        <ion-slide class="swiper-no-swiping">\n          <div style="padding: 20% 32px 32px 32px">\n            <ion-item>\n              <ion-label floating>Username</ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Password</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n            <button ion-button block round (click)="login()" color="light" class="login-button">Login</button>\n            <button ion-button clear (click)="slideNext()" color="light" class="forgot-button">FORGOT PASSWORD?</button>\n          </div>\n          <button ion-button clear (click)="goToSignup()" class="slide-button position-bottom">GO TO SIGNUP<ion-icon name="arrow-down"></ion-icon></button>\n        </ion-slide>\n        <ion-slide class="swiper-no-swiping">\n          <div style="padding: 20% 32px 32px 32px">\n            <ion-item>\n              <ion-label floating>E-mail</ion-label>\n              <ion-input type="email"></ion-input>\n            </ion-item>\n            <button ion-button block round (click)="resetPassword()" color="light" class="login-button">RESET PASSWORD</button>\n            <button ion-button clear (click)="slidePrevious()" color="light" class="goback-button"><ion-icon name="arrow-back"></ion-icon> GO BACK</button>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ion-slide>\n    <ion-slide class="zoom swiper-no-swiping">\n      <button ion-button clear (click)="goToLogin()" class="slide-button">\n        GO TO LOGIN\n        <ion-icon name="arrow-up"></ion-icon>\n      </button>\n      <div style="padding: 32px">\n        <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n        <ion-item class="margin-bottom">\n          <ion-label floating>Confirm Password</ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n        <button ion-button block round (click)="signup()" color="light" class="login-button">SIGN UP</button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\bloodlife\bloodlifeApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map