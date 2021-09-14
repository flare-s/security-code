

// event listener to show the collapsed content inside the element
export function toggleTab(container) {
    container.addEventListener("click", (e) => {
        if (e.target.className.includes("info-bar__icon")) {
            e.target.classList.toggle("info-bar__icon--open");
            e.target.parentNode.nextElementSibling.classList.toggle("info-bar__content--open");
        }
    })
}
