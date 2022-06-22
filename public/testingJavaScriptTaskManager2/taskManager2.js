// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
const tasklist = document.getElementById("tasklist");

const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const completionTimeInput = document.getElementById("completionTimeInput");
const estimatedTimeInput = document.getElementById("estimatedTimeInput");
const priorityInput = document.getElementById("priorityInput");

// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )
button.addEventListener("click", function(event) {
  event.preventDefault(); // Not as necessary for button, but needed for form submit

//Getting all value inputs
  let task = taskInput.value;

  let due = dueDateInput.value;

  let compTime = completionTimeInput.value;

  let estTime = estimatedTimeInput.value;

  let priority = priorityInput.value;

  

  // Call the addTask() function using
  addTask(task, due, compTime, estTime, priority);

  // Log out the newly populated taskList everytime the button has been pressed
  console.log(taskList);
})

// Create an empty array to store our tasks
var taskList = [];

function addTask(taskDescription, dueDate, completionTime, estimatedTime, priorityRating) {
  let task = {
    taskDescription,
    dueDate,
    completionTime,
    estimatedTime,
    priorityRating,
  };

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

  let itemDueDate = document.createElement("li");
  itemDueDate.innerHTML = "<p>" + task.dueDate + "</p>";

  let itemCompletionTime = document.createElement("li");
  itemCompletionTime.innerHTML = "<p>" + task.completionTime + "</p>";
  
  let itemEstimatedTime = document.createElement("li");
  itemEstimatedTime.innerHTML = "<p>" + task.estimatedTime + "</p>";

  let itemPriorityRating = document.createElement("li");
  itemPriorityRating.innerHTML = "<p>" + task.priorityRating + "</p>";

  tasklist.appendChild(itemTaskDescription);
  tasklist.appendChild(itemDueDate);
  tasklist.appendChild(itemCompletionTime);
  tasklist.appendChild(itemEstimatedTime);
  tasklist.appendChild(itemPriorityRating);



  
  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);

  // Adds a delete button for each task block
  tasklist.appendChild(delButton); 

  // Listen for when the 
  delButton.addEventListener("click", function(event){
    tasklist.remove(); // Remove the task item from the page when button clicked
    
    // Because we used 'let' to define the item, this will always delete the right element
  })
  
  // Clear the value of the input once the task has been added to the page
  form.reset();
}