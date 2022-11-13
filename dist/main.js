/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/header.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/header.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header{\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  padding: var(--pad);\r\n  text-align: center;\r\n  color: white;\r\n  background-color: var(--blue);\r\n  box-shadow: 0px 0px 1px 1px var(--shadow);\r\n\r\n  transition: 1s;\r\n}\r\n\r\n.header:hover{\r\n  background-color: var(--red);\r\n  letter-spacing: 10px;\r\n}", "",{"version":3,"sources":["webpack://./src/header.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;EAC7B,yCAAyC;;EAEzC,cAAc;AAChB;;AAEA;EACE,4BAA4B;EAC5B,oBAAoB;AACtB","sourcesContent":[".header{\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  padding: var(--pad);\r\n  text-align: center;\r\n  color: white;\r\n  background-color: var(--blue);\r\n  box-shadow: 0px 0px 1px 1px var(--shadow);\r\n\r\n  transition: 1s;\r\n}\r\n\r\n.header:hover{\r\n  background-color: var(--red);\r\n  letter-spacing: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layout.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layout.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n  --pad: 8px;\r\n\r\n  --shadow: rgba(100, 100, 100, .5);\r\n  --blue: #4056a1;\r\n  --light-blue: #c5cbe3;\r\n  --red: #f13c2d;\r\n  --gold: #d79922;\r\n  --off-white: #efe2ba;\r\n\r\n}\r\n\r\nbody{\r\n  padding: 0;\r\n  margin: 0;\r\n\r\n  min-height: 100vh;\r\n\r\n  display: grid;\r\n  grid-template-columns: 1fr 8fr;\r\n  grid-template-rows: 1fr 10fr;\r\n}\r\n\r\n.header{\r\n  grid-column: span 2;\r\n}", "",{"version":3,"sources":["webpack://./src/layout.css"],"names":[],"mappings":"AAAA;EACE,UAAU;;EAEV,iCAAiC;EACjC,eAAe;EACf,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,oBAAoB;;AAEtB;;AAEA;EACE,UAAU;EACV,SAAS;;EAET,iBAAiB;;EAEjB,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":[":root{\r\n  --pad: 8px;\r\n\r\n  --shadow: rgba(100, 100, 100, .5);\r\n  --blue: #4056a1;\r\n  --light-blue: #c5cbe3;\r\n  --red: #f13c2d;\r\n  --gold: #d79922;\r\n  --off-white: #efe2ba;\r\n\r\n}\r\n\r\nbody{\r\n  padding: 0;\r\n  margin: 0;\r\n\r\n  min-height: 100vh;\r\n\r\n  display: grid;\r\n  grid-template-columns: 1fr 8fr;\r\n  grid-template-rows: 1fr 10fr;\r\n}\r\n\r\n.header{\r\n  grid-column: span 2;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main{\r\n  background-color: var(--gold);\r\n  padding: var(--pad);\r\n}\r\n\r\n.main > *{\r\n  margin: calc(var(--pad)/2);\r\n  padding: var(--pad);\r\n  box-shadow: 0px 0px 1px 0px var(--shadow);\r\n}\r\n\r\n.title{\r\n  background-color: var(--red);\r\n\r\n  color: var(--off-white);\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n\r\n  padding: var(--pad);\r\n}\r\n\r\n.task{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: var(--pad);\r\n\r\n  background-color: var(--off-white);\r\n}\r\n\r\n.checkbox{\r\n  height: 1rem;\r\n  width: 1rem;\r\n\r\n  border: 1px solid black;\r\n  border-radius: 50%;\r\n}\r\n\r\n.details{\r\n  flex-grow: 1;\r\n\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.task > button{\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n.task > button > img{\r\n  width: 1.2rem;\r\n}\r\n\r\n.add-task-button{\r\n  background-color: var(--off-white);\r\n  border: none;\r\n\r\n  font-weight: bold;\r\n  display: block;\r\n  width: calc(100% - var(--pad));\r\n}\r\n\r\n.new-task-form{\r\n  background-color: var(--off-white);\r\n\r\n  display: flex;\r\n  gap: var(--pad);\r\n}\r\n\r\n.new-task-form > *{\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.new-task-form > input:focus{\r\n  border-bottom: 1px solid black;\r\n  outline: none;\r\n}\r\n\r\n.details-input{\r\n  flex-grow: 1;\r\n}\r\n\r\n.add-button{\r\n  background-color: var(--light-blue);\r\n}\r\n\r\n.cancel-button{\r\n  background-color: var(--red);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,4BAA4B;;EAE5B,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;;EAEjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;;EAEf,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,WAAW;;EAEX,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,YAAY;;EAEZ,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kCAAkC;EAClC,YAAY;;EAEZ,iBAAiB;EACjB,cAAc;EACd,8BAA8B;AAChC;;AAEA;EACE,kCAAkC;;EAElC,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,4BAA4B;AAC9B","sourcesContent":[".main{\r\n  background-color: var(--gold);\r\n  padding: var(--pad);\r\n}\r\n\r\n.main > *{\r\n  margin: calc(var(--pad)/2);\r\n  padding: var(--pad);\r\n  box-shadow: 0px 0px 1px 0px var(--shadow);\r\n}\r\n\r\n.title{\r\n  background-color: var(--red);\r\n\r\n  color: var(--off-white);\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n\r\n  padding: var(--pad);\r\n}\r\n\r\n.task{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: var(--pad);\r\n\r\n  background-color: var(--off-white);\r\n}\r\n\r\n.checkbox{\r\n  height: 1rem;\r\n  width: 1rem;\r\n\r\n  border: 1px solid black;\r\n  border-radius: 50%;\r\n}\r\n\r\n.details{\r\n  flex-grow: 1;\r\n\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.task > button{\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n.task > button > img{\r\n  width: 1.2rem;\r\n}\r\n\r\n.add-task-button{\r\n  background-color: var(--off-white);\r\n  border: none;\r\n\r\n  font-weight: bold;\r\n  display: block;\r\n  width: calc(100% - var(--pad));\r\n}\r\n\r\n.new-task-form{\r\n  background-color: var(--off-white);\r\n\r\n  display: flex;\r\n  gap: var(--pad);\r\n}\r\n\r\n.new-task-form > *{\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.new-task-form > input:focus{\r\n  border-bottom: 1px solid black;\r\n  outline: none;\r\n}\r\n\r\n.details-input{\r\n  flex-grow: 1;\r\n}\r\n\r\n.add-button{\r\n  background-color: var(--light-blue);\r\n}\r\n\r\n.cancel-button{\r\n  background-color: var(--red);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/nav.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/nav.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav{\r\n  background-color: var(--light-blue);\r\n  box-shadow: 0px 0px 1px 1px var(--shadow);\r\n\r\n  transition: 1s;\r\n}\r\n\r\n.nav:hover{\r\n  background-color: var(--off-white);\r\n}\r\n\r\n.nav > button{\r\n  background-color: transparent;\r\n  width: 12vw;\r\n  padding: var(--pad);\r\n  border: none;\r\n\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.nav > button:hover{\r\n  background-color: rgba(100, 100, 100, .2);\r\n  border: none;\r\n  transition: 200ms;\r\n}\r\n\r\n.new-list-form{\r\n  background-color: var(--off-white);\r\n  box-shadow: 0px 0px 1px 0px var(--shadow);\r\n  padding: var(--pad);\r\n}\r\n\r\n.new-list-form input{\r\n  background-color: transparent;\r\n  border: none;\r\n  outline: none;\r\n  border-bottom: 1px solid black;\r\n\r\n  width: 12vw;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.new-list-form button{\r\n  margin: var(--pad);\r\n  padding: var(--pad);\r\n  border: none;\r\n  font-weight: bold;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/nav.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,yCAAyC;;EAEzC,cAAc;AAChB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,6BAA6B;EAC7B,WAAW;EACX,mBAAmB;EACnB,YAAY;;EAEZ,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,yCAAyC;EACzC,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;EAClC,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,8BAA8B;;EAE9B,WAAW;EACX,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;AACnB","sourcesContent":[".nav{\r\n  background-color: var(--light-blue);\r\n  box-shadow: 0px 0px 1px 1px var(--shadow);\r\n\r\n  transition: 1s;\r\n}\r\n\r\n.nav:hover{\r\n  background-color: var(--off-white);\r\n}\r\n\r\n.nav > button{\r\n  background-color: transparent;\r\n  width: 12vw;\r\n  padding: var(--pad);\r\n  border: none;\r\n\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.nav > button:hover{\r\n  background-color: rgba(100, 100, 100, .2);\r\n  border: none;\r\n  transition: 200ms;\r\n}\r\n\r\n.new-list-form{\r\n  background-color: var(--off-white);\r\n  box-shadow: 0px 0px 1px 0px var(--shadow);\r\n  padding: var(--pad);\r\n}\r\n\r\n.new-list-form input{\r\n  background-color: transparent;\r\n  border: none;\r\n  outline: none;\r\n  border-bottom: 1px solid black;\r\n\r\n  width: 12vw;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.new-list-form button{\r\n  margin: var(--pad);\r\n  padding: var(--pad);\r\n  border: none;\r\n  font-weight: bold;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/imgs/bin.png":
/*!**************************!*\
  !*** ./src/imgs/bin.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a6fd29509719f079bfd76ed504878f97.png");

/***/ }),

