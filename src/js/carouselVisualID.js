import img1 from '../assets/images/logo.png';
import img2 from '../assets/images/faixa.png';
import img3 from '../assets/images/logo.png';
import img4 from '../assets/images/faixa.png';
import img5 from '../assets/images/logo.png';

export function initVisualID() {
    const images = [
        { src: img1, link: "#" },
        { src: img2, link: "#" },
        { src: img3, link: "#" },
        { src: img4, link: "#" },
        { src: img5, link: "#" }
    ];

    let currentIndex = 0;

    const mainImg = document.querySelector(".main-img");
    const mainLink = document.querySelector("#main-link");
    const smallImgs = document.querySelectorAll(".small-img");
    const nextBtn = document.querySelector("#next-btn");

    function updateCarousel() {
        const main = images[currentIndex];
        const next1 = images[(currentIndex + 1) % images.length];
        const next2 = images[(currentIndex + 2) % images.length];

        mainImg.src = main.src;
        mainLink.href = main.link;
        smallImgs[0].src = next1.src;
        smallImgs[1].src = next2.src;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    updateCarousel();
}