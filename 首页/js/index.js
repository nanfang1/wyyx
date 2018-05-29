
   // 鼠标特效
   var $fone = $('.fone');
   document.onmousemove=function(e) {
    var x =e.pageX;
    var y =e.pageY;
    $fone.css('left',x);
    $fone.css('top',y);
  
   };

//点击顶部游戏列表按钮
var count = 0;
var gamelist = document.getElementsByClassName('gamelist ')[0];
var change = document.getElementsByClassName('change')[0];
var before = document.getElementsByClassName('before')[0];
var gamelistdetail = document.getElementsByClassName('gamelistdetail')[0];
gamelist.onclick  = function () {
    if (count % 2 == 0) {
         change.style.display = 'block';
        before.style.display = 'none';
        gamelist.style.backgroundColor = 'black';
    gamelistdetail.style.display = 'block';
    } else {   
    gamelist.style.backgroundColor = '#cf1132';
    change.style.display = 'none';
    before.style.display = 'block';
    gamelistdetail.style.display = 'none';
    }
    count++;
 }
 //点开游戏列表后，按框内底部的箭头，页面隐藏，恢复游戏列表按钮
 var rollover_hide = document.querySelector('#rollover_hide');
 rollover_hide.onclick = function () {
    gamelistdetail.style.display = 'none';
     gamelist.style.backgroundColor = '#cf1132';
    change.style.display = 'none';
    before.style.display = 'block';
 }
 //轮播图 
  //自动播放
    var index = 0;
    clearInterval(timeId)
    var timeId=setInterval(toLeft,3000);
    function toLeft(){
        if(index*1920>=9600){
            $(".banner").css("left",0);
            index=0;
        }
        index++;
        $(".banner").stop().animate({"left":-index*1920+"px"},"slow");

        //小按钮跟随自动播放显示颜色
        if(index==5){
        $("#controls>li:eq(0)").addClass("current").siblings("#controls>li").removeClass("current");
        }else{
            $("#controls>li:eq("+index+")").addClass("current").siblings("#controls>li").removeClass("current");
        }
    }
    //鼠标经过,清除定时器
    $(".box .banner li").mouseenter(function(){
        clearInterval(timeId);
    });
    $(".box .banner li").mouseleave(function(){
        timeId=setInterval(toLeft,3000);
    });
  //点击控制按钮，显示对应的图片
  $("#controls>li").click(function(){
        clearInterval(timeId)
        timeId=setInterval(toLeft,3000);
        $(this).addClass("current").siblings().removeClass("current");
        index=$(this).index();  
        $(".banner").animate({"left":-index*1920+"px"},200);
      
    });
    //鼠标放在左边栏的li标签上,改变中间显示的图片
  $('.leftbar li').each(function(index) {
    $(this).mouseenter(function() {
     $('.middlebar li').eq(index).show().siblings().hide();
     $(this).css('border-left','red solid 4px').siblings().css('border-left','none')
    });
  });
    
  
 
//范闯开始
$('.ffist .fyi .ftongyi').each(function () {
$(this).mouseenter(function() {
    $(this).
          addClass('fhuantu').siblings(). removeClass('fhuantu');      
  });
  $(this).mouseleave(function() {
    $(this).
          removeClass('fhuantu');
  });
});
$('.ftwo .fyi .ftongyi').each(function () {
    $(this).mouseenter(function() {
        $(this).
              addClass('fhuantu').siblings(). removeClass('fhuantu');
      });
      $(this).mouseleave(function() {
        $(this).
              removeClass('fhuantu');
      });
    });
// 游戏助手的动画
$('.fbody li').mouseover(function () {
    var colors= $(this).css('background-color')
     $(this).css('background-color','#e03c57');
     return colors;
});
$('.fbody li').mouseout(function (colors) {
    $(this).css('background-color','#e3e3e3')
});
//给热门游戏刷新盒子
var cont=0;
$('#f-huan').click(function() { 
    if(cont%2==0) {
        $('.ftwo').fadeIn(250);
        $('.ffist').fadeOut(250);
    }else {
        $('.ftwo').fadeOut(250);
        $('.ffist').fadeIn(250);
    }
    cont++;
  });
  

