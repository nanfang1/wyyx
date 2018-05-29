/*
必须的参数：1、galleryContainer//最外层的元素选择器
		
可选的参数：1、slidesPerView//展示出来的图片张数，只有3,5两个选择，默认5
			2、rotate //slide做3d旋转时Y轴的旋转角度。默认50。(IE下无效)
			3、stretch：每个slide之间的拉伸值，越小slide靠得越紧。 默认0。
			4、depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认150。(IE下无效)
			5、speed//轮播动画开始到停止的时间，单位ms，默认500ms
			6、autoPlay:自动切换的时间间隔,不设定该参数组件不会自动切换,单位ms，默认0
			7.gallery_prev，gallery_next //前后翻页按钮的元素选择器
			8、initialSlide//设定初始化时slide的索引，默认0

回调：1、onGalleryStart(param)，点击slide过渡开始前触发,param为一个对象，返回一些参数，目前有（index:当前索引值）
	  2、onGalleryEnd(param)，点击slide过渡结束前触发
方法：1、toSlide(index)//跳转到第index个slide
*/
var Gallery = function(){
	var	vendor = (function() {
		if (isIE()<10) {
			return false;
		};
		var dummyStyle = document.createElement('div').style;
		var vendors = 't,WebkitT,MozT,msT,OT'.split(','),
			t;
		for (i = 0; i < vendors.length; i++) {
			t = vendors[i] + 'ransform';
			if (t in dummyStyle) {
				return vendors[i];
			}
		}
	})();
	//区分IE是因为在IE9下面可以支持css3但是页面上双渲染不出来
	function isIE() {
	
		var browser = $.browser;
		   //获取版本号
		  if (browser.msie == true) {
		  	return  browser.version;
		  }else {
		   	return 11;
		   }
	}
	function initStyles(gallery){
		var options = gallery.options,$item = options.galleryContainer.find(".gallery_item"),length = $item.length;
		var galleryWidth = $item.width(),galleryHeight = $item.height();

		//如果卡片的总数与slideperview值相等则将卡片总数加多一倍(为了动画效果流畅，首尾相连时不产生从最后一张突然跳到第一张的跳跃感)
		if (length == options.slidesPerView) {
			var html = options.galleryContainer.html();
			options.galleryContainer.append(html);
			$item = options.galleryContainer.find(".gallery_item");
		};
		$item.each(function(index,item){
			$(this).css('margin-left',-galleryWidth/2);
			$(this)[0].style[vendor+"ransitionDuration"]=options.speed+"ms";
		});
		gallery.options.galleryContainer.css({
			width:galleryWidth*options.slidesPerView,
			height:galleryHeight
		});
		setClassName(gallery,options.initialSlide);
	}
	
	function refreshDoms(gallery){
		var $galleryContainer = gallery.options.galleryContainer;
		var total = gallery.options.galleryContainer.find(".gallery_item").length;
		gallery.fs = $galleryContainer.find(".gallery_active");
		gallery.rm = $galleryContainer.find(".gallery_right_middle");
		gallery.rb = $galleryContainer.find(".gallery_right_back");
		gallery.lm = $galleryContainer.find(".gallery_left_middle");
		gallery.lb = $galleryContainer.find(".gallery_left_back");
	}
	
	function bindEvent(gallery){
		var options = gallery.options,$item = options.galleryContainer.find(".gallery_item"),length = $item.length;
		//前后切换按钮
		var $prev = $(options.gallery_prev),$next = $(options.gallery_next);
		if ($prev.length>0) {
			$prev.click(function(){
				gallery.lm.click();
			});
		};
		if ($next.length>0) {
			$next.click(function(){
				gallery.rm.click();
			});
		};
		//点击slide对象切换
		options.galleryContainer.on('click',".gallery_item",function(){
			var $this = $(this), index = $this.index();
				gallery.toSlide(index);
			autoplay(gallery);
		});
		autoplay(gallery);
	}
	//自动轮播
	var autoSt = null;
	function autoplay(gallery){
		var options = gallery.options,$item = options.galleryContainer.find(".gallery_item"),length = $item.length;
		if (options.autoPlay) {
			if (autoSt!=null) {
				clearInterval(autoSt);
			}
			autoSt = setInterval(function(){
				var index = $('.gallery_active').index();
				index = (index+1)%length;
				gallery.toSlide(index);
			},options.autoPlay);
			
		}
	}
	//添加classname
	function setClassName(gallery,targetIndex,curIndex){
		var options = gallery.options,$item = options.galleryContainer.find(".gallery_item"),length = $item.length;
		$item.eq(targetIndex).addClass('gallery_active');
		var rmIndex = (targetIndex+1)%length;
		$item.eq(rmIndex).addClass('gallery_right_middle');

		var lmIndex = (targetIndex-1+length)%length;
		$item.eq(lmIndex).addClass('gallery_left_middle');

		if (options.slidesPerView == 5) {
			var rbIndex = (targetIndex+2)%length;
			$item.eq(rbIndex).addClass('gallery_right_back');
			var lbIndex = (targetIndex-2+length)%length;
			$item.eq(lbIndex).addClass('gallery_left_back');
		};
		refreshDoms(gallery);
		//IE下轮播时的层级处理
		if (isIE()<10 && typeof(curIndex)=="number") {
			
			if ((targetIndex >curIndex && targetIndex !=0)||(targetIndex == 0 && curIndex == length-1)) {//往后翻页
				$item.removeClass('z-index3 z-index2');
				gallery.rm.addClass('z-index2');
				gallery.lm.addClass('z-index3');
			};
			if ((targetIndex<curIndex && targetIndex !=length-1)||(targetIndex ==length-1 && curIndex == 0)) {//往前翻页
				$item.removeClass('z-index3 z-index2');
				gallery.lm.addClass('z-index2');
				gallery.rm.addClass('z-index3');
			};
		};
		setCss(gallery);
		
		if (options.slidesPerView == 5) {
			setHideCards([targetIndex,rmIndex,rbIndex,lmIndex,lbIndex],gallery);
		}else{
			setHideCards([targetIndex,rmIndex,lmIndex],gallery);
		}
	}
	//设置藏在后面的slide样式
	function setHideCards(arr,gallery){
		var options = gallery.options,$item = options.galleryContainer.find(".gallery_item"),length = $item.length;
		for(var i = 0;i<length;i++){
			if ($.inArray(i,arr)>-1) {
				continue;
			}else{
				setStyle(gallery,$item.eq(i),0,0,options.depth*8);//.addClass("gallery_active");
			}  
		}
	}
	function setStyle(gallery,selector,rotate,stretch,depth){
		//火狐下的特殊处理，因为firefox下translteZ<0的元素无法点击
		/*if ($.browser.browser == "mozilla") {
			depth = 0;
		}*/
		selector[0].style[vendor+"ransform"]="translate3d("+(-stretch)+"px,0,"+(-depth)+"px) rotateX(0deg) rotateY("+rotate+"deg)";
		//IE处理
		if (!vendor) {
			var left = -gallery.options.galleryContainer.find(".gallery_item").width();
			selector.animate({
				'margin-left':left/2-stretch
			},gallery.options.speed,'linear');
		};
	}
	//用js设置各slide的css3样式
	function setCss(gallery){
		var options = gallery.options,$container = options.galleryContainer,$item = $container.find(".gallery_item");
		var galleryWidth = $item.width(),galleryHeight = $item.height();
		setStyle(gallery,$container.find('.gallery_left_middle'),options.rotate,galleryWidth+options.stretch,options.depth);//("gallery_left_middle");
		setStyle(gallery,$container.find('.gallery_active'),0,0,0);//("gallery_active");
		setStyle(gallery,$container.find('.gallery_right_middle'),-options.rotate,-galleryWidth-options.stretch,options.depth);//("gallery_right_middle");
		if (options.slidesPerView == 5) {
			setStyle(gallery,$container.find('.gallery_left_back'),options.rotate*1.4,(galleryWidth+options.stretch)*2,options.depth*2);//("gallery_left_back");
			setStyle(gallery,$container.find('.gallery_right_back'),-options.rotate*1.4,(-galleryWidth-options.stretch)*2,options.depth*2);//("gallery_right_back");
		};
			
	}
	function gotoSlide(gallery,index){
		var param = {
			index:index
		}
		if (typeof(gallery.options.onGalleryStart) == 'function') {
			gallery.options.onGalleryStart(param);
		};
		if (typeof(gallery.options.onGalleryEnd) == 'function') {
			var options = gallery.options;
			setTimeout(function(){
				options.onGalleryEnd(param);
			},options.speed);
		};
		var curIndex = gallery.fs.index();
		if (curIndex == index) {
			return;
		}
		gallery.fs.removeClass('gallery_active');
		gallery.rm.removeClass("gallery_right_middle");
		gallery.lm.removeClass('gallery_left_middle');
		gallery.rb.removeClass('gallery_right_back');
		gallery.lb.removeClass('gallery_left_back');
		setClassName(gallery,index,curIndex);
	}
	var _gallery = function(options){
		this.options = $.extend({
			rotate:50,
			stretch:0,
			depth:150,
			slidesPerView :5,
			speed:500,
			initialSlide:0
		},options);
		this.options.galleryContainer = $(options.galleryContainer);
		this.fs = null;
		this.rm = null;
		this.rb = null;
		this.lm = null;
		this.lb = null;
		initStyles(this);
		bindEvent(this);
	};
	_gallery.prototype = {
		toSlide:function(index){
			gotoSlide(this,index);
		}
		
	}
	return {
		create:function(options){
			 return new _gallery(options);
		}
	}
}();