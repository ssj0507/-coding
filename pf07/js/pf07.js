$(function () {
 //스크롤할때 헤드변경

 $(window).on('scroll', function () {
  var sct = $(window).scrollTop();
  console.log(sct);
  sct > 0 ? $('.hd').addClass('on') : $('.hd').removeClass('on');
});

//메인 슬라이드
$('.main_slider').slick({
  autoplay: true,
  //autoplaySpeed:2500,
  pauseOnHover: false,
  pauseOnFocus: false,
  fade: true,
  arrows: false,
  dots: false,
});

$('.xi-search').on('click', function(){
  $('.search').stop().slideToggle();
})
// 두번째 섹션 제품 슬라이드
$('.con02_slider').slick({
  arrows:false,
  pauseOnHover:false,
  pauseOnFocus:false,
  autoplay:true,
  autoplaySpeed:3500,


});
});
