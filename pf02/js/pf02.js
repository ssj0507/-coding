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
       // autoplay:true,
        autoplaySpeed:800,
        pauseOnHover:false,
        arrows:false,
        dots:true,
    });




});  