const container = document.createElement("main");
container.classList.add("container");
const content = document.createElement("section");
content.classList.add("content", "flex-and-direction");
const title = document.createElement("header");
title.classList.add("title");
const products = document.createElement("article");
products.classList.add("products", "flex-and-direction");
const titleProducts = document.createElement("h1");
titleProducts.textContent = "10,000+ of our users love our products.";
const writtenTitle = document.createElement("p");
writtenTitle.textContent =
  "We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.";

const contentStars = document.createElement("section");
contentStars.classList.add("reviews", "flex-and-direction");

const contentStar1 = document.createElement("section");
contentStar1.classList.add("content-star-1", "content-stars");

const stars = document.createElement("article");
stars.classList.add("stars");

const starReview1 = document.createElement("img");
starReview1.src = "images/icon-star.svg";

const starReview2 = document.createElement("img");
starReview2.src = "images/icon-star.svg";

const starReview3 = document.createElement("img");
starReview3.src = "images/icon-star.svg";

const starReview4 = document.createElement("img");
starReview4.src = "images/icon-star.svg";

const starReview5 = document.createElement("img");
starReview5.src = "images/icon-star.svg";

const contentWrittenStar = document.createElement("article");
writtenStars.classList.add("escrito-star");

const writtenStar = document.createElement("span");
writtenStar.textContent = "Rated 5 Stars in Reviews";

products.appendChild(titleProducts);
products.appendChild(writtenTitle);

contentStars.appendChild(contentStar1);
contentStar1.appendChild(stars);
stars.appendChild(starReview1);
stars.appendChild(starReview2);
stars.appendChild(starReview3);
stars.appendChild(starReview4);
stars.appendChild(starReview5);

//nodos pricipales
document.body.appendChild(container);
container.appendChild(content);
content.appendChild(title);
title.appendChild(products);
title.appendChild(contentStars);
