const expenseTypeInput = document.getElementById("expenses-option");
const expenseDescriptionInput = document.getElementById("expense-description");
const expenseAmountInput = document.getElementById("expense-amount");
const addExpenseBtn = document.getElementById("add-expense");

const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()];
let day = date.getUTCDate();
let year = date.getFullYear();

const usersCheck = JSON.parse(localStorage.getItem('users'));
const expenseArray = [];

const Expense = function(expenseType, description, amount){
  let dateNow = `${month} ${day}, ${year}`;
  this.dateNow = dateNow;
  this.expenseType = expenseType;
  this.description = description;
  this.amount = amount;
}

addExpenseBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addExpense(expenseTypeInput.value, expenseDescriptionInput.value, Number(expenseAmountInput.value));
  // updateExpenseToLocalStorage();
  // console.log(expenseArray);

})

function addExpense(expenseType, description, amount) {
  let newExpense = new Expense(expenseType, description, amount);
  expenseArray.push(newExpense);
  // updateExpenseToLocalStorage();
  console.log(expenseArray);
}

// function updateExpenseToLocalStorage() {
//   for(let i = 0; i < usersCheck.length; i++) {
//     if(usersCheck[i].status === "Active") {
//       usersCheck[i].expense = expenseArray;
//       localStorage.setItem('users', JSON.stringify(users));
//     }
//   }
// }