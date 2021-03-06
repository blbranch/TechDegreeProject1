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
    image: "img/csLewis.png"
  },
  {
    quote:
      "You have made us for yourself, O Lord, and our hearts are restless until they rest in you.",
    source: "St. Augustine",
    citation: "Confessions",
    tags: ["Ancient Church History"]
  },
  {
    quote:
      "The good man, though a slave, is free; the wicked, though he reigns, is a slave.",
    source: "St. Augustine",
    citation: "City of God",
    tags: ["Ancient Church History"]
  },
  {
    quote:
      "Faith is taking the first step even when you don't see the whole staircase.",
    source: "Dr. Martin Luther King, Jr.",
    image: "img/mlk.jpg",
    tags: ["Faith"]
  },
  {
    quote: "Humility is the beginning of true intelligence.",
    source: "John Calvin",
    image: "img/john-calvin-9235788-1-402.jpg",
    tags: ["Reformation", "Wisdom"]
  },
  {
    quote: `My conscience is captive to the Word of God. I cannot and I will not recant anything for to go against conscience is neither right nor safe. God help me. Amen.`,
    source: "Martin Luther",
    citation: "Luther's Trial at the Imperial Diet of Worms",
    year: 1521,
    image: "img/martinLuther.jpg",
    tags: ["Reformation"]
  },
  {
    quote:
      "An individual has not started living until he can rise above the narrow confines of his individualistic concerns to the broader concerns of all humanity.",
    source: "Dr. Martin Luther King, Jr.",
    image: "img/mlk.jpg",
    tags: ["Justice", "Community"]
  }
];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(quotes) {
  /*call random number function using length of quotes array.  Use bracket notation to access random quote from quotes array */
  let randomQuote = quotes[getRandomNumber(quotes.length)];
  return randomQuote;
}

/***
 * `printQuote` function
 ***/
function printQuote() {

  //if show another quote button is pressed - reset clock on automatic update interval
  clearInterval(interval);
  
  //assign quoteObject the return value of getRandomQuote function
  let quoteObject = getRandomQuote(quotes);
  //build quote string with HTML and template literals
  let quoteString = `<p class="quote"> ${quoteObject.quote} </p> <p class="source"> ${quoteObject.source}`;
  /*test if there is citation property and add it to quote string if it exists */
  if (quoteObject["citation"] !== undefined) {
    quoteString += `<span class="citation">${quoteObject.citation}</span>`;
  }
  /*test if there is a year property and add it to quote string if it exists */
  if (quoteObject["year"] !== undefined) {
    quoteString += `<span class="year"> ${quoteObject.year} </span>`;
  }

  //closes quote string and sets the quote box to display the quote and other data elements where applicable.

  /*if tags property exist then iterate and add tags to quoteString with a line break.  
   Test last item in array to avoid extra comma*/
  if (quoteObject["tags"] !== undefined) {
    quoteString += `<br> <span class="tags"> tags: `;
    for (let i = 0; i < quoteObject["tags"].length; i++) {
      let quoteTag = quoteObject["tags"][i];
      if (i < quoteObject["tags"].length - 1) {
        quoteString += `${quoteTag}, `;
      } else {
        quoteString += `${quoteTag}`;
      }
    }
    quoteString += "</span>";
  }
  quoteString += "</p>";
  document.getElementById("quote-box").innerHTML = quoteString;

  /*test if there is an image in quote object and either set display to none 
    or set the src of image to the location for image and set display to inital
  */
  let imageSrc = quoteObject.image;
  if (imageSrc == undefined) {
    document.getElementById("headshot").style.display = "none";
  } else {
    document.getElementById("headshot").src = imageSrc;
    document.getElementById("headshot").style.display = "initial";
  }
}

/***
 * `randomNumber` function
 ***/
function getRandomNumber(upperBound) {
  let randomNumber = Math.floor(Math.random() * upperBound);
  return randomNumber;
}

/***
 * `randomColor` function
 ***/
function randomColor() {
  //calls random number function and multiples by 255 possible color combos to render random background color
  //creates rgb value string with template literal and assigns background color value of string
  let rgbValue = `rgb(${getRandomNumber(255)}, ${getRandomNumber(
    255
  )}, ${getRandomNumber(255)})`;
  document.body.style.backgroundColor = rgbValue;
}

/***
 * `automaticUpdate` function
 ***/

/*use anonymous function within setInterval to call both random color and printQuote on a reoccuring 10 second interval */
const interval = setInterval(automaticUpdate, 10000);
function automaticUpdate() {
    randomColor();
    printQuote();  
}

//call both printQuote and automatic update function upon page load
printQuote();
automaticUpdate();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

//added anonymous function to call both printQuote and randomColor function
document.getElementById("load-quote").addEventListener(
  "click",
  function() {
    printQuote(), randomColor();
  },
  false
);
