const BACKIMG_NUM = 3;

const body = document.querySelector("body");

function getRandomNumber() {
    return Math.floor(Math.random() * BACKIMG_NUM) + 1;
}

function loadBackGroundImg() {
    const randomNumber = getRandomNumber();
    const image = new Image();
    image.src = `./resources/img/background/${randomNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function init() {
    loadBackGroundImg();
}

init();