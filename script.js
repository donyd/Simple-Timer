function scriptCheck(){
  alert("JavaScript attached");
}

// Global variables
var seconds = 0;
var startTimer;
var started = false;

/*
  Timer function:
  • Checks arbitrary 'state' of button 
  • setInterval function called
  • Callback function sets inner value of html element to be updated every 500 ms 
  • Button 'state' updated in each case
*/
function startStop(){
    if(started == true){
        clearInterval(startTimer);
        started = false;
        console.log("Stop/Start Timer: " + startTimer);
     } else if (started == false){
       startTimer = setInterval(function(){
         seconds++;
         document.getElementById("timer").innerHTML = seconds;}, 500);
         started = true;
         console.log("Stop/Start Timer: " + startTimer);
      }

     }

/* Reset function: 
    • Sets counter back to '0'
    • clearInterval to stop setInterval from timer start
    • reset seconds elapsed to '0'
*/ 
function reset(){
  document.getElementById("timer").innerHTML = "0";
  document.getElementById("output").innerHTML = "";
    clearInterval(startTimer);
    seconds = 0;

    console.log("Reset Timer: " + startTimer);
  
}

/*
  Record function:
  • Appends current seconds and linebreak to "output" element
*/
function recordTime(){
  document.getElementById("output").innerHTML += seconds + "<br>";
  console.log(seconds);
}

/*
  EvenListener for keyboard input &
  Call back function that will handle keyboard events
*/
document.addEventListener('keypress', handleKeyInput);

function handleKeyInput(event){
  if(event.key == "s"){
    startStop();
  } else if (event.key == "t"){
    recordTime();
  } else if (event.key == "r"){
    reset();
  }
}

    
        
  
    
  
