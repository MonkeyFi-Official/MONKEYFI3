// script.js

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navbar ul');

  // Toggle menu open/close
  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      // Close the menu after clicking link (for mobile)
      nav.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  });
});
