/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
function vcui(cui) {
  var pattern = /(RO)?([0-9]+)/i;
  var cif = cui.toUpperCase().match(pattern)[0];

  if (cif.length >= 2 && cif.length <= 10) {
    var v = 753217532;
    cif = parseInt(cif.replace('RO', ''));
    var c1 = cif % 10;
    console.log(c1);
    cif = parseInt(cif / 10);
    var t = 0;

    while (cif > 0) {
      t += cif % 10 * (v % 10);
      cif = parseInt(cif / 10);
      v = parseInt(v / 10);
    }

    c2 = t * 10 % 11;

    if (c2 == 10) {
      c2 = 0;
    }

    return c1 === c2;
  }

  return false;
}

var clearMessage = function clearMessage(which, msg) {
  console.log(which, msg);
  which.parentNode.insertBefore(msg, which.nextElementSibling);
  var timer = setTimeout(function () {
    document.querySelectorAll('.info-msg').forEach(function (el) {
      el.parentNode.removeChild(el);
    });
  }, 3000);
};

var validateEmail = function validateEmail(email) {
  return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[href*='#']").forEach(function (el, i) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("#" + this.href.split("#").pop());
      var toHide = document.querySelector('section:not(.hidden)');
      console.log(toHide);
      document.querySelector("#" + this.href.split("#").pop()).classList.remove('hidden');
      document.querySelector("#" + this.href.split("#").pop()).classList.add('visible');
      toHide.classList.add('hidden');
    });
  });
  var server = "https://app.algoritmit.ro";
  document.querySelector("form").addEventListener("submit", function (event) {
    var _this = this;

    event.preventDefault();
    console.log("fetching");
    var _this$elements = this.elements,
        name = _this$elements.name,
        phone = _this$elements.phone,
        email = _this$elements.email,
        message = _this$elements.cui;
    var info = {};
    [name, phone, email, message].forEach(function (el) {
      info[el.name] = el.value;
      el.classList.remove("invalid");
    });
    var errs = [];

    if (!validateEmail(email.value)) {
      errs.push('email');
    }

    if (name.value.length < 4) {
      errs.push('name');
    }

    if (phone.value.length < 4) {
      errs.push('phone');
    }

    if (message.value.length < 2 || !vcui(message.value)) {
      errs.push('cui');
    }

    errs.forEach(function (item, i) {
      _this[item].classList.add("invalid");
    });
    var msgSpan = document.createElement('span');
    msgSpan.classList.add('info-msg');

    if (errs.length) {
      msgSpan.classList.add('failed'); // msgSpan.innerText = "Erori: " + errs.join(", ");

      clearMessage(this, msgSpan);
    } else {
      fetch(server + "/contact", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "post",
        body: JSON.stringify(info)
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        document.querySelector("#multumim").classList.remove('hidden');
        document.querySelector("#multumim").classList.add('visible');
        document.querySelector("#form").classList.add('hidden');
        clearMessage(_this, msgSpan);
      })["catch"](function (err) {
        msgSpan.classList.add('danger');
        msgSpan.innerText = "Eroare comunicatie";
        clearMessage(_this, msgSpan);
        console.log(err);
      });
    }
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:text/x-scss;charset=utf-8;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiLi9jc3MvbWFpbi5jc3MiOw==");
})();

/******/ })()
;
//# sourceMappingURL=out.js.map