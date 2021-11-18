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

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license. https://github.com/paulirish/matchMedia.js/ */

window.matchMedia || (window.matchMedia = function() {
  'use strict';

  // For browsers that support matchMedium api such as IE 9 and webkit
  var styleMedia = (window.styleMedia || window.media);

  // For those that don't support matchMedium
  if (!styleMedia) {
      var style       = document.createElement('style'),
          script      = document.getElementsByTagName('script')[0],
          info        = null;

      style.type  = 'text/css';
      style.id    = 'matchmediajs-test';

      if (!script) {
        document.head.appendChild(style);
      } else {
        script.parentNode.insertBefore(style, script);
      }

      // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
      info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

      styleMedia = {
          matchMedium: function(media) {
              var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

              // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
              if (style.styleSheet) {
                  style.styleSheet.cssText = text;
              } else {
                  style.textContent = text;
              }

              // Test if media query is true or false
              return info.width === '1px';
          }
      };
  }

  return function(media) {
      return {
          matches: styleMedia.matchMedium(media || 'all'),
          media: media || 'all'
      };
  };
}());

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
