const hours = document.querySelector("#hours"),
    minutes = document.querySelector("#minutes"),
    second = document.querySelector("#seconds");

function clock() {
    hours.innerHTML = new Date().getHours();
    minutes.innerHTML = new Date().getMinutes();
    second.innerHTML = new Date().getSeconds();
}

setInterval(clock, 500);