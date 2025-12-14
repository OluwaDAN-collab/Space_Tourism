const Hamburger = document.querySelector(".Hamburger");
const navbar = document.querySelector(".navbar");
const logodiv = document.querySelector(".logodiv");
const navdiv = document.querySelector(".navdiv");
const hamdiv2 = document.querySelector(".hamdiv2");
const myElement = document.getElementById("container");

Hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamdiv.classList.toggle("active");
});
hamdiv2.addEventListener("click", () => {
  const style = (myElement.style.right = "-300px");
});

const nav = document.getElementById("container");
Hamburger.addEventListener("click", () => {
  nav.style.right = "0";
});