/***/ "./src/imgs/editing.png":
/*!******************************!*\
  !*** ./src/imgs/editing.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e42c3c63c6b97a10746d5c8deb2a3afa.png");

/***/ }),

/***/ "./src/header.css":
/*!************************!*\
  !*** ./src/header.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layout.css":
/*!************************!*\
  !*** ./src/layout.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/layout.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/nav.css":
/*!*********************!*\
  !*** ./src/nav.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/nav.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(details, id, projectId, done = false, dueDate = 'no-due-date') {
    this.details = details;
    this.id = id;
    this.projectId = projectId;
    // optional parameters
    this.done = done;
    this.dueDate = dueDate;
  }

  toggleDone() {
    this.done = !this.done;
  }
}


/***/ }),

/***/ "./src/TodoList.js":
/*!*************************!*\
  !*** ./src/TodoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
class TodoList {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(id) {
    const index = this.taskList.findIndex((task) => id === task.id);

    if (index === -1) { return false; }
    return true;
  }
}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "addTodoList": () => (/* binding */ addTodoList),
/* harmony export */   "loadPage": () => (/* binding */ loadPage),
/* harmony export */   "loadTodoList": () => (/* binding */ loadTodoList),
/* harmony export */   "newListForm": () => (/* binding */ newListForm),
/* harmony export */   "newTaskForm": () => (/* binding */ newTaskForm),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "removeTodoList": () => (/* binding */ removeTodoList)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _imgs_editing_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/editing.png */ "./src/imgs/editing.png");
/* harmony import */ var _imgs_bin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/bin.png */ "./src/imgs/bin.png");





// main content functions
function addTask(task) {
  const TASK = document.createElement('div');
  TASK.classList.add('task');
  TASK.dataset.taskId = task.id;

  // checkbox
  const CHECKBOX = document.createElement('div');
  CHECKBOX.classList.add('checkbox');
  TASK.appendChild(CHECKBOX);
  // details
  const DETAILS = document.createElement('div');
  DETAILS.classList.add('details');
  DETAILS.textContent = task.details;
  TASK.appendChild(DETAILS);
  // dueDate
  const DATE = document.createElement('div');
  DATE.classList.add('date');
  DATE.textContent = task.dueDate;
  TASK.appendChild(DATE);
  // edit button
  const EDIT = document.createElement('button');
  EDIT.classList.add('edit');
  const EDITICON = new Image();
  EDITICON.src = _imgs_editing_png__WEBPACK_IMPORTED_MODULE_2__["default"];
  EDIT.appendChild(EDITICON);
  TASK.appendChild(EDIT);
  // delete button
  const DELETE = document.createElement('button');
  DELETE.classList.add('delete');
  const DELETEICON = new Image();
  DELETEICON.src = _imgs_bin_png__WEBPACK_IMPORTED_MODULE_3__["default"];
  DELETE.appendChild(DELETEICON);
  DELETE.addEventListener('click', (e) => {
    const taskId = parseInt(e.target.parentNode.parentNode.dataset.taskId);
    const listId = parseInt(document.querySelector('.title').dataset.todoListId);

    _index__WEBPACK_IMPORTED_MODULE_1__.deleteTask(taskId, listId);
  });
  TASK.appendChild(DELETE);
  // insert task before new task button
  const MAIN = document.querySelector('.main');
  const NEW_TASK_BUTTON = document.querySelector('.add-task-button');
  MAIN.insertBefore(TASK, NEW_TASK_BUTTON);
}

