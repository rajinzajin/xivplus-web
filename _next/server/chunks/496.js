"use strict";
exports.id = 496;
exports.ids = [496];
exports.modules = {

/***/ 5496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O1": () => (/* binding */ selectMarketableItemsStore),
/* harmony export */   "St": () => (/* binding */ selectSelectedMarketEvent),
/* harmony export */   "XA": () => (/* binding */ selectMarketActivityStore),
/* harmony export */   "b9": () => (/* binding */ addNewMarketActivity),
/* harmony export */   "dK": () => (/* binding */ setMarketableItemsStore),
/* harmony export */   "h": () => (/* binding */ store),
/* harmony export */   "pG": () => (/* binding */ setSelectedMarketEvent)
/* harmony export */ });
/* unused harmony export ffxivslice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_data_center_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9353);
/* harmony import */ var _reducers_world_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2931);




// create a slice
const ffxivslice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "ffxiv",
    initialState: {
        market_activity: [],
        marketable_items: {},
        selected_market_event: {}
    },
    reducers: {
        addNewMarketActivity: (state, action)=>{
            state.market_activity.push(action.payload);
            if (state.market_activity.length > 9) state.market_activity.shift();
        },
        setMarketableItemsStore: (state, action)=>{
            state.marketable_items = action.payload;
        },
        setSelectedMarketEvent: (state, action)=>{
            state.selected_market_event = action.payload;
        }
    }
});
// config the store
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        ffxiv: ffxivslice.reducer,
        data_center: _reducers_data_center_reducer__WEBPACK_IMPORTED_MODULE_1__/* .dc_reducer */ .nd,
        world: _reducers_world_reducer__WEBPACK_IMPORTED_MODULE_2__/* .world_reducer */ .zn
    }
});

// export the action
const { addNewMarketActivity , setMarketableItemsStore , setSelectedMarketEvent  } = ffxivslice.actions;
const selectMarketActivityStore = (state)=>state.ffxiv.market_activity;
const selectMarketableItemsStore = (state)=>state.ffxiv.marketable_items;
const selectSelectedMarketEvent = (state)=>state.ffxiv.selected_market_event;


/***/ }),

/***/ 9353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E_": () => (/* binding */ setMainDC),
/* harmony export */   "Gx": () => (/* binding */ setDataCenters),
/* harmony export */   "Pd": () => (/* binding */ selectMainDC),
/* harmony export */   "nd": () => (/* binding */ dc_reducer),
/* harmony export */   "sj": () => (/* binding */ selectDataCenters)
/* harmony export */ });
/* unused harmony export data_center_slice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const data_center_slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "data_center",
    initialState: {
        main_dc: {},
        data_centers: []
    },
    reducers: {
        setMainDC: (state, action)=>{
            state.main_dc = action.payload;
        },
        setDataCenters: (state, action)=>{
            state.data_centers = action.payload;
        }
    }
});
const dc_reducer = data_center_slice.reducer;
const { setDataCenters , setMainDC  } = data_center_slice.actions;
const selectDataCenters = (state)=>state.data_center.data_centers;
const selectMainDC = (state)=>state.data_center.main_dc;


/***/ }),

/***/ 2931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ul": () => (/* binding */ setWorlds),
/* harmony export */   "xt": () => (/* binding */ selectWorlds),
/* harmony export */   "zn": () => (/* binding */ world_reducer)
/* harmony export */ });
/* unused harmony export world_slice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const world_slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "world",
    initialState: {
        worlds: []
    },
    reducers: {
        setWorlds: (state, action)=>{
            state.worlds = action.payload;
        }
    }
});
const world_reducer = world_slice.reducer;
const { setWorlds  } = world_slice.actions;
const selectWorlds = (state)=>state.world.worlds;


/***/ })

};
;