"use strict";
exports.id = 127;
exports.ids = [127];
exports.modules = {

/***/ 7127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BeerList_BeerList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx
var Typography = __webpack_require__(7285);
;// CONCATENATED MODULE: ./src/components/BeerItem/BeerItem.tsx




const BeerItem = ({ data , onClick  })=>{
    let description = data.description;
    if (description.length > 140) {
        description = description.slice(0, 140) + "...";
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BeerImage, {
                src: data.image_url,
                onClick: onClick
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Details, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                        variant: "beerItemTitle",
                        color: "black",
                        onClick: onClick,
                        children: data.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                        variant: "default",
                        color: "black",
                        children: description
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const BeerItem_BeerItem = (BeerItem);
const Wrapper = (styled_default()).div`
  background: rgba(0, 0, 0, 0.1);
  height: 300px;
  width: 200px;
  margin: 0 auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;
const BeerImage = (styled_default()).img`
  height: 180px;
  width: 30%;
  cursor: pointer;
  margin: 0 auto;
`;
const Details = (styled_default()).div``;

;// CONCATENATED MODULE: ./src/components/BeerItem/index.ts


// EXTERNAL MODULE: ./src/context/FilterContext.ts
var FilterContext = __webpack_require__(8687);
// EXTERNAL MODULE: ./src/hooks/useFilter.ts
var useFilter = __webpack_require__(7912);
;// CONCATENATED MODULE: ./src/pages/BeerList/BeerList.tsx







const BeerList = ()=>{
    const { 0: beerItems , 1: setBeerItems  } = (0,external_react_.useState)([]);
    const filter = (0,external_react_.useContext)(FilterContext/* default */.Z);
    (0,external_react_.useEffect)(()=>{
        if (filter.data) {
            filter.fetchedMore ? setBeerItems([
                ...beerItems,
                ...filter.data
            ]) : setBeerItems(filter.data);
        } else {
            setBeerItems([]);
        }
    }, [
        filter?.data
    ]);
    if (!filter) {
        return null;
    }
    const { setStartIndex , startIndex , isError , isFetching  } = filter;
    const handleClickFetchMore = ()=>{
        filter.setFetchedMore(true);
        setStartIndex(startIndex + useFilter/* PAGINATION_STEP */.z);
    };
    const handleClickBeerItem = (id)=>()=>{
            filter.setBeerId(id);
        };
    if (isError) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Error. Please, try again."
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BeerList_Wrapper, {
            isFetching: isFetching,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Spinner, {
                    isFetching: isFetching,
                    children: "Loading..."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(BookItemList, {
                    children: beerItems.map((item)=>{
                        return item && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/beer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(BeerItem_BeerItem, {
                                data: item,
                                onClick: handleClickBeerItem(item.id)
                            }, item.id)
                        }, item.id + 1000);
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                    onClick: handleClickFetchMore,
                    children: "Load more"
                })
            ]
        })
    });
};
/* harmony default export */ const BeerList_BeerList = (BeerList);
const BookItemList = (styled_default()).div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 14px;
`;
const BeerList_Wrapper = (styled_default()).div``;
const Spinner = (styled_default()).div`
  display: ${({ isFetching  })=>isFetching ? "block" : "none"};
`;
const Button = (styled_default()).button`
  height: 40px;
  width: 140px;
  margin: 0 auto;
`;


/***/ })

};
;