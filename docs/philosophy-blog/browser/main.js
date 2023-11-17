"use strict";
(self["webpackChunkphilosophy_blog"] = self["webpackChunkphilosophy_blog"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 159);
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/blog/blog.component */ 3189);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/profile/profile.component */ 7395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






const routes = [
// {
//   path: '',
//   redirectTo: '/home',
// },
{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  title: 'De Filo Va La Cosa'
}, {
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  title: 'De Filo Va La Cosa'
}, {
  path: 'blog/:id',
  component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__.BlogComponent,
  title: 'Post'
}, {
  path: 'profile/:id',
  component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent,
  title: 'Perfil del autor'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'philosophy-blog';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 10,
    vars: 0,
    consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["name", "description", "content", ""], ["name", "author", "content", ""], ["rel", "preconnect", "href", "https://fonts.gstatic.com"], ["href", "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap", "rel", "stylesheet"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0)(2, "meta", 1)(3, "meta", 2)(4, "meta", 3)(5, "link", 4)(6, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "De filo va la cosa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 159);
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/blog/blog.component */ 3189);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _components_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/blog-list/blog-list.component */ 2944);
/* harmony import */ var _integration_pipes_md_to_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./integration/pipes/md-to-html.pipe */ 8245);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ 7395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);










class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.provideClientHydration)()],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__.BlogComponent, _components_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_4__.BlogListComponent, _integration_pipes_md_to_html_pipe__WEBPACK_IMPORTED_MODULE_5__.MdToHtmlPipe, _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__.ProfileComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 2944:
/*!*************************************************************!*\
  !*** ./src/app/components/blog-list/blog-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogListComponent: () => (/* binding */ BlogListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _integration_services_contentful_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../integration/services/contentful.service */ 4596);


class BlogListComponent {
  ngOnInit() {}
  constructor(_contentfulService) {
    this._contentfulService = _contentfulService;
    this.page = 1;
    this.entries = [];
  }
  getNextEntries() {
    this.loading(false);
    this._contentfulService.getTenEntries((this.page - 1) * 10).subscribe(data => {
      this.loading(true);
      this.entries = data.items;
      // console.log(this.entries);
    });
  }

  changePage(pageNumber) {
    this.page = pageNumber;
    this.getNextEntries();
  }
  loading(on) {
    on ? $('#js-preloader').addClass('loaded') : $('#js-preloader').removeClass('loaded');
  }
  static #_ = this.ɵfac = function BlogListComponent_Factory(t) {
    return new (t || BlogListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_integration_services_contentful_service__WEBPACK_IMPORTED_MODULE_0__.ContentfulService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BlogListComponent,
    selectors: [["app-blog-list"]],
    decls: 0,
    vars: 0,
    template: function BlogListComponent_Template(rf, ctx) {},
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3189:
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogComponent: () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @contentful/rich-text-html-renderer */ 425);
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @contentful/rich-text-types */ 3447);
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _integration_classes_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../integration/classes/post */ 4985);
/* harmony import */ var _integration_classes_featuredImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../integration/classes/featuredImage */ 9355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _integration_services_contentful_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../integration/services/contentful.service */ 4596);
/* harmony import */ var src_app_integration_services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/integration/services/image.service */ 6584);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _integration_pipes_md_to_html_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../integration/pipes/md-to-html.pipe */ 8245);










