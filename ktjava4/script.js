IMask(
    document.getElementById('telephone'),
    {
      mask: '+{7}(000)000-00-00'
    }
  )

IMask(
    document.getElementById('Dr'),
    {
      mask: Date,
      min: new Date(1960, 0, 1),
      max: new Date(2024, 0, 1),
    }
  )

const INPUTS = document.querySelectorAll("input")

const patterns ={
    Familiya: /^[А-Я][А-Яа-я]{1,24}$/,
    Name: /^[А-Я][А-Яа-я]{1,15}$/,
    Firstname: /^[А-Я][А-Яа-я]{1,24}$/,
    telephone: /[+]7[\(]\d{3}[\)]\d{3}[\-]\d{2}[\-]\d{2}/,
};

INPUTS.forEach((input) => {
  input.addEventListener("keyup", (event) =>{
      // console.log(event.target.attributes.name.value);
      validate(event.target, patterns[input.name]);
  })
})

function validate(field, regexp){
  if(regexp.test(field.value)){
      field.className = "valid";
  }else{
      field.className = "invalid";
  }
}

let Famili = document.getElementById('Familiya');
let Name = document.getElementById('Name');
let FirstName = document.getElementById('Firstname');
let dr = document.getElementById('Dr');
let telephone = document.getElementById('telephone');
let buttons = document.querySelectorAll('.btn');

let focused = null;

function handlefocusFm (){
    focused = 'Familiya'
}

Famili.addEventListener('click', handlefocusFm)

function handleFocusName(){
    focused = 'Name'
}

Name.addEventListener('click', handleFocusName)

function firstname (){
    focused = "Firstname"
}

FirstName.addEventListener('click', firstname)

function DayBirth (){
    focused = "Dr"
}

dr.addEventListener('click', DayBirth)

function teleph (){
    focused = "telephone"
}

telephone.addEventListener('click', teleph)


buttons.forEach(btn => {
    
    btn.addEventListener('click', ()=>{
      if(focused === 'Familiya')
      {
        Famili.value += btn.innerHTML
      }

      if(focused === 'Name')
      {
        Name.value += btn.innerHTML
      }
      if(focused === 'Firstname')
      {
        FirstName.value += btn.innerHTML
      }

      if(focused === 'Dr')
      {
        dr.value += btn.innerHTML
      }

      if(focused === 'telephone')
      {
        telephone.value += btn.innerHTML
      }

    })

  })

var activeInput = null;
        
// function backspace() {
//   if (activeInput) {
//     activeInput.value = activeInput.value.slice(0, -1);
//   }
// }

// document.getElementById("Familiya").addEventListener("focus", function() {
//   activeInput = this;
// });

// document.getElementById("Name").addEventListener("focus", function() {
//   activeInput = this;
// });
