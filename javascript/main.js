import data from "./json/service-cards.js";
import createServiceCard from "./components/service-card.js";

const serviceCardsSection = document.querySelector(".service .service-cards");

data.cards.forEach(card => {
  serviceCardsSection.append(createServiceCard(card.id, card.title, card.description, card.svg, card.link, card.created_at));
});