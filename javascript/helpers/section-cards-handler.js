export default function sectionCardsHandler(section, data, callback) {
  if (data.metadata.total_cards > 0) {
    for (let i = 0; i < data.metadata.total_cards; i++) callback(i);
  } else section.remove();
};