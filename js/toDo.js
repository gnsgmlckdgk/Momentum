const toDoForm = document.querySelector(".toDoForm");
const inputToDo = toDoForm.querySelector(".inputToDo");
const toDoListUl = document.querySelector(".toDoList");

const TO_DO_LIST = "toDoList";

let toDoList = [];
let newId = 0;


function loadToDoList() {
    const loadedToDoList = localStorage.getItem(TO_DO_LIST);
    const parsedToDoList = JSON.parse(loadedToDoList);

    if(parsedToDoList !== null) {
        if(parsedToDoList.length !== 0) {
            parsedToDoList.forEach(function(toDo){
                printToDo(toDo.text);
            });
            saveStorageToDoList();
        }
    }
    
}

function saveStorageToDoList() {
    const toDoListToString = JSON.stringify(toDoList);
    localStorage.setItem(TO_DO_LIST, toDoListToString);
}

function handleDelteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    
    const filterToDoList = toDoList.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDoList = filterToDoList;

    toDoListUl.removeChild(li);

    saveStorageToDoList();
}

function printToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");

    span.innerText = `  ${text}`;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", handleDelteToDo);
    li.id = ++newId;

    li.appendChild(delBtn);
    li.appendChild(span);

    toDoListUl.appendChild(li);

    const toDoObj = {
        id : newId,
        text : text
    }

    toDoList.push(toDoObj);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const text = inputToDo.value;
    inputToDo.value = "";

    printToDo(text);
    saveStorageToDoList();
}

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleToDoSubmit);
}

init();