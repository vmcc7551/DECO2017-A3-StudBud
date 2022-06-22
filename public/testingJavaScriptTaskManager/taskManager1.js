//Creating the settings pop up box
let settings = document.querySelector(".settings");
let show = document.querySelector(".show");
let closeButton = document.querySelector(".closeButton");
let cancelButton = document.getElementById("cancelButton");

//let taskName = document.getElementById("taskName");

/*console.log("hello");

function updateTaskName() {
  
  var updatedTaskName = document.getElementById("taskName").value;

  //console.log(updatedTaskName);
}

function updateTaskDate() {
  
  var updatedTaskDate = document.getElementById("taskDate").value;
}

function updateTaskTime() {
  
  var updatedTaskTime = document.getElementById("taskTime").value;
}

function updateTaskPriority() {
  
  var updatedTaskPriority = document.getElementById("taskPriority").value;
}

const wholeTask = [];

wholeTask.push("updateTaskTime");*/
//console.log("wholeTask");

//console.log("Task Name: " + updateTaskName + "Task Date: " + updateTaskDate + "Task Time: " + updateTaskTime + "Task Priority " + updateTaskPriority);

function toggleSettings() {
  
    settings.classList.toggle("showSettings");
  
}

function settingsOnClick(event) {
  
    if (event.target === settings) {
        toggleSettings();
    }
}

show.addEventListener("click", toggleSettings);

closeButton.addEventListener("click", toggleSettings);

cancelButton.addEventListener("click", toggleSettings);

window.addEventListener("click", settingsOnClick);