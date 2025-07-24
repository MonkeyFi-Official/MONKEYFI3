// Toggle mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.checked = true;
}

// Toggle theme on switch
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});
