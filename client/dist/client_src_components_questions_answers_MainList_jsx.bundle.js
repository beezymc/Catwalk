"use strict";
(self["webpackChunkcatwalk"] = self["webpackChunkcatwalk"] || []).push([["client_src_components_questions_answers_MainList_jsx"],{

/***/ "./client/src/components/questions_answers/AnswersList.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/questions_answers/AnswersList.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AnswersListEntry_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnswersListEntry.jsx */ "./client/src/components/questions_answers/AnswersListEntry.jsx");
/* harmony import */ var _qa_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qa.module.css */ "./client/src/components/questions_answers/qa.module.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);






var AnswersList = function AnswersList(_ref) {
  var question_id = _ref.question_id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      shownAnswers = _useState2[0],
      setShownAnswers = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      showButton = _useState6[0],
      setShowButton = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getAnswers();
  }, []);

  var getAnswers = function getAnswers() {
    var newPage = page + 1;
    setPage(function (prev) {
      return newPage;
    });
    axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/questions/".concat(question_id, "/answers"), {
      params: {
        count: 2,
        page: "".concat(newPage)
      }
    }).then(function (data) {
      var results = data.data.results;

      if (results.length < 2) {
        setShowButton(false);
      }

      if (results.length === 0) {
        return;
      }

      var resultsAfterClick = shownAnswers.concat(results);
      var sorted = resultsAfterClick.sort(function (a, b) {
        return b['helpfulness'] - a['helpfulness'];
      });
      setShownAnswers(function (prev) {
        return sorted;
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  var handleClick = function handleClick() {
    getAnswers();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", null, " ", shownAnswers.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_AnswersListEntry_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      answer: item,
      key: "".concat(index, "-answerListKey")
    });
  }), showButton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].answerLink,
    onClick: handleClick
  }, "Load More Answers") : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswersList);

/***/ }),

/***/ "./client/src/components/questions_answers/AnswersListEntry.jsx":
/*!**********************************************************************!*\
  !*** ./client/src/components/questions_answers/AnswersListEntry.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _qa_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qa.module.css */ "./client/src/components/questions_answers/qa.module.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);





var AnswersListEntry = function AnswersListEntry(_ref) {
  var answer = _ref.answer;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(answer.helpfulness),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      answerHelpfullness = _useState2[0],
      setanswerHelpfullness = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isUpvoted = _useState4[0],
      setUpvoted = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      isReported = _useState6[0],
      setReported = _useState6[1];

  var handleClick = function handleClick() {
    setanswerHelpfullness(answerHelpfullness + 1);
    setUpvoted(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default().put("/api/answers/".concat(answer.answer_id, "/helpful"), {
      helpfulness: answerHelpfullness
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var HandleReported = function HandleReported() {
    setReported(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].answer
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].question
  }, "A:"), " ", answer.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].answerInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].answerInfo
  }, "by ", answer.answerer_name, ",", new Date(answer.date).toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }), " | Helpful? ", isUpvoted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Yes(", answerHelpfullness, ")") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    onClick: handleClick
  }, "Yes(", answerHelpfullness, ")"), " | ", isReported ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Reported") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].link,
    onClick: HandleReported
  }, "Report"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswersListEntry);

/***/ }),

/***/ "./client/src/components/questions_answers/FormBar.jsx":
/*!*************************************************************!*\
  !*** ./client/src/components/questions_answers/FormBar.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ModalQuestions_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalQuestions.jsx */ "./client/src/components/questions_answers/ModalQuestions.jsx");
/* harmony import */ var _qa_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qa.module.css */ "./client/src/components/questions_answers/qa.module.css");





var FormBar = function FormBar(_ref) {
  var productId = _ref.productId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var openModal = function openModal() {
    setShowModal(function (prev) {
      return !prev;
    });
  };

  var closeModal = function closeModal() {
    setShowModal(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].borderBtn,
    onClick: openModal
  }, "Add a question +"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ModalQuestions_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    showModal: showModal,
    setShowModal: setShowModal,
    productId: productId,
    closeModal: closeModal
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormBar);

/***/ }),

/***/ "./client/src/components/questions_answers/MainList.jsx":
/*!**************************************************************!*\
  !*** ./client/src/components/questions_answers/MainList.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _QAListEntry_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QAListEntry.jsx */ "./client/src/components/questions_answers/QAListEntry.jsx");
/* harmony import */ var _SearchBar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchBar.jsx */ "./client/src/components/questions_answers/SearchBar.jsx");
/* harmony import */ var _FormBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormBar.jsx */ "./client/src/components/questions_answers/FormBar.jsx");
/* harmony import */ var _qa_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qa.module.css */ "./client/src/components/questions_answers/qa.module.css");








