"use strict";
exports.id = 978;
exports.ids = [978];
exports.modules = {

/***/ 6887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CardLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CardLoading({ show =true , absolute =true  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${show ? "" : "hidden"} ${absolute ? "absolute" : "relative"} w-full h-full`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute rounded-lg w-full h-full bg-opacity-[0.1] blur-md bg-black backdrop-blur-sm"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute loader w-9 h-9 m-auto top-0 left-0 right-0 bottom-0"
            })
        ]
    });
}


/***/ }),

/***/ 1686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ formatNumberToGilString)
/* harmony export */ });
function formatNumberToGilString(gil) {
    return gil.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        useGrouping: true
    });
}


/***/ }),

/***/ 927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ getWorld)
/* harmony export */ });
function getWorld(world_list, id) {
    var filteredWorld = world_list.filter((world)=>world["id"] === id);
    return filteredWorld.length > 0 ? filteredWorld[0] : null;
}


/***/ })

};
;