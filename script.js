function scriptCheck(){
  alert("JavaScript attached");
}

var seconds = 0;

function startStop(obj){
  if (obj.innerHTML == "Start"){
      var startTimer = setInterval(function(){
            seconds++;
            document.getElementById("timer").innerHTML = seconds;}, 500);
           } else if (obj.innerHTML == "Stop") {
             clearInterval(startTimer);
           }
  }

