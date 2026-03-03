document.addEventListener("DOMContentLoaded", function(){

// HERO FADE-IN
const heroContent = document.querySelector(".hero-content");
setTimeout(() => {
    if(heroContent){
        heroContent.classList.add("active");
    }
}, 200);

// SCROLL ANIMATION
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

// PARALLAX
const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {
    if(heroBg){
        let scrollY = window.scrollY;
        heroBg.style.transform = "translateY(" + scrollY * 0.4 + "px)";
    }
});

});
