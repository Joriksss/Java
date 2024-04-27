// let a = ""; //первое значение
// let b = ""; //второе значение
// let sign = ""; //знак операции
// let finish = false;

// const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']; // все числа, а точка это 10.0
// const action = ['-', '+', '*', '/']; // знаки операции

// const out = document.querySelector('.calc-screen p'); // ссыдка на калькулятор

// function clearAll() {
//     a = ''; // Первое число и результат
//     b = ''; // второе число
//     sign = ''; // знак
//     finish = false;
//     out.textContent = 0;
// }

// document.querySelector('.ac').onclick = clearAll;

// document.querySelector('.buttons').onclick = (event) => {      // ТУТ НАДО БЫЛО ВСЕ ВЗЯТЬ ПОД 
//     if(!event.target.classList.contains('btn')) return;
//     if(event.target.classList.contains('ac')) return;

//     out.textContent = '';

//     const key = event.target.textContent;
// }

// if(digit.includes(key)) 
// {
//     if (b === '' && sign === ''){
//         a += key;
//         out.textContent = a;
//     }
//     else if (a !== '' && b !== '' && finish)
//     {
//         b = key;
//         finish = false;
//         out.textContent = b;
//     }
//     else{
//         b += key;
//         out.textContent = b;
//     }
//     console.table(a, b, sign);
//     return;
// }

// if (action.includes(key)) {
//     sign = key;
//     out.textContent = sign;
//     console.table(a, b, sign);
//     return;
// }

// if (key === '=')
// {
//     if (b === '') b = a;
//     switch (sign) {
//         case "+":
//             a = (+a) + (+b);
//             break;
        
//         case "-":
//             a = a -b;
//         break;

//         case "*":
//             a = a * b;
//         break;

//         case "/":
//             if (b === '0'){
//                 out.textContent = "Ошибка";
//                 a = '';
//                 b = '';
//                 sign = '';
//                 return;
//             }
//             a = a / b;
//             break;
//         finish = true;
//         out.textContent = a;
//         console.table(a, b, sign);
//     }

// }

// Исправлено

let a = ""; // первое значение
let b = ""; // второе значение
let sign = ""; // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']; // все числа, а точка это 10.0
const action = ['-', '+', '*', '/']; // знаки операции

const out = document.querySelector('.calc-screen p'); // ссылка на калькулятор

function clearAll() {
    a = ''; // Первое число и результат
    b = ''; // второе число
    sign = ''; // знак
    finish = false;
    out.textContent = '0';
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }

    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;

            case "-":
                a = a - b;
                break;

            case "*":
                a = a * b;
                break;

            case "/":
                if (b === '0') {
                    out.textContent = "Ошибка";
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
};
