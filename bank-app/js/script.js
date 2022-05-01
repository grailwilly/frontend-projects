// navbar
const signUpBtn = document.querySelector(".sign-up");

// heading
const titleText = document.querySelector(".title");
const descriptionText = document.querySelector(".description");

// login form
const loginForm = document.getElementById("login");
const loginValue = document.getElementById("login-ID");
const passwordValue = document.getElementById("password");
const loginAccountBtn = document.getElementById("login-account");
const forgetPassword = document.querySelector(".forget-password");

// sign up form
const signupContainer = document.getElementById("signup");
const signUpForm = document.getElementById("signup-form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const birthDateInput = document.getElementById("birth-date");
const genderInput = document.getElementById("gender");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const usernameInput = document.getElementById("username");
const newPasswordInput = document.getElementById("create-password");
const createAccountBtn = document.getElementById("create-account");

// Profile object
const userArray = [];


signUpBtn.addEventListener("click", () => {
  loginForm.style.display = "none";
  signupContainer.style.display = "block";
  titleText.innerText = "Create Your Account";
  // storeNewAccount();
})

createAccountBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addUser(firstNameInput.value, lastNameInput.value, birthDateInput.value, genderInput.value, emailInput.value, phoneInput.value, usernameInput.value, newPasswordInput.value);
});

function addUser(fName, lName, birthDate, gender, email, phone, username, newPassword) {

  if(fName !== '' && lName !== '' && birthDate !== '' && gender !== '' && email !== '' && phone !== '' && username !== '' && newPassword !== '') {
    const userProfile = {
      accountNumber: Date.now(),
      firstName: fName,
      lastName: lName,
      birthDate: birthDate,
      gender: gender ,
      email: email,
      phone: phone,
      username: username,
      password: newPassword
    };
  
    userArray.push(userProfile);
    storeUsersToLocalStorage(userArray);
    console.log(userArray);
  
    firstNameInput.value = "";
    lastNameInput.value = "";
    birthDateInput.value = "";
    genderInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    usernameInput.value = "";
    newPasswordInput.value = "";

    alert("Created Account");
    loginForm.style.display = "block";
    signupContainer.style.display = "none";

  } else {
    alert("Please require fields");
  }
}

function storeUsersToLocalStorage() {
  localStorage.setItem('users', JSON.stringify(userArray));
}

function getUsersFromLocalStorage() {
  const getUser = localStorage.getItem('users');
}
