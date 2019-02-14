const nameForm = document.querySelector(".nameForm");
const name = document.querySelector(".name");
const inputName = nameForm.querySelector(".inputName");

const USER_NAME = "userName";
const SHOWING = "showing";

function setStorageUserName(value) {
    localStorage.setItem(USER_NAME, value);
}

function handleUserNameSubmit(event) {
    event.preventDefault();
    const value = inputName.value;
    setStorageUserName(value);
    showName();
}

function showName() {
    nameForm.classList.remove(SHOWING);
    name.classList.add(SHOWING);

    name.innerText = getStorageUserName();
}

function showInputName() {
    name.classList.remove(SHOWING);
    nameForm.classList.add(SHOWING);

    nameForm.addEventListener("submit", handleUserNameSubmit);
}

function getStorageUserName() {
    const userName = localStorage.getItem(USER_NAME);
    return userName;
}

function init() {
    if(getStorageUserName() === null) {
        showInputName();
    }else {
        showName();
    }
}

init();