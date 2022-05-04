const logOutBtn = document.getElementById("logout-btn");
const depositInput = document.getElementById("deposit-value");
const depositBtn = document.querySelector(".deposit-btn");
const withdrawBtn = document.querySelector(".deposit-btn");
const sendMoneyBtn = document.querySelector(".deposit-btn");


const users = JSON.parse(localStorage.getItem('users'));
// console.log(users);

depositBtn.addEventListener("click", (event) => {
  event.preventDefault();
  deposit(Number(depositInput.value));
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