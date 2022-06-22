var word = document.getElementById("word");
var wordDefinitionList = document.getElementById("wordDefinitionList");

//Collecting Data from the API for the Dictionary
var requestDictionary = new XMLHttpRequest();
requestDictionary.withCredentials = true;

requestDictionary.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
	}
});

//Finding and running the API
requestDictionary.open("GET", "https://wordsapiv1.p.rapidapi.com/words/angry/definitions");
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
      singleDefinition.innerHTML = dataDefinitions[i].definition;

      wordDefinitionList.appendChild(singleDefinition);
    }
  }
  
}

requestDictionary.send();


var wordSynonymList = document.getElementById("wordSynonymList");
//Collecting Data from the API for the Synonymns
var requestSynonym = new XMLHttpRequest();
requestSynonym.withCredentials = true;

requestSynonym.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
	}
});

//Finding and running the API
requestSynonym.open("GET", "https://wordsapiv1.p.rapidapi.com/words/angry/synonyms");
requestSynonym.setRequestHeader("X-RapidAPI-Key", "2e4ba87828mshb405566e51db918p10f940jsncc9b1d992d28");
requestSynonym.setRequestHeader("X-RapidAPI-Host", "wordsapiv1.p.rapidapi.com");

requestSynonym.onload = function() {

  //turning object into string
  if (requestSynonym.status >=200 && requestSynonym.status <400) {

    let data2 = JSON.parse(this.response);
    console.log(data2.synonyms);
    
    let dataSynonyms = data2.synonyms;

    //getting each definition, to then add to a list
    for (let i = 0; i < dataSynonyms.length; i++) {
      
      console.log(dataSynonyms[i]);

      let singleSynonym = document.createElement("li");
      singleSynonym.innerHTML = dataSynonyms[i];

      wordSynonymList.appendChild(singleSynonym);
    }
  }
  
}

requestSynonym.send();