function removeTask(id) {
  const task = document.querySelector(`[data-task-id="${id}"]`);
  if (task) {
    task.remove();
    return true;
  }
  return false;
}

function newTaskForm() {
  const FORM = document.createElement('div');
  FORM.classList.add('new-task-form');

  const DETAILS = document.createElement('input');
  DETAILS.placeholder = 'task details...';
  DETAILS.classList.add('details-input');
  FORM.appendChild(DETAILS);

  const DATE = document.createElement('input');
  DATE.type = 'date';
  DATE.classList.add('date-input');
  FORM.appendChild(DATE);

  const ADD = document.createElement('button');
  ADD.classList.add('add-button');
  ADD.textContent = 'Add';
  ADD.addEventListener('click', () => {
    const detailsInput = document.querySelector('.details-input');
    const dateInput = document.querySelector('.date-input');

    const details = detailsInput.value;
    const date = new Date(dateInput.value);
    const listId = parseInt(document.querySelector('.title').dataset.todoListId);

    document.querySelector('.new-task-form').remove();

    _index__WEBPACK_IMPORTED_MODULE_1__.addNewTask(details, date, listId);
  });
  FORM.appendChild(ADD);

  const CANCEL = document.createElement('button');
  CANCEL.classList.add('cancel-button');
  CANCEL.textContent = 'Cancel';
  CANCEL.addEventListener('click', () => {
    document.querySelector('.new-task-form').remove();
  });
  FORM.appendChild(CANCEL);

  document.querySelector('.main').appendChild(FORM);
}

function loadTodoList(todoList) {
  const MAIN = document.querySelector('.main');
  // add title div
  const TITLE = document.createElement('div');
  TITLE.classList.add('title');
  TITLE.textContent = todoList.title;
  TITLE.dataset.todoListId = todoList.id;
  MAIN.appendChild(TITLE);
  // add all tasks divs
  todoList.taskList.forEach((task) => { addTask(task); });
  // add task button
  const ADD_TASK_BUTTON = document.createElement('button');
  ADD_TASK_BUTTON.classList.add('add-task-button');
  ADD_TASK_BUTTON.textContent = 'Add Task';
  ADD_TASK_BUTTON.addEventListener('click', () => {
    if (!document.querySelector('.new-task-form')) {
      newTaskForm();
    }
  });
  MAIN.appendChild(ADD_TASK_BUTTON);
}

// nav content functions
function addTodoList(todoList) {
  const LIST_BUTTON = document.createElement('button');
  LIST_BUTTON.classList.add('list-button');
  LIST_BUTTON.textContent = todoList.title;
  LIST_BUTTON.dataset.id = todoList.id;

  // append button before new list button
  const NAV = document.querySelector('.nav');
  const NEW_LIST_BUTTON = document.querySelector('.new-list-button');
  NAV.insertBefore(LIST_BUTTON, NEW_LIST_BUTTON);
}

function removeTodoList(id) {
  const todoList = document.querySelector(`data-id="${id}"`);
  if (todoList) {
    todoList.remove();
    return true;
  }
  return false;
}

function newListForm() {
  const FORM = document.createElement('div');
  FORM.classList.add('new-list-form');

  const INPUT = document.createElement('input');
  INPUT.classList.add('title-input');
  FORM.appendChild(INPUT);

  const ADD = document.createElement('button');
  ADD.classList.add('add-button');
  ADD.textContent = 'Add';
  FORM.appendChild(ADD);

  const CANCEL = document.createElement('button');
  CANCEL.classList.add('cancel-button');
  CANCEL.textContent = 'Cancel';
  CANCEL.addEventListener('click', () => {
    document.querySelector('.new-list-form').remove();
  });
  FORM.appendChild(CANCEL);

  document.querySelector('.nav').appendChild(FORM);
}
// general dom functions
function loadPage() {
  // layout divs
  const HEADER = document.createElement('div');
  HEADER.classList.add('header');
  HEADER.textContent = 'Task Overflow';
  document.body.appendChild(HEADER);

  const NAV = document.createElement('div');
  NAV.classList.add('nav');
  document.body.appendChild(NAV);

  const MAIN = document.createElement('div');
  MAIN.classList.add('main');
  document.body.appendChild(MAIN);

  // nav content
  // add new todolist button
  const NEW_LIST_BUTTON = document.createElement('button');
  NEW_LIST_BUTTON.classList.add('new-list-button');
  NEW_LIST_BUTTON.textContent = 'create new list';
  NEW_LIST_BUTTON.addEventListener('click', () => {
    if (!document.querySelector('.new-list-form')) {
      newListForm();
    }
  });
  NAV.appendChild(NEW_LIST_BUTTON);
  // load todoLists ids from storage
  const idList = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getIdList)();
  // add all todoList buttons to nav
  idList.forEach((id) => {
    const todoList = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.readTodoList)(id);
    addTodoList(todoList);
  });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ "./src/TodoList.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.css */ "./src/layout.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.css */ "./src/header.css");
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav.css */ "./src/nav.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main.css */ "./src/main.css");










_dom__WEBPACK_IMPORTED_MODULE_0__.loadPage();

