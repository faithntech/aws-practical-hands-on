// =========================
// SCROLL REVEAL (SAFE VERSION)
// =========================
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            obs.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

hiddenElements.forEach(el => observer.observe(el));