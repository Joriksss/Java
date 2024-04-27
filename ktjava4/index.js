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

let email = document.getElementById('emailid');
let password = document.getElementById('password');
let buttons = document.querySelectorAll('.btn');

let focused = null;

function handlefocusPw (){
    focused = 'pass'
  }

password.addEventListener('click', handlefocusPw)

function handleFocusEmail(){
    focused = 'e-mail'
  }

email.addEventListener('click', handleFocusEmail)

buttons.forEach(btn => {
    
    btn.addEventListener('click', ()=>{
      if(focused === 'pass')
      {
        password.value += btn.innerHTML
      }

      if(focused === 'e-mail')
      {
        email.value += btn.innerHTML
      }

    })

  })

var activeInput = null;
        
function backspace() {
  if (activeInput) {
    activeInput.value = activeInput.value.slice(0, -1);
  }
}

document.getElementById("emailid").addEventListener("focus", function() {
  activeInput = this;
});

document.getElementById("password").addEventListener("focus", function() {
  activeInput = this;
});
