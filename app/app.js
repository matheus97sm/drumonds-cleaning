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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./app/style.scss\");\n/* harmony import */ var _js_animacoes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/animacoes */ \"./app/js/animacoes.js\");\n/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu */ \"./app/js/menu.js\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/modal */ \"./app/js/modal.js\");\n/* harmony import */ var _js_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/gallery */ \"./app/js/gallery.js\");\n/* harmony import */ var _js_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/carousel */ \"./app/js/carousel.js\");\n/* harmony import */ var _js_reviews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/reviews */ \"./app/js/reviews.js\");\n/* harmony import */ var _js_faq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/faq */ \"./app/js/faq.js\");\n/* harmony import */ var _js_modernizr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/modernizr */ \"./app/js/modernizr.js\");\n/* harmony import */ var _js_modernizr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_modernizr__WEBPACK_IMPORTED_MODULE_8__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_js_menu__WEBPACK_IMPORTED_MODULE_2__.openMenu)();\r\n(0,_js_gallery__WEBPACK_IMPORTED_MODULE_4__.gallery)();\r\n(0,_js_reviews__WEBPACK_IMPORTED_MODULE_6__.reviews)();\r\n(0,_js_carousel__WEBPACK_IMPORTED_MODULE_5__.carousel)();\r\n(0,_js_faq__WEBPACK_IMPORTED_MODULE_7__.faq)();\r\n\n\n//# sourceURL=webpack://drumonds_cleaning/./app/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carousel\": () => (/* binding */ carousel)\n/* harmony export */ });\nfunction carousel() {\r\n  const carouselBase = document.querySelector('.home-blog-wrapper');\r\n  const carouselWrapper = document.querySelector('.home-blog-carousel');\r\n  const carouselItems = document.querySelectorAll('.blog-card');\r\n  const userEvents = {\r\n    down: navigator.maxTouchPoints > 0 ? 'touchstart' : 'pointerdown',\r\n    up: navigator.maxTouchPoints > 0 ? 'touchend' : 'pointerup',\r\n    move: navigator.maxTouchPoints > 0 ? 'touchmove' : 'pointermove',\r\n  }\r\n  const userInteractions = {\r\n    clicked: false,\r\n    actualPosition: 0,\r\n    enterX: 0,\r\n    leaveX: 0,\r\n    clickingTime: 0\r\n  }\r\n\r\n  if (!carouselWrapper) return;\r\n\r\n  readjustCarouselSize(carouselBase, carouselWrapper, carouselItems);\r\n\r\n  window.addEventListener('resize', () => {\r\n    readjustCarouselSize(carouselBase, carouselWrapper, carouselItems);\r\n  });\r\n\r\n  // Items Events\r\n  carouselItems.forEach(item => {\r\n    item.addEventListener('click', e => {\r\n      e.preventDefault();\r\n    });\r\n\r\n    item.addEventListener(userEvents.down, e => {\r\n      e.preventDefault();\r\n\r\n      item.style.setProperty('cursor', 'grab');\r\n      userInteractions.clickingTime = Date.now();\r\n    });\r\n\r\n    item.addEventListener(userEvents.up, () => {\r\n      item.style.setProperty('cursor', 'pointer');\r\n\r\n      if (Date.now() - userInteractions.clickingTime < 100)\r\n        window.location.href = item.getAttribute('href');\r\n    });\r\n  });\r\n\r\n  // CarouselEvents\r\n  carouselWrapper.addEventListener(userEvents.down, e => {\r\n    const clientX = e.pointerType === 'mouse' ? e.clientX : e.changedTouches[0].clientX;\r\n\r\n    carouselWrapper.style.setProperty('cursor', 'grab');\r\n\r\n    userInteractions.enterX = clientX - userInteractions.actualPosition;\r\n    userInteractions.clicked = true;\r\n  });\r\n\r\n  carouselWrapper.addEventListener(userEvents.move, e => {\r\n    if (userInteractions.clicked) {\r\n    const clientX = e.pointerType === 'mouse' ? e.clientX : e.changedTouches[0].clientX;\r\n    const xMovement = -(userInteractions.enterX - clientX);\r\n\r\n      userInteractions.actualPosition = xMovement;\r\n      carouselWrapper.style.setProperty('transform', `translate3d(${xMovement}px, 0, 0)`)\r\n    }\r\n  });\r\n\r\n  carouselWrapper.addEventListener(userEvents.up, e => {\r\n    const clientX = e.pointerType === 'mouse' ? e.clientX : e.changedTouches[0].clientX;\r\n\r\n    carouselWrapper.style.setProperty('cursor', 'default');\r\n\r\n    userInteractions.enterX = 0;\r\n    userInteractions.leaveX = clientX;\r\n    userInteractions.clicked = false;\r\n  });\r\n}\r\n\r\nfunction readjustCarouselSize(carouselBase, carouselWrapper, carouselItems) {\r\n  const itemWidthSize = window.innerWidth * 0.9 < 320 ? window.innerWidth * 0.9 : 320; \r\n  const newCarouselWrapperWidth = (itemWidthSize * carouselItems.length) + (32 * (carouselItems.length - 1));\r\n\r\n  carouselWrapper.style.setProperty('width', `${newCarouselWrapperWidth}px`);\r\n\r\n  const itemHeightSize = carouselItems[0].getBoundingClientRect().height;\r\n\r\n  carouselBase.style.setProperty('height', `${itemHeightSize}px`);\r\n}\r\n\n\n//# sourceURL=webpack://drumonds_cleaning/./app/js/carousel.js?");

