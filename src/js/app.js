/* eslint-disable brace-style */
import CheckMenuHeader from './header-screen-width';
import ottawa from './ottawa';
import UpdateMainWeather from './Update-main-weather';

document.getElementsByClassName('wmain')[0].style.display = 'none'; // hide main weather div
const inputCity = document.getElementsByClassName('top__input');
let inputValue;

// Refreshing website 0.5s in time to set css properties on header bar
window.onload = setInterval(CheckMenuHeader, 500);
inputCity[0].focus(); // Adding focus on input

function SetWeatherVariable(res) // set main weather info
{
  const WeatherObj = res;
  UpdateMainWeather(WeatherObj);
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

ottawa(); // set ottava weather
