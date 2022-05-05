const logOutBtn = document.getElementById("logout-btn");
const userName = document.querySelector(".name");
const accountNumber = document.getElementById("account-number");
const balance = document.getElementById("balance")

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
const depositHeading = document.querySelector(".deposit-heading");
const depositModalInput = document.querySelector(".deposit-input");
const closeModal = document.querySelector(".close-modal");

const users = JSON.parse(localStorage.getItem('users'));
// console.log(users);

// depositBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   deposit(Number(depositInput.value));
// })

// withdrawBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   withdraw(Number(withdrawInput.value));
// })

// sendMoneyBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   sendMoney(Number(sendAmountInput.value), Number(sendAccountNumberInput.value));
// })

// logOutBtn.addEventListener("click", () => {
//   for(let i = 0; i < users.length; i++) {
//     delete users[i].status;
//     localStorage.setItem('users', JSON.stringify(users));
//     window.location = "../index.html";
//     console.log(users)
//   }
// })

// function displayUser() {
//   for(let i = 0; i < users.length; i++) {
//     if(users[i].status === "Active") {
//       userName.innerText = users[i].firstName;
//       accountNumber.innerText = users[i].accountNumber;
//       balance.innerText = users[i].balance;
//     }
//   }
// }

// function deposit(amount) {
//   for(let i = 0; i < users.length; i++) {
//     if(users[i].status === "Active") {
//       users[i].balance = Number(users[i].balance) + amount;
//       localStorage.setItem('users', JSON.stringify(users));
//       depositInput.value = "";
//       console.log(users)
//     }
//   }
// }

// function withdraw(amount) {
//   for(let i = 0; i < users.length; i++) {
//     if(users[i].status === "Active") {
//       users[i].balance = Number(users[i].balance) - amount;
//       localStorage.setItem('users', JSON.stringify(users));
//       withdrawInput.value = "";
//       console.log(users)
//     }
//   }
// }

// function sendMoney(amount, accountNumber) {
//   for(let i = 0; i < users.length; i++) {
//     if(users[i].status === "Active") {
//       users[i].balance = Number(users[i].balance) - amount;
//       localStorage.setItem('users', JSON.stringify(users));
//       sendAmountInput.value = "";
//       sendAccountNumberInput.value = "";
//       console.log(users)
//     } 

//     if(users[i].accountNumber === Number(accountNumber)) {
//       users[i].balance = Number(users[i].balance) + amount;
//       localStorage.setItem('users', JSON.stringify(users));
//       console.log(users)
//     }
      
//   }
// }

// displayUser();


/* modals */
depositLi.addEventListener("click", (event) => {
  event.preventDefault();
  modalContainer.style.display = "block";

  depositHeading.innerHTML = `
    <h1>Deposit</h1>
    <p>Save money on your account.</p>
  `

  depositModalInput.innerHTML = `
    <input type="text" id="deposit-value" placeholder="Type amount" />
    <button class="deposit-btn">Deposit</button>
  `
  closeModal.style.top = "-290px";
});

withdrawLi.addEventListener("click", (event) => {
  event.preventDefault();
  modalContainer.style.display = "block";

  depositHeading.innerHTML = `
  <h1>Withdraw</h1>
  <p>Spend money from your account</p>
  `

  depositModalInput.innerHTML = `
    <input type="text" id="withdraw-value" placeholder="Type Amount" />
    <button class="withdraw-btn">Widthraw</button>
  `
  closeModal.style.top = "-290px";
})

sendMoneyLi.addEventListener("click", (event) => {
  event.preventDefault();
  modalContainer.style.display = "block";

  depositHeading.innerHTML = `
  <h1>Send Money</h1>
  <p>Donate 2% from your account.</p>
  `

  depositModalInput.innerHTML = `
  <input type="text" id="send-amount" placeholder="Type amount" />
  <input type="text" id="send-account-number" placeholder="Recepient's account number" />
  <button class="send-money-btn">Send Money</button>
  `
  closeModal.style.top = "-350px";
})

closeModal.addEventListener("click", (event) => {
  event.preventDefault();
  modalContainer.style.display = "none";
})