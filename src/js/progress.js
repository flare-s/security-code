import "intersection-observer";

// const progressBars = Array.from(document.querySelectorAll("[data-progress]"));
//progress bar intersection observer options
const progressBarsOptions = {
    threshold: [0.1 ,0.2]
}

// setting an intersection observer
export const progressObserver = new IntersectionObserver((entries, progressObserver) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.15) {

               
                let counter = 0;
                

                // increase the progress bar and stop observing the elements after reaching the defined target
                function frame() {
                    const target = entry.target.getAttribute("data-progress-width");

                    //stopping the interval function when the target is reached
                    if ( counter == target) {
                        clearInterval(id); 
                        progressObserver.unobserve(entry.target);
                     } else if ( counter < target ) {
                        counter += 1;
                        entry.target.style.width = `${counter}%`;
                        entry.target.querySelector("[data-progress-percentage]").textContent = `${counter}%`; 
                    }
                    
                }
                // run the frame function untill the specified outcome is reached
                const id = setInterval(frame, 5);
                
                
            
        } 
    })
}, progressBarsOptions);

// run the intersection observer on the elements selected
// progressBars.forEach(progress => progressObserver.observe(progress));
