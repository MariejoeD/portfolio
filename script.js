document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();
  
    if (hour < 12) {
      greeting.textContent = "Good Morning!";
    } else if (hour < 18) {
      greeting.textContent = "Good Afternoon!";
    } else {
      greeting.textContent = "Good Evening!";
    }
  
    // Button interaction
    const moreBtn = document.getElementById("more-btn");
    moreBtn.addEventListener("click", () => {
      alert("Discover more about Mariejoe!");
    });
  });
  