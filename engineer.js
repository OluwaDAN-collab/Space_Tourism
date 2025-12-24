// List your files in the exact order they should appear
const pages = [
  "crew-engineer.html",
  "crew-commander.html",
  "crew-specialist.html",
  "crew-pilot.html",
];

// 1. Get the current filename from the URL
const currentPage = window.location.pathname.split("/").pop();
// Find the index of the current page in our array
let currentIndex = pages.indexOf(currentPage);

// If for some reason the page isn't in the list, default to the first one
if (currentIndex === -1) currentIndex = 0;

// 2. Handle the "Next" and "Previous" Arrows
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (prevBtn) {
  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Move backward, loop to end if at the start
    let prevIndex = (currentIndex - 1 + pages.length) % pages.length;
    window.location.href = pages[prevIndex];
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Move forward, loop to start if at the end
    let nextIndex = (currentIndex + 1) % pages.length;
    window.location.href = pages[nextIndex];
  });
}

// 3. Handle the Dots (myButton1, myButton2, etc.)
// We loop through 1 to 4 and link them to the array indices
for (let i = 1; i <= 4; i++) {
  const dot = document.getElementById(`myButton${i}`);
  if (dot) {
    dot.addEventListener("click", () => {
      window.location.href = pages[i - 1];
    });
  }
}
