const mainPage = document.querySelector('#mainPage');
const choosePlayer = document.querySelectorAll('.choose');

const gamePage = document.querySelector("#gamePage");
const showChange = document.querySelector("#showChange");
const cell = document.querySelectorAll(".cell");

const winnerModal = document.getElementById("winner");
const winnerName = document.getElementById("playerName");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const replayGame = document.querySelector(".replay");
const restartGame = document.querySelectorAll(".reset");

let changeTurn = null;

choosePlayer.forEach(player => {
  player.addEventListener("click", () => {
    if(player.id === "playerX") {
      changeTurn = false;
      showChange.style.left = `0px`;
    }else{
      changeTurn = true;
      showChange.style.left = `160px`;
    }
    mainPage.style.display = "none";
    gamePage.style.display = "block"
  })
});

cell.forEach(box => {
  box.addEventListener("click", () => {
    if(changeTurn === false) {
      box.innerHTML = `<img class="icon-X" src="./assets/mushroom-green.png" />`;
      box.id = "X";
      box.style.pointerEvents = "none";
      showChange.style.left = `160px`;
      changeTurn = true;
    }else{
      box.innerHTML = `<img class="icon-O" src="./assets/mushroom-red.png" />`;
      box.id = "O";
      box.style.pointerEvents = "none";
      showChange.style.left = `0px`;
      changeTurn = false
    }
    saveMove();
    winner();
    drawMatch();
  })
})

let moves = [];

function saveMove() {
  moves.push(cell);
  console.log(moves);
}

let winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function winner() {
  for (let i = 0; i <= 7; i++) {
    let combo = winningCombo[i];
    if(cell[combo[0]].id === "" || cell[combo[1]].id === "" || cell[combo[2]].id === "") {
      continue;
    }else if(cell[combo[0]].id === "X" && cell[combo[1]].id === "X" && cell[combo[2]].id === "X") {
      winnerName.innerHTML = `Player <img class="player-X" src="./assets/mushroom-green.png" /> Won The Game!`;
      gamePage.style.display = "none";
      winnerModal.style.display = "block";      
    }else if(cell[combo[0]].id === "O" && cell[combo[1]].id === "O" && cell[combo[2]].id === "O") {
      winnerName.innerHTML = `Player <img class="player-O" src="./assets/mushroom-red.png" /> Won The Game!`;
      gamePage.style.display = "none";
      winnerModal.style.display = "block";
    } else {
      continue;
    }
  }
}

function drawMatch() {
  if(cell[0].id !== "" && cell[1].id !== "" && cell[2].id !== "" &&
  cell[3].id !== "" && cell[4].id !== "" && cell[5].id !== "" &&
  cell[6].id !== "" && cell[7].id !== "" && cell[8].id !== "" ) {
    winnerName.innerText = `Match Draw!`;
    gamePage.style.display = "none";
    winnerModal.style.display = "block";
    restart.style.top = "65%";
    restart.style.left = "43%";
  }
}

restartGame.forEach(reset => {
  reset.addEventListener("click", () => {
    window.location.reload();
  })
})

replayGame.addEventListener("click", () => {
  winnerModal.style.display = "none";
  gamePage.style.display = "block";
})
