document.addEventListener("DOMContentLoaded", function(){

// Hero Fade-In
const heroContent = document.querySelector(".hero-content");
setTimeout(() => {
    heroContent.classList.add("active");
}, 300);

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

});
