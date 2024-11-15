const createServiceCard = (id, title, description, svg, link, created_at) => {
  const cardDiv = document.createElement("div");
  const cardHeaderDiv = document.createElement("div");
  const svgDiv = document.createElement("div");
  const header = document.createElement("h3");
  const cardBodyDiv = document.createElement("div");

  cardDiv.classList.add("service-card", id);
  cardHeaderDiv.classList.add("card-header");
  svgDiv.classList.add("svg-icon");
  header.classList.add("heading-3");
  cardBodyDiv.classList.add("card-body");

  svgDiv.innerHTML = svg;
  header.textContent = title;
  cardHeaderDiv.append(svgDiv, header);

  cardBodyDiv.innerHTML = `
  <p class="card-description">${description}</p>
  <a href="${link}" class="readmore">Read More...</a>`;

  cardDiv.append(cardHeaderDiv, cardBodyDiv);
  return cardDiv;
};

export default createServiceCard;