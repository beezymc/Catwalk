"use strict";
(self["webpackChunkcatwalk"] = self["webpackChunkcatwalk"] || []).push([["client_src_components_questions_answers_QAWrapper_jsx"],{

/***/ "./client/src/components/questions_answers/QAWrapper.jsx":
/*!***************************************************************!*\
  !*** ./client/src/components/questions_answers/QAWrapper.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _qa_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qa.module.css */ "./client/src/components/questions_answers/qa.module.css");



var QAList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "client_src_components_questions_answers_MainList_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./MainList.jsx */ "./client/src/components/questions_answers/MainList.jsx"));
});



var QAWrapper = function QAWrapper(_ref) {
  var currentProduct = _ref.currentProduct;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      id = _useState2[0],
      setId = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (currentProduct.id !== undefined) {
      setId(currentProduct.id);
    }
  }, [currentProduct.id]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _qa_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].qaContainer
    }, "LOADING...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].qaItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(QAList, {
    productId: id
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QAWrapper);

/***/ }),

/***/ "./client/src/components/questions_answers/qa.module.css":
/*!***************************************************************!*\
  !*** ./client/src/components/questions_answers/qa.module.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_qa_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./qa.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./client/src/components/questions_answers/qa.module.css");







var options = {};
options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_qa_module_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_qa_module_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_qa_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_qa_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./client/src/components/questions_answers/qa.module.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./client/src/components/questions_answers/qa.module.css ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Poppins);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n.qa-module__qaContainer___ihlpf {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nonwrap;\n  overflow-x: auto;\n  width: 90%;\n  align-items: left;\n\tpadding: 10px;\n  border-radius: 5px;\n\t/* margin: 45px auto; */\n  box-shadow: 0 1.5px 0 0 rgba(0,0,0,0.1);\n  font-size: 0.9rem;\n  font-family: 'Poppins';\n  margin-left: 3%;\n}\n\n.qa-module__qaItem___B618g {\n\tpadding: 2px;\n\tmargin: 2px;\n\tborder-radius: 3px;\n}\n\n.qa-module__qaContainerForm___R8sS2 {\n  display: flex;\n  flex-wrap: nonwrap;\n  overflow-x: auto;\n  align-items: center;\n  margin-left: 3%;\n}\n\n  .qa-module__modalmain___vAGwS {\n  width: 100vw;\n  height: 120vh;\n  z-index: 2000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0,0,0,.7);\n  padding-top: 2%;\n  transform: translateX(-100px);\n  transition: all 500ms ease-in-out;\n  }\n\n  .qa-module__modalContent___AVmv9 {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n    position: relative;\n    margin: 0 auto;\n    background-color: white;\n    max-height: 50%;\n    max-width: 40%;\n    border-radius: 10px;\n  }\n  .qa-module__link___l6PHd {\n    text-decoration: none;\n    color: gray;\n    padding: 2px 10px;\n    white-space: nowrap;\n}\n\n.qa-module__answerInfo___GlSX6{\n  text-decoration: none;\n  color: gray;\n  padding: 5px 5px 2px 2px;\n  white-space: nowrap;\n  font-size: 0.6rem;\n  display: flex;\n  margin-bottom: 10px;\n  margin-left: 5px;\n}\n\n  /*********************SEARCH************/\n  .qa-module__searchContainer___Gb6pT {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    flex-basis: 260px;\n    margin-right: 20px;\n  }\n\n  .qa-module__searchInput___JagnL {\n    height: 20px;\n    width: 100%;\n    padding: 5px 10px 5px 40px;\n    border: 0px;\n    background: url(https://i.imgur.com/lrQiTER.png) no-repeat 1%;\n    background-size: 20px;\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n\n  .qa-module__searchButton___R6xnu {\n    flex-shrink: 0;\n    width: 60px;\n    height: 30px;\n    border: none;\n    background-color: #4d4d4d;\n    color: white;\n    padding: 0px;\n  }\n\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  label {\n    font-weight: bold;\n  }\n\n  .qa-module__questionContainer___OWZEh {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n   .qa-module__answerInfo___GlSX6 {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between\n  }\n\n  .qa-module__answerLink___WJDnO {\n    font-weight: bold;\n    font-size: 0.8rem;\n    text-transform: uppercase;\n    margin-top: 7px;\n\n    border-bottom: solid 1px;\n  }\n\n.qa-module__question___R0Tdb {\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  margin-right: 5px;\n  font-weight: bold;\n}\n\n  .qa-module__answer___YY7LD{\n    font-size: 0.8rem;\n    color: #4d4d4d;\n  }\n\n  form {\n  display: flex;\n  border: 1px solid #555555;\n  padding: 20px;\n  width: 50%;\n  box-sizing: border-box;\n  margin: 0 auto;\n  }\n\n  p {\n    display: flex;\n  }\n\n  label {\n    width: 7em;\n    margin-right: .5em;\n}\n\n  .qa-module__formInput___qShtF {\n    flex: 1;\n    padding: 10px 20px;\n    box-sizing: border-box;\n  }\n\n  .qa-module__closeButton___pQxSy {\n    height: 20px;\n    width: 20px;\n    margin-bottom: 20px;\n    font-size: 13px;\n    color: #fff;\n    text-align: center;\n    background: #4d4d4d;\n    border: 0;\n    cursor: pointer;\n    margin-left: auto;\n  }\n\n  .qa-module__modalButton___jmneu {\n    height: 40px;\n    width: 25%;\n    padding: 0;\n    font-size: 13px;\n    color: #fff;\n    text-align: center;\n    background: #4d4d4d;\n    border: 0;\n    cursor: pointer;\n    margin-left: auto;\n  }\n\n  .qa-module__borderBtn___FBsLZ {\n    border: 1px gray solid;\n    padding: 15px;\n    margin: 0.3rem;\n    font-weight: bold;\n    text-transform: uppercase;\n  }", "",{"version":3,"sources":["webpack://./client/src/components/questions_answers/qa.module.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAGA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,iBAAiB;CAClB,aAAa;EACZ,kBAAkB;CACnB,uBAAuB;EACtB,uCAAuC;EACvC,iBAAiB;EACjB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,kBAAkB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;EAEE;EACA,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,gCAAgC;EAChC,eAAe;EACf,6BAA6B;EAC7B,iCAAiC;EACjC;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,cAAc;IACd,uBAAuB;IACvB,eAAe;IACf,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,qBAAqB;IACrB,WAAW;IACX,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,wBAAwB;EACxB,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;EAEE,wCAAwC;EACxC;IACE,aAAa;IACb,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,0BAA0B;IAC1B,WAAW;IACX,6DAA6D;IAC7D,qBAAqB;IACrB,qCAAqC;EACvC;;EAEA;IACE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,qBAAqB;IACrB,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;EAChC;;GAEC;IACC,aAAa;IACb,mBAAmB;IACnB;EACF;;EAEA;IACE,iBAAiB;IACjB,iBAAiB;IACjB,yBAAyB;IACzB,eAAe;;IAEf,wBAAwB;EAC1B;;AAEF;EACE,yBAAyB;EACzB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;AACnB;;EAEE;IACE,iBAAiB;IACjB,cAAc;EAChB;;EAEA;EACA,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,UAAU;EACV,sBAAsB;EACtB,cAAc;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,UAAU;IACV,kBAAkB;AACtB;;EAEE;IACE,OAAO;IACP,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,UAAU;IACV,UAAU;IACV,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,sBAAsB;IACtB,aAAa;IACb,cAAc;IACd,iBAAiB;IACjB,yBAAyB;EAC3B","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n@import url('https://fonts.googleapis.com/css?family=Poppins');\n\n.qaContainer {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nonwrap;\n  overflow-x: auto;\n  width: 90%;\n  align-items: left;\n\tpadding: 10px;\n  border-radius: 5px;\n\t/* margin: 45px auto; */\n  box-shadow: 0 1.5px 0 0 rgba(0,0,0,0.1);\n  font-size: 0.9rem;\n  font-family: 'Poppins';\n  margin-left: 3%;\n}\n\n.qaItem {\n\tpadding: 2px;\n\tmargin: 2px;\n\tborder-radius: 3px;\n}\n\n.qaContainerForm {\n  display: flex;\n  flex-wrap: nonwrap;\n  overflow-x: auto;\n  align-items: center;\n  margin-left: 3%;\n}\n\n  .modalmain {\n  width: 100vw;\n  height: 120vh;\n  z-index: 2000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0,0,0,.7);\n  padding-top: 2%;\n  transform: translateX(-100px);\n  transition: all 500ms ease-in-out;\n  }\n\n  .modalContent {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n    position: relative;\n    margin: 0 auto;\n    background-color: white;\n    max-height: 50%;\n    max-width: 40%;\n    border-radius: 10px;\n  }\n  .link {\n    text-decoration: none;\n    color: gray;\n    padding: 2px 10px;\n    white-space: nowrap;\n}\n\n.answerInfo{\n  text-decoration: none;\n  color: gray;\n  padding: 5px 5px 2px 2px;\n  white-space: nowrap;\n  font-size: 0.6rem;\n  display: flex;\n  margin-bottom: 10px;\n  margin-left: 5px;\n}\n\n  /*********************SEARCH************/\n  .searchContainer {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    flex-basis: 260px;\n    margin-right: 20px;\n  }\n\n  .searchInput {\n    height: 20px;\n    width: 100%;\n    padding: 5px 10px 5px 40px;\n    border: 0px;\n    background: url(https://i.imgur.com/lrQiTER.png) no-repeat 1%;\n    background-size: 20px;\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n\n  .searchButton {\n    flex-shrink: 0;\n    width: 60px;\n    height: 30px;\n    border: none;\n    background-color: #4d4d4d;\n    color: white;\n    padding: 0px;\n  }\n\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  label {\n    font-weight: bold;\n  }\n\n  .questionContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n   .answerInfo {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between\n  }\n\n  .answerLink {\n    font-weight: bold;\n    font-size: 0.8rem;\n    text-transform: uppercase;\n    margin-top: 7px;\n\n    border-bottom: solid 1px;\n  }\n\n.question {\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  margin-right: 5px;\n  font-weight: bold;\n}\n\n  .answer{\n    font-size: 0.8rem;\n    color: #4d4d4d;\n  }\n\n  form {\n  display: flex;\n  border: 1px solid #555555;\n  padding: 20px;\n  width: 50%;\n  box-sizing: border-box;\n  margin: 0 auto;\n  }\n\n  p {\n    display: flex;\n  }\n\n  label {\n    width: 7em;\n    margin-right: .5em;\n}\n\n  .formInput {\n    flex: 1;\n    padding: 10px 20px;\n    box-sizing: border-box;\n  }\n\n  .closeButton {\n    height: 20px;\n    width: 20px;\n    margin-bottom: 20px;\n    font-size: 13px;\n    color: #fff;\n    text-align: center;\n    background: #4d4d4d;\n    border: 0;\n    cursor: pointer;\n    margin-left: auto;\n  }\n\n  .modalButton {\n    height: 40px;\n    width: 25%;\n    padding: 0;\n    font-size: 13px;\n    color: #fff;\n    text-align: center;\n    background: #4d4d4d;\n    border: 0;\n    cursor: pointer;\n    margin-left: auto;\n  }\n\n  .borderBtn {\n    border: 1px gray solid;\n    padding: 15px;\n    margin: 0.3rem;\n    font-weight: bold;\n    text-transform: uppercase;\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"qaContainer": "qa-module__qaContainer___ihlpf",
	"qaItem": "qa-module__qaItem___B618g",
	"qaContainerForm": "qa-module__qaContainerForm___R8sS2",
	"modalmain": "qa-module__modalmain___vAGwS",
	"modalContent": "qa-module__modalContent___AVmv9",
	"link": "qa-module__link___l6PHd",
	"answerInfo": "qa-module__answerInfo___GlSX6",
	"searchContainer": "qa-module__searchContainer___Gb6pT",
	"searchInput": "qa-module__searchInput___JagnL",
	"searchButton": "qa-module__searchButton___R6xnu",
	"questionContainer": "qa-module__questionContainer___OWZEh",
	"answerLink": "qa-module__answerLink___WJDnO",
	"question": "qa-module__question___R0Tdb",
	"answer": "qa-module__answer___YY7LD",
	"formInput": "qa-module__formInput___qShtF",
	"closeButton": "qa-module__closeButton___pQxSy",
	"modalButton": "qa-module__modalButton___jmneu",
	"borderBtn": "qa-module__borderBtn___FBsLZ"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=client_src_components_questions_answers_QAWrapper_jsx.bundle.js.map