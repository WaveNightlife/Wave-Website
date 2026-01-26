// Wave Nightlife - Interactive Scripts

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.hasAttribute('hidden');
    if (isHidden) {
      mobileMenu.removeAttribute('hidden');
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.setAttribute('hidden', '');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobileMenu a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.setAttribute('hidden', '');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Reveal Animation on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '#top') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Set current year in footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Tab switching in device preview
const sigBtns = document.querySelectorAll('.sigBtn');
sigBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    sigBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  });
});

// Segment switching in preview panel
const segBtns = document.querySelectorAll('.segBtn');
segBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    segBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Parallax effect for hero background
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const heroMedia = document.querySelector('.heroMedia');
  
  if (heroMedia && currentScroll < window.innerHeight) {
    const parallaxSpeed = 0.5;
    heroMedia.style.transform = `translateY(${currentScroll * parallaxSpeed}px)`;
  }
  
  lastScroll = currentScroll;
});

// Header background on scroll
const header = document.querySelector('.top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(10, 10, 15, 0.95)';
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.background = 'rgba(10, 10, 15, 0.8)';
    header.style.boxShadow = 'none';
  }
});

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('load', function() {
    this.style.opacity = '1';
  });
  
  if (img.complete) {
    img.style.opacity = '1';
  } else {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
  }
});

// Cursor glow effect (optional enhancement)
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor-glow');
  if (!cursor) return;
  
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Trigger initial reveal for elements in viewport
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('revealed');
    }
  });
});
