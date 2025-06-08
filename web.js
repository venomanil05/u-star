// web.js

document.addEventListener('DOMContentLoaded', () => {
  // Background slider logic
  const slider = document.getElementById('slider');
  const slides = slider.children;
  const totalSlides = slides.length;
  let currentIndex = 0;

  function updateSlide() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
  }

  window.nextSlide = function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  };

  window.prevSlide = function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  };

  // Auto slide every 5 seconds (optional)
  setInterval(() => {
    nextSlide();
  }, 6000);

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change button icon or text accordingly
    if (document.body.classList.contains('dark-mode')) {
      darkModeToggle.textContent = '☀️'; // sun icon for light mode
    } else {
      darkModeToggle.textContent = '🌙'; // moon icon for dark mode
    }
  });
});
//service section
function toggleDetails(card) {
  const isActive = card.classList.contains("active");
  
  // Collapse all
  document.querySelectorAll(".service-card").forEach(el => el.classList.remove("active"));
  
  // Toggle this one
  if (!isActive) {
    card.classList.add("active");
  }
}

//about
   document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    let started = false;

    const animateCounters = () => {
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const speed = 10000; // Smaller = faster
        const increment = Math.ceil(target / speed);

        const updateCount = () => {
          const current = +counter.innerText;
          if (current < target) {
            counter.innerText = current + increment;
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    };

    // Detect when .about-stats is in view
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          animateCounters();
          started = true;
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
      observer.observe(statsSection);
    }
  });




