const barContainer = document.querySelector(".bars-container")
const barIcon = barContainer.querySelector(".info-bar__icon");
const barContent = barIcon.parentNode.nextElementSibling;

// event listener to show the collapsed content inside the element
barContainer.addEventListener("click", (e) => {
    if (e.target.className.includes("info-bar__icon")) {
        e.target.classList.toggle("info-bar__icon--open");
        e.target.parentNode.nextElementSibling.classList.toggle("info-bar__content--open");
    }
})