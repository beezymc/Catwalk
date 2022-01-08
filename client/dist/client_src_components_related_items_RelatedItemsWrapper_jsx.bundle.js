"use strict";
(self["webpackChunkcatwalk"] = self["webpackChunkcatwalk"] || []).push([["client_src_components_related_items_RelatedItemsWrapper_jsx"],{

/***/ "./client/src/components/related_items/CompareItem.jsx":
/*!*************************************************************!*\
  !*** ./client/src/components/related_items/CompareItem.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _relateditems_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relateditems.module.css */ "./client/src/components/related_items/relateditems.module.css");



var CompareItem = function CompareItem(props) {
  var popupTableRows = [];
  var currentProductFeatures = props.currentProduct.features;
  var relatedItemFeatures = props.relatedItem.features;
  var featureObj = {};

  for (var i = 0; i < currentProductFeatures.length; i++) {
    featureObj[currentProductFeatures[i].feature + ': ' + currentProductFeatures[i].value] = ['C'];
  }

  for (var _i = 0; _i < relatedItemFeatures.length; _i++) {
    if (featureObj[relatedItemFeatures[_i].feature + ': ' + relatedItemFeatures[_i].value]) {
      featureObj[relatedItemFeatures[_i].feature + ': ' + relatedItemFeatures[_i].value].push('R');
    } else {
      featureObj[relatedItemFeatures[_i].feature + ': ' + relatedItemFeatures[_i].value] = ['R'];
    }
  }

  for (var key in featureObj) {
    if (featureObj[key].length === 2) {
      popupTableRows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].popupTableRows,
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u2714"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u2714")));
    } else if (featureObj[key][0] === 'C') {
      popupTableRows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].popupTableRows,
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u2714"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\xA0\xA0\xA0")));
    } else {
      popupTableRows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].popupTableRows,
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\xA0\xA0\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u2714")));
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].popupBox,
    onClick: function onClick() {
      props.togglePopup();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].popupWindow
  }, "Comparing", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].popupTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, props.currentProduct.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, props.relatedItem.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].popupTable
  }, popupTableRows)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompareItem);

/***/ }),

/***/ "./client/src/components/related_items/OutfitCarousel.jsx":
/*!****************************************************************!*\
  !*** ./client/src/components/related_items/OutfitCarousel.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _OutfitItem_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OutfitItem.jsx */ "./client/src/components/related_items/OutfitItem.jsx");
/* harmony import */ var _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relateditems.module.css */ "./client/src/components/related_items/relateditems.module.css");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./client/src/components/related_items/utils.js");







var OutfitCarousel = function OutfitCarousel(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      hideRightArrow = _useState2[0],
      setHideRightArrow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      hideLeftArrow = _useState4[0],
      setHideLeftArrow = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      outfitItems = _useState6[0],
      updateOutfitItems = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      ticking = _useState8[0],
      setTicking = _useState8[1];

  var scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var el = scrollRef.current;
    var maxScrollLeft = el.scrollWidth - el.clientWidth;

    if (el.scrollWidth !== el.clientWidth && hideRightArrow && el.scrollLeft !== maxScrollLeft) {
      setHideRightArrow(false);
    }

    if (el.scrollWidth === el.clientWidth && !hideRightArrow && el.scrollLeft === maxScrollLeft) {
      setHideRightArrow(true);
    }
  }, [outfitItems]);

  var handleNewOutfitItem = function handleNewOutfitItem() {
    var noMatch = true;

    for (var i = 0; i < outfitItems.length; i++) {
      if (outfitItems[i].key === props.currentStyle.style_id) {
        noMatch = false;
        break;
      }
    }

    if (noMatch) {
      updateOutfitItems([{
        key: props.currentStyle.style_id,
        currentProduct: props.currentProduct,
        currentProductReviews: props.currentProductReviews,
        currentProductStyles: props.currentProductStyles,
        currentStyle: props.currentStyle
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(outfitItems)));
    }
  };

  var removeItem = function removeItem(id) {
    updateOutfitItems(outfitItems.filter(function (item) {
      return item.key !== id;
    }));
    var el = scrollRef.current;

    if (el.scrollWidth === el.clientWidth) {
      setHideLeftArrow(true);
      setHideRightArrow(true);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var el = scrollRef.current;

    if (el) {
      var onWheel = function onWheel(e) {
        setTicking(false);

        if (!ticking) {
          window.requestAnimationFrame(function () {
            setTicking(false);
          });
          setTicking(true);
        }

        if (e.deltaY === 0) {
          return;
        }

        e.preventDefault();
        var newDeltaY = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.scrollAccelerator)(e.deltaY);
        el.scrollTo({
          left: el.scrollLeft + newDeltaY,
          behavior: "smooth"
        });
      };

      el.addEventListener("wheel", onWheel);
      return function () {
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!ticking) {
      handleArrows();
    }
  }, [ticking]);

  var handleArrows = function handleArrows() {
    var el = scrollRef.current;

    if (el.scrollLeft === el.scrollWidth - el.clientWidth && !hideRightArrow) {
      setHideRightArrow(true);
    }

    if (el.scrollLeft !== el.scrollWidth - el.clientWidth && hideRightArrow) {
      setHideRightArrow(false);
    }

    if (el.scrollLeft === 0 && !hideLeftArrow) {
      setHideLeftArrow(true);
    }

    if (el.scrollLeft !== 0 && hideLeftArrow) {
      setHideLeftArrow(false);
    }
  };

  var scrollCarouselLeft = function scrollCarouselLeft() {
    var el = scrollRef.current;
    el.scrollLeft += 222;
    handleArrows();
  };

  var scrollCarouselRight = function scrollCarouselRight() {
    var el = scrollRef.current;
    el.scrollLeft -= 222;
    handleArrows();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].carousel
  }, "Your Outfits", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].outfitCarousel
  }, hideLeftArrow ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].leftArrow,
    onClick: function onClick() {
      scrollCarouselRight();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("title", null, "Left Arrow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
    d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
  }))), hideLeftArrow ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].leftTransparency
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].outfitItems,
    id: "outfit-carousel",
    ref: scrollRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].innerCardAdd,
    onClick: function onClick() {
      handleNewOutfitItem();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].addOutfitText
  }, "Add New Outfit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].addOutfit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "50",
    height: "50",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
    d: "M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"
  })))), outfitItems.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_OutfitItem_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.key,
      currentProduct: item.currentProduct,
      currentProductStyles: item.currentProductStyles,
      currentProductReviews: item.currentProductReviews,
      currentStyle: item.currentStyle,
      removeItem: removeItem
    });
  })), hideRightArrow ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].rightTransparency
  }), hideRightArrow ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].rightArrow,
    onClick: function onClick() {
      scrollCarouselLeft();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("title", null, "Right Arrow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
    d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OutfitCarousel);

/***/ }),

