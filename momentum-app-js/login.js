const body = document.querySelector("body");
const inputName = document.getElementById("first-name");
const submitName = document.getElementById("submit-name");
const formName = document.getElementById("input-name");
const errorMessage = document.createElement("div");

submitName.addEventListener("click", (event) => {
  
  event.preventDefault()
  
  if(inputName.value !== "") {
    console.log("Entered Name")
    localStorage.setItem("first-name", `${inputName.value}`);
    formName.submit();
  } else {
    // alert("Please enter your name!");
    const span = document.createElement("span");
    const p = document.createElement("strong");
    span.className = "closebtn";
    errorMessage.className = "alert";
    span.innerHTML = "&times;";
    p.innerHTML = "Please Enter Name!"

    errorMessage.append(span , p);

    body.append(errorMessage);

    span.addEventListener("click", () => {
      errorMessage.style.display = "none";
    });
    
  }
});