const _c0 = () => ["/"];
class BlogComponent {
  constructor(route, contentfulService, imageService) {
    this.route = route;
    this.contentfulService = contentfulService;
    this.imageService = imageService;
    this.post = new _integration_classes_post__WEBPACK_IMPORTED_MODULE_2__.Post('', '', new _integration_classes_featuredImage__WEBPACK_IMPORTED_MODULE_3__.FeaturedImage('', '', ''), '', '', '', new Date(), false);
  }
  ngOnInit() {
    // this.contentfulService.test();
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.contentfulService.getEntryByUrl(id).subscribe(data => {
        let entry = data.items[0];
        console.log(entry);
        console.log(entry.fields['content']);
        entry.fields['tittle'] != null ? this.post.$tittle = String(entry.fields['tittle']) : this.post.$tittle = "";
        entry.fields['urlHandler'] != null ? this.post.$urlHandler = String(entry.fields['urlHandler']) : this.post.$urlHandler = "";
        entry.fields['featuredImage'] != null ? this.post.$featuredImage = this.imageService.createImage(entry.fields['featuredImage']) : new _integration_classes_featuredImage__WEBPACK_IMPORTED_MODULE_3__.FeaturedImage('', '', '');
        entry.fields['summary'] != null ? this.post.$summary = String(entry.fields['summary']) : this.post.$summary = "";
        entry.fields['content'] != null ? this.post.$content = this._returnHtmlFromRichText(entry.fields['content']) : this.post.$content = "";
        entry.fields['author'] != null ? this.post.$author = String(entry.fields['author']) : this.post.$author = "";
        entry.fields['updatedDate'] != null ? this.post.$updatedDate = new Date(String(entry.fields['updatedDate'])) : this.post.$updatedDate = new Date();
        entry.fields['visible'] != null ? this.post.$visible = Boolean(String(entry.fields['visible'])) : this.post.$visible = false;
        $('#js-preloader').addClass('loaded');
      });
    });
  }
  _returnHtmlFromRichText(richText) {
    const options = {
      renderNode: {
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.EMBEDDED_ASSET]: ({
          data: {
            target: {
              fields
            }
          }
        }) => `<p class='asset-container'>
          <img class='post-image' src="${fields.file.url}" alt="${fields.title}"
           height=${fields.file.details.image.height} width=${fields.file.details.image.width}/>
           <small class='subtext'>${fields.description}</small>
           </p>`,
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.HEADING_1]: (node, next) => `<h2 class='titulo'> ${next(node.content)} </h2>`,
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.HEADING_2]: (node, next) => `<h3> ${next(node.content)} </h3>`,
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.HEADING_3]: (node, next) => `<h4> ${next(node.content)} </h4>`,
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.HEADING_4]: (node, next) => `<h5> ${next(node.content)} </h5>`,
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.HEADING_5]: (node, next) => `<h6> ${next(node.content)} </h6>`,
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.HEADING_6]: (node, next) => `<h6> ${next(node.content)} </h6>`
      }
    };
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return (0,_contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_0__.documentToHtmlString)(richText, options);
  }
  static #_ = this.ɵfac = function BlogComponent_Factory(t) {
    return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_integration_services_contentful_service__WEBPACK_IMPORTED_MODULE_4__.ContentfulService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_integration_services_image_service__WEBPACK_IMPORTED_MODULE_5__.ImageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: BlogComponent,
    selectors: [["app-blog"]],
    decls: 64,
    vars: 15,
    consts: [["id", "js-preloader", 1, "js-preloader"], [1, "preloader-inner"], [1, "dot"], [1, "dots"], ["data-wow-duration", "0.75s", "data-wow-delay", "0s", 1, "header-area", "header-sticky", "wow", "slideInDown"], [1, "container"], [1, "row"], [1, "col-12"], [1, "main-nav"], [1, "logo", 3, "routerLink"], [1, "nav"], [1, "scroll-to-section"], [3, "routerLink"], ["href", "#blog", 1, "active"], [1, "main-red-button"], ["href", "#contact"], [1, "menu-trigger"], ["id", "top", "data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "main-banner", "wow", "fadeIn"], [1, "col-lg-12"], [1, "col-lg-10", "align-self-center"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "left-content", "header-text", "wow", "fadeInLeft"], [3, "src", "alt"], [1, "post-tittle"], [1, "author"], [1, "content", 3, "innerHTML"], ["id", "about", 1, "about-us", "section"], [1, "col-lg-4"], ["data-wow-duration", "1s", "data-wow-delay", "0.2s", 1, "left-image", "wow", "fadeIn"], ["src", "assets/images/about-left-image.png", "alt", "person graphic"], [1, "col-lg-8", "align-self-center"], [1, "services"], ["data-wow-duration", "1s", "data-wow-delay", "0.25s", 1, "col-lg-12", "wow", "fadeIn"]],
    template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "body")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "span")(6, "span")(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "header", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "nav", 8)(13, "a", 9)(14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Filo");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Va");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "ul", 10)(20, "li", 11)(21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "li", 11)(24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "li", 11)(27, "div", 14)(28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Contact Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "a", 16)(31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 17)(34, "div", 5)(35, "div", 6)(36, "div", 18)(37, "div", 6)(38, "div", 19)(39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](47, "mdToHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 25)(49, "div", 5)(50, "div", 6)(51, "div", 26)(52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "footer")(57, "div", 5)(58, "div", 6)(59, "div", 31)(60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "\u00A9 Copyright 2023 Javier Lapuente Garcia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "All Rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.post.$featuredImage.$image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx.post.$featuredImage.$title);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.post.$tittle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.post.$author, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](45, 8, ctx.post.$updatedDate, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](47, 11, ctx.post.$content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _integration_pipes_md_to_html_pipe__WEBPACK_IMPORTED_MODULE_6__.MdToHtmlPipe],
    styles: ["\n\n\n\n\n\n.main-banner[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  padding: 226px 0px 0px 0px;\n  position: relative;\n  overflow: hidden;\n}\n\n.main-banner[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-image: url('baner-dec-left.png');\n  background-repeat: no-repeat;\n  position: absolute;\n  left: 0;\n  top: 100px;\n  width: 193px;\n  height: 467px;\n}\n\n.main-banner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-image: url('baner-dec-right.png');\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 0;\n  top: 100px;\n  width: 98px;\n  height: 290px;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\np.author[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 75%;\n  text-align: center;\n}\n\n  .post-image {\n  margin: auto;\n  display: flex;\n  width: unset;\n  height: unset;\n}\n\n  .subtext {\n  text-align: center;\n}\n\n  .asset-container {\n  text-align: center;\n}\n\n  h2,   h3,   h4,   h5,   h6 {\n  text-align: center;\n  margin-top: 3%;\n  margin-bottom: 2%;\n}\n\n  p {\n  margin-bottom: 2%;\n}\n\nh1.post-tittle[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n@media (max-width: 992px) {\n  .main-banner[_ngcontent-%COMP%] {\n    padding-top: 196px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    text-align: center;\n    margin-bottom: 45px;\n  }\n  .main-banner[_ngcontent-%COMP%]:after {\n    top: 76px;\n    z-index: -1;\n  }\n  .main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], .main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  #about[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n  .about-us[_ngcontent-%COMP%] {\n    position: relative;\n    background-image: none;\n    padding: 0px;\n  }\n  .about-us[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    position: absolute;\n    bottom: -220px;\n    right: 0;\n  }\n  .about-us[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .about-us[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    background: rgb(255, 77, 30);\n    background: linear-gradient(105deg, rgb(255, 77, 30) 0%, rgb(255, 44, 109) 100%);\n    padding: 30px;\n    border-radius: 20px;\n    display: inline-block;\n  }\n  .about-us[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .right-text[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .our-blog[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%] {\n    position: relative;\n    margin-right: 0px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .main-blue-button[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 0px;\n    margin-top: 30px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%] {\n    margin-bottom: 45px;\n  }\n  footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 15px 0px 30px 0px;\n  }\n    p {\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-bottom: 4%;\n  }\n}\n@media (max-width: 767px) {\n  .about-us[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%] {\n    bottom: -400px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-top: 0px;\n    padding-top: 30px;\n    border-top: 1px solid #eee;\n  }\n  .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    width: 100%;\n    margin-bottom: 15px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%]   .right-image[_ngcontent-%COMP%], .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%]   .right-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FBQTtBQU1BO0VBQ0UsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUlBOzs7OztFQUtFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0Usa0JBQUE7RUFERjtFQUlBO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBRkY7RUFLQTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBSEY7RUFNQTs7SUFFRSxzQkFBQTtFQUpGO0VBT0E7SUFDRSxlQUFBO0VBTEY7RUFRQTtJQUNFLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0VBTkY7RUFTQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsUUFBQTtFQVBGO0VBVUE7SUFDRSxrQkFBQTtFQVJGO0VBV0E7SUFDRSw0QkFBQTtJQUNBLGdGQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7RUFURjtFQVlBO0lBQ0UsZ0JBQUE7RUFWRjtFQWFBO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQVhGO0VBY0E7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQVpGO0VBZUE7SUFDRSxtQkFBQTtFQWJGO0VBZ0JBO0lBQ0UseUJBQUE7RUFkRjtFQWlCQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQWZGO0FBQ0Y7QUFrQkE7RUFDRTtJQUNFLGNBQUE7RUFoQkY7RUFtQkE7SUFDRSxnQkFBQTtFQWpCRjtFQW9CQTtJQUNFLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsMEJBQUE7RUFsQkY7RUFxQkE7SUFDRSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQW5CRjtFQXNCQTs7SUFFRSxXQUFBO0VBcEJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkJhbm5lciBTdHlsZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcbiovXHJcblxyXG4ubWFpbi1iYW5uZXIge1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBhZGRpbmc6IDIyNnB4IDBweCAwcHggMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWFpbi1iYW5uZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhbmVyLWRlYy1sZWZ0LnBuZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDEwMHB4O1xyXG4gIHdpZHRoOiAxOTNweDtcclxuICBoZWlnaHQ6IDQ2N3B4O1xyXG59XHJcblxyXG4ubWFpbi1iYW5uZXI6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5lci1kZWMtcmlnaHQucG5nKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDEwMHB4O1xyXG4gIHdpZHRoOiA5OHB4O1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbnAuYXV0aG9yIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucG9zdC1pbWFnZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IHVuc2V0O1xyXG4gIGhlaWdodDogdW5zZXQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc3VidGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFzc2V0LWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyA6Om5nLWRlZXAgaDEsXHJcbjo6bmctZGVlcCBoMixcclxuOjpuZy1kZWVwIGgzLFxyXG46Om5nLWRlZXAgaDQsXHJcbjo6bmctZGVlcCBoNSxcclxuOjpuZy1kZWVwIGg2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuaDEucG9zdC10aXR0bGV7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLm1haW4tYmFubmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxOTZweDtcclxuICB9XHJcblxyXG4gIC5tYWluLWJhbm5lciAubGVmdC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICB9XHJcblxyXG4gIC5tYWluLWJhbm5lcjphZnRlciB7XHJcbiAgICB0b3A6IDc2cHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcblxyXG4gIC5tYWluLWJhbm5lciAubGVmdC1jb250ZW50IGZvcm0sXHJcbiAgLm1haW4tYmFubmVyIC5sZWZ0LWNvbnRlbnQgZm9ybSBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI2Fib3V0IHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcblxyXG4gIC5hYm91dC11cyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LXVzIC5sZWZ0LWltYWdlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMjIwcHg7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5hYm91dC11cyAuc2VydmljZXMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LXVzIC5zZXJ2aWNlcyAuaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCA3NywgMzApO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEwNWRlZywgcmdiYSgyNTUsIDc3LCAzMCwgMSkgMCUsIHJnYmEoMjU1LCA0NCwgMTA5LCAxKSAxMDAlKTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LXVzIC5zZXJ2aWNlcyAuaXRlbSAucmlnaHQtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLm91ci1ibG9nIC5sZWZ0LWltYWdlIC5pbmZvIC5pbm5lci1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLm91ci1ibG9nIC5sZWZ0LWltYWdlIC5pbmZvIC5tYWluLWJsdWUtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5vdXItYmxvZyAubGVmdC1pbWFnZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHAge1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAzMHB4IDBweDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCBwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuYWJvdXQtdXMgLmxlZnQtaW1hZ2Uge1xyXG4gICAgYm90dG9tOiAtNDAwcHg7XHJcbiAgfVxyXG5cclxuICAub3VyLWJsb2cgLnJpZ2h0LWxpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIC5vdXItYmxvZyAucmlnaHQtbGlzdCB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gIH1cclxuXHJcbiAgLm91ci1ibG9nIC5yaWdodC1saXN0IC5sZWZ0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAub3VyLWJsb2cgLnJpZ2h0LWxpc3QgLnJpZ2h0LWltYWdlLFxyXG4gIC5vdXItYmxvZyAucmlnaHQtbGlzdCAucmlnaHQtaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 159:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _integration_classes_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../integration/classes/mail */ 7954);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _integration_services_contentful_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../integration/services/contentful.service */ 4596);
/* harmony import */ var _integration_services_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../integration/services/email.service */ 1974);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);








