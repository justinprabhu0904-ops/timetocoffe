// Mobile menu toggle
const menuOpenBtn = document.getElementById('menu-open-button');
const menuCloseBtn = document.getElementById('menu-close-button');
const navMenu = document.querySelector('.nav-menu');

menuOpenBtn.addEventListener('click', () => {
  navMenu.classList.add('active');
});

menuCloseBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Testimonials Swiper initialization
const swiper = new Swiper('.testimonials-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission (basic handling - replace with actual backend)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent! (This is a demo - connect to a backend for real functionality.)');
  contactForm.reset();
});