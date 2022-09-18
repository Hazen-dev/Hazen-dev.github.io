/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
/* eslint-disable brace-style */
import ottawa from './ottawa';

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

export function CheckSetIcons(weather, i)
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

export default function UpdateMainWeather(weather)
{
  // eslint-disable-next-line no-restricted-syntax
  for (let i = 0; i < 5; i += 1) // 5 times for
  {
    $('h2:nth-child(4)')[i].innerHTML = `${transferTemp(weather.list[i].main.temp)}°C`;
    // getting [i] element and setting [i] innerHTML
    $('p:nth-child(3)')[i].innerHTML = weather.list[i].weather[0].description;
    document.getElementsByClassName('wmain')[0].style.display = 'block'; // show main weather div
    ottawa();
    CheckSetIcons(weather, i); // set main weather
  }
}
