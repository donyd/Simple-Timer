function scriptCheck(){
  alert("JavaScript attached");
}

var seconds = 0;
var startTimer;

function startStop(obj){
    if (obj.innerHTML == "Start"){
         startTimer = setInterval(function(){
              seconds++;
              document.getElementById("timer").innerHTML = seconds;}, 500);
              console.log(startTimer);
    } else if (obj.innerHTML == "Stop") {
              console.log(startTimer);
              clearInterval(startTimer);
      }
  }
