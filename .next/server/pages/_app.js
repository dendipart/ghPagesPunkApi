"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,59];
exports.modules = {

/***/ 6064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/FilterContext.ts
var FilterContext = __webpack_require__(8687);
// EXTERNAL MODULE: ./src/hooks/useFilter.ts
var useFilter = __webpack_require__(7912);
;// CONCATENATED MODULE: ./src/providers/FilterProvider.tsx




const FilterProvider = ({ children  })=>{
    const filter = (0,useFilter/* useFilter */.L)();
    return /*#__PURE__*/ jsx_runtime_.jsx(FilterContext/* default.Provider */.Z.Provider, {
        value: filter,
        children: children
    });
};
/* harmony default export */ const providers_FilterProvider = (FilterProvider);

;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "@reduxjs/toolkit/query"
const query_namespaceObject = require("@reduxjs/toolkit/query");
// EXTERNAL MODULE: ./src/services/api.ts
var api = __webpack_require__(8469);
;// CONCATENATED MODULE: ./src/store/root.ts



const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: {
        [api/* beerApi.reducerPath */._P.reducerPath]: api/* beerApi.reducer */._P.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(api/* beerApi.middleware */._P.middleware)
});
(0,query_namespaceObject.setupListeners)(store.dispatch);

;// CONCATENATED MODULE: ./src/store/hooks.ts

const useAppDispatch = ()=>useDispatch();
const useAppSelector = (/* unused pure expression or super */ null && (useSelector));

;// CONCATENATED MODULE: ./src/store/index.ts



// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Searchbar/Searchbar.tsx



const Searchbar = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Search, {
        ...props
    });
};
/* harmony default export */ const Searchbar_Searchbar = (Searchbar);
const Search = (styled_default()).input`
  height: 20px;
  width: 300px;
  display: flex;
`;

;// CONCATENATED MODULE: ./src/layout/Header/Header.tsx






const Header = ()=>{
    const filter = (0,external_react_.useContext)(FilterContext/* default */.Z);
    if (!filter) {
        return null;
    }
    const handleChangeSearchBar = (event)=>{
        filter.setSearchValue(event.target.value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Div, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                    children: "Search for BEER"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                action: "#",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SearchbarDiv, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Searchbar_Searchbar, {
                            onChange: handleChangeSearchBar
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                            onClick: filter.handleSubmit,
                            children: "Go"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);
const Div = (styled_default()).div`
  background-image: url(https://www.aspenwords.org/wp-content/uploads/2017/12/2017-12-01-15-49-www.aspeninstitute.org_.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 200px;
`;
const Title = (styled_default()).h2`
  display: flex;
  margin: 20px;
  font-size: 50px;
  color: white;
  cursor: pointer;
`;
const SearchbarDiv = (styled_default()).div`
  display: flex;
  justify-content: center;
`;
const Button = (styled_default()).button`
  margin-left: -40px;
  height: 24px;
  width: 40px;
  margin-top: 0px;
`;
const SelectDiv = (styled_default()).div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

;// CONCATENATED MODULE: ./src/layout/Header/index.ts


;// CONCATENATED MODULE: ./src/pages/_app.tsx






function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
            store: store,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(providers_FilterProvider, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 4335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,271], () => (__webpack_exec__(6064)));
module.exports = __webpack_exports__;

})();