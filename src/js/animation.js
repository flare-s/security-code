import "intersection-observer";
const animeOptions = {
    threshold: 0.2
}


// adding animation on scroll to the selected elements
export const animeObserver = new IntersectionObserver((entries, animeObserver) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.2) {
            const animation = entry.target.getAttribute("data-anime");
            entry.target.style.animation = `${animation}`;
            animeObserver.unobserve(entry.target);

        }
    });
}, animeOptions);