/***/ "./client/src/components/related_items/OutfitItem.jsx":
/*!************************************************************!*\
  !*** ./client/src/components/related_items/OutfitItem.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relateditems.module.css */ "./client/src/components/related_items/relateditems.module.css");
/* harmony import */ var _StarRating_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StarRating.jsx */ "./client/src/components/related_items/StarRating.jsx");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./client/src/components/related_items/utils.js");






var OutfitItem = function OutfitItem(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      photo = _useState2[0],
      setPhoto = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.currentProduct.category),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      category = _useState4[0],
      setCategory = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      rating = _useState6[0],
      setRating = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.currentProduct.name),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      name = _useState8[0],
      setName = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      price = _useState10[0],
      setPrice = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.currentStyle.style_id),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
      id = _useState12[0],
      setId = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var currentProductRatings = props.currentProductReviews.ratings;
    setRating((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getAverageRating)(currentProductRatings));
    setPhoto(props.currentStyle.photos[0].thumbnail_url || 'https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1');
    setPrice(props.currentStyle.sale_price ? [props.currentStyle.sale_price, props.currentStyle.original_price] : props.currentStyle.original_price);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].cornerSymbol,
    onClick: function onClick() {
      props.removeItem(id);
    }
  }, "X"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].innerCard
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].imageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: photo
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].category
  }, category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].name
  }, name), price.length === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].price
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].salePrice
  }, price[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].originalPrice
  }, price[1])) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].price
  }, price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].reviewStars
  }, rating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_StarRating_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rating: rating
  }) : '')));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OutfitItem);

/***/ }),

/***/ "./client/src/components/related_items/RelatedItem.jsx":
/*!*************************************************************!*\
  !*** ./client/src/components/related_items/RelatedItem.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relateditems.module.css */ "./client/src/components/related_items/relateditems.module.css");
/* harmony import */ var _StarRating_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StarRating.jsx */ "./client/src/components/related_items/StarRating.jsx");
/* harmony import */ var _CompareItem_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CompareItem.jsx */ "./client/src/components/related_items/CompareItem.jsx");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./client/src/components/related_items/utils.js");








