    // 首页的js 
    //头部右侧内容滚动
        function AutoScroll() {
            $('.link-c').find('ul').animate(
                    {'marginTop':'-100px','opacity':'0.6'},1000,'swing',function() {
                    $(this).css({'marginTop':'0','opacity':'1'}).find("li:first").appendTo(this);
                });
            }
        setInterval(AutoScroll, 3000)//3s滚动一次
        //隐藏菜单
        $('.header .link-b').hover(
            function(){ 
                $('.hide-list').slideDown()
            },function(){
                $('.hide-list').fadeOut(10)
        })
        $('.hide-list .list-a .more').click(function(){
            $(this).parents('.list-a').css({'z-index':'2'})
            $(this).parents('.list-a').stop().animate({'width':'443px'},300);
            $(this).fadeOut(10).siblings('.close').fadeIn(10)
        })
        $('.hide-list .list-a .close').click(function(){
            $(this).parents('.list-a').stop().animate({'width':'300px'},300,function(){$(this).css({'z-index':'1'})});
            $(this).fadeOut(10).siblings('.more').fadeIn(10)
        })
        $('.hide-list .list-b .more').click(function(){
            $(this).parents('.list-b').css({'z-index':'2'})
            $(this).parents('.list-b').stop().animate({'width':'899px','left':'30px'},300);
            $(this).fadeOut(10).siblings('.close').fadeIn(10)
            $('.hide-list .list-b .margin20').css({'marginLeft':'0'})
        })  
        $('.hide-list .list-b .close').click(function(){
            $(this).parents('.list-b').stop().animate({'width':'570px','left':'299px'},300,function(){$(this).css({'z-index':'1'})});
            $(this).fadeOut(10).siblings('.more').fadeIn(10)
            $('.hide-list .list-b .margin20').css({'marginLeft':'20px'})
        })
        //cont2部分       
        $('.cont2 .list li').click(function(){
            var index=$(this).index();          
            $('html,body').css({'overflow':'hidden'});
            $('.maskbox').css({'top':'0'});
            //图片切换
            var swiper = new Swiper('.swiper-container', {
                nextButton: '.next',//右箭头
                prevButton: '.prev',//左箭头
                noSwiping :true,//禁止滑动切换
                initialSlide :index,//对应点击的idex值
                speed:'10'//切换速度
            });
        })
        $('.maskbox .close').click(function(){
            $('html,body').css({'overflow':'auto'});
            $('.maskbox').css({'top':'4000px'});
        })
        //滚动条
        $('.maskbox .text').niceScroll({
            cursorcolor: "#be9f5c", //滚动条的颜色   
            cursorwidth: "5px", //滚动条的宽度   
            cursorborder: "0", //边框css定义    
            cursorborderradius: "5px", //以像素为光标边界半径  圆角   
            autohidemode: false, //是否隐藏滚动条  true的时候默认不显示滚动条，当鼠标经过的时候显示滚动条   
        });     
        //cont3
        //电子相册参数设置
        var myGallery = Gallery.create({
            galleryContainer: ".gallery_container",//外层class
            slidesPerView:3,//展示出来的图片张数，只有3,5两个选择
            gallery_prev:'.gallery_prev',//箭头class
            gallery_next:'.gallery_next',//箭头class
            stretch:-418,//每个item之间的拉伸值，越小slide靠得越紧。 默认0。
            depth:300,//位置深度。值越大z轴距离越远，看起来越小。 默认150。(IE低版本下无效，火狐以及火狐内核下无效)
            initialSlide:0,//中间一张的index，默认0，第一张
            rotate:45,//slide做3d旋转时Y轴的旋转角度。默认50。
            autoPlay:0,//自动切换的时间间隔,不设定该参数组件不会自动切换,单位ms，默认0
        });