document.addEventListener("DOMContentLoaded", () => {
    const darkButton = document.querySelector(".dark");
  
    darkButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
  
      
      if (document.body.classList.contains("dark-theme")) {
        darkButton.textContent = "light";
      } else {
        darkButton.textContent = "dark";
      }
    });
  });
  