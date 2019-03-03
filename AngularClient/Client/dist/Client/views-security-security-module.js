(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-security-security-module"],{

/***/ "./src/views/security/security.module.ts":
/*!***********************************************!*\
  !*** ./src/views/security/security.module.ts ***!
  \***********************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/views/security/user/user.component.ts");
/* harmony import */ var _security_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security.router */ "./src/views/security/security.router.ts");





var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_security_router__WEBPACK_IMPORTED_MODULE_4__["SecurityRoute"])
            ],
            providers: [],
            bootstrap: [_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]]
        })
    ], SecurityModule);
    return SecurityModule;
}());



/***/ }),

/***/ "./src/views/security/security.router.ts":
/*!***********************************************!*\
  !*** ./src/views/security/security.router.ts ***!
  \***********************************************/
/*! exports provided: SecurityRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRoute", function() { return SecurityRoute; });
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.component */ "./src/views/security/user/user.component.ts");

var SecurityRoute = [
    { path: 'User', component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"] }
];


/***/ }),

/***/ "./src/views/security/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/views/security/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var UserModel = /** @class */ (function () {
    function UserModel() {
        this.Name = "";
        this.UserName = "";
        this.Password = null;
    }
    return UserModel;
}());
var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.User = new UserModel();
        this.UserList = new Array();
    }
    UserComponent.prototype.Add = function () {
        this.UserList.push(this.User);
        this.User = new UserModel();
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./user.view.html */ "./src/views/security/user/user.view.html")
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/views/security/user/user.view.html":
/*!************************************************!*\
  !*** ./src/views/security/user/user.view.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Name: <input [(ngModel)]=\"User.Name\" />\r\n<br/>\r\nUsername <input [(ngModel)]=\"User.Username\" />\r\n<br/>\r\nPassword: <input [(ngModel)] = \"User.Password\" />\r\n<br/>\r\n<input type=\"button\" (click)=\"Add()\" value=\"Add user\" />\r\n{{User.Username}}\r\n<br/>\r\n<table>\r\n    <thead>\r\n        <tr>\r\n            <th>Name</th>\r\n            <th>Username</th>\r\n            <th>Password</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let user of UserList\">\r\n            <td>{{user.Name}}</td>\r\n            <td>{{user.Username}}</td>\r\n            <td>{{user.Password}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ })

}]);
//# sourceMappingURL=views-security-security-module.js.map