const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".case-card");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle("active", item === button));
    cards.forEach((card) => {
      const tags = card.dataset.tags || "";
      const visible = filter === "all" || tags.includes(filter);
      card.classList.toggle("hidden", !visible);
    });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".case-card, .service-grid article, .process-grid div").forEach((item) => {
  observer.observe(item);
});
