// Slider
const progress = document.querySelector('.slider');
console.log(progress.classList.contains('slider__image-before--active'));

if (progress) {
  const btnBefore = progress.querySelector('.slider__button--before');
  const btnAfter = progress.querySelector('.slider__button--after');

  btnBefore.addEventListener('click', function () {
    if(progress.classList.contains('slider__image-after--active')) {
      console.log('click');
      // progress.classList.remove('slider__image-after--active');
    }
  })

  btnAfter.addEventListener('click', function () {
    if(progress.classList.contains('slider__image-before--active')) {
      console.log('click');
      // progress.classList.remove('slider__image-before--active');
    }
  })
}