const _c0 = a1 => ["/blog", a1];
function HomeComponent_div_105_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68)(1, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 71)(4, "div", 72)(5, "ul")(6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 69)(17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 55)(22, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Leer mas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, ctx_r1.posts[0].fields.urlHandler));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r1.posts[0].fields.featuredImage.fields.file.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", ctx_r1.posts[0].fields.featuredImage.fields.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 10, ctx_r1.posts[0].fields.updatedDate, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.posts[0].fields.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.posts[0].fields.tags[0], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c0, ctx_r1.posts[0].fields.urlHandler));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.posts[0].fields.tittle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.posts[0].fields.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c0, ctx_r1.posts[0].fields.urlHandler));
  }
}
function HomeComponent_div_105_li_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "div", 77)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 69)(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 78)(12, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 6, ctx_r2.posts[1].fields.updatedDate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx_r2.posts[1].fields.urlHandler));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.posts[1].fields.tittle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.posts[1].fields.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, ctx_r2.posts[1].fields.urlHandler));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r2.posts[1].fields.featuredImage.fields.file.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function HomeComponent_div_105_li_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "div", 77)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 69)(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 78)(12, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 6, ctx_r3.posts[2].fields.updatedDate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx_r3.posts[2].fields.urlHandler));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.posts[2].fields.tittle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.posts[2].fields.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, ctx_r3.posts[2].fields.urlHandler));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r3.posts[2].fields.featuredImage.fields.file.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function HomeComponent_div_105_li_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "div", 77)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 69)(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 78)(12, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 6, ctx_r4.posts[3].fields.updatedDate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx_r4.posts[3].fields.urlHandler));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.posts[3].fields.tittle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.posts[3].fields.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, ctx_r4.posts[3].fields.urlHandler));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r4.posts[3].fields.featuredImage.fields.file.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function HomeComponent_div_105_li_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 77)(2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 60)(3, "div", 48)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Echa un ojo a las ultimas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "publicaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " posteadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 61)(11, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 13)(14, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, HomeComponent_div_105_div_15_Template, 24, 19, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 64)(17, "div", 66)(18, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, HomeComponent_div_105_li_19_Template, 14, 13, "li", 67)(20, HomeComponent_div_105_li_20_Template, 14, 13, "li", 67)(21, HomeComponent_div_105_li_21_Template, 14, 13, "li", 67)(22, HomeComponent_div_105_li_22_Template, 3, 0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.posts[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.posts[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.posts[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.posts[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.posts[3]);
  }
}
class HomeComponent {
  constructor(contentfulService, mailService, viewPortScroller) {
    this.contentfulService = contentfulService;
    this.mailService = mailService;
    this.viewPortScroller = viewPortScroller;
    // blogPosts$ : Observable<any> | undefined;
    this.posts = [];
    this.mail = new _integration_classes_mail__WEBPACK_IMPORTED_MODULE_0__.Mail();
    this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.mail.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
    this.surNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.mail.surName);
    this.messageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.mail.body, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
    this.mailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.mail.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]);
    this.mailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      nameFormControl: this.nameFormControl,
      surNameFormControl: this.surNameFormControl,
      messageFormControl: this.messageFormControl,
      mailFormControl: this.mailFormControl
    });
  }
  ngOnInit() {
    this.contentfulService.getLatestEntries().subscribe(data => {
      this.loading(true);
      this.posts = data.items;
      console.log(this.posts);
    });
    // Menu Dropdown Toggle
    if ($('.menu-trigger').length) {
      $(".menu-trigger").on('click', function () {
        let elem = $(".menu-trigger");
        $(elem).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
      });
    }
  }
  sendMail() {
    this.loading(false);
    if (this.mailForm.valid) {
      // console.log(this.mailForm.value);
      this.mailService.sendEmail(this.mailForm.value).then(result => {
        // console.log(result.text);
        this.mail = new _integration_classes_mail__WEBPACK_IMPORTED_MODULE_0__.Mail();
        this.loading(true);
      }, error => {
        // console.log(error.text);
      });
    } else {
      // console.log("error")
    }
  }
  scrollTo(id) {
    this.viewPortScroller.scrollToAnchor(id);
  }
  loading(on) {
    on ? $('#js-preloader').addClass('loaded') : $('#js-preloader').removeClass('loaded');
  }
  checkMail() {
    // console.log(Object.values(this.mail).every(x => x === null || x === ''));
    return Object.values(this.mail).every(x => x === null || x === '');
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_integration_services_contentful_service__WEBPACK_IMPORTED_MODULE_1__.ContentfulService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_integration_services_email_service__WEBPACK_IMPORTED_MODULE_2__.EmailService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.ViewportScroller));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 145,
    vars: 9,
    consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["name", "description", "content", ""], ["name", "author", "content", ""], ["rel", "preconnect", "href", "https://fonts.gstatic.com"], ["href", "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap", "rel", "stylesheet"], ["id", "js-preloader", 1, "js-preloader"], [1, "preloader-inner"], [1, "dot"], [1, "dots"], ["data-wow-duration", "0.75s", "data-wow-delay", "0s", 1, "header-area", "header-sticky", "wow", "slideInDown"], [1, "container"], [1, "row"], [1, "col-12"], [1, "main-nav"], ["href", "index.html", 1, "logo"], [1, "nav"], [1, "scroll-to-section"], [1, "active", 3, "click"], [3, "click"], [1, "main-red-button"], [1, "menu-trigger"], ["id", "top", "data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "main-banner", "wow", "fadeIn"], [1, "col-lg-12"], [1, "col-lg-6", "align-self-center"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "left-content", "header-text", "wow", "fadeInLeft"], [1, "col-lg-6"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "right-image", "wow", "fadeInRight"], ["src", "assets/images/hero.png", "alt", "team meeting"], ["id", "about", 1, "about-us", "section"], [1, "col-sm-12", "col-lg-4"], ["data-wow-duration", "1s", "data-wow-delay", "0.2s", 1, "left-image", "wow", "fadeIn"], ["src", "assets/images/about-left-image.png", "alt", "person graphic"], [1, "col-lg-8", "align-self-center"], [1, "services"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "item", "wow", "fadeIn"], [1, "icon"], ["src", "assets/images/service-icon-01.png", "alt", "reporting"], [1, "right-text"], ["data-wow-duration", "1s", "data-wow-delay", "0.7s", 1, "item", "wow", "fadeIn"], ["src", "assets/images/service-icon-02.png", "alt", ""], ["data-wow-duration", "1s", "data-wow-delay", "0.9s", 1, "item", "wow", "fadeIn"], ["src", "assets/images/service-icon-03.png", "alt", ""], ["id", "blog", 1, "our-blog", "section"], ["class", "container", 4, "ngIf"], ["id", "contact", 1, "contact-us", "section"], ["data-wow-duration", "0.5s", "data-wow-delay", "0.25s", 1, "col-lg-6", "align-self-center", "wow", "fadeInLeft"], [1, "section-heading"], ["data-wow-duration", "0.5s", "data-wow-delay", "0.25s", 1, "col-lg-6", "wow", "fadeInRight"], ["id", "contact"], ["type", "name", "name", "name", "id", "name", "placeholder", "Nombre", "autocomplete", "on", 3, "formControl", "value"], ["type", "text", "name", "surname", "id", "surname", "placeholder", "Apellido", "autocomplete", "on", 3, "formControl", "value"], ["type", "text", "name", "email", "id", "email", "pattern", "[^ @]*@[^ @]*", "placeholder", "Tu correo", 3, "formControl", "value"], ["name", "message", "type", "text", "id", "message", "placeholder", "Mensaje", 1, "form-control", 3, "formControl", "value"], [1, "main-blue-button"], ["id", "form-submit", 3, "click"], [1, "contact-dec"], ["src", "assets/images/contact-decoration.png", "alt", ""], ["data-wow-duration", "1s", "data-wow-delay", "0.25s", 1, "col-lg-12", "wow", "fadeIn"], ["data-wow-duration", "1s", "data-wow-delay", "0.25s", 1, "col-lg-8", "wow", "fadeInDown"], ["data-wow-duration", "1s", "data-wow-delay", "0.25s", 1, "col-lg-4", "wow", "fadeInDown"], [1, "top-dec"], ["src", "assets/images/blog-dec.png", "alt", ""], ["data-wow-duration", "1s", "data-wow-delay", "0.25s", 1, "col-lg-6", "wow", "fadeInUp"], ["class", "left-image", 4, "ngIf"], [1, "right-list"], [4, "ngIf"], [1, "left-image"], [3, "routerLink"], [3, "src", "alt"], [1, "info"], [1, "inner-content"], [1, "fa", "fa-calendar"], [1, "fa", "fa-users"], [1, "fa", "fa-folder"], [1, "post-content"], [1, "left-content", "align-self-center"], [1, "right-image"], ["alt", "", 3, "src"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3)(5, "meta", 4)(6, "link", 5)(7, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "De filosof\u00EDa va la cosa / Blog de filosof\u00EDa y actualidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "body")(11, "div", 7)(12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "span")(16, "span")(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "header", 11)(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "nav", 15)(23, "a", 16)(24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Filo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Va");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ul", 17)(30, "li", 18)(31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_31_listener() {
          return ctx.scrollTo("top");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "li", 18)(34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_34_listener() {
          return ctx.scrollTo("about");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Sobre nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "li", 18)(37, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_37_listener() {
          return ctx.scrollTo("blog");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "li", 18)(40, "div", 21)(41, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_41_listener() {
          return ctx.scrollTo("contact");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Contact Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "a", 22)(44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 23)(47, "div", 12)(48, "div", 13)(49, "div", 24)(50, "div", 13)(51, "div", 25)(52, "div", 26)(53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Bienvenido a De filosof\u00EDa va la cosa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Escribimos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "articulos filos\u00F3ficos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " de actualidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Explora las profundidades del pensamiento humano en nuestro blog de filosof\u00EDa. Descubre ideas fascinantes, reflexiones inspiradoras y debates intelectuales que te invitar\u00E1n a cuestionar el mundo que te rodea. Bienvenido a un viaje de exploraci\u00F3n filos\u00F3fica.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 27)(66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 30)(69, "div", 12)(70, "div", 13)(71, "div", 31)(72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 34)(75, "div", 35)(76, "div", 13)(77, "div", 27)(78, "div", 36)(79, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 39)(82, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Rese\u00F1as literarias");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Compartimos rese\u00F1as detalladas de obras filos\u00F3ficas, analizando las ideas clave, el estilo del autor y c\u00F3mo estas obras han influido en el pensamiento filos\u00F3fico a lo largo de la historia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 27)(87, "div", 40)(88, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 39)(91, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Opini\u00F3n de actualidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Compartimos nuestras propias reflexiones filos\u00F3ficas sobre temas contemporaneos. Queremos que nuestros lectores conozcan nuestra perspectiva \u00FAnica y generen debates interesantes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 24)(96, "div", 42)(97, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 39)(100, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Debates filos\u00F3ficos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Organizamos debates en los que discutimos temas filos\u00F3ficos o cuestiones de actualidad desde una perspectiva filos\u00F3fica.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](105, HomeComponent_div_105_Template, 23, 5, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 46)(107, "div", 12)(108, "div", 13)(109, "div", 47)(110, "div", 48)(111, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "\u00BFQuieres darnos tu opini\u00F3n? Sientete libre de enviar un mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Si quieres dar respuesta a alguno de los articulos publicados, colaborar con el blog, o simplemente comunicarte con nosotros simplemente usa el formulario aqui a la derecha.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 49)(116, "form", 50)(117, "div", 13)(118, "div", 27)(119, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](120, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 27)(122, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](123, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 24)(125, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 24)(128, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](129, "textarea", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 24)(131, "fieldset")(132, "div", 55)(133, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_133_listener() {
          return ctx.sendMail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "Enviar mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "footer")(138, "div", 12)(139, "div", 13)(140, "div", 59)(141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "\u00A9 Copyright 2023 Javier Lapuente Garcia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "All Rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.nameFormControl)("value", ctx.mail.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.surNameFormControl)("value", ctx.mail.surName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.mailFormControl)("value", ctx.mail.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.messageFormControl)("value", ctx.mail.body);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: ["html[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n.scroll-to-section[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.main-blue-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n\n\n\n\n.main-banner[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  padding: 226px 0px 120px 0px;\n  position: relative;\n  overflow: hidden;\n}\n\n.main-banner[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-image: url('baner-dec-left.png');\n  background-repeat: no-repeat;\n  position: absolute;\n  left: 0;\n  top: 100px;\n  width: 193px;\n  height: 467px;\n}\n\n.main-banner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-image: url('baner-dec-right.png');\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 0;\n  top: 100px;\n  width: 98px;\n  height: 290px;\n}\n\n.main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n  margin-right: 45px;\n}\n\n.main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 18px;\n  color: #fe3f40;\n  margin-bottom: 15px;\n}\n\n.main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 700;\n  color: #2a2a2a;\n  line-height: 72px;\n}\n\n.main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #03a4ed;\n  font-style: normal;\n}\n\n.main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fe3f40;\n}\n\n.main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\n\n.main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 470px;\n  height: 66px;\n  position: relative;\n}\n\n.main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  display: inline-block;\n  background-color: #fff;\n  font-size: 15px;\n  font-weight: 500;\n  color: #fe3f40;\n  text-transform: capitalize;\n  padding: 12px 25px;\n  border-radius: 23px;\n  letter-spacing: 0.25px;\n  outline: none;\n  border: none;\n}\n\n.main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 470px;\n  height: 66px;\n  background-color: #03a4ed;\n  border-radius: 33px;\n  border: none;\n  outline: none;\n  padding: 0px 25px;\n  color: #fff;\n  letter-spacing: 0.25px;\n  font-size: 15px;\n  font-weight: 300;\n}\n\n.main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #fff;\n}\n\n@media (max-width: 992px) {\n  .main-banner[_ngcontent-%COMP%] {\n    padding-top: 196px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    text-align: center;\n    margin-bottom: 45px;\n  }\n  .main-banner[_ngcontent-%COMP%]:after {\n    top: 76px;\n    z-index: -1;\n  }\n  .main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], .main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  #about[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n  .about-us[_ngcontent-%COMP%] {\n    position: relative;\n    background-image: none;\n    padding: 0px;\n  }\n  .about-us[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    position: absolute;\n    bottom: -220px;\n    right: 0;\n  }\n  .about-us[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .about-us[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    background: rgb(255, 77, 30);\n    background: linear-gradient(105deg, rgb(255, 77, 30) 0%, rgb(255, 44, 109) 100%);\n    padding: 30px;\n    border-radius: 20px;\n    display: inline-block;\n  }\n  .about-us[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .right-text[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .our-services[_ngcontent-%COMP%] {\n    margin-top: 200px;\n  }\n  .our-services[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    margin-bottom: 45px;\n  }\n  .our-services[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .our-services[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    text-align: center;\n  }\n  .our-portfolio[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 0px 0px 80px 0px;\n  }\n  .our-portfolio[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n  .our-blog[_ngcontent-%COMP%] {\n    margin-top: 300px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .top-dec[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .our-blog[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    text-align: center;\n    margin-bottom: 45px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%] {\n    position: relative;\n    margin-right: 0px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .main-blue-button[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 0px;\n    margin-top: 30px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%] {\n    margin-bottom: 45px;\n  }\n  .contact-us[_ngcontent-%COMP%] {\n    margin-top: 60px;\n    padding: 120px 0px;\n  }\n  .contact-us[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  form#contact[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-top: 30px;\n  }\n  form#contact[_ngcontent-%COMP%]   .contact-dec[_ngcontent-%COMP%] {\n    display: none;\n  }\n  footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 15px 0px 30px 0px;\n  }\n}\n@media (max-width: 767px) {\n  .about-us[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%] {\n    bottom: -400px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-top: 0px;\n    padding-top: 30px;\n    border-top: 1px solid #eee;\n  }\n  .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    width: 100%;\n    margin-bottom: 15px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%]   .right-image[_ngcontent-%COMP%], .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%]   .right-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .phone-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 15px;\n  }\n  .phone-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n}\n.post-content[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.left-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBOzs7O0NBQUE7QUFNQTtFQUNFLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxrQkFBQTtFQUFGO0VBR0E7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFERjtFQUlBO0lBQ0UsU0FBQTtJQUNBLFdBQUE7RUFGRjtFQUtBOztJQUVFLHNCQUFBO0VBSEY7RUFNQTtJQUNFLGVBQUE7RUFKRjtFQU9BO0lBQ0Usa0JBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7RUFMRjtFQVFBO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VBTkY7RUFTQTtJQUNFLGtCQUFBO0VBUEY7RUFVQTtJQUNFLDRCQUFBO0lBQ0EsZ0ZBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtFQVJGO0VBV0E7SUFDRSxnQkFBQTtFQVRGO0VBWUE7SUFDRSxpQkFBQTtFQVZGO0VBYUE7SUFDRSxpQkFBQTtJQUNBLG1CQUFBO0VBWEY7RUFjQTs7SUFFRSxpQkFBQTtJQUNBLGtCQUFBO0VBWkY7RUFlQTtJQUNFLHdCQUFBO0VBYkY7RUFnQkE7SUFDRSxtQkFBQTtFQWRGO0VBaUJBO0lBQ0UsaUJBQUE7RUFmRjtFQWtCQTtJQUNFLGFBQUE7RUFoQkY7RUFtQkE7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFqQkY7RUFvQkE7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VBbEJGO0VBcUJBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUFuQkY7RUFzQkE7SUFDRSxtQkFBQTtFQXBCRjtFQXVCQTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUFyQkY7RUF3QkE7SUFDRSxrQkFBQTtFQXRCRjtFQXlCQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUF2QkY7RUEwQkE7SUFDRSxhQUFBO0VBeEJGO0VBMkJBO0lBQ0UseUJBQUE7RUF6QkY7QUFDRjtBQTRCQTtFQUNFO0lBQ0UsY0FBQTtFQTFCRjtFQTZCQTtJQUNFLGdCQUFBO0VBM0JGO0VBOEJBO0lBQ0UscUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSwwQkFBQTtFQTVCRjtFQStCQTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VBN0JGO0VBZ0NBOztJQUVFLFdBQUE7RUE5QkY7RUFpQ0E7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUEvQkY7RUFrQ0E7SUFDRSxnQkFBQTtFQWhDRjtBQUNGO0FBbUNBO0VBQ0UsbUJBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsbUJBQUE7QUFqQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuLnNjcm9sbC10by1zZWN0aW9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLWJsdWUtYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQmFubmVyIFN0eWxlXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuKi9cclxuXHJcbi5tYWluLWJhbm5lciB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcGFkZGluZzogMjI2cHggMHB4IDEyMHB4IDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1haW4tYmFubmVyOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5lci1kZWMtbGVmdC5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAxMDBweDtcclxuICB3aWR0aDogMTkzcHg7XHJcbiAgaGVpZ2h0OiA0NjdweDtcclxufVxyXG5cclxuLm1haW4tYmFubmVyOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFuZXItZGVjLXJpZ2h0LnBuZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAxMDBweDtcclxuICB3aWR0aDogOThweDtcclxuICBoZWlnaHQ6IDI5MHB4O1xyXG59XHJcblxyXG4ubWFpbi1iYW5uZXIgLmxlZnQtY29udGVudCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4ubWFpbi1iYW5uZXIgLmxlZnQtY29udGVudCBoMyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICNmZTNmNDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm1haW4tYmFubmVyIC5sZWZ0LWNvbnRlbnQgaDEge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMmEyYTJhO1xyXG4gIGxpbmUtaGVpZ2h0OiA3MnB4O1xyXG59XHJcblxyXG4ubWFpbi1iYW5uZXIgLmxlZnQtY29udGVudCBoMSBlbSB7XHJcbiAgY29sb3I6ICMwM2E0ZWQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4ubWFpbi1iYW5uZXIgLmxlZnQtY29udGVudCBoMSBzcGFuIHtcclxuICBjb2xvcjogI2ZlM2Y0MDtcclxufVxyXG5cclxuLm1haW4tYmFubmVyIC5sZWZ0LWNvbnRlbnQgcCB7XHJcbiAgbWFyZ2luOiAyMHB4IDBweDtcclxufVxyXG5cclxuLm1haW4tYmFubmVyIC5sZWZ0LWNvbnRlbnQgZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB3aWR0aDogNDcwcHg7XHJcbiAgaGVpZ2h0OiA2NnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1haW4tYmFubmVyIC5sZWZ0LWNvbnRlbnQgZm9ybSBidXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNmZTNmNDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgcGFkZGluZzogMTJweCAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1haW4tYmFubmVyIC5sZWZ0LWNvbnRlbnQgZm9ybSBpbnB1dCB7XHJcbiAgd2lkdGg6IDQ3MHB4O1xyXG4gIGhlaWdodDogNjZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhNGVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMzcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4IDI1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLm1haW4tYmFubmVyIC5sZWZ0LWNvbnRlbnQgZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubWFpbi1iYW5uZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDE5NnB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tYmFubmVyIC5sZWZ0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tYmFubmVyOmFmdGVyIHtcclxuICAgIHRvcDogNzZweDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tYmFubmVyIC5sZWZ0LWNvbnRlbnQgZm9ybSxcclxuICAubWFpbi1iYW5uZXIgLmxlZnQtY29udGVudCBmb3JtIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjYWJvdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LXVzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtdXMgLmxlZnQtaW1hZ2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0yMjBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LXVzIC5zZXJ2aWNlcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtdXMgLnNlcnZpY2VzIC5pdGVtIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDc3LCAzMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTA1ZGVnLCByZ2JhKDI1NSwgNzcsIDMwLCAxKSAwJSwgcmdiYSgyNTUsIDQ0LCAxMDksIDEpIDEwMCUpO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtdXMgLnNlcnZpY2VzIC5pdGVtIC5yaWdodC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAub3VyLXNlcnZpY2VzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm91ci1zZXJ2aWNlcyAubGVmdC1pbWFnZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgfVxyXG5cclxuICAub3VyLXNlcnZpY2VzIC5zZWN0aW9uLWhlYWRpbmcgaDIsXHJcbiAgLm91ci1zZXJ2aWNlcyAuc2VjdGlvbi1oZWFkaW5nIHAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAub3VyLXBvcnRmb2xpbyAuc2VjdGlvbi1oZWFkaW5nIGgyIHtcclxuICAgIG1hcmdpbjogMHB4IDBweCA4MHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5vdXItcG9ydGZvbGlvIC5pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAub3VyLWJsb2cge1xyXG4gICAgbWFyZ2luLXRvcDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAub3VyLWJsb2cgLnRvcC1kZWMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5vdXItYmxvZyAuc2VjdGlvbi1oZWFkaW5nIGgyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICB9XHJcblxyXG4gIC5vdXItYmxvZyAubGVmdC1pbWFnZSAuaW5mbyAuaW5uZXItY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcblxyXG4gIC5vdXItYmxvZyAubGVmdC1pbWFnZSAuaW5mbyAubWFpbi1ibHVlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAub3VyLWJsb2cgLmxlZnQtaW1hZ2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LXVzIHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAxMjBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC11cyAuc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGZvcm0jY29udGFjdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIGZvcm0jY29udGFjdCAuY29udGFjdC1kZWMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIGZvb3RlciBwIHtcclxuICAgIG1hcmdpbjogMTVweCAwcHggMzBweCAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuYWJvdXQtdXMgLmxlZnQtaW1hZ2Uge1xyXG4gICAgYm90dG9tOiAtNDAwcHg7XHJcbiAgfVxyXG5cclxuICAub3VyLWJsb2cgLnJpZ2h0LWxpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIC5vdXItYmxvZyAucmlnaHQtbGlzdCB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gIH1cclxuXHJcbiAgLm91ci1ibG9nIC5yaWdodC1saXN0IC5sZWZ0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAub3VyLWJsb2cgLnJpZ2h0LWxpc3QgLnJpZ2h0LWltYWdlLFxyXG4gIC5vdXItYmxvZyAucmlnaHQtbGlzdCAucmlnaHQtaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnBob25lLWluZm8gaDQgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAucGhvbmUtaW5mbyBoNCBzcGFuIGkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5wb3N0LWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbnRlbnQgcCB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7395:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _integration_classes_author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../integration/classes/author */ 8423);
/* harmony import */ var _integration_classes_featuredImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../integration/classes/featuredImage */ 9355);
/* harmony import */ var _contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contentful/rich-text-html-renderer */ 425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _integration_services_author_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../integration/services/author.service */ 7781);
/* harmony import */ var _integration_services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../integration/services/image.service */ 6584);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _integration_pipes_md_to_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../integration/pipes/md-to-html.pipe */ 8245);









function ProfileComponent_ng_container_40_ng_container_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const sm_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](sm_r3);
  }
}
function ProfileComponent_ng_container_40_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProfileComponent_ng_container_40_ng_container_20_ng_container_1_Template, 3, 1, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.author.$socialMedia);
  }
}
function ProfileComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 34)(3, "h1", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 36)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " \u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ul")(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ProfileComponent_ng_container_40_ng_container_20_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.author.$profileImage.$image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx_r0.author.$profileImage.$title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.author.$name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.author.$id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.author.$pronouns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.author.$location);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 9, ctx_r0.author.$birthdate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.author.$socialMedia);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.author.$socialMedia);
  }
}
const _c0 = () => ["/"];
class ProfileComponent {
  constructor(route, authorService, imageService) {
    this.route = route;
    this.authorService = authorService;
    this.imageService = imageService;
    this.author = new _integration_classes_author__WEBPACK_IMPORTED_MODULE_0__.Author('', '', '', '', new _integration_classes_featuredImage__WEBPACK_IMPORTED_MODULE_1__.FeaturedImage('', '', ''), '', new Date(), []);
    console.log(route);
  }
  ngOnInit() {
    $('#js-preloader').addClass('loaded');
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.authorService.getEntryById(id).subscribe(data => {
        console.log(data);
        let entry = data.items[0];
        console.log(entry);
        entry.fields['name'] != null ? this.author.$name = String(entry.fields['name']) : this.author.$name = "";
        entry.fields['location'] != null ? this.author.$location = String(entry.fields['location']) : this.author.$location = "";
        entry.fields['profileImage'] != null ? this.author.$profileImage = this.imageService.createImage(entry.fields['profileImage']) : new _integration_classes_featuredImage__WEBPACK_IMPORTED_MODULE_1__.FeaturedImage('', '', '');
        entry.fields['id'] != null ? this.author.$id = String(entry.fields['id']) : this.author.$id = "";
        entry.fields['description'] != null ? this.author.$description = this._returnHtmlFromRichText(entry.fields['description']) : this.author.$description = "";
        entry.fields['birthdate'] != null ? this.author.$birthdate = new Date(String(entry.fields['birthdate'])) : this.author.$birthdate = new Date();
        entry.fields['pronouns'] != null ? this.author.$pronouns = String(entry.fields['pronouns']) : this.author.$pronouns = "";
        let socialMedia = entry.fields['socialMedia'];
        this.author.$socialMedia.push(socialMedia);
        console.log(entry);
        $('#js-preloader').addClass('loaded');
      });
    });
  }
  _returnHtmlFromRichText(richText) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return (0,_contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2__.documentToHtmlString)(richText);
  }
  static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
    return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_integration_services_author_service__WEBPACK_IMPORTED_MODULE_3__.AuthorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_integration_services_image_service__WEBPACK_IMPORTED_MODULE_4__.ImageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    decls: 63,
    vars: 8,
    consts: [["id", "js-preloader", 1, "js-preloader"], [1, "preloader-inner"], [1, "dot"], [1, "dots"], ["data-wow-duration", "0.75s", "data-wow-delay", "0s", 1, "header-area", "header-sticky", "wow", "slideInDown"], [1, "container"], [1, "row"], [1, "col-12"], [1, "main-nav"], [1, "logo", 3, "routerLink"], [1, "nav"], [1, "scroll-to-section"], [3, "routerLink"], ["href", "#blog", 1, "active"], [1, "main-red-button"], ["href", "#contact"], [1, "menu-trigger"], ["id", "top", "data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "main-banner", "wow", "fadeIn"], [1, "col-lg-12"], [1, "col-lg-4", "align-self-left"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "left-content", "wow", "fadeInLeft"], [4, "ngIf"], [1, "col-lg-8", "align-self-right", "border-box"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "left-content", "wow", "fadeInRight"], [1, "content-tittle"], [1, "content", 3, "innerHTML"], ["id", "about", 1, "about-us", "section"], [1, "col-lg-4"], ["data-wow-duration", "1s", "data-wow-delay", "0.2s", 1, "left-image", "wow", "fadeIn"], ["src", "assets/images/about-left-image.png", "alt", "person graphic"], [1, "col-lg-8", "align-self-center"], [1, "services"], ["data-wow-duration", "1s", "data-wow-delay", "0.25s", 1, "col-lg-12", "wow", "fadeIn"], [1, "avatar", 3, "src", "alt"], [1, "profile-container"], [1, "author-name"], [1, "author-data"], [4, "ngFor", "ngForOf"]],
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "body")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "span")(6, "span")(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "header", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "nav", 8)(13, "a", 9)(14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Filo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Va");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ul", 10)(20, "li", 11)(21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li", 11)(24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "li", 11)(27, "div", 14)(28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Contact Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "a", 16)(31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 17)(34, "div", 5)(35, "div", 6)(36, "div", 18)(37, "div", 6)(38, "div", 19)(39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, ProfileComponent_ng_container_40_Template, 21, 12, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 22)(42, "div", 23)(43, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Descripci\u00F3n del autor");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "mdToHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 26)(48, "div", 5)(49, "div", 6)(50, "div", 27)(51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "footer")(56, "div", 5)(57, "div", 6)(58, "div", 32)(59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "\u00A9 Copyright 2023 Javier Lapuente Garcia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "All Rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 4, ctx.author.$description), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _integration_pipes_md_to_html_pipe__WEBPACK_IMPORTED_MODULE_5__.MdToHtmlPipe],
    styles: ["*[_ngcontent-%COMP%] {\n  --borderWidth-thin: max(1px, 0.0625rem);\n  --borderWidth-thick: max(2px, 0.125rem);\n  --borderWidth-thicker: max(4px, 0.25rem);\n  --borderRadius-small: 0.1875rem;\n  --borderRadius-medium: 0.375rem;\n  --borderRadius-large: 0.75rem;\n  --color-canvas-default: #0d1117;\n  --color-border-default: #30363d;\n}\n\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n.scroll-to-section[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.main-blue-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n\n\n\n\n.main-banner[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  padding: 150px 0px 120px 0px;\n  position: relative;\n  overflow: hidden;\n}\n\n.main-banner[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-image: url('baner-dec-left.png');\n  background-repeat: no-repeat;\n  position: absolute;\n  left: 0;\n  top: 100px;\n  width: 193px;\n  height: 467px;\n}\n\n.main-banner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-image: url('baner-dec-right.png');\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 0;\n  top: 100px;\n  width: 98px;\n  height: 290px;\n}\n\n.main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n  margin-right: 45px;\n}\n\n@media (max-width: 992px) {\n  .main-banner[_ngcontent-%COMP%] {\n    padding-top: 196px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    text-align: center;\n    margin-bottom: 45px;\n  }\n  .main-banner[_ngcontent-%COMP%]:after {\n    top: 76px;\n    z-index: -1;\n  }\n  .main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], .main-banner[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  #about[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n  .about-us[_ngcontent-%COMP%] {\n    position: relative;\n    background-image: none;\n    padding: 0px;\n  }\n  .about-us[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    position: absolute;\n    bottom: -220px;\n    right: 0;\n  }\n  .about-us[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .about-us[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    background: rgb(255, 77, 30);\n    background: linear-gradient(105deg, rgb(255, 77, 30) 0%, rgb(255, 44, 109) 100%);\n    padding: 30px;\n    border-radius: 20px;\n    display: inline-block;\n  }\n  .about-us[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .right-text[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .our-services[_ngcontent-%COMP%] {\n    margin-top: 200px;\n  }\n  .our-services[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    margin-bottom: 45px;\n  }\n  .our-services[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .our-services[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    text-align: center;\n  }\n  .our-portfolio[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 0px 0px 80px 0px;\n  }\n  .our-portfolio[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n  .our-blog[_ngcontent-%COMP%] {\n    margin-top: 300px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .top-dec[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .our-blog[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    text-align: center;\n    margin-bottom: 45px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%] {\n    position: relative;\n    margin-right: 0px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .main-blue-button[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 0px;\n    margin-top: 30px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%] {\n    margin-bottom: 45px;\n  }\n  .contact-us[_ngcontent-%COMP%] {\n    margin-top: 60px;\n    padding: 120px 0px;\n  }\n  .contact-us[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  form#contact[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-top: 30px;\n  }\n  form#contact[_ngcontent-%COMP%]   .contact-dec[_ngcontent-%COMP%] {\n    display: none;\n  }\n  footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 15px 0px 30px 0px;\n  }\n}\n@media (max-width: 767px) {\n  .about-us[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%] {\n    bottom: -400px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-top: 0px;\n    padding-top: 30px;\n    border-top: 1px solid #eee;\n  }\n  .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    width: 100%;\n    margin-bottom: 15px;\n  }\n  .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%]   .right-image[_ngcontent-%COMP%], .our-blog[_ngcontent-%COMP%]   .right-list[_ngcontent-%COMP%]   .right-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .phone-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 15px;\n  }\n  .phone-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n}\n.post-content[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.left-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.author-name[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n\n.author-data[_ngcontent-%COMP%], .author-data[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: medium;\n  width: auto;\n  display: inline-block;\n  font-weight: normal;\n}\n\n.profile-container[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.border-box[_ngcontent-%COMP%] {\n  border-color: var(--color-border-default);\n  border-radius: var(--borderRadius-medium, 0.375rem);\n  border-style: solid;\n  border-width: var(--borderWidth-thin, max(1px, 0.0625rem));\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n\n.content-tittle[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBOzs7O0NBQUE7QUFNQTtFQUNFLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxrQkFBQTtFQUFGO0VBR0E7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFERjtFQUlBO0lBQ0UsU0FBQTtJQUNBLFdBQUE7RUFGRjtFQUtBOztJQUVFLHNCQUFBO0VBSEY7RUFNQTtJQUNFLGVBQUE7RUFKRjtFQU9BO0lBQ0Usa0JBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7RUFMRjtFQVFBO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VBTkY7RUFTQTtJQUNFLGtCQUFBO0VBUEY7RUFVQTtJQUNFLDRCQUFBO0lBQ0EsZ0ZBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtFQVJGO0VBV0E7SUFDRSxnQkFBQTtFQVRGO0VBWUE7SUFDRSxpQkFBQTtFQVZGO0VBYUE7SUFDRSxpQkFBQTtJQUNBLG1CQUFBO0VBWEY7RUFjQTs7SUFFRSxpQkFBQTtJQUNBLGtCQUFBO0VBWkY7RUFlQTtJQUNFLHdCQUFBO0VBYkY7RUFnQkE7SUFDRSxtQkFBQTtFQWRGO0VBaUJBO0lBQ0UsaUJBQUE7RUFmRjtFQWtCQTtJQUNFLGFBQUE7RUFoQkY7RUFtQkE7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFqQkY7RUFvQkE7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VBbEJGO0VBcUJBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUFuQkY7RUFzQkE7SUFDRSxtQkFBQTtFQXBCRjtFQXVCQTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUFyQkY7RUF3QkE7SUFDRSxrQkFBQTtFQXRCRjtFQXlCQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUF2QkY7RUEwQkE7SUFDRSxhQUFBO0VBeEJGO0VBMkJBO0lBQ0UseUJBQUE7RUF6QkY7QUFDRjtBQTRCQTtFQUNFO0lBQ0UsY0FBQTtFQTFCRjtFQTZCQTtJQUNFLGdCQUFBO0VBM0JGO0VBOEJBO0lBQ0UscUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSwwQkFBQTtFQTVCRjtFQStCQTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VBN0JGO0VBZ0NBOztJQUVFLFdBQUE7RUE5QkY7RUFpQ0E7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUEvQkY7RUFrQ0E7SUFDRSxnQkFBQTtFQWhDRjtBQUNGO0FBbUNBO0VBQ0UsbUJBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsbUJBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0Usa0JBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsaUJBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWpDRjs7QUFvQ0E7RUFDRSxjQUFBO0FBakNGOztBQW9DQTtFQUVFLHlDQUFBO0VBQ0EsbURBQUE7RUFDQSxtQkFBQTtFQUNBLDBEQUFBO0FBbENGOztBQXFDQTtFQUNFLGNBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsY0FBQTtBQWxDRiIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIC0tYm9yZGVyV2lkdGgtdGhpbjogbWF4KDFweCwgMC4wNjI1cmVtKTtcclxuICAtLWJvcmRlcldpZHRoLXRoaWNrOiBtYXgoMnB4LCAwLjEyNXJlbSk7XHJcbiAgLS1ib3JkZXJXaWR0aC10aGlja2VyOiBtYXgoNHB4LCAwLjI1cmVtKTtcclxuICAtLWJvcmRlclJhZGl1cy1zbWFsbDogMC4xODc1cmVtO1xyXG4gIC0tYm9yZGVyUmFkaXVzLW1lZGl1bTogMC4zNzVyZW07XHJcbiAgLS1ib3JkZXJSYWRpdXMtbGFyZ2U6IDAuNzVyZW07XHJcbiAgLS1jb2xvci1jYW52YXMtZGVmYXVsdDogIzBkMTExNztcclxuICAtLWNvbG9yLWJvcmRlci1kZWZhdWx0OiAjMzAzNjNkO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuLnNjcm9sbC10by1zZWN0aW9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLWJsdWUtYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQmFubmVyIFN0eWxlXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuKi9cclxuXHJcbi5tYWluLWJhbm5lciB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcGFkZGluZzogMTUwcHggMHB4IDEyMHB4IDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1haW4tYmFubmVyOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5lci1kZWMtbGVmdC5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAxMDBweDtcclxuICB3aWR0aDogMTkzcHg7XHJcbiAgaGVpZ2h0OiA0NjdweDtcclxufVxyXG5cclxuLm1haW4tYmFubmVyOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFuZXItZGVjLXJpZ2h0LnBuZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAxMDBweDtcclxuICB3aWR0aDogOThweDtcclxuICBoZWlnaHQ6IDI5MHB4O1xyXG59XHJcblxyXG4ubWFpbi1iYW5uZXIgLmxlZnQtY29udGVudCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubWFpbi1iYW5uZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDE5NnB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tYmFubmVyIC5sZWZ0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tYmFubmVyOmFmdGVyIHtcclxuICAgIHRvcDogNzZweDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tYmFubmVyIC5sZWZ0LWNvbnRlbnQgZm9ybSxcclxuICAubWFpbi1iYW5uZXIgLmxlZnQtY29udGVudCBmb3JtIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjYWJvdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LXVzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtdXMgLmxlZnQtaW1hZ2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0yMjBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LXVzIC5zZXJ2aWNlcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtdXMgLnNlcnZpY2VzIC5pdGVtIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDc3LCAzMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTA1ZGVnLCByZ2JhKDI1NSwgNzcsIDMwLCAxKSAwJSwgcmdiYSgyNTUsIDQ0LCAxMDksIDEpIDEwMCUpO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtdXMgLnNlcnZpY2VzIC5pdGVtIC5yaWdodC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAub3VyLXNlcnZpY2VzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm91ci1zZXJ2aWNlcyAubGVmdC1pbWFnZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgfVxyXG5cclxuICAub3VyLXNlcnZpY2VzIC5zZWN0aW9uLWhlYWRpbmcgaDIsXHJcbiAgLm91ci1zZXJ2aWNlcyAuc2VjdGlvbi1oZWFkaW5nIHAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAub3VyLXBvcnRmb2xpbyAuc2VjdGlvbi1oZWFkaW5nIGgyIHtcclxuICAgIG1hcmdpbjogMHB4IDBweCA4MHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5vdXItcG9ydGZvbGlvIC5pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAub3VyLWJsb2cge1xyXG4gICAgbWFyZ2luLXRvcDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAub3VyLWJsb2cgLnRvcC1kZWMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5vdXItYmxvZyAuc2VjdGlvbi1oZWFkaW5nIGgyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICB9XHJcblxyXG4gIC5vdXItYmxvZyAubGVmdC1pbWFnZSAuaW5mbyAuaW5uZXItY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcblxyXG4gIC5vdXItYmxvZyAubGVmdC1pbWFnZSAuaW5mbyAubWFpbi1ibHVlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAub3VyLWJsb2cgLmxlZnQtaW1hZ2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LXVzIHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAxMjBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC11cyAuc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGZvcm0jY29udGFjdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIGZvcm0jY29udGFjdCAuY29udGFjdC1kZWMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIGZvb3RlciBwIHtcclxuICAgIG1hcmdpbjogMTVweCAwcHggMzBweCAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuYWJvdXQtdXMgLmxlZnQtaW1hZ2Uge1xyXG4gICAgYm90dG9tOiAtNDAwcHg7XHJcbiAgfVxyXG5cclxuICAub3VyLWJsb2cgLnJpZ2h0LWxpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIC5vdXItYmxvZyAucmlnaHQtbGlzdCB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gIH1cclxuXHJcbiAgLm91ci1ibG9nIC5yaWdodC1saXN0IC5sZWZ0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAub3VyLWJsb2cgLnJpZ2h0LWxpc3QgLnJpZ2h0LWltYWdlLFxyXG4gIC5vdXItYmxvZyAucmlnaHQtbGlzdCAucmlnaHQtaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnBob25lLWluZm8gaDQgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAucGhvbmUtaW5mbyBoNCBzcGFuIGkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5wb3N0LWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbnRlbnQgcCB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uYXV0aG9yLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uYXV0aG9yLWRhdGEsIC5hdXRob3ItZGF0YSBoMiB7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5ib3JkZXItYm94IHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYW52YXMtZGVmYXVsdCk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXItZGVmYXVsdCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzLW1lZGl1bSwgMC4zNzVyZW0pO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB2YXIoLS1ib3JkZXJXaWR0aC10aGluLCBtYXgoMXB4LCAwLjA2MjVyZW0pKTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4uY29udGVudC10aXR0bGUge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1594:
/*!*********************************************!*\
  !*** ./src/app/environments/environment.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  space: '1ge4tjrk9qs2',
  environment: 'master' // defaults to 'master' if not set
};

/***/ }),

