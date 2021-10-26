// Slider
const sliderImageBefore = document.querySelector('.slider__cat-before .slider__image');
const sliderImageAfter = document.querySelector('.slider__cat-after .slider__image');
const beforeButton = document.querySelector('.slider__before');
const afterButton = document.querySelector('.slider__after');

beforeButton.setAttribute('disabled', 'disabled');

beforeButton.onclick = () => {
  sliderImageBefore.classList.add('slider__image--show');
  sliderImageAfter.classList.remove('slider__image--show');
  beforeButton.setAttribute('disabled', 'disabled');
  afterButton.removeAttribute('disabled');
}

afterButton.onclick = () => {
  sliderImageAfter.classList.add('slider__image--show');
  sliderImageBefore.classList.remove('slider__image--show');
  afterButton.setAttribute('disabled', 'disabled');
  beforeButton.removeAttribute('disabled');
}
