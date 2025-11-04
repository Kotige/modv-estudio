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

document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        // só aplica se for um link interno do tipo /#section
        if (href.startsWith('/#')) {
            e.preventDefault();
            const targetId = href.split('#')[1];
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            // mantém a URL limpa, sem # e sem reload
            history.replaceState(null, '', '/');
            }
        });
    });