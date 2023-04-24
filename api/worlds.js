"use strict";
(() => {
var exports = {};
exports.id = 728;
exports.ids = [728];
exports.modules = {

/***/ 1020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./src/data/worlds.json
const worlds_namespaceObject = JSON.parse('[{"id":21,"name":"Ravana"},{"id":22,"name":"Bismarck"},{"id":23,"name":"Asura"},{"id":24,"name":"Belias"},{"id":28,"name":"Pandaemonium"},{"id":29,"name":"Shinryu"},{"id":30,"name":"Unicorn"},{"id":31,"name":"Yojimbo"},{"id":32,"name":"Zeromus"},{"id":33,"name":"Twintania"},{"id":34,"name":"Brynhildr"},{"id":35,"name":"Famfrit"},{"id":36,"name":"Lich"},{"id":37,"name":"Mateus"},{"id":39,"name":"Omega"},{"id":40,"name":"Jenova"},{"id":41,"name":"Zalera"},{"id":42,"name":"Zodiark"},{"id":43,"name":"Alexander"},{"id":44,"name":"Anima"},{"id":45,"name":"Carbuncle"},{"id":46,"name":"Fenrir"},{"id":47,"name":"Hades"},{"id":48,"name":"Ixion"},{"id":49,"name":"Kujata"},{"id":50,"name":"Typhon"},{"id":51,"name":"Ultima"},{"id":52,"name":"Valefor"},{"id":53,"name":"Exodus"},{"id":54,"name":"Faerie"},{"id":55,"name":"Lamia"},{"id":56,"name":"Phoenix"},{"id":57,"name":"Siren"},{"id":58,"name":"Garuda"},{"id":59,"name":"Ifrit"},{"id":60,"name":"Ramuh"},{"id":61,"name":"Titan"},{"id":62,"name":"Diabolos"},{"id":63,"name":"Gilgamesh"},{"id":64,"name":"Leviathan"},{"id":65,"name":"Midgardsormr"},{"id":66,"name":"Odin"},{"id":67,"name":"Shiva"},{"id":68,"name":"Atomos"},{"id":69,"name":"Bahamut"},{"id":70,"name":"Chocobo"},{"id":71,"name":"Moogle"},{"id":72,"name":"Tonberry"},{"id":73,"name":"Adamantoise"},{"id":74,"name":"Coeurl"},{"id":75,"name":"Malboro"},{"id":76,"name":"Tiamat"},{"id":77,"name":"Ultros"},{"id":78,"name":"Behemoth"},{"id":79,"name":"Cactuar"},{"id":80,"name":"Cerberus"},{"id":81,"name":"Goblin"},{"id":82,"name":"Mandragora"},{"id":83,"name":"Louisoix"},{"id":85,"name":"Spriggan"},{"id":86,"name":"Sephirot"},{"id":87,"name":"Sophia"},{"id":88,"name":"Zurvan"},{"id":90,"name":"Aegis"},{"id":91,"name":"Balmung"},{"id":92,"name":"Durandal"},{"id":93,"name":"Excalibur"},{"id":94,"name":"Gungnir"},{"id":95,"name":"Hyperion"},{"id":96,"name":"Masamune"},{"id":97,"name":"Ragnarok"},{"id":98,"name":"Ridill"},{"id":99,"name":"Sargatanas"},{"id":400,"name":"Sagittarius"},{"id":401,"name":"Phantom"},{"id":402,"name":"Alpha"},{"id":403,"name":"Raiden"},{"id":404,"name":"Marilith"},{"id":405,"name":"Seraph"},{"id":406,"name":"Halicarnassus"},{"id":407,"name":"Maduin"},{"id":1167,"name":"红玉海"},{"id":1081,"name":"神意之地"},{"id":1042,"name":"拉诺西亚"},{"id":1044,"name":"幻影群岛"},{"id":1060,"name":"萌芽池"},{"id":1173,"name":"宇宙和音"},{"id":1174,"name":"沃仙曦染"},{"id":1175,"name":"晨曦王座"},{"id":1172,"name":"白银乡"},{"id":1076,"name":"白金幻象"},{"id":1171,"name":"神拳痕"},{"id":1170,"name":"潮风亭"},{"id":1113,"name":"旅人栈桥"},{"id":1121,"name":"拂晓之间"},{"id":1166,"name":"龙巢神殿"},{"id":1176,"name":"梦羽宝境"},{"id":1043,"name":"紫水栈桥"},{"id":1169,"name":"延夏"},{"id":1106,"name":"静语庄园"},{"id":1045,"name":"摩杜纳"},{"id":1177,"name":"海猫茶屋"},{"id":1178,"name":"柔风海湾"},{"id":1179,"name":"琥珀原"},{"id":1192,"name":"水晶塔"},{"id":1183,"name":"银泪湖"},{"id":1180,"name":"太阳海岸"},{"id":1186,"name":"伊修加德"},{"id":1201,"name":"红茶川"},{"id":1068,"name":"黄金谷"},{"id":1064,"name":"月牙湾"},{"id":1187,"name":"雪松原"}]');
;// CONCATENATED MODULE: ./src/pages/api/worlds.js

async function handler(req, res) {
    res.status(200).json(worlds_namespaceObject);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1020));
module.exports = __webpack_exports__;

})();