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
/* harmony import */ var _imgs_editing_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/editing.png */ "./src/imgs/editing.png");
/* harmony import */ var _imgs_bin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/bin.png */ "./src/imgs/bin.png");




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
  TASK.appendChild(DELETE);
  // insert task before new task button
  const MAIN = document.querySelector('.main');
  const NEW_TASK_BUTTON = document.querySelector('.new-task-button');
  MAIN.insertBefore(TASK, NEW_TASK_BUTTON);
}

function removeTask(id) {
  const task = document.querySelector(`data-id="${id}"`);
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
  FORM.appendChild(ADD);

  const CANCEL = document.createElement('button');
  CANCEL.classList.add('cancel-button');
  CANCEL.textContent = 'Cancel';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7Ozs7OztVQzNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E2QjtBQUNIO0FBQ1E7QUFDRztBQUNyQztBQUNzQjtBQUNBO0FBQ0g7QUFDQztBQUNwQjtBQUNBLDBDQUFZO0FBQ1o7QUFDQSxhQUFhLGtEQUFvQjtBQUNqQyw4Q0FBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9sYXlvdXQuY3NzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9uYXYuY3NzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL2ltZ3MvYmluLnBuZyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vc3JjL2ltZ3MvZWRpdGluZy5wbmciLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9oZWFkZXIuY3NzP2FiMmQiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9sYXlvdXQuY3NzP2VhZWMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9zcmMvbmF2LmNzcz8yMGE3Iiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9zcmMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGFzay1vdmVyZmxvdy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrLW92ZXJmbG93L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Rhc2stb3ZlcmZsb3cvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVye1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggdmFyKC0tc2hhZG93KTtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHlDQUF5Qzs7RUFFekMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlcntcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IHZhcigtLXNoYWRvdyk7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcjpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxyXFxuICAtLXBhZDogOHB4O1xcclxcblxcclxcbiAgLS1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDEwMCwgLjUpO1xcclxcbiAgLS1ibHVlOiAjNDA1NmExO1xcclxcbiAgLS1saWdodC1ibHVlOiAjYzVjYmUzO1xcclxcbiAgLS1yZWQ6ICNmMTNjMmQ7XFxyXFxuICAtLWdvbGQ6ICNkNzk5MjI7XFxyXFxuICAtLW9mZi13aGl0ZTogI2VmZTJiYTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuXFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4ZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVye1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVOztFQUVWLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9COztBQUV0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTOztFQUVULGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxyXFxuICAtLXBhZDogOHB4O1xcclxcblxcclxcbiAgLS1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDEwMCwgLjUpO1xcclxcbiAgLS1ibHVlOiAjNDA1NmExO1xcclxcbiAgLS1saWdodC1ibHVlOiAjYzVjYmUzO1xcclxcbiAgLS1yZWQ6ICNmMTNjMmQ7XFxyXFxuICAtLWdvbGQ6ICNkNzk5MjI7XFxyXFxuICAtLW9mZi13aGl0ZTogI2VmZTJiYTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuXFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4ZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVye1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW57XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxufVxcclxcblxcclxcbi5tYWluID4gKntcXHJcXG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWQpLzIpO1xcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCB2YXIoLS1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGV7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcblxcclxcbiAgY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2t7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogdmFyKC0tcGFkKTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveHtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcblxcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxze1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrID4gYnV0dG9ue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrID4gYnV0dG9uID4gaW1ne1xcclxcbiAgd2lkdGg6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrLWJ1dHRvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuXFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXBhZCkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2stZm9ybXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiB2YXIoLS1wYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2stZm9ybSA+ICp7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2stZm9ybSA+IGlucHV0OmZvY3Vze1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtaW5wdXR7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9ue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWwtYnV0dG9ue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsNEJBQTRCOztFQUU1Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjs7RUFFakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTs7RUFFZixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVzs7RUFFWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7O0VBRVosaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQ0FBa0M7O0VBRWxDLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWlue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA+ICp7XFxyXFxuICBtYXJnaW46IGNhbGModmFyKC0tcGFkKS8yKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggdmFyKC0tc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxle1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG5cXHJcXG4gIGNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxufVxcclxcblxcclxcbi50YXNre1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IHZhcigtLXBhZCk7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3h7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG5cXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsc3tcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayA+IGJ1dHRvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayA+IGJ1dHRvbiA+IGltZ3tcXHJcXG4gIHdpZHRoOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzay1idXR0b257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcblxcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1wYWQpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10YXNrLWZvcm17XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogdmFyKC0tcGFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10YXNrLWZvcm0gPiAqe1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10YXNrLWZvcm0gPiBpbnB1dDpmb2N1c3tcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWlucHV0e1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsLWJ1dHRvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5uYXZ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCB2YXIoLS1zaGFkb3cpO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbi5uYXY6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2ID4gYnV0dG9ue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB3aWR0aDogMTJ2dztcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2ID4gYnV0dG9uOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDEwMCwgMTAwLCAuMik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1saXN0LWZvcm17XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4IHZhcigtLXNoYWRvdyk7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWxpc3QtZm9ybSBpbnB1dHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMnZ3O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1saXN0LWZvcm0gYnV0dG9ue1xcclxcbiAgbWFyZ2luOiB2YXIoLS1wYWQpO1xcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbmF2LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1DQUFtQztFQUNuQyx5Q0FBeUM7O0VBRXpDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZOztFQUVaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCOztFQUU5QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmF2e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggdmFyKC0tc2hhZG93KTtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2OmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiA+IGJ1dHRvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgd2lkdGg6IDEydnc7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1wYWQpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiA+IGJ1dHRvbjpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCAxMDAsIDEwMCwgLjIpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxyXFxufVxcclxcblxcclxcbi5uZXctbGlzdC1mb3Jte1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCB2YXIoLS1zaGFkb3cpO1xcclxcbiAgcGFkZGluZzogdmFyKC0tcGFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1saXN0LWZvcm0gaW5wdXR7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFxyXFxuICB3aWR0aDogMTJ2dztcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5uZXctbGlzdC1mb3JtIGJ1dHRvbntcXHJcXG4gIG1hcmdpbjogdmFyKC0tcGFkKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXBhZCk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhNmZkMjk1MDk3MTlmMDc5YmZkNzZlZDUwNDg3OGY5Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTQyYzNjNjNjNmI5N2ExMDc0NmQ1YzhkZWIyYTNhZmEucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihkZXRhaWxzLCBpZCwgcHJvamVjdElkLCBkb25lID0gZmFsc2UsIGR1ZURhdGUgPSAnbm8tZHVlLWRhdGUnKSB7XHJcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XHJcbiAgICAvLyBvcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICB0aGlzLmRvbmUgPSBkb25lO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURvbmUoKSB7XHJcbiAgICB0aGlzLmRvbmUgPSAhdGhpcy5kb25lO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGlkKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRhc2soaWQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YXNrTGlzdC5maW5kSW5kZXgoKHRhc2spID0+IGlkID09PSB0YXNrLmlkKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdldElkTGlzdCwgcmVhZFRvZG9MaXN0IH0gZnJvbSAnLi9zdG9yYWdlJztcclxuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4vaW1ncy9lZGl0aW5nLnBuZyc7XHJcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vaW1ncy9iaW4ucG5nJztcclxuXHJcbi8vIG1haW4gY29udGVudCBmdW5jdGlvbnNcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xyXG4gIGNvbnN0IFRBU0sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBUQVNLLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICBUQVNLLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcclxuXHJcbiAgLy8gY2hlY2tib3hcclxuICBjb25zdCBDSEVDS0JPWCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIENIRUNLQk9YLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgVEFTSy5hcHBlbmRDaGlsZChDSEVDS0JPWCk7XHJcbiAgLy8gZGV0YWlsc1xyXG4gIGNvbnN0IERFVEFJTFMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBERVRBSUxTLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcclxuICBERVRBSUxTLnRleHRDb250ZW50ID0gdGFzay5kZXRhaWxzO1xyXG4gIFRBU0suYXBwZW5kQ2hpbGQoREVUQUlMUyk7XHJcbiAgLy8gZHVlRGF0ZVxyXG4gIGNvbnN0IERBVEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBEQVRFLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcclxuICBEQVRFLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xyXG4gIFRBU0suYXBwZW5kQ2hpbGQoREFURSk7XHJcbiAgLy8gZWRpdCBidXR0b25cclxuICBjb25zdCBFRElUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgRURJVC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XHJcbiAgY29uc3QgRURJVElDT04gPSBuZXcgSW1hZ2UoKTtcclxuICBFRElUSUNPTi5zcmMgPSBlZGl0SWNvbjtcclxuICBFRElULmFwcGVuZENoaWxkKEVESVRJQ09OKTtcclxuICBUQVNLLmFwcGVuZENoaWxkKEVESVQpO1xyXG4gIC8vIGRlbGV0ZSBidXR0b25cclxuICBjb25zdCBERUxFVEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBERUxFVEUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XHJcbiAgY29uc3QgREVMRVRFSUNPTiA9IG5ldyBJbWFnZSgpO1xyXG4gIERFTEVURUlDT04uc3JjID0gZGVsZXRlSWNvbjtcclxuICBERUxFVEUuYXBwZW5kQ2hpbGQoREVMRVRFSUNPTik7XHJcbiAgVEFTSy5hcHBlbmRDaGlsZChERUxFVEUpO1xyXG4gIC8vIGluc2VydCB0YXNrIGJlZm9yZSBuZXcgdGFzayBidXR0b25cclxuICBjb25zdCBNQUlOID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICBjb25zdCBORVdfVEFTS19CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stYnV0dG9uJyk7XHJcbiAgTUFJTi5pbnNlcnRCZWZvcmUoVEFTSywgTkVXX1RBU0tfQlVUVE9OKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2soaWQpIHtcclxuICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGF0YS1pZD1cIiR7aWR9XCJgKTtcclxuICBpZiAodGFzaykge1xyXG4gICAgdGFzay5yZW1vdmUoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdUYXNrRm9ybSgpIHtcclxuICBjb25zdCBGT1JNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgRk9STS5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1mb3JtJyk7XHJcblxyXG4gIGNvbnN0IERFVEFJTFMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIERFVEFJTFMucGxhY2Vob2xkZXIgPSAndGFzayBkZXRhaWxzLi4uJztcclxuICBERVRBSUxTLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtaW5wdXQnKTtcclxuICBGT1JNLmFwcGVuZENoaWxkKERFVEFJTFMpO1xyXG5cclxuICBjb25zdCBEQVRFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBEQVRFLnR5cGUgPSAnZGF0ZSc7XHJcbiAgREFURS5jbGFzc0xpc3QuYWRkKCdkYXRlLWlucHV0Jyk7XHJcbiAgRk9STS5hcHBlbmRDaGlsZChEQVRFKTtcclxuXHJcbiAgY29uc3QgQUREID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgQURELmNsYXNzTGlzdC5hZGQoJ2FkZC1idXR0b24nKTtcclxuICBBREQudGV4dENvbnRlbnQgPSAnQWRkJztcclxuICBGT1JNLmFwcGVuZENoaWxkKEFERCk7XHJcblxyXG4gIGNvbnN0IENBTkNFTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIENBTkNFTC5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJyk7XHJcbiAgQ0FOQ0VMLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgRk9STS5hcHBlbmRDaGlsZChDQU5DRUwpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmFwcGVuZENoaWxkKEZPUk0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRvZG9MaXN0KHRvZG9MaXN0KSB7XHJcbiAgY29uc3QgTUFJTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgLy8gYWRkIHRpdGxlIGRpdlxyXG4gIGNvbnN0IFRJVExFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgVElUTEUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICBUSVRMRS50ZXh0Q29udGVudCA9IHRvZG9MaXN0LnRpdGxlO1xyXG4gIFRJVExFLmRhdGFzZXQudG9kb0xpc3RJZCA9IHRvZG9MaXN0LmlkO1xyXG4gIE1BSU4uYXBwZW5kQ2hpbGQoVElUTEUpO1xyXG4gIC8vIGFkZCBhbGwgdGFza3MgZGl2c1xyXG4gIHRvZG9MaXN0LnRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHsgYWRkVGFzayh0YXNrKTsgfSk7XHJcbiAgLy8gYWRkIHRhc2sgYnV0dG9uXHJcbiAgY29uc3QgQUREX1RBU0tfQlVUVE9OID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgQUREX1RBU0tfQlVUVE9OLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ1dHRvbicpO1xyXG4gIEFERF9UQVNLX0JVVFRPTi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgQUREX1RBU0tfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stZm9ybScpKSB7XHJcbiAgICAgIG5ld1Rhc2tGb3JtKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgTUFJTi5hcHBlbmRDaGlsZChBRERfVEFTS19CVVRUT04pO1xyXG59XHJcblxyXG4vLyBuYXYgY29udGVudCBmdW5jdGlvbnNcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9MaXN0KHRvZG9MaXN0KSB7XHJcbiAgY29uc3QgTElTVF9CVVRUT04gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBMSVNUX0JVVFRPTi5jbGFzc0xpc3QuYWRkKCdsaXN0LWJ1dHRvbicpO1xyXG4gIExJU1RfQlVUVE9OLnRleHRDb250ZW50ID0gdG9kb0xpc3QudGl0bGU7XHJcbiAgTElTVF9CVVRUT04uZGF0YXNldC5pZCA9IHRvZG9MaXN0LmlkO1xyXG5cclxuICAvLyBhcHBlbmQgYnV0dG9uIGJlZm9yZSBuZXcgbGlzdCBidXR0b25cclxuICBjb25zdCBOQVYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Jyk7XHJcbiAgY29uc3QgTkVXX0xJU1RfQlVUVE9OID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1saXN0LWJ1dHRvbicpO1xyXG4gIE5BVi5pbnNlcnRCZWZvcmUoTElTVF9CVVRUT04sIE5FV19MSVNUX0JVVFRPTik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2RvTGlzdChpZCkge1xyXG4gIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGF0YS1pZD1cIiR7aWR9XCJgKTtcclxuICBpZiAodG9kb0xpc3QpIHtcclxuICAgIHRvZG9MaXN0LnJlbW92ZSgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld0xpc3RGb3JtKCkge1xyXG4gIGNvbnN0IEZPUk0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBGT1JNLmNsYXNzTGlzdC5hZGQoJ25ldy1saXN0LWZvcm0nKTtcclxuXHJcbiAgY29uc3QgSU5QVVQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIElOUFVULmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWlucHV0Jyk7XHJcbiAgRk9STS5hcHBlbmRDaGlsZChJTlBVVCk7XHJcblxyXG4gIGNvbnN0IEFERCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIEFERC5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJyk7XHJcbiAgQURELnRleHRDb250ZW50ID0gJ0FkZCc7XHJcbiAgRk9STS5hcHBlbmRDaGlsZChBREQpO1xyXG5cclxuICBjb25zdCBDQU5DRUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBDQU5DRUwuY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpO1xyXG4gIENBTkNFTC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIEZPUk0uYXBwZW5kQ2hpbGQoQ0FOQ0VMKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpLmFwcGVuZENoaWxkKEZPUk0pO1xyXG59XHJcbi8vIGdlbmVyYWwgZG9tIGZ1bmN0aW9uc1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XHJcbiAgLy8gbGF5b3V0IGRpdnNcclxuICBjb25zdCBIRUFERVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBIRUFERVIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcbiAgSEVBREVSLnRleHRDb250ZW50ID0gJ1Rhc2sgT3ZlcmZsb3cnO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoSEVBREVSKTtcclxuXHJcbiAgY29uc3QgTkFWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgTkFWLmNsYXNzTGlzdC5hZGQoJ25hdicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoTkFWKTtcclxuXHJcbiAgY29uc3QgTUFJTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIE1BSU4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoTUFJTik7XHJcblxyXG4gIC8vIG5hdiBjb250ZW50XHJcbiAgLy8gYWRkIG5ldyB0b2RvbGlzdCBidXR0b25cclxuICBjb25zdCBORVdfTElTVF9CVVRUT04gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBORVdfTElTVF9CVVRUT04uY2xhc3NMaXN0LmFkZCgnbmV3LWxpc3QtYnV0dG9uJyk7XHJcbiAgTkVXX0xJU1RfQlVUVE9OLnRleHRDb250ZW50ID0gJ2NyZWF0ZSBuZXcgbGlzdCc7XHJcbiAgTkVXX0xJU1RfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWxpc3QtZm9ybScpKSB7XHJcbiAgICAgIG5ld0xpc3RGb3JtKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgTkFWLmFwcGVuZENoaWxkKE5FV19MSVNUX0JVVFRPTik7XHJcbiAgLy8gbG9hZCB0b2RvTGlzdHMgaWRzIGZyb20gc3RvcmFnZVxyXG4gIGNvbnN0IGlkTGlzdCA9IGdldElkTGlzdCgpO1xyXG4gIC8vIGFkZCBhbGwgdG9kb0xpc3QgYnV0dG9ucyB0byBuYXZcclxuICBpZExpc3QuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gcmVhZFRvZG9MaXN0KGlkKTtcclxuICAgIGFkZFRvZG9MaXN0KHRvZG9MaXN0KTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi9Ub2RvTGlzdCc7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XHJcblxyXG4vLyBjcmVhdGUgdW5pcWVJZCB2YXJpYWJsZSBpbiBsb2NhbCBzdG9yYWdlIGlmIG5vdCBleGlzdFxyXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bmlxZUlkJykpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndW5pcWVJZCcsIDEpO1xyXG59XHJcblxyXG4vLyByZXR1cm4gYSB1bmlxZSBpbnRlZ2VyXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmlxZUlkKCkge1xyXG4gIGNvbnN0IGlkID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VuaXFlSWQnKSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VuaXFlSWQnLCBpZCArIDEpO1xyXG4gIHJldHVybiBpZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRUb2RvTGlzdChpZCkge1xyXG4gIC8vIGNoZWNrIGlmIFRvZG9MaXN0IGV4aXN0XHJcbiAgbGV0IHJhd1RvZG9MaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpO1xyXG4gIGlmICghcmF3VG9kb0xpc3QpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG4gIC8vIHBhcnNlIHRoZSByYXcgdG9kb0xpc3QgdG8gYSBUb2RvTGlzdCBPYmplY3RcclxuICByYXdUb2RvTGlzdCA9IEpTT04ucGFyc2UocmF3VG9kb0xpc3QpO1xyXG4gIGNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KHJhd1RvZG9MaXN0LnRpdGxlLCBpZCk7XHJcbiAgLy8gYWRkIHRhc2tzIHRvIHRoZSB0b2RvTGlzdFxyXG4gIHJhd1RvZG9MaXN0LnRhc2tJZExpc3QuZm9yRWFjaCgodGFza0lkKSA9PiB7XHJcbiAgICBsZXQgcmF3VGFzayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhc2tJZCk7XHJcbiAgICBpZiAocmF3VGFzaykge1xyXG4gICAgICByYXdUYXNrID0gSlNPTi5wYXJzZShyYXdUYXNrKTtcclxuICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxyXG4gICAgICAgIHJhd1Rhc2suZGV0YWlscyxcclxuICAgICAgICByYXdUYXNrLmlkLFxyXG4gICAgICAgIHJhd1Rhc2sucHJvamVjdElkLFxyXG4gICAgICAgIHJhd1Rhc2suZG9uZSxcclxuICAgICAgICByYXdUYXNrLmR1ZURhdGUsXHJcbiAgICAgICk7XHJcbiAgICAgIHRvZG9MaXN0LmFkZFRhc2sodGFzayk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0b2RvTGlzdDtcclxufVxyXG5cclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRMaXN0JykpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRMaXN0JywgSlNPTi5zdHJpbmdpZnkoW10pKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9JZExpc3QoaWQpIHtcclxuICBjb25zdCBpZExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZExpc3QnKSk7XHJcbiAgaWYgKGlkTGlzdCBpbnN0YW5jZW9mIEFycmF5ICYmICFpZExpc3QuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICBpZExpc3QucHVzaChpZCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRMaXN0JywgSlNPTi5zdHJpbmdpZnkoaWRMaXN0KSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGcm9tSWRMaXN0KGlkKSB7XHJcbiAgY29uc3QgaWRMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRMaXN0JykpO1xyXG4gIGlmIChpZExpc3QgaW5zdGFuY2VvZiBBcnJheSAmJiAhaWRMaXN0LmluY2x1ZGVzKGlkKSkge1xyXG4gICAgY29uc3QgaW5kZXggPSBpZExpc3QuZmluZEluZGV4KChjdXJyZW50SWQpID0+IGN1cnJlbnRJZCA9PT0gaWQpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkgeyBpZExpc3Quc3BsaWNlKGluZGV4LCAxKTsgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkTGlzdCcsIEpTT04uc3RyaW5naWZ5KGlkTGlzdCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldElkTGlzdCgpIHtcclxuICBjb25zdCBpZExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRMaXN0Jyk7XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UoaWRMaXN0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlVG9kb0xpc3QodG9kb0xpc3QpIHtcclxuICAvLyB3cml0ZSBhbGwgdGFza3MgdG8gbG9jYWwgc3RvcmFnZVxyXG4gIHRvZG9MaXN0LnRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhc2suaWQsIEpTT04uc3RyaW5naWZ5KHRhc2spKTtcclxuICB9KTtcclxuXHJcbiAgLy8gY29udmVydCBlYWNoIHRhc2sgaW4gdGFzayBsaXN0IHRvIGl0J3MgaWRcclxuICBjb25zdCB0YXNrSWRMaXN0ID0gdG9kb0xpc3QudGFza0xpc3QubWFwKCh0YXNrKSA9PiB0YXNrLmlkKTtcclxuXHJcbiAgLy8gY3JlYXRlIGEgcmF3IHRvZG9MaXN0IGFuZCB3cml0ZSBpdCB0byBsb2NhbCBzdG9yYWdlXHJcbiAgY29uc3QgcmF3VG9kb0xpc3QgPSB7XHJcbiAgICB0aXRsZTogdG9kb0xpc3QudGl0bGUsXHJcbiAgICB0YXNrSWRMaXN0LFxyXG4gIH07XHJcbiAgLy8gd3JpdGUgcmF3VG9kb0xpc3QgdG8gbG9jYWwgc3RvcmFnZVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRvZG9MaXN0LmlkLCBKU09OLnN0cmluZ2lmeShyYXdUb2RvTGlzdCkpO1xyXG4gIC8vIHdyaXRlIGlkIHRvIGlkTGlzdFxyXG4gIGFkZFRvSWRMaXN0KHRvZG9MaXN0LmlkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG9MaXN0KGlkKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaWQpO1xyXG4gIHJlbW92ZUZyb21JZExpc3QoaWQpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20nO1xyXG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snO1xyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi9Ub2RvTGlzdCc7XHJcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcclxuXHJcbmltcG9ydCAnLi9sYXlvdXQuY3NzJztcclxuaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xyXG5pbXBvcnQgJy4vbmF2LmNzcyc7XHJcbmltcG9ydCAnLi9tYWluLmNzcyc7XHJcblxyXG5kb20ubG9hZFBhZ2UoKTtcclxuXHJcbmNvbnN0IHRvZG8gPSBzdG9yYWdlLnJlYWRUb2RvTGlzdCg3KTtcclxuZG9tLmxvYWRUb2RvTGlzdCh0b2RvKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9