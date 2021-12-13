$(function () {
  // 스크롤할때 헤드변경-------------------------

  $(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    console.log(sct);
    sct > 0 ? $('.herder').addClass('on') : $('.herder').removeClass('on');
  });

 //메인 동영상
 $('.bgndVideo').YTPlayer({
    videoURL:'https://youtu.be/oa_Joi26Vgc',
    containment:'.main_visual',
    autoPlay:true,
    mute:true,
    startAt:0,
    opacity:1,
    showControls:false,
  });


  $('.itm01').addClass('on')

  //---첫번째 섹션
  $('.con01_slider').slick({
    arrows:false,
    slidesToShow:5,
    autoplay:true,
    autoplaySpeed:2000,
    //centerMode:true,
    //centerPadding:"100px",
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:false,


  });

  //---첫번째 섹션 사진 커지는거 
  $('.con01_slider figure').eq(7).addClass('on')
  $('.con01_slider').on('afterChange',function(e,s,c){
      //c = 1,2.......
      $('.con01_slider figure').eq(c+7).addClass('on').siblings().removeClass('on');
      $('.content01 .slide_bar>span').css({left:c*100})
  });

  //첫번째 섹션 화살표//

  $('.content01 .con01_btn i.xi-angle-left-thin').on('click', function(){
    $('con01_slider').slick('slickPrev');
  });
  $('.content01 .con01_btn i.xi-angle-right-thin').on('click', function(){
      $('con01_slider').slick('slickNext');
  });

  //탭 메뉴//
$('.tab_menu li').on('click', function(){
  var idx=$(this).index();
  // $('.tab_con>div').eq(idx).show().siblings().hide();
  $('.tab_con02>div').eq(idx).addClass('on').siblings().removeClass('on');
  $(this).addClass('on').siblings().removeClass('on');
});

$('.con02_slider').slick({
  arrows:false,
  slidesToShow:3,
  //autoplay:true,
  //autoplaySpeed:2500,
  pauseOnHover:false,
  pauseOnFocus:false,
  dots:true,
  

});

//두벤째 슬라이드 화살표//

$('.content02 .con02_btn i.xi-angle-left-thin').on('click', function(){
  $('.con02_slider').slick('slickPrev');
});
$('.content02 .con02_btn i.xi-angle-right-thin').on('click', function(){
    $('.con02_slider').slick('slickNext');
});

});
