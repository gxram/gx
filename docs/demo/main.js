"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 6907:
/*!*****************************************************!*\
  !*** ./projects/demo/src/app/app-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadComponent: () => __webpack_require__.e(/*! import() */ "projects_demo_src_app_components_home_home_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/home/home.component */ 5220)).then(c => c.HomeComponent)
}, {
  path: 'profile',
  loadComponent: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/profile/profile.component */ 2096)).then(c => c.ProfileComponent)
}, {
  path: 'blogs',
  loadComponent: () => __webpack_require__.e(/*! import() */ "projects_demo_src_app_components_blogs_blogs_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/blogs/blogs.component */ 1436)).then(c => c.BlogsComponent)
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 4699:
/*!************************************************!*\
  !*** ./projects/demo/src/app/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _tools_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/components/header/header.component */ 5104);
/* harmony import */ var _tools_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/components/footer/footer.component */ 8492);
/* harmony import */ var _tools_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/components/sidebar/sidebar.component */ 7844);





class AppComponent {
  constructor() {
    this.title = 'demo';
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row", "content"], [1, "sidebar", "col-md-3", "col-lg-2", "bg-light", "border-end"], [1, "main-content", "col-md-9", "col-lg-10"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _tools_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _tools_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _tools_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent],
      styles: [".content[_ngcontent-%COMP%] {\n  height: calc(100vh - 4rem); \n\n  overflow: hidden;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQSxFQUFBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pOyAvKiBTZXQgaGVpZ2h0IHRvIGZpbGwgdGhlIHZpZXdwb3J0ICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubWFpbi1jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7738:
/*!*********************************************!*\
  !*** ./projects/demo/src/app/app.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 6907);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 4699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ 8849);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile/profile.component */ 2096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _tools__WEBPACK_IMPORTED_MODULE_2__.ToolsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _tools__WEBPACK_IMPORTED_MODULE_2__.ToolsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 2096:
/*!***********************************************************************!*\
  !*** ./projects/demo/src/app/components/profile/profile.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ProfileComponent {
  static {
    this.ɵfac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProfileComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 115,
      vars: 0,
      consts: [[1, "container"], [1, "row"], [1, "left"], [1, "text-center"], [1, "text-center", "fs-5", "fst-italic"], [1, "social-media", "text-center"], ["href", "https://www.linkedin.com/in/dhondiramjawade"], [1, "btn", "bi", "bi-linkedin"], ["href", "https://github.com/ramjawade"], [1, "btn", "bi", "bi-github"], ["href", "https://www.twitter.com/ramjawade"], [1, "btn", "bi", "bi-twitter"], ["href", "mailto: ramjawade.dev@gmail.com"], [1, "btn", "bi", "bi-envelope-at"], [1, "about-me", "mt-3"], [1, "border-bottom"], [1, "skills"], [1, "education"], [1, "fst-italic"], [1, "experience"], [1, "h5"], [1, "achievements", "mb-3"], [1, "h6"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dhondiram Nivrati Jawade");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Front end developer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14)(17, "h4", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About Me");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Experienced Front-End Developer with 7 years of expertise in building and managing web applications for large-scale enterprises. Worked on both monolithic and micro front-end architectures with a focus on mono-repo structures. Proficient in Angular, JavaScript, HTML3, CSS3 and passionate about exploring UI System Design and it's Architecture to deliver scalable, high-performance solutions that enhance user experiences. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16)(22, "h4", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul")(25, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Angular");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "JavaScript");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "HTML5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "CSS3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "NX Nrwl");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "RXJS");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Bootstrap");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Angular Material");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Tools- NPM, Gitlab");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17)(44, "h4", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Bachelor of Engineering (Information Technology)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Government Engineering College Aurangabad. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Aug 2013 \u2013 May 2017");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19)(53, "h4", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Professional Experience");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "UI Specialist");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Yash Technologies Pvt. Ltd. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Mar 2021 \u2013 Present");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul")(62, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Developed front-end solutions for various clients in large-scale enterprise applications. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Collaborated with stakeholders, UX designers and back-end teams to ensure feature scalability and performance. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Improved architecture, code quality, and product performance through optimizations. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Conducted code reviews to ensure adherence to best practices.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Worked with teams to deliver features aligned with Agile principles and sprint objectives. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Technical Lead");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Innoeye Technologies. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "April 2019 \u2013 Mar 2021");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul")(80, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Explored and implemented UI monolithic and micro front-end architectures with a mono-repo structure to enhance scalability and streamline development processes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Led a 5-member team to build a scalable and maintainable application architecture using Angular. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Developed reusable components and libraries, supporting 15 teams and ensuring project consistency. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Software Developer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Innoeye Technologies. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Aug 2017 \u2013 Mar 2019");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Gained hands-on experience with AngularJS and JavaScript in building dynamic web applications. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Worked on canvas layers for big data visualization using Leaflet, Create.js, and D3. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 21)(97, "h4", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Achievements");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Shining Star,");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Yash Technologies");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Excellence contributions and commitments in client project. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "- May 2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Most Valuable Player,");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " BNY Mellon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Most valuable player of the Month. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "- Nov 2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      styles: [".left[_ngcontent-%COMP%] {\n  background-color: aliceblue;\n}\n\n.skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  margin: 0 25px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FBQ0o7O0FBR0k7RUFDRSxXQUFBO0VBQ0UsY0FBQTtBQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIH1cclxuICBcclxuICAuc2tpbGxzIHtcclxuICAgIGxpIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8492:
/*!***************************************************************************!*\
  !*** ./projects/demo/src/app/tools/components/footer/footer.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  static {
    this.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 2,
      vars: 0,
      consts: [[1, "footer", "text-center", "border-top"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " All Rights Reserved \u00A9 2024 Ram Jawade\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC90b29scy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5104:
/*!***************************************************************************!*\
  !*** ./projects/demo/src/app/tools/components/header/header.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HeaderComponent {
  static {
    this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 1,
      vars: 0,
      consts: [[1, "header", "text-center", "border-bottom"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: [".header[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC90b29scy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyICB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7844:
/*!*****************************************************************************!*\
  !*** ./projects/demo/src/app/tools/components/sidebar/sidebar.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



function SidebarComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 2)(2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const nav_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", nav_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("bi bi-", nav_r1.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nav_r1.name, " ");
  }
}
class SidebarComponent {
  constructor() {
    this.navList = [{
      name: 'Home',
      icon: 'house-fill',
      link: 'home'
    }, {
      name: 'Profile',
      icon: 'person-bounding-box',
      link: 'profile'
    }, {
      name: 'Blogs',
      icon: 'text-paragraph',
      link: 'blogs'
    }];
  }
  static {
    this.ɵfac = function SidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SidebarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 6,
      vars: 1,
      consts: [[1, "nav", "flex-column"], [4, "ngFor", "ngForOf"], [1, "nav-item"], ["href", "#", 1, "nav-link", "active"], [1, "bi", "bi-house-fill"], [1, "nav-link", 3, "routerLink"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ng_container_1_Template, 5, 5, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Item 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navList);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8849:
/*!**********************************************!*\
  !*** ./projects/demo/src/app/tools/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* reexport safe */ _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent),
/* harmony export */   HeaderComponent: () => (/* reexport safe */ _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent),
/* harmony export */   SidebarComponent: () => (/* reexport safe */ _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent),
/* harmony export */   ToolsModule: () => (/* reexport safe */ _tools_module__WEBPACK_IMPORTED_MODULE_3__.ToolsModule)
/* harmony export */ });
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 5104);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 8492);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 7844);
/* harmony import */ var _tools_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools.module */ 6046);





/***/ }),

/***/ 6046:
/*!*****************************************************!*\
  !*** ./projects/demo/src/app/tools/tools.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolsModule: () => (/* binding */ ToolsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 5104);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 8492);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 7844);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






class ToolsModule {
  static {
    this.ɵfac = function ToolsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: ToolsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ToolsModule, {
    declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent]
  });
})();

/***/ }),

/***/ 2913:
/*!*******************************************************!*\
  !*** ./projects/demo/src/environments/environment.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 488:
/*!***********************************!*\
  !*** ./projects/demo/src/main.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 7738);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2913);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(488)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map