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
const mobileWidth = window.matchMedia('screen and (max-width: 767px');
const tabletWidth = window.matchMedia('screen and (min-width: 768px)');

const progress = document.querySelector('.slider');
const imageAfter = progress.querySelector('.slider__image-after');
const imageBefore = progress.querySelector('.slider__image-before');
const scale = progress.querySelector('.slider__range');
const range = scale.querySelector('.slider__range-input');
const rangeToggle = scale.querySelector('.slider__range-toggle');
const btnBefore = progress.querySelector('.slider__button--before');
const btnAfter = progress.querySelector('.slider__button--after');

btnBefore.addEventListener('click', function () {
  range.value = 0;
  range.setAttribute('value', range.value);
  imageBefore.style.width = '100%';
  imageAfter.style.width = '0%';

  if (mobileWidth.matches) {
    rangeToggle.style.transform = 'translateX(0%)';
  }
});

btnAfter.addEventListener('click', function () {
  range.value = 100;
  range.setAttribute('value', range.value);
  imageBefore.style.width = '0%';
  imageAfter.style.width = '100%';

  if (mobileWidth.matches) {
    rangeToggle.style.transform = 'translateX(100%)';
  }
});

function handleMobile(media) {
  if (media.matches) {
    range.value = 0;
    range.setAttribute('value', range.value);

    imageBefore.style.width = `${100 - range.value}%`;
    imageAfter.style.width = `${range.value}%`;
  }
}

function handleTablet(media) {
  if (media.matches) {
    range.value = 50;
    range.setAttribute('value', range.value);

    imageBefore.style.width = `${range.value}%`;
    imageAfter.style.width = `${range.value}%`;

    range.addEventListener('input', function () {
      this.setAttribute('value', this.value);
      imageBefore.style.width = `${100 - range.value}%`;
      imageAfter.style.width = `${range.value}%`;
    })
  }
}

mobileWidth.addListener(handleMobile);
handleMobile(mobileWidth);
tabletWidth.addListener(handleTablet);
handleTablet(tabletWidth);
