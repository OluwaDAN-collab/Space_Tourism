// We wrap the code in 'DOMContentLoaded' to ensure the HTML is loaded first
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // 1. Remove 'active' from all buttons
      buttons.forEach((b) => b.classList.remove("active"));

      // 2. Add 'active' to the clicked button
      this.classList.add("active");

      // 3. Get the URL and navigate
      const targetUrl = this.getAttribute("data-url");
      console.log("Navigating to:", targetUrl);

      if (targetUrl) {
        // Short delay so you can see the color switch
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 300);
      }
    });
  });
});

// // Get the button element by its ID
// const button = document.getElementById("myButton_1");

// // Define the function that will run when the button is clicked
// function handleClick() {
//   window.location.href = "crew-commander.html";
// }

// // Attach the 'click' event listener to the button, calling the function
// button.addEventListener("click", handleClick);
