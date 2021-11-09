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

});  