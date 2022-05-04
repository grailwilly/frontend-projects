const logOutBtn = document.getElementById("logout-btn");
const depositBtn = document.querySelector(".deposit-btn");
const withdrawBtn = document.querySelector(".deposit-btn");
const sendMoneyBtn = document.querySelector(".deposit-btn");


const users = JSON.parse(localStorage.getItem('users'));
console.log(users);