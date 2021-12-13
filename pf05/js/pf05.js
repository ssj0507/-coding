$(function () {
  // 스크롤할때 헤드변경

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

 


});
