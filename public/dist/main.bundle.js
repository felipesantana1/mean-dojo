webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/answer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
var Answer = (function () {
    function Answer(user, text, details, likes) {
        if (user === void 0) { user = ""; }
        if (text === void 0) { text = ""; }
        if (details === void 0) { details = ""; }
        if (likes === void 0) { likes = 0; }
        this.user = user;
        this.text = text;
        this.details = details;
        this.likes = likes;
    }
    return Answer;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_new_new_component__ = __webpack_require__("../../../../../src/app/question/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_one_one_component__ = __webpack_require__("../../../../../src/app/question/one/one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_answer_answer_component__ = __webpack_require__("../../../../../src/app/question/answer/answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: "", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: "dash", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: "questions", children: [
            { path: "new", component: __WEBPACK_IMPORTED_MODULE_4__question_new_new_component__["a" /* NewComponent */] },
            { path: ":id", component: __WEBPACK_IMPORTED_MODULE_5__question_one_one_component__["a" /* OneComponent */] },
            { path: ":id/answer", component: __WEBPACK_IMPORTED_MODULE_6__question_answer_answer_component__["a" /* AnswerComponent */] }
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_new_new_component__ = __webpack_require__("../../../../../src/app/question/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__question_one_one_component__ = __webpack_require__("../../../../../src/app/question/one/one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__question_answer_answer_component__ = __webpack_require__("../../../../../src/app/question/answer/answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__question_question_component__["a" /* QuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__question_new_new_component__["a" /* NewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__question_one_one_component__["a" /* OneComponent */],
                __WEBPACK_IMPORTED_MODULE_11__question_answer_answer_component__["a" /* AnswerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__question_service__["a" /* QuestionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome {{user}}</h1>\n<button (click)=\"logOut()\" class=\"btn btn-primary\">LogOut</button>\n<button (click)=\"AddQ()\" class=\"btn btn-primary\">Add Question</button>\n\n<table class=\"table table-borderd\">\n  <thead>\n      <tr>\n          <th scope=\"col\">Question</th>\n          <th scope=\"col\">Answers</th>\n          <th scope=\"col\">Actions</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let question of questions\">\n          <td scope=\"row\">{{ question.quest }}</td>\n          <td scope=\"row\">{{ question.answers.length }}</td>\n          <td scope=\"row\"><a [routerLink]=\"['/questions', question._id]\">Show</a>\n            <a [routerLink]=\"['/questions', question._id, 'answer']\">Answer</a>\n          </td>\n      </tr>\n  </tbody>\n</table>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.user = this._service.user;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.all(function (res) {
            _this.questions = res;
        });
    };
    DashboardComponent.prototype.logOut = function () {
        this._service.user = null;
        this._router.navigateByUrl("/");
    };
    DashboardComponent.prototype.AddQ = function () {
        this._router.navigateByUrl("/questions/new");
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset class=\"container-fluid\">\n  <legend>Enter Your Name!</legend>\n  <form (submit)=\"onSubmit()\" #formData=\"ngForm\" class=\"form-inline\">\n    <div class=\"form-group\">\n      <label>Name:</label>\n      <input type=\"text\" name=\"user\" class=\"form-control-plaintext\" [(ngModel)]=\"user\" required minlength=\"3\" #name=\"ngModel\">\n      <input type=\"submit\" [disabled]=\"formData.invalid\" class=\"btn btn-primary\">\n    </div>\n  </form>\n  <span *ngIf=\"name.errors?.required\">Name is required!</span>\n  <span *ngIf=\"name.errors?.minlength\">Name must be at leats 3 characters!</span>  \n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        this._service.user = this.user;
        this._router.navigateByUrl("/dash");
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionService = (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.all = function (callBack) {
        this._http.get("/all").subscribe(function (res) {
            callBack(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    ;
    QuestionService.prototype.one = function (id, callBack) {
        this._http.get("/one/" + id).subscribe(function (res) {
            callBack(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    ;
    QuestionService.prototype.create = function (data, callBack) {
        console.log(data);
        this._http.post("/question", data).subscribe(function (res) {
            callBack(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    ;
    QuestionService.prototype.answer = function (id, data, callBack) {
        this._http.post("/question/" + id, data).subscribe(function (res) {
            callBack(res.json());
        }, function (err) {
            console.log(err.json());
        });
    };
    ;
    QuestionService.prototype.update = function (data, callBack) {
        this._http.put("/question/" + data._id + "/like", data).subscribe(function (res) {
            callBack(res.json());
        }, function (err) {
            callBack(err.json());
        });
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/app/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question(quest, desc, answers) {
        if (quest === void 0) { quest = ""; }
        if (desc === void 0) { desc = ""; }
        if (answers === void 0) { answers = []; }
        this.quest = quest;
        this.desc = desc;
        this.answers = answers;
    }
    return Question;
}());



/***/ }),

/***/ "../../../../../src/app/question/answer/answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/questions', id]\"><button>Go Back to Question</button></a>\n\n<h1 *ngIf=\"question\">{{question.quest}}</h1>\n<p *ngIf=\"question\">{{question.desc}}</p>\n\n<form (submit)=\"onSubmit(id)\" #formData=\"ngForm\">\n  <label for=\"text\">Your Answer:</label>\n  <input type=\"text\" name=\"text\" required [(ngModel)]=\"answer.text\" minlength=\"5\" #text=\"ngModel\">\n  <br>\n  <label for=\"details\">Supporting Detail:</label>\n  <input type=\"text\" name=\"details\" [(ngModel)]=\"answer.details\" #details=\"ngModel\">\n  <input type=\"submit\" [disabled]=\"formData.invalid\">\n  <a [routerLink]=\"['/dash']\"><button>Cancel</button></a>\n  <span *ngIf=\"text.errors?.required\">Question is required!</span>\n  <span *ngIf=\"text.errors?.minlength\">Answer must be at leats 5 characters!</span> \n</form>"

/***/ }),

/***/ "../../../../../src/app/question/answer/answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__answer__ = __webpack_require__("../../../../../src/app/answer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnswerComponent = (function () {
    function AnswerComponent(_service, _route, _router) {
        var _this = this;
        this._service = _service;
        this._route = _route;
        this._router = _router;
        this.answer = new __WEBPACK_IMPORTED_MODULE_3__answer__["a" /* Answer */]();
        this.user = this._service.user;
        this._route.paramMap.subscribe(function (params) {
            _this.id = params.get("id");
        });
    }
    AnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.one(this.id, function (res) {
            _this.question = res;
        });
    };
    AnswerComponent.prototype.onSubmit = function (id) {
        var _this = this;
        this.answer.user = this._service.user;
        this._service.answer(id, this.answer, function (res) {
            _this._router.navigateByUrl("/dash");
        });
    };
    AnswerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-answer',
            template: __webpack_require__("../../../../../src/app/question/answer/answer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AnswerComponent);
    return AnswerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"home()\">Home</button>\n<button (click)=\"logOut()\">LogOut</button>\n\n<h1>New Question</h1>\n  <form (submit)=\"onSubmit()\" #formData=\"ngForm\">\n    <label for=\"question\">Question:</label>\n    <input type=\"text\" name=\"quest\" required [(ngModel)]=\"question.quest\" minlength=\"10\" #quest=\"ngModel\">\n    <label for=\"desc\">Description:</label>\n    <input type=\"text\" name=\"desc\" [(ngModel)]=\"question.desc\" #desc=\"ngModel\">\n    <a [routerLink]=\"['/dash']\"><button>Cancel</button></a>\n    <span *ngIf=\"quest.errors?.required\">Question is required!</span>\n    <span *ngIf=\"quest.errors?.minlength\">Question must be at leats 10 characters!</span> \n    <input type=\"submit\" [disabled]=\"formData.invalid\">\n    \n  </form>"

/***/ }),

/***/ "../../../../../src/app/question/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__("../../../../../src/app/question.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewComponent = (function () {
    function NewComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.question = new __WEBPACK_IMPORTED_MODULE_3__question__["a" /* Question */]();
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.question);
        this._service.create(this.question, function (res) {
            _this._router.navigateByUrl("/dash");
        });
    };
    NewComponent.prototype.home = function () {
        this._router.navigateByUrl("/dash");
    };
    NewComponent.prototype.logOut = function () {
        this._service.user = null;
        this._router.navigateByUrl("/");
    };
    NewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new',
            template: __webpack_require__("../../../../../src/app/question/new/new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question/one/one.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/one/one.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n<a [routerLink]=\"['/dash']\"><button type=\"button\" class=\"btn btn-primary\">Home</button></a>\r\n<a [routerLink]=\"['/questions/', id, 'answer']\"><button type=\"button\" class=\"btn btn-primary\">Answer this Question</button></a>\r\n<button (click)=\"logOut()\" type=\"button\" class=\"btn btn-primary\">LogOut</button>\r\n</div>\r\n\r\n<div class=\"border border-dark rounded\"><h1 *ngIf=\"question\">{{question.quest}}</h1>\r\n<p *ngIf=\"question\">{{question.desc}}</p></div>\r\n\r\n\r\n<h3 class=\"p-3 mb-2 bg-secondary text-white\">Answers</h3>\r\n\r\n<span *ngFor=\"let answer of question?.answers; let idx=index\">\r\n<p class=\"list-group-item\">Name: {{answer.user}}</p>\r\n<p class=\"list-group-item\">Answer: {{answer.text}}</p>\r\n<p class=\"list-group-item\">Deatils: {{answer.details}}</p>\r\n<p class=\"list-group-item\">Likes: {{answer.likes}} <button (click)=\"like(idx)\" class=\"btn btn-primary\">Like</button></p>\r\n</span>"

/***/ }),

/***/ "../../../../../src/app/question/one/one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OneComponent = (function () {
    function OneComponent(_service, _router, _route) {
        var _this = this;
        this._service = _service;
        this._router = _router;
        this._route = _route;
        this._route.paramMap.subscribe(function (params) {
            _this.id = params.get("id");
        });
    }
    OneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.one(this.id, function (res) {
            _this.question = res;
        });
    };
    OneComponent.prototype.logOut = function () {
        this._service.user = null;
        this._router.navigateByUrl("/");
    };
    OneComponent.prototype.like = function (idx) {
        this.question.answers[idx].likes += 1;
        this.question.answers.sort(function (a, b) { return b.likes - a.likes; });
        this._service.update(this.question, function (res) { });
    };
    OneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-one',
            template: __webpack_require__("../../../../../src/app/question/one/one.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/one/one.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], OneComponent);
    return OneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<app-new></app-new>\n<app-one></app-one>\n<app-answer></app-answer>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionComponent = (function () {
    function QuestionComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.user = this._service.user;
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    QuestionComponent.prototype.home = function () {
        this._router.navigateByUrl("/dash");
    };
    QuestionComponent.prototype.logout = function () {
        this._service.user = null;
        this._router.navigateByUrl("/");
    };
    QuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question',
            template: __webpack_require__("../../../../../src/app/question/question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [QuestionComponent, __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map