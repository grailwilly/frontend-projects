const logOutBtn = document.querySelector(".admin-logout");
const table = document.querySelector("table");
const userRow = document.getElementById("users-info");

const users = JSON.parse(localStorage.getItem('users'));

logOutBtn.addEventListener("click", () => {
  window.location = "../index.html";
})

function userLists() {
  for(let i = 0; i < users.length; i++) {
    // console.log(users[i].firstName);
    userRow.innerHTML = "";
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td id="account-number">${users[i].accountNumber}</td>
    <td id="fullname">${users[i].firstName} ${users[i].lastName}</td>
    <td id="balance">${users[i].balance}</td>
    <td id="account-status">
      Edit | Delete
    </td>
    `
    table.append(tr);
  }
}

userLists();

