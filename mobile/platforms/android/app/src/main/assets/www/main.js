(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aproducts_aproducts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aproducts/aproducts.component */ "./src/app/aproducts/aproducts.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorpage/errorpage.component */ "./src/app/errorpage/errorpage.component.ts");
/* harmony import */ var _mainp_mainp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainp/mainp.component */ "./src/app/mainp/mainp.component.ts");







var routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: _mainp_mainp_component__WEBPACK_IMPORTED_MODULE_6__["MainpComponent"] },
    { path: 'products', component: _aproducts_aproducts_component__WEBPACK_IMPORTED_MODULE_3__["AproductsComponent"] },
    { path: 'support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_4__["SupportComponent"] },
    { path: '**', component: _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_5__["ErrorpageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    border-radius:0px !important;\r\n    background-color:black !important;\r\n    padding: 40px 10px;\r\n    font-size: 18px;\r\n    overflow: hidden;\r\n    \r\n    transition: 0.4s;\r\n    \r\n}\r\n\r\nnav a{\r\n  color: white !important;\r\n}\r\n\r\nnav a :hover{\r\n  color: red !important;\r\n}\r\n\r\nnav img{\r\n    margin-top: -25px;\r\n    height: auto;\r\n    width: auto;\r\n    transition: 0.4s;\r\n\r\n}\r\n\r\n.navbar-brand{\r\n    margin-top:-20px;\r\n    margin-right:100px;\r\n}\r\n\r\n.navbar .navbar-inverse a\r\n{\r\n    color: white;\r\n\r\n}\r\n\r\nul .navbar a:hover {\r\n    background-color: #ddd;\r\n    color:red;\r\n  }\r\n\r\nul .navbar a.active {\r\n    background-color: dodgerblue;\r\n    color: white;\r\n  }\r\n\r\n.imgtext {\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n    background-color: black;\r\n  }\r\n\r\n.imgtext img{\r\n    opacity: 0.2;\r\n    filter: alpha(opacity=50); /* For IE8 and earlier */\r\n  \r\n  }\r\n\r\n.centered {\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    \r\n  }\r\n\r\n.centered h2{\r\n      font-size:50px;\r\n  }\r\n\r\n.centered p{\r\n      font-size:30px;\r\n  }\r\n\r\n.mc{\r\n    background-color: black;\r\n  }\r\n\r\ndiv{\r\n  overflow: hidden;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQixnQkFBZ0I7O0FBRXBCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztBQUVEO0lBQ0csNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDs7QUFHQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtFQUN6Qjs7QUFDQTtJQUNFLFlBQVk7SUFDWix5QkFBeUIsRUFBRSx3QkFBd0I7O0VBRXJEOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQzs7RUFFbEM7O0FBRUE7TUFDSSxjQUFjO0VBQ2xCOztBQUVBO01BQ0ksY0FBYztFQUNsQjs7QUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFFRjtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDQwcHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBcclxufVxyXG5cclxubmF2IGF7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm5hdiBhIDpob3ZlcntcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm5hdiBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuXHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgICBtYXJnaW4tdG9wOi0yMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItaW52ZXJzZSBhXHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbnVsIC5uYXZiYXIgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6cmVkO1xyXG4gIH1cclxuXHJcbiB1bCAubmF2YmFyIGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmltZ3RleHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5pbWd0ZXh0IGltZ3tcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7IC8qIEZvciBJRTggYW5kIGVhcmxpZXIgKi9cclxuICBcclxuICB9XHJcblxyXG4gIC5jZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuY2VudGVyZWQgaDJ7XHJcbiAgICAgIGZvbnQtc2l6ZTo1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlcmVkIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1je1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuZGl2e1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<navb></navb>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'boat';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navb_navb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navb/navb.component */ "./src/app/navb/navb.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mainp_mainp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainp/mainp.component */ "./src/app/mainp/mainp.component.ts");
/* harmony import */ var _aproducts_aproducts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aproducts/aproducts.component */ "./src/app/aproducts/aproducts.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fireauth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fireauth.service */ "./src/app/fireauth.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./products.service */ "./src/app/products.service.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./errorpage/errorpage.component */ "./src/app/errorpage/errorpage.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navb_navb_component__WEBPACK_IMPORTED_MODULE_6__["NavbComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _mainp_mainp_component__WEBPACK_IMPORTED_MODULE_9__["MainpComponent"],
                _aproducts_aproducts_component__WEBPACK_IMPORTED_MODULE_10__["AproductsComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_17__["SupportComponent"],
                _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_18__["ErrorpageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"]
            ],
            providers: [_fireauth_service__WEBPACK_IMPORTED_MODULE_15__["FireauthService"], _products_service__WEBPACK_IMPORTED_MODULE_16__["ProductsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/aproducts/aproducts.component.css":
/*!***************************************************!*\
  !*** ./src/app/aproducts/aproducts.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    margin: 0 auto;\r\n    width: 200px;\r\n    height: 150px;\r\n}\r\n.card-body{\r\n    text-justify: auto;\r\n}\r\n.center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n}\r\n.card-header img{\r\n    border-radius: 5px;\r\n}\r\n.text-center{\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n.card{\r\n    padding :20px;\r\n    border: 1px solid silver;\r\n    box-shadow: 5px 8px 10px silver;\r\n    border-radius: 15px;\r\n\r\n}\r\n.btn{\r\n    background-color:#e60000;\r\n    border-color:#e60000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXByb2R1Y3RzL2Fwcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLG1CQUFtQjs7QUFFdkI7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9hcHJvZHVjdHMvYXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICAgIHRleHQtanVzdGlmeTogYXV0bztcclxufVxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBwYWRkaW5nIDoyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDhweCAxMHB4IHNpbHZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG59XHJcblxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTYwMDAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiNlNjAwMDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/aproducts/aproducts.component.html":
/*!****************************************************!*\
  !*** ./src/app/aproducts/aproducts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"margin-top:2%;\">\n    <div class=\"alert alert-primary alert-dismissible fade show\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        <strong>Welcome!!!</strong> Browsee and Enroll For Latest Courses trending in market.\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let product of productArray\">\n            <div class=\"card\">\n                <div class=\"card-header bg-light\">\n                    <img src={{product.image}} class=\"card-img-top center\">\n                </div>    \n                <div class=\"card-body\">\n                    <h3 class=\"text-center text-primary\" style=\"color:#4d4d4d;\">{{product.pname | uppercase}}</h3>\n                    <p class=\"card-text\" style=\"text-align:center;\">{{product.desc}}</p>\n                    <a type=\"button\" class=\"btn btn-info btn-block\">Buy Now</a>\n                </div>\n                <div class=\"card-footer bg-light\" style=\"text-align: center;\">\n                    <h5 class=\"text-center\">Cost: {{product.price | currency:'INR':true}}/- </h5></div>\n            </div>\n            <br><hr><br>\n        </div>\n        \n    </div>\n    \n    \n    </div>"

/***/ }),

/***/ "./src/app/aproducts/aproducts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/aproducts/aproducts.component.ts ***!
  \**************************************************/
/*! exports provided: AproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AproductsComponent", function() { return AproductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fireauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fireauth.service */ "./src/app/fireauth.service.ts");





var AproductsComponent = /** @class */ (function () {
    function AproductsComponent(productService, router, auth) {
        this.productService = productService;
        this.router = router;
        this.auth = auth;
        this.message = '';
        this.productArray = [];
    }
    AproductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (list) {
            _this.productArray = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
            console.log(_this.productArray);
        });
    };
    AproductsComponent.prototype.onEnroll = function (product) {
        this.router.navigate(['/payment', product.$key]);
    };
    AproductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aproducts',
            template: __webpack_require__(/*! ./aproducts.component.html */ "./src/app/aproducts/aproducts.component.html"),
            styles: [__webpack_require__(/*! ./aproducts.component.css */ "./src/app/aproducts/aproducts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _fireauth_service__WEBPACK_IMPORTED_MODULE_4__["FireauthService"]])
    ], AproductsComponent);
    return AproductsComponent;
}());



