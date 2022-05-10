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
  displayExpenses();
})

function addExpense(expenseType, description, amount) {
  let newExpense = new Expense(expenseType, description, amount);
  expenseArray.push(newExpense);
  updateExpenseToLocalStorage();
}

function updateExpenseToLocalStorage() {
  for(let i = 0; i < users.length; i++) {
    if(users[i].status === "Active") {
      users[i].expenses = expenseArray;
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
}

function displayExpenses() {
  for(let i = 0; i < users.length; i++) {
    for(let j = 0; j < users[i].expenses.length; j++) {
      if(users[i].status = "Active") {
       const tr = document.createElement("tr");
       tr.innerHTML = `
        <td id="exp-date>${users[i].expenses[j].id}</td>
        <td id="exp-date>${users[i].expenses[j].dateNow}</td>
        <td id="exp-type">${users[i].expenses[j].expenseType}</td>
        <td id="exp-description">${users[i].expenses[j].description}</td>
        <td id="exp-amount">${users[i].expenses[j].amount}</td>
        <td id="exp-action">Edit | Delete</td>
       `
       expenseTable.append(tr);
      }
    }
  }
}


