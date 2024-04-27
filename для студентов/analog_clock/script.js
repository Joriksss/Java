const hour = document.querySelector(".hour"),
    min = document.querySelector(".min"),
    sec = document.querySelector(".sec");

const deg = 6;

const setClock = () => {
    let time = new Date();
    let hh = time.getHours() * 30;
    let mm = time.getMinutes() * deg;
    let ss = time.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
}

setClock();

setInterval(setClock, 1000);