/***/ }),

/***/ "./app/js/faq.js":
/*!***********************!*\
  !*** ./app/js/faq.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"faq\": () => (/* binding */ faq)\n/* harmony export */ });\nfunction faq() {\r\n  const questions = document.querySelectorAll('.faq-card');\r\n\r\n  if (questions.length === 0) return null;\r\n\r\n  questions.forEach(question => {\r\n    question.addEventListener('click', e => {\r\n      e.preventDefault();\r\n\r\n      question.classList.toggle('active');\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://drumonds_cleaning/./app/js/faq.js?");

/***/ }),

/***/ "./app/js/gallery.js":
/*!***************************!*\
  !*** ./app/js/gallery.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gallery\": () => (/* binding */ gallery)\n/* harmony export */ });\nasync function gallery() {\r\n  const galleryWrapper = document.querySelector('div[data-gallery=\"wrapper\"]');\r\n  const galleryThumbnail = document.querySelector('div[data-gallery=\"thumbnails\"]');\r\n  const buttonLeft = document.querySelector('.projects-gallery-buttons .left');\r\n  const buttonRight = document.querySelector('.projects-gallery-buttons .right');\r\n\r\n  let actualCarouselPosition = 0;\r\n\r\n  if (!galleryWrapper || !galleryThumbnail) return;\r\n\r\n  const queryParams = 'parent=20&per_page=40&_fields=id,caption,alt_text,media_details';\r\n  const restAPI = `/wp-json/wp/v2/media?${queryParams}`;\r\n\r\n  const galleryImages = await fetch(restAPI, { method: 'GET' })\r\n    .then(r => r.json())\r\n    .then(r => r);\r\n\r\n  galleryImages.forEach((image, index) => {\r\n    const newImageWrapper = document.createElement('div');\r\n    newImageWrapper.classList.add('gallery-img');\r\n\r\n    const newImageThumbnail = document.createElement('div');\r\n    newImageThumbnail.classList.add('gallery-thumb');\r\n\r\n    if (index === 0) {\r\n      newImageWrapper.classList.add('active');\r\n      newImageThumbnail.classList.add('active');\r\n    }\r\n\r\n    const newImage = document.createElement('img');\r\n    Object.assign(newImage, {\r\n      src: image.media_details.sizes.full.source_url,\r\n      alt: image.alt_text\r\n    });\r\n\r\n    if (image.caption?.rendered) {\r\n      const newImageCaption = document.createElement('div');\r\n    }\r\n\r\n    newImageWrapper.appendChild(newImage);\r\n    galleryWrapper.appendChild(newImageWrapper);\r\n\r\n    newImageThumbnail.addEventListener('click', e => {\r\n      e.preventDefault();\r\n\r\n      handleClickImage(newImageWrapper, newImageThumbnail);\r\n    });\r\n    \r\n    newImageThumbnail.appendChild(newImage.cloneNode(true));\r\n    galleryThumbnail.appendChild(newImageThumbnail);    \r\n  });\r\n\r\n  buttonLeft.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    const newCarouselPosition = handleSlide(1, actualCarouselPosition);\r\n    actualCarouselPosition = newCarouselPosition;\r\n  });\r\n\r\n  buttonRight.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    const newCarouselPosition = handleSlide(-1, actualCarouselPosition);\r\n    actualCarouselPosition = newCarouselPosition;\r\n  });\r\n\r\n  handleResize(galleryWrapper);\r\n\r\n  window.addEventListener('resize', () => handleResize(galleryWrapper));\r\n}\r\n\r\nfunction handleClickImage(actualImage, actualThumb) {\r\n  const images = document.querySelectorAll('.gallery-img');\r\n\r\n  images.forEach(image => image.classList.remove('active'));\r\n\r\n  actualImage.classList.add('active');\r\n  actualThumb.classList.add('active');\r\n}\r\n\r\nfunction handleSlide(direction, actual) {\r\n  const thumbnailWrapper = document.querySelector('div[data-gallery=\"thumbnails\"]');\r\n  const images = document.querySelectorAll('.gallery-thumb');\r\n\r\n  const imagesQuantity = images.length;\r\n  const imagesWidth = images[0].getBoundingClientRect().width;\r\n  let multiplier = 2;\r\n\r\n  if (window.innerWidth >= 1050) {\r\n    multiplier = 5;\r\n  } else if (window.innerWidth >= 768) {\r\n    multiplier = 4;\r\n  }\r\n\r\n  if (direction > 0 && actual === 0)\r\n    return 0;\r\n  else if (direction < 0 && imagesQuantity - -(actual * multiplier) < multiplier)\r\n    return actual;\r\n\r\n  thumbnailWrapper.style.setProperty('transform', `translate3d(${((actual + direction) * (imagesWidth + 16) * multiplier)}px, 0, 0)`);\r\n\r\n  return actual + direction;\r\n}\r\n\r\nfunction handleResize(reference) {\r\n  const thumbnailWrapper = document.querySelector('.thumbnail-wrapper');\r\n  const images = document.querySelectorAll('.gallery-thumb');\r\n\r\n  const referenceValues = reference.getBoundingClientRect();\r\n  let referenceWidth = referenceValues.width / 2 - 8;\r\n  let referenceHeight = referenceValues.width / 2 * 0.6;\r\n\r\n  if (window.innerWidth >= 1050) {\r\n    referenceWidth = referenceValues.width / 5 - 8;\r\n    referenceHeight = referenceValues.width / 5 * 0.6;\r\n  } else if (window.innerWidth >= 768) {\r\n    referenceWidth = referenceValues.width / 4 - 8;\r\n    referenceHeight = referenceValues.width / 4 * 0.6;\r\n  }\r\n\r\n  images.forEach(image => {\r\n    image.style.setProperty('width', `${referenceWidth}px`);\r\n    image.style.setProperty('height', `${referenceHeight}px`);\r\n  });\r\n\r\n  thumbnailWrapper.style.setProperty('height', `${referenceHeight}px`);\r\n}\r\n\n\n//# sourceURL=webpack://drumonds_cleaning/./app/js/gallery.js?");

