const displayGreeting = document.getElementById("user");

function greeting() {
  let urlString = window.location.search;
  console.log(urlString);

  let url = new URLSearchParams(urlString);
  console.log(url);

  let getFirstName = url.get('firstName');
  console.log(getFirstName);

  let greet = "Hi " + getFirstName;

  return greet;
}

displayGreeting.innerHTML = greeting();