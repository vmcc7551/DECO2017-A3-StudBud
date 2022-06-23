//Creating the settings pop up box
let settings = document.querySelector(".settings");
let show = document.querySelector(".show");
let closeButton = document.querySelector(".closeButton");
let taskSubmitButton = document.getElementById("taskSubmitButton")


// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query

const tasklistUI = document.getElementById("tasklistUI");
const tasklistUi = document.getElementById("tasklistUi");
const tasklistuI = document.getElementById("tasklistuI");
const tasklistui = document.getElementById("tasklistui");

const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const completionTimeInput = document.getElementById("completionTimeInput");
const estimatedTimeInput = document.getElementById("estimatedTimeInput");
const urgencyImportanceInput = document.getElementById("urgencyImportanceInput");


// Event listener for Button click
button.addEventListener("click", function(event) {
  event.preventDefault(); 

//Getting all value inputs
  var task = taskInput.value;

  var due = dueDateInput.value;

  var compTime = completionTimeInput.value;

  var estTime = estimatedTimeInput.value;

  var urgencyImportance = urgencyImportanceInput.value;

  
  

  // Creating an add task function
  addTask(task, due, compTime, estTime, urgencyImportance);

})

// Empty array for each task
var taskList = [];

function addTask(taskDescription, dueDate, completionTime, estimatedTime, 
  urgencyImportanceRating) {
  const task = {
    taskDescription,
    dueDate,
    completionTime,
    estimatedTime,
    urgencyImportanceRating,
  };


  // Add the task to our array of tasks

    taskList.push(task);

  // Separate the DOM manipulation from the object creation logic
  renderTask(task);
}


// Function to display the item on the page
function renderTask(task) {

  let br = document.createElement("br");

    // Setup checkbox DOM elements
  var completeCheckbox = document.createElement("input");
  completeCheckbox.type = 'checkbox';
  completeCheckbox.classList.add('newCompleteCheckbox');

  var itemTaskDescription = document.createElement("li");
  itemTaskDescription.innerHTML = "<span></span> <label>" + task.taskDescription + "</label>";
  itemTaskDescription.classList.add('newElement', 'newName');

  var itemDueDate = document.createElement("li");
  itemDueDate.innerHTML = "<p> Due: " + task.dueDate + "</p>";
  itemDueDate.classList.add('newElement', 'newDueDate');

  var itemCompletionTime = document.createElement("li");
  itemCompletionTime.innerHTML = "<p>, at " + task.completionTime + "</p>";
  itemCompletionTime.classList.add('newElement', 'newCompletionTime');
  
 var itemEstimatedTime = document.createElement("li");
  itemEstimatedTime.innerHTML = "<p>Estimated Completion Time: " + task.estimatedTime + " mins</p>";
  itemEstimatedTime.classList.add('newElement', 'newEstimatedTime');


  
 // Setup delete button DOM elements
 var delButton = document.createElement("button");
 delButton.classList.add('newDelete');
 
 var delButtonText = document.createTextNode("✕");
 
 delButton.appendChild(delButtonText);



 // Putting the tasks under headings depending on the priority value
    
    if (urgencyImportanceInput.value == "UI") {

      tasklistUI.appendChild(completeCheckbox);
      tasklistUI.appendChild(itemTaskDescription);
      
      tasklistUI.appendChild(itemDueDate);
      tasklistUI.appendChild(itemCompletionTime);
      tasklistUI.appendChild(delButton); 
      tasklistUI.appendChild(itemEstimatedTime);

      tasklistUI.appendChild(br);
    }

    if (urgencyImportanceInput.value == "Ui") {

      tasklistUi.appendChild(completeCheckbox);
      tasklistUi.appendChild(itemTaskDescription);
      
      tasklistUi.appendChild(itemDueDate);
      tasklistUi.appendChild(itemCompletionTime);
      tasklistUi.appendChild(delButton); 
      tasklistUi.appendChild(itemEstimatedTime);

      tasklistUi.appendChild(br);
    }

    if (urgencyImportanceInput.value == "uI") {
      tasklistuI.appendChild(completeCheckbox);
      tasklistuI.appendChild(itemTaskDescription);
      
      tasklistuI.appendChild(itemDueDate);
      tasklistuI.appendChild(itemCompletionTime);
      tasklistuI.appendChild(delButton); 
      tasklistuI.appendChild(itemEstimatedTime);

      tasklistuI.appendChild(br);
    }

    if (urgencyImportanceInput.value == "ui") {

      tasklistui.appendChild(completeCheckbox);
      tasklistui.appendChild(itemTaskDescription);
      
      tasklistui.appendChild(itemDueDate);
      tasklistui.appendChild(itemCompletionTime);
      tasklistui.appendChild(delButton); 
      tasklistui.appendChild(itemEstimatedTime);

      tasklistui.appendChild(br);
    }
    


    //creating the delete task function
    delButton.addEventListener("click", removeTask);



  

     // Remove the task item from the page when button clicked
    function removeTask() {
      
      if (urgencyImportanceInput.value == "UI") {

        tasklistUI.removeChild(completeCheckbox);
        tasklistUI.removeChild(itemTaskDescription);
        
        tasklistUI.removeChild(itemDueDate);
        tasklistUI.removeChild(itemCompletionTime);
        tasklistUI.removeChild(delButton); 
        tasklistUI.removeChild(itemEstimatedTime);
  
        tasklistUI.removeChild(br);
      }
  
      if (urgencyImportanceInput.value == "Ui") {
  
        tasklistUi.removeChild(completeCheckbox);
        tasklistUi.removeChild(itemTaskDescription);
        
        tasklistUi.removeChild(itemDueDate);
        tasklistUi.removeChild(itemCompletionTime);
        tasklistUi.removeChild(delButton); 
        tasklistUi.removeChild(itemEstimatedTime);
  
        tasklistUi.removeChild(br);
      }
  
      if (urgencyImportanceInput.value == "uI") {
        tasklistuI.removeChild(completeCheckbox);
        tasklistuI.removeChild(itemTaskDescription);
        
        tasklistuI.removeChild(itemDueDate);
        tasklistuI.removeChild(itemCompletionTime);
        tasklistuI.removeChild(delButton); 
        tasklistuI.removeChild(itemEstimatedTime);
  
        tasklistuI.removeChild(br);
      }
  
      if (urgencyImportanceInput.value == "ui") {
  
        tasklistui.removeChild(completeCheckbox);
        tasklistui.removeChild(itemTaskDescription);
        
        tasklistui.removeChild(itemDueDate);
        tasklistui.removeChild(itemCompletionTime);
        tasklistui.removeChild(delButton); 
        tasklistui.removeChild(itemEstimatedTime);
  
        tasklistui.removeChild(br);
      }

      localStorage.removeItem("taskObject");

    }
    
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





//more buttons for pop up feature

show.addEventListener("click", toggleSettings);

closeButton.addEventListener("click", toggleSettings);

taskSubmitButton.addEventListener("click", toggleSettings);

window.addEventListener("click", settingsOnClick);



  // Clear the value of the input once the task has been added to the page
  form.reset();
