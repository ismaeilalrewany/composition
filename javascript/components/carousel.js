const carousel = (id, imageSm, imageMd, imageLg, created_at, totalCards, activeIndex) => {
  const carouselInner = document.createElement("picture");
  const carouselControl = document.createElement("ul");

  carouselInner.classList.add("carousel-inner", id);
  carouselControl.className = "carousel-control";

  carouselInner.innerHTML = `
    <source media="(min-width: 1200px)" srcset="${imageLg}" loading="lazy">
    <source media="(min-width: 784px)" srcset="${imageMd}" loading="lazy">
    <img src="${imageSm}" loading="lazy" alt="Carousel Responsive Image">`;

  for (let i = 0; i < totalCards; i++) {
    const li = document.createElement("li");
    li.classList.add("button", activeIndex === i? "active" : null);
    li.setAttribute("data-index", i);
    carouselControl.append(li);
  }

  return {carouselInner, carouselControl};
}

export default carousel;