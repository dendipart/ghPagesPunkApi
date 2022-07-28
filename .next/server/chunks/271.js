"use strict";
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 8687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const FilterContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterContext);


/***/ }),

/***/ 7912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useFilter),
/* harmony export */   "z": () => (/* binding */ PAGINATION_STEP)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8469);


const PAGINATION_STEP = 1;
const useFilter = ()=>{
    const { 0: beerId , 1: setBeerId  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const { 0: startIndex , 1: setStartIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const { 0: searchValue , 1: setSearchValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const { 0: fetchedMore , 1: setFetchedMore  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const beerList = (0,_services_api__WEBPACK_IMPORTED_MODULE_1__/* .useGetBeersQuery */ .SI)({
        query: query ?? "",
        startIndex
    }, {
        skip: !query
    });
    const handleSubmit = ()=>{
        setQuery(searchValue);
        setFetchedMore(false);
    };
    return {
        data: beerList.data,
        beerId,
        setBeerId,
        query,
        setQuery,
        startIndex,
        setStartIndex,
        isError: beerList.isError,
        isFetching: beerList.isFetching,
        handleSubmit,
        setSearchValue,
        searchValue,
        fetchedMore,
        setFetchedMore
    };
};


/***/ }),

/***/ 8469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SI": () => (/* binding */ useGetBeersQuery),
/* harmony export */   "_P": () => (/* binding */ beerApi),
/* harmony export */   "pD": () => (/* binding */ useGetBeerQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const beerApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "beerApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://api.punkapi.com/v2"
    }),
    endpoints: (builder)=>({
            getBeers: builder.query({
                query: ({ query , startIndex  })=>`/beers?beer_name=${query}&page=${startIndex}&per_page=6`
            }),
            getBeer: builder.query({
                query: ({ id  })=>`/beers/${id}`
            })
        })
});
const { useGetBeersQuery , useGetBeerQuery  } = beerApi;


/***/ })

};
;