//Stopwatch Code
var workingTime = document.getElementById("workingTime").value;
var shortBreakTime = document.getElementById("shortBreakTime").value;
var longBreakTime = document.getElementById("longBreakTime").value;
var repeating = document.getElementById("repeating").value;
var seconds = 00;
var minutes = 10;
var hours = 00;
var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");
var appendHours = document.getElementById("hours");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var buttonStartPomo = document.getElementById("button-start-pomo");
var setPomoTime = document.getElementById("set-01:02:03");
var timeFinished;
var interval;
//Start button click
function startStopwatch() {
    seconds++;
    if (seconds <= 9) appendSeconds.innerHTML = "0" + seconds;
    if (seconds > 9) appendSeconds.innerHTML = seconds;
    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "00";
    }
    if (minutes > 9) appendMinutes.innerHTML = minutes;
    if (minutes > 59) {
        hours++;
        appendHours.innerHTML = "0" + hours;
        minutes = 0;
        appendMinutes.innerHTML = "00";
    }
}
buttonStart.onclick = function() {
    if (interval) clearInterval(interval);
    interval = setInterval(startStopwatch, 10);
};
buttonStop.onclick = function() {
    clearInterval(interval);
};
buttonReset.onclick = function() {
    clearInterval(interval);
    seconds = "00";
    minutes = "00";
    hours = "00";
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
};
//Pomodoro Code
var startPauseText = document.getElementById("startPauseText");
var countdown = document.getElementById("countdown");
var title = document.getElementById("title");
var sessionLength = document.getElementById("sessionLength");
var breakLength = document.getElementById("breakLength");
var timerType; //possible values = session, break (default is session)
var id;
var initialSessionTime;
var initialBreakTime;
//initial display value of 25 minutes, type = session
window.onload = function() {
    countdown.textContent = "25:00";
    sessionLength.textContent = "25";
    initialSessionTime = countdown.textContent;
    breakLength.textContent = "10";
    initialBreakTime = "10:00";
    startPauseText.innerHTML = "Start";
    timerType = "session";
    loadType();
};
function fullReset() {
    timerType = "session";
    loadType();
    resetTimer();
}
function resetTimer() {
    pauseTimer();
    if (timerType === "session") countdown.textContent = initialSessionTime;
    if (timerType === "break") countdown.textContent = initialBreakTime;
}
function loadType() {
    var main = document.getElementById("main");
    if (timerType === "session") {
        main.className = "session-mode";
        title.textContent = "Session";
    }
    if (timerType === "break") {
        main.className += " break-mode";
        title.innerHTML = "Break";
    }
}
function startTimer(duration) {
    startPauseText.innerHTML = "Pause";
    countdown.innerHTML = convertToString(duration);
    duration = duration - 1;
    id = setTimeout(function() {
        startTimer(duration);
    }, 10);
    if (timerType === "session" && countdown.textContent === "00:00") setTimeout(function() {
        pauseTimer();
        timerType = "break";
        loadType();
        countdown.textContent = initialBreakTime;
        var breaktime = convertToTime(countdown.textContent);
        startTimer(breaktime);
    }, 10);
    if (timerType === "break" && countdown.textContent === "00:00") fullReset();
}
function pauseTimer() {
    startPauseText.textContent = "Start";
    clearTimeout(id);
}
//~~~~~~BUTTON EVENT LISTENERS~~~~~~~
var startPauseButton = document.getElementById("startPause");
startPauseButton.addEventListener("click", function() {
    handleStartPause();
});
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {
    if (timerType === "break") {
        countdown.innerHTML = initialSessionTime;
        timerType = "session";
    }
    resetTimer();
    loadType();
});
//multiple return statements less than ideal, but unsure how to handle this otherwise
function handleStartPause() {
    var duration = convertToTime(countdown.innerHTML);
    if (startPauseText.textContent === "Start") {
        startTimer(duration);
        return;
    }
    if (startPauseText.textContent === "Pause") {
        pauseTimer();
        return;
    }
}
//~~~~~~ADJUSTOR EVENT LISTENERS~~~~~~
var sessionPlus = document.getElementById("sessionPlus");
sessionPlus.addEventListener("click", function() {
    incrementTime(initialSessionTime, "session", sessionLength);
});
var sessionMinus = document.getElementById("sessionMinus");
sessionMinus.addEventListener("click", function() {
    if (convertToTime(initialSessionTime) >= 61) decrementTime(initialSessionTime, "session", sessionLength);
    else return;
});
var breakPlus = document.getElementById("breakPlus");
breakPlus.addEventListener("click", function() {
    incrementTime(initialBreakTime, "break", breakLength);
});
var breakMinus = document.getElementById("breakMinus");
breakMinus.addEventListener("click", function() {
    if (convertToTime(initialBreakTime) >= 61) decrementTime(initialBreakTime, "break", breakLength);
    else return;
});
//~~~~~~~~ HELPER FUNCTIONS ~~~~~~~~~
//increment and decrement functions:
//parameters: 1) initialVal -- (initialBreakTime or initialSessionTime)
//            2) typeOfTimer -- current type of timer as a string ("break" or "session")
//            3) nodeToUpdate -- which time length node to update with new time value (breakLength or sessionLength)
function decrementTime(initialVal, typeOfTimer, nodeToUpdate) {
    resetTimer();
    var currentValue = convertToTime(initialVal);
    currentValue -= 60;
    initialVal = convertToString(currentValue);
    if (timerType === typeOfTimer) countdown.innerHTML = initialVal;
    if (initialVal.charAt(0) !== "0") nodeToUpdate.textContent = initialVal.substring(0, 2);
    else nodeToUpdate.textContent = initialVal.substring(1, 2);
    if (typeOfTimer === "break") initialBreakTime = initialVal;
    else initialSessionTime = initialVal;
}
function incrementTime(initialVal, typeOfTimer, nodeToUpdate) {
    resetTimer();
    var currentValue = convertToTime(initialVal);
    currentValue += 60;
    initialVal = convertToString(currentValue);
    if (timerType === typeOfTimer) countdown.innerHTML = initialVal;
    if (initialVal.charAt(0) !== "0") nodeToUpdate.textContent = initialVal.substring(0, 2);
    else nodeToUpdate.textContent = initialVal.substring(1, 2);
    if (typeOfTimer === "break") initialBreakTime = initialVal;
    else initialSessionTime = initialVal;
}
//input string is of the format xx : yy, returns duration in seconds
function convertToTime(str) {
    var minutes1 = str.substring(0, 2);
    var seconds1 = str.substring(3, 5);
    var min = parseInt(minutes1);
    var sec = parseInt(seconds1);
    var duration = min * 60 + sec;
    return duration;
}
//input number of seconds and convert that to a string formatted mm:ss
function convertToString(seconds2) {
    var min, sec;
    min = Math.floor(seconds2 / 60);
    sec = seconds2 % 60;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec; //if seconds < 10, add a 0 before (i.e. display 2:01 rather than 2:1);
    return min + ":" + sec;
}

//# sourceMappingURL=timer.f565f920.js.map
