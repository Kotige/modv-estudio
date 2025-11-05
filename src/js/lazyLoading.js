
export function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.onload = () => img.classList.add("loaded");
          obs.unobserve(img);
        }
      });
    }, {
      rootMargin: "100px 0px",
      threshold: 0.1
    });

    lazyImages.forEach(img => observer.observe(img));
  } else {
    lazyImages.forEach(img => (img.src = img.dataset.src));
  }
}
