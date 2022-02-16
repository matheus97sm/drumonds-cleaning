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

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./app/style.scss\");\n/* harmony import */ var _js_animacoes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/animacoes */ \"./app/js/animacoes.js\");\n/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu */ \"./app/js/menu.js\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/modal */ \"./app/js/modal.js\");\n/* harmony import */ var _js_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/carousel */ \"./app/js/carousel.js\");\n/* harmony import */ var _js_modernizr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/modernizr */ \"./app/js/modernizr.js\");\n/* harmony import */ var _js_modernizr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_modernizr__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_js_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_js_carousel__WEBPACK_IMPORTED_MODULE_4__.carousel)();\r\n\n\n//# sourceURL=webpack://drumonds_cleaning/./app/index.js?");

/***/ }),

/***/ "./app/js/animacoes.js":
/*!*****************************!*\
  !*** ./app/js/animacoes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animacoes)\n/* harmony export */ });\nfunction animacoes() {\r\n  const animaItem = document.querySelectorAll(\"[data-animar]\");\r\n\r\n  animaItem.forEach(item => {\r\n    if (item.getBoundingClientRect().top < window.innerHeight)\r\n      return item.classList.add(\"animar\");\r\n\r\n    window.addEventListener(\"scroll\", e => {\r\n      const distTop = window.innerHeight * 0.85;\r\n\r\n      if (item.getBoundingClientRect().top < distTop)\r\n        item.classList.add(\"animar\");\r\n    });\r\n  });\r\n\r\n  const animarComTempo = document.querySelectorAll(\"[data-anima-tempo]\");\r\n\r\n  window.setTimeout(() => {\r\n    animarComTempo.forEach(item => {\r\n      item.classList.add(\"animar\");\r\n    });\r\n  }, 500);\r\n}\r\n\n\n//# sourceURL=webpack://drumonds_cleaning/./app/js/animacoes.js?");

/***/ }),

/***/ "./app/js/carousel.js":
/*!****************************!*\
  !*** ./app/js/carousel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carousel\": () => (/* binding */ carousel)\n/* harmony export */ });\nasync function carousel() {\r\n  const carouselWrapper = document.querySelector('div[data-carousel=\"wrapper\"]');\r\n  const carouselThumbnail = document.querySelector('div[data-carousel=\"thumbnails\"]');\r\n\r\n  if (!carouselWrapper || !carouselThumbnail) return;\r\n\r\n  const queryParams = 'parent=20&per_page=40&_fields=id,caption,alt_text,media_details';\r\n  const restAPI = `/wp-json/wp/v2/media?${queryParams}`;\r\n\r\n  const carouselImages = await fetch(restAPI, { method: 'GET' })\r\n    .then(r => r.json())\r\n    .then(r => r);\r\n\r\n  carouselImages.forEach(image => {\r\n    const newImageWrapper = document.createElement('div');\r\n    newImageWrapper.classList.add('carousel-img');\r\n\r\n    const newImage = document.createElement('img');\r\n    Object.assign(newImage, {\r\n      src: image.media_details.sizes.full.source_url,\r\n      alt: image.alt_text\r\n    });\r\n\r\n    if (image.caption?.rendered) {\r\n      const newImageCaption = document.createElement('div');\r\n    }\r\n\r\n    newImageWrapper.appendChild(newImage);\r\n    carouselWrapper.appendChild(newImageWrapper);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://drumonds_cleaning/./app/js/carousel.js?");

/***/ }),

/***/ "./app/js/menu.js":
/*!************************!*\
  !*** ./app/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openMenu)\n/* harmony export */ });\nfunction openMenu() {\r\n  const menuHamb = document.querySelector('[data-menu=\"button\"]');\r\n  const menu = document.querySelector('[data-menu=\"menu\"]');\r\n\r\n  if (!menuHamb || !menu) return null;\r\n\r\n  menuHamb.addEventListener(\"click\", e => {\r\n    e.preventDefault();\r\n\r\n    menu.classList.toggle(\"ativo\");\r\n    menuHamb.classList.toggle(\"ativo\");\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://drumonds_cleaning/./app/js/menu.js?");

/***/ }),

/***/ "./app/js/modal.js":
/*!*************************!*\
  !*** ./app/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modal)\n/* harmony export */ });\nfunction modal() {\r\n  const imgArray = document.querySelectorAll(\"[data-modal]\");\r\n  const modal = document.querySelector(\"#modal\");\r\n  const body = document.querySelector(\"body\");\r\n\r\n  if (!imgArray) return null;\r\n\r\n  imgArray.forEach(img => {\r\n    img.addEventListener(\"click\", e => {\r\n      e.preventDefault();\r\n\r\n      body.style.setProperty(\"overflow-y\", \"hidden\");\r\n\r\n      modal.classList.add(\"ativo\");\r\n\r\n      const modalWrapper = document.createElement(\"div\");\r\n      s;\r\n      modalWrapper.innerHTML = `\r\n        <img src=\"${img.getAttribute(\"src\")}\" alt=\"${img.getAttribute(\r\n        \"alt\"\r\n      )}\" />\r\n      `;\r\n\r\n      const closeModal = document.createElement(\"button\");\r\n      closeModal.innerText = \"x\";\r\n      closeModal.addEventListener(\"click\", e => {\r\n        e.preventDefault();\r\n\r\n        body.style.setProperty(\"overflow-y\", \"scroll\");\r\n\r\n        modal.classList.remove(\"ativo\");\r\n        modal.innerHTML = \"\";\r\n      });\r\n\r\n      modalWrapper.appendChild(closeModal);\r\n      modal.appendChild(modalWrapper);\r\n\r\n      modal.addEventListener(\"click\", e => {\r\n        if (e.target === e.currentTarget) {\r\n          body.style.setProperty(\"overflow-y\", \"scroll\");\r\n\r\n          modal.classList.remove(\"ativo\");\r\n          modal.innerHTML = \"\";\r\n        }\r\n      });\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://drumonds_cleaning/./app/js/modal.js?");

/***/ }),

/***/ "./app/js/modernizr.js":
/*!*****************************!*\
  !*** ./app/js/modernizr.js ***!
  \*****************************/
/***/ (() => {

eval("!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,\"function\")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split(\".\"),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?\"\":\"no-\")+l.join(\"-\"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||\"\";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp(\"(^|\\\\s)\"+A+\"no-js(\\\\s|$)\");n=n.replace(o,\"$1\"+A+\"js$2\")}Modernizr._config.enableClasses&&(n+=\" \"+A+e.join(\" \"+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if(\"object\"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split(\".\"),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),\"undefined\"!=typeof t)return Modernizr;n=\"function\"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?\"\":\"no-\")+o.join(\"-\")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:\"3.6.0\",_config:{classPrefix:\"\",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c=\"svg\"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,\"undefined\")||o(e.call,\"undefined\")?function(e,n){return n in e&&o(e.constructor.prototype[n],\"undefined\")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&\"load\"===n.type?1==t.width:!1,a=\"webp\"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:\"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=\",name:\"webp\"},{uri:\"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==\",name:\"webp.alpha\"},{uri:\"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA\",name:\"webp.animation\"},{uri:\"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=\",name:\"webp.lossless\"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&\"load\"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);\n\n//# sourceURL=webpack://drumonds_cleaning/./app/js/modernizr.js?");

/***/ }),

/***/ "./app/style.scss":
/*!************************!*\
  !*** ./app/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://drumonds_cleaning/./app/style.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/index.js");
/******/ 	
/******/ })()
;