import img1 from '../assets/images/fucinn-cover.png';
import img2 from '../assets/images/inove-cover.png';
import img3 from '../assets/images/livia-cover.png';
import img4 from '../assets/images/teteu-cover.png';
import img5 from '../assets/images/tiebreak-cover.png';
import img6 from '../assets/images/vital-cover.png';

import site1 from '../assets/images/site1-cover.png';
import site2 from '../assets/images/site2-cover.png';
import site3 from '../assets/images/site3-cover.png';
import site4 from '../assets/images/site4-cover.png';
import site5 from '../assets/images/site5-cover.png';
import site6 from '../assets/images/site6-cover.png';

// === Carrossel 1 ===
function initVisualID() {
    const images = [
        { src: img1, link: "../fucinn.html", title: "Fucinn" },
        { src: img2, link: "../inove.html", title: "Inove" },
        { src: img3, link: "../livia.html", title: "Livia" },
        { src: img4, link: "../teteu.html", title: "Teteu" },
        { src: img5, link: "../tiebreak.html", title: "Tiebreak" },
        { src: img6, link: "../vital.html", title: "Vital" }
    ];

    let currentIndex = 0;
    const mainImg = document.querySelector(".main-img");
    const mainLink = document.querySelector("#main-link");
    const overlayTitle = document.querySelector("#main-overlay-title");
    const smallImgs = document.querySelectorAll(".small-img");
    const nextBtn = document.querySelector("#next-btn");

    function updateCarousel() {
        const main = images[currentIndex];
        const next1 = images[(currentIndex + 1) % images.length];
        const next2 = images[(currentIndex + 2) % images.length];

        mainImg.style.opacity = 0;
        setTimeout(() => {
            mainImg.src = main.src;
            mainLink.href = main.link;
            overlayTitle.textContent = main.title;
            smallImgs[0].src = next1.src;
            smallImgs[1].src = next2.src;
            mainImg.style.opacity = 1;
        }, 300);
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    smallImgs.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = (currentIndex + index + 1) % images.length;
            updateCarousel();
        });
    });

    updateCarousel();
}

// === Carrossel 2 ===
function initWebDesign() {
    const images = [
        { src: site1, link: "../site1.html", title: "Site 1" },
        { src: site2, link: "../site2.html", title: "Site 2" },
        { src: site3, link: "../site3.html", title: "Site 3" },
        { src: site4, link: "../site4.html", title: "Site 4" },
        { src: site5, link: "../site5.html", title: "Site 5" },
        { src: site6, link: "../site6.html", title: "Site 6" }
    ];

    let currentIndex = 0;
    const mainImg = document.querySelector(".main-site");
    const mainLink = document.querySelector("#main-link-web");
    const overlayTitle = document.querySelector("#main-overlay-title-web");
    const smallImgs = document.querySelectorAll(".small-site");
    const nextBtn = document.querySelector("#next-btn-web");

    function updateCarousel() {
        const main = images[currentIndex];
        const next1 = images[(currentIndex + 1) % images.length];
        const next2 = images[(currentIndex + 2) % images.length];

        mainImg.style.opacity = 0;
        setTimeout(() => {
            mainImg.src = main.src;
            mainLink.href = main.link;
            overlayTitle.textContent = main.title;
            smallImgs[0].src = next1.src;
            smallImgs[1].src = next2.src;
            mainImg.style.opacity = 1;
        }, 300);
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    smallImgs.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = (currentIndex + index + 1) % images.length;
            updateCarousel();
        });
    });

    updateCarousel();
}

// === Inicialização ===
export function initCarousels() {
    initVisualID();
    initWebDesign();
}
