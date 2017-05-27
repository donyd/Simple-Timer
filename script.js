function scriptCheck(){
  alert("JavaScript attached");
}

var seconds = 0;
var startTimer;
var on = false;

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


      
  function stopStart(){
    if(on == true){
        clearInterval(startTimer);
        on = false;
        console.log(startTimer);
     } else if (on == false){
       startTimer = setInterval(function(){
      seconds++;
      document.getElementById("timer").innerHTML = seconds;}, 500);
       on = true;
        console.log(startTimer);
      }

     }

    
        
  
    
  
