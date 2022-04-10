const inputName = document.getElementById("first-name");
const submitName = document.getElementById("submit-name");
const formName = document.getElementById("input-name");

submitName.addEventListener("click", (event) => {
  
  event.preventDefault()

  if(inputName.value !== "") {
    console.log("Entered Name")
    localStorage.setItem("first-name", `${inputName.value}`);
    formName.submit();
  } else {
    alert("Please enter your name!");
  }
});
