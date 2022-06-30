const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bg");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// DESTINATION SWITCH
const dMoon = document.querySelector(".p-info2");
const destMoon = document.getElementById("moon");

windowWidth = window.innerWidth;
function switchNav() {
  if (windowWidth <= 490 + "px") {
    document.querySelector(".nav-item").style.color = "blue";
  }
}

function switchMars() {
  destMoon.innerHTML = document.getElementById("mars").innerHTML;
  document.getElementById("mar").style.borderBottom = "2px solid white";
}

function switchEur() {
  destMoon.innerHTML = document.getElementById("europa").innerHTML;
  document.getElementById("eur").style.borderBottom = "2px solid white";
}

function switchTit() {
  destMoon.innerHTML = document.getElementById("titan").innerHTML;
  document.getElementById("tit").style.borderBottom = "2px solid white";
}

function switchMoon() {
  destMoon.innerHTML = dMoon.innerHTML;
}
