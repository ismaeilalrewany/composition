import serviceData from "./json/service-cards.js";
import createServiceCard from "./components/service-card.js";

import customerData from "./json/customer-cards.js";
import createCustomerCard from "./components/customer-card.js";

import projectData from "./json/project-cards.js";
import createProjectCard from "./components/project-card.js";

import sectionCardsHandler from "./helpers/section-cards-handler.js";

// work with service section and cards
const serviceSection = document.querySelector(".service");
const serviceCardsSection = document.querySelector(".service .service-cards");

sectionCardsHandler(serviceSection, serviceData, (index) => {
  const {id, title, description, svg, link, created_at} = serviceData.cards[index];
  serviceCardsSection.append(createServiceCard(id, title, description, svg, link, created_at));
});

// work with customer section and cards
const customerSection = document.querySelector(".customer");
const customerCardsSection = document.querySelector(".customer .customer-cards");

sectionCardsHandler(customerSection, customerData, (index) => {
  const {id, image, fullname, description, link, created_at} = customerData.cards[index];
  customerCardsSection.append(createCustomerCard(id, image, fullname, description, link, created_at));
});

// work with project section and cards
const projectSection = document.querySelector(".project");
const projectCardsSection = document.querySelector(".project .project-cards");

sectionCardsHandler(projectSection, projectData, (index) => {
  const {id, image, alt, link, created_at} = projectData.cards[index];
  projectCardsSection.append(createProjectCard(id, image, alt, link, created_at));
});