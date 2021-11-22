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
        autoplay:true,
        autoplaySpeed:3000,
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



  // 첫번째 섹션 제품 슬라이드
$('.pr_slider'). slick({
    
    arrows:false,
    autoplay:true,
    slidesToShow: 4,
    //centerMode:true,
    //centerPadding:"100px",

});


//첫번째 섹션 제품 슬라이드 가운데 커지는거랑 바 이동//

$('.pr_slider figure').eq(4).addClass('on')
$('.pr_slider').on('afterChange',function(e,s,c){
    //c = 1,2.......
    $('.pr_slider figure').eq(c+8).addClass('on').siblings().removeClass('on');
    $('#content01 .slide_bar>span').css({left:c*100})
    
});


//첫번째 섹션 제품 슬라이드 화살표//

$('#content01 .btn i.xi-angle-left-thin').on('click',function(){
    $('.pr_slider').slick('slickPrev');
});
$('#content01 .btn i.xi-angle-right-thin').on('click',function(){
    $('.pr_slider').slick('slickNext');
});

   

//탭 메뉴//
$('.tab_menu li').on('click', function(){
    var idx=$(this).index();
    // $('.tab_con>div').eq(idx).show().siblings().hide();
    $('.tab_con>div').eq(idx).addClass('on').siblings().removeClass('on');
    $(this).addClass('on').siblings().removeClass('on');
});

//네번째 섹션 슬라이더//

$('.con04_slider02').slick({
    arrows:false,
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,

});

//첫번째 섹션 제품 슬라이드 화살표//

$('.container .con04-d i.xi-angle-left-thin').on('click',function(){
    $('.con04_slider02').slick('slickPrev');
});
$('.container .con04-d i.xi-angle-right-thin').on('click',function(){
    $('.con04_slider02').slick('slickNext');
});


//다섯번째 섹션 슬라이더//
  
$('.con05_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow:1,
    autoplaySpeed:1500,
    dots:true,

});
//------다섯번째 섹션화살표------//

$('#content05 .con05_btn i.xi-angle-left-thin').on('click', function(){
    $('.con05_slider').slick('slickPrev');
});
$('#content05 .con05_btn i.xi-angle-right-thin').on('click', function(){
    $('.con05_slider').slick('slickNext');
}); 

    //toTop//
$('#toTop').on('click', function(){
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
   $('').css({top:300+sct})
});

});  