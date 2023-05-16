/* Banner slider */
$(document).ready(function () {
  $('.banner__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000
  });
});

/* More than 3 elements */
if (document.querySelectorAll('.ama-item').length > 3) {
  const elements = document.querySelectorAll('.ama-item');
  elements.forEach((element) => {
    element.style.margin = '0';
  });
}

/* Share slider */
$(document).ready(function () {
  $('.share__info-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000
  });
});
