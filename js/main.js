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

if (document.querySelectorAll('.ama-item').length > 3) {
  const elements = document.querySelectorAll('.ama-item');
  elements.forEach((element) => {
    element.style.margin = '0';
  });
}
