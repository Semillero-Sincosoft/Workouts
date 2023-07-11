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
contentStar1.classList.add("content-stars-1", "content-stars");

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
contentWrittenStar.classList.add("escrito-star");

const writtenStar = document.createElement("span");
writtenStar.textContent = "Rated 5 Stars in Reviews";

const contentStar2 = document.createElement("section");
contentStar2.classList.add("content-stars-2", "content-stars");

const stars2 = document.createElement("article");
stars2.classList.add("stars");

const starRated = document.createElement("img");
starRated.src = "images/icon-star.svg";

const starRated2 = document.createElement("img");
starRated2.src = "images/icon-star.svg";

const starRated3 = document.createElement("img");
starRated3.src = "images/icon-star.svg";

const starRated4 = document.createElement("img");
starRated4.src = "images/icon-star.svg";

const starRated5 = document.createElement("img");
starRated5.src = "images/icon-star.svg";

const contentWrittenRated = document.createElement("article");
contentWrittenRated.classList.add("escrito-star");

const writtenRated = document.createElement("span");
writtenRated.textContent = "Rated 5 Stars in Report Guru";

const contentStar3 = document.createElement("section");
contentStar3.classList.add("content-stars-3", "content-stars");

const stars3 = document.createElement("article");
stars3.classList.add("stars");

const starBest = document.createElement("img");
starBest.src = "images/icon-star.svg";

const starBest2 = document.createElement("img");
starBest2.src = "images/icon-star.svg";

const starBest3 = document.createElement("img");
starBest3.src = "images/icon-star.svg";

const starBest4 = document.createElement("img");
starBest4.src = "images/icon-star.svg";

const starBest5 = document.createElement("img");
starBest5.src = "images/icon-star.svg";

const contentWrittenBest = document.createElement("article");
contentWrittenBest.classList.add("escrito-star");

const writtenBest = document.createElement("span");
writtenBest.textContent = "Rated 5 Stars in BestTech";

const cards = document.createElement("section");
cards.classList.add("cards");

const contentCards = document.createElement("article");
contentCards.classList.add("content-cards", "card-1");

const contentProfile = document.createElement("div");
contentProfile.classList.add("content-profile", "flex-and-direction");

const profile = document.createElement("div");
profile.classList.add("profile");

const contentImg = document.createElement("div");
contentImg.classList.add("img");
const colton = document.createElement("img");
colton.classList.add("imgs");
colton.src = "images/image-colton.jpg";

const coltonName = document.createElement("div");
coltonName.classList.add("names");
const titleName = document.createElement("h3");
titleName.textContent = "Colton Smith";
const subTitleName = document.createElement("h3");
subTitleName.classList.add("city");
subTitleName.textContent = "Verified Buyer";
const writtenColton = document.createElement("p");
writtenColton.textContent =
  "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!";

const contentCards2 = document.createElement("article");
contentCards2.classList.add("content-cards", "card-2");

const contentIrene = document.createElement("div");
contentIrene.classList.add("content-profile", "flex-and-direction");

const profile2 = document.createElement("div");
profile2.classList.add("profile");

const contentImgIrene = document.createElement("div");
contentImgIrene.classList.add("img");
const irene = document.createElement("img");
irene.classList.add("imgs");
irene.src = "images/image-irene.jpg";

const ireneName = document.createElement("div");
ireneName.classList.add("names");
const titleName2 = document.createElement("h3");
titleName2.textContent = "Irene Roberts";
const subTitleName2 = document.createElement("h3");
subTitleName2.classList.add("city");
subTitleName2.textContent = "Verified Buyer";
const writtenIrene = document.createElement("p");
writtenIrene.textContent =
  "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.";

const contentCards3 = document.createElement("article");
contentCards3.classList.add("content-cards", "card-3");

const contentAnne = document.createElement("div");
contentAnne.classList.add("content-profile", "flex-and-direction");

const profile3 = document.createElement("div");
profile3.classList.add("profile");

const contentImgAnne = document.createElement("div");
contentImgIrene.classList.add("img");
const anne = document.createElement("img");

anne.classList.add("imgs");
anne.src = "images/image-anne.jpg";

const anneName = document.createElement("div");
anneName.classList.add("names");
const titleName3 = document.createElement("h3");
titleName3.textContent = "Anne Wallace";
const subTitleName3 = document.createElement("h3");
subTitleName3.classList.add("city");
subTitleName3.textContent = "Verified Buyer";
const writtenAnne = document.createElement("p");
writtenAnne.textContent =
  "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!";

products.appendChild(titleProducts);
products.appendChild(writtenTitle);

contentStars.appendChild(contentStar1);
contentStar1.appendChild(stars);
stars.appendChild(starReview1);
stars.appendChild(starReview2);
stars.appendChild(starReview3);
stars.appendChild(starReview4);
stars.appendChild(starReview5);
contentStar1.appendChild(contentWrittenStar);
contentWrittenStar.appendChild(writtenStar);

contentStars.appendChild(contentStar2);
contentStar2.appendChild(stars2);
stars2.appendChild(starRated);
stars2.appendChild(starRated2);
stars2.appendChild(starRated3);
stars2.appendChild(starRated4);
stars2.appendChild(starRated5);
contentStar2.appendChild(contentWrittenRated);
contentWrittenRated.appendChild(writtenRated);

contentStars.appendChild(contentStar3);
contentStar3.appendChild(stars3);
stars3.appendChild(starBest);
stars3.appendChild(starBest2);
stars3.appendChild(starBest3);
stars3.appendChild(starBest4);
stars3.appendChild(starBest5);
contentStar3.appendChild(contentWrittenBest);
contentWrittenBest.appendChild(writtenBest);

cards.appendChild(contentCards);
contentCards.appendChild(contentProfile);
contentProfile.appendChild(profile);
profile.appendChild(contentImg);
contentImg.appendChild(colton);
profile.appendChild(coltonName);
coltonName.appendChild(titleName);
coltonName.appendChild(subTitleName);
contentProfile.appendChild(writtenColton);

cards.appendChild(contentCards2);
contentCards2.appendChild(contentIrene);
contentIrene.appendChild(profile2);
profile2.appendChild(contentImgIrene);
contentImgIrene.appendChild(irene);
profile2.appendChild(ireneName);
ireneName.appendChild(titleName2);
ireneName.appendChild(subTitleName2);
contentIrene.appendChild(writtenIrene);

cards.appendChild(contentCards3)
contentCards3.appendChild(contentAnne)
contentAnne.appendChild(profile3)
profile3.appendChild(contentImgAnne)
contentImgAnne.appendChild(anne)
profile3.appendChild(anneName)
anneName.appendChild(titleName3)
anneName.appendChild(subTitleName3)
contentAnne.appendChild(writtenAnne)




//nodos pricipales
document.body.appendChild(container);
container.appendChild(content);
content.appendChild(title);
title.appendChild(products);
title.appendChild(contentStars);
content.appendChild(cards);
