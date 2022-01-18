$(function(){
    //-----------------------------------------------------
    
    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        anchors:['intro', '2Page', '3Page', '4Page', '5Page'],
        afterLoad:function(origin, destination, direction){
            let idx=destination.index;
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
        },
    });
    
    
    //WEB is My MONEY
    new Typed('.slogan_txt',{
        strings: ['Sunjin Portpolio'],
        typeSpeed:100,
    });
    
    $('.cover_btn').on('click', function(){
        $("#cover").slideToggle(); //fadeToggle
    });
    
    
    let cloneMenu = $('nav>ul').clone();
    $('#cover').append(cloneMenu);
    
    $('#cover a').on('click', function(){
        $('#cover').slideUp(); 
    });
    
    $('#cover').on('scroll wheel touchmove', function(){
        return false;
    });
    
    
    //-----------------------------------------------------
    })