$(document).ready(function() {
    emailjs.init("user_d0irEfZHDndKF759ZHGoR");

    $('input[name=submit]').click(function () {
        
        const templateParams = {	
        //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
              name: document.querySelector('#contact form input[name=name]').value,
              email : document.querySelector('#contact form input[name=email]').value,
              message : document.querySelector('#contact form textarea').value
        };

        if(templateParams.name.length == 0 || templateParams.email.length == 0 || templateParams.message.length == 0){
            alert('양식을 확인해주세요.')
        }else {
            //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체) 
            emailjs.send('service_cixcr8a', 'template_u5gmc2g', templateParams).then(function (response) {
                alert('메일이 전송되었습니다. 빠르게 연락드리겠습니다 :)');
                window.location.reload();
            }, function (error) {
                alert('정상적인 제출이 이루어지지 않았습니다. 다시 시도해주세요.');
            });
        }
    });

});
