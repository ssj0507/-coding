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
      fade: true,
      arrows:false,
      pauseOnFocus: false,
      pauseOnHover:false,
  });   
  //팝업 슬라이드 멈춤,이전,이후,닫기버튼
  $('.but').on('click',function(){
      $('.con03_slider').slick("slickPause")
  });    
  $(".prev").on('click',function(){
      $('.con03_slider').slick("slickPrev")
  });    
  $(".next").on('click',function(){
      $('.con03_slider').slick("slickNext")
  });  
  $(".close").on('click',function(){
      $('.con03_slider').addClass("on");
  });  
});
