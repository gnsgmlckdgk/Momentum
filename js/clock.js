const clock = document.querySelector(".clock");

function printClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerText = `${hours<10 ? '0'+hours:hours} : ${minutes<10 ? '0'+minutes:minutes} : ${seconds<10 ? '0'+seconds:seconds}`;
}

function init() {
    setInterval(printClock, 1000);
}

init();