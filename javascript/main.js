import carouselData from "./json/carousel-data.js";
import CreateCarousel from "./components/carousel.js";
import carouselHandler from "./helpers/carousel-handler.js";

import serviceData from "./json/service-cards.js";
import createServiceCard from "./components/service-card.js";

import customerData from "./json/customer-cards.js";
import createCustomerCard from "./components/customer-card.js";

import projectData from "./json/project-cards.js";
import createProjectCard from "./components/project-card.js";

import blogData from "./json/blog-cards.js";
import createBlogCard from "./components/blog-card.js";

import sectionCardsHandler from "./helpers/section-cards-handler.js";

import upButtonHandler from "./components/up-button.js";

// work with carousel
const carousel = document.querySelector(".carousel");
const totalCards = carouselData.metadata.total_cards;

carouselHandler(carousel, carouselData, totalCards, (count) => {
  const {id, imageSm, imageMd, imageLg, created_at} = carouselData.inner[count];
  const {carouselInner, carouselControl} = CreateCarousel(id, imageSm, imageMd, imageLg, created_at, totalCards, count);
  carousel.replaceChildren(carouselInner, carouselControl);
  return carouselControl;
});

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

// work with blog secion and cards
const blogSection = document.querySelector(".footer .blog");
const blogCardsSection = document.querySelector(".footer .blog .blog-cards");

sectionCardsHandler(blogSection, blogData, (index) => {
  const {id, image, title, description, created_at} = blogData.cards[index];
  blogCardsSection.append(createBlogCard(id, image, title, description, created_at));
});

// work with up button modal
const modalUpButton = document.querySelector(".modal");
const upButton = document.querySelector(".modal .up");

upButtonHandler(modalUpButton, upButton);