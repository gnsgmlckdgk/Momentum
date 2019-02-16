const nameForm = document.querySelector(".nameForm");
const name = document.querySelector(".name");
const inputName = nameForm.querySelector(".inputName");

const USER_NAME = "userName";

function handleNameModi(event) {
    showInputName();
}

function setStorageUserName(value) {
    localStorage.setItem(USER_NAME, value);
}

function handleUserNameSubmit(event) {
    event.preventDefault();
    const value = inputName.value;
    setStorageUserName(value);
    if(value !== null && value !== "") {
        showName();
    }
}

function showName() {
    nameForm.classList.remove(SHOWING);
    name.classList.add(SHOWING);

    name.innerText = getStorageUserName();

    name.addEventListener("click", handleNameModi);
}

function showInputName() {
    name.classList.remove(SHOWING);
    nameForm.classList.add(SHOWING);

    inputName,value = name.value;
    inputName.focus();

    nameForm.addEventListener("submit", handleUserNameSubmit);
}

function getStorageUserName() {
    const userName = localStorage.getItem(USER_NAME);
    if(userName === null || userName === "") return null;
    else return `Hello, ${userName}.`;
}

function init() {
    if(getStorageUserName() === null) {
        showInputName();
    }else {
        showName();
    }
}

init();