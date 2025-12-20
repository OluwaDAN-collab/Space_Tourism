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