const todo = _storage__WEBPACK_IMPORTED_MODULE_3__.readTodoList(7);
_dom__WEBPACK_IMPORTED_MODULE_0__.loadTodoList(todo);

function addNewTask(details, date, listId) {
  const newTask = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](details, _storage__WEBPACK_IMPORTED_MODULE_3__.uniqeId(), listId, false, date);
  const todoList = _storage__WEBPACK_IMPORTED_MODULE_3__.readTodoList(listId);

  todoList.addTask(newTask);
  _storage__WEBPACK_IMPORTED_MODULE_3__.writeTodoList(todoList);

  _dom__WEBPACK_IMPORTED_MODULE_0__.addTask(newTask);
}

function deleteTask(id, listId) {
  _storage__WEBPACK_IMPORTED_MODULE_3__.deleteTodoList(id);

  const todoList = _storage__WEBPACK_IMPORTED_MODULE_3__.readTodoList(listId);
  todoList.removeTask(id);
  _storage__WEBPACK_IMPORTED_MODULE_3__.writeTodoList(todoList);

  _dom__WEBPACK_IMPORTED_MODULE_0__.removeTask(id);
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTodoList": () => (/* binding */ deleteTodoList),
/* harmony export */   "getIdList": () => (/* binding */ getIdList),
/* harmony export */   "readTodoList": () => (/* binding */ readTodoList),
/* harmony export */   "uniqeId": () => (/* binding */ uniqeId),
/* harmony export */   "writeTodoList": () => (/* binding */ writeTodoList)
/* harmony export */ });
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ "./src/TodoList.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/Task.js");



// create uniqeId variable in local storage if not exist
if (!localStorage.getItem('uniqeId')) {
  localStorage.setItem('uniqeId', 1);
}

// return a uniqe integer
function uniqeId() {
  const id = parseInt(localStorage.getItem('uniqeId'));
  localStorage.setItem('uniqeId', id + 1);
  return id;
}

function readTodoList(id) {
  // check if TodoList exist
  let rawTodoList = localStorage.getItem(id);
  if (!rawTodoList) { return false; }

  // parse the raw todoList to a TodoList Object
  rawTodoList = JSON.parse(rawTodoList);
  const todoList = new _TodoList__WEBPACK_IMPORTED_MODULE_0__["default"](rawTodoList.title, id);
  // add tasks to the todoList
  rawTodoList.taskIdList.forEach((taskId) => {
    let rawTask = localStorage.getItem(taskId);
    if (rawTask) {
      rawTask = JSON.parse(rawTask);
      const task = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](
        rawTask.details,
        rawTask.id,
        rawTask.projectId,
        rawTask.done,
        rawTask.dueDate,
      );
      todoList.addTask(task);
    }
  });

  return todoList;
}

if (!localStorage.getItem('idList')) {
  localStorage.setItem('idList', JSON.stringify([]));
}

function addToIdList(id) {
  const idList = JSON.parse(localStorage.getItem('idList'));
  if (idList instanceof Array && !idList.includes(id)) {
    idList.push(id);
    localStorage.setItem('idList', JSON.stringify(idList));
  }
}

function removeFromIdList(id) {
  const idList = JSON.parse(localStorage.getItem('idList'));
  if (idList instanceof Array && !idList.includes(id)) {
    const index = idList.findIndex((currentId) => currentId === id);
    if (index !== -1) { idList.splice(index, 1); }
    localStorage.setItem('idList', JSON.stringify(idList));
  }
}

function getIdList() {
  const idList = localStorage.getItem('idList');
  return JSON.parse(idList);
}

function writeTodoList(todoList) {
  // write all tasks to local storage
  todoList.taskList.forEach((task) => {
    localStorage.setItem(task.id, JSON.stringify(task));
  });

  // convert each task in task list to it's id
  const taskIdList = todoList.taskList.map((task) => task.id);

  // create a raw todoList and write it to local storage
  const rawTodoList = {
    title: todoList.title,
    taskIdList,
  };
  // write rawTodoList to local storage
  localStorage.setItem(todoList.id, JSON.stringify(rawTodoList));
  // write id to idList
  addToIdList(todoList.id);
}

