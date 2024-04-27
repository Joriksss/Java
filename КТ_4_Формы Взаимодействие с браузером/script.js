function login(){
    let email = document.getElementById('emailid').value;
    let password = document.getElementById('password').value;

    if (email == 'user@mail.ru' && password == '123456') 
    {
        location.assign('http://127.0.0.1:5500/wellcome_page.html')
    }
    else{
        window.alert('Доступ ЗАПРЕЩЕН')
    }
}