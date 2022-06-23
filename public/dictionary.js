//getting all the variables
var word = document.getElementById("word");
var searchInput = document.getElementById("searchInput");
var searchButton = document.getElementById("searchButton");

var wordDefinitionTitle = document.getElementById("wordDefinitionTitle");
var wordSynonymTitle = document.getElementById("wordSynonymTitle");

var wordDefinitionList = document.getElementById("wordDefinitionList");
var wordSynonymList = document.getElementById("wordSynonymList");

function updateInputValue() {

  //removing all previous data
  clearLists();

  var inputValue = searchInput.value;

//changing the html elements to display definition and synonyms
word.innerHTML =  inputValue;
wordDefinitionTitle.innerHTML = "Definition";
wordSynonymTitle.innerHTML = "Synonyms";

//Collecting Data from the API for the Dictionary
var requestDictionary = new XMLHttpRequest();
requestDictionary.withCredentials = true;

requestDictionary.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
	}
});

//Finding and running the API
requestDictionary.open("GET", "https://wordsapiv1.p.rapidapi.com/words/" + inputValue + "/definitions");
requestDictionary.setRequestHeader("X-RapidAPI-Key", "2e4ba87828mshb405566e51db918p10f940jsncc9b1d992d28");
requestDictionary.setRequestHeader("X-RapidAPI-Host", "wordsapiv1.p.rapidapi.com");

requestDictionary.onload = function() {

  //turning object into string
  if (requestDictionary.status >=200 && requestDictionary.status <400) {

    let data = JSON.parse(this.response);
    
    let dataDefinitions = data.definitions;

    //getting each definition, to then add to a list
    for (let i = 0; i < dataDefinitions.length; i++) {
      
      //console.log(dataDefinitions[i].definition);

      let singleDefinition = document.createElement("li");
      singleDefinition.classList.add('singleDefinition');
      singleDefinition.innerHTML = dataDefinitions[i].definition;

      wordDefinitionList.appendChild(singleDefinition);
    }
  }
  
}

requestDictionary.send();



//Collecting Data from the API for the Synonymns
var requestSynonym = new XMLHttpRequest();
requestSynonym.withCredentials = true;

requestSynonym.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
	}
});

//Finding and running the API
requestSynonym.open("GET", "https://wordsapiv1.p.rapidapi.com/words/" + inputValue + "/synonyms");
requestSynonym.setRequestHeader("X-RapidAPI-Key", "2e4ba87828mshb405566e51db918p10f940jsncc9b1d992d28");
requestSynonym.setRequestHeader("X-RapidAPI-Host", "wordsapiv1.p.rapidapi.com");

requestSynonym.onload = function() {

  //turning object into string
  if (requestSynonym.status >=200 && requestSynonym.status <400) {

    let data2 = JSON.parse(this.response);
    
    let dataSynonyms = data2.synonyms;

    //getting each definition, to then add to a list
    for (let i = 0; i < dataSynonyms.length; i++) {

      let singleSynonym = document.createElement("li");
      singleSynonym.classList.add('singleSynonym');
      singleSynonym.innerHTML = dataSynonyms[i];

      wordSynonymList.appendChild(singleSynonym);
    }
  }
  
}

requestSynonym.send();

}

//reseting the definitions and synonymns when searching for a new word
function clearLists() {
  
  wordDefinitionList.innerHTML = "";
  wordSynonymList.innerHTML = "";

  }

//search button
searchButton.addEventListener('click', updateInputValue);