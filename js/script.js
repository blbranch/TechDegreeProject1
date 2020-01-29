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
const quotes = [
  {
    quote:
      "God cannot give us a happiness and peace apart from Himself, because it is not there. There is no such thing.",
    source: "C.S. Lewis",
    year: 1952,
    citation: "Mere Christianity",
    image: "img/csLewis.jpg"
  },
  {
    quote:
      "You have made us for yourself, O Lord, and our hearts are restless until they rest in you.",
    source: "St. Augustine",
    citation: "Confessions"
  },
  {
    quote:
      "The good man, though a slave, is free; the wicked, though he reigns, is a slave.",
    source: "St. Augustine",
    citation: "City of God"
  },
  {
    quote:
      "Faith is taking the first step even when you don't see the whole staircase.",
    source: "Dr. Martin Luther King, Jr.",
    image: "img/mlk.jpg"
  },
  {
    quote: "Humility is the beginning of true intelligence.",
    source: "John Calvin",
    image: "img/john-calvin-9235788-1-402.jpg"
  }
];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(quotes) {
  /*use random number and multiply by length of quotes array.  Then use bracket notation to access random quote from quotes array */
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  //assign quoteObject the return value of getRandomQuote function
  let quoteObject = getRandomQuote(quotes);
  //build quote string with HTML and template literals
  let quoteString = `<p class="quote"> ${quoteObject.quote} </p> <p class="source"> ${quoteObject.source}`;
  let imageSrc = quoteObject.image;

  /*test if there is citation property and add it to quote string if it exists */

  if (quoteObject["citation"] !== undefined) {
    quoteString += `<span class="citation"> ${quoteObject.citation} </span>`;
  }

  /*test if there is a year property and add it to quote string if it exists */
  if (quoteObject["year"] !== undefined) {
    quoteString += `<span class="year"> ${quoteObject.year} </span>`;
  } 

  //closes quote string and sets the quote box to display the quote and other data elements where applicable.
  quoteString += "</p>";
  document.getElementById("quote-box").innerHTML = quoteString;


  /*test if there is an image in quote object and either set display to none 
    or set the src of image to the location for image and set display to inital
  */
  if (imageSrc == undefined) {
    document.getElementById("headshot").style.display = "none";
    } else {
    document.getElementById("headshot").src = imageSrc;
    document.getElementById("headshot").style.display = "initial";

   }
 }

function randomColor() {
  //uses random number and multiples by 255 possible color combos to render random background color
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  //creates rgb value string and assigns background color value of string

  let rgbValue = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = rgbValue;
}

/*use anonymous function within setInterval to call both random color and printQuote on a reoccuring 10 second interval */
function automaticUpdate() {
  setInterval(function() {
    randomColor();
    printQuote();
  }, 10000);
}

printQuote();
automaticUpdate();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

 //added anonymous function to call both printQuote and randomColor function
document
  .getElementById("load-quote")
  .addEventListener("click", function () {printQuote(), randomColor()}, false);