/***/ }),

/***/ "./src/app/errorpage/errorpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/errorpage/errorpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycGFnZS9lcnJvcnBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/errorpage/errorpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/errorpage/errorpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"text-align: center;padding: 100px;\">\n  <h1 style=\"font-size:150px; font-family: 'Courier New', Courier, monospace;\">Error 404</h1>\n  <h2  style=\"font-family:'Lato', sans-serif;\">Page Not Found</h2>\n  <h4>The page you are trying to find is not available,please check the url.<br>If you are the owner please contact your system administrator</h4>\n</div>"

/***/ }),

/***/ "./src/app/errorpage/errorpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/errorpage/errorpage.component.ts ***!
  \**************************************************/
/*! exports provided: ErrorpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpageComponent", function() { return ErrorpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorpageComponent = /** @class */ (function () {
    function ErrorpageComponent() {
    }
    ErrorpageComponent.prototype.ngOnInit = function () {
    };
    ErrorpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-errorpage',
            template: __webpack_require__(/*! ./errorpage.component.html */ "./src/app/errorpage/errorpage.component.html"),
            styles: [__webpack_require__(/*! ./errorpage.component.css */ "./src/app/errorpage/errorpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorpageComponent);
    return ErrorpageComponent;
}());



/***/ }),

/***/ "./src/app/fireauth.service.ts":
/*!*************************************!*\
  !*** ./src/app/fireauth.service.ts ***!
  \*************************************/
