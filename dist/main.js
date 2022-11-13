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
  constructor(details, id, listId, done = false, dueDate = 'no-due-date') {
    this.details = details;
    this.id = id;
    this.listId = listId;
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
/* harmony import */ var _imgs_editing_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/editing.png */ "./src/imgs/editing.png");
/* harmony import */ var _imgs_bin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/bin.png */ "./src/imgs/bin.png");





function removeTask(id) {
  const task = document.querySelector(`[data-task-id="${id}"]`);
  if (task) {
    task.remove();
    return true;
  }
  return false;
}

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
  EDITICON.src = _imgs_editing_png__WEBPACK_IMPORTED_MODULE_1__["default"];
  EDIT.appendChild(EDITICON);
  TASK.appendChild(EDIT);
  // delete button
  const DELETE = document.createElement('button');
  DELETE.classList.add('delete');
  const DELETEICON = new Image();
  DELETEICON.src = _imgs_bin_png__WEBPACK_IMPORTED_MODULE_2__["default"];
  DELETE.appendChild(DELETEICON);
  DELETE.addEventListener('click', (e) => {
    const taskId = parseInt(e.target.parentNode.parentNode.dataset.taskId);
    const isDeleted = _storage__WEBPACK_IMPORTED_MODULE_0__.removeTask(taskId);
    if (isDeleted) {
      removeTask(taskId);
    }
  });
  TASK.appendChild(DELETE);
  // insert task before new task button
  const MAIN = document.querySelector('.main');
  const NEW_TASK_BUTTON = document.querySelector('.add-task-button');
  MAIN.insertBefore(TASK, NEW_TASK_BUTTON);
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

    const newTask = _storage__WEBPACK_IMPORTED_MODULE_0__.addNewTask(details, date, listId);
    if (newTask) {
      document.querySelector('.new-task-form').remove();
      addTask(newTask);
    }
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

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem),
/* harmony export */   "getIdList": () => (/* binding */ getIdList),
/* harmony export */   "readTodoList": () => (/* binding */ readTodoList),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
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
        rawTask.listId,
        rawTask.done,
        rawTask.dueDate,
      );
      todoList.addTask(task);
    }
  });

  return todoList;
}

function readTask(id) {
  let rawTask = localStorage.getItem(id);
  if (!rawTask) { return false; }
  rawTask = JSON.parse(rawTask);
  const task = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](
    rawTask.details,
    id,
    rawTask.listId,
    rawTask.done,
    rawTask.dueDate,
  );

  return task;
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

function deleteItem(id) {
  localStorage.removeItem(id);
  removeFromIdList(id);
}

function addNewTask(details, date, listId) {
  const todoList = readTodoList(listId);
  if (!todoList) { return false; }

  const newTask = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](details, uniqeId(), listId, false, date);
  todoList.addTask(newTask);
  writeTodoList(todoList);
  return newTask;
}

