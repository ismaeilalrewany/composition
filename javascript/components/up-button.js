const upButtonHandler = (modalUpButton, upButton) => {
  addEventListener("scroll", () => {
    if (scrollY + innerHeight > innerHeight) {
      modalUpButton.classList.add("show");
  
      upButton.addEventListener("click", (event) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    } else {
      modalUpButton.classList.remove("show");
    }
  });
};

export default upButtonHandler;