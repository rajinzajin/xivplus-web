"use strict";
(() => {
var exports = {};
exports.id = 8;
exports.ids = [8];
exports.modules = {

/***/ 4296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./src/data/data_centers.json
const data_centers_namespaceObject = JSON.parse('[{"name":"Elemental","region":"Japan","worlds":[45,49,50,58,68,72,90,94]},{"name":"Gaia","region":"Japan","worlds":[43,46,51,59,69,76,92,98]},{"name":"Mana","region":"Japan","worlds":[23,28,44,47,48,61,70,96]},{"name":"Aether","region":"North-America","worlds":[40,54,57,63,65,73,79,99]},{"name":"Primal","region":"North-America","worlds":[35,53,55,64,77,78,93,95]},{"name":"Chaos","region":"Europe","worlds":[39,71,80,83,85,97,400,401]},{"name":"Light","region":"Europe","worlds":[33,36,42,56,66,67,402,403]},{"name":"Crystal","region":"North-America","worlds":[34,37,41,62,74,75,81,91]},{"name":"Materia","region":"Oceania","worlds":[21,22,86,87,88]},{"name":"Meteor","region":"Japan","worlds":[24,29,30,31,32,52,60,82]},{"name":"Dynamis","region":"North-America","worlds":[404,405,406,407]},{"name":"陆行鸟","region":"中国","worlds":[1167,1081,1042,1044,1060,1173,1174,1175]},{"name":"莫古力","region":"中国","worlds":[1172,1076,1171,1170,1113,1121,1166,1176]},{"name":"猫小胖","region":"中国","worlds":[1043,1169,1106,1045,1177,1178,1179]},{"name":"豆豆柴","region":"中国","worlds":[1192,1183,1180,1186,1201,1068,1064,1187]}]');
;// CONCATENATED MODULE: ./src/pages/api/datacenters.js

async function handler(req, res) {
    res.status(200).json(data_centers_namespaceObject);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4296));
module.exports = __webpack_exports__;

})();