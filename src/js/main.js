// Import our custom CSS
import '/scss/styles.scss'

import {initVisualID} from '/js/carouselVisualID.js';
import {initWebDesign} from '/js/carouselWebDesign.js';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {
    initVisualID();
    initWebDesign();
});

// Smooth scroll function
function smoothScrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

// Debounce
function debounce(fn, delay = 300) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

// Home page verification
function isHomePage() {
    return window.location.pathname === '/' || window.location.pathname === '/index.html';
}

// Hash verification
document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href.startsWith('/#')) return;

        e.preventDefault();
        const targetId = href.split('#')[1];

        if (isHomePage()) {
            smoothScrollToSection(targetId);
            history.pushState(null, '', '/');
        } else {
            window.location.href = `/#${targetId}`;
        }   
    });
});

// Scroll
window.addEventListener('DOMContentLoaded', () => {
    if (isHomePage() && window.location.hash) {
        const targetId = window.location.hash.substring(1);
        debounce(() => {
            smoothScrollToSection(targetId);
            history.replaceState(null, '', '/');
        })();
    }
});

// Back button suport
window.addEventListener('popstate', debounce(() => {
    if (isHomePage() && window.location.hash) {
        const targetId = window.location.hash.substring(1);
        smoothScrollToSection(targetId);
    }
}));

