//Creating the settings pop up box
let settings = document.querySelector(".settings");
let show = document.querySelector(".show");
let closeButton = document.querySelector(".closeButton");
let taskSubmitButton = document.getElementById("taskSubmitButton")


// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
const tasklist = document.getElementById("tasklist");

const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const completionTimeInput = document.getElementById("completionTimeInput");
const estimatedTimeInput = document.getElementById("estimatedTimeInput");
const urgencyInput = document.getElementById("urgencyInput");
const importanceInput = document.getElementById("importanceInput");

// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )
button.addEventListener("click", function(event) {
  event.preventDefault(); // Not as necessary for button, but needed for form submit

//Getting all value inputs
  let task = taskInput.value;

  let due = dueDateInput.value;

  let compTime = completionTimeInput.value;

  let estTime = estimatedTimeInput.value;

  let urgency = urgencyInput.value;

  let importance = importanceInput.value;

  

  // Call the addTask() function using
  addTask(task, due, compTime, estTime, urgency, importance);

  // Log out the newly populated taskList everytime the button has been pressed
  console.log(taskList);
})

// Create an empty array to store our tasks
var taskList = [];

function addTask([taskDescription], [dueDate], [completionTime], [estimatedTime], urgencyRating, importanceRating) {
  let task = {
    taskDescription,
    dueDate,
    completionTime,
    estimatedTime,
    urgencyRating,
    importanceRating
  };

/* FOR STYLING PURPOSES TEMPORARY
function addTask(taskDescription, dueDate, completionTime, estimatedTime, urgencyRating, importanceRating) {
  let task = {
    taskDescription,
    dueDate,
    completionTime,
    estimatedTime,
    urgencyRating,
    importanceRating
  };*/

  // Add the task to our array of tasks
  taskList.push(task);

  // Separate the DOM manipulation from the object creation logic
  renderTask(task);
}


// Function to display the item on the page
function renderTask(task) {
  
  let item = document.createElement("ul");
  let itemTaskDescription = document.createElement("li");
  itemTaskDescription.innerHTML = "<p>" + task.taskDescription + "</p>";
  itemTaskDescription.classList.add('newElement', 'newName');

  let itemDueDate = document.createElement("li");
  itemDueDate.innerHTML = "<p>" + task.dueDate + "</p>";
  itemDueDate.classList.add('newElement', 'newDueDate');

  let itemCompletionTime = document.createElement("li");
  itemCompletionTime.innerHTML = "<p>" + task.completionTime + "</p>";
  itemCompletionTime.classList.add('newElement', 'newCompletionTime');
  
  let itemEstimatedTime = document.createElement("li");
  itemEstimatedTime.innerHTML = "<p>" + task.estimatedTime + "</p>";
  itemEstimatedTime.classList.add('newElement', 'newEstimatedTime');

  let itemUrgencyRating = document.createElement("li");
  itemUrgencyRating.innerHTML = "<p>" + task.urgencyRating + "</p>";
  itemUrgencyRating.classList.add('UrgencyRating');

  let itemImportanceRating = document.createElement("li");
  itemImportanceRating.innerHTML = "<p>" + task.importanceRating + "</p>";
  itemImportanceRating.classList.add('ImportanceRating');

  tasklist.appendChild(itemTaskDescription);
  tasklist.appendChild(itemDueDate);
  tasklist.appendChild(itemCompletionTime);
  tasklist.appendChild(itemEstimatedTime);
  tasklist.appendChild(itemUrgencyRating);
  tasklist.appendChild(itemImportanceRating);

  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);


  // Adds a delete button for each task block
  tasklist.appendChild(delButton); 

}




  //Function to switch pop up
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

taskSubmitButton.addEventListener("click", toggleSettings);

window.addEventListener("click", settingsOnClick);

  // Listen for when the 
  delButton.addEventListener("click", function(event){
    tasklist.remove(); // Remove the task item from the page when button clicked
    
    // Because we used 'let' to define the item, this will always delete the right element
  })
  
  // Clear the value of the input once the task has been added to the page
  form.reset();
