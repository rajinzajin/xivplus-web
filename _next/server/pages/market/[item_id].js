"use strict";
(() => {
var exports = {};
exports.id = 253;
exports.ids = [253];
exports.modules = {

/***/ 203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LowHighPriceCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_format_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1686);


function LowHighPriceCard({ title , item , color  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-100 mt-3 p-4 rounded-lg bg-primary",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-gray-300 font-body",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: `${color} font-body font-black text-xl mt-2`,
                children: item != null ? (0,_lib_format_function__WEBPACK_IMPORTED_MODULE_1__/* .formatNumberToGilString */ .t)(item.pricePerUnit) : "-"
            }),
            item != null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "flex-auto text-summary font-body font-[0]",
                        children: [
                            item.quantity,
                            " Unit",
                            item.quantity > 1 ? "s" : ""
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "flex-auto font-body font-semibold text-lg text-gray-400 text-right",
                        children: item.worldName
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MarketTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_listings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(414);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_world__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(927);
/* harmony import */ var _lib_format_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1686);
/* harmony import */ var _store_reducers_data_center_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9353);
/* harmony import */ var _store_reducers_world_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2931);








function MarketTable({ listings =[]  }) {
    const main_dc = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_store_reducers_data_center_reducer__WEBPACK_IMPORTED_MODULE_3__/* .selectMainDC */ .Pd);
    const all_worlds = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_store_reducers_world_reducer__WEBPACK_IMPORTED_MODULE_4__/* .selectWorlds */ .xt);
    const [isHqTable, setIsHqTable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedPrices, setSelectedPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const selectedStyle = "text-white font-medium rounded-lg text-sm px-5 py-2.5 bordered-active-1";
    const unSelectedStyle = "py-2.5 px-5 text-sm font-medium text-gray-400 rounded-lg bordered-hover-1 hover:text-white";
    const getWorldListing = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((worldName, hq)=>{
        return listings.filter((listing)=>listing.worldName === worldName && listing.hq === hq);
    }, [
        listings
    ]);
    const updateData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        var price_list = {
            nq: [],
            hq: []
        };
        if (listings.length <= 0) {
            return price_list;
        }
        var worlds = main_dc.worlds ?? [];
        worlds.forEach((world_id)=>{
            var world = (0,_lib_world__WEBPACK_IMPORTED_MODULE_5__/* .getWorld */ .f)(all_worlds, world_id);
            var nq = getWorldListing(world.name, false);
            var hq = getWorldListing(world.name, true);
            if (nq.length > 0) {
                price_list.nq.push((0,_lib_listings__WEBPACK_IMPORTED_MODULE_6__/* .getLowestPriceItem */ .D)(nq));
            }
            if (hq.length > 0) {
                price_list.hq.push((0,_lib_listings__WEBPACK_IMPORTED_MODULE_6__/* .getLowestPriceItem */ .D)(hq));
            }
        });
        price_list.nq.sort((a, b)=>a.pricePerUnit - b.pricePerUnit);
        price_list.hq.sort((a, b)=>a.pricePerUnit - b.pricePerUnit);
        return price_list;
    }, [
        all_worlds,
        getWorldListing,
        listings.length,
        main_dc.worlds
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (listings.length <= 0) return;
        const new_world_prices = updateData();
        setSelectedPrices(isHqTable ? new_world_prices.hq : new_world_prices.nq);
    }, [
        isHqTable,
        listings.length,
        updateData
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative shadow-md sm:rounded-lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>setIsHqTable(false),
                type: "button",
                className: `${isHqTable ? unSelectedStyle : selectedStyle}`,
                children: "Normal Quality"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>setIsHqTable(true),
                type: "button",
                className: `${isHqTable ? selectedStyle : unSelectedStyle} ml-3`,
                children: "High Quality"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "w-full font-display text-sm text-left text-gray-300",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        className: "bg-item text-sm font-body uppercase text-gray-400",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: [
                                        " ",
                                        "World",
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: [
                                        " ",
                                        "Price",
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: [
                                        " ",
                                        "Quantity",
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: [
                                        " ",
                                        "Quality",
                                        " "
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        className: "font-body",
                        children: selectedPrices.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "bg-primary text-base border-b border-gray-700 hover:bg-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "row",
                                        className: "px-6 py-4 font-medium whitespace-nowrap text-white",
                                        children: item.worldName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-6 py-4 text-yellow-200",
                                        children: (0,_lib_format_function__WEBPACK_IMPORTED_MODULE_7__/* .formatNumberToGilString */ .t)(item.pricePerUnit)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                        className: "px-6 py-4",
                                        children: [
                                            " ",
                                            item.quantity,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-6 py-4",
                                        children: item.hq === true ? "High" : "Normal"
                                    })
                                ]
                            }, item.worldName))
                    })
                ]
            }),
            selectedPrices.length <= 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-item text-sm font-body uppercase text-gray-400 py-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "font-body font-semibold text-base text-center",
                    children: "No Item Found."
                })
            })
        ]
    });
}


