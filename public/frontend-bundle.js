/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/navigation */ \"./src/js/libs/navigation.js\");\n/* harmony import */ var _libs_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/main */ \"./src/js/libs/main.js\");\n/* harmony import */ var _libs_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_main__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/Y2FmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbGlicy9uYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9saWJzL21haW4nOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/libs/main.js":
/*!*****************************!*\
  !*** ./src/js/libs/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGlicy9tYWluLmpzLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/libs/main.js\n");

/***/ }),

/***/ "./src/js/libs/navigation.js":
/*!***********************************!*\
  !*** ./src/js/libs/navigation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * File navigation.js.\n *\n * Handles toggling the navigation menu for small screens and enables TAB key\n * navigation support for dropdown menus.\n */\n(function () {\n  const siteNavigation = document.getElementById('site-navigation'); // Return early if the navigation don't exist.\n\n  if (!siteNavigation) {\n    return;\n  }\n\n  const button = siteNavigation.getElementsByTagName('button')[0]; // Return early if the button don't exist.\n\n  if ('undefined' === typeof button) {\n    return;\n  }\n\n  const menu = siteNavigation.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.\n\n  if ('undefined' === typeof menu) {\n    button.style.display = 'none';\n    return;\n  }\n\n  if (!menu.classList.contains('nav-menu')) {\n    menu.classList.add('nav-menu');\n  } // Toggle the .toggled class and the aria-expanded value each time the button is clicked.\n\n\n  button.addEventListener('click', function () {\n    siteNavigation.classList.toggle('toggled');\n\n    if (button.getAttribute('aria-expanded') === 'true') {\n      button.setAttribute('aria-expanded', 'false');\n    } else {\n      button.setAttribute('aria-expanded', 'true');\n    }\n  }); // Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.\n\n  document.addEventListener('click', function (event) {\n    const isClickInside = siteNavigation.contains(event.target);\n\n    if (!isClickInside) {\n      siteNavigation.classList.remove('toggled');\n      button.setAttribute('aria-expanded', 'false');\n    }\n  }); // Get all the link elements within the menu.\n\n  const links = menu.getElementsByTagName('a'); // Get all the link elements with children within the menu.\n\n  const linksWithChildren = menu.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a'); // Toggle focus each time a menu link is focused or blurred.\n\n  for (const link of links) {\n    link.addEventListener('focus', toggleFocus, true);\n    link.addEventListener('blur', toggleFocus, true);\n  } // Toggle focus each time a menu link with children receive a touch event.\n\n\n  for (const link of linksWithChildren) {\n    link.addEventListener('touchstart', toggleFocus, false);\n  }\n  /**\n   * Sets or removes .focus class on an element.\n   */\n\n\n  function toggleFocus() {\n    if (event.type === 'focus' || event.type === 'blur') {\n      let self = this; // Move up through the ancestors of the current link until we hit .nav-menu.\n\n      while (!self.classList.contains('nav-menu')) {\n        // On li elements toggle the class .focus.\n        if ('li' === self.tagName.toLowerCase()) {\n          self.classList.toggle('focus');\n        }\n\n        self = self.parentNode;\n      }\n    }\n\n    if (event.type === 'touchstart') {\n      const menuItem = this.parentNode;\n      event.preventDefault();\n\n      for (const link of menuItem.parentNode.children) {\n        if (menuItem !== link) {\n          link.classList.remove('focus');\n        }\n      }\n\n      menuItem.classList.toggle('focus');\n    }\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGlicy9uYXZpZ2F0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYnMvbmF2aWdhdGlvbi5qcz9kODgzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBuYXZpZ2F0aW9uLmpzLlxuICpcbiAqIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIG5hdmlnYXRpb24gbWVudSBmb3Igc21hbGwgc2NyZWVucyBhbmQgZW5hYmxlcyBUQUIga2V5XG4gKiBuYXZpZ2F0aW9uIHN1cHBvcnQgZm9yIGRyb3Bkb3duIG1lbnVzLlxuICovXG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBzaXRlTmF2aWdhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlLW5hdmlnYXRpb24nKTsgLy8gUmV0dXJuIGVhcmx5IGlmIHRoZSBuYXZpZ2F0aW9uIGRvbid0IGV4aXN0LlxuXG4gIGlmICghc2l0ZU5hdmlnYXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBidXR0b24gPSBzaXRlTmF2aWdhdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJylbMF07IC8vIFJldHVybiBlYXJseSBpZiB0aGUgYnV0dG9uIGRvbid0IGV4aXN0LlxuXG4gIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGJ1dHRvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG1lbnUgPSBzaXRlTmF2aWdhdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKVswXTsgLy8gSGlkZSBtZW51IHRvZ2dsZSBidXR0b24gaWYgbWVudSBpcyBlbXB0eSBhbmQgcmV0dXJuIGVhcmx5LlxuXG4gIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIG1lbnUpIHtcbiAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIW1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtbWVudScpKSB7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCduYXYtbWVudScpO1xuICB9IC8vIFRvZ2dsZSB0aGUgLnRvZ2dsZWQgY2xhc3MgYW5kIHRoZSBhcmlhLWV4cGFuZGVkIHZhbHVlIGVhY2ggdGltZSB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG5cblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgc2l0ZU5hdmlnYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlZCcpO1xuXG4gICAgaWYgKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIH1cbiAgfSk7IC8vIFJlbW92ZSB0aGUgLnRvZ2dsZWQgY2xhc3MgYW5kIHNldCBhcmlhLWV4cGFuZGVkIHRvIGZhbHNlIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIG5hdmlnYXRpb24uXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBpc0NsaWNrSW5zaWRlID0gc2l0ZU5hdmlnYXRpb24uY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblxuICAgIGlmICghaXNDbGlja0luc2lkZSkge1xuICAgICAgc2l0ZU5hdmlnYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlZCcpO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIH1cbiAgfSk7IC8vIEdldCBhbGwgdGhlIGxpbmsgZWxlbWVudHMgd2l0aGluIHRoZSBtZW51LlxuXG4gIGNvbnN0IGxpbmtzID0gbWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpOyAvLyBHZXQgYWxsIHRoZSBsaW5rIGVsZW1lbnRzIHdpdGggY2hpbGRyZW4gd2l0aGluIHRoZSBtZW51LlxuXG4gIGNvbnN0IGxpbmtzV2l0aENoaWxkcmVuID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEsIC5wYWdlX2l0ZW1faGFzX2NoaWxkcmVuID4gYScpOyAvLyBUb2dnbGUgZm9jdXMgZWFjaCB0aW1lIGEgbWVudSBsaW5rIGlzIGZvY3VzZWQgb3IgYmx1cnJlZC5cblxuICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdG9nZ2xlRm9jdXMsIHRydWUpO1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRvZ2dsZUZvY3VzLCB0cnVlKTtcbiAgfSAvLyBUb2dnbGUgZm9jdXMgZWFjaCB0aW1lIGEgbWVudSBsaW5rIHdpdGggY2hpbGRyZW4gcmVjZWl2ZSBhIHRvdWNoIGV2ZW50LlxuXG5cbiAgZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzV2l0aENoaWxkcmVuKSB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG9nZ2xlRm9jdXMsIGZhbHNlKTtcbiAgfVxuICAvKipcbiAgICogU2V0cyBvciByZW1vdmVzIC5mb2N1cyBjbGFzcyBvbiBhbiBlbGVtZW50LlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUZvY3VzKCkge1xuICAgIGlmIChldmVudC50eXBlID09PSAnZm9jdXMnIHx8IGV2ZW50LnR5cGUgPT09ICdibHVyJykge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzOyAvLyBNb3ZlIHVwIHRocm91Z2ggdGhlIGFuY2VzdG9ycyBvZiB0aGUgY3VycmVudCBsaW5rIHVudGlsIHdlIGhpdCAubmF2LW1lbnUuXG5cbiAgICAgIHdoaWxlICghc2VsZi5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1tZW51JykpIHtcbiAgICAgICAgLy8gT24gbGkgZWxlbWVudHMgdG9nZ2xlIHRoZSBjbGFzcyAuZm9jdXMuXG4gICAgICAgIGlmICgnbGknID09PSBzZWxmLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIHNlbGYuY2xhc3NMaXN0LnRvZ2dsZSgnZm9jdXMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYgPSBzZWxmLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgY29uc3QgbWVudUl0ZW0gPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgbWVudUl0ZW0ucGFyZW50Tm9kZS5jaGlsZHJlbikge1xuICAgICAgICBpZiAobWVudUl0ZW0gIT09IGxpbmspIHtcbiAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZm9jdXMnKTtcbiAgICB9XG4gIH1cbn0pKCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/libs/navigation.js\n");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz8zYWM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/style.scss\n");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/sass/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });