const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bg");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// DESTINATION SWITCH
const dMoon = document.querySelector(".p-info2");
const destMoon = document.getElementById("moon");

function switchMars() {
  destMoon.innerHTML = document.getElementById("mars").innerHTML;
}

function switchEur() {
  destMoon.innerHTML = document.getElementById("europa").innerHTML;
}

function switchTit() {
  destMoon.innerHTML = document.getElementById("titan").innerHTML;
}

function switchMoon() {
  destMoon.innerHTML = dMoon.innerHTML;
}
