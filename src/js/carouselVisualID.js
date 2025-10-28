import img1 from '../assets/images/fucinn-cover.png';
import img2 from '../assets/images/inove-cover.png';
import img3 from '../assets/images/livia-cover.png';
import img4 from '../assets/images/teteu-cover.png';
import img5 from '../assets/images/tiebreak-cover.png';
import img6 from '../assets/images/vital-cover.png';

export function initVisualID() {
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

        mainImg.computedStyleMap.opacity = 0;

        mainImg.src = main.src;
        mainLink.href = main.link;
        overlayTitle.textContent = main.title;

        smallImgs[0].src = next1.src;
        smallImgs[1].src = next2.src;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    updateCarousel();

    // setInterval(() => {
    //     currentIndex = (currentIndex + 1) % images.length;
    //     updateCarousel();
    // }, 8000);
}