var QAList = function QAList(_ref) {
  var productId = _ref.productId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      questionsData = _useState2[0],
      setQuestionData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      searchTerm = _useState4[0],
      setSearchTerm = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      searchResults = _useState6[0],
      setSearchResults = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(4),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      questionsCount = _useState8[0],
      setQuestionsCount = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      showButton = _useState10[0],
      setShowButton = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (productId) {
      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/questions', {
        params: {
          product_id: "".concat(productId),
          count: "".concat(questionsCount)
        }
      }) //go to axios github docs -> section Request Config
      .then(function (data) {
        var results = data.data.results;

        if (results.length < questionsCount) {
          setShowButton(false);
        }

        if (results.length === 0) {
          return;
        }

        setQuestionData(data.data.results);
        setSearchResults(data.data.results);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, [productId, questionsCount]);

  var handleClick = function handleClick() {
    setQuestionsCount(function (prev) {
      return prev + 2;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].list
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].qaContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_SearchBar_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: questionsData,
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
    searchResults: searchResults,
    setSearchResults: setSearchResults
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("ul", null, searchResults.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _qa_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].qaContainer,
      key: "".concat(index, "-QAlistIndex")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_QAListEntry_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: item
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].qaContainerForm
  }, showButton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].qaItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].borderBtn,
    onClick: handleClick
  }, "More answered questions")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].qaItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormBar_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    productId: productId
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QAList);

/***/ }),

/***/ "./client/src/components/questions_answers/ModalQuestions.jsx":
/*!********************************************************************!*\
  !*** ./client/src/components/questions_answers/ModalQuestions.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _qa_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qa.module.css */ "./client/src/components/questions_answers/qa.module.css");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var ModalQuestions = function ModalQuestions(_ref) {
  var showModal = _ref.showModal,
      setShowModal = _ref.setShowModal,
      productId = _ref.productId,
      closeModal = _ref.closeModal;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    question: '',
    nickname: '',
    email: ''
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var handleQuestionChange = function handleQuestionChange(event) {
    event.persist();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        question: event.target.value
      });
    });
  };

  var handleNicknameChange = function handleNicknameChange(event) {
    event.persist();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        nickname: event.target.value
      });
    });
  };

  var handleEmailChange = function handleEmailChange(event) {
    event.persist();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        email: event.target.value
      });
    });
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    console.log("sending from modal questions: ", productId);
    axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/questions/", {
      body: values.question,
      name: values.nickname,
      email: values.email,
      product_id: parseInt(productId)
    }).then(function () {
      closeModal();
      setValues(function (values) {
        return _objectSpread(_objectSpread({}, values), {}, {
          question: '',
          nickname: '',
          email: ''
        });
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, showModal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].modalmain,
    onClick: function onClick() {
      closeModal();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {
    onSubmit: handleSubmit,
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].modalContent,
    onClick: function onClick(e) {
      // do not close modal if anything inside modal content is clicked
      e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].closeButton,
    onClick: closeModal
  }, "X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", null, "Your Question*:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].formInput,
    placeholder: "Ask your question",
    maxLength: "1000",
    name: "answer",
    value: values.question,
    onChange: handleQuestionChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", null, "Your Nickname*:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].formInput,
    type: "text",
    placeholder: "Example: jackson11",
    maxLength: "60",
    name: "nickname",
    value: values.nickname,
    onChange: handleNicknameChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", null, "Your Email*:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].formInput,
    type: "email",
    placeholder: "Example: jack@email.com",
    maxLength: "60",
    name: "email",
    value: values.email,
    onChange: handleEmailChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].modalButton
  }, "Submit Question")))) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalQuestions);

/***/ }),

/***/ "./client/src/components/questions_answers/QAListEntry.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/questions_answers/QAListEntry.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _QuestionItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionItem.jsx */ "./client/src/components/questions_answers/QuestionItem.jsx");
/* harmony import */ var _AnswersList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnswersList.jsx */ "./client/src/components/questions_answers/AnswersList.jsx");
/* harmony import */ var _qa_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qa.module.css */ "./client/src/components/questions_answers/qa.module.css");
// import axios from 'axios';





var QAListEntry = function QAListEntry(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].qaItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_QuestionItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    questionInfo: item
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].qaItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AnswersList_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    question_id: item.question_id
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QAListEntry);

/***/ }),

/***/ "./client/src/components/questions_answers/QuestionItem.jsx":
/*!******************************************************************!*\
  !*** ./client/src/components/questions_answers/QuestionItem.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _modalAnswers_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalAnswers.jsx */ "./client/src/components/questions_answers/modalAnswers.jsx");
/* harmony import */ var _qa_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qa.module.css */ "./client/src/components/questions_answers/qa.module.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);






