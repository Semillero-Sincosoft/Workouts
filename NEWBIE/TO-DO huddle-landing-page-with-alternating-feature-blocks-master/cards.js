// const contentCards = document.createElement("section");
// contentCards.classList.add("content-cards", "card-1");
// const cards = document.createElement("article");
// cards.classList.add("cards", "flex-and-direction");
// const h2Card = document.createElement("h2");
// h2Card.textContent = "Grow Together";
// const writtenGrow = document.createElement("p");
// writtenGrow.textContent =
//   "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.";
// const contentImgTogether = document.createElement("article");
// contentImgTogether.classList.add("content-img-together");
// const imgTogether = document.createElement("img");
// imgTogether.classList.add("imgs");
// imgTogether.src = "images/illustration-grow-together.svg";

// const car = (sub, wri, img) => {
//   const contentCards = createTag("section", ["content-cards", "card-1"]);
//   const cards = createTag("article", ["cards", "flex-and-direction"]);
//   contentCards.append(cards, contentImg);
//   const subtitle = createTag("h2");
//   subtitle.textContent = sub;
//   const writen = createTag("p");
//   writen.textContent = wri;

//   cards.append(subtitle, subtitle);
//   const contentImg = createTag("article", ["content-img-together"]);

//   const image = createImage(img);
//   contentImg.append(image);
//   return contentCards;
// };

// const cardFLow = car(
//   "Grow Together",
//   "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
//   "images/illustration-grow-together.svg"
// );

// const contentCardFlow = document.createElement("section");
// contentCardFlow.classList.add("content-cards", "card-2");
// const cards2 = document.createElement("article");
// cards2.classList.add("cards", "flex-and-direction");
// const h2Flow = document.createElement("h2");
// h2Flow.textContent = "Flowing Conversations";
// const writtenFlow = document.createElement("p");
// writtenFlow.textContent =
//   "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.";
// const contentImgFlow = document.createElement("article");
// contentCardFlow.classList.add("content-img-together");
// const imgFlow = document.createElement("img");
// imgFlow.classList.add("imgs");
// imgFlow.src = "images/illustration-flowing-conversation.svg";

// const contentCardUsers = document.createElement("section");
// contentCardUsers.classList.add("content-cards", "card-3");
// const cards3 = document.createElement("article");
// cards3.classList.add("cards", "flex-and-direction");
// const h2User = document.createElement("h2");
// h2User.textContent = "Your Users";
// const writtenUsers = document.createElement("p");
// writtenUsers.textContent =
//   "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.";
// const contentImgUsers = document.createElement("article");
// contentImgUsers.classList.add("content-img-together");
// const imgUsers = document.createElement("img");
// imgUsers.classList.add("imgs");
// imgUsers.src = "images/illustration-your-users.svg";

// const car = (content, subtitle, written, image) => {
//   const contentCards = createTag(content);

//   const contentImg = createTag("article", ["flex-and-direction"]);
//   // document.createElement("section");
//   // contentCards.classList.add("content-cards", "card-1");
//   const cards = createTag("article", ["cards", "content-img-together"]);
//   const subtitle = createTag("h2");

//   const writen = createTag("p");
//   writen.textContent = written;
//   subtitle.textContent = subtitle;
// };

  

const contentCards = createTag("section", ["content-cards", "card-1"]);
const car = (sub, wri, img) => {
  const cards = createTag("article", ["cards", "flex-and-direction"]);
  const subtitle = createTag("h2", []);
  subtitle.textContent = sub;
  const writen = createTag("p", []);
  writen.textContent = wri;

  cards.append(subtitle, subtitle);
  const contentIm = createTag("article", ["content-img-together"]);

  const image = createImage(img,);
  image.classList.add("imgs")
  contentIm.append(image);

  return cards;
};

const ca = car(
  "Grow Together",
  "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
  "images/illustration-grow-together.svg"
);
