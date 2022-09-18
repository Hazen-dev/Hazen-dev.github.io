/* eslint-disable brace-style */
const mediaQuery = window.matchMedia('(min-width: 800px)');
const burger = document.getElementsByClassName('top__burger');
const headerText = document.getElementsByClassName('top__header-text');
const ulElement = document.getElementsByClassName('top__ul-element');
const kontakt = document.getElementsByClassName('kontakt');

export default function CheckMenuHeader()
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
