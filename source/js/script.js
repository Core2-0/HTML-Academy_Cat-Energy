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

// Slider
const sliderImageBefore = document.querySelector('.slider__image-wrapper img:first-child');
const sliderImageAfter = document.querySelector('.slider__image-wrapper img:last-child');
const beforeButton = document.querySelector('.slider__before');
const afterButton = document.querySelector('.slider__after');

console.log(sliderImageBefore);
console.log(sliderImageAfter);

afterButton.onclick = () => {
  sliderImageAfter.classList.add('slider__image--show');
  sliderImageBefore.classList.remove('slider__image--show');
}

beforeButton.onclick = () => {
  sliderImageBefore.classList.add('slider__image--show');
  sliderImageAfter.classList.remove('slider__image--show');
}
