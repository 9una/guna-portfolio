$(document).ready(function() {
    emailjs.init("user_d0irEfZHDndKF759ZHGoR");

    $('input[name=submit]').click(function () {
        
        var templateParams = {	
        //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
              name: $('input[name=name]').val(),
              email : $('input[name=email]').val(),
              message : $('textarea[name=message]').val()
        };
        
       //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
        emailjs.send('gmail', 'template_u5gmc2g', templateParams).then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
    });

});