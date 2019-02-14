
const temp = document.querySelector(".temp");

const CUR_POSITION = "curPosition";
const API_KEY = "f07a376a9451b237df7478e0887342b9";


function getWeatherInfo(lat, lon) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const nowTemprature = Math.round(json.main.temp);
        const place = json.name;
        temp.innerHTML = `${nowTemprature}℃ <br> ${place}`;
    });
}


function saveCurPosition(curPositionObj) {
    const stringPosition = JSON.stringify(curPositionObj);
    localStorage.setItem(CUR_POSITION, stringPosition);
}

function handleCurPositionSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const curPositionObj = {
        latitude,
        longitude
    }

    saveCurPosition(curPositionObj);
    getWeatherInfo(curPositionObj.latitude, curPositionObj.longitude);
}

function handleCurPositionError() {
    console.log("위치 정보를 가져올 수 없습니다.");
}

function getCurPosition() {
    navigator.geolocation.getCurrentPosition(handleCurPositionSuccess, handleCurPositionError);
}

function loadCurPosition() {
    const curLoc = localStorage.getItem(CUR_POSITION);
    if(curLoc === null) {
        getCurPosition();
        
    }else {
        const parseCurLoc = JSON.parse(curLoc);
        getWeatherInfo(parseCurLoc.latitude, parseCurLoc.longitude);
    }
}

function init() {
    loadCurPosition();
}

init();