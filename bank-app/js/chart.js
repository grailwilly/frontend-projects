const ctx = document.getElementById("chart").getContext('2d');

const xValues = ["Expenses", "Savings", "Investments"];
const yValues = [countExpenseType(), countSavingsType(), countInvestmentType()];
const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797"
];

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Expenses 2022"
    }
  }
});

function countExpenseType() {
  let currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
  let expenses = currentAccount.expenses; 
  let counter = 0;
  for (const obj of expenses) {
    if(obj.expenseType === "expense") {
      counter++;
    }
  }
  return counter;
}

function countSavingsType() {
  let currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
  let expenses = currentAccount.expenses; 
  let counter = 0;
  for (const obj of expenses) {
    if(obj.expenseType === "savings") {
      counter++;
    }
  }
  return counter;
}

function countInvestmentType() {
  let currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
  let expenses = currentAccount.expenses; 
  let counter = 0;
  for (const obj of expenses) {
    if(obj.expenseType === "investment") {
      counter++;
    }
  }
  return counter;
}

// total budget
function totalBudget() {
  const totalAmount = document.querySelector(".total-budget")
  let currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
  let expenses = currentAccount.expenses;
  let total = 0;
  for (const obj of expenses) {
    total += obj.amount;
  }
  
  totalAmount.innerHTML = total.toLocaleString('en');
}

totalBudget();