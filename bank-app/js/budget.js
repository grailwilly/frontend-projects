const expenseTypeInput = document.getElementById("expenses-option");
const expenseDescriptionInput = document.getElementById("expense-description");
const expenseAmountInput = document.getElementById("expense-amount");
const addExpenseBtn = document.getElementById("add-expense");

const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()];
let day = date.getUTCDate();
let year = date.getFullYear();

const expenseTable = document.getElementById("expense-row");

const expenseArray = [];

const Expense = function(expenseType, description, amount){
  let dateNow = `${month} ${day}, ${year}`;
  let id = Math.floor(Math.random() * 100);
  this.id = id;
  this.dateNow = dateNow;
  this.expenseType = expenseType;
  this.description = description;
  this.amount = amount;
}

addExpenseBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addExpense(expenseTypeInput.value, expenseDescriptionInput.value, Number(expenseAmountInput.value));
  let currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
  let lastItem = currentAccount.expenses[currentAccount.expenses.length - 1];
   const tr = document.createElement("tr");
       tr.innerHTML = `
        <td id="exp-date>${lastItem.id}</td>
        <td id="exp-date>${lastItem.dateNow}</td>
        <td id="exp-type">${lastItem.expenseType}</td>
        <td id="exp-description">${lastItem.description}</td>
        <td id="exp-amount">${lastItem.amount}</td>
        <td id="exp-action">Edit | Delete</td>
       `
    expenseTable.prepend(tr);
  window.location.reload();
})

function addExpense(expenseType, description, amount) {
  let users = JSON.parse(localStorage.getItem("users"));
  let currentAccount = JSON.parse(localStorage.getItem("currentAccount"));

  let newExpense = new Expense(expenseType, description, amount);
  currentAccount.expenses.push(newExpense);
  localStorage.setItem("currentAccount", JSON.stringify(currentAccount));
  let user = Array.from(users).find(user => {
    return user.accountNumber === currentAccount.accountNumber;
  })
  user.expenses = currentAccount.expenses;
    console.log(users);
  updateExpenseToLocalStorage(users);
  expenseDescriptionInput.value = "";
  expenseAmountInput.value = "";
}

function updateExpenseToLocalStorage(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function displayExpenses() {
  let currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
  let expenses = currentAccount.expenses.reverse();
    for(let j = 0; j < expenses.length; j++) {
       const tr = document.createElement("tr");
       tr.innerHTML = `
        <td id="exp-date>${expenses[j].id}</td>
        <td id="exp-date>${expenses[j].dateNow}</td>
        <td id="exp-type">${expenses[j].expenseType}</td>
        <td id="exp-description">${expenses[j].description}</td>
        <td id="exp-amount">${expenses[j].amount.toLocaleString('en')}</td>
        <td id="exp-action">Edit | Delete</td>
       `
       expenseTable.append(tr);
    }
}

window.onload = function() {
  displayExpenses();
}
