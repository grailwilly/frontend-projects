const displayGreeting = document.getElementById("user");
const greetElement = document.createElement("h1");
const userElement = document.createElement("h1");
const displayClock = document.getElementById("time");
const displayDate = document.getElementById("date");
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const greetingType = ["Good Morning", "Good Afternoon", "Good Evening", "Get Some Sleep"]
const focusLabel = document.getElementById("focus-label");
const inputFocus = document.getElementById("input-focus");
const addFocus = document.getElementById("add-focus");
const clearFocus = document.getElementById("clear-focus");
const quoteText = document.getElementById("quote-text");
const authorName = document.getElementById("author");
const addQuote = document.querySelector(".add-quotes");
const modalForm = document.getElementById("modal-quote-input");
const newQuote = document.querySelector(".new-quote");
const newAuthor = document.querySelector(".new-author");
const submitQuote = document.getElementById("submit-quote");
const cancelQuote = document.getElementById("cancel-quote");

function greeting() {
  let urlString = window.location.search;
  let url = new URLSearchParams(urlString);
  let getFirstName = url.get('firstName');
  
  let greet = "";

  if (hours < 12) greet = greetingType[0];
  else if (hours < 18) greet = greetingType[1];
  else if (hours > 24) greet = greetingType[3];
  else greet = greetingType[2];

  greetElement.innerText = greet + "!";
  userElement.innerText = getFirstName;

  displayGreeting.append(greetElement, userElement)

}

function timeAndDate() {
  displayClock.innerText = `${ hours < 10 ? `0${hours}` : hours}:${ minutes < 10 ? `0${minutes}` : minutes}`;
  setInterval(time, 60000);

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  displayDate.innerText = days[date.getDay()] + " - " + months[date.getMonth()] + " " + date.getUTCDate() + ", " + date.getFullYear();
}

function saveFocus() {
    addFocus.addEventListener("click", () => {
    localStorage.setItem('focus', `${inputFocus.value}`);
  });
}

function displayFocus() {
  if(inputFocus.value !== null) {
    let focus = localStorage.getItem("focus");
    inputFocus.value = focus;
  }
}

function resetFocus() {
  clearFocus.addEventListener("click", () => {
    localStorage.clear();
  })
}

const quoteArray = [
  {
    quote: "&#8220; It is fine to celebrate success but it is more important to heed the lessons of failure. &#8221;",
    author: "&#x5BE Bill Gates, Co-founder of Microsoft"
  },
  {
    quote: "&#8220; You cannot have everything you want, but you can have the things that really matter to you. &#8221;",
    author: "&#x5BE Marissa Mayer, President and CEO of Yahoo!"
  },
  {
    quote: "&#8220; The biggest risk is not taking any risk… In a world that is changing really quickly, the only strategy that is guaranteed to fail, is not taking risks. &#8221;",
    author: "&#x5BE Mark Zuckerberg, Co-founder of Facebook"
  },
  {
    quote: "&#8220; If you're offered a seat on a rocket ship, don't ask what seat. &#8221;",
    author: "&#x5BE Sheryl Sandberg, CEO of Lean In."
  },
  {
    quote: "&#8220; If you don't innovate fast, disrupt your industry, disrupt yourself, you'll be left behind. &#8221;",
    author: "&#x5BE John Chambers, CEO of Cisco"
  },
  {
    quote: "&#8220; Customers should be number one, Employees number two, and then only your Shareholders come at number three. &#8221;",
    author: "&#x5BE Jack Ma,  Founder, Alibaba"
  },
  {
    quote: "&#8220; If you're competitor-focused, you have to wait until there is a competitor doing something. Being customer-focused allows you to be more pioneering. &#8221;",
    author: "&#x5BE Jeff Bezos, Founder of Amazon"
  },
  {
    quote: "&#8220; Taking care of your employees is extremely important and very, very visible. &#8221;",
    author: "&#x5BE Larry Ellison, Founder of Oracle"
  },
  {
    quote: "&#8220; The best way to predict the future is to invent it. &#8221;",
    author: "&#x5BE Alan Kay, computer scientist"
  },
  {
    quote: "&#8220; Growth and comfort do not coexist. &#8221;",
    author: "&#x5BE Ginni Rometty, CEO of IBM"
  },
  {
    quote: "&#8220; Keep going forward because success will come &#8221;",
    author: "&#x5BE Cassandra Sanford, CEO Kelly Mitchell Group"
  }
]

function randomQuotes() {
  let randomIndex = Math.floor(Math.random()*(quoteArray.length));

  quoteText.innerHTML = quoteArray[randomIndex].quote;
  authorName.innerHTML = quoteArray[randomIndex].author;
}

function modalQuote() {

  addQuote.addEventListener("click", () => {
    modalForm.style.display = "block";
    console.log("'clicked add quote");
  });

}

function saveQoute() {
  submitQuote.addEventListener("click", () => {
    localStorage.setItem('new-quote', `${newQuote.value}`);
    localStorage.setItem('new-author', `${newAuthor.value}`);
  });
}

function displayQuote() {
  if(newQuote.value !== null && newAuthor.value !== null) {
    let quoteValue = localStorage.getItem("new-quote");
    let authorValue = localStorage.getItem("new-author");
    
    quoteText.innerHTML = "&#8220; " + quoteValue + " &#8221;";
    authorName.innerHTML = "&#x5BE " + authorValue;

    let obj = {};

    obj["quote"] = quoteText.innerHTML;
    obj["author"] = authorName.innerHTML;

    quoteArray.push(obj);
    console.log(quoteArray);
  }
}

greeting();

timeAndDate();

saveFocus();
displayFocus();
resetFocus();

randomQuotes();
modalQuote();
saveQoute();
displayQuote();