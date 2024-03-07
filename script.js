console.log('Hello');

$('.burger').on('click', function () {
  if ($('.burger-nav').hasClass('burger-nav-open')) {
    $('.burger-nav').removeClass('burger-nav-open');
    // open-bg=バーガーを×にするクラス
    $('.burger').removeClass('burger-open');
  } else {
    $('.burger-nav').addClass('burger-nav-open');
    $('.burger').addClass('burger-open');
  }
});