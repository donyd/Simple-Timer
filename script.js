function scriptCheck(){
  alert("JavaScript attached");
}

var seconds = 0;

function timeElapsed(){
  setInterval(function(){
    seconds++;
    document.getElementById("timer").innerHTML = seconds;
  }, 500);
}