/***/ }),

/***/ 2168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ getItem)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./src/database/item_db.js

const prisma = new client_namespaceObject.PrismaClient();
async function getItem(_id) {
    const data = await prisma.item.findFirst({
        where: {
            id: _id
        },
        select: {
            id: true,
            Name: true,
            Description: true
        }
    });
    return data;
}


/***/ }),

/***/ 5395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ filterArray)
/* harmony export */ });
function filterArray(array, filterParams) {
    return array.filter((obj)=>Object.entries(filterParams).every(([key, value])=>obj[key] === value));
}


/***/ }),

/***/ 414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getLowestPriceItem),
/* harmony export */   "M": () => (/* binding */ getHighestPriceItem)
/* harmony export */ });
function getLowestPriceItem(entries) {
    let lowestPriceItem = null;
    for (let purchase of entries){
        if (lowestPriceItem === null || purchase.pricePerUnit < lowestPriceItem.pricePerUnit) {
            lowestPriceItem = purchase;
        }
    }
    return lowestPriceItem;
}
function getHighestPriceItem(entries) {
    let highestPriceItem = null;
    for (let purchase of entries){
        if (highestPriceItem === null || purchase.pricePerUnit > highestPriceItem.pricePerUnit) {
            highestPriceItem = purchase;
        }
    }
    return highestPriceItem;
}


/***/ }),

/***/ 7318:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Market),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6887);
/* harmony import */ var _components_ItemSearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2534);
/* harmony import */ var _components_LowHighPriceCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(203);
/* harmony import */ var _components_MarketTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3405);
/* harmony import */ var _database_item_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2168);
/* harmony import */ var _lib_array_function__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5395);
/* harmony import */ var _lib_item_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8786);
/* harmony import */ var _lib_listings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(414);
/* harmony import */ var _store_reducers_data_center_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9353);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9648);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8823);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_8__]);
axios__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















