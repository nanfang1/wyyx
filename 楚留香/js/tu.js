//视频区
(function (window) {
        var list = document.querySelectorAll('.bg .w .shiPin .teSe ul li');
        var tu = document.querySelectorAll('.shiPin #tu ul li');
    function Lists() {
        var ret = '';
        var count = null;
        list.forEach(function (v, i) {
               v.onclick = function () {
                count = i;
                for (var j = 0; j < list.length; j++) {
                    list[j].id = '';
                }
                this.id = 'li'
                for (var j = i; j < tu.length; j++) {
                    tu[j].id = '';
                }
                tu[count].id = 'open';
          
            };
        }); 
    };
   
        return Lists();
    Lists.window = Lists;
})(window);


