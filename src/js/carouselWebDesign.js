import site1 from '/assets/images/lavinia-cover2.png';
import site2 from '/assets/images/lavinia-cover2.png';
import site3 from '/assets/images/lavinia-cover2.png';
import site4 from '/assets/images/lavinia-cover2.png';
import site5 from '/assets/images/lavinia-cover2.png';

export function initWebDesign() {
    const images = [
        { src: site1, link: "/lavinia", title: "Lavínia Barra Fisioterapeuta", pin: "Piedade do Rio Grande - MG" },
        { src: site2, link: "/site2", title: "Site 2", pin: "local 2" },
        { src: site3, link: "/site3", title: "Site 3", pin: "local 3" },
        { src: site4, link: "/site4", title: "Site 4", pin: "local 4" },
        { src: site5, link: "/site5", title: "Site 5", pin: "local 5" }
    ];

    let currentIndex = 0;
    const mainImg = document.querySelector(".main-site");
    const mainLink = document.querySelector("#main-link-web");
    const overlayTitle = document.querySelector("#main-overlay-title-web");
    const pinLocation = document.querySelector("#pin-location-web");
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
            pinLocation.textContent = main.pin;
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