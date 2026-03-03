document.addEventListener("DOMContentLoaded", function(){

// Hero Fade-In
const heroContent = document.querySelector(".hero-content");
setTimeout(() => {
    heroContent.classList.add("active");
}, 200);

// Scroll Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll(".card").forEach(card => {
    observer.observe(card);
});

// REAL Parallax
const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    heroBg.style.transform = "translateY(" + scrollY * 0.4 + "px)";
});

});
