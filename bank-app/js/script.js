// navbar
const signUpBtn = document.querySelector(".sign-up");

// heading
const titleText = document.querySelector(".title");
const descriptionText = document.querySelector(".description");

// login form
const loginForm = document.getElementById("login");
const loginIdInput = document.getElementById("login-ID");
const loginPasswordInput = document.getElementById("password");
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

// admin
const userArray = [];

const admin = {
  Id: 110693,
  password: "adminaccess"
}


signUpBtn.addEventListener("click", () => {
  loginForm.style.display = "none";
  signupContainer.style.display = "block";
  titleText.innerText = "Create Your Account";
})

createAccountBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addUser(firstNameInput.value, lastNameInput.value, birthDateInput.value, genderInput.value, emailInput.value, phoneInput.value, usernameInput.value, newPasswordInput.value);
});

loginAccountBtn.addEventListener("click", getUsersFromLocalStorage);

function addUser(fName, lName, birthDate, gender, email, phone, username, newPassword) {
  let users = JSON.parse(localStorage.getItem('users'));
  // console.log(users);
  let found = Array.from(users).filter(user => {
    user.username === username
  })

  // console.log(found);

  if(found) return alert("Already Found");

  // if(fName !== '' && lName !== '' && birthDate !== '' && gender !== '' && email !== '' && phone !== '' && username !== '' && newPassword !== '') {
  //   const userProfile = {
  //     accountNumber: Math.floor(Math.random() * 10000000),
  //     firstName: fName,
  //     lastName: lName,
  //     birthDate: birthDate,
  //     gender: gender ,
  //     email: email,
  //     phone: phone,
  //     username: username,
  //     password: newPassword,
  //     balance: 0,
  //     expenses: [],
  //     status: "Inactive"
  //   };
  
  //   userArray.push(userProfile);
  //   storeUsersToLocalStorage(userArray);
  //   console.log(userArray);
  
  //   firstNameInput.value = "";
  //   lastNameInput.value = "";
  //   birthDateInput.value = "";
  //   genderInput.value = "";
  //   emailInput.value = "";
  //   phoneInput.value = "";
  //   usernameInput.value = "";
  //   newPasswordInput.value = "";

  //   alert("Created Account");
  //   loginForm.style.display = "block";
  //   signupContainer.style.display = "none";
  //   titleText.innerText = "Login To Your Account";

  // } else {
  //   alert("Please require fields");
  // }
}

function checkUser(users) {

  for(let i = 0; i < users.length; i++) {
    if(users[i].accountNumber === Number(loginIdInput.value) && users[i].password === loginPasswordInput.value) {
      console.log(`${users[i].accountNumber} : Correct login`);
      users[i].status = "Active";
      localStorage.setItem('users', JSON.stringify(users));
      loginIdInput.value = "";
      loginPasswordInput.value = "";
      window.location = "pages/accountDashboard.html";
    } else if(Number(loginIdInput.value) === admin.Id && loginPasswordInput.value === admin.password){
      window.location = "pages/adminDashboard.html";
      console.log("admin")
    } else {
      users[i].status = "Inactive";
    }
  }
}

function storeUsersToLocalStorage() {
  localStorage.setItem('users', JSON.stringify(userArray));
}

function getUsersFromLocalStorage() {
  const getUser = JSON.parse(localStorage.getItem('users'));
  console.log(getUser);
  checkUser(getUser);
}

