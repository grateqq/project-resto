/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _restobar_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restobar.jpg */ \"./src/restobar.jpg\");\n\r\n\r\nconst homeBoard =(function () {\r\n  \r\n  const createHomeBoard= ()=> {\r\n  \r\n    const content = document.getElementById(\"content\")\r\n    content.innerHTML= `\r\n      <h1>Resto Bar Cantarico</h1>\r\n      <img src=${_restobar_jpg__WEBPACK_IMPORTED_MODULE_0__} alt=\"restobar\" class=\"img-front\">\r\n      <h2>Almuerzos variados</h2>\r\n      <p>Nuestro cheft presenta su carta variada carnes, pescados, verduras de estación</p>\r\n      <h2>Cenas con shows</h2>\r\n      <p>Conoce nuestras cenas y descubri un nueva experiencia cada viernes</p>\r\n      `\r\n    }\r\n    createHomeBoard();\r\n    return {createHomeBoard}\r\n  })();\r\n\r\n  const reservationBoard =(function () {\r\n  \r\n    const createReservationBoard= ()=> {\r\n      \r\n      const content = document.getElementById(\"content\")\r\n        content.innerHTML= `     \r\n          <h1>resevaciones</h1>\r\n          <h2>telefono: 4422990 </h2>\r\n          <h2>whatapp: 2996545487</h2>\r\n          <p>Reservas según disponibilidad</p>\r\n        `\r\n      }\r\n    \r\n      return {createReservationBoard}\r\n    })();\r\n\r\n\r\nconst Board = (function () {\r\n  const clearBoard = ()=> {\r\n    const content = document.getElementById(\"content\");\r\n    while (content.firstChild) {\r\n      content.removeChild(content.firstChild);\r\n    }\r\n\r\n  }\r\n  return {clearBoard}\r\n})();\r\n\r\nconst menuBoard = (function() {\r\n  const creteMenuBoard = ()=>{\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML= `\r\n      <h1>MENU</h1>\r\n      <h2>CENA</h2>\r\n      <p>ravioles con milanesa</p>\r\n      <h2>ALMUERZO</h2>\r\n      <p>rosas a la vinagreta</p>\r\n      <h2>SHOW</h2>\r\n      <p>Carmencita Dance</p>\r\n    `\r\n  }\r\n  return {creteMenuBoard}\r\n})();\r\n\r\nconst menuBton = document.getElementById(\"menu-btn\");\r\nmenuBton.addEventListener(\"click\", function () {\r\n  Board.clearBoard()\r\n  menuBoard.creteMenuBoard()\r\n})\r\n\r\n\r\nconst homeBtn = document.getElementById(\"home-btn\");\r\nhomeBtn.addEventListener(\"click\", function () {\r\n  Board.clearBoard()\r\n  homeBoard.createHomeBoard()\r\n})\r\n\r\nconst reservationBtn = document.getElementById(\"reservation-btn\");\r\nreservationBtn.addEventListener(\"click\", function () {\r\n  Board.clearBoard()\r\n  reservationBoard.createReservationBoard()\r\n})\r\n\r\n\r\n\r\n// const test = (function() {\r\n//   const cretebtn = () => {\r\n//   const body = document.querySelector(\"body\");\r\n//   console.log(body)\r\n//   const HistoryBtn = document.createElement(\"button\")\r\n//   HistoryBtn.innerText = \"History\"\r\n//   body.appendChild(HistoryBtn)\r\n//   }\r\n//   cretebtn()\r\n//   return cretebtn\r\n// })();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQ0FBYSxFQUFFO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXN0b2JhcklhbWdlIGZyb20gXCIuL3Jlc3RvYmFyLmpwZ1wiXHJcblxyXG5jb25zdCBob21lQm9hcmQgPShmdW5jdGlvbiAoKSB7XHJcbiAgXHJcbiAgY29uc3QgY3JlYXRlSG9tZUJvYXJkPSAoKT0+IHtcclxuICBcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MPSBgXHJcbiAgICAgIDxoMT5SZXN0byBCYXIgQ2FudGFyaWNvPC9oMT5cclxuICAgICAgPGltZyBzcmM9JHtyZXN0b2JhcklhbWdlfSBhbHQ9XCJyZXN0b2JhclwiIGNsYXNzPVwiaW1nLWZyb250XCI+XHJcbiAgICAgIDxoMj5BbG11ZXJ6b3MgdmFyaWFkb3M8L2gyPlxyXG4gICAgICA8cD5OdWVzdHJvIGNoZWZ0IHByZXNlbnRhIHN1IGNhcnRhIHZhcmlhZGEgY2FybmVzLCBwZXNjYWRvcywgdmVyZHVyYXMgZGUgZXN0YWNpw7NuPC9wPlxyXG4gICAgICA8aDI+Q2VuYXMgY29uIHNob3dzPC9oMj5cclxuICAgICAgPHA+Q29ub2NlIG51ZXN0cmFzIGNlbmFzIHkgZGVzY3VicmkgdW4gbnVldmEgZXhwZXJpZW5jaWEgY2FkYSB2aWVybmVzPC9wPlxyXG4gICAgICBgXHJcbiAgICB9XHJcbiAgICBjcmVhdGVIb21lQm9hcmQoKTtcclxuICAgIHJldHVybiB7Y3JlYXRlSG9tZUJvYXJkfVxyXG4gIH0pKCk7XHJcblxyXG4gIGNvbnN0IHJlc2VydmF0aW9uQm9hcmQgPShmdW5jdGlvbiAoKSB7XHJcbiAgXHJcbiAgICBjb25zdCBjcmVhdGVSZXNlcnZhdGlvbkJvYXJkPSAoKT0+IHtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTD0gYCAgICAgXHJcbiAgICAgICAgICA8aDE+cmVzZXZhY2lvbmVzPC9oMT5cclxuICAgICAgICAgIDxoMj50ZWxlZm9ubzogNDQyMjk5MCA8L2gyPlxyXG4gICAgICAgICAgPGgyPndoYXRhcHA6IDI5OTY1NDU0ODc8L2gyPlxyXG4gICAgICAgICAgPHA+UmVzZXJ2YXMgc2Vnw7puIGRpc3BvbmliaWxpZGFkPC9wPlxyXG4gICAgICAgIGBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHJldHVybiB7Y3JlYXRlUmVzZXJ2YXRpb25Cb2FyZH1cclxuICAgIH0pKCk7XHJcblxyXG5cclxuY29uc3QgQm9hcmQgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGNsZWFyQm9hcmQgPSAoKT0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIHJldHVybiB7Y2xlYXJCb2FyZH1cclxufSkoKTtcclxuXHJcbmNvbnN0IG1lbnVCb2FyZCA9IChmdW5jdGlvbigpIHtcclxuICBjb25zdCBjcmV0ZU1lbnVCb2FyZCA9ICgpPT57XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUw9IGBcclxuICAgICAgPGgxPk1FTlU8L2gxPlxyXG4gICAgICA8aDI+Q0VOQTwvaDI+XHJcbiAgICAgIDxwPnJhdmlvbGVzIGNvbiBtaWxhbmVzYTwvcD5cclxuICAgICAgPGgyPkFMTVVFUlpPPC9oMj5cclxuICAgICAgPHA+cm9zYXMgYSBsYSB2aW5hZ3JldGE8L3A+XHJcbiAgICAgIDxoMj5TSE9XPC9oMj5cclxuICAgICAgPHA+Q2FybWVuY2l0YSBEYW5jZTwvcD5cclxuICAgIGBcclxuICB9XHJcbiAgcmV0dXJuIHtjcmV0ZU1lbnVCb2FyZH1cclxufSkoKTtcclxuXHJcbmNvbnN0IG1lbnVCdG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ0blwiKTtcclxubWVudUJ0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBCb2FyZC5jbGVhckJvYXJkKClcclxuICBtZW51Qm9hcmQuY3JldGVNZW51Qm9hcmQoKVxyXG59KVxyXG5cclxuXHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtYnRuXCIpO1xyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgQm9hcmQuY2xlYXJCb2FyZCgpXHJcbiAgaG9tZUJvYXJkLmNyZWF0ZUhvbWVCb2FyZCgpXHJcbn0pXHJcblxyXG5jb25zdCByZXNlcnZhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXJ2YXRpb24tYnRuXCIpO1xyXG5yZXNlcnZhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIEJvYXJkLmNsZWFyQm9hcmQoKVxyXG4gIHJlc2VydmF0aW9uQm9hcmQuY3JlYXRlUmVzZXJ2YXRpb25Cb2FyZCgpXHJcbn0pXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IHRlc3QgPSAoZnVuY3Rpb24oKSB7XHJcbi8vICAgY29uc3QgY3JldGVidG4gPSAoKSA9PiB7XHJcbi8vICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4vLyAgIGNvbnNvbGUubG9nKGJvZHkpXHJcbi8vICAgY29uc3QgSGlzdG9yeUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuLy8gICBIaXN0b3J5QnRuLmlubmVyVGV4dCA9IFwiSGlzdG9yeVwiXHJcbi8vICAgYm9keS5hcHBlbmRDaGlsZChIaXN0b3J5QnRuKVxyXG4vLyAgIH1cclxuLy8gICBjcmV0ZWJ0bigpXHJcbi8vICAgcmV0dXJuIGNyZXRlYnRuXHJcbi8vIH0pKCk7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/restobar.jpg":
/*!**************************!*\
  !*** ./src/restobar.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2aff16506f73b735aaad.jpg";

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;