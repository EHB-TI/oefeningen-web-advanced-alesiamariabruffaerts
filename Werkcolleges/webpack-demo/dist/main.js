/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/cleave.js/dist/addons/cleave-phone.be.js":
/*!***************************************************************!*\
  !*** ./node_modules/cleave.js/dist/addons/cleave-phone.be.js ***!
  \***************************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/alesia.bruffaerts/Documents/CODING_EHB/Web Advanced/GITHUB/Oefeningen /Werkcolleges/webpack-demo/node_modules/cleave.js/dist/addons/cleave-phone.be.js'\");\n\n//# sourceURL=webpack://webpack-demo/./node_modules/cleave.js/dist/addons/cleave-phone.be.js?");

/***/ }),

/***/ "./node_modules/cleave.js/dist/cleave-esm.js":
/*!***************************************************!*\
  !*** ./node_modules/cleave.js/dist/cleave-esm.js ***!
  \***************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/alesia.bruffaerts/Documents/CODING_EHB/Web Advanced/GITHUB/Oefeningen /Werkcolleges/webpack-demo/node_modules/cleave.js/dist/cleave-esm.js'\");\n\n//# sourceURL=webpack://webpack-demo/./node_modules/cleave.js/dist/cleave-esm.js?");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/alesia.bruffaerts/Documents/CODING_EHB/Web Advanced/GITHUB/Oefeningen /Werkcolleges/webpack-demo/node_modules/lodash/lodash.js'\");\n\n//# sourceURL=webpack://webpack-demo/./node_modules/lodash/lodash.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cleave.js */ \"./node_modules/cleave.js/dist/cleave-esm.js\");\n\n\n__webpack_require__(/*! cleave.js/dist/addons/cleave-phone.be */ \"./node_modules/cleave.js/dist/addons/cleave-phone.be.js\"); \n\nvar name = new cleave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('#name',{\n    prefix: 'STUDENT - ',\n    uppercase: true\n});\n\nvar date = new cleave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('#DOB',{\n    date: true,\n    delimiter: '-',\n    datePattern: ['d','m','Y']\n});\n\nvar rijksregister = new cleave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('#RRN',{\n    blocks: [2, 2, 2, 3, 2],\n    delimiters: ['.','.','-','.'],\n});\n\nvar leeftijd = new cleave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('#leeftijd',{\n    numeral: true,\n    numeralPositiveOnly: true\n});\n\nvar tel = new cleave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('#tel',{\n    phone: true,\n    phoneRegionCode: 'BE'\n});\n\ndocument.getElementById('sexyform').addEventListener('submit',function(event){\n    event.preventDefault;\n    const name = document.getElementById('name').value;\n    const date = document.getElementById('DOB').value;\n    const rijksregister = document.getElementById('RRN').value;\n    const leeftijd = document.getElementById('leeftijd').value;\n    const tel = document.getElementById('tel').value;\n\n    document.getElementById('title').innerText = `My name is ${name}, and I'm ${leeftijd} years old.`;\n    document.getElementById('intro').innerText = `Born on ${DOB}, this person was granted a unique number. That way the government could track every move. That number was ${rijksregister}`;\n    document.getElementById('callme').innerText = `Call me: ${tel}`;\n})\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;