/*! exports provided: FireauthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireauthService", function() { return FireauthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FireauthService = /** @class */ (function () {
    function FireauthService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    FireauthService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    FireauthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            });
        });
    };
    FireauthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    FireauthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FireauthService);
    return FireauthService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid footer\" style=\"background-color:#191919;padding:50px 80px;\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"row\" style=\"border-bottom-style: solid;border-bottom-color:grey;border-bottom-width: 1px;padding-bottom: 20px;\">\n        <div class=\"col-md-2\" style=\"border-right-color:white;border-right-style: solid;border-right-width: 1px;padding-right:150px;\">\n          <img src=\"http://www.boat-lifestyle.com/images/logo.png\" width=\"80px\" height=\"63px\">\n        </div>\n        <div class=\"col-md-6\" style=\"padding-left:40px;color:#8c8c8c;padding-right: -25px;font-family: 'Roboto', sans-serif;\">\n          <p>boAt is a lifestyle brand that deals in fashionable consumer electronics like- earphones, headphones, speakers,travel charger & premium rugged cables.</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\" style=\"color:#8c8c8c;padding-top:20px;font-family: 'Roboto', sans-serif;\">\n          <h5><b>Imagine Marketing Private Limited</b></h5>\n          <p>\n              C-255, 2nd floor, Guru Gobind Singh Industrial Estate, <br>\n              Next to Jay coach, Off W.E.Highway, Goregaon (E), Mumbai - 400 063. India\n              <br><br>\n              <b>Timing :</b> Monday to Saturday 12:00pm to 6:00pm\n              <br><br>\n              <b>Phone:</b> +912249461882 <br>\n              <b>Email:</b> info@imaginemarketingindia.com\n          </p>\n        </div>\n        <div class=\"col-md-2\" style=\"color:#8c8c8c;padding-top:20px;font-family: 'Roboto', sans-serif;\">\n            <p><b>Pakushve Marketing, LLC</b></p>\n            <p>\n            191 Quaker Farm Road, Mystic, \n            Connecticut 06355 United States\n          </p>\n        </div>\n      </div>\n    </div>\n    <div row=\"col-md-4\" style=\"padding-left:20px;text-align:center;\">\n      <a href=\"#\" style=\"padding:20px;\"><img src=\"https://image.flaticon.com/icons/svg/179/179319.svg\" height=\"40px\" width=\"40px\"></a>\n      <a href=\"#\" style=\"padding:20px;\"><img src=\"https://themuseum.ca/wp-content/uploads/2018/05/580b57fcd9996e24bc43c53e-e1527261120714.png\" height=\"40px\" wifth=\"40px\"></a>\n      <a href=\"#\" style=\"padding:20px;\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png\" height=\"40px\" wifth=\"40px\"></a>\n    </div>\n    </div>\n    <hr>\n    <div>\n      <p style=\"text-align:center;font-size: 18px;color:grey;font-family: 'Courier New', Courier, monospace;\">Created and Developed by Saurabh Rane and Bhavik Sanghvi</p>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/mainp/mainp.component.css":
