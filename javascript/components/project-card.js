const createProjectCard = (id, image, alt, link, created_at) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project-card", id);
  projectDiv.innerHTML = `<a href="${link}" target="_blank"><img src="${image}" alt="${alt}"></a>`;
  return projectDiv;
};

export default createProjectCard;