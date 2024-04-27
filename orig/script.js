document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

IMask(
    document.getElementById('telephone'),
    {
      mask: '+{7}(000)000-00-00'
    }
)

// Если не примит на css
// // Получите контейнер парлакс элемент
// const parallax = document.querySelector(".parallax");

// // Добавьте эффект прокрутки парлакс
// window.addEventListener("scroll", () => {
//   const scrollPosition = window.pageYOffset;
//   parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
// });


// Форма
const INPUTS = document.querySelectorAll("input")

const patterns ={
    Name: /^[А-Я][А-Яа-я]{1,15}$/,
    email: /^[a-zA-Z0-9]{1,64}\@gmail(.com)|mail(.ru)/,
    telephone: /[+]7[\(]\d{3}[\)]\d{3}[\-]\d{2}[\-]\d{2}/,
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

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Спасибо, за обратную связь!');

    document.getElementById('feedbackForm').reset();
    
    window.location.reload();
});