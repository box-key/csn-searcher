function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/aboutus/aboutus.component.ts ***!
    \**********************************************/

  /*! exports provided: AboutusComponent */

  /***/
  function srcAppAboutusAboutusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusComponent", function () {
      return AboutusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutusComponent = /*#__PURE__*/function () {
      function AboutusComponent() {
        _classCallCheck(this, AboutusComponent);
      }

      _createClass(AboutusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutusComponent;
    }();

    AboutusComponent.ɵfac = function AboutusComponent_Factory(t) {
      return new (t || AboutusComponent)();
    };

    AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutusComponent,
      selectors: [["app-aboutus"]],
      decls: 2,
      vars: 0,
      template: function AboutusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aboutus works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aboutus',
          templateUrl: './aboutus.component.html',
          styleUrls: ['./aboutus.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");

    var routes = [{
      path: '',
      component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
    }, {
      path: 'AboutUs',
      component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutusComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'wb';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 14,
      vars: 0,
      consts: [[1, "container"], ["href", "#", 1, "logo"], ["href", "#", "routerLink", "/"], ["href", "#", "routerLink", "/AboutUs"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CSN Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./result/result.component */
    "./src/app/result/result.component.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_6__["ResultComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_6__["ResultComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/http.service.ts":
  /*!*********************************!*\
    !*** ./src/app/http.service.ts ***!
    \*********************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HttpService = /*#__PURE__*/function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
      }

      _createClass(HttpService, [{
        key: "csn_search",
        value: function csn_search(inputText) {
          var API = 'http://35.175.228.225/search?inputText=' + inputText;
          console.log(API);
          return this.http.get(API);
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/result/result.component.ts":
  /*!********************************************!*\
    !*** ./src/app/result/result.component.ts ***!
    \********************************************/

  /*! exports provided: ResultComponent */

  /***/
  function srcAppResultResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultComponent", function () {
      return ResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResultComponent = /*#__PURE__*/function () {
      function ResultComponent() {
        _classCallCheck(this, ResultComponent);
      }

      _createClass(ResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResultComponent;
    }();

    ResultComponent.ɵfac = function ResultComponent_Factory(t) {
      return new (t || ResultComponent)();
    };

    ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultComponent,
      selectors: [["app-result"]],
      decls: 2,
      vars: 0,
      template: function ResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "result works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-result',
          templateUrl: './result.component.html',
          styleUrls: ['./result.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SearchComponent_ng_template_16_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.article_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.section_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.similarity_score);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.url);
      }
    }

    function SearchComponent_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Article title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Section_title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Similarity Score");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "URL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SearchComponent_ng_template_16_tr_12_Template, 10, 5, "tr", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.results);
      }
    }

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(_http) {
        _classCallCheck(this, SearchComponent);

        this._http = _http;
        this.clickCounter = 0;
        this.name = 'Thurein';
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "countClick",
        value: function countClick() {
          this.clickCounter += 1;
        }
      }, {
        key: "search",
        value: function search(inputText) {
          var _this = this;

          console.log('search :' + inputText);

          this._http.csn_search(inputText).subscribe(function (data) {
            _this.results = data;
            console.log(_this.results);
          });
        }
      }, {
        key: "setClasses",
        value: function setClasses() {
          var myClasses = {
            active: this.clickCounter > 4
          };
          return myClasses;
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 18,
      vars: 1,
      consts: [[1, "container-b"], [1, "group"], ["type", "textarea", "rows", "5", "required", "required"], ["inputText", ""], [1, "highlight"], [1, "bar"], ["hidden", "", 1, "group"], ["type", "text", "required", "required"], [1, "btn-box"], ["type", "submit", 1, "btn", "btn-submit", 3, "click"], [3, "ngIf"], [1, "res"], [4, "ngFor", "ngForOf"], [3, "href"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "textarea", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Input Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Number of Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return ctx.search(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SearchComponent_ng_template_16_Template, 13, 1, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".container-b[_ngcontent-%COMP%] {\n  padding: 3em;\n  margin-top: 3em;\n  border: 1px solid lightgray;\n  margin-bottom: 1em;\n}\n.container-b[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 1em;\n  margin-bottom: 2em;\n}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  background: #0011ff;\n}\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 45px left;\n}\nform[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-weight: 300;\n  text-align: center;\n  color: #2196f3;\n}\nform[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: uppercase;\n  color: #64256c;\n}\nform[_ngcontent-%COMP%]   hr.sep[_ngcontent-%COMP%] {\n  background: #2196f3;\n  box-shadow: none;\n  border: none;\n  height: 2px;\n  width: 25%;\n  margin: 0px auto 45px auto;\n}\nform[_ngcontent-%COMP%]   .emoji[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.group[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 45px 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  background: none;\n  color: #64256c;\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid #64256c;\n}\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ninput[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\n  top: -14px;\n  font-size: 12px;\n  color: #2196f3;\n}\ninput[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:before, textarea[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:before {\n  width: 100%;\n}\ninput[type=password][_ngcontent-%COMP%] {\n  letter-spacing: 0.3em;\n}\nlabel[_ngcontent-%COMP%] {\n  color: #64256c;\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n}\n.bar[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.bar[_ngcontent-%COMP%]:before {\n  content: \"\";\n  height: 2px;\n  width: 0;\n  bottom: 0px;\n  position: absolute;\n  background: #2196f3;\n  transition: 300ms ease all;\n  left: 0%;\n}\n.btn[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #4b1c51;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 3px;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  text-decoration: none;\n  outline: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.btn[_ngcontent-%COMP%]:hover {\n  color: #461a4c;\n  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.18), 0 5px 5px rgba(0, 0, 0, 0.12);\n}\n.btn.btn-link[_ngcontent-%COMP%] {\n  background: #2196f3;\n  color: #d3eafd;\n}\n.btn.btn-link[_ngcontent-%COMP%]:hover {\n  background: #0d8aee;\n  color: #deeffd;\n}\n.btn.btn-submit[_ngcontent-%COMP%] {\n  background: #2196f3;\n  color: #bce0fb;\n}\n.btn.btn-submit[_ngcontent-%COMP%]:hover {\n  background: #0d8aee;\n  color: #deeffd;\n}\n.btn.btn-cancel[_ngcontent-%COMP%] {\n  background: #eee;\n}\n.btn.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #e1e1e1;\n  color: #461a4c;\n}\n.btn-box[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 50px 0;\n}\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid grey;\n  border-collapse: collapse;\n  padding: 5px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #f1f1f1;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0M6XFxVc2Vyc1xcclxcRGVza3RvcFxcY3NuX3NlYXJjaFxcbXl3ZWJzaXRlXFx3Yi9zcmNcXGFwcFxcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDRUo7QURTQTs7O0VBR0Usc0JBQUE7QUNORjtBRFNBO0VBQ0UsbUJBYlM7QUNPWDtBRFVBO0VBQ0UsV0FkTTtFQWVOLGlCQUFBO0FDUEY7QURTRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F4Qk87QUNpQlg7QURTRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQTVCVTtBQ3FCZDtBRFNFO0VBQ0UsbUJBaENPO0VBaUNQLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUNQSjtBRFNFO0VBQ0UsZ0JBQUE7QUNQSjtBRFdBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDUkY7QURZQTtFQUNFLFlBQUE7QUNURjtBRFlBOztFQUVFLGdCQUFBO0VBQ0EsY0F4RFk7RUF5RFosZUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBMURNO0VBMkROLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDVEY7QURVRTs7RUFDRSxhQUFBO0FDUEo7QURTRTs7O0VBRUUsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQXhFTztBQ2tFWDtBRFFFOztFQUNFLFdBeEVJO0FDbUVSO0FEU0E7RUFDRSxxQkFBQTtBQ05GO0FEU0E7RUFDRSxjQW5GWTtFQW9GWixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQ05GO0FEU0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQTlGTTtBQ3dGUjtBRE9FO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBeEdPO0VBeUdQLDBCQUFBO0VBQ0EsUUFBQTtBQ0xKO0FEVUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx3RUFBQTtFQUNBLHFEQUFBO0FDUEY7QURRRTtFQUNFLGNBQUE7RUFDQSx5RUFBQTtBQ05KO0FEUUU7RUFDRSxtQkFoSU87RUFpSVAsY0FBQTtBQ05KO0FET0k7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNMTjtBRFFFO0VBQ0UsbUJBeElPO0VBeUlQLGNBQUE7QUNOSjtBRE9JO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDTE47QURRRTtFQUNFLGdCQUFBO0FDTko7QURPSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0xOO0FEVUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNQRjtBRFlBOzs7RUFHRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1RGO0FEWUE7RUFDRSx5QkFBQTtBQ1RGO0FEWUE7RUFDRSx5QkFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItYiB7XHJcbiAgcGFkZGluZzogM2VtO1xyXG4gIG1hcmdpbi10b3A6IDNlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFZBUklBQkxFUyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuJGJnLWNvbG9yOiAjMDAxMWZmO1xyXG4kaGwtY29sb3I6ICMyMTk2ZjM7XHJcbiRtdXRlZC1jb2xvcjogbWl4KHJnYigxNDMsIDQ1LCA0NSksICRiZy1jb2xvciwgNzAlKTtcclxuJHRyYW5zLXRpbWU6IDMwMG1zO1xyXG4kd2lkdGg6IDEwMCU7XHJcblxyXG4qLFxyXG46YmVmb3JlLFxyXG46YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcclxufVxyXG5cclxuLy8gRk9STSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuZm9ybSB7XHJcbiAgd2lkdGg6ICR3aWR0aDtcclxuICBtYXJnaW46IDQ1cHggbGVmdDtcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICRobC1jb2xvcjtcclxuICB9XHJcbiAgaDUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAkbXV0ZWQtY29sb3I7XHJcbiAgfVxyXG4gIGhyLnNlcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkaGwtY29sb3I7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byA0NXB4IGF1dG87XHJcbiAgfVxyXG4gIC5lbW9qaSB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmdyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiA0NXB4IDA7XHJcbn1cclxuXHJcbi8vIElOUFVUUyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxudGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiAkbXV0ZWQtY29sb3I7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogJHdpZHRoO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbXV0ZWQtY29sb3I7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOmZvY3VzIH4gbGFiZWwsXHJcbiAgJjp2YWxpZCB+IGxhYmVsIHtcclxuICAgIHRvcDogLTE0cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogJGhsLWNvbG9yO1xyXG4gIH1cclxuICAmOmZvY3VzIH4gLmJhcjpiZWZvcmUge1xyXG4gICAgd2lkdGg6ICR3aWR0aDtcclxuICB9XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM2VtO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICRtdXRlZC1jb2xvcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgbGVmdDogNXB4O1xyXG4gIHRvcDogMTBweDtcclxuICB0cmFuc2l0aW9uOiAkdHJhbnMtdGltZSBlYXNlIGFsbDtcclxufVxyXG5cclxuLmJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAkd2lkdGg7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICRobC1jb2xvcjtcclxuICAgIHRyYW5zaXRpb246ICR0cmFucy10aW1lIGVhc2UgYWxsO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCVVRUT05TIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiBtaXgoYmxhY2ssICRtdXRlZC1jb2xvciwgMjUlKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IG1peChibGFjaywgJG11dGVkLWNvbG9yLCAzMCUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcbiAgJi5idG4tbGluayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkaGwtY29sb3I7XHJcbiAgICBjb2xvcjogbWl4KHdoaXRlLCAkaGwtY29sb3IsIDgwJSk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRobC1jb2xvciwgNSUpO1xyXG4gICAgICBjb2xvcjogbWl4KHdoaXRlLCAkaGwtY29sb3IsIDg1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuYnRuLXN1Ym1pdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkaGwtY29sb3I7XHJcbiAgICBjb2xvcjogbWl4KHdoaXRlLCAkaGwtY29sb3IsIDcwJSk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRobC1jb2xvciwgNSUpO1xyXG4gICAgICBjb2xvcjogbWl4KHdoaXRlLCAkaGwtY29sb3IsIDg1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuYnRuLWNhbmNlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigjZWVlLCA1JSk7XHJcbiAgICAgIGNvbG9yOiBtaXgoYmxhY2ssICRtdXRlZC1jb2xvciwgMzAlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4tYm94IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbn1cclxuXHJcbi8vIHRhYmxlXHJcblxyXG50YWJsZSxcclxudGgsXHJcbnRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG50YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbiIsIi5jb250YWluZXItYiB7XG4gIHBhZGRpbmc6IDNlbTtcbiAgbWFyZ2luLXRvcDogM2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5jb250YWluZXItYiBpbnB1dCB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG4qLFxuOmJlZm9yZSxcbjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMDAxMWZmO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNDVweCBsZWZ0O1xufVxuZm9ybSBoMSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjE5NmYzO1xufVxuZm9ybSBoNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM2NDI1NmM7XG59XG5mb3JtIGhyLnNlcCB7XG4gIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbjogMHB4IGF1dG8gNDVweCBhdXRvO1xufVxuZm9ybSAuZW1vamkge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNDVweCAwO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjNjQyNTZjO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjQyNTZjO1xufVxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dDpmb2N1cyB+IGxhYmVsLCBpbnB1dDp2YWxpZCB+IGxhYmVsLFxudGV4dGFyZWE6Zm9jdXMgfiBsYWJlbCxcbnRleHRhcmVhOnZhbGlkIH4gbGFiZWwge1xuICB0b3A6IC0xNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjE5NmYzO1xufVxuaW5wdXQ6Zm9jdXMgfiAuYmFyOmJlZm9yZSxcbnRleHRhcmVhOmZvY3VzIH4gLmJhcjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBsZXR0ZXItc3BhY2luZzogMC4zZW07XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6ICM2NDI1NmM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDEwcHg7XG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2UgYWxsO1xufVxuXG4uYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMDtcbiAgYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzIxOTZmMztcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZSBhbGw7XG4gIGxlZnQ6IDAlO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICM0YjFjNTE7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbn1cbi5idG46aG92ZXIge1xuICBjb2xvcjogIzQ2MWE0YztcbiAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5idG4uYnRuLWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xuICBjb2xvcjogI2QzZWFmZDtcbn1cbi5idG4uYnRuLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMGQ4YWVlO1xuICBjb2xvcjogI2RlZWZmZDtcbn1cbi5idG4uYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG4gIGNvbG9yOiAjYmNlMGZiO1xufVxuLmJ0bi5idG4tc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzBkOGFlZTtcbiAgY29sb3I6ICNkZWVmZmQ7XG59XG4uYnRuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuLmJ0bi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2UxZTFlMTtcbiAgY29sb3I6ICM0NjFhNGM7XG59XG5cbi5idG4tYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxudGFibGUsXG50aCxcbnRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG50YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss']
        }]
      }], function () {
        return [{
          type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\r\Desktop\csn_search\mywebsite\wb\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map