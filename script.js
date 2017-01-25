function scriptCheck(){
  alert("JavaScript attached");
}

var seconds = 0;

var timeElapsed = setInterval(function() {
  seconds++;
   document.getElementById("timer").innerHTML = seconds;
   //console.log(seconds);
},500);
