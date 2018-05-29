 // 1 滚动头部生成
 $(window).scroll(function () {
     
    var scrollTop = $(window).scrollTop();
    
    if (scrollTop > 250) {
     
      $('#head-scroll').show();
      $('#head-scroll').css('z-index', '999')
    } else {
        $('#head-scroll').hide();
    }
  });

  // 永久图标

  $('.sort .bottom > div .money1 i').hover(function(){
        $(this).parent().siblings('#msg').show();
  },function(){
        $(this).parent().siblings('#msg').hide();
  });


  // 回到顶部的按钮

  $(window).scroll(function () {
     
    var scrollTop = $(window).scrollTop();
    
    if (scrollTop > 100) {
     
        $('.sta-btm').stop().show();
    } else {
        $('.sta-btm').stop().hide();
    }
  });

  $('.sta-btm').click(function(){
    $('body, html').scrollTop(0);

  })
  

  // 意见的弹出框

  $('.sta-top').click(function(){
    $('.tan').show();
    $('.cover').show();
  });
  
  $('.tan-top > i').click(function( e ){
    $('.cover').hide();
    $('.tan').hide();
    e.stopPropagation();
  });


