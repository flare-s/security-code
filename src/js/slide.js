// function that determnes the functionality of the carousel
const slide = () => {
    const slides = Array.from(document.querySelectorAll("[data-slide]"));
    const slider = document.querySelector("[data-slider]");
    const indicators = Array.from(document.querySelectorAll(".carousel__indicator"));
    

    let ind = 0;
    let slide = slides.length - 1;
     
    // we use the compute var to get the margin value of each slide item to add it to the width
    const compute = window.getComputedStyle(slides[ind]);
    setInterval(() => {
        // setting the new indicator and moving to the next slide item if it's not the last one, and if it's the last return to the first item
            ind = (ind < slide) ? ind + 1 : 0;
            document.querySelector(".carousel__indicator--selected").classList.remove("carousel__indicator--selected");
            indicators[ind].classList.add("carousel__indicator--selected");
            slider.style.transform = `translateX(-${(slides[ind].clientWidth + parseInt(compute.getPropertyValue("margin-left")) + parseInt(compute.getPropertyValue("margin-right"))) * ind}px)`;
    }, 4000);

    // changing the slide when clicking on one of the indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", (e) => {
                ind = index;
                document.querySelector(".carousel__indicator--selected").classList.remove("carousel__indicator--selected");
                e.target.classList.add("carousel__indicator--selected");
                slider.style.transform = `translateX(-${(slides[ind].clientWidth + parseInt(compute.getPropertyValue("margin-left")) +  parseInt(compute.getPropertyValue("margin-right"))) * ind}px)`;
            
        })
    })
}
slide();

