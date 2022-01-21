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
        
        afterLoad: function(origin, destination, direction){
            let txt = $('.navbar>li').eq(destination.index).find('a').text();
            $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
            $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
            
        },
        
        afterSlideLoad: function(section, origin, destination, direction) {
            $this_s.eq(destination.index).addClass('on').siblings().removeClass('on');
        }

        
    });
    //슬라이드에 훨이벤트 달기...
    $('#slide').on('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            fullpage_api.moveSlideLeft();
        }
        else{
            fullpage_api.moveSlideRight();
        }
    });

      
    //메뉴
    $('.m_btn').click(function(){
        $(this).toggleClass('on');
        $('.m_bg').slideToggle();
        
    });
    

    
      
    //Web · Ui · UX Design
    new Typed('.l_txt',{
        strings: ['Web · UI · UX Design'],
        typeSpeed:100,
    });
    
    
   
    
    //-----------------------------------------------------
});