/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/js/main.min.js":
/*!*****************************!*\
  !*** ./dist/js/main.min.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(()=>{\"use strict\";const e=(e,t=500)=>{e.classList.contains(\"slide\")||(e.classList.add(\"slide\"),e.style.transitionProperty=\"height, padding, margin\",e.style.transitionDuration=t+\"ms\",e.style.height=e.offsetHeight+\"px\",e.offsetHeight,e.style.overflow=\"hidden\",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,setTimeout((()=>{e.hidden=!0,e.style.removeProperty(\"height\"),e.style.removeProperty(\"overflow\"),e.style.removeProperty(\"padding-top\"),e.style.removeProperty(\"padding-bottom\"),e.style.removeProperty(\"margin-top\"),e.style.removeProperty(\"margin-bottom\"),e.style.removeProperty(\"transition-duration\"),e.style.removeProperty(\"transition-property\"),e.classList.remove(\"slide\")}),t))},t=(t,s=500)=>{t.hidden?((e,t=500)=>{if(!e.classList.contains(\"slide\")){e.classList.add(\"slide\"),e.hidden&&(e.hidden=!1);let s=e.offsetHeight;e.style.overflow=\"hidden\",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty=\"height, padding, margin\",e.style.transitionDuration=t+\"ms\",e.style.height=s+\"px\",e.style.removeProperty(\"padding-top\"),e.style.removeProperty(\"padding-bottom\"),e.style.removeProperty(\"margin-top\"),e.style.removeProperty(\"margin-bottom\"),setTimeout((()=>{e.style.removeProperty(\"height\"),e.style.removeProperty(\"overflow\"),e.style.removeProperty(\"transition-duration\"),e.style.removeProperty(\"transition-property\"),e.classList.remove(\"slide\")}),t)}})(t,s):e(t,s)};(()=>{const e=document.querySelector(\".menu-header__burger\"),t=document.querySelector(\".menu-header__body\"),s=()=>{e.classList.remove(\"active\"),t.classList.remove(\"active\"),document.body.classList.remove(\"lock\"),document.body.dataset.actives=\"\"};document.addEventListener(\"click\",(e=>{e.target.closest(\".header\")||s(),\"burger\"!==document.body.dataset.actives&&s()})),e.addEventListener(\"click\",(s=>{e.classList.toggle(\"active\"),t.classList.toggle(\"active\"),document.body.classList.toggle(\"lock\"),t.scrollTo(0,0),e.classList.contains(\"active\")?document.body.dataset.actives=\"burger\":document.body.dataset.actives=\"\"})),window.addEventListener(\"resize\",(e=>{window.innerWidth>=768&&s()}))})(),(()=>{const e=document.querySelector(\".header-little-big\"),t=e.dataset.headerChangeDirection,s=document.querySelector(t);let i=s.offsetTop;const o=(()=>{let e=pageYOffset;return()=>{let t=pageYOffset,s=e-t;return e=t,s}})(),l=()=>{i=s.offsetTop,window.innerWidth<768?e.classList.remove(\"little-big\"):pageYOffset+e.offsetHeight>=i&&e.classList.add(\"little-big\")};l(),window.addEventListener(\"resize\",(()=>{setTimeout((()=>l),300)})),window.addEventListener(\"scroll\",(()=>{const t=o();t<0?pageYOffset+e.offsetHeight>=i&&e.classList.add(\"little-big\"):t>0&&pageYOffset+e.offsetHeight<i&&e.classList.remove(\"little-big\"),i=s.offsetTop}))})(),(()=>{const s=Array.from(document.querySelectorAll(\"[data-spoilers]\")),i=[];if(s.length){const[e,t]=s.reduce(((e,t)=>(t.dataset.spoilers.split(\",\")[0]?e[1].push(t):e[0].push(t),e)),[[],[]]);e.length&&e.forEach((e=>{r(e)})),t.length&&t.forEach((e=>{const t=e.dataset.spoilers.split(\",\").map((e=>e.trim())),s={};s.width=t[0],s.type=t[1]?t[1]:\"max\",s.spoilerBlock=e,s.breakpoint=`(${s.type}-width: ${s.width}px)`,s.mediaQuery=window.matchMedia(s.breakpoint),s.mediaQuery.addListener((()=>{s.mediaQuery.matches?r(s.spoilerBlock):o(s.spoilerBlock)})),i.push(s)}))}function o(e){const t=e.querySelectorAll(\"[data-spoiler]\");t.length&&(e.classList.remove(\"init\"),t.forEach((e=>{a(e)})))}function l(s){const i=s.target;if(i.closest(\"[data-spoiler]\")&&!i.closest(\"[data-spoiler]\").nextElementSibling.classList.contains(\"slide\"))if(i.closest(\"[data-one-spoiler]\"))if(i.closest(\"[data-one-spoiler]\").querySelector(\"[data-spoiler].active\")){const s=i.closest(\"[data-one-spoiler]\").querySelector(\"[data-spoiler].active\");s.nextElementSibling.classList.contains(\"slide\")||(a(s,!1),e(s.nextElementSibling),i.closest(\"[data-spoiler]\")!==s&&(i.closest(\"[data-spoiler]\").classList.toggle(\"active\"),t(i.closest(\"[data-spoiler]\").nextElementSibling)))}else i.closest(\"[data-spoiler]\").classList.toggle(\"active\"),t(i.closest(\"[data-spoiler]\").nextElementSibling);else i.closest(\"[data-spoiler]\").classList.toggle(\"active\"),t(i.closest(\"[data-spoiler]\").nextElementSibling)}function r(e){const t=Array.from(e.querySelectorAll(\"[data-spoiler]\"));t.length&&(e.classList.add(\"init\"),t.forEach((e=>{!function(e){e.classList.contains(\"active\")?e.nextElementSibling.hidden=!1:e.nextElementSibling.hidden=!0}(e),e.addEventListener(\"click\",l)})))}function a(e,t=!0){e.nextElementSibling.hidden=!1,e.classList.remove(\"active\"),t&&e.removeEventListener(\"click\",l)}window.addEventListener(\"load\",(e=>{i.forEach((e=>{e.mediaQuery.matches?r(e.spoilerBlock):o(e.spoilerBlock)}))}))})()})();\n\n//# sourceURL=webpack://gulp_train_4/./dist/js/main.min.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dist/js/main.min.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;