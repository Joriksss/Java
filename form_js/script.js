// Вариант 1
// function sendForm(event){
//     const keyBox = document.search.key;
//     const val = keyBox.value;

//     if(val.length <= 3){
//         alert("Недопустимая длина строки")
//         event.preventDefault();
//     }
//     else{
//         alert("Отправка разрешена")
//     }
// }

// const sendButton = document.search.send;
// sendButton.addEventListener("click", sendForm);

// Вариант 2
// function printForm(event){
//     const keyBox = document.search.key;
//     const val = keyBox.value;
//     //Получаем элемент printblock
//     const printblock = document.getElementById("printBlock")
//     //создаем новый параграф
//     const pElement = document.createElement("p")
//     //Устанавливаем у него текст
//     pElement.textContent = val;
//     // добавляем параграф в printBlock
//     printblock.appendChild(pElement)
// }

// const printButton = document.search.print;
// printButton.addEventListener("click", printForm);


// Пример 3
const passwordBox = document.loginForn.password;

// обработчик изменения текста
function oninput(e){

    const printBlock = document.getElementById("printBlock");
    printBlock.textContent = e.target.value;
}

passwordBox.addEventListener("input", oninput);
