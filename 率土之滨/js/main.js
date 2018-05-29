       // pc端下载(鼠标进入事件)
   $('.pic4').mouseover(function(){
       $('.down-pc').show();
   });
   $('.download').mouseout(function(){
       $('.down-pc').hide();
   });

    //轮播图
    // 1 鼠标放到wrap上，箭头 透明度 1
    
    $('.wrap').mouseover(function () {
      $('#arrow').css('opacity', 1);
    });

    $('.wrap').mouseout(function () {
      $('#arrow').css('opacity', 0);
    });

    var arr = ['slide1', 'slide2', 'slide3','slide4','slide5'];
    $('#arrRight').click(function () {
      var last = arr.pop();
      arr.unshift(last);
      var $list = $('#slide li');
      for (var i = 0; i < arr.length; i++) {
        $($list[i]).removeClass().addClass(arr[i]);
      }
    });
    $('#arrLeft').click(function () {
      var first = arr.shift();
      arr.push(first);
      var $list = $('#slide li');
      for (var i = 0; i < arr.length; i++) {
        $list[i].className = arr[i];
      }
    });
// 新服福利
// 鼠标进入事件
$('.container .main .fuli li').mouseover(function() {
    var index = $(this).index();
    $('.container .main .fuli li .bottom_side').eq(index).stop().slideDown(100).siblings().stop().slideUp(100);
});
$('.container .main .fuli li').mouseout(function() {
    var index = $(this).index();
    $('.container .main .fuli li .bottom_side').eq(index).stop().hide();
});
//鼠标点击事件
//点击视频播放
//第一种方法
$('.video .shipin .img2').click(function() {
    $('.video-back').show();
    // console.log($('.video-back'));
   $('video').get(0).load(); 
     $('video').get(0).play();
     $('audio').get(0).pause();
});
$('.video-close').click(function(){
    $('.video-back').hide();
     $('video').get(0).pause();
     $('audio').get(0).play();
});

// 新人福利点击效果
$('.container .main .fuli li').click(function() {
    var index = $(this).index();
    console.log(index);
    $('.click-result').eq(index).show();
    $('.mask').show();
});
$('.close-result').click(function(){
    $('.click-result').hide();
    $('.mask').hide();
});

//东风起年度大版本
// $('.eastwind .heroes ul li').mouseover(function(){
//   var index = $(this).index();
//     $('.eastwind .heroes .bord').eq(index).stop().show().animate({'top' : -8,'left' : -8
//   },600)
// });
// $('.eastwind .heroes ul li').mouseout(function(){
//    var index = $(this).index();
//   $('.eastwind .heroes .bord').eq(index).stop().hide().css({
//     'top' : 0,
//     'left' :0
//   });
// });

