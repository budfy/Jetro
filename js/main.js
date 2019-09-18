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