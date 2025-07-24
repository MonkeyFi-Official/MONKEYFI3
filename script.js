// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navbar ul');

  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });

  // Smooth scrolling
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
    });
  });

  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(element => {
    observer.observe(element);
  });
});
