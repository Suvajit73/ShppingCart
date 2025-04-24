document.addEventListener("DOMContentLoaded", () => {
  // Dark theme toggle functionality
  const themeToggle = document.querySelector(".dark");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Toggle icon between moon and sun
    if (document.body.classList.contains("dark-theme")) {
      themeToggle.setAttribute("name", "sunny-outline");
    } else {
      themeToggle.setAttribute("name", "moon-outline");
    }
  });

  // Hamburger menu toggle functionality
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});


// click button for slide*******************
const [leftArrow, rightArrow] = document.querySelectorAll('.slide-btn img');
const products = document.querySelector('.products');


const scrollAmount = 300;

leftArrow.addEventListener('click', () => {
  products.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  products.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});


