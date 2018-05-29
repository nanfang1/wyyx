$(document).ready(function(){  

      $(".dl-top-tp li").mouseover(function(){
      	if($(this).find("a").html()=="普通登录"){
      		$(".ptdl").removeClass("active");
      		$(".ewmdl").addClass("active");
      		$(".tksx").show();
      		$(".tksx-t").hide();
      	}else{
      		$(".ewmdl").removeClass("active");
      		$(".ptdl").addClass("active");
      		$(".tksx").hide();
      		$(".tksx-t").show();
      	}
	});


  $('.dl-k').click(function(){

		if ($('#Email').val().length == 0 || 
					$('#password').val().length == 0 
			){
					alert('请填写完整信息');
					return false;
				}
		});

		// 鼠标进入事件
		$('.input-b-b').mouseenter(function(){
			$('.input-b-b .pic').show();
			$('.input-b-b .pic-small').show();
		});
		$('.input-b-b').mouseleave(function(){
			$('.input-b-b .pic').hide();
			$('.input-b-b .pic-small').hide();
		});

		// 拖动事件



		// $('.input-gd').mousedown(function(e){
		// 	console.log("按下")

		// 	var first_bx =e.offsetX;
		// 	//console.log(first_bx)

		// 	var bx = 0;

		// 	$(document).mousemove (function(e){
		// 			var end_bx = e.offsetX;
		// 			// console.log(end_bx)
		// 			bx = end_bx - first_bx ;
		// 			if(bx < 0){
		// 					bx = 0;
		// 			}else if(bx > 270) {
		// 				bx = 270;
		// 			}
		// 			$('.input-gd').css('left' , bx + 'px');	
		// 			// $('.pic-small').css('left' , bx + 'px')
		// 		});
		// });

		// $('.input-gd').mouseup(function(){
		// 	console.log("弹起来了")

		// 	// $(document).mousemove = null;
		// 	document.onmousemove = null;
		// });



	
    // 实现拖拽
    // 鼠标移动的距离, 就是盒子移动的距离
    function s( selector ) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
    }

    var bar = s( '.input-gd' )[ 0 ], //小div
		scroll = s( '.input-b-b' )[ 0 ]; //大div


	$('.input-gd img').mousedown(function (e) {
		e.preventDefault();
	});
				
    bar.onmousedown = function ( e ) {
        
        var X = e.pageX;
        
        
        var left = bar.offsetLeft;

        document.onmousemove = function ( e ) {
            
            var deltaX = e.pageX;
            var deltaLeft = deltaX - X + left;

            if ( deltaLeft < 0 ) {
                deltaLeft = 0;
            }

            if ( deltaLeft > 270 ) {
							deltaLeft = 270;
            }
						bar.style.left = deltaLeft + 'px';
						$('.pic-small').css('left' , deltaLeft + 'px')
						
        }
    };
    document.onmouseup = function () {
		document.onmousemove = null;
		// $(document).off();
    };
		
});



