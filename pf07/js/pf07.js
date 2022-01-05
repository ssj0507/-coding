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

// 아이콘을 누르면 검색창을 열리고 x를 누르면 닫아진다.
  $('.hd_s').on('click', function(){
    $(this).toggleClass('on');
    $('.search').stop().slideToggle();
  });

  // 두번째 섹션 제품 슬라이드
  $('.con02_slider').slick({
    arrows:false,
    pauseOnHover:false,
    pauseOnFocus:false,
    autoplay:true,
    autoplaySpeed:3500,
    dots:true,

  });



    ////////////////////// con03 팝업창 //////////////////////////
    //팝업 슬라이드
    $('.con03_slider').slick({
      autoplay:true,
      autoplaySpeed:2500,
      dots:false,
      vertical: true,
      arrows:false,
      pauseOnFocus: false,
      pauseOnHover:false,
  });   
  //팝업 슬라이드 멈춤,이전,이후,닫기버튼
  $('.btn').on('click',function(){
      $('.con03_slider').slick('slickPause')
  });    
  $(".xi-angle-up-min").on('click',function(){
      $('.con03_slider').slick("slickPrev")
  });    
  $(".xi-angle-down-min").on('click',function(){
      $('.con03_slider').slick("slickNext")
  });  
  $(".xi-close").on('click',function(){
      $('.con03_popup').addClass("on");
  });  
});
