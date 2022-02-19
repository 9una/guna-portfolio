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
        emailjs.send('service_cixcr8a', 'template_u5gmc2g', templateParams).then(function (response) {
            alert('메일이 전송되었습니다. 빠르게 연락드리겠습니다 :)');
            window.location.reload();
        }, function (error) {
            alert('정상적인 제출이 이루어지지 않았습니다. 다시 시도해주세요.');
        });
    });

});