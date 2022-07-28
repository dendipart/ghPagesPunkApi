"use strict";
exports.id = 285;
exports.ids = [285];
exports.modules = {

/***/ 7285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Typography = ({ variant , color , children  })=>{
    switch(variant){
        case "heading":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                color: color,
                children: children
            });
        case "label":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                color: color,
                children: children
            });
        case "beerTitle":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BookTitle, {
                color: color,
                children: children
            });
        case "beerItemTitle":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BookItemTitle, {
                color: color,
                children: children
            });
        case "underline":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Underline, {
                color: color,
                children: children
            });
        default:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Paragraph, {
                color: color,
                children: children
            });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);
const Heading = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().h2)``;
const Label = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().p)`
  color: ${({ color  })=>color};
`;
const BookTitle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().h2)`
  font-size: 25px;
`;
const BookItemTitle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().h3)`
  font-size: 18px;
  cursor: pointer;
  line-height: 15px;
`;
const Paragraph = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().p)`
  font-size: 10px;
`;
const Underline = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().p)`
  text-decoration: underline;
  color: ${({ color  })=>color};
`;


/***/ })

};
;