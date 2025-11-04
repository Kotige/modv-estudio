import img1 from '/assets/images/fucinn-cover.png'; 
import img2 from '/assets/images/inove-cover.png'; 
import img3 from '/assets/images/livia-cover.png';
import img4 from '/assets/images/teteu-cover.png';
import img5 from '/assets/images/tiebreak-cover.png';
import img6 from '/assets/images/vital-cover.png';

export function initVisualID() {
    const images = [
        { src: img1, link: "/fucinn", title: "Fucinn Pet Lar", pin: "Rio de Janeiro - RJ" },
        { src: img2, link: "/inove", title: "Inove Centro de Ensino", pin: "Cataguases - MG" },
        { src: img3, link: "/livia", title: "Livia Rezende Fisioterapeuta", pin: "Oliveira - MG" },
        { src: img4, link: "/teteu", title: "Teteu Moda Infantil", pin: "Capelinha - MG"},
        { src: img5, link: "/tiebreak", title: "Tiebreak Encordoamento", pin: "Juiz de Fora - MG" },
        { src: img6, link: "/vital", title: "Vital Material de Limpeza", pin: "Fortaleza - CE" }
    ];

    let currentIndex = 0;

    const mainImg = document.querySelector(".main-img");
    const mainLink = document.querySelector("#main-link");
    const overlayTitle = document.querySelector("#main-overlay-title");
    const pinLocation = document.querySelector("#pin-location");
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

    // Clique nas miniaturas
    smallImgs.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = (currentIndex + index + 1) % images.length;
            updateCarousel();
        });
    });

    updateCarousel();

    // Autoplay opcional (descomente se quiser)
    // setInterval(() => {
    //     currentIndex = (currentIndex + 1) % images.length;
    //     updateCarousel();
    // }, 8000);
}
