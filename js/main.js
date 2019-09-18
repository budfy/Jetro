$('.slider-cont').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider-cont',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: true
});

$('.btn__row').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('btn__row-clicked');
  $('.menu__drop-down').toggleClass('menu__drop-down-active');
});