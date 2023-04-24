"use strict";
exports.id = 534;
exports.ids = [534];
exports.modules = {

/***/ 2534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ItemSearchBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_item_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8786);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8823);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_ffxiv_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5496);







function ItemSearchBar(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const marketable_item = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_ffxiv_store__WEBPACK_IMPORTED_MODULE_6__/* .selectMarketableItemsStore */ .O1);
    const [searchResult, setSearchResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [isSearchFocus, setSearchFocus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [inputNameValue, setinputNameValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    function onSearch(e) {
        setinputNameValue(e.target.value);
        const filteredJson = (0,_lib_item_utils__WEBPACK_IMPORTED_MODULE_1__/* .filterItemJsonObjects */ .fy)(marketable_item, e.target.value, 15);
        setSearchResult((0,_lib_item_utils__WEBPACK_IMPORTED_MODULE_1__/* .convertToArray */ .L)(filteredJson));
    }
    function selectItem(item) {
        setinputNameValue(item.en);
        router.push(`/market/${item._id}`);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{}, [
        props
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            onFocus: ()=>{
                setSearchFocus(true);
            },
            onBlur: ()=>{
                setSearchFocus(false);
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    autoComplete: "off",
                    type: "text",
                    id: "search_input",
                    className: "px-5 font-body h-14 bg-primary w-full outline-none focus:outline-none placeholder:text-gray-200 text-gray-200 text-base rounded-lg block p-2.5",
                    placeholder: "Search item",
                    value: inputNameValue,
                    onChange: onSearch
                }),
                isSearchFocus && searchResult.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "search_result",
                        className: "{searchResultVisible} bg-primary absolute max-h-80 rounded-xl overflow-y-auto mt-2 p-2 w-full z-50 text-white",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            children: searchResult.map((item)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    onMouseDown: ()=>{
                                        selectItem(item);
                                    },
                                    className: "group h-auto cursor-pointer font-body font-bold text-gray-300",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex m-auto group-hover:bg-higlight-1 py-2 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                src: (0,_lib_item_utils__WEBPACK_IMPORTED_MODULE_1__/* .getItemImageUrl */ .FO)(item._id),
                                                alt: item.en,
                                                width: 40,
                                                height: 40,
                                                className: "ml-3 w-10 h-10"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex-1 h-full ml-3 my-auto group-hover:text-white",
                                                children: item.en
                                            })
                                        ]
                                    })
                                }, item._id);
                            })
                        })
                    })
                })
            ]
        })
    });
}


/***/ })

};
;