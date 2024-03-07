console.log('Hello');

$('.burger').on('click', function () {
  if ($('.burger-nav').hasClass('burger-nav-open')) {
    $('.burger-nav').removeClass('burger-nav-open');  //navを表示させるクラスを付与
    $('.burger').removeClass('burger-open');  // バーガーを×にするクラス(burger-open)を付与
  } else {
    $('.burger-nav').addClass('burger-nav-open');
    $('.burger').addClass('burger-open');
  }
});