var RelatedItem = function RelatedItem(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var togglePopup = function togglePopup() {
    setIsOpen(!isOpen);
  };

  if (props.relatedItem && props.relatedStyle && props.relatedItemReview && props.currentProduct) {
    var relatedItem = props.relatedItem.data;
    var relatedStyle = props.relatedStyle.data.results[0];
    var relatedRatings = props.relatedItemReview.data.ratings;
    var rating = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.getAverageRating)(relatedRatings);
    var photo = relatedStyle.photos[0].thumbnail_url || 'https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1';
    var category = relatedItem.category;
    var name = relatedItem.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CompareItem_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      relatedItem: relatedItem,
      currentProduct: props.currentProduct,
      togglePopup: togglePopup
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].cornerSymbol,
      onClick: togglePopup
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1",
      id: "Capa_1",
      x: "0px",
      y: "0px",
      width: "15px",
      height: "15px",
      viewBox: "0 0 36.09 40.09"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
      d: "M36.042,13.909c-0.123-0.377-0.456-0.646-0.85-0.688l-11.549-1.172L18.96,1.43c-0.16-0.36-0.519-0.596-0.915-0.596   s-0.755,0.234-0.915,0.598L12.446,12.05L0.899,13.221c-0.394,0.04-0.728,0.312-0.85,0.688c-0.123,0.377-0.011,0.791,0.285,1.055   l8.652,7.738L6.533,34.045c-0.083,0.387,0.069,0.787,0.39,1.02c0.175,0.127,0.381,0.191,0.588,0.191   c0.173,0,0.347-0.045,0.503-0.137l10.032-5.84l10.03,5.84c0.342,0.197,0.77,0.178,1.091-0.059c0.32-0.229,0.474-0.633,0.391-1.02   l-2.453-11.344l8.653-7.737C36.052,14.699,36.165,14.285,36.042,13.909z M25.336,21.598c-0.268,0.24-0.387,0.605-0.311,0.957   l2.097,9.695l-8.574-4.99c-0.311-0.182-0.695-0.182-1.006,0l-8.576,4.99l2.097-9.695c0.076-0.352-0.043-0.717-0.311-0.957   l-7.396-6.613l9.87-1.002c0.358-0.035,0.668-0.264,0.814-0.592l4.004-9.077l4.003,9.077c0.146,0.328,0.456,0.557,0.814,0.592   l9.87,1.002L25.336,21.598z"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].innerCard,
      onClick: function onClick() {
        props.handleProductInit(relatedItem.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
      to: "/product/".concat(relatedItem.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].imageContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
      src: photo
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].category
    }, category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].name
    }, name), relatedStyle.sale_price ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].price
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].salePrice
    }, relatedStyle.sale_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].originalPrice
    }, relatedStyle.original_price)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].price
    }, relatedStyle.original_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].reviewStars
    }, rating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_StarRating_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      rating: rating
    }) : ''))));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, "Loading.");
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedItem);

/***/ }),

/***/ "./client/src/components/related_items/RelatedItemCarousel.jsx":
/*!*********************************************************************!*\
  !*** ./client/src/components/related_items/RelatedItemCarousel.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RelatedItem_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RelatedItem.jsx */ "./client/src/components/related_items/RelatedItem.jsx");
/* harmony import */ var _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relateditems.module.css */ "./client/src/components/related_items/relateditems.module.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./client/src/components/related_items/utils.js");








var RelatedItemCarousel = function RelatedItemCarousel(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      hideRightArrow = _useState2[0],
      setHideRightArrow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      hideLeftArrow = _useState4[0],
      setHideLeftArrow = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      relatedItems = _useState8[0],
      setRelatedItems = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      relatedReviews = _useState10[0],
      setRelatedReviews = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
      relatedStyles = _useState12[0],
      setRelatedStyles = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState13, 2),
      relatedItemDivs = _useState14[0],
      setRelatedItemDivs = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState15, 2),
      ticking = _useState16[0],
      setTicking = _useState16[1];

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)(),
      productId = _useParams.productId;

  var scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/products/?product_id=".concat(productId, "&type=related")).then(function (related) {
      var relatedItemsPromises = [];
      var relatedReviewsPromises = [];
      var relatedStylesPromises = [];

      for (var i = 0; i < related.data.length; i++) {
        relatedItemsPromises.push(axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/products/?product_id=".concat(related.data[i])));
        relatedReviewsPromises.push(axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/reviews/meta/?product_id=".concat(related.data[i])));
        relatedStylesPromises.push(axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/styles/?product_id=".concat(related.data[i])));
      }

      Promise.all(relatedItemsPromises).then(function (itemsResults) {
        setRelatedItems(itemsResults);
        Promise.all(relatedReviewsPromises).then(function (reviewsResults) {
          setRelatedReviews(reviewsResults);
          Promise.all(relatedStylesPromises).then(function (stylesResults) {
            setRelatedStyles(stylesResults);
            var divArr = [];

            for (var _i = 0; _i < itemsResults.length; _i++) {
              divArr.push({
                key: _i,
                relatedItem: itemsResults[_i],
                relatedStyle: stylesResults[_i],
                relatedItemReview: reviewsResults[_i]
              });
            }

            setRelatedItemDivs(divArr);
            var el = scrollRef.current;
            el.scrollLeft = 0;
            setHideLeftArrow(true);

            if (divArr.length > 0 && el.scrollLeft === el.scrollWidth - el.clientWidth && !hideRightArrow) {
              setHideRightArrow(true);
            }

            if (divArr.length > 0 && el.scrollLeft !== el.scrollWidth - el.clientWidth && hideRightArrow) {
              setHideRightArrow(false);
            }
          })["catch"](function (error) {
            console.log(error);
            setError(true);
          });
        })["catch"](function (error) {
          console.log(error);
          setError(true);
        });
      })["catch"](function (error) {
        console.log(error);
        setError(true);
      });
    })["catch"](function (error) {
      console.log(error);
      setError(true);
    });
  }, [props.currentProduct]); // useEffect(() => {
  //   axios.get(`/api/related/?product_id=${productId}&type=related`)
  //     .then((related) => {
  //       console.log(related.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(true);
  //     });
  // }, [props.currentProduct]);

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var el = scrollRef.current;

    if (el) {
      var onWheel = function onWheel(e) {
        setTicking(false);

        if (!ticking) {
          window.requestAnimationFrame(function () {
            setTicking(false);
          });
          setTicking(true);
        }

        if (e.deltaY === 0) {
          return;
        }

        e.preventDefault();
        var newDeltaY = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.scrollAccelerator)(e.deltaY);
        el.scrollTo({
          left: el.scrollLeft + newDeltaY,
          behavior: "smooth"
        });
      };

      el.addEventListener("wheel", onWheel);
      return function () {
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!ticking) {
      handleArrows();
    }
  }, [ticking]);

  var handleArrows = function handleArrows() {
    var el = scrollRef.current;

    if (el) {
      if (el.scrollLeft === el.scrollWidth - el.clientWidth && !hideRightArrow) {
        setHideRightArrow(true);
      }

      if (el.scrollLeft !== el.scrollWidth - el.clientWidth && hideRightArrow) {
        setHideRightArrow(false);
      }

      if (el.scrollLeft === 0 && !hideLeftArrow) {
        setHideLeftArrow(true);
      }

      if (el.scrollLeft !== 0 && hideLeftArrow) {
        setHideLeftArrow(false);
      }
    }
  };

  var scrollCarouselLeft = function scrollCarouselLeft() {
    var el = scrollRef.current;
    el.scrollLeft += 222;
    handleArrows();
  };

  var scrollCarouselRight = function scrollCarouselRight() {
    var el = scrollRef.current;
    el.scrollLeft -= 222;
    handleArrows();
  };

  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].carousel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].relatedItemsCarousel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].relatedItems,
      id: "related-items-carousel",
      ref: scrollRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].noItems
    }, "Error retrieving related items. Please try again later."))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].carousel
  }, "Related Products", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].relatedItemsCarousel
  }, hideLeftArrow ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].leftArrow,
    onClick: function onClick() {
      scrollCarouselRight();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
  }))), hideLeftArrow ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].leftTransparency
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].relatedItems,
    id: "related-items-carousel",
    ref: scrollRef
  }, relatedItemDivs.length > 0 ? relatedItemDivs.map(function (relatedItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedItem_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: relatedItem.key,
      relatedItem: relatedItem.relatedItem,
      currentProduct: props.currentProduct,
      relatedStyle: relatedItem.relatedStyle,
      relatedItemReview: relatedItem.relatedItemReview,
      handleProductInit: props.handleProductInit
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].noItems
  }, "No related products found.")), hideRightArrow ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].rightTransparency
  }), hideRightArrow ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].rightArrow,
    onClick: function onClick() {
      scrollCarouselLeft();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedItemCarousel);

