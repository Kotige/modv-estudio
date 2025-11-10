export function initVideoPlayer() {
    const videoPlayers = document.querySelectorAll(".custom-video-player");

    videoPlayers.forEach((player) => {
        const video = player.querySelector(".customVideo");
        const playPauseBtn = player.querySelector(".playPauseBtn");
        const muteBtn = player.querySelector(".muteBtn");
        const progressBar = player.querySelector(".progressBar");
        const currentTimeEl = player.querySelector(".currentTime");
        const totalTimeEl = player.querySelector(".totalTime");

    // Time format (mm:ss)
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

// Total time load
    video.addEventListener("loadedmetadata", () => {
        totalTimeEl.textContent = formatTime(video.duration);
    });

// Progress and actual time progress
    function updateProgress() {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.value = progress || 0;
        currentTimeEl.textContent = formatTime(video.currentTime);

        if (!video.paused && !video.ended) {
            requestAnimationFrame(updateProgress);
        }
    }

    // Play / Pause
    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
            requestAnimationFrame(updateProgress);
        } else {
            video.pause();
            playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
        }
    }

    playPauseBtn.addEventListener("click", togglePlayPause);
    video.addEventListener("click", togglePlayPause);

    // Button reset
    video.addEventListener("ended", () => {
        playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
    });

    // Mute / Unmute
    muteBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        muteBtn.innerHTML = video.muted
        ? '<i class="bi bi-volume-mute-fill"></i>'
        : '<i class="bi bi-volume-up-fill"></i>';
    });

    progressBar.addEventListener("input", () => {
      const newTime = (progressBar.value / 100) * video.duration;
        video.currentTime = newTime;
        });
    });

  // Bootstrap integration
    const carousel = document.getElementById("carouselExample");
    if (carousel) {
        carousel.addEventListener("slide.bs.carousel", () => {
        // Pause when slide is changed
        videoPlayers.forEach((player) => {
            const video = player.querySelector(".customVideo");
            const playPauseBtn = player.querySelector(".playPauseBtn");
            video.pause();
            playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
        });
        });

    carousel.addEventListener("slid.bs.carousel", () => {
      // Auto play actual video
        const activeSlide = carousel.querySelector(".carousel-item.active");
        const activeVideo = activeSlide?.querySelector(".customVideo");
        const activeBtn = activeSlide?.querySelector(".playPauseBtn");
        if (activeVideo) {
            activeVideo.play().catch(() => {});
            if (activeBtn) {
            activeBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
            }
        }
    });
    }
}
