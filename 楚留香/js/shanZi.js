//扇子区点击事件
    var shanZi = document.querySelector('.bg .w .shanZi ul li a');
    var nei1 = document.querySelector('.bg .w .shanZi ul li .nei1');
    var box = document.querySelector('.bg .w .shanZi');
    var shanZis = document.querySelectorAll('.bg .w .shanZi ul li a');
   
    var cha = document.querySelectorAll('.bg .w .shanZi ul li div em');
//循环扇子
    for(var i = 0; i <shanZis.length;i++){
        shanZis[i].onclick = function(){
            this.nextElementSibling.style.display = 'block';
            this.nextElementSibling.style.zIndex = 88;
            box.style.backgroundColor = 'rgba(0,0,0,0.4)';
            
            return false;
        };
    };
//扇子内部的关闭按钮
    var dv = document.querySelectorAll('.bg .w .shanZi ul li #nei ');
    for(var i = 0; i<dv.length ;i++){
        for (var j = i; j < cha.length; j++) {
            cha[j].onclick = function () {
                this.parentNode.style.display = '';
                box.style.backgroundColor = '';
                return false;
            };
        };
    };
        