/***/ }),

/***/ "./client/src/components/related_items/RelatedItemsWrapper.jsx":
/*!*********************************************************************!*\
  !*** ./client/src/components/related_items/RelatedItemsWrapper.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _RelatedItemCarousel_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelatedItemCarousel.jsx */ "./client/src/components/related_items/RelatedItemCarousel.jsx");
/* harmony import */ var _OutfitCarousel_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OutfitCarousel.jsx */ "./client/src/components/related_items/OutfitCarousel.jsx");
/* harmony import */ var _relateditems_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relateditems.module.css */ "./client/src/components/related_items/relateditems.module.css");





var RelatedItemsWrapper = function RelatedItemsWrapper(props) {
  if (Object.keys(props.currentProduct).length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].wrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg"
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _relateditems_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].wrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RelatedItemCarousel_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      currentProduct: props.currentProduct,
      handleProductInit: props.handleProductInit
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OutfitCarousel_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      currentProduct: props.currentProduct,
      currentProductStyles: props.currentProductStyles,
      currentProductReviews: props.currentProductReviews,
      currentStyle: props.currentStyle
    }));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedItemsWrapper);

/***/ }),

/***/ "./client/src/components/related_items/StarRating.jsx":
/*!************************************************************!*\
  !*** ./client/src/components/related_items/StarRating.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _relateditems_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relateditems.module.css */ "./client/src/components/related_items/relateditems.module.css");