/*!*******************************************!*\
  !*** ./src/app/mainp/mainp.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgtext {\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n    background-color: black;\r\n  }\r\n  .imgtext img{\r\n    opacity: 0.3;\r\n    filter: alpha(opacity=50); /* For IE8 and earlier */\r\n  \r\n  }\r\n  .carousel-inner{\r\n      text-align: center;\r\n  }\r\n  .centered {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    \r\n  }\r\n  .centered h2{\r\n      font-size:50px;\r\n  }\r\n  .centered p{\r\n      font-size:30px;\r\n  }\r\n  #wlcm{\r\n    padding-left: 35px;\r\n    padding-right: 35px;\r\n    padding-top: 130px;\r\n    padding-bottom: 25px;\r\n}\r\n  #essen{\r\n  background: rgb(2,0,36);\r\n  height: 50px;\r\nbackground: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(250,11,11,1) 100%);\r\n}\r\n  .mc{\r\n  background-color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnAvbWFpbnAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QixFQUFFLHdCQUF3Qjs7RUFFckQ7RUFFQTtNQUNJLGtCQUFrQjtFQUN0QjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQzs7RUFFbEM7RUFFQTtNQUNJLGNBQWM7RUFDbEI7RUFFQTtNQUNJLGNBQWM7RUFDbEI7RUFFRjtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QjtFQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZCw0RUFBNEU7QUFDNUU7RUFFQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL21haW5wL21haW5wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ndGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLmltZ3RleHQgaW1ne1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTsgLyogRm9yIElFOCBhbmQgZWFybGllciAqL1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmNhcm91c2VsLWlubmVye1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmNlbnRlcmVkIGgye1xyXG4gICAgICBmb250LXNpemU6NTBweDtcclxuICB9XHJcblxyXG4gIC5jZW50ZXJlZCBwe1xyXG4gICAgICBmb250LXNpemU6MzBweDtcclxuICB9XHJcblxyXG4jd2xjbXtcclxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuI2Vzc2Vue1xyXG4gIGJhY2tncm91bmQ6IHJnYigyLDAsMzYpO1xyXG4gIGhlaWdodDogNTBweDtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDI1MCwxMSwxMSwxKSAxMDAlKTtcclxufVxyXG5cclxuLm1je1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/mainp/mainp.component.html":
/*!********************************************!*\
  !*** ./src/app/mainp/mainp.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow:hidden;\">\n<div class=\"container-fluid\" style=\"padding:0px;\">\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n      <div class=\"item imgtext active\">\n        <img  src=\"../../assets/1st.jpeg\" style=\"width:100%;\">\n        <div class=\"centered\" style=\"font-family: 'Permanent Marker', cursive;\" >\n            <p  style=\"font-size: 70px;\">PLUG INTO NIRVANA</p>\n            <p style=\"font-family: 'Roboto' ;font-size:20px;\">Plug into Moments. Plug into Impulse. Plug into Memories. Plug into Adventure. Plug into the better life.</p>\n        </div>\n      </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/2nd.jpg\" style=\"width:100%;\">\n      </div>\n    \n      <div class=\"item\">\n        <img src=\"../../assets/3.jpg\" style=\"width:100%;\">\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n<div>\n  <div class=\"row container-fluid\" style=\"text-align: center;\">\n    <div class=\"col-md-8 col-sm-6\" id=\"wlcm\" style=\"text-align :center;\">\n        <h2 style=\"font-family: 'Staatliches', cursive;font-size:50px\">WELCOME TO BOAT LIFESTYLE</h2>\n        <p style=\"font-family: 'Roboto', sans-serif;font-size:18px\">boAt is a lifestyle brand that deals in fashionable consumer electronics like- earphones, headphones, speakers,travel charger & premium rugged cables. Our products blend into your daily lilfestyle, almost to the point of being a fashion accessory and a perfect fit to your ambient surroundings.\n        </p>\n    </div>\n    <div class=\"col-md-4 col-sm-6 img-responsive\" id=\"imgbr\" style=\"text-align :center !important;\">\n        <img src=\"https://cdn-images-1.medium.com/max/1600/1*frxO504_y9AeAu_20dmj9w.gif\" height=\"450px\" width=\"auto\">\n     </div>\n  </div>\n\n</div>\n  <div class=\"container-fluid mc\" style=\"margin-top:30px;\">\n    <div class=\"row\" style=\"display: inline\">\n      <div class=\"col-md-2\"style=\"text-align:center;margin-top:15px;\">\n        <img src=\"../../assets/play-button.png\" alt=\"play\">\n      </div>\n      <div class=\"col-md-4\" style=\"text-align:center;color:white;font-family: 'Bree Serif', serif;\">\n      <h2>Music</h2>\n      <p>Your music Wherever you are\n          Bluetooth headphones & speakers.</p>\n      </div>\n      <div class=\"col-md-2\"style=\"text-align:center;margin-top:15px;\">\n          <img src=\"../../assets/business-affiliate-network.png\" alt=\"connect\">\n        </div>\n        <div class=\"col-md-4\" style=\"text-align:center;color:white;font-family: 'Bree Serif', serif;\">\n        <h2>Connect</h2>\n        <p>Car & Wall Chargers\n            Indestructible Lightning Cables.</p>\n        </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/mainp/mainp.component.ts":
/*!******************************************!*\
  !*** ./src/app/mainp/mainp.component.ts ***!
  \******************************************/
