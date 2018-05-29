var imgUl = document.querySelector('.screen ul');
    var imgLi = document.querySelector('.screen ul li');
    var olLi = document.querySelectorAll('.screen ol li');
    var index = 1 ;
    var intervalId = null; 
    var arr = document.querySelector('#arr');
    var left = document.querySelector('#left');
    var right = document.querySelector('#right');
    //设置方向函数
    function move (fangxiang){
        fangxiang = fangxiang || 1;
             if (index === 6) {
                imgUl.style.left = '-644px'
                index = 1;
             }
             if (index === 0) {

                imgUl.style.left = -644 *5 + 'px'
                index = 5;
             }
            index+=fangxiang;
            animate(imgUl , -644 *index);
            gao();
            
            

    }
    //设置高亮函数
    function gao (){
        for (var i = 0; i < olLi.length; i++) {
                olLi[i].className = '';
                if (index === 0) {
                    olLi[4].className = 'current';
                }else if (index ===6) {
                    olLi[0].className = 'current';
                }else{
                    olLi[index - 1].className = 'current';
                }
            }
    }
    intervalId = setInterval(move,2000); //调用函数
  

  //设置鼠标事件
  box.onmouseover = function(){
    //清除定时器
    clearInterval(intervalId);
    arr.style.display = 'block';
  }
  box.onmouseout = function(){
    //设置定时器
    intervalId =setInterval(move,2000);
    // arr.style.display = 'none'
  }

  //按钮点击事件
  left.onclick = function(){
    move(-1);
  }
  right.onclick = function(){
    move(1);
  }
  //右下角数字按钮
 for (var i = 0; i < olLi.length; i++) {
     olLi[i].onclick =function(){
        //先赋值
        index = this.innerHTML-0;
        //设置动画
        animate(imgUl , -644 *index);
        //调用高亮函数
        gao();
     }
 }