import "intersection-observer";
const animeElements = Array.from(document.querySelectorAll("[data-anime]"));
const animeOptions = {
    threshold: 0.2
}


// adding animation on scroll to the selected elements
const animeObserver = new IntersectionObserver((entries, animeObserver) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.2) {
            const animation = entry.target.getAttribute("data-anime");
            entry.target.style.animation = `${animation}`;
            animeObserver.unobserve(entry.target);

        }
    });
}, animeOptions);

animeElements.forEach(el => animeObserver.observe(el));