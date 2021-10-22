// Burger Menu

const mainSiteList = document.querySelector('.main-nav__site-list');
const navToggle = document.querySelector('.main-nav__toggle-menu');

mainSiteList.classList.remove('main-nav__site-list--nojs');
navToggle.classList.remove('main-nav__toggle-menu--nojs');

if (!mainSiteList.classList.contains('main-nav__site-list--closed')) {
  mainSiteList.classList.add('main-nav__site-list--closed');
}

navToggle.onclick = () => {
  mainSiteList.classList.toggle('main-nav__site-list--closed');
  navToggle.classList.toggle('main-nav__toggle-menu--opened');
  navToggle.classList.toggle('main-nav__toggle-menu--closed');
};