/***/ 8423:
/*!***********************************************!*\
  !*** ./src/app/integration/classes/author.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Author: () => (/* binding */ Author)
/* harmony export */ });
/* harmony import */ var _featuredImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./featuredImage */ 9355);

class Author {
  constructor($name, $id, $pronouns, $description, $profileImage, $location, $birthdate, $socialMedia) {
    this.name = '';
    this.id = '';
    this.pronouns = '';
    this.description = '';
    this.profileImage = new _featuredImage__WEBPACK_IMPORTED_MODULE_0__.FeaturedImage('', '', '');
    this.location = '';
    this.birthdate = new Date();
    this.socialMedia = [];
    this.name = $name;
    this.id = $id;
    this.pronouns = $pronouns;
    this.description = $description;
    this.profileImage = $profileImage;
    this.location = $location;
    this.birthdate = $birthdate;
    this.socialMedia = $socialMedia;
  }
  /**
   * Getter $name
   * @return {string }
   */
  get $name() {
    return this.name;
  }
  /**
   * Getter $id
   * @return {string }
   */
  get $id() {
    return this.id;
  }
  /**
   * Getter $pronouns
   * @return {string }
   */
  get $pronouns() {
    return this.pronouns;
  }
  /**
   * Getter $description
   * @return {string }
   */
  get $description() {
    return this.description;
  }
  /**
   * Getter $profileImage
   * @return {FeaturedImage }
   */
  get $profileImage() {
    return this.profileImage;
  }
  /**
   * Getter $location
   * @return {string }
   */
  get $location() {
    return this.location;
  }
  /**
   * Getter $birthdate
   * @return {Date }
   */
  get $birthdate() {
    return this.birthdate;
  }
  /**
   * Getter $socialMedia
   * @return {string[] }
   */
  get $socialMedia() {
    return this.socialMedia;
  }
  /**
   * Setter $name
   * @param {string } value
   */
  set $name(value) {
    this.name = value;
  }
  /**
   * Setter $id
   * @param {string } value
   */
  set $id(value) {
    this.id = value;
  }
  /**
   * Setter $pronouns
   * @param {string } value
   */
  set $pronouns(value) {
    this.pronouns = value;
  }
  /**
   * Setter $description
   * @param {string } value
   */
  set $description(value) {
    this.description = value;
  }
  /**
   * Setter $profileImage
   * @param {FeaturedImage } value
   */
  set $profileImage(value) {
    this.profileImage = value;
  }
  /**
   * Setter $location
   * @param {string } value
   */
  set $location(value) {
    this.location = value;
  }
  /**
   * Setter $birthdate
   * @param {Date } value
   */
  set $birthdate(value) {
    this.birthdate = value;
  }
  /**
   * Setter $socialMedia
   * @param {string[] } value
   */
  set $socialMedia(value) {
    this.socialMedia = value;
  }
}

