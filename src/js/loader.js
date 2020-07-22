const loaderWrapper = document.querySelector(".loader-wrapper");
const wrapper = document.querySelector(".wrapper");

// loader on the load and after the page loaded removing it from the page
window.addEventListener("load", () => {
    loaderWrapper.parentNode.removeChild(loaderWrapper);
    wrapper.style.visibility = "visible";
    wrapper.style.opacity = "1";
})