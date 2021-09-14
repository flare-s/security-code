// const loaderWrapper = document.querySelector(".loader-wrapper");
// const wrapper = document.querySelector(".wrapper");

// loader on the load and after the page loaded removing it from the page
export  const load = (wrapper, content) => {
     window.addEventListener("load", () => {
    wrapper.parentNode.removeChild(wrapper);
    content.style.visibility = "visible";
    content.style.opacity = "1";
    })
}