
IMask(
    document.getElementById('telephone'),
    {
      mask: '+{7}(000)000-00-00'
    }
  )

const INPUTS = document.querySelectorAll("input")

const patterns ={
    telephone: /^\+7?(\d{1,3})?\[-]d{11}$/,
    username: /^[a-zA-Z0-9]{1,12}$/,
    email: /^[a-zA-Z0-9]{1,64}\@gmail(.com)|mail(.ru)/,
    password: /^\w{8,20}$/,
    slug: /^[A-Z][A-Za-z]{1,15}$/
};

// применяем переменную INPUTS для каждого input из hmtl файла

INPUTS.forEach((input) => {
    input.addEventListener("keyup", (event) =>{
        // console.log(event.target.attributes.name.value);
        validate(event.target, patterns[event.target.attributes.name.value])
    })
})

function validate(field, regexp){
    if(regexp.test(field.value)){
        field.className = "valid";
    }else{
        field.className = "invalid";
    }
}