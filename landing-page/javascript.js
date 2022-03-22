window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "10vh";
    document.getElementById("nav-bar").style.height = "10vh";
    document.getElementById("header-img").innerHTML = '<a href="index.html" alt="home" class="logo-text"><h1>Hyperlocal Market</h1></a>';
    document.querySelector("main").style.marginTop = "10%";
  }else{
    document.getElementById("header").style.height = "40vh";
    document.getElementById("nav-bar").style.height = "40vh";
    document.getElementById("header-img").innerHTML = '<a href="index.html" alt="home"><img src="assets/logo_pear.png" alt="Logo" class="logo"></a>';
    document.querySelector("main").style.marginTop = "20%";
  }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}