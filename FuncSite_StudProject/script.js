let video = document.getElementById("myVideo"); // 

let btn = document.getElementById("myBtn");

function videoPauseFunc() // Функция кнопки
{
    if (video.paused){
        video.play();
        btn.innerHTML = "Pause";
    } else{
        video.pause();
        btn.innerHTML = "Play";
    }
}

window.onscroll = function() {scrollFunc()}  // немедленный запуск функции

function scrollFunc() // Функция шкалы
{
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function btnFunc() // Функция появление кнопки на неопределенное время
{

    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "350px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0px";
}
