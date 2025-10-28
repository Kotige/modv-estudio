import site1 from '../assets/images/lavinia-cover2.png';
import site2 from '../assets/images/lavinia-cover2.png';
import site3 from '../assets/images/lavinia-cover2.png';
import site4 from '../assets/images/lavinia-cover2.png';
import site5 from '../assets/images/lavinia-cover2.png';

export function initWebDesign() {
    const sites = [
        { src: site1, link: "#" },
        { src: site2, link: "#" },
        { src: site3, link: "#" },
        { src: site4, link: "#" },
        { src: site5, link: "#" }
    ];

    let currentIndex = 0;

    const mainSite = document.querySelector(".main-site");
    const mainLink = document.querySelector("#main-link-web"); // novo ID
    const smallSites = document.querySelectorAll(".small-site");
    const nextBtn = document.querySelector("#next-btn-web"); // novo ID

    function updateCarousel() {
        const main = sites[currentIndex];
        const next1 = sites[(currentIndex + 1) % sites.length];
        const next2 = sites[(currentIndex + 2) % sites.length];

        mainSite.src = main.src;
        mainLink.href = main.link;
        smallSites[0].src = next1.src;
        smallSites[1].src = next2.src;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % sites.length;
        updateCarousel();
    });

    updateCarousel();
}
