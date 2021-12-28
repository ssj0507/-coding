$(function () {
 // 스크롤할때 헤드변경

 $(window).on('scroll', function () {
  var sct = $(window).scrollTop();
  console.log(sct);
  sct > 0 ? $('.herder').addClass('on') : $('.herder').removeClass('on');
});

//메인 슬라이드
$('.main_slider').slick({
  //autoplay: true,
  //autoplaySpeed:2500,
  pauseOnHover: false,
  pauseOnFocus: false,
  fade: true,
  arrows: false,
  dots: false,
});

});
