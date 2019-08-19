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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\r\n</app-header>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TodoList';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _todo_my_todo_list_my_todo_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./todo/my-todo-list/my-todo-list.component */ "./src/app/todo/my-todo-list/my-todo-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"]
    },
    {
        path: 'home',
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
        component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_8__["TodoComponent"]
    },
    {
        path: 'todos',
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
        component: _todo_my_todo_list_my_todo_list_component__WEBPACK_IMPORTED_MODULE_13__["MyTodoListComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_8__["TodoComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _todo_my_todo_list_my_todo_list_component__WEBPACK_IMPORTED_MODULE_13__["MyTodoListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase.service */ "./src/app/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        console.log('in Guard');
        return this.authService.isLoggedIn().then(function (isLoggedIn) {
            if (isLoggedIn) {
                return true;
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.card {\r\n  margin: 50px 20%;\r\n}\r\n\r\ninput.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n\r\n.error-text {\r\n  color: red !important;\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .card {\r\n    margin: 50px 10%;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .card {\r\n    margin: 50px auto;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header text-center\">\r\n        <h5>Log In</h5>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <br>\r\n        <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email\"      #email=\"ngModel\" required email ngModel>\r\n            <span class=\"help-block text-muted error-text\" *ngIf=\"!email.valid && email.touched\">\r\n              Enter a valid email id</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\"                 placeholder=\"Password\" #password=\"ngModel\" minlength=\"6\"\r\n              required ngModel>\r\n            <span class=\"help-block text-muted error-text\" *ngIf=\"!password.valid && password.touched\">\r\n              Password should be of minimum 6 characters</span>\r\n          </div>\r\n          <div ngClass=\"{{ status }}\" style=\"padding: 0px\" *ngIf=\"f.pristine\">{{ message }}</div>\r\n          <button class=\"btn btn-primary btn-block\" [disabled]=\"f.invalid\" type=\"submit\">\r\n            {{ loginButton }}\r\n          </button>\r\n        </form>\r\n        <div class=\"text-center\">\r\n          <a routerLink=\"/signup\">Need an Account? Register here</a>\r\n          <p class=\"mt-5 mb-3 text-muted text-center\">\r\n            &copy; 2018-2019</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/firebase.service */ "./src/app/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.status = '';
        this.message = '';
        this.loginButton = 'Log In';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSignin = function (form) {
        var _this = this;
        this.loginButton = 'Logging In...';
        try {
            this.authService.signinUser(form.value.email, form.value.password).then(function (res) {
                form.reset();
                _this.status = res.status;
                _this.message = res.msg;
                _this.router.navigate(['home']);
            });
        }
        catch (err) {
            console.log('Already Logged In', err);
            this.router.navigate(['home']);
        }
        this.loginButton = 'Log In';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.card {\r\n  margin: 50px 20%;\r\n}\r\n\r\ninput.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n\r\n.error-text {\r\n  color: red !important;\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .card {\r\n    margin: 50px 10%;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .card {\r\n    margin: 50px auto;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header text-center\">\r\n        <h5>New user? Sign Up</h5>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <br>\r\n        <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"firstName\">First Name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" id=\"firstName\" placeholder=\"First Name\"\r\n                  #firstName=\"ngModel\" required ngModel>\r\n                <span class=\"help-block text-muted error-text\" *ngIf=\"!firstName.valid && firstName.touched\">\r\n                  First Name can't be blank</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"lastName\">Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" id=\"lastName\" placeholder=\"Last Name\" #lastName=\"ngModel\"\r\n                  required ngModel>\r\n                <span class=\"help-block text-muted error-text\" *ngIf=\"!lastName.valid && lastName.touched\">\r\n                  Last Name can't be blank</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Username\" #username=\"ngModel\"\r\n              required ngModel />\r\n            <span class=\"help-block text-muted error-text\" *ngIf=\"!username.valid && username.touched\">\r\n              Username can't be blank</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email\" #email=\"ngModel\"\r\n              required email ngModel>\r\n            <span class=\"help-block text-muted error-text\" *ngIf=\"!email.valid && email.touched\">\r\n              Please enter a valid Email ID</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Password\" #password=\"ngModel\"\r\n              minlength=\"6\" required ngModel>\r\n            <span class=\"help-block text-muted error-text\" *ngIf=\"!password.valid && password.touched\">\r\n              Password should be of minimum 6 characters</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"confirmPassword\">Confirm Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" id=\"confirmPassword\" placeholder=\"Confirm Password\"\r\n              #confirmPassword=\"ngModel\" minlength=\"6\" required ngModel>\r\n            <span class=\"help-block text-muted error-text\" *ngIf=\"!confirmPassword.valid && confirmPassword.touched\">\r\n              Password should be of minimum 6 characters</span>\r\n            <span class=\"help-block text-muted error-text\" *ngIf=\"confirmPassword.value !== password.value && confirmPassword.touched\">\r\n              Passwords do not match</span>\r\n          </div>\r\n          <div ngClass=\"{{ status }}\" style=\"padding: 0px\" *ngIf=\"f.pristine\">{{ message }}</div>\r\n          <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"f.invalid\">{{ registerButton }}\r\n          </button>\r\n        </form>\r\n        <div class=\"text-center\">\r\n          <a routerLink=\"/login\">Already have an Account? Log In</a>\r\n          <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2018-2019</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/firebase.service */ "./src/app/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.registerButton = 'Register';
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSignup = function (form) {
        var _this = this;
        if (form.value.password !== form.value.confirmPassword) {
            return;
        }
        try {
            this.user = {
                name: {
                    firstName: form.value.firstName,
                    lastName: form.value.lastName
                },
                username: form.value.username,
                email: form.value.email,
                password: form.value.password
            };
            this.registerButton = 'Registering...';
            this.authService
                .signupUser(this.user)
                .then(function (res) {
                _this.status = 'alert alert-success';
                _this.message = 'User account created successfully';
                form.reset();
                _this.registerButton = 'Register';
                _this.router.navigate(['/login']);
            })
                .catch(function (err) {
                console.log(err);
                _this.status = 'alert alert-warning';
                _this.message = err.message;
                form.reset();
                _this.registerButton = 'Register';
            });
        }
        catch (err) {
            console.log(err);
            this.status = 'alert alert-danger';
            this.message = 'Some error occurred.';
            this.registerButton = 'Register';
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/firebase.service.ts":
/*!*************************************!*\
  !*** ./src/app/firebase.service.ts ***!
  \*************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
        this.token = null;
        this.authState = false;
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebase);
    }
    FirebaseService.prototype.signupUser = function (user) {
        var _this = this;
        return firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(function (res) { return _this.addUserData(user); });
    };
    FirebaseService.prototype.addUserData = function (user) {
        var uid = firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.uid;
        return firebase__WEBPACK_IMPORTED_MODULE_1__["database"]()
            .ref('users')
            .child(uid)
            .set(user);
    };
    FirebaseService.prototype.signinUser = function (email, password) {
        var _this = this;
        if (firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser !== null) {
            return;
        }
        return firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]()
            .signInWithEmailAndPassword(email, password)
            .then(function (res) {
            return firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken();
        })
            .then(function (token) {
            _this.token = token;
            console.log(_this.token);
            console.log('reached 2nd then');
            return {
                status: 'alert alert-success',
                msg: 'User log in successful'
            };
        })
            .catch(function (err) {
            console.log('reached catch ');
            return {
                status: 'alert alert-warning',
                msg: err.message
            };
        });
    };
    FirebaseService.prototype.getToken = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                user.getIdToken().then(function (token) { return (_this.token = token); });
            }
            else {
                _this.token = null;
            }
        });
    };
    FirebaseService.prototype.logoutUser = function () {
        this.token = null;
        this.authState = false;
        return firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
    };
    FirebaseService.prototype.isLoggedIn = function () {
        var _this = this;
        console.log('isloggedin');
        var promise = new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    _this.authState = true;
                    resolve(true);
                }
                else {
                    _this.authState = false;
                    resolve(false);
                }
            });
        });
        return promise;
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: #e3f2fd;\">\r\n  <!-- Navbar content -->\r\n  <a class=\"navbar-brand\" href=\"#\">TODO App</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n    <div class=\"navbar-nav\">\r\n      <!-- <a class=\"nav-item nav-link\" routerLink=\"/home\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a> -->\r\n      <!-- <a class=\"nav-item nav-link\" \r\n        href=\"\" \r\n        routerLinkActive=\"active\">How-To-Use</a>\r\n      <a class=\"nav-item nav-link\"\r\n        href=\"\" \r\n        routerLinkActive=\"active\">About Us</a> -->\r\n      <!-- <a class=\"nav-item nav-link\" href=\"#\">Features</a>\r\n      <a class=\"nav-item nav-link\" href=\"#\">Pricing</a> -->\r\n    </div>\r\n    <div class=\"navbar-nav\" *ngIf=\"!this.authService.authState\">\r\n      <a class=\"nav-item nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n    </div>\r\n    <div class=\"navbar-nav\" *ngIf=\"!this.authService.authState\">\r\n      <a class=\"nav-item nav-link\" routerLink=\"/signup\" routerLinkActive=\"active\">Register</a>\r\n    </div>\r\n    <div class=\"navbar-nav ml-auto\" *ngIf=\"this.authService.authState\">\r\n      <a class=\"nav-item nav-link\" routerLink=\"/todos\">My todos</a>\r\n      <a class=\"nav-item nav-link\" (click)=\"onLogoutClick()\">Logout</a>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase.service */ "./src/app/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'Quick Vehicle Facilitation System';
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.authService.logoutUser().then(function (val) {
            console.log('User Logged out');
            _this.router.navigate(['login']);
        });
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn().then(function (isLoggedIn) {
            if (isLoggedIn) {
                return true;
            }
            else {
                return false;
            }
        });
        // if (firebase.auth().currentUser !== undefined) { return true; } else { return false; }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/todo/my-todo-list/my-todo-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/todo/my-todo-list/my-todo-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/my-todo-list/my-todo-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/todo/my-todo-list/my-todo-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"accordion\" id=\"accordionExample\">\r\n  <div class=\"card\" *ngFor=\"let t of filteredList; let i = index;\">\r\n    <div class=\"card-header\" id=\"headingOne\">\r\n      <h5 class=\"mb-0\">\r\n        <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\"\r\n          aria-controls=\"collapseOne\">\r\n          {{ t[0].dateAdded | date : 'EEEE, MMMM d, y' }}\r\n        </button>\r\n      </h5>\r\n    </div>\r\n    <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n      <div class=\"card-body\">\r\n        <!-- Insert TODOs here -->\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item\" *ngFor=\"let to of t\">\r\n            {{ to.title }}\r\n            <span style=\"float: right;\">\r\n              <i>{{ (to.isChecked ? 'Finished' : 'Yet to finish') }}</i>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/todo/my-todo-list/my-todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/todo/my-todo-list/my-todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: MyTodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTodoListComponent", function() { return MyTodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/todo.service */ "./src/app/todo/shared/todo.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyTodoListComponent = /** @class */ (function () {
    function MyTodoListComponent(todo) {
        this.todo = todo;
        this.todoList = [];
        this.filteredList = [];
    }
    MyTodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iD = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.todo
            .gettoDoList(this.iD)
            .snapshotChanges()
            .subscribe(function (item) {
            _this.todoList = [];
            item.forEach(function (element) {
                var x = element.payload.val();
                x['$key'] = element.key;
                _this.todoList.push(x);
            });
            // sort array isChecked false --> true
            _this.todoList.sort(function (a, b) {
                return b.dateAdded - a.dateAdded;
            });
            var temp = [];
            var d = new Date(_this.todoList[0].dateAdded).toDateString();
            _this.todoList.forEach(function (td) {
                var dVal = new Date(td.dateAdded).toDateString();
                if (dVal === d) {
                    temp.push(td);
                }
                else {
                    _this.filteredList.push(temp);
                    temp = [];
                    temp.push(td);
                }
                d = dVal;
            });
            _this.filteredList.push(temp);
            console.log(_this.filteredList);
        });
    };
    MyTodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-todo-list',
            template: __webpack_require__(/*! ./my-todo-list.component.html */ "./src/app/todo/my-todo-list/my-todo-list.component.html"),
            styles: [__webpack_require__(/*! ./my-todo-list.component.css */ "./src/app/todo/my-todo-list/my-todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]])
    ], MyTodoListComponent);
    return MyTodoListComponent;
}());



/***/ }),

/***/ "./src/app/todo/shared/todo.service.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/shared/todo.service.ts ***!
  \*********************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = /** @class */ (function () {
    function TodoService(firebasedb) {
        this.firebasedb = firebasedb;
    }
    TodoService.prototype.gettoDoList = function (id) {
        this.toDoList = this.firebasedb.list("titles/" + id);
        console.log(this.toDoList);
        return this.toDoList;
    };
    // Adding new items in list
    TodoService.prototype.addTitle = function (id, title) {
        this.toDoList.push({
            title: title,
            dateAdded: Date.now(),
            isChecked: false
        });
    };
    // Unique key  to identify items in the list
    TodoService.prototype.checkOrUncheckTitle = function ($key, flag) {
        this.toDoList.update($key, { isChecked: flag });
    };
    TodoService.prototype.removeTitle = function ($key) {
        this.toDoList.remove($key);
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n    background-color: paleturquoise;\r\n}"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"padding:45px 0px\">\r\n  <h4 class=\"text-center\">Todo List App</h4>\r\n</div>\r\n<div class=\"input-group\">\r\n  <input type=\"text\" class=\"form-control\" #itemTitle>\r\n  <div class=\"input-group-addon hover-cursor\" (click)=\"onAdd(itemTitle)\">\r\n    <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n  </div>\r\n</div>\r\n<div style=\"margin:5px 0px\">\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\" *ngFor=\"let item of toDoListArray\">\r\n      <span class=\"hover-cursor\" [class.text-success]=\"item.isChecked\" (click)=\"alterCheck(item.$key,item.isChecked)\">\r\n        <i class=\"fa fa-lg\" [ngClass]=\"item.isChecked?'fa-check-circle-o':'fa-circle-thin'\"></i>\r\n\r\n      </span>\r\n      {{item.title }}\r\n      <span class=\"hover-cursor text-danger pull-right\" (click)=\"onDelete(item.$key)\">\r\n        <i class=\"fa fa-trash-o fa-lg\"></i>\r\n      </span>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<!-- <p>\r\n  todo works!!\r\n</p> -->"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/todo.service */ "./src/app/todo/shared/todo.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = /** @class */ (function () {
    function TodoComponent(toDoService) {
        this.toDoService = toDoService;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uId = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.toDoService
            .gettoDoList(this.uId)
            .snapshotChanges()
            .subscribe(function (item) {
            _this.toDoListArray = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.toDoListArray.push(x);
            });
            // sort array isChecked false --> true
            _this.toDoListArray.sort(function (a, b) {
                return a.isChecked - b.isChecked;
            });
        });
    };
    // Receive title from textbox
    TodoComponent.prototype.onAdd = function (itemTitle) {
        this.toDoService.addTitle(this.uId, itemTitle.value);
        itemTitle.value = null;
    };
    TodoComponent.prototype.alterCheck = function ($key, isChecked) {
        this.toDoService.checkOrUncheckTitle($key, !isChecked);
    };
    TodoComponent.prototype.onDelete = function ($key) {
        this.toDoService.removeTitle($key);
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]])
    ], TodoComponent);
    return TodoComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // firebase:{
    //   apiKey: "AIzaSyB0qGqLmV59kJ8LceEciBa2xEl74DBQjt4",
    //   authDomain: "todolistapp-7e4df.firebaseapp.com",
    //   databaseURL: "https://todolistapp-7e4df.firebaseio.com",
    //   projectId: "todolistapp-7e4df",
    //   storageBucket: "todolistapp-7e4df.appspot.com",
    //   messagingSenderId: "452608278933"
    // },
    // ghanshyam's firebase details
    // firebase: {
    //   apiKey: 'AIzaSyA2NGcE7BkYWq6u7SCnIvMx4vEBn_Osilo',
    //   authDomain: 'ng-todo-app-13f2f.firebaseapp.com',
    //   databaseURL: 'https://ng-todo-app-13f2f.firebaseio.com',
    //   projectId: 'ng-todo-app-13f2f',
    //   storageBucket: 'ng-todo-app-13f2f.appspot.com',
    //   messagingSenderId: '339525944624'
    // }
    firebase: {
        apiKey: "AIzaSyAVsGs_yHYOFMBcrp7AdBfGzVvLG89pRSQ",
        authDomain: "todolistapp-80747.firebaseapp.com",
        databaseURL: "https://todolistapp-80747.firebaseio.com",
        projectId: "todolistapp-80747",
        storageBucket: "todolistapp-80747.appspot.com",
        messagingSenderId: "609406926062"
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\miniAngularProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map