const clientWidth = document.body.clientWidth;
const tabletWidth = 768;

// Slider
const progress = document.querySelector('.slider');
const imageAfter = document.querySelector('.slider__image-after');
const imageBefore = document.querySelector('.slider__image-before');
const scale = progress.querySelector('.slider__range');
const range = scale.querySelector('.slider__range-input');
const rangeToggle = scale.querySelector('.slider__range-toggle');

console.log(imageAfter.classList.contains('slider__image-after--active'));
console.log(imageBefore.classList.contains('slider__image-before--active'));

if (progress) {
  const btnBefore = progress.querySelector('.slider__button--before');
  const btnAfter = progress.querySelector('.slider__button--after');

  btnBefore.addEventListener('click', function () {
    if (imageAfter.classList.contains('slider__image-after--active')) {
      console.log('click');
      imageAfter.classList.remove('slider__image-after--active');
      imageBefore.classList.add('slider__image-before--active');
      imageBefore.style.width = `${100}%`;
      imageAfter.style.width = `${0}%`;
      rangeToggle.style.transform = 'translateX(0%)';
    }
  })

  btnAfter.addEventListener('click', function () {
    if (imageBefore.classList.contains('slider__image-before--active')) {
      console.log('click');
      imageBefore.classList.remove('slider__image-before--active');
      imageAfter.classList.add('slider__image-after--active');
      imageAfter.style.width = `${100}%`;
      imageBefore.style.width = `${0}%`;
      rangeToggle.style.transform = 'translateX(100%)';
    }
  })

  if (clientWidth >= tabletWidth) {

    range.value = '50%';

    range.addEventListener('input', function () {
      // console.log((100 - range.value) + '%');
      // rangeToggle.style.left = `${0 + range.value}%`;
      imageBefore.style.width = `${100 - range.value}%`
      imageAfter.style.width = `${range.value}%`;
    })

    btnBefore.addEventListener('click', function () {
      range.value = 1;
      // rangeToggle.style.left = `${0}%`;
      imageBefore.style.width = '100%';
      imageAfter.style.width = '0%';
    });

    btnAfter.addEventListener('click', function () {
      range.value = 100;
      // rangeToggle.style.left = `${100}%`;
      imageBefore.style.width = '0%';
      imageAfter.style.width = '100%';
    });
  }
}