var StarRating = function StarRating(props) {
  var starArray = [];
  var currRating = props.rating;

  for (var i = 0; i < 5; i++) {
    if (currRating === .25) {
      starArray.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16px",
        height: "16px",
        viewBox: "0 0 28 28",
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Quarter Star"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        d: "M14.8915 3.55766C14.7942 3.36044 14.6346 3.20082 14.4374 3.10349C13.9421 2.85906 13.3425 3.0624 13.0981 3.55766L10.1742 9.48206L3.63623 10.4321C3.41859 10.4637 3.21745 10.5662 3.06394 10.7237C2.67844 11.1192 2.68653 11.7523 3.08202 12.1378L7.81294 16.7493L6.69612 23.2608C6.65894 23.4776 6.69426 23.7006 6.7966 23.8952C7.0536 24.3841 7.65822 24.572 8.14707 24.315L13.9948 21.2407L19.8425 24.315C20.0372 24.4173 20.2602 24.4527 20.4769 24.4155C21.0213 24.3221 21.3868 23.8052 21.2935 23.2608L20.1767 16.7493L24.9076 12.1378C25.0651 11.9843 25.1676 11.7831 25.1992 11.5655C25.2786 11.0189 24.8999 10.5115 24.3534 10.4321L17.8154 9.48206L14.8915 3.55766ZM11 10.8778L11.1703 10.8531L13.9948 5.13L16.8193 10.8531L23.1351 11.7708L18.5649 16.2256L19.6438 22.5159L13.9948 19.546L11 21.1205V10.8778Z",
        fill: "#212121"
      })));
      currRating = 0;
    } else if (currRating === .50) {
      starArray.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16px",
        height: "16px",
        viewBox: "0 0 28 28",
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Half Star"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        d: "M14.8915 3.55766C14.7942 3.36044 14.6346 3.20082 14.4374 3.10349C13.9421 2.85906 13.3425 3.0624 13.0981 3.55766L10.1742 9.48206L3.63623 10.4321C3.41859 10.4637 3.21745 10.5662 3.06394 10.7237C2.67844 11.1192 2.68653 11.7523 3.08202 12.1378L7.81294 16.7493L6.69612 23.2608C6.65894 23.4776 6.69426 23.7006 6.7966 23.8952C7.0536 24.3841 7.65822 24.572 8.14707 24.315L13.9948 21.2407L19.8425 24.315C20.0372 24.4173 20.2602 24.4527 20.4769 24.4155C21.0213 24.3221 21.3868 23.8052 21.2935 23.2608L20.1767 16.7493L24.9076 12.1378C25.0651 11.9843 25.1676 11.7831 25.1992 11.5655C25.2786 11.0189 24.8999 10.5115 24.3534 10.4321L17.8154 9.48206L14.8915 3.55766ZM14 19.5487V5.14053L16.8193 10.8531L23.1351 11.7708L18.5649 16.2256L19.6438 22.5159L14 19.5487Z",
        fill: "#212121"
      })));
      currRating = 0;
    } else if (currRating === .75) {
      starArray.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16px",
        height: "16px",
        viewBox: "0 0 28 28",
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Three Quarter Star"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        d: "M13.5524 3.10349C13.3552 3.20082 13.1955 3.36044 13.0982 3.55766L10.1743 9.48206L3.63637 10.4321C3.08983 10.5115 2.71113 11.0189 2.79055 11.5655C2.82218 11.7831 2.92466 11.9843 3.08215 12.1378L7.81306 16.7493L6.69625 23.2608C6.60289 23.8052 6.96847 24.3221 7.51281 24.4155C7.5399 24.4201 7.5671 24.4236 7.59432 24.426C7.78487 24.4428 7.97687 24.4046 8.1472 24.315L13.9949 21.2407L19.8427 24.315C19.9038 24.3471 19.9667 24.3723 20.0305 24.3908C20.4772 24.5203 20.9683 24.323 21.1931 23.8952C21.2059 23.8709 21.2177 23.8461 21.2284 23.821C21.3032 23.6449 21.3261 23.4505 21.2936 23.2609C21.2936 23.2608 21.2936 23.2609 21.2936 23.2609L20.1768 16.7493L24.9077 12.1378C24.9572 12.0896 25.0005 12.0375 25.0379 11.9826C25.2991 11.5977 25.2631 11.0697 24.9258 10.7237C24.7723 10.5662 24.5711 10.4637 24.3535 10.4321L17.8155 9.48206L14.8917 3.55766C14.7174 3.20459 14.3627 2.99989 13.9939 3C13.8454 3.00004 13.6946 3.03331 13.5524 3.10349ZM16.9897 21.1205V10.8778L23.1352 11.7708L18.5651 16.2256L19.644 22.5159L16.9897 21.1205Z",
        fill: "#212121"
      })));
      currRating = 0;
    } else if (currRating === 0) {
      starArray.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        id: "Capa_1",
        x: "0px",
        y: "0px",
        width: "15px",
        height: "15px",
        viewBox: "0 0 36.09 40.09",
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Empty Star"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        d: "M36.042,13.909c-0.123-0.377-0.456-0.646-0.85-0.688l-11.549-1.172L18.96,1.43c-0.16-0.36-0.519-0.596-0.915-0.596   s-0.755,0.234-0.915,0.598L12.446,12.05L0.899,13.221c-0.394,0.04-0.728,0.312-0.85,0.688c-0.123,0.377-0.011,0.791,0.285,1.055   l8.652,7.738L6.533,34.045c-0.083,0.387,0.069,0.787,0.39,1.02c0.175,0.127,0.381,0.191,0.588,0.191   c0.173,0,0.347-0.045,0.503-0.137l10.032-5.84l10.03,5.84c0.342,0.197,0.77,0.178,1.091-0.059c0.32-0.229,0.474-0.633,0.391-1.02   l-2.453-11.344l8.653-7.737C36.052,14.699,36.165,14.285,36.042,13.909z M25.336,21.598c-0.268,0.24-0.387,0.605-0.311,0.957   l2.097,9.695l-8.574-4.99c-0.311-0.182-0.695-0.182-1.006,0l-8.576,4.99l2.097-9.695c0.076-0.352-0.043-0.717-0.311-0.957   l-7.396-6.613l9.87-1.002c0.358-0.035,0.668-0.264,0.814-0.592l4.004-9.077l4.003,9.077c0.146,0.328,0.456,0.557,0.814,0.592   l9.87,1.002L25.336,21.598z"
      })));
    } else {
      starArray.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16px",
        height: "16px",
        viewBox: "0 0 28 28",
        version: "1.1",
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Filled Star"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
        id: "ic_fluent_star_28_filled",
        fill: "#212121"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        d: "M14.4373398,3.10348696 C14.6345524,3.20081719 14.7941799,3.36044472 14.8915102,3.55765732 L17.8153782,9.48206111 L24.353346,10.4320834 C24.8998908,10.511501 25.2785723,11.0189439 25.1991547,11.5654888 C25.1675302,11.7831258 25.065043,11.9842682 24.9075593,12.1377768 L20.1766414,16.749282 L21.2934597,23.2608319 C21.3868207,23.8051684 21.0212328,24.3221243 20.4768964,24.4154853 C20.2601388,24.4526621 20.0371707,24.4173475 19.8425102,24.3150084 L13.9947741,21.2406716 L8.14703796,24.3150084 C7.65819337,24.5720092 7.05356621,24.3840627 6.79656541,23.8952181 C6.69422634,23.7005576 6.65891166,23.4775895 6.69608851,23.2608319 L7.81290673,16.749282 L3.08198882,12.1377768 C2.68650524,11.7522756 2.67841294,11.1191623 3.06391415,10.7236788 C3.21742275,10.5661951 3.41856517,10.4637079 3.6362022,10.4320834 L10.1741699,9.48206111 L13.098038,3.55765732 C13.3424603,3.06240366 13.9420861,2.85906466 14.4373398,3.10348696 Z",
        id: "\uD83C\uDFA8-Color"
      }))));
      currRating = currRating - 1;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, starArray);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);