/***/ }),

/***/ 9355:
/*!******************************************************!*\
  !*** ./src/app/integration/classes/featuredImage.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturedImage: () => (/* binding */ FeaturedImage)
/* harmony export */ });
class FeaturedImage {
  constructor($title, $description, $image) {
    this.title = '';
    this.description = '';
    this.image = '';
    this.title = $title;
    this.description = $description;
    this.image = $image;
  }
  /**
   * Getter $title
   * @return {string }
   */
  get $title() {
    return this.title;
  }
  /**
   * Getter $description
   * @return {string }
   */
  get $description() {
    return this.description;
  }
  /**
   * Getter $image
   * @return {string }
   */
  get $image() {
    return this.image;
  }
  /**
   * Setter $title
   * @param {string } value
   */
  set $title(value) {
    this.title = value;
  }
  /**
   * Setter $description
   * @param {string } value
   */
  set $description(value) {
    this.description = value;
  }
  /**
   * Setter $image
   * @param {string } value
   */
  set $image(value) {
    this.image = value;
  }
}

/***/ }),

/***/ 7954:
/*!*********************************************!*\
  !*** ./src/app/integration/classes/mail.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mail: () => (/* binding */ Mail)
/* harmony export */ });
class Mail {
  constructor() {
    this.name = '';
    this.surName = '';
    this.email = '';
    this.body = '';
  }
}

