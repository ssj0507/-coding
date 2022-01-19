$(function(){
    //-----------------------------------------------------
    
    var $this=$('.section');
    var $this_s=$('.slide');
    $this.eq(0).addClass('on');
    $('#main').fullpage({
    
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        controlArrows: false, //슬라이드 화살표 숨김
        loopHorizontal: false, //슬라이드 반복 멈춤
        anchors:['intro', '2Page', '3Page', '4Page', '5Page'],
        //navigation: true,
        navigationPosition: 'right',
        //scrollOverflow:true,          
        
        afterLoad: function(origin,destination){
            //console.log(destination.index);
            $this.eq(destination.index).addClass('on').siblings().removeClass('on');
        },
        
        afterSlideLoad: function(section, origin, destination, direction) {
            $this_s.eq(destination.index).addClass('on').siblings().removeClass('on');
        }
            
            
       
        
        
    });

      
    //메뉴
    $('.m_btn').click(function(){
        $(this).toggleClass('on');
        $('.m_bg').slideToggle();
        
    });
    

    
      
    //WEB is My MONEY
    new Typed('.slogan_txt',{
        strings: ['Sunjin Portpolio'],
        typeSpeed:100,
    });
    
    
    $(".gnb_d").draggable();
    $(".gnb_i").draggable({
         axis: "y",
    });
    
    
    //-----------------------------------------------------
    })