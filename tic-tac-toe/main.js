const mainPage = document.querySelector('#mainPage');
const choosePlayer = document.querySelectorAll('.choose');

const gamePage = document.querySelector("#gamePage");
const showChange = document.querySelector("#showChange");
const cells = document.querySelectorAll(".cell");

const replayHistory = document.getElementById("replay-history");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

const winnerModal = document.getElementById("winner");
const winnerName = document.getElementById("playerName");
const replayBtn = document.querySelector(".replay");
const restartBtn = document.querySelectorAll(".reset");

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

cells.forEach(box => {
  replayHistory.classList.add("hidden");
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
  // get id X and O
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
    if(cells[combo[0]].id === "" || cells[combo[1]].id === "" || cells[combo[2]].id === "") {
      continue;
    }else if(cells[combo[0]].id === "X" && cells[combo[1]].id === "X" && cells[combo[2]].id === "X") {
      winnerName.innerHTML = `Player <img class="player-X" src="./assets/mushroom-green.png" /> Won The Game!`;
      gamePage.style.display = "none";
      winnerModal.style.display = "block";      
    }else if(cells[combo[0]].id === "O" && cells[combo[1]].id === "O" && cells[combo[2]].id === "O") {
      winnerName.innerHTML = `Player <img class="player-O" src="./assets/mushroom-red.png" /> Won The Game!`;
      gamePage.style.display = "none";
      winnerModal.style.display = "block";
    } else {s
      continue;
    }
  }
}

function drawMatch() {
  if(cells[0].id !== "" && cells[1].id !== "" && cells[2].id !== "" &&
  cells[3].id !== "" && cells[4].id !== "" && cells[5].id !== "" &&
  cells[6].id !== "" && cells[7].id !== "" && cells[8].id !== "" ) {
    winnerName.innerText = `Match Draw!`;
    gamePage.style.display = "none";
    winnerModal.style.display = "block";
  }
}

restartBtn.forEach(reset => {
  reset.addEventListener("click", () => {
    window.location.reload();
  })
})

replayBtn.addEventListener("click", () => {
  replayHistory.classList.remove('hidden');
  winnerModal.style.display = "none";
  gamePage.style.display = "block";
})

prevBtn.addEventListener("click", () => {
  // for(let i = 0; i < moves.length; i++){
  //   let move = moves[i];
  //   console.log(move);
  // }
})

nextBtn.addEventListener("click", () => {
  // console.log(cell);
})
