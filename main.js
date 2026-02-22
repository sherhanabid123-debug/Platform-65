// Handle Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Setup simple Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing once animated
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
});

// About Section train track animation on scroll
const trainWheels = document.querySelectorAll('.train-wheel');
const trackBase = document.querySelector('.train-track-base');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    // Rotate wheels
    if (trainWheels.length > 0) {
        trainWheels.forEach(wheel => {
            wheel.style.transform = `rotate(${scrollPos * 0.4}deg)`;
        });
    }
    // Move track
    if (trackBase) {
        trackBase.style.transform = `translateX(-${(scrollPos * 0.2) % 40}px)`;
    }
});
