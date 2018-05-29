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
        });