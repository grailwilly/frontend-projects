const logOutBtn = document.getElementById("logout-btn");
const userName = document.querySelector(".name-display");
const accountNumber = document.querySelector(".user-accountNumber");
const balance = document.getElementById("balance");

const profilePicture = document.getElementById("profile-picture");

const depositInput = document.getElementById("deposit-value");
const depositBtn = document.querySelector(".deposit-btn");
const withdrawInput = document.getElementById("withdraw-value");
const withdrawBtn = document.querySelector(".withdraw-btn");
const sendAmountInput = document.getElementById("send-amount");
const sendAccountNumberInput = document.getElementById("send-account-number");
const sendMoneyBtn = document.querySelector(".send-money-btn");

const depositLi = document.getElementById("deposit-transaction");
const withdrawLi = document.getElementById("withdraw-transaction");
const sendMoneyLi = document.getElementById("sendMoney-transaction");

const modalContainer = document.getElementById("modals");
const depositModal = document.getElementById("deposit-modal");
const withdrawalModal = document.getElementById("withdrawal-modal");
const sendMoneyModal = document.getElementById("sendMoney-modal");
const depositHeading = document.querySelector(".deposit-heading");
const depositModalInput = document.querySelector(".deposit-input");
const closeModals = document.querySelectorAll(".close-modal");

const users = JSON.parse(localStorage.getItem('users'));

depositBtn.addEventListener("click", (event) => {
  event.preventDefault();
  deposit(Number(depositInput.value));
})

withdrawBtn.addEventListener("click", (event) => {
  event.preventDefault();
  withdraw(Number(withdrawInput.value));
})

sendMoneyBtn.addEventListener("click", (event) => {
  event.preventDefault();
  sendMoney(Number(sendAmountInput.value), Number(sendAccountNumberInput.value));
})

logOutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  for(let i = 0; i < users.length; i++) {
    delete users[i].status;
    localStorage.setItem('users', JSON.stringify(users));
    window.location = "../index.html";
    console.log(users)
  }
})

function displayUser() {
  for(let i = 0; i < users.length; i++) {
    if(users[i].status === "Active") {
      userName.innerText = `${users[i].firstName} ${users[i].lastName}`;
      accountNumber.innerText = users[i].accountNumber;
      balance.innerText = users[i].balance;

      if(users[i].gender === "female"){
        profilePicture.setAttribute("src", "../assets/female-icon.png");
      } else {
        profilePicture.setAttribute("src", "../assets/male-icon.png");
      }
    }
  }
}

function deposit(amount) {
  for(let i = 0; i < users.length; i++) {
    if(users[i].status === "Active") {
      users[i].balance = Number(users[i].balance) + amount;
      localStorage.setItem('users', JSON.stringify(users));
      depositInput.value = "";
      console.log(users)
    }
  }
}

function withdraw(amount) {
  for(let i = 0; i < users.length; i++) {
    if(users[i].status === "Active") {
      users[i].balance = Number(users[i].balance) - amount;
      localStorage.setItem('users', JSON.stringify(users));
      withdrawInput.value = "";
      console.log(users)
    }
  }
}

function sendMoney(amount, accountNumber) {
  for(let i = 0; i < users.length; i++) {
    if(users[i].status === "Active") {
      users[i].balance = Number(users[i].balance) - amount;
      localStorage.setItem('users', JSON.stringify(users));
      sendAmountInput.value = "";
      sendAccountNumberInput.value = "";
      console.log(users)
    } 

    if(users[i].accountNumber === Number(accountNumber)) {
      users[i].balance = Number(users[i].balance) + amount;
      localStorage.setItem('users', JSON.stringify(users));
      console.log(users)
    }
      
  }
}

displayUser();


/* modals */
depositLi.addEventListener("click", (event) => {
  event.preventDefault();
  modalContainer.style.display = "block";
  depositModal.style.display = "block";
  withdrawalModal.style.display = "none";
  sendMoneyModal.style.display = "none";
});

withdrawLi.addEventListener("click", (event) => {
  event.preventDefault();
  modalContainer.style.display = "block";
  withdrawalModal.style.display = "block";
  depositModal.style.display = "none";
  sendMoneyModal.style.display = "none";
})

sendMoneyLi.addEventListener("click", (event) => {
  event.preventDefault();
  modalContainer.style.display = "block";
  sendMoneyModal.style.display = "block";
  depositModal.style.display = "none";
  withdrawalModal.style.display = "none";
})


closeModals.forEach((closeModal) => {
  closeModal.addEventListener("click", () => {
    modalContainer.style.display = "none";
  })
})