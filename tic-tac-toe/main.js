// X => <i class="fas fa-times"></i>
// O => <i class="fas fa-circle-notch"></i>

const mainPage = document.querySelector('#mainPage');
const choosePlayer = document.querySelectorAll('.choose');

const gamePage = document.querySelector("#gamePage");
const showChange = document.querySelector("#showChange");
const cell = document.querySelectorAll(".cell");


let changeTurn = null;

choosePlayer.forEach(player => {
  player.addEventListener("click", () => {
    if(player.id === "playerX") {
      changeTurn = false;
      // console.log(changeTurn);
      showChange.style.left = `0px`;
    }else{
      changeTurn = true;
      // console.log(changeTurn);
      showChange.style.left = `160px`;
    }
    mainPage.style.display = "none";
    gamePage.style.display = "block"
  })
});