/***/ }),

/***/ 4985:
/*!*********************************************!*\
  !*** ./src/app/integration/classes/post.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Post: () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var _featuredImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./featuredImage */ 9355);

class Post {
  constructor($tittle, $urlHandler, $featuredImage, $summary, $content, $author, $updatedDate, $visible) {
    this.tittle = '';
    this.urlHandler = '';
    this.featuredImage = new _featuredImage__WEBPACK_IMPORTED_MODULE_0__.FeaturedImage('', '', '');
    this.summary = '';
    this.content = '';
    this.author = '';
    this.updatedDate = new Date();
    this.visible = true;
    this.tittle = $tittle;
    this.urlHandler = $urlHandler;
    this.featuredImage = $featuredImage;
    this.summary = $summary;
    this.content = $content;
    this.author = $author;
    this.updatedDate = $updatedDate;
    this.visible = $visible;
  }
  /**
   * Getter $tittle
   * @return {string }
   */
  get $tittle() {
    return this.tittle;
  }
  /**
   * Getter $urlHandler
   * @return {string }
   */
  get $urlHandler() {
    return this.urlHandler;
  }
  /**
   * Getter $featuredImage
   * @return {string }
   */
  get $featuredImage() {
    return this.featuredImage;
  }
  /**
   * Getter $summary
   * @return {string }
   */
  get $summary() {
    return this.summary;
  }
  /**
   * Getter $content
   * @return {string }
   */
  get $content() {
    return this.content;
  }
  /**
   * Getter $author
   * @return {string }
   */
  get $author() {
    return this.author;
  }
  /**
   * Getter $updatedDate
   * @return {Date }
   */
  get $updatedDate() {
    return this.updatedDate;
  }
  /**
   * Getter $visible
   * @return {boolean }
   */
  get $visible() {
    return this.visible;
  }
  /**
   * Setter $tittle
   * @param {string } value
   */
  set $tittle(value) {
    this.tittle = value;
  }
  /**
   * Setter $urlHandler
   * @param {string } value
   */
  set $urlHandler(value) {
    this.urlHandler = value;
  }
  /**
   * Setter $featuredImage
   * @param {string } value
   */
  set $featuredImage(value) {
    this.featuredImage = value;
  }
  /**
   * Setter $summary
   * @param {string } value
   */
  set $summary(value) {
    this.summary = value;
  }
  /**
   * Setter $content
   * @param {string } value
   */
  set $content(value) {
    this.content = value;
  }
  /**
   * Setter $author
   * @param {string } value
   */
  set $author(value) {
    this.author = value;
  }
  /**
   * Setter $updatedDate
   * @param {Date } value
   */
  set $updatedDate(value) {
    this.updatedDate = value;
  }
  /**
   * Setter $visible
   * @param {boolean } value
   */
  set $visible(value) {
    this.visible = value;
  }
}

