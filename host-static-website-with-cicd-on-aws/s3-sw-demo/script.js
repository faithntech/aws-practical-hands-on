// Scroll reveal animation
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach(el => observer.observe(el));

// Pause other videos when one plays
const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.addEventListener("play", () => {
        videos.forEach(v => {
            if (v !== video) v.pause();
        });
    });
});