/***/ }),

/***/ "./client/src/components/related_items/utils.js":
/*!******************************************************!*\
  !*** ./client/src/components/related_items/utils.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollAccelerator": () => (/* binding */ scrollAccelerator),
/* harmony export */   "getAverageRating": () => (/* binding */ getAverageRating)
/* harmony export */ });
var scrollAccelerator = function scrollAccelerator(integer) {
  if (integer === 0) {
    return;
  }

  var multiplier = integer < 0 ? Math.floor(integer / 222) : Math.ceil(integer / 222);
  return 222 * multiplier;
};
var getAverageRating = function getAverageRating(ratingsObj) {
  var rating = 0;
  var denominator = 0;
  var numerator = 0;

  for (var key in ratingsObj) {
    var intKey = parseInt(key);
    var intVal = parseInt(ratingsObj[key]);
    numerator += intVal * intKey;
    denominator += intVal;
  }

  if (numerator) {
    rating = (Math.round(numerator / denominator * 4) / 4).toFixed(2);
  }

  return rating;
};

/***/ }),

/***/ "./client/src/components/related_items/relateditems.module.css":
/*!*********************************************************************!*\
  !*** ./client/src/components/related_items/relateditems.module.css ***!
  \*********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_relateditems_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./relateditems.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./client/src/components/related_items/relateditems.module.css");







var options = {};
options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_relateditems_module_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_relateditems_module_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_relateditems_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_relateditems_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./client/src/components/related_items/relateditems.module.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./client/src/components/related_items/relateditems.module.css ***!
  \***************************************************************************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".relateditems-module__wrapper___Q1PuF {\n  display: flex;\n  flex-direction: column;\n  margin-left: 20%;\n  margin-right: 20%;\n  text-transform: uppercase;\n}\n\n.relateditems-module__carousel___E41Kq {\n  display: flex;\n  flex-direction: column;\n}\n\n.relateditems-module__relatedItemsCarousel___d5Zgs {\n  display: flex;\n  flex-direction: row;\n  height: 350px;\n}\n\n.relateditems-module__relatedItems___L0HV0 {\n  display: flex;\n  flex-direction: row;\n  overflow-x: hidden;\n  scroll-snap-type: x mandatory;\n}\n\n.relateditems-module__outfitCarousel___lWXYt {\n  display: flex;\n  flex-direction: row;\n  height: 350px;\n}\n\n.relateditems-module__outfitItems___PUiiw {\n  display: flex;\n  flex-direction: row;\n  overflow-x: hidden;\n  scroll-snap-type: x mandatory;\n}\n\n.relateditems-module__innerCardAdd___CFCjR {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 300px;\n  min-width: 200px;\n  border: solid darkgray 1px;\n  margin: 10px;\n  margin-top: 22px;\n}\n\n.relateditems-module__addOutfitText___tj2kj {\n  font-size: 10px;\n  color: lightslategray;\n  align-items: center;\n  margin: auto;\n  padding-top: 5px;\n}\n\n.relateditems-module__addOutfit___pABRk {\n  margin: auto;\n  padding-bottom: 50px;\n}\n\n.relateditems-module__rightArrow___soZsB {\n  z-index: 2;\n  position: relative;\n  top: 40%;\n  right: 2%;\n  width: 12px;\n  height: 12px;\n}\n\n.relateditems-module__leftTransparency___bB7uA {\n  z-index: 1;\n  position: absolute;\n  background-image: linear-gradient(to left, transparent, #fafafa);\n  height: 350px;\n  width: 100px;\n}\n\n.relateditems-module__rightTransparency___tJ9KG {\n  z-index: 1;\n  position: absolute;\n  right: 20%;\n  background-image: linear-gradient(to right, transparent, #fafafa);\n  height: 350px;\n  width: 100px;\n}\n\n.relateditems-module__leftArrow___APhUy {\n  z-index: 2;\n  position: relative;\n  top: 40%;\n  left: 2%;\n  width: 12px;\n  height: 12px;\n}\n\n.relateditems-module__cornerSymbol___iohpJ {\n  z-index: 1;\n  position: relative;\n  top: 27px;\n  left: 185px;\n  width: 12px;\n  height: 12px;\n}\n\n.relateditems-module__innerCard___qLyUY {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 300px;\n  border: solid darkgray 1px;\n  margin: 10px;\n}\n\n.relateditems-module__imageContainer___VtDsc {\n  height: 200px;\n  width: 200px;\n}\n\n.relateditems-module__imageContainer___VtDsc img{\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n}\n\n.relateditems-module__popupBox___GHyCk {\n  position: fixed;\n  background: #00000050;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n\n.relateditems-module__popupWindow___jbL_1 {\n  position: relative;\n  width: 35%;\n  margin: 0 auto;\n  height: auto;\n  max-height: 70vh;\n  margin-top: calc(100vh - 85vh - 20px);\n  background: #fff;\n  border-radius: 4px;\n  padding: 20px;\n  border: 1px solid #999;\n  font-size: 10px;\n  color: lightslategray;\n  z-index: 2;\n}\n\n.relateditems-module__popupTitle___EkYfb {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-weight: 900;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  text-transform: none;\n}\n\n.relateditems-module__popupTable___NA8Kq {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  text-transform: none;\n}\n\n.relateditems-module__popupTableRows___SrCZQ {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: 10px\n}\n\n.relateditems-module__category___VDTDe{\n  font-size: 10px;\n  color: lightslategray;\n  padding: 2px;\n  padding-left: 8px;\n}\n\n.relateditems-module__name___gs6mk {\n  text-transform: none;\n  font-size: 12px;\n  font-weight: 900;\n  padding: 2px;\n  padding-left: 8px;\n}\n\n.relateditems-module__price___Y5i78 {\n  display: flex;\n  flex-direction: row;\n  padding: 2px;\n  font-size: 10px;\n  padding-left: 8px;\n}\n\n.relateditems-module__reviewStars___mow9R {\n  padding-left: 6px;\n}\n\n.relateditems-module__salePrice___aZYhT {\n  color: red;\n  font-weight: 900;\n  margin-right: 6px;\n}\n\n.relateditems-module__originalPrice___aXzAR {\n  text-decoration: line-through;\n}\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n.relateditems-module__noItems___akcEm {\n  text-transform: none;\n  font-size: 25px;\n  color: lightslategray;\n  align-items: center;\n  margin: auto;\n  padding-top: 5px;\n};", "",{"version":3,"sources":["webpack://./client/src/components/related_items/relateditems.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,0BAA0B;EAC1B,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;EACX,YAAY;AACd;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,gEAAgE;EAChE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,UAAU;EACV,iEAAiE;EACjE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,QAAQ;EACR,WAAW;EACX,YAAY;AACd;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,WAAW;EACX,aAAa;EACb,MAAM;EACN,OAAO;EACP,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,qCAAqC;EACrC,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B;AACF;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,wBAAwB;AAC1B;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;AAClB,CAAA","sourcesContent":[".wrapper {\n  display: flex;\n  flex-direction: column;\n  margin-left: 20%;\n  margin-right: 20%;\n  text-transform: uppercase;\n}\n\n.carousel {\n  display: flex;\n  flex-direction: column;\n}\n\n.relatedItemsCarousel {\n  display: flex;\n  flex-direction: row;\n  height: 350px;\n}\n\n.relatedItems {\n  display: flex;\n  flex-direction: row;\n  overflow-x: hidden;\n  scroll-snap-type: x mandatory;\n}\n\n.outfitCarousel {\n  display: flex;\n  flex-direction: row;\n  height: 350px;\n}\n\n.outfitItems {\n  display: flex;\n  flex-direction: row;\n  overflow-x: hidden;\n  scroll-snap-type: x mandatory;\n}\n\n.innerCardAdd {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 300px;\n  min-width: 200px;\n  border: solid darkgray 1px;\n  margin: 10px;\n  margin-top: 22px;\n}\n\n.addOutfitText {\n  font-size: 10px;\n  color: lightslategray;\n  align-items: center;\n  margin: auto;\n  padding-top: 5px;\n}\n\n.addOutfit {\n  margin: auto;\n  padding-bottom: 50px;\n}\n\n.rightArrow {\n  z-index: 2;\n  position: relative;\n  top: 40%;\n  right: 2%;\n  width: 12px;\n  height: 12px;\n}\n\n.leftTransparency {\n  z-index: 1;\n  position: absolute;\n  background-image: linear-gradient(to left, transparent, #fafafa);\n  height: 350px;\n  width: 100px;\n}\n\n.rightTransparency {\n  z-index: 1;\n  position: absolute;\n  right: 20%;\n  background-image: linear-gradient(to right, transparent, #fafafa);\n  height: 350px;\n  width: 100px;\n}\n\n.leftArrow {\n  z-index: 2;\n  position: relative;\n  top: 40%;\n  left: 2%;\n  width: 12px;\n  height: 12px;\n}\n\n.cornerSymbol {\n  z-index: 1;\n  position: relative;\n  top: 27px;\n  left: 185px;\n  width: 12px;\n  height: 12px;\n}\n\n.innerCard {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 300px;\n  border: solid darkgray 1px;\n  margin: 10px;\n}\n\n.imageContainer {\n  height: 200px;\n  width: 200px;\n}\n\n.imageContainer img{\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n}\n\n.popupBox {\n  position: fixed;\n  background: #00000050;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n\n.popupWindow {\n  position: relative;\n  width: 35%;\n  margin: 0 auto;\n  height: auto;\n  max-height: 70vh;\n  margin-top: calc(100vh - 85vh - 20px);\n  background: #fff;\n  border-radius: 4px;\n  padding: 20px;\n  border: 1px solid #999;\n  font-size: 10px;\n  color: lightslategray;\n  z-index: 2;\n}\n\n.popupTitle {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-weight: 900;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  text-transform: none;\n}\n\n.popupTable {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  text-transform: none;\n}\n\n.popupTableRows {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: 10px\n}\n\n.category{\n  font-size: 10px;\n  color: lightslategray;\n  padding: 2px;\n  padding-left: 8px;\n}\n\n.name {\n  text-transform: none;\n  font-size: 12px;\n  font-weight: 900;\n  padding: 2px;\n  padding-left: 8px;\n}\n\n.price {\n  display: flex;\n  flex-direction: row;\n  padding: 2px;\n  font-size: 10px;\n  padding-left: 8px;\n}\n\n.reviewStars {\n  padding-left: 6px;\n}\n\n.salePrice {\n  color: red;\n  font-weight: 900;\n  margin-right: 6px;\n}\n\n.originalPrice {\n  text-decoration: line-through;\n}\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n.noItems {\n  text-transform: none;\n  font-size: 25px;\n  color: lightslategray;\n  align-items: center;\n  margin: auto;\n  padding-top: 5px;\n};"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": "relateditems-module__wrapper___Q1PuF",
	"carousel": "relateditems-module__carousel___E41Kq",
	"relatedItemsCarousel": "relateditems-module__relatedItemsCarousel___d5Zgs",
	"relatedItems": "relateditems-module__relatedItems___L0HV0",
	"outfitCarousel": "relateditems-module__outfitCarousel___lWXYt",
	"outfitItems": "relateditems-module__outfitItems___PUiiw",
	"innerCardAdd": "relateditems-module__innerCardAdd___CFCjR",
	"addOutfitText": "relateditems-module__addOutfitText___tj2kj",
	"addOutfit": "relateditems-module__addOutfit___pABRk",
	"rightArrow": "relateditems-module__rightArrow___soZsB",
	"leftTransparency": "relateditems-module__leftTransparency___bB7uA",
	"rightTransparency": "relateditems-module__rightTransparency___tJ9KG",
	"leftArrow": "relateditems-module__leftArrow___APhUy",
	"cornerSymbol": "relateditems-module__cornerSymbol___iohpJ",
	"innerCard": "relateditems-module__innerCard___qLyUY",
	"imageContainer": "relateditems-module__imageContainer___VtDsc",
	"popupBox": "relateditems-module__popupBox___GHyCk",
	"popupWindow": "relateditems-module__popupWindow___jbL_1",
	"popupTitle": "relateditems-module__popupTitle___EkYfb",
	"popupTable": "relateditems-module__popupTable___NA8Kq",
	"popupTableRows": "relateditems-module__popupTableRows___SrCZQ",
	"category": "relateditems-module__category___VDTDe",
	"name": "relateditems-module__name___gs6mk",
	"price": "relateditems-module__price___Y5i78",
	"reviewStars": "relateditems-module__reviewStars___mow9R",
	"salePrice": "relateditems-module__salePrice___aZYhT",
	"originalPrice": "relateditems-module__originalPrice___aXzAR",
	"noItems": "relateditems-module__noItems___akcEm"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ })

}]);
//# sourceMappingURL=client_src_components_related_items_RelatedItemsWrapper_jsx.bundle.js.map