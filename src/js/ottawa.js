/* eslint-disable brace-style */
// eslint-disable-next-line import/no-cycle
import { CheckSetIcons } from './Update-main-weather';

function transferTemp(kelvin)
{
  return (kelvin - 273.15).toFixed(1);
}
function setOttawa(res)
{
  const temperature = document.getElementsByClassName('top__main-temperature')[0];
  temperature.innerHTML = `${transferTemp(res.main.temp)}°C`;
  CheckSetIcons(res, 69); // sett main weather iwth 69 flag
}
export default function ottawa() // send to API Ottawa respond
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q=ottawa&appid=95321e74a3b2752e4ec9ee5430f15f85')
    .then((res) => res.json())
    .then((res) => setOttawa(res));
}