/*! exports provided: MainpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpComponent", function() { return MainpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainpComponent = /** @class */ (function () {
    function MainpComponent() {
    }
    MainpComponent.prototype.ngOnInit = function () {
    };
    MainpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainp',
            template: __webpack_require__(/*! ./mainp.component.html */ "./src/app/mainp/mainp.component.html"),
            styles: [__webpack_require__(/*! ./mainp.component.css */ "./src/app/mainp/mainp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainpComponent);
    return MainpComponent;
}());



/***/ }),

/***/ "./src/app/navb/navb.component.css":
/*!*****************************************!*\
  !*** ./src/app/navb/navb.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    border-radius:0px !important;\r\n    background-color:black !important;\r\n    padding: 20px 10px;\r\n    font-size: 18px;\r\n    transition: 0.4s;\r\n    margin-bottom: 0px !important;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    display: block;\r\n    top: 0;\r\n\r\n}\r\n\r\n\r\n\r\n.navbar-right a{\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.navbar-right a:hover{\r\n  color: red;\r\n}\r\n\r\n\r\n\r\nnav img{\r\n    margin-top: -12px;\r\n    height: auto;\r\n    width: 80%;;\r\n    transition: 0.4s;\r\n}\r\n\r\n\r\n\r\n.navbar-brand{\r\n    margin-top:-20px;\r\n    margin-right:100px;\r\n}\r\n\r\n\r\n\r\n.navbar .navbar-inverse a\r\n{\r\n    color: white;\r\n\r\n}\r\n\r\n\r\n\r\nul .navbar a:hover {\r\n    background-color: #ddd;\r\n    color:red;\r\n  }\r\n\r\n\r\n\r\n.active a{\r\n  color:rgb(146, 0, 0);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2Yi9uYXZiLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxNQUFNOztBQUVWOzs7O0FBSUE7RUFDRSxZQUFZO0FBQ2Q7Ozs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOzs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7O0FBRUE7O0lBRUksWUFBWTs7QUFFaEI7Ozs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7Ozs7QUFFRjtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL25hdmIvbmF2Yi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRvcDogMDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLm5hdmJhci1yaWdodCBhe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdmJhci1yaWdodCBhOmhvdmVye1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG5uYXYgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogODAlOztcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgICBtYXJnaW4tdG9wOi0yMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItaW52ZXJzZSBhXHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbnVsIC5uYXZiYXIgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6cmVkO1xyXG4gIH1cclxuXHJcbi5hY3RpdmUgYXtcclxuICBjb2xvcjpyZ2IoMTQ2LCAwLCAwKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navb/navb.component.html":
/*!******************************************!*\
  !*** ./src/app/navb/navb.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-inverse navbar-expand-sm\" id=\"navb\">\n    <div class=\"container-fluid\" style=\"padding-left:30px;\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" id=\"nb\" routerLink=\"/main\"><img id=\"brand\" src=\"http://www.boat-lifestyle.com/images/logo.png\" ></a>\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span> \n          </button>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\" style=\"font-family: 'Lato', sans-serif;\">\n        <li><a routerLink=\"/products\" routerLinkActive=\"active\">AUDIO PRODUCTS</a></li>\n        <li><a routerLink=\"/support\" routerLinkActive=\"active\">SUPPORT</a></li>\n      </ul>\n    </div>\n    </div>\n    <script>\n        window.onscroll = function() {scrollFunction()};\n      \n      function scrollFunction() {\n        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {\n          document.getElementById(\"navb\").style.padding = \"10px 5px\";\n          document.getElementById(\"navb\").style.fontSize = \"15px\";\n          document.getElementById(\"brand\").style.height = \"63px\";\n          document.getElementById(\"brand\").style.width = \"80px\";\n          document.getElementById(\"brand\").style.marginTop=\"0px\";\n          \n          \n        } else {\n          document.getElementById(\"navb\").style.padding = \"30px 5px\";\n          document.getElementById(\"navb\").style.fontSize = \"18px\";\n          document.getElementById(\"brand\").style.height = \"100px\";\n          document.getElementById(\"brand\").style.width = \"126px\";\n          document.getElementById(\"brand\").style.marginTop=\"-25px\";\n          \n          \n          \n        }\n      }\n      </script>\n\n\n\n\n\n</nav>\n"

/***/ }),

