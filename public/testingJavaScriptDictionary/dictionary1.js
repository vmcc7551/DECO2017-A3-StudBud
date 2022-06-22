//const content = document.getElementById("information")

/*var request = new XMLHttpRequest();

request.open("GET", "https://dictionaryapi.com/api/v3/references/collegiate/json/word?key=219d39cd-322c-470f-b482-a7c9cb021cee");

    request.onload = function(){
      if (request.status >= 200 && request.status < 400) {

        let def = JSON.parse(this.response);
        //console.log(word);

        def.forEach(function(definition) {
          renderDefinition(definition);
          //console.log(definition);

          function renderDefinition(definition) {
          //console.log(definition.shortdef[0]);
          }
        });
      }
    }*/

//Get elements from document    
var word = document.getElementById("word");

var wordDefinitionList = document.getElementById("wordDefinitionList");
//var userWordSearch = document.getElementById("textInput").value;


//Collecting Data from the API
var request = new XMLHttpRequest();
request.withCredentials = true;

request.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		//console.log(this.responseText);
	}
});

request.open("GET", "https://wordsapiv1.p.rapidapi.com/words/angry/definitions");
request.setRequestHeader("X-RapidAPI-Key", "2e4ba87828mshb405566e51db918p10f940jsncc9b1d992d28");
request.setRequestHeader("X-RapidAPI-Host", "wordsapiv1.p.rapidapi.com");

request.onload = function() {

  if (request.status >=200 && request.status <400) {
    let data = JSON.parse(this.response);
    
    let dataDefinitions = data.definitions;

    //console.log(dataDefinitions[1]);
    //wordDefinitionList.innerHTML = Object.values(data.definitions);
    //data.forEach(function(def));

    for (let i = 0; i < dataDefinitions.length; i++) {
      
      console.log(dataDefinitions[i].definition);

      let singleDefinition = document.createElement("li");

      singleDefinition.innerHTML = dataDefinitions[i].definition;

      //let singleDefinition = document.createElement("p");
      //singleDefinition.innerHTML = dataDefinitions[i].definition;
      //wordDefinitionList.innerHTML = (JSON.stringify(dataDefinitions[i]));
      //dataDefinitionsString[i] = ;
      //console.log(dataDefinitionsString);

      //wordDefinitionListString = JSON.stringify(dataDefinitions);

      //wordDefinitionList.innerHTML = wordDefinitionListString;
      //wordDefinitionList.innerHTML = wordDefinitionListString.value.replace(/[\])}[{(]/g, '');

      wordDefinitionList.appendChild(singleDefinition);
//
    }


    
    //data.forEach(function(def) {
      //renderDefinition();

      //wordDefinitionList.innerHTML = data.definitions.definitions;
    //})
  }

  else { 
    console.log("API ERROR");
  }
  
}



request.send();

//function renderDefinition(def) {
  //console.log(def.definition);

  
//}