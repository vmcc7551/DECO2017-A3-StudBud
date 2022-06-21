//Stopwatch Code
/*var workingTime = document.getElementById("workingTime").value;
var shortBreakTime = document.getElementById("shortBreakTime").value;
var longBreakTime = document.getElementById("longBreakTime").value;
var repeating = document.getElementById("repeating").value;*/

var seconds = 00;
var minutes = 00;
var hours = 00;

var appendSeconds = document.getElementById('seconds');
var appendMinutes = document.getElementById('minutes');
var appendHours = document.getElementById('hours');

var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');

/*var buttonStartPomo = document.getElementById('button-start-pomo');
var setPomoTime = document.getElementById('set-01:02:03');

var timeFinished;*/

var interval; 

//Start button click
function startStopwatch() {
    seconds++
    if (seconds <= 9) {
        appendSeconds.innerHTML = "0" + seconds;
    }  
  
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    } 
  
    if (seconds > 59) {
        minutes++
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;;
    }
  
    if (minutes > 9) {
        appendMinutes.innerHTML = minutes;
    }

  if (minutes > 59) {
    hours++
    appendHours.innerHTML = "0" + hours;
    minutes = 0;
    appendMinutes.innerHTML = "0" + 0;;
  }
}

    buttonStart.onclick = function(){
        if(interval) {
            clearInterval(interval);}

        interval = setInterval(startStopwatch, 1000); 
    }
   
    buttonStop.onclick = function(){
        clearInterval(interval);
    }

    buttonReset.onclick = function (){
        clearInterval(interval)
        seconds = "00";  
        minutes = "00";
        hours = "00";
        
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendHours.innerHTML = hours;
    }