function removeTask(id) {
  const task = readTask(id);
  if (!task) { return false; }

  const todoList = readTodoList(task.listId);
  if (!todoList) { return false; }
  todoList.removeTask(id);
  writeTodoList(todoList);
  deleteItem(id);
  return true;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0g7QUFDUTtBQUNHO0FBQ3JDO0FBQ3NCO0FBQ0E7QUFDSDtBQUNDO0FBQ3BCO0FBQ0EsMENBQVk7QUFDWjtBQUNBLGFBQWEsa0RBQW9CO0FBQ2pDLDhDQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9zcmMvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL2xheW91dC5jc3MiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL25hdi5jc3MiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9zcmMvaW1ncy9iaW4ucG5nIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9zcmMvaW1ncy9lZGl0aW5nLnBuZyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL2hlYWRlci5jc3M/YWIyZCIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL2xheW91dC5jc3M/ZWFlYyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9uYXYuY3NzPzIwYTciLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXJ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCB2YXIoLS1zaGFkb3cpO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXI6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IseUNBQXlDOztFQUV6QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVye1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggdmFyKC0tc2hhZG93KTtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXHJcXG4gIC0tcGFkOiA4cHg7XFxyXFxuXFxyXFxuICAtLXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTAwLCAuNSk7XFxyXFxuICAtLWJsdWU6ICM0MDU2YTE7XFxyXFxuICAtLWxpZ2h0LWJsdWU6ICNjNWNiZTM7XFxyXFxuICAtLXJlZDogI2YxM2MyZDtcXHJcXG4gIC0tZ29sZDogI2Q3OTkyMjtcXHJcXG4gIC0tb2ZmLXdoaXRlOiAjZWZlMmJhO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG5cXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJ7XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7O0VBRVYsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixvQkFBb0I7O0FBRXRCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7O0VBRVQsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXHJcXG4gIC0tcGFkOiA4cHg7XFxyXFxuXFxyXFxuICAtLXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTAwLCAuNSk7XFxyXFxuICAtLWJsdWU6ICM0MDU2YTE7XFxyXFxuICAtLWxpZ2h0LWJsdWU6ICNjNWNiZTM7XFxyXFxuICAtLXJlZDogI2YxM2MyZDtcXHJcXG4gIC0tZ29sZDogI2Q3OTkyMjtcXHJcXG4gIC0tb2ZmLXdoaXRlOiAjZWZlMmJhO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG5cXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJ7XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4gPiAqe1xcclxcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZCkvMik7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4IHZhcigtLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi50aXRsZXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuXFxyXFxuICBjb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiB2YXIoLS1wYWQpO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94e1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHN7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgPiBidXR0b257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgPiBidXR0b24gPiBpbWd7XFxyXFxuICB3aWR0aDogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stYnV0dG9ue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG5cXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tcGFkKSk7XFxyXFxufVxcclxcblxcclxcbi5uZXctdGFzay1mb3Jte1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IHZhcigtLXBhZCk7XFxyXFxufVxcclxcblxcclxcbi5uZXctdGFzay1mb3JtID4gKntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXctdGFzay1mb3JtID4gaW5wdXQ6Zm9jdXN7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1pbnB1dHtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idXR0b257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw0QkFBNEI7O0VBRTVCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCOztFQUVqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlOztFQUVmLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXOztFQUVYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZOztFQUVaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTs7RUFFWixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtDQUFrQzs7RUFFbEMsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW57XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxufVxcclxcblxcclxcbi5tYWluID4gKntcXHJcXG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWQpLzIpO1xcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCB2YXIoLS1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGV7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcblxcclxcbiAgY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2t7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogdmFyKC0tcGFkKTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveHtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcblxcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxze1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrID4gYnV0dG9ue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrID4gYnV0dG9uID4gaW1ne1xcclxcbiAgd2lkdGg6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrLWJ1dHRvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuXFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXBhZCkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2stZm9ybXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiB2YXIoLS1wYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2stZm9ybSA+ICp7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2stZm9ybSA+IGlucHV0OmZvY3Vze1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtaW5wdXR7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9ue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWwtYnV0dG9ue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hdntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IHZhcigtLXNoYWRvdyk7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdjpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYgPiBidXR0b257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHdpZHRoOiAxMnZ3O1xcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYgPiBidXR0b246aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsIC4yKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWxpc3QtZm9ybXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggdmFyKC0tc2hhZG93KTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxufVxcclxcblxcclxcbi5uZXctbGlzdC1mb3JtIGlucHV0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcclxcbiAgd2lkdGg6IDEydnc7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWxpc3QtZm9ybSBidXR0b257XFxyXFxuICBtYXJnaW46IHZhcigtLXBhZCk7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9uYXYuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUNBQW1DO0VBQ25DLHlDQUF5Qzs7RUFFekMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7O0VBRVosaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlDQUF5QztFQUN6QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7O0VBRTlCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uYXZ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCB2YXIoLS1zaGFkb3cpO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbi5uYXY6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2ID4gYnV0dG9ue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB3aWR0aDogMTJ2dztcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2ID4gYnV0dG9uOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDEwMCwgMTAwLCAuMik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1saXN0LWZvcm17XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4IHZhcigtLXNoYWRvdyk7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWxpc3QtZm9ybSBpbnB1dHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMnZ3O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1saXN0LWZvcm0gYnV0dG9ue1xcclxcbiAgbWFyZ2luOiB2YXIoLS1wYWQpO1xcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE2ZmQyOTUwOTcxOWYwNzliZmQ3NmVkNTA0ODc4Zjk3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNDJjM2M2M2M2Yjk3YTEwNzQ2ZDVjOGRlYjJhM2FmYS5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYXlvdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYXlvdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKGRldGFpbHMsIGlkLCBsaXN0SWQsIGRvbmUgPSBmYWxzZSwgZHVlRGF0ZSA9ICduby1kdWUtZGF0ZScpIHtcclxuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmxpc3RJZCA9IGxpc3RJZDtcclxuICAgIC8vIG9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgIHRoaXMuZG9uZSA9IGRvbmU7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRG9uZSgpIHtcclxuICAgIHRoaXMuZG9uZSA9ICF0aGlzLmRvbmU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgaWQpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGFzaykge1xyXG4gICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVGFzayhpZCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tMaXN0LmZpbmRJbmRleCgodGFzaykgPT4gaWQgPT09IHRhc2suaWQpO1xyXG5cclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0SWRMaXN0LCByZWFkVG9kb0xpc3QgfSBmcm9tICcuL3N0b3JhZ2UnO1xyXG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XHJcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2ltZ3MvZWRpdGluZy5wbmcnO1xyXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2ltZ3MvYmluLnBuZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayhpZCkge1xyXG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHtpZH1cIl1gKTtcclxuICBpZiAodGFzaykge1xyXG4gICAgdGFzay5yZW1vdmUoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8vIG1haW4gY29udGVudCBmdW5jdGlvbnNcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xyXG4gIGNvbnN0IFRBU0sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBUQVNLLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICBUQVNLLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcclxuXHJcbiAgLy8gY2hlY2tib3hcclxuICBjb25zdCBDSEVDS0JPWCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIENIRUNLQk9YLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgVEFTSy5hcHBlbmRDaGlsZChDSEVDS0JPWCk7XHJcbiAgLy8gZGV0YWlsc1xyXG4gIGNvbnN0IERFVEFJTFMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBERVRBSUxTLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcclxuICBERVRBSUxTLnRleHRDb250ZW50ID0gdGFzay5kZXRhaWxzO1xyXG4gIFRBU0suYXBwZW5kQ2hpbGQoREVUQUlMUyk7XHJcbiAgLy8gZHVlRGF0ZVxyXG4gIGNvbnN0IERBVEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBEQVRFLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcclxuICBEQVRFLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xyXG4gIFRBU0suYXBwZW5kQ2hpbGQoREFURSk7XHJcbiAgLy8gZWRpdCBidXR0b25cclxuICBjb25zdCBFRElUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgRURJVC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XHJcbiAgY29uc3QgRURJVElDT04gPSBuZXcgSW1hZ2UoKTtcclxuICBFRElUSUNPTi5zcmMgPSBlZGl0SWNvbjtcclxuICBFRElULmFwcGVuZENoaWxkKEVESVRJQ09OKTtcclxuICBUQVNLLmFwcGVuZENoaWxkKEVESVQpO1xyXG4gIC8vIGRlbGV0ZSBidXR0b25cclxuICBjb25zdCBERUxFVEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBERUxFVEUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XHJcbiAgY29uc3QgREVMRVRFSUNPTiA9IG5ldyBJbWFnZSgpO1xyXG4gIERFTEVURUlDT04uc3JjID0gZGVsZXRlSWNvbjtcclxuICBERUxFVEUuYXBwZW5kQ2hpbGQoREVMRVRFSUNPTik7XHJcbiAgREVMRVRFLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IHRhc2tJZCA9IHBhcnNlSW50KGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LnRhc2tJZCk7XHJcbiAgICBjb25zdCBpc0RlbGV0ZWQgPSBzdG9yYWdlLnJlbW92ZVRhc2sodGFza0lkKTtcclxuICAgIGlmIChpc0RlbGV0ZWQpIHtcclxuICAgICAgcmVtb3ZlVGFzayh0YXNrSWQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFRBU0suYXBwZW5kQ2hpbGQoREVMRVRFKTtcclxuICAvLyBpbnNlcnQgdGFzayBiZWZvcmUgbmV3IHRhc2sgYnV0dG9uXHJcbiAgY29uc3QgTUFJTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgY29uc3QgTkVXX1RBU0tfQlVUVE9OID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ1dHRvbicpO1xyXG4gIE1BSU4uaW5zZXJ0QmVmb3JlKFRBU0ssIE5FV19UQVNLX0JVVFRPTik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdUYXNrRm9ybSgpIHtcclxuICBjb25zdCBGT1JNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgRk9STS5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1mb3JtJyk7XHJcblxyXG4gIGNvbnN0IERFVEFJTFMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIERFVEFJTFMucGxhY2Vob2xkZXIgPSAndGFzayBkZXRhaWxzLi4uJztcclxuICBERVRBSUxTLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtaW5wdXQnKTtcclxuICBGT1JNLmFwcGVuZENoaWxkKERFVEFJTFMpO1xyXG5cclxuICBjb25zdCBEQVRFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBEQVRFLnR5cGUgPSAnZGF0ZSc7XHJcbiAgREFURS5jbGFzc0xpc3QuYWRkKCdkYXRlLWlucHV0Jyk7XHJcbiAgRk9STS5hcHBlbmRDaGlsZChEQVRFKTtcclxuXHJcbiAgY29uc3QgQUREID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgQURELmNsYXNzTGlzdC5hZGQoJ2FkZC1idXR0b24nKTtcclxuICBBREQudGV4dENvbnRlbnQgPSAnQWRkJztcclxuICBBREQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBkZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy1pbnB1dCcpO1xyXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtaW5wdXQnKTtcclxuXHJcbiAgICBjb25zdCBkZXRhaWxzID0gZGV0YWlsc0lucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVJbnB1dC52YWx1ZSk7XHJcbiAgICBjb25zdCBsaXN0SWQgPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5kYXRhc2V0LnRvZG9MaXN0SWQpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBzdG9yYWdlLmFkZE5ld1Rhc2soZGV0YWlscywgZGF0ZSwgbGlzdElkKTtcclxuICAgIGlmIChuZXdUYXNrKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay1mb3JtJykucmVtb3ZlKCk7XHJcbiAgICAgIGFkZFRhc2sobmV3VGFzayk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgRk9STS5hcHBlbmRDaGlsZChBREQpO1xyXG5cclxuICBjb25zdCBDQU5DRUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBDQU5DRUwuY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpO1xyXG4gIENBTkNFTC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIENBTkNFTC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay1mb3JtJykucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbiAgRk9STS5hcHBlbmRDaGlsZChDQU5DRUwpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmFwcGVuZENoaWxkKEZPUk0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRvZG9MaXN0KHRvZG9MaXN0KSB7XHJcbiAgY29uc3QgTUFJTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgLy8gYWRkIHRpdGxlIGRpdlxyXG4gIGNvbnN0IFRJVExFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgVElUTEUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICBUSVRMRS50ZXh0Q29udGVudCA9IHRvZG9MaXN0LnRpdGxlO1xyXG4gIFRJVExFLmRhdGFzZXQudG9kb0xpc3RJZCA9IHRvZG9MaXN0LmlkO1xyXG4gIE1BSU4uYXBwZW5kQ2hpbGQoVElUTEUpO1xyXG4gIC8vIGFkZCBhbGwgdGFza3MgZGl2c1xyXG4gIHRvZG9MaXN0LnRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHsgYWRkVGFzayh0YXNrKTsgfSk7XHJcbiAgLy8gYWRkIHRhc2sgYnV0dG9uXHJcbiAgY29uc3QgQUREX1RBU0tfQlVUVE9OID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgQUREX1RBU0tfQlVUVE9OLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ1dHRvbicpO1xyXG4gIEFERF9UQVNLX0JVVFRPTi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgQUREX1RBU0tfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stZm9ybScpKSB7XHJcbiAgICAgIG5ld1Rhc2tGb3JtKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgTUFJTi5hcHBlbmRDaGlsZChBRERfVEFTS19CVVRUT04pO1xyXG59XHJcblxyXG4vLyBuYXYgY29udGVudCBmdW5jdGlvbnNcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9MaXN0KHRvZG9MaXN0KSB7XHJcbiAgY29uc3QgTElTVF9CVVRUT04gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBMSVNUX0JVVFRPTi5jbGFzc0xpc3QuYWRkKCdsaXN0LWJ1dHRvbicpO1xyXG4gIExJU1RfQlVUVE9OLnRleHRDb250ZW50ID0gdG9kb0xpc3QudGl0bGU7XHJcbiAgTElTVF9CVVRUT04uZGF0YXNldC5pZCA9IHRvZG9MaXN0LmlkO1xyXG5cclxuICAvLyBhcHBlbmQgYnV0dG9uIGJlZm9yZSBuZXcgbGlzdCBidXR0b25cclxuICBjb25zdCBOQVYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Jyk7XHJcbiAgY29uc3QgTkVXX0xJU1RfQlVUVE9OID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1saXN0LWJ1dHRvbicpO1xyXG4gIE5BVi5pbnNlcnRCZWZvcmUoTElTVF9CVVRUT04sIE5FV19MSVNUX0JVVFRPTik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2RvTGlzdChpZCkge1xyXG4gIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGF0YS1pZD1cIiR7aWR9XCJgKTtcclxuICBpZiAodG9kb0xpc3QpIHtcclxuICAgIHRvZG9MaXN0LnJlbW92ZSgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld0xpc3RGb3JtKCkge1xyXG4gIGNvbnN0IEZPUk0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBGT1JNLmNsYXNzTGlzdC5hZGQoJ25ldy1saXN0LWZvcm0nKTtcclxuXHJcbiAgY29uc3QgSU5QVVQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIElOUFVULmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWlucHV0Jyk7XHJcbiAgRk9STS5hcHBlbmRDaGlsZChJTlBVVCk7XHJcblxyXG4gIGNvbnN0IEFERCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIEFERC5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJyk7XHJcbiAgQURELnRleHRDb250ZW50ID0gJ0FkZCc7XHJcbiAgRk9STS5hcHBlbmRDaGlsZChBREQpO1xyXG5cclxuICBjb25zdCBDQU5DRUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBDQU5DRUwuY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpO1xyXG4gIENBTkNFTC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIENBTkNFTC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbGlzdC1mb3JtJykucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbiAgRk9STS5hcHBlbmRDaGlsZChDQU5DRUwpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JykuYXBwZW5kQ2hpbGQoRk9STSk7XHJcbn1cclxuLy8gZ2VuZXJhbCBkb20gZnVuY3Rpb25zXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcclxuICAvLyBsYXlvdXQgZGl2c1xyXG4gIGNvbnN0IEhFQURFUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIEhFQURFUi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuICBIRUFERVIudGV4dENvbnRlbnQgPSAnVGFzayBPdmVyZmxvdyc7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChIRUFERVIpO1xyXG5cclxuICBjb25zdCBOQVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBOQVYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChOQVYpO1xyXG5cclxuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgTUFJTi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChNQUlOKTtcclxuXHJcbiAgLy8gbmF2IGNvbnRlbnRcclxuICAvLyBhZGQgbmV3IHRvZG9saXN0IGJ1dHRvblxyXG4gIGNvbnN0IE5FV19MSVNUX0JVVFRPTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIE5FV19MSVNUX0JVVFRPTi5jbGFzc0xpc3QuYWRkKCduZXctbGlzdC1idXR0b24nKTtcclxuICBORVdfTElTVF9CVVRUT04udGV4dENvbnRlbnQgPSAnY3JlYXRlIG5ldyBsaXN0JztcclxuICBORVdfTElTVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbGlzdC1mb3JtJykpIHtcclxuICAgICAgbmV3TGlzdEZvcm0oKTtcclxuICAgIH1cclxuICB9KTtcclxuICBOQVYuYXBwZW5kQ2hpbGQoTkVXX0xJU1RfQlVUVE9OKTtcclxuICAvLyBsb2FkIHRvZG9MaXN0cyBpZHMgZnJvbSBzdG9yYWdlXHJcbiAgY29uc3QgaWRMaXN0ID0gZ2V0SWRMaXN0KCk7XHJcbiAgLy8gYWRkIGFsbCB0b2RvTGlzdCBidXR0b25zIHRvIG5hdlxyXG4gIGlkTGlzdC5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgY29uc3QgdG9kb0xpc3QgPSByZWFkVG9kb0xpc3QoaWQpO1xyXG4gICAgYWRkVG9kb0xpc3QodG9kb0xpc3QpO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBUb2RvTGlzdCBmcm9tICcuL1RvZG9MaXN0JztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcclxuXHJcbi8vIGNyZWF0ZSB1bmlxZUlkIHZhcmlhYmxlIGluIGxvY2FsIHN0b3JhZ2UgaWYgbm90IGV4aXN0XHJcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VuaXFlSWQnKSkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1bmlxZUlkJywgMSk7XHJcbn1cclxuXHJcbi8vIHJldHVybiBhIHVuaXFlIGludGVnZXJcclxuZXhwb3J0IGZ1bmN0aW9uIHVuaXFlSWQoKSB7XHJcbiAgY29uc3QgaWQgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW5pcWVJZCcpKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndW5pcWVJZCcsIGlkICsgMSk7XHJcbiAgcmV0dXJuIGlkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZFRvZG9MaXN0KGlkKSB7XHJcbiAgLy8gY2hlY2sgaWYgVG9kb0xpc3QgZXhpc3RcclxuICBsZXQgcmF3VG9kb0xpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCk7XHJcbiAgaWYgKCFyYXdUb2RvTGlzdCkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHJcbiAgLy8gcGFyc2UgdGhlIHJhdyB0b2RvTGlzdCB0byBhIFRvZG9MaXN0IE9iamVjdFxyXG4gIHJhd1RvZG9MaXN0ID0gSlNPTi5wYXJzZShyYXdUb2RvTGlzdCk7XHJcbiAgY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QocmF3VG9kb0xpc3QudGl0bGUsIGlkKTtcclxuICAvLyBhZGQgdGFza3MgdG8gdGhlIHRvZG9MaXN0XHJcbiAgcmF3VG9kb0xpc3QudGFza0lkTGlzdC5mb3JFYWNoKCh0YXNrSWQpID0+IHtcclxuICAgIGxldCByYXdUYXNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGFza0lkKTtcclxuICAgIGlmIChyYXdUYXNrKSB7XHJcbiAgICAgIHJhd1Rhc2sgPSBKU09OLnBhcnNlKHJhd1Rhc2spO1xyXG4gICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soXHJcbiAgICAgICAgcmF3VGFzay5kZXRhaWxzLFxyXG4gICAgICAgIHJhd1Rhc2suaWQsXHJcbiAgICAgICAgcmF3VGFzay5saXN0SWQsXHJcbiAgICAgICAgcmF3VGFzay5kb25lLFxyXG4gICAgICAgIHJhd1Rhc2suZHVlRGF0ZSxcclxuICAgICAgKTtcclxuICAgICAgdG9kb0xpc3QuYWRkVGFzayh0YXNrKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHRvZG9MaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkVGFzayhpZCkge1xyXG4gIGxldCByYXdUYXNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpO1xyXG4gIGlmICghcmF3VGFzaykgeyByZXR1cm4gZmFsc2U7IH1cclxuICByYXdUYXNrID0gSlNPTi5wYXJzZShyYXdUYXNrKTtcclxuICBjb25zdCB0YXNrID0gbmV3IFRhc2soXHJcbiAgICByYXdUYXNrLmRldGFpbHMsXHJcbiAgICBpZCxcclxuICAgIHJhd1Rhc2subGlzdElkLFxyXG4gICAgcmF3VGFzay5kb25lLFxyXG4gICAgcmF3VGFzay5kdWVEYXRlLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiB0YXNrO1xyXG59XHJcblxyXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZExpc3QnKSkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZExpc3QnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb0lkTGlzdChpZCkge1xyXG4gIGNvbnN0IGlkTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkTGlzdCcpKTtcclxuICBpZiAoaWRMaXN0IGluc3RhbmNlb2YgQXJyYXkgJiYgIWlkTGlzdC5pbmNsdWRlcyhpZCkpIHtcclxuICAgIGlkTGlzdC5wdXNoKGlkKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZExpc3QnLCBKU09OLnN0cmluZ2lmeShpZExpc3QpKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZyb21JZExpc3QoaWQpIHtcclxuICBjb25zdCBpZExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZExpc3QnKSk7XHJcbiAgaWYgKGlkTGlzdCBpbnN0YW5jZW9mIEFycmF5ICYmICFpZExpc3QuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGlkTGlzdC5maW5kSW5kZXgoKGN1cnJlbnRJZCkgPT4gY3VycmVudElkID09PSBpZCk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7IGlkTGlzdC5zcGxpY2UoaW5kZXgsIDEpOyB9XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRMaXN0JywgSlNPTi5zdHJpbmdpZnkoaWRMaXN0KSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWRMaXN0KCkge1xyXG4gIGNvbnN0IGlkTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZExpc3QnKTtcclxuICByZXR1cm4gSlNPTi5wYXJzZShpZExpc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVUb2RvTGlzdCh0b2RvTGlzdCkge1xyXG4gIC8vIHdyaXRlIGFsbCB0YXNrcyB0byBsb2NhbCBzdG9yYWdlXHJcbiAgdG9kb0xpc3QudGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFzay5pZCwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjb252ZXJ0IGVhY2ggdGFzayBpbiB0YXNrIGxpc3QgdG8gaXQncyBpZFxyXG4gIGNvbnN0IHRhc2tJZExpc3QgPSB0b2RvTGlzdC50YXNrTGlzdC5tYXAoKHRhc2spID0+IHRhc2suaWQpO1xyXG5cclxuICAvLyBjcmVhdGUgYSByYXcgdG9kb0xpc3QgYW5kIHdyaXRlIGl0IHRvIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCByYXdUb2RvTGlzdCA9IHtcclxuICAgIHRpdGxlOiB0b2RvTGlzdC50aXRsZSxcclxuICAgIHRhc2tJZExpc3QsXHJcbiAgfTtcclxuICAvLyB3cml0ZSByYXdUb2RvTGlzdCB0byBsb2NhbCBzdG9yYWdlXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odG9kb0xpc3QuaWQsIEpTT04uc3RyaW5naWZ5KHJhd1RvZG9MaXN0KSk7XHJcbiAgLy8gd3JpdGUgaWQgdG8gaWRMaXN0XHJcbiAgYWRkVG9JZExpc3QodG9kb0xpc3QuaWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSXRlbShpZCkge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGlkKTtcclxuICByZW1vdmVGcm9tSWRMaXN0KGlkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1Rhc2soZGV0YWlscywgZGF0ZSwgbGlzdElkKSB7XHJcbiAgY29uc3QgdG9kb0xpc3QgPSByZWFkVG9kb0xpc3QobGlzdElkKTtcclxuICBpZiAoIXRvZG9MaXN0KSB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soZGV0YWlscywgdW5pcWVJZCgpLCBsaXN0SWQsIGZhbHNlLCBkYXRlKTtcclxuICB0b2RvTGlzdC5hZGRUYXNrKG5ld1Rhc2spO1xyXG4gIHdyaXRlVG9kb0xpc3QodG9kb0xpc3QpO1xyXG4gIHJldHVybiBuZXdUYXNrO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayhpZCkge1xyXG4gIGNvbnN0IHRhc2sgPSByZWFkVGFzayhpZCk7XHJcbiAgaWYgKCF0YXNrKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICBjb25zdCB0b2RvTGlzdCA9IHJlYWRUb2RvTGlzdCh0YXNrLmxpc3RJZCk7XHJcbiAgaWYgKCF0b2RvTGlzdCkgeyByZXR1cm4gZmFsc2U7IH1cclxuICB0b2RvTGlzdC5yZW1vdmVUYXNrKGlkKTtcclxuICB3cml0ZVRvZG9MaXN0KHRvZG9MaXN0KTtcclxuICBkZWxldGVJdGVtKGlkKTtcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tJztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vVG9kb0xpc3QnO1xyXG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XHJcblxyXG5pbXBvcnQgJy4vbGF5b3V0LmNzcyc7XHJcbmltcG9ydCAnLi9oZWFkZXIuY3NzJztcclxuaW1wb3J0ICcuL25hdi5jc3MnO1xyXG5pbXBvcnQgJy4vbWFpbi5jc3MnO1xyXG5cclxuZG9tLmxvYWRQYWdlKCk7XHJcblxyXG5jb25zdCB0b2RvID0gc3RvcmFnZS5yZWFkVG9kb0xpc3QoNyk7XHJcbmRvbS5sb2FkVG9kb0xpc3QodG9kbyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==