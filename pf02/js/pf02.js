$(function(){
    // 스크롤할때 헤드변경

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0) {
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on');
        }
    });

    $('.main_slider').slick({
        //autoplay:true,
        autoplaySpeed:800,
        pauseOnHover:false,
        arrows:false,
        dots:true,
    });

    //------화살표------//

    $('#main_visual .main_btn i.xi-angle-left-thin').on('click', function(){
        $('.main_slider').slick('slickPrev');
    });
    $('#main_visual .main_btn i.xi-angle-right-thin').on('click', function(){
        $('.main_slider').slick('slickNext');
    });

    //------글자효과------//

    $('.main_slider figure').eq(1).addClass('on')
    $('.main_slider').on('afterChange',function(e,s,c){
        //console.log(c);
        $('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
    });

    //------네번째 동영상------//

    $('#mv01').YTPlayer({
        videoURL:'https://youtu.be/SRTFvKv9Qk8',containment:'#self',
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showControls:false,
        playOnlyIfVisible:true,
        optimizeDisplay:false,
    });
    
    $('#content04_mv i.xi-pause').on('click',function(){
        $('mv01').YTPause();
    });

    $('#visual i.xi-play').on('click',function(){
        $('#bgndVideo').YTPlay();
    });

    $('#visual i.xi-tv').on('click',function(){
        $('#bgndVideo').YTPFullscreen();
    });
});  