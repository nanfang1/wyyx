function addFormCheck(elementId, Reg, tip) {

    var txt = document.getElementById(elementId);

    txt.onfocus = function(){
        this.style.border = "";
    }
    txt.onblur = function () {
        var span = this.nextElementSibling;
        

        if (Reg.test(this.value)) {
            span.innerHTML = "";
            this.style.border = "";
            $(this).removeClass("erro")
        }  else {
            span.innerHTML = tip;
            this.style.border = "1px solid red";
            
            $(this).addClass("erro")
        }
    }
};
addFormCheck('account', /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, "请输入正确的邮箱地址");
addFormCheck('password', /^\w{6,17}$/, "6-16位密码，区分大小写");
addFormCheck('Repassword', /^\w{6,17}$/, "6-16位密码，区分大小写");
addFormCheck('phone', /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, "请输入正确的手机号");

$('#signIn').click(function(){

    if ($('#password').val() != $('#Repassword').val()) {
        $('#password').siblings('span').text("两次密码要一致");
        $('#Repassword').siblings('span').text("两次密码要一致");
        return false;
    };

    if ($('#password').val().length == 0 || 
        $('#Repassword').val().length == 0 ||
        $('#account').val().length == 0||
        $('#phone').val().length == 0
    ){
        alert('请填写完整信息');
        return false;
    };

    if (!$('.checkbox').prop('checked')) {
        return false;
    }

    return !$('input').hasClass('erro')

    // layer.msg('恭喜你注册成功,正在跳转到主页', {
    //     time: 8000 //不自动关闭

    //   });
    //  setTimeout(() => {
    //     location.href = '../../../阴阳师2.index.html'
    //  }, 2000);
});


$('.sign p.yz a').click(function(){

    var i = 60;

    var intervalId = setInterval(function(){
        i--;
        if (i==0) {
            clearInterval(intervalId);
            $('.sign p.yz a').text("再次发送");
        }else{
            $('.sign p.yz a').text("重发" + i +"s");
        };        
    },1000)
    return false;
});


// var btn = document.getElementById('signIn');
// var password = document.getElementById('password');
// var Repassword = document.getElementById('Repassword');

// btn.onclick = function(){
//     if (password.value != Repassword.value) {
//         password.nextElementSibling.innerHTML = "请输入一致密码";
//         Repassword.nextElementSibling.innerHTML = "请输入一致密码"   
//     }
// };


