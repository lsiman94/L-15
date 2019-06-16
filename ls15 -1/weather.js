// const url = 'http://api.openweathermap.org/data/2.5/weather?q=jerusalem,israel&units=metric&appid=1e8ffdb64b7d4d8dbdd4bf3a700bdeb0';
const url = 'weather.json';
function reqListener () {
    var obj = JSON.parse(this.responseText)
    console.log(obj);
  }
  function upload(){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", url);
  oReq.send();
  }
  setInterval(upload,)
  // 1e8ffdb64b7d4d8dbdd4bf3a700bdeb0