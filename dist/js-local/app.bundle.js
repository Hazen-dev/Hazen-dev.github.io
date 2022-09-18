/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckMenuHeader)
/* harmony export */ });
/* eslint-disable brace-style */
const mediaQuery = window.matchMedia('(min-width: 800px)');
const burger = document.getElementsByClassName('top__burger');
const headerText = document.getElementsByClassName('top__header-text');
const ulElement = document.getElementsByClassName('top__ul-element');
const kontakt = document.getElementsByClassName('kontakt');

function CheckMenuHeader()
{
  if (mediaQuery.matches)
  {
    headerText[0].style.display = 'none';
    burger[0].style.display = 'none';

    ulElement[0].style.display = 'flex';
    kontakt[0].style.display = 'block';
  }
  else
  {
    ulElement[0].style.display = 'none';
    kontakt[0].style.display = 'none';

    headerText[0].style.display = 'block';
    burger[0].style.display = 'block';
  }
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ottawa)
/* harmony export */ });
/* harmony import */ var _Update_main_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* eslint-disable brace-style */
// eslint-disable-next-line import/no-cycle


function transferTemp(kelvin)
{
  return (kelvin - 273.15).toFixed(1);
}
function setOttawa(res)
{
  const temperature = document.getElementsByClassName('top__main-temperature')[0];
  temperature.innerHTML = `${transferTemp(res.main.temp)}°C`;
  (0,_Update_main_weather__WEBPACK_IMPORTED_MODULE_0__.CheckSetIcons)(res, 69); // sett main weather iwth 69 flag
}
function ottawa() // send to API Ottawa respond
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q=ottawa&appid=95321e74a3b2752e4ec9ee5430f15f85')
    .then((res) => res.json())
    .then((res) => setOttawa(res));
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckSetIcons": () => (/* binding */ CheckSetIcons),
/* harmony export */   "default": () => (/* binding */ UpdateMainWeather)
/* harmony export */ });
/* harmony import */ var _ottawa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
/* eslint-disable brace-style */


const date = new Date();
let DDay = date.getDay(); // number of day from 1-6 and [0] is sunday
function transferTemp(kelvin)
{
  return (kelvin - 273.15).toFixed(1); // change Kelvin to Celcius
}

function GetActualDay()
{
  const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (DDay === 7) // if is out of index return to sunday [0]
  {
    DDay = 0;
  }
  const l = DDay;
  DDay += 1;
  return daysArray[l]; // return final
}

for (let i = 0; i < 5; i += 1) // 5 times for
{
  $('h2:nth-child(1)')[i].innerHTML = GetActualDay(); // set actual day to the DOM
}

function CheckSetIcons(weather, i)
{
  let desc; let imgElement;
  if (i === 69) // if flag 69 was set
  {
    imgElement = document.getElementsByClassName('ottawa')[0];
    desc = weather.weather[0].description;
  }
  else // set normal weather for main weather div with the [i] iteraction
  {
    desc = weather.list[i].weather[0].description;
    imgElement = document.getElementsByClassName('wmain__weather-img')[i];
  }
  if (desc.includes('rain')) // compare it with description and set this source img
  {
    imgElement.src = 'dist/imgs/rain.png';
  }
  else if (desc.includes('sky'))
  {
    imgElement.src = 'dist/imgs/sun.png';
  }
  else if (desc.includes('thunderstorm'))
  {
    imgElement.src = 'dist/imgs/thunder.png';
  }
  else if (desc.includes('drizzle') || desc.includes('mist'))
  {
    imgElement.src = 'dist/imgs/drizzle.png';
  }
  else if (desc.includes('snow'))
  {
    imgElement.src = 'dist/imgs/snow.png';
  }
  else if (desc.includes('cloud'))
  {
    imgElement.src = 'dist/imgs/cloud.png';
  }
}

function UpdateMainWeather(weather)
{
  // eslint-disable-next-line no-restricted-syntax
  for (let i = 0; i < 5; i += 1) // 5 times for
  {
    $('h2:nth-child(4)')[i].innerHTML = `${transferTemp(weather.list[i].main.temp)}°C`;
    // getting [i] element and setting [i] innerHTML
    $('p:nth-child(3)')[i].innerHTML = weather.list[i].weather[0].description;
    document.getElementsByClassName('wmain')[0].style.display = 'block'; // show main weather div
    (0,_ottawa__WEBPACK_IMPORTED_MODULE_0__["default"])();
    CheckSetIcons(weather, i); // set main weather
  }
}


/***/ })
/******/ 	]);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_screen_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _ottawa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _Update_main_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* eslint-disable brace-style */




document.getElementsByClassName('wmain')[0].style.display = 'none'; // hide main weather div
const inputCity = document.getElementsByClassName('top__input');
let inputValue;

// Refreshing website 0.5s in time to set css properties on header bar
window.onload = setInterval(_header_screen_width__WEBPACK_IMPORTED_MODULE_0__["default"], 500);
inputCity[0].focus(); // Adding focus on input

function SetWeatherVariable(res) // set main weather info
{
  const WeatherObj = res;
  (0,_Update_main_weather__WEBPACK_IMPORTED_MODULE_2__["default"])(WeatherObj);
}

function errorCity() // if city was not found
{
  // city doesn't exist
  document.getElementsByClassName('wmain')[0].style.display = 'none';
}

function checkWeather(city) // send to API city respond
{
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=95321e74a3b2752e4ec9ee5430f15f85`)
    .then((res) => res.json())
    .then((res) => SetWeatherVariable(res))
    .catch(errorCity);
}

document.addEventListener('keyup', (event) => // Clicking eneter and Saving variable ==> CheckWeather()
{
  if (event.keyCode === 13)
  {
    if (document.activeElement.tagName === 'INPUT') // Eneter on imput
    {
      inputValue = inputCity[0].value; // Save and clear input
      inputCity[0].value = '';
      checkWeather(inputValue);
    }
  }
});

(0,_ottawa__WEBPACK_IMPORTED_MODULE_1__["default"])(); // set ottava weather

})();

/******/ })()
;