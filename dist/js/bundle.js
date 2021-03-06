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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/component/modal.js":
/*!***********************************!*\
  !*** ./src/js/component/modal.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
    let desingBtn = document.querySelectorAll('.button-design'),
        consultationBtn = document.querySelectorAll('.button-consultation'),
        popupDesing = document.querySelector('.popup-design'),
        popupConsultation = document.querySelector('.popup-consultation');
        

    function showModal(btn, popup) {
        btn.forEach( item => {
            item.addEventListener('click', function() {
                popup.style.display = 'block';
                hideModal(popup);
            });
        });
    }
    
    showModal(desingBtn, popupDesing);
    showModal(consultationBtn, popupConsultation);

    function hideModal(popup) {
        let close = popup.querySelector('.popup-close');
        close.addEventListener('click', function() {
            popup.style.display = '';
        });
    }
}

module.exports = modal;

/***/ }),

/***/ "./src/js/component/sendForm.js":
/*!**************************************!*\
  !*** ./src/js/component/sendForm.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function sendForm() {
    let popupConsultation = document.querySelector('.popup-consultation'),
        popupDesing = document.querySelector('.popup-design');

        function postForm(popup) {
            let form = popup.querySelector('form'),
                status = document.createElement('div'),
                textarea = form.querySelector('textarea'),
                input = form.querySelectorAll('input');

            function clearArea() {
                input.forEach(item => {
                    item.value = '';
                });
                textarea.value = '';
            }

            form.addEventListener('submit', function(event) {
                event.preventDefault();
                form.appendChild(status);
                
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
                let formData = new FormData(form);
                request.send(formData);
        
                request.addEventListener('readystatechange', function() {
                    if (request.readyState > 4) {
                        status.textContent = 'загрузка';
                    } else if (request.readyState === 4 && request.status == 200) {
                        status.textContent = 'успех';
                    } else {
                        status.textContent = 'ошибка';
                    }
                });

                clearArea();     
            });
        }
        postForm(popupDesing);
        postForm(popupConsultation);
}

module.exports = sendForm;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function(){
    'use strict'
    let modal = __webpack_require__(/*! ./component/modal.js */ "./src/js/component/modal.js"),
        sendForm = __webpack_require__(/*! ./component/sendForm.js */ "./src/js/component/sendForm.js");

    modal(); 
    sendForm();
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map