//This code creates a new <p> element:
let futurePelement = document.createElement("p");
let results = document.createElement("p");

//To add text to the <p> element, you must create a text node first. This code creates a text node:
let contentOfFuturePelement = document.createTextNode("This is a paragraph creation by generation with Javascript.");
let contentOfResults = document.createTextNode("See Results in the console.");

//Then you must append the text node to the < p > element:
futurePelement.appendChild(contentOfFuturePelement);
results.appendChild(contentOfResults);

//Finally you must append the new element to an existing element.
//This code finds an existing element:
let appendTheNewElementToAnExistingElement = document.getElementById("body");
let appendResultsToAnExistingElement = document.getElementById("body");

//This code appends the new element to the existing element:
appendTheNewElementToAnExistingElement.appendChild(futurePelement);
appendResultsToAnExistingElement.appendChild(results);





function setDate() {
  const NOW = new Date();
  const SECONDS = NOW.getSeconds();
  console.log(SECONDS);
}

setInterval(setDate, 1000);