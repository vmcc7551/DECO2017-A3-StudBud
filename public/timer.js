//stating all variables

var seconds = 00;
var minutes = 00;
var hours = 00;

var appendSeconds = document.getElementById('seconds');
var appendMinutes = document.getElementById('minutes');
var appendHours = document.getElementById('hours');

var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');

var timeFinished;

var interval; 


function startStopwatch() {

  //calculating the increasing time and updating the website to show this
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
    //Start button click
    buttonStart.onclick = function(){
      //re-initialising the interval
        if(interval) {
            clearInterval(interval);}

        interval = setInterval(startStopwatch, 1000); 
    }


   //Stop button click
    buttonStop.onclick = function(){
        clearInterval(interval);
    }

    //Reset button click
    buttonReset.onclick = function (){
        clearInterval(interval)
        seconds = "00";  
        minutes = "00";
        hours = "00";
        
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendHours.innerHTML = hours;
    }
