$(function(){
    // 스크롤할때 헤드변경

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        sct > 0 ? $('.herder').addClass('on') : $('.herder').removeClass('on');
    });

    $('.main_slider').slick({
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        fade:true,
        arrows:false,
        dots:true,
    });

 //------화살표------//

 $('.main_visual .main_btn i.xi-angle-left-thin').on('click', function(){
    $('.main_slider').slick('slickPrev');
});
$('.main_visual .main_btn i.xi-angle-right-thin').on('click', function(){
    $('.main_slider').slick('slickNext');
});



   

//탭 메뉴//
$('.tab_menu li').on('click', function(){
    var idx=$(this).index();
    // $('.tab_con>div').eq(idx).show().siblings().hide();
    $('.con04_tab>div').eq(idx).addClass('on').siblings().removeClass('on');
    $(this).addClass('on').siblings().removeClass('on');
});

//세번째 js로 하는 slick 버전//

var Rsd = $('.r_slider');

var slickOptions = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    centerMode:true,
    dots:false,
    arrows:false
};

$(window).on('load resize', function() {
    if($(window).width() > 768) {
        Rsd.slick('unslick');
    }else{
        Rsd.not('.slick-initialized').slick(slickOptions);
    }
});




 

//toTop//

$('.toTop').on('click', function(){
    $('html, body').animate({scrollTop:0},400)
});

$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    //if(sct>400){
    //    $('#toTop').fadeIn()
   // }else
    //$('#toTop').fadeOut()
    //}
   sct>400 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();
   $(this).css({top:300+sct})
});

//다단메뉴에서 호버부분을 ( #header nav>ul>li:hover .total {display:none;})을 할때 사용하는것이다.//
$('#header nav>ul>li>a').on('click', function(e){
    if($('.ddgf').hasClass('on')) {
        e.preventDefault();
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.total').stop().slideUp();
    }
});

//모바일용 메뉴//

$('.mopen').on('click', function(){
    $('.gnb').toggleClass('on');
    $('.search').fadeToggle();
})

$(window) .on('resize', function(){
    $('.total').removeAttr('style')
});





});  