const Hamburger = document.querySelector(".Hamburger");
const hamdiv2 = document.querySelector(".hamdiv2");
const myElement = document.getElementById("container");

hamdiv2.addEventListener("click", () => {
  const style = (myElement.style.right = "-300px");
});

Hamburger.addEventListener("click", () => {
  myElement.style.right = "0";
});
