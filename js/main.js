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

/* Features slider */
$(document).ready(function () {
  $('.features__info-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  });
});

/* Gallery overlay */
const galleryImages = document.querySelectorAll('.gallery__images__block .gallery__images-item');

galleryImages.forEach((galleryImage) => {
  const overlay = galleryImage.querySelector('.overlay');

  galleryImage.addEventListener('mouseover', function() {
    const image = galleryImage.querySelector('.gallery__images-item-img');
    image.style.transform = 'translateY(-38px)';
    overlay.style.height = '87px';
    overlay.style.display = 'flex';
  });

  galleryImage.addEventListener('mouseout', function() {
    const image = galleryImage.querySelector('.gallery__images-item-img');
    image.style.transform = 'none';
    overlay.style.height = '0';
    overlay.style.display = 'none';
  });
});



/* Like counter */
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const paintedHeart = button.querySelector('.like-button-img-painted');
    const regularHeart = button.querySelector('.like-button-img');
    const likeCount = button.closest('.like-section').querySelector('.like-count');

    const isLiked = paintedHeart.style.display === 'block';

    if (isLiked) {
      paintedHeart.style.display = 'none';
      regularHeart.style.display = 'block';
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
    } else {
      paintedHeart.style.display = 'block';
      regularHeart.style.display = 'none';
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
  });
});

$(document).ready(function() {
  const $footerEmailInput = $('#email');

  function validateEmailField() {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const email = $footerEmailInput.val().trim();

    if (!emailRegex.test(email)) {
      $footerEmailInput.css({
        border: '1px solid red',
        boxShadow: 'inset 0 0 5px red'
      });
      return false;
    } else {
      $footerEmailInput.css({
        border: '',
        boxShadow: ''
      });
      return true;
    }
  }

  $footerEmailInput.blur(validateEmailField);

  $('form').submit(function(event) {
    if (!validateEmailField()) {
      event.preventDefault(); // Зупиняє відправку форми, якщо поле не пройшло валідацію
    }
  });
});
