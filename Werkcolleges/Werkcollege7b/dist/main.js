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

/***/ "./node_modules/chart.js/dist/chart.js":
/*!*********************************************!*\
  !*** ./node_modules/chart.js/dist/chart.js ***!
  \*********************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\__Git\\\\wda 20-21\\\\exercises-mikederycke\\\\w7\\\\SexyCharts\\\\node_modules\\\\chart.js\\\\dist\\\\chart.js'\");\n\n//# sourceURL=webpack://sexyinputs/./node_modules/chart.js/dist/chart.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Chart = __webpack_require__(/*! ../node_modules/chart.js/dist/chart.js */ \"./node_modules/chart.js/dist/chart.js\");\r\n// Sommige pakketten moet je rechtstreeks uit hun dist folder halen\r\n// vandaar dit lange pad\r\n\r\n\r\n//TIP: als voorbereiding op dit examen kan je deze oefening uitbreiden met een leuke feature\r\n// Onderaan zal je zien dat de data wel dynamisch aan de grafiek wordt toegevoegd\r\n// Maar de kleuren, de inhoud en het aantal, staan hardcoded op 6\r\n// Opdracht 1:\r\n// Schrijf een functie die dynamisch, op basis van het aantal bars (uit de json) \r\n// een random kleur genereert voor elke bar. \r\n// Opdracht 2:\r\n// Go bigger! Maak 3 json files met verschilllende data, zelfde structuur. \r\n// Laad ze allemaal in en zorg dat je 3 grafieken kan tonen op de bar chart. Consulteer de docu!\r\n\r\nwindow.onload = function() {\r\n\r\n    \r\n\r\n    async function getData(){\r\n        let response = await fetch('../data/data.json');\r\n        return await response.json();\r\n    }\r\n    \r\n    getData().then(\r\n        result => {\r\n            buildChart(result);\r\n        }, error => {\r\n            console.log('An error has ocurred when fetching the data: ' + error);\r\n        }\r\n    )\r\n\r\n\r\n    function buildChart(data){\r\n\r\n        //bereid de data voor voor gebruik in de chart\r\n        let bardata = [];\r\n        let labels = [];\r\n        data.courses.forEach(element => {\r\n            // De data zijn de waarden op de grafiek\r\n            // De Y-as waarden\r\n            bardata.push(element.hype);\r\n            // De labels zijn de teksten onder de bar charts\r\n            // De Y-as waarden\r\n            labels.push(element.name);\r\n        });\r\n\r\n        //Haal het canvas op waar de data in moet komen\r\n        let ctx = document.getElementById('hypechart').getContext('2d');\r\n        let myChart = new Chart(ctx, {\r\n            type: 'bar',\r\n            data: {\r\n                labels: labels, //De labels array hierboven opgebouwd\r\n                datasets: [{\r\n                    label: 'Hypelevels',\r\n                    data: bardata, // De data array hierboven opgebouwd\r\n                    backgroundColor: [\r\n                        'rgba(255, 99, 132, 0.2)',\r\n                        'rgba(54, 162, 235, 0.2)',\r\n                        'rgba(255, 206, 86, 0.2)',\r\n                        'rgba(75, 192, 192, 0.2)',\r\n                        'rgba(153, 102, 255, 0.2)',\r\n                        'rgba(255, 159, 64, 0.2)'\r\n                    ],\r\n                    borderColor: [\r\n                        'rgba(255, 99, 132, 1)',\r\n                        'rgba(54, 162, 235, 1)',\r\n                        'rgba(255, 206, 86, 1)',\r\n                        'rgba(75, 192, 192, 1)',\r\n                        'rgba(153, 102, 255, 1)',\r\n                        'rgba(255, 159, 64, 1)'\r\n                    ],\r\n                    borderWidth: 1\r\n                }]\r\n            },\r\n            options: {\r\n                scales: {\r\n                    y: {\r\n                        beginAtZero: true\r\n                    }\r\n                }\r\n            }\r\n        });\r\n\r\n    }\r\n    \r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://sexyinputs/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;