/***/ }),

/***/ "./app/js/menu.js":
/*!************************!*\
  !*** ./app/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openMenu\": () => (/* binding */ openMenu)\n/* harmony export */ });\nfunction openMenu() {\r\n  const menuHamb = document.querySelector('[data-menu=\"button\"]');\r\n  const menu = document.querySelector('[data-menu=\"menu\"]');\r\n\r\n  if (!menuHamb || !menu) return null;\r\n\r\n  menuHamb.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    menu.classList.toggle('active');\r\n    menuHamb.classList.toggle('active');\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://drumonds_cleaning/./app/js/menu.js?");

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

/***/ "./app/js/reviews.js":
/*!***************************!*\
  !*** ./app/js/reviews.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reviews\": () => (/* binding */ reviews)\n/* harmony export */ });\nfunction reviews() {\r\n  const reviewsWrapper = document.querySelector('.reviews-wrapper');\r\n  const reviews = document.querySelectorAll('.review');\r\n  const reviewsConfigs = {\r\n    actualReview: 0,\r\n    actualOperator: 1,\r\n    maxReviewHeight: 0\r\n  };\r\n\r\n  if (!reviewsWrapper || reviews.length === 0) return;\r\n\r\n  reviews.forEach(review => {\r\n    const reviewHeight = review.getBoundingClientRect().height;\r\n\r\n    if (reviewHeight > reviewsConfigs.maxReviewHeight)\r\n      reviewsConfigs.maxReviewHeight = reviewHeight;\r\n  });\r\n\r\n  reviewsWrapper.style.setProperty('height', `${reviewsConfigs.maxReviewHeight * 2.5}px`)\r\n\r\n  reviews[reviewsConfigs.actualReview].classList.add('active');\r\n  reviews[reviewsConfigs.actualReview + 1].classList.add('review-before');\r\n\r\n  window.setInterval(() => {\r\n    reviewsConfigs.actualOperator = checkOperatorUsage(reviewsConfigs.actualReview, reviewsConfigs.actualOperator, reviews.length - 1);\r\n    reviewsConfigs.actualReview += reviewsConfigs.actualOperator;\r\n\r\n    reviews.forEach((review, index) => {\r\n      review.classList.remove('active', 'review-before', 'review-after');\r\n\r\n      switch(index) {\r\n        case reviewsConfigs.actualReview:\r\n          review.classList.add('active');\r\n          break;\r\n        case reviewsConfigs.actualReview + 1:\r\n          review.classList.add('review-before');\r\n          break;\r\n        case reviewsConfigs.actualReview - 1:\r\n          review.classList.add('review-after');          \r\n          break;\r\n      }\r\n    });\r\n  }, 5000);\r\n}\r\n\r\nfunction checkOperatorUsage(actualReview, operator, length) {\r\n  let returnOperator = 1;\r\n\r\n  if (operator > 0) \r\n    returnOperator = actualReview < length ? 1 : -1\r\n  else \r\n    returnOperator = actualReview !== 0 ? -1 : 1\r\n\r\n  return returnOperator;\r\n}\r\n\n\n//# sourceURL=webpack://drumonds_cleaning/./app/js/reviews.js?");

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