function Market({ item  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const main_dc = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(_store_reducers_data_center_reducer__WEBPACK_IMPORTED_MODULE_7__/* .selectMainDC */ .Pd);
    const item_id_query = router.query.item_id;
    const [marketLoading, setMarketLoading] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(true);
    const [{ listings , nqLowest , nqHighest , hqLowest , hqHighest  }, setMarketData] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        refreshData(main_dc.name, item_id_query);
    }, [
        main_dc,
        item_id_query
    ]);
    function refreshData(dc, item_id) {
        if (dc == null) return;
        setMarketLoading(true);
        loadMarketData(dc, item_id).then((market_data)=>{
            setMarketData(market_data);
            setMarketLoading(false);
        }).catch(()=>{});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-12 gap-y-6 gap-x-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-span-12 2xl:col-span-9 flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative h-[6rem] w-[6rem] min-h-[6rem] min-w-[6rem]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    className: "w-full h-full",
                                    width: 96,
                                    height: 96,
                                    src: (0,_lib_item_utils__WEBPACK_IMPORTED_MODULE_6__/* .getItemImageUrl */ .FO)(item.id),
                                    onError: "this.src='/img/error.png';",
                                    alt: item.Name
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ml-5 font-display",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-white text-4xl font-black",
                                        children: item.Name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-gray-400 text-lg font-black",
                                        children: item.Description !== null ? item.Description : ""
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-span-12 2xl:col-span-3 px-2 w-full h-[3.7rem] items-center justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-full flex items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ItemSearchBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-12 gap-x-8 mt-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-span-12 2xl:col-span-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-white w-full text-2xl font-[700] text-center",
                                children: main_dc.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "h-100 mt-4 p-5 w-full max-w-full items-center justify-center rounded-2xl bg-item",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-white font-display text-2xl font-bold",
                                                children: "Lowest Price"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                onClick: ()=>refreshData(main_dc.name, item_id_query),
                                                className: `${marketLoading ? "animate-spin" : ""} text-white select-none cursor-pointer text-3xl font-black`,
                                                xmlns: "http://www.w3.org/2000/svg",
                                                height: "30",
                                                width: "30",
                                                viewBox: "0 0 24 24",
                                                fill: "white",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M0 0h24v24H0z",
                                                        fill: "none"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        stroke: "white",
                                                        strokeWidth: "1",
                                                        d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CardLoading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                show: marketLoading
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LowHighPriceCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                item: nqLowest,
                                                title: "Normal Quality",
                                                color: "text-money"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LowHighPriceCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                item: hqLowest,
                                                title: "High Quality",
                                                color: "text-money"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "h-100 p-5 w-full max-w-full items-center justify-center rounded-2xl bg-item mt-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-white font-display text-2xl font-bold",
                                        children: "Highest Price"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CardLoading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                show: marketLoading
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LowHighPriceCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                item: nqHighest,
                                                title: "Normal Quality",
                                                color: "text-money2"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LowHighPriceCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                item: hqHighest,
                                                title: "High Quality",
                                                color: "text-money2"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-span-12 2xl:col-span-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-white w-full text-2xl font-[700] text-center",
                                children: "\xa0"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MarketTable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    listings: listings
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
async function getStaticProps({ params  }) {
    const data = await (0,_database_item_db__WEBPACK_IMPORTED_MODULE_5__/* .getItem */ .r)(parseInt(params.item_id));
    return {
        props: {
            item: data
        }
    };
}
async function getStaticPaths() {
    if (process.env.SKIP_BUILD_STATIC_GENERATION == "true") {
        return {
            paths: [
                {
                    params: {
                        item_id: "3"
                    }
                },
                {
                    params: {
                        item_id: "4"
                    }
                },
                {
                    params: {
                        item_id: "5"
                    }
                }
            ],
            fallback: false
        };
    }
    const paths = [];
    const marketable_items = await __webpack_require__.e(/* import() */ 78).then(__webpack_require__.t.bind(__webpack_require__, 3078, 19));
    Object.keys(marketable_items).forEach((key)=>{
        if (key != "default") paths.push({
            params: {
                item_id: key
            }
        });
    });
    return {
        paths,
        fallback: false
    };
}
async function loadMarketData(dc, item_id) {
    const fields = "listings.pricePerUnit,listings.hq,listings.quantity,listings.worldName";
    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_8__["default"])(`https://universalis.app/api/${dc}/${item_id}?entries=1800&fields=${fields}`);
    const market_data = res.data;
    const listings = market_data.listings;
    const hqList = (0,_lib_array_function__WEBPACK_IMPORTED_MODULE_13__/* .filterArray */ .R)(listings, {
        hq: true
    });
    const nqList = (0,_lib_array_function__WEBPACK_IMPORTED_MODULE_13__/* .filterArray */ .R)(listings, {
        hq: false
    });
    const hqLowest = (0,_lib_listings__WEBPACK_IMPORTED_MODULE_14__/* .getLowestPriceItem */ .D)(hqList);
    const nqLowest = (0,_lib_listings__WEBPACK_IMPORTED_MODULE_14__/* .getLowestPriceItem */ .D)(nqList);
    const hqHighest = (0,_lib_listings__WEBPACK_IMPORTED_MODULE_14__/* .getHighestPriceItem */ .M)(hqList);
    const nqHighest = (0,_lib_listings__WEBPACK_IMPORTED_MODULE_14__/* .getHighestPriceItem */ .M)(nqList);
    return {
        listings,
        nqLowest,
        nqHighest,
        hqLowest,
        hqHighest
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [339,823,496,786,534,978], () => (__webpack_exec__(7318)));
module.exports = __webpack_exports__;

})();