/***/ "./src/app/navb/navb.component.ts":
/*!****************************************!*\
  !*** ./src/app/navb/navb.component.ts ***!
  \****************************************/
/*! exports provided: NavbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbComponent", function() { return NavbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbComponent = /** @class */ (function () {
    function NavbComponent() {
    }
    NavbComponent.prototype.ngOnInit = function () {
    };
    NavbComponent.prototype.scrollFunction = function () {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navb").style.padding = "10px 5px";
            document.getElementById("navb").style.fontSize = "15px";
            document.getElementById("brand").style.height = "63px";
            document.getElementById("brand").style.width = "80px";
            document.getElementById("brand").style.marginTop = "0px";
        }
        else {
            document.getElementById("navb").style.padding = "30px 5px";
            document.getElementById("navb").style.fontSize = "18px";
            document.getElementById("brand").style.height = "100px";
            document.getElementById("brand").style.width = "126px";
            document.getElementById("brand").style.marginTop = "-25px";
        }
    };
    NavbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navb',
            template: __webpack_require__(/*! ./navb.component.html */ "./src/app/navb/navb.component.html"),
            styles: [__webpack_require__(/*! ./navb.component.css */ "./src/app/navb/navb.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbComponent);
    return NavbComponent;
}());



/***/ }),

/***/ "./src/app/products.service.ts":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);




var ProductsService = /** @class */ (function () {
    function ProductsService(firebase) {
        this.firebase = firebase;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            pname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ProductsService.prototype.getProducts = function () {
        this.productList = this.firebase.list('products');
        return this.productList.snapshotChanges();
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/support/support.component.css":
/*!***********************************************!*\
  !*** ./src/app/support/support.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".supportbanner{\r\n    \r\n    background-color: black;\r\n}\r\n\r\n.imgtext {\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n    \r\n  }\r\n\r\n.centered {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    \r\n  }\r\n\r\n.centered h2{\r\n      font-size : 5vw;;\r\n     \r\n    \r\n    }\r\n\r\n.centered p{\r\n      font-size :2vw;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZOztFQUVkOztBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQzs7RUFFbEM7O0FBRUE7TUFDSSxlQUFlOzs7SUFHakI7O0FBRUY7TUFDSSxjQUFjO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VwcG9ydGJhbm5lcntcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5pbWd0ZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gIH1cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuY2VudGVyZWQgaDJ7XHJcbiAgICAgIGZvbnQtc2l6ZSA6IDV2dzs7XHJcbiAgICAgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgLmNlbnRlcmVkIHB7XHJcbiAgICAgIGZvbnQtc2l6ZSA6MnZ3O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item imgtext active\">\n    <img  src=\"../../assets/pexels-photo-1624895.jpeg\" style=\"width:100%;\">\n    <div class=\"centered\" style=\"font-family: 'Permanent Marker', cursive;\" >\n        <h2>bOAt Support</h2>\n        <p style=\"font-family: 'Roboto' ;\">We always make sure that you keep listening to your favourite jam and never miss your music</p>\n    </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\" style=\"padding:80px;\">\n    <div class=\"col-md-6\" style=\"text-align:justify;\">\n      <img src=\"https://image.flaticon.com/icons/svg/685/685822.svg\" width=\"200px\" height=\"200px;\">\n    </div>\n    <div class=\"col-md-6\" style=\"text-align:justify;\">\n      <h3>Find us at:</h3><br>\n      <p style=\"font-size:18px;font-family: 'Lato', sans-serif;\"><strong>Sardar Patel Institute of Technology</strong><br>Bharatiya Vidya Bhavans Sardar Patel Institute of Technology Munshi Nagar,<br> Andheri (West), Mumbai 400 058\n        <br>\n        (91)-(022)-26707440, 26287250</p>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.css */ "./src/app/support/support.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBA-GBmX7bZjABFGZyN7tXv2cBd0zPMYWo",
        authDomain: "boat-1130.firebaseapp.com",
        databaseURL: "https://boat-1130.firebaseio.com",
        projectId: "boat-1130",
        storageBucket: "boat-1130.appspot.com",
        messagingSenderId: "129539653476"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\webproj\boat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map