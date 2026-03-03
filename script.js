const elements = document.querySelectorAll('.fade');

window.addEventListener('scroll',()=>{
elements.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add('visible');
}
});
});