/***/ }),

/***/ 29:
/*!******************************************!*\
  !*** ./src/app/integration/constants.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Constants: () => (/* binding */ Constants)
/* harmony export */ });
class Constants {
  static #_ = this.SERVICE_ID = "service_i3d4iym";
  static #_2 = this.TEMPLATE_ID = "template_9krvvjk";
  static #_3 = this.PUBLIC_KEY = "otX17U7dVVPumk7Cw";
  static #_4 = this.CONTENTFUL_ACCESS_TOKEN = "W06kssg7ZcRcTsPdb1uo7T4T82QpnUdYklZMqOINalI";
}

/***/ }),

/***/ 8245:
/*!******************************************************!*\
  !*** ./src/app/integration/pipes/md-to-html.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MdToHtmlPipe: () => (/* binding */ MdToHtmlPipe)
/* harmony export */ });
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ 740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
// import marked from 'marked';


class MdToHtmlPipe {
  transform(value) {
    if (value && value.length > 0) {
      return marked__WEBPACK_IMPORTED_MODULE_0__.marked(value);
    }
    return value;
  }
  static #_ = this.ɵfac = function MdToHtmlPipe_Factory(t) {
    return new (t || MdToHtmlPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "mdToHtml",
    type: MdToHtmlPipe,
    pure: true
  });
}

