export default function carouselHandler(carousel, carouselData, totalCards, callback) {
  if (totalCards > 0) {
    let count = 0;
    let interval;
  
    // function to update carousel
    const updateCarousel = () => {
      const carouselControl = callback(count);
      count !== totalCards -1 ? count++ : count = 0;
  
      // change image manually
      if (totalCards > 1) {
        carouselControl.addEventListener("click", (event) => {
          count = +event.target.dataset.index;
          clearInterval(interval);
          updateCarousel();
          interval = setInterval(updateCarousel, 10000);
        });
      }
    };
  
    // show first slide immediately
    updateCarousel();
  
    // start interval for subsequent updates
    if (totalCards > 1) interval = setInterval(updateCarousel, 10000);
  } else {
    carousel.remove();
  }
}