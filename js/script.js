/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/
const quotes = [{
  quote: "God cannot give us a happiness and peace apart from Himself, because it is not there. There is no such thing.",
  source: "C.S. Lewis",
  year: 1952,
  citation: "Mere Christianity"
}, {
  quote: "You have made us for yourself, O Lord, and our hearts are restless until they rest in you.",
  source: "St. Augustine",
  citation: "Confessions"
}, {
  quote: "The good man, though a slave, is free; the wicked, though he reigns, is a slave.",
  source: "St. Augustine",
  citation: "City of God"
}, {
  quote: "Faith is taking the first step even when you don't see the whole staircase.",
  source: "Dr. Martin Luther King, Jr."
}, {
  quote: "Humility is the beginning of true intelligence.",
  source: "John Calvin"
}];


/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(quotes) {
  /*use random number and multiply by length of quotes array.  Then use bracket notation to access random quote from quotes array */
  let randomQuote = Math.floor(Math.random() * quotes.length)
  return quotes[randomQuote];

}




/***
 * `printQuote` function
 ***/
function printQuote() {
  //assign quoteObject the return value of getRandomQuote function
  let quoteObject = getRandomQuote(quotes);
  //build quote string with HTML and string templates
  let quoteString = `<p class="quote"> ${quoteObject.quote} </p> 
  <p class="source"> ${quoteObject.source}`;

  /*test if there is citation property and add it to quote string if it exists */

  if (quoteObject['citation'] !== undefined) {
    quoteString += `<span class="citation"> ${quoteObject.citation} </span>`
  }

  /*test if there is a year property and add it to quote string if it exists */

  if (quoteObject['year'] !== undefined) {
    quoteString += `<span class="year"> ${quoteObject.year} </span>`
  }

  quoteString += '</p>';

  document.getElementById('quote-box').innerHTML = quoteString;


}

function randomColor() {
  //uses random number and multiples by 255 possible color combos
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255)

  //creates rgb value string and assigns background color value of string

  let rgbValue = `rgb( ${red}, ${green}, ${blue})`;

  document.body.style.backgroundColor = rgbValue;

}

printQuote()

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false)
//also call randomColor function on button click
document.getElementById('load-quote').addEventListener("click", randomColor, false)

//document.addEventListener("click", document.body.style.backgroundColor = randomColor(), false);