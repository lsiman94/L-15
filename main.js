let url = 'http://api.openweathermap.org/data/2.5/weather?q=jerusalem,israel&units=metric&appid=1e8ffdb64b7d4d8dbdd4bf3a700bdeb0';;
function reqListener() {
    var obj = JSON.parse(this.responseText)
    document.getElementById("temp").innerHTML = obj.main.temp;
    document.getElementById("name").innerHTML = obj.name;
}


function upload() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", url);
    oReq.send();
}
setInterval(upload, 5*1000);

function getNewCity() {
    var city = document.getElementById("city");
    url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city.value + ",israel&units=metric&appid=1e8ffdb64b7d4d8dbdd4bf3a700bdeb0"
 
}
    var btn = document.getElementById("btn");
    btn.addEventListener("click", getNewCity)
