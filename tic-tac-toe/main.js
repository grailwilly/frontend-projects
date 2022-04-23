// X => <i class="fas fa-times"></i>
// O => <i class="fas fa-circle-notch"></i>

const mainPage = document.querySelector('#mainPage');
const choosePlayer = document.querySelectorAll('.choose');

let changeTurn = null;

choosePlayer.forEach(player => {
  player.addEventListener("click", () => {
    if(player.id === "playerX") {
      changeTurn = false;
      // console.log(changeTurn);
    }else{
      changeTurn = true;
      // console.log(changeTurn);
    }
  })
})