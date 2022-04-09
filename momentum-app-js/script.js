const displayGreeting = document.getElementById("user");
const greetElement = document.createElement("h1");
const userElement = document.createElement("h1");
const displayClock = document.getElementById("time");
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const greetingType = ["Good Morning", "Good Afternoon", "Good Evening", "Get Some Sleep"]
const focusLabel = document.getElementById("focus-label");
const inputFocus = document.getElementById("input-focus");
const addFocus = document.getElementById("add-focus");
const clearFocus = document.getElementById("clear-focus");

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

function time() {
  displayClock.innerText = `${ hours < 10 ? `0${hours}` : hours}:${ minutes < 10 ? `0${minutes}` : minutes}`;
  setInterval(time, 60000);
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

greeting();
time();
saveFocus();
displayFocus();
resetFocus();