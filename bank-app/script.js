// navbar
const signUpBtn = document.querySelector(".sign-up");

// heading
const titleText = document.querySelector(".title");
const descriptionText = document.querySelector(".description");

// login form
const loginForm = document.getElementById("login-form");
const loginValue = document.getElementById("login-ID");
const passwordValue = document.getElementById("password");
const loginAccountBtn = document.getElementById("login-account");
const forgetPassword = document.querySelector(".forget-password");

// sign up form
const signUpForm = document.getElementById("sign-up-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const birthDate = document.getElementById("birth-date");
const genderSelect = document.getElementById("gender");
const femaleValue = document.getElementById("female");
const maleValue = document.getElementById("male");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const username = document.getElementById("username");
const newPassword = document.getElementById("create-password");
const createAccountBtn = document.getElementById("create-account");


signUpBtn.addEventListener("click", () => {
  loginForm.style.display = "none";
  signUpForm.style.display = "block";
  titleText.innerText = "Create Your Account";
})