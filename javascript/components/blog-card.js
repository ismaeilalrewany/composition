const createBlogCard = (id, image, title, description, created_at) => {
  const blogFigure = document.createElement("figure");
  blogFigure.classList.add("blog-card", id);
  blogFigure.innerHTML = `
    <div class="picture">
      <img src="${image}" alt="Blog Image">
    </div>
    <figcaption class="blog-descriptoin">
      <h4 class="title">${title}</h4>
      <p class="card-description">${description}</p>
    </figcaption>
  `;
  return blogFigure;
};

export default createBlogCard;