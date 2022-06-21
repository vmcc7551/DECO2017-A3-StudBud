//Stopwatch Code
var workingTime = document.getElementById("workingTime").value;
var shortBreakTime = document.getElementById("shortBreakTime").value;
var longBreakTime = document.getElementById("longBreakTime").value;
var repeating = document.getElementById("repeating").value;

var seconds = 00;
var minutes = workingTime;
var hours = 00;

var appendSeconds = document.getElementById('seconds');
var appendMinutes = document.getElementById('minutes');
var appendHours = document.getElementById('hours');

var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');

var buttonStartPomo = document.getElementById('button-start-pomo');
var setPomoTime = document.getElementById('set-01:02:03');

var timeFinished;

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
        if (shortBreakTime <= 9) {
          minutes = "0" + shortBreakTime;
        }

      if (shortBreakTime > 9) {
          minutes = shortBreakTime;
        }
      
        hours = "00";
        
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendHours.innerHTML = hours;
    }

//Pomodoro Timer Settings

//Looking at the different time variables and how they will interact with eachother
function startPomoTimer() {
    
  seconds--

if ((seconds == -1) && (minutes == 0) && (hours > 0)) {
  hours--
  minutes = 60;
  
  if (hours <= 9) {
    appendHours.innerHTML = "0" + hours;
  }
  if (hours > 9) {
      appendHours.innerHTML = hours;
    }
  
}
  
if ((seconds == -1) && (minutes > 0)){
  minutes--

  if (minutes <= 9) {
    appendMinutes.innerHTML = "0" + minutes;
  }

  if (minutes > 9) {
        appendMinutes.innerHTML = minutes;
    } 
  
  seconds = 59;
}
  
  
  if (seconds <= 9) {
        appendSeconds.innerHTML = "0" + seconds;
    }  
  
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    } 

  if ((hours == 0) && (minutes == 0) && (seconds == -1)) {
    clearInterval(interval);

    timeFinished = alert("Your Pomodoro Time Session is over!\nClick OK if you would like to continue your session, or Cancel to erase and reset it.");

        seconds = "00";  
        minutes = "00";
        hours = "00";
        
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendHours.innerHTML = hours;
  }

}

//
buttonStartPomo.onclick = function() {
        if(interval) {
            clearInterval(interval);}

        interval = setInterval(startPomoTimer, 10); 
    }

/*setPomoTime.onclick = function () {
        clearInterval(interval)
        
        seconds = "03";  
        minutes = "03";
        hours = "03";
        
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendHours.innerHTML = hours;
    }*/


//Pomodoro Process Code



setPomoTime.onclick = function () {
  clearInterval(interval)

  for (let i = 0; i < repeating.length; i++) {
  
    minutes = workingTime;

    startPomoTimer();

    if (confirm(timeFinished) == true) {
      
      minutes = shortBreakTime;

      startPomoTimer();

    }

    else if (confirm(timeFinished) == false) {
      break;
    }

    else {setTimeout, workingTime*10}

    startPomoTimer();

    if (confirm(timeFinished) == false) {
      break;
    }
  }
}

/*function pollDOM () {
  const el = document.querySelector('my-element');

  if (el.length) {
    // Do something with el
  } else {
    setTimeout(pollDOM, 300); // try again in 300 milliseconds
  }
}

pollDOM();*/