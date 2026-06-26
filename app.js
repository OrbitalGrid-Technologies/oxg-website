/* ==========================================================================
   OXG Interactive Scripts - Minimalist SpaceX Style
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
      menuToggle.classList.toggle('active');

      const bars = menuToggle.querySelectorAll('.bar');
      if (menuToggle.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });

    // Close menu when clicking items
    navMenu.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        navMenu.classList.remove('mobile-active');
        menuToggle.classList.remove('active');
        menuToggle.querySelectorAll('.bar').forEach(bar => bar.style.transform = 'none');
        menuToggle.querySelectorAll('.bar')[1].style.opacity = '1';
      });
    });
  }

  // --- Stats Counter Scroll Animation ---
  const statValues = document.querySelectorAll('.stat-val');

  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const duration = 2000; // ms
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing out quadratic
      const ease = progress * (2 - progress);
      const currentVal = Math.floor(ease * target);

      element.textContent = currentVal.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        element.textContent = target.toLocaleString();
      }
    };

    requestAnimationFrame(updateCount);
  };

  // Intersection Observer
  const observerOptions = {
    // If scroll-container is visible, observe scroll-container viewport
    root: document.querySelector('.scroll-container').offsetParent ? document.querySelector('.scroll-container') : null,
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.stat-val');
        counters.forEach(counter => {
          if (!counter.classList.contains('counted')) {
            counter.classList.add('counted');
            animateCounter(counter);
          }
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('.snap-section').forEach(section => {
    observer.observe(section);
  });

});
