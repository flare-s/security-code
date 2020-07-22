import "intersection-observer";
const navButton = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

// show the collapsed nav on the small screen
navButton.addEventListener("click", () => {
    nav.classList.toggle("nav--show");
});





