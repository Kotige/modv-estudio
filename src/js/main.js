// Import our custom CSS
import '../scss/styles.scss'

import {initCarousel} from './carousel.js';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {
    initCarousel();
})