function deleteTodoList(id) {
  localStorage.removeItem(id);
  removeFromIdList(id);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9sYXlvdXQuY3NzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9uYXYuY3NzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL2ltZ3MvYmluLnBuZyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL2ltZ3MvZWRpdGluZy5wbmciLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9oZWFkZXIuY3NzP2FiMmQiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9sYXlvdXQuY3NzP2VhZWMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9zcmMvbmF2LmNzcz8yMGE3Iiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9zcmMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlYWRlcntcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IHZhcigtLXNoYWRvdyk7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcjpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix5Q0FBeUM7O0VBRXpDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXJ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCB2YXIoLS1zaGFkb3cpO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXI6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbiAgLS1wYWQ6IDhweDtcXHJcXG5cXHJcXG4gIC0tc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMDAsIC41KTtcXHJcXG4gIC0tYmx1ZTogIzQwNTZhMTtcXHJcXG4gIC0tbGlnaHQtYmx1ZTogI2M1Y2JlMztcXHJcXG4gIC0tcmVkOiAjZjEzYzJkO1xcclxcbiAgLS1nb2xkOiAjZDc5OTIyO1xcclxcbiAgLS1vZmYtd2hpdGU6ICNlZmUyYmE7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOGZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcntcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTs7RUFFVixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjs7QUFFdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUzs7RUFFVCxpQkFBaUI7O0VBRWpCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcclxcbiAgLS1wYWQ6IDhweDtcXHJcXG5cXHJcXG4gIC0tc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMDAsIC41KTtcXHJcXG4gIC0tYmx1ZTogIzQwNTZhMTtcXHJcXG4gIC0tbGlnaHQtYmx1ZTogI2M1Y2JlMztcXHJcXG4gIC0tcmVkOiAjZjEzYzJkO1xcclxcbiAgLS1nb2xkOiAjZDc5OTIyO1xcclxcbiAgLS1vZmYtd2hpdGU6ICNlZmUyYmE7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOGZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcntcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWlue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA+ICp7XFxyXFxuICBtYXJnaW46IGNhbGModmFyKC0tcGFkKS8yKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggdmFyKC0tc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxle1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG5cXHJcXG4gIGNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxufVxcclxcblxcclxcbi50YXNre1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IHZhcigtLXBhZCk7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3h7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG5cXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsc3tcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayA+IGJ1dHRvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayA+IGJ1dHRvbiA+IGltZ3tcXHJcXG4gIHdpZHRoOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzay1idXR0b257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcblxcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1wYWQpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10YXNrLWZvcm17XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogdmFyKC0tcGFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10YXNrLWZvcm0gPiAqe1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10YXNrLWZvcm0gPiBpbnB1dDpmb2N1c3tcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWlucHV0e1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsLWJ1dHRvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDRCQUE0Qjs7RUFFNUIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7O0VBRWpCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7O0VBRWYsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7O0VBRVgsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7O0VBRVosaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZOztFQUVaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0NBQWtDOztFQUVsQyxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4gPiAqe1xcclxcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZCkvMik7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4IHZhcigtLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi50aXRsZXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuXFxyXFxuICBjb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiB2YXIoLS1wYWQpO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94e1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHN7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgPiBidXR0b257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgPiBidXR0b24gPiBpbWd7XFxyXFxuICB3aWR0aDogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stYnV0dG9ue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG5cXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tcGFkKSk7XFxyXFxufVxcclxcblxcclxcbi5uZXctdGFzay1mb3Jte1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IHZhcigtLXBhZCk7XFxyXFxufVxcclxcblxcclxcbi5uZXctdGFzay1mb3JtID4gKntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXctdGFzay1mb3JtID4gaW5wdXQ6Zm9jdXN7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1pbnB1dHtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idXR0b257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmF2e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggdmFyKC0tc2hhZG93KTtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2OmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiA+IGJ1dHRvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgd2lkdGg6IDEydnc7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiA+IGJ1dHRvbjpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCAxMDAsIDEwMCwgLjIpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxyXFxufVxcclxcblxcclxcbi5uZXctbGlzdC1mb3Jte1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCB2YXIoLS1zaGFkb3cpO1xcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1saXN0LWZvcm0gaW5wdXR7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFxyXFxuICB3aWR0aDogMTJ2dztcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5uZXctbGlzdC1mb3JtIGJ1dHRvbntcXHJcXG4gIG1hcmdpbjogdmFyKC0tcGFkKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL25hdi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMseUNBQXlDOztFQUV6QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTs7RUFFWixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMseUNBQXlDO0VBQ3pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4Qjs7RUFFOUIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IHZhcigtLXNoYWRvdyk7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdjpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYgPiBidXR0b257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHdpZHRoOiAxMnZ3O1xcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYgPiBidXR0b246aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsIC4yKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWxpc3QtZm9ybXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggdmFyKC0tc2hhZG93KTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxufVxcclxcblxcclxcbi5uZXctbGlzdC1mb3JtIGlucHV0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcclxcbiAgd2lkdGg6IDEydnc7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWxpc3QtZm9ybSBidXR0b257XFxyXFxuICBtYXJnaW46IHZhcigtLXBhZCk7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTZmZDI5NTA5NzE5ZjA3OWJmZDc2ZWQ1MDQ4NzhmOTcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU0MmMzYzYzYzZiOTdhMTA3NDZkNWM4ZGViMmEzYWZhLnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoZGV0YWlscywgaWQsIHByb2plY3RJZCwgZG9uZSA9IGZhbHNlLCBkdWVEYXRlID0gJ25vLWR1ZS1kYXRlJykge1xyXG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucHJvamVjdElkID0gcHJvamVjdElkO1xyXG4gICAgLy8gb3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gICAgdGhpcy5kb25lID0gZG9uZTtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEb25lKCkge1xyXG4gICAgdGhpcy5kb25lID0gIXRoaXMuZG9uZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBpZCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUYXNrKGlkKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGFza0xpc3QuZmluZEluZGV4KCh0YXNrKSA9PiBpZCA9PT0gdGFzay5pZCk7XHJcblxyXG4gICAgaWYgKGluZGV4ID09PSAtMSkgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnZXRJZExpc3QsIHJlYWRUb2RvTGlzdCB9IGZyb20gJy4vc3RvcmFnZSc7XHJcbmltcG9ydCAqIGFzIGNvbnRyb2xlciBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4vaW1ncy9lZGl0aW5nLnBuZyc7XHJcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vaW1ncy9iaW4ucG5nJztcclxuXHJcbi8vIG1haW4gY29udGVudCBmdW5jdGlvbnNcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xyXG4gIGNvbnN0IFRBU0sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBUQVNLLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICBUQVNLLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcclxuXHJcbiAgLy8gY2hlY2tib3hcclxuICBjb25zdCBDSEVDS0JPWCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIENIRUNLQk9YLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgVEFTSy5hcHBlbmRDaGlsZChDSEVDS0JPWCk7XHJcbiAgLy8gZGV0YWlsc1xyXG4gIGNvbnN0IERFVEFJTFMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBERVRBSUxTLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcclxuICBERVRBSUxTLnRleHRDb250ZW50ID0gdGFzay5kZXRhaWxzO1xyXG4gIFRBU0suYXBwZW5kQ2hpbGQoREVUQUlMUyk7XHJcbiAgLy8gZHVlRGF0ZVxyXG4gIGNvbnN0IERBVEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBEQVRFLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcclxuICBEQVRFLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xyXG4gIFRBU0suYXBwZW5kQ2hpbGQoREFURSk7XHJcbiAgLy8gZWRpdCBidXR0b25cclxuICBjb25zdCBFRElUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgRURJVC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XHJcbiAgY29uc3QgRURJVElDT04gPSBuZXcgSW1hZ2UoKTtcclxuICBFRElUSUNPTi5zcmMgPSBlZGl0SWNvbjtcclxuICBFRElULmFwcGVuZENoaWxkKEVESVRJQ09OKTtcclxuICBUQVNLLmFwcGVuZENoaWxkKEVESVQpO1xyXG4gIC8vIGRlbGV0ZSBidXR0b25cclxuICBjb25zdCBERUxFVEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBERUxFVEUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XHJcbiAgY29uc3QgREVMRVRFSUNPTiA9IG5ldyBJbWFnZSgpO1xyXG4gIERFTEVURUlDT04uc3JjID0gZGVsZXRlSWNvbjtcclxuICBERUxFVEUuYXBwZW5kQ2hpbGQoREVMRVRFSUNPTik7XHJcbiAgREVMRVRFLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IHRhc2tJZCA9IHBhcnNlSW50KGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LnRhc2tJZCk7XHJcbiAgICBjb25zdCBsaXN0SWQgPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5kYXRhc2V0LnRvZG9MaXN0SWQpO1xyXG5cclxuICAgIGNvbnRyb2xlci5kZWxldGVUYXNrKHRhc2tJZCwgbGlzdElkKTtcclxuICB9KTtcclxuICBUQVNLLmFwcGVuZENoaWxkKERFTEVURSk7XHJcbiAgLy8gaW5zZXJ0IHRhc2sgYmVmb3JlIG5ldyB0YXNrIGJ1dHRvblxyXG4gIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gIGNvbnN0IE5FV19UQVNLX0JVVFRPTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKTtcclxuICBNQUlOLmluc2VydEJlZm9yZShUQVNLLCBORVdfVEFTS19CVVRUT04pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayhpZCkge1xyXG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHtpZH1cIl1gKTtcclxuICBpZiAodGFzaykge1xyXG4gICAgdGFzay5yZW1vdmUoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdUYXNrRm9ybSgpIHtcclxuICBjb25zdCBGT1JNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgRk9STS5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1mb3JtJyk7XHJcblxyXG4gIGNvbnN0IERFVEFJTFMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIERFVEFJTFMucGxhY2Vob2xkZXIgPSAndGFzayBkZXRhaWxzLi4uJztcclxuICBERVRBSUxTLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtaW5wdXQnKTtcclxuICBGT1JNLmFwcGVuZENoaWxkKERFVEFJTFMpO1xyXG5cclxuICBjb25zdCBEQVRFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBEQVRFLnR5cGUgPSAnZGF0ZSc7XHJcbiAgREFURS5jbGFzc0xpc3QuYWRkKCdkYXRlLWlucHV0Jyk7XHJcbiAgRk9STS5hcHBlbmRDaGlsZChEQVRFKTtcclxuXHJcbiAgY29uc3QgQUREID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgQURELmNsYXNzTGlzdC5hZGQoJ2FkZC1idXR0b24nKTtcclxuICBBREQudGV4dENvbnRlbnQgPSAnQWRkJztcclxuICBBREQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBkZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy1pbnB1dCcpO1xyXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtaW5wdXQnKTtcclxuXHJcbiAgICBjb25zdCBkZXRhaWxzID0gZGV0YWlsc0lucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVJbnB1dC52YWx1ZSk7XHJcbiAgICBjb25zdCBsaXN0SWQgPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5kYXRhc2V0LnRvZG9MaXN0SWQpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay1mb3JtJykucmVtb3ZlKCk7XHJcblxyXG4gICAgY29udHJvbGVyLmFkZE5ld1Rhc2soZGV0YWlscywgZGF0ZSwgbGlzdElkKTtcclxuICB9KTtcclxuICBGT1JNLmFwcGVuZENoaWxkKEFERCk7XHJcblxyXG4gIGNvbnN0IENBTkNFTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIENBTkNFTC5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJyk7XHJcbiAgQ0FOQ0VMLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgQ0FOQ0VMLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWZvcm0nKS5yZW1vdmUoKTtcclxuICB9KTtcclxuICBGT1JNLmFwcGVuZENoaWxkKENBTkNFTCk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykuYXBwZW5kQ2hpbGQoRk9STSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkVG9kb0xpc3QodG9kb0xpc3QpIHtcclxuICBjb25zdCBNQUlOID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAvLyBhZGQgdGl0bGUgZGl2XHJcbiAgY29uc3QgVElUTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBUSVRMRS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gIFRJVExFLnRleHRDb250ZW50ID0gdG9kb0xpc3QudGl0bGU7XHJcbiAgVElUTEUuZGF0YXNldC50b2RvTGlzdElkID0gdG9kb0xpc3QuaWQ7XHJcbiAgTUFJTi5hcHBlbmRDaGlsZChUSVRMRSk7XHJcbiAgLy8gYWRkIGFsbCB0YXNrcyBkaXZzXHJcbiAgdG9kb0xpc3QudGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4geyBhZGRUYXNrKHRhc2spOyB9KTtcclxuICAvLyBhZGQgdGFzayBidXR0b25cclxuICBjb25zdCBBRERfVEFTS19CVVRUT04gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBBRERfVEFTS19CVVRUT04uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnV0dG9uJyk7XHJcbiAgQUREX1RBU0tfQlVUVE9OLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuICBBRERfVEFTS19CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay1mb3JtJykpIHtcclxuICAgICAgbmV3VGFza0Zvcm0oKTtcclxuICAgIH1cclxuICB9KTtcclxuICBNQUlOLmFwcGVuZENoaWxkKEFERF9UQVNLX0JVVFRPTik7XHJcbn1cclxuXHJcbi8vIG5hdiBjb250ZW50IGZ1bmN0aW9uc1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kb0xpc3QodG9kb0xpc3QpIHtcclxuICBjb25zdCBMSVNUX0JVVFRPTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIExJU1RfQlVUVE9OLmNsYXNzTGlzdC5hZGQoJ2xpc3QtYnV0dG9uJyk7XHJcbiAgTElTVF9CVVRUT04udGV4dENvbnRlbnQgPSB0b2RvTGlzdC50aXRsZTtcclxuICBMSVNUX0JVVFRPTi5kYXRhc2V0LmlkID0gdG9kb0xpc3QuaWQ7XHJcblxyXG4gIC8vIGFwcGVuZCBidXR0b24gYmVmb3JlIG5ldyBsaXN0IGJ1dHRvblxyXG4gIGNvbnN0IE5BViA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcclxuICBjb25zdCBORVdfTElTVF9CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWxpc3QtYnV0dG9uJyk7XHJcbiAgTkFWLmluc2VydEJlZm9yZShMSVNUX0JVVFRPTiwgTkVXX0xJU1RfQlVUVE9OKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRvZG9MaXN0KGlkKSB7XHJcbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkYXRhLWlkPVwiJHtpZH1cImApO1xyXG4gIGlmICh0b2RvTGlzdCkge1xyXG4gICAgdG9kb0xpc3QucmVtb3ZlKCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmV3TGlzdEZvcm0oKSB7XHJcbiAgY29uc3QgRk9STSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIEZPUk0uY2xhc3NMaXN0LmFkZCgnbmV3LWxpc3QtZm9ybScpO1xyXG5cclxuICBjb25zdCBJTlBVVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgSU5QVVQuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnKTtcclxuICBGT1JNLmFwcGVuZENoaWxkKElOUFVUKTtcclxuXHJcbiAgY29uc3QgQUREID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgQURELmNsYXNzTGlzdC5hZGQoJ2FkZC1idXR0b24nKTtcclxuICBBREQudGV4dENvbnRlbnQgPSAnQWRkJztcclxuICBGT1JNLmFwcGVuZENoaWxkKEFERCk7XHJcblxyXG4gIGNvbnN0IENBTkNFTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIENBTkNFTC5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJyk7XHJcbiAgQ0FOQ0VMLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgQ0FOQ0VMLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1saXN0LWZvcm0nKS5yZW1vdmUoKTtcclxuICB9KTtcclxuICBGT1JNLmFwcGVuZENoaWxkKENBTkNFTCk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKS5hcHBlbmRDaGlsZChGT1JNKTtcclxufVxyXG4vLyBnZW5lcmFsIGRvbSBmdW5jdGlvbnNcclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xyXG4gIC8vIGxheW91dCBkaXZzXHJcbiAgY29uc3QgSEVBREVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgSEVBREVSLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG4gIEhFQURFUi50ZXh0Q29udGVudCA9ICdUYXNrIE92ZXJmbG93JztcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEhFQURFUik7XHJcblxyXG4gIGNvbnN0IE5BViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIE5BVi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKE5BVik7XHJcblxyXG4gIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBNQUlOLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKE1BSU4pO1xyXG5cclxuICAvLyBuYXYgY29udGVudFxyXG4gIC8vIGFkZCBuZXcgdG9kb2xpc3QgYnV0dG9uXHJcbiAgY29uc3QgTkVXX0xJU1RfQlVUVE9OID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgTkVXX0xJU1RfQlVUVE9OLmNsYXNzTGlzdC5hZGQoJ25ldy1saXN0LWJ1dHRvbicpO1xyXG4gIE5FV19MSVNUX0JVVFRPTi50ZXh0Q29udGVudCA9ICdjcmVhdGUgbmV3IGxpc3QnO1xyXG4gIE5FV19MSVNUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1saXN0LWZvcm0nKSkge1xyXG4gICAgICBuZXdMaXN0Rm9ybSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIE5BVi5hcHBlbmRDaGlsZChORVdfTElTVF9CVVRUT04pO1xyXG4gIC8vIGxvYWQgdG9kb0xpc3RzIGlkcyBmcm9tIHN0b3JhZ2VcclxuICBjb25zdCBpZExpc3QgPSBnZXRJZExpc3QoKTtcclxuICAvLyBhZGQgYWxsIHRvZG9MaXN0IGJ1dHRvbnMgdG8gbmF2XHJcbiAgaWRMaXN0LmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvTGlzdCA9IHJlYWRUb2RvTGlzdChpZCk7XHJcbiAgICBhZGRUb2RvTGlzdCh0b2RvTGlzdCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tJztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vVG9kb0xpc3QnO1xyXG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XHJcblxyXG5pbXBvcnQgJy4vbGF5b3V0LmNzcyc7XHJcbmltcG9ydCAnLi9oZWFkZXIuY3NzJztcclxuaW1wb3J0ICcuL25hdi5jc3MnO1xyXG5pbXBvcnQgJy4vbWFpbi5jc3MnO1xyXG5cclxuZG9tLmxvYWRQYWdlKCk7XHJcblxyXG5jb25zdCB0b2RvID0gc3RvcmFnZS5yZWFkVG9kb0xpc3QoNyk7XHJcbmRvbS5sb2FkVG9kb0xpc3QodG9kbyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3VGFzayhkZXRhaWxzLCBkYXRlLCBsaXN0SWQpIHtcclxuICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soZGV0YWlscywgc3RvcmFnZS51bmlxZUlkKCksIGxpc3RJZCwgZmFsc2UsIGRhdGUpO1xyXG4gIGNvbnN0IHRvZG9MaXN0ID0gc3RvcmFnZS5yZWFkVG9kb0xpc3QobGlzdElkKTtcclxuXHJcbiAgdG9kb0xpc3QuYWRkVGFzayhuZXdUYXNrKTtcclxuICBzdG9yYWdlLndyaXRlVG9kb0xpc3QodG9kb0xpc3QpO1xyXG5cclxuICBkb20uYWRkVGFzayhuZXdUYXNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soaWQsIGxpc3RJZCkge1xyXG4gIHN0b3JhZ2UuZGVsZXRlVG9kb0xpc3QoaWQpO1xyXG5cclxuICBjb25zdCB0b2RvTGlzdCA9IHN0b3JhZ2UucmVhZFRvZG9MaXN0KGxpc3RJZCk7XHJcbiAgdG9kb0xpc3QucmVtb3ZlVGFzayhpZCk7XHJcbiAgc3RvcmFnZS53cml0ZVRvZG9MaXN0KHRvZG9MaXN0KTtcclxuXHJcbiAgZG9tLnJlbW92ZVRhc2soaWQpO1xyXG59XHJcbiIsImltcG9ydCBUb2RvTGlzdCBmcm9tICcuL1RvZG9MaXN0JztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcclxuXHJcbi8vIGNyZWF0ZSB1bmlxZUlkIHZhcmlhYmxlIGluIGxvY2FsIHN0b3JhZ2UgaWYgbm90IGV4aXN0XHJcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VuaXFlSWQnKSkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1bmlxZUlkJywgMSk7XHJcbn1cclxuXHJcbi8vIHJldHVybiBhIHVuaXFlIGludGVnZXJcclxuZXhwb3J0IGZ1bmN0aW9uIHVuaXFlSWQoKSB7XHJcbiAgY29uc3QgaWQgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW5pcWVJZCcpKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndW5pcWVJZCcsIGlkICsgMSk7XHJcbiAgcmV0dXJuIGlkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZFRvZG9MaXN0KGlkKSB7XHJcbiAgLy8gY2hlY2sgaWYgVG9kb0xpc3QgZXhpc3RcclxuICBsZXQgcmF3VG9kb0xpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCk7XHJcbiAgaWYgKCFyYXdUb2RvTGlzdCkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHJcbiAgLy8gcGFyc2UgdGhlIHJhdyB0b2RvTGlzdCB0byBhIFRvZG9MaXN0IE9iamVjdFxyXG4gIHJhd1RvZG9MaXN0ID0gSlNPTi5wYXJzZShyYXdUb2RvTGlzdCk7XHJcbiAgY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QocmF3VG9kb0xpc3QudGl0bGUsIGlkKTtcclxuICAvLyBhZGQgdGFza3MgdG8gdGhlIHRvZG9MaXN0XHJcbiAgcmF3VG9kb0xpc3QudGFza0lkTGlzdC5mb3JFYWNoKCh0YXNrSWQpID0+IHtcclxuICAgIGxldCByYXdUYXNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGFza0lkKTtcclxuICAgIGlmIChyYXdUYXNrKSB7XHJcbiAgICAgIHJhd1Rhc2sgPSBKU09OLnBhcnNlKHJhd1Rhc2spO1xyXG4gICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soXHJcbiAgICAgICAgcmF3VGFzay5kZXRhaWxzLFxyXG4gICAgICAgIHJhd1Rhc2suaWQsXHJcbiAgICAgICAgcmF3VGFzay5wcm9qZWN0SWQsXHJcbiAgICAgICAgcmF3VGFzay5kb25lLFxyXG4gICAgICAgIHJhd1Rhc2suZHVlRGF0ZSxcclxuICAgICAgKTtcclxuICAgICAgdG9kb0xpc3QuYWRkVGFzayh0YXNrKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHRvZG9MaXN0O1xyXG59XHJcblxyXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZExpc3QnKSkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZExpc3QnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb0lkTGlzdChpZCkge1xyXG4gIGNvbnN0IGlkTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkTGlzdCcpKTtcclxuICBpZiAoaWRMaXN0IGluc3RhbmNlb2YgQXJyYXkgJiYgIWlkTGlzdC5pbmNsdWRlcyhpZCkpIHtcclxuICAgIGlkTGlzdC5wdXNoKGlkKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZExpc3QnLCBKU09OLnN0cmluZ2lmeShpZExpc3QpKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZyb21JZExpc3QoaWQpIHtcclxuICBjb25zdCBpZExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZExpc3QnKSk7XHJcbiAgaWYgKGlkTGlzdCBpbnN0YW5jZW9mIEFycmF5ICYmICFpZExpc3QuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGlkTGlzdC5maW5kSW5kZXgoKGN1cnJlbnRJZCkgPT4gY3VycmVudElkID09PSBpZCk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7IGlkTGlzdC5zcGxpY2UoaW5kZXgsIDEpOyB9XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRMaXN0JywgSlNPTi5zdHJpbmdpZnkoaWRMaXN0KSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWRMaXN0KCkge1xyXG4gIGNvbnN0IGlkTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZExpc3QnKTtcclxuICByZXR1cm4gSlNPTi5wYXJzZShpZExpc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVUb2RvTGlzdCh0b2RvTGlzdCkge1xyXG4gIC8vIHdyaXRlIGFsbCB0YXNrcyB0byBsb2NhbCBzdG9yYWdlXHJcbiAgdG9kb0xpc3QudGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFzay5pZCwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjb252ZXJ0IGVhY2ggdGFzayBpbiB0YXNrIGxpc3QgdG8gaXQncyBpZFxyXG4gIGNvbnN0IHRhc2tJZExpc3QgPSB0b2RvTGlzdC50YXNrTGlzdC5tYXAoKHRhc2spID0+IHRhc2suaWQpO1xyXG5cclxuICAvLyBjcmVhdGUgYSByYXcgdG9kb0xpc3QgYW5kIHdyaXRlIGl0IHRvIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCByYXdUb2RvTGlzdCA9IHtcclxuICAgIHRpdGxlOiB0b2RvTGlzdC50aXRsZSxcclxuICAgIHRhc2tJZExpc3QsXHJcbiAgfTtcclxuICAvLyB3cml0ZSByYXdUb2RvTGlzdCB0byBsb2NhbCBzdG9yYWdlXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odG9kb0xpc3QuaWQsIEpTT04uc3RyaW5naWZ5KHJhd1RvZG9MaXN0KSk7XHJcbiAgLy8gd3JpdGUgaWQgdG8gaWRMaXN0XHJcbiAgYWRkVG9JZExpc3QodG9kb0xpc3QuaWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVG9kb0xpc3QoaWQpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShpZCk7XHJcbiAgcmVtb3ZlRnJvbUlkTGlzdChpZCk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9