// Import our custom CSS
import '../scss/styles.scss'

import {initVisualID} from './carouselVisualID.js';
import {initWebDesign} from './carouselWebDesign.js';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {
    initVisualID();
    initWebDesign();
});
