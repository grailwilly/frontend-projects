const logOutBtn = document.getElementById("logout-btn");
const depositInput = document.getElementById("deposit-value");
const depositBtn = document.querySelector(".deposit-btn");
const withdrawInput = document.getElementById("withdraw-value");
const withdrawBtn = document.querySelector(".withdraw-btn");
const sendAmountInput = document.getElementById("send-amount");
const sendAccountNumberInput = document.getElementById("send-account-number");
const sendMoneyBtn = document.querySelector(".send-money-btn");


const users = JSON.parse(localStorage.getItem('users'));
// console.log(users);

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

function deposit(amount) {
  for(let i = 0; i < users.length; i++) {
    if(users[i].status === "Active") {
      users[i].balance = Number(users[i].balance) + amount;
      localStorage.setItem('users', JSON.stringify(users));
      console.log(users)
    }
  }
}

function withdraw(amount) {
  for(let i = 0; i < users.length; i++) {
    if(users[i].status === "Active") {
      users[i].balance = Number(users[i].balance) - amount;
      localStorage.setItem('users', JSON.stringify(users));
      console.log(users)
    }
  }
}

function sendMoney(amount, accountNumber) {
  for(let i = 0; i < users.length; i++) {
    if(users[i].status === "Active") {
      users[i].balance = Number(users[i].balance) - amount;
      localStorage.setItem('users', JSON.stringify(users));
      console.log(users)
    } 

    if(users[i].accountNumber === Number(accountNumber)) {
      users[i].balance = Number(users[i].balance) + amount;
      localStorage.setItem('users', JSON.stringify(users));
      console.log(users)
    }
      
  }
}