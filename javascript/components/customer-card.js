const createCustomerCard = (id, image, fullname, description, link, created_at) => {
  const customerFigure = document.createElement("figure");
  customerFigure.classList.add("customer-card", id);
  customerFigure.innerHTML = `
    <div class="card-header">
      <img src="${image}" alt="Customer Picture">
    </div>
    <figcaption class="card-body">
      <p class="customer-name">
        <span class="title">Name:</span>
        <span class="fullname">${fullname}</span>
      </p>
      <p class="customer-opinion">${description}</p>
      <a href="${link}" class="profile">View Profile...</a>
    </figcaption>
  `;
  return customerFigure;
};

export default createCustomerCard;