/***/ }),

/***/ 7781:
/*!********************************************************!*\
  !*** ./src/app/integration/services/author.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthorService: () => (/* binding */ AuthorService)
/* harmony export */ });
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contentful */ 4494);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/environments/environment */ 1594);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ 29);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class AuthorService {
  constructor() {
    this.client = (0,contentful__WEBPACK_IMPORTED_MODULE_0__.createClient)({
      space: src_app_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.space,
      accessToken: _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.CONTENTFUL_ACCESS_TOKEN
    });
  }
  getLatestEntries() {
    const promise = this.client.getEntries({
      "limit": 4,
      content_type: "author",
      "fields.visible": "true"
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(promise);
  }
  getEntryById(id) {
    const promise = this.client.getEntries({
      content_type: "author",
      "fields.id": id
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(promise);
  }
  static #_ = this.ɵfac = function AuthorService_Factory(t) {
    return new (t || AuthorService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AuthorService,
    factory: AuthorService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4596:
/*!************************************************************!*\
  !*** ./src/app/integration/services/contentful.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentfulService: () => (/* binding */ ContentfulService)
/* harmony export */ });
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contentful */ 4494);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 1594);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ 29);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class ContentfulService {
  constructor() {
    this.client = (0,contentful__WEBPACK_IMPORTED_MODULE_0__.createClient)({
      space: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.space,
      accessToken: _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.CONTENTFUL_ACCESS_TOKEN
    });
  }
  getAllEntries() {
    const promise = this.client.getEntries();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(promise);
  }
  getLatestEntries() {
    const promise = this.client.getEntries({
      "limit": 4,
      content_type: "blogPost",
      "fields.visible": "true",
      "fields.deleted": "false"
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(promise);
  }
  getTenEntries(entriesToSkip) {
    const promise = this.client.getEntries({
      "skip": entriesToSkip,
      "limit": 2
      // "order": "sys.createdAt"
    });

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(promise);
  }
  getEntryById(id) {
    const promise = this.client.getEntry(id);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(promise);
  }
  getEntryByUrl(url) {
    const promise = this.client.getEntries({
      content_type: "blogPost",
      "fields.urlHandler": url,
      "fields.deleted": "false"
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(promise);
  }
  test() {
    this.client.getEntries({
      content_type: "blogPost",
      "fields.author": "Javier Lapuente",
      "fields.visible": "true"
    }).then(data => console.log(data));
  }
  static #_ = this.ɵfac = function ContentfulService_Factory(t) {
    return new (t || ContentfulService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ContentfulService,
    factory: ContentfulService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1974:
/*!*******************************************************!*\
  !*** ./src/app/integration/services/email.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailService: () => (/* binding */ EmailService)
/* harmony export */ });
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emailjs/browser */ 8842);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 29);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



class EmailService {
  constructor() {}
  sendEmail(mail) {
    return _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__["default"].send(_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.SERVICE_ID, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.TEMPLATE_ID, {
      from_name: mail.name + " " + mail.surName,
      to_name: "Javier Lapuente",
      from_email: mail.email,
      to_email: "javierlapuentegarcia.portfolio@gmail.com",
      message: mail.body
    }, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.PUBLIC_KEY);
  }
  static #_ = this.ɵfac = function EmailService_Factory(t) {
    return new (t || EmailService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: EmailService,
    factory: EmailService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6584:
/*!*******************************************************!*\
  !*** ./src/app/integration/services/image.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageService: () => (/* binding */ ImageService)
/* harmony export */ });
/* harmony import */ var _classes_featuredImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/featuredImage */ 9355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ImageService {
  constructor() {}
  createImage(image) {
    let featuredImage = new _classes_featuredImage__WEBPACK_IMPORTED_MODULE_0__.FeaturedImage(image.fields.title, image.fields.description, image.fields.file.url);
    return featuredImage;
  }
  static #_ = this.ɵfac = function ImageService_Factory(t) {
    return new (t || ImageService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ImageService,
    factory: ImageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map