var QuestionItem = function QuestionItem(_ref) {
  var questionInfo = _ref.questionInfo;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(questionInfo.question_helpfulness),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      questionHelpfullness = _useState2[0],
      setquestionHelpfullness = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isUpvoted = _useState4[0],
      setUpvoted = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      showModal = _useState6[0],
      setShowModal = _useState6[1];

  var handleClick = function handleClick() {
    setquestionHelpfullness(questionHelpfullness + 1);
    setUpvoted(true);
    axios__WEBPACK_IMPORTED_MODULE_4___default().put("/api/questions/".concat(questionInfo.question_id, "/helpful"), {
      helpfulness: questionHelpfullness
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var openModal = function openModal() {
    setShowModal(function (prev) {
      return !prev;
    });
  };

  var closeModal = function closeModal() {
    setShowModal(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].questionContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].question
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "Q: ", questionInfo.question_body)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].link
  }, "Helpful? ", isUpvoted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Yes(", questionHelpfullness, ")") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    onClick: handleClick
  }, "Yes(", questionHelpfullness, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].link
  }, "|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    onClick: openModal,
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].link
  }, "Add Answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_modalAnswers_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    showModal: showModal,
    setShowModal: setShowModal,
    closeTimeoutMS: 2000,
    question_id: questionInfo.question_id,
    closeModal: closeModal
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionItem);

/***/ }),

/***/ "./client/src/components/questions_answers/SearchBar.jsx":
/*!***************************************************************!*\
  !*** ./client/src/components/questions_answers/SearchBar.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _qa_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qa.module.css */ "./client/src/components/questions_answers/qa.module.css");



var SearchBar = function SearchBar(_ref) {
  var data = _ref.data,
      setSearchTerm = _ref.setSearchTerm,
      searchTerm = _ref.searchTerm,
      setSearchResults = _ref.setSearchResults,
      searchResults = _ref.searchResults;

  var handleChange = function handleChange(event) {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var searchTermLowerCased = searchTerm.toString().toLowerCase();
    var filtered = searchTermLowerCased.length >= 3 ? data.filter(function (item) {
      return item.question_body.toLowerCase().includes(searchTermLowerCased);
    }) : data;
    setSearchResults(filtered);
  }, [searchTerm]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].qaItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].searchContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].searchInput,
    type: "text",
    placeholder: "Have a question? search for answer...",
    value: searchTerm,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].searchButton
  }, "Search")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

/***/ }),

/***/ "./client/src/components/questions_answers/modalAnswers.jsx":
/*!******************************************************************!*\
  !*** ./client/src/components/questions_answers/modalAnswers.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _qa_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qa.module.css */ "./client/src/components/questions_answers/qa.module.css");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var ModalAnswers = function ModalAnswers(_ref) {
  var showModal = _ref.showModal,
      setShowModal = _ref.setShowModal,
      question_id = _ref.question_id,
      closeModal = _ref.closeModal;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    answer: '',
    nickname: '',
    email: '',
    file: ''
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var handleAnswerChange = function handleAnswerChange(event) {
    event.persist();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        answer: event.target.value
      });
    });
  };

  var handleNicknameChange = function handleNicknameChange(event) {
    event.persist();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        nickname: event.target.value
      });
    });
  };

  var handleEmailChange = function handleEmailChange(event) {
    event.persist();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        email: event.target.value
      });
    });
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/questions/".concat(question_id, "/answers"), {
      body: values.answer,
      name: values.nickname,
      email: values.email
    }).then(function () {
      closeModal();
      setValues(function (values) {
        return _objectSpread(_objectSpread({}, values), {}, {
          answer: '',
          nickname: '',
          email: '',
          file: ''
        });
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, showModal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].modalmain,
    onClick: function onClick() {
      closeModal();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("form", {
    onSubmit: handleSubmit,
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].modalContent,
    onClick: function onClick(e) {
      // do not close modal if anything inside modal content is clicked
      e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].closeButton,
    onClick: closeModal
  }, "X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("label", null, "Your Answer*:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].formInput,
    placeholder: "Your answer",
    maxLength: "1000",
    name: "answer",
    value: values.answer,
    onChange: handleAnswerChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("label", null, "Your Nickname*:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].formInput,
    type: "text",
    placeholder: "Example: jack543!",
    maxLength: "60",
    name: "nickname",
    value: values.nickname,
    onChange: handleNicknameChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("label", null, "Your Email*:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].formInput,
    type: "email",
    placeholder: "Example: jack@email.com",
    maxLength: "60",
    name: "email",
    value: values.email,
    onChange: handleEmailChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].answerInfo
  }, "For authentication reasons, you will not be emailed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("label", {
    name: "file",
    value: values.file
  }, "Add photos:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].formInput,
    type: "file"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    className: _qa_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].modalButton
  }, "Submit an Answer")))) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalAnswers);

/***/ })

}]);
//# sourceMappingURL=client_src_components_questions_answers_MainList_jsx.bundle.js.map