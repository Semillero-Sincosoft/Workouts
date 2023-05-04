import { createTag } from "./createElements.js";

import { contentCards, createCard } from "./cards.js";
import {
  header,
  head,
  bgHeader,
  menu,
  logo,
  contentDescrption,
} from "./header.js";
const container = createTag("main", ["container", "flex-and-direction"]);

/**SECTIONS DE CARDS */
const contentCardTogether = document.createElement("section");
contentCardTogether.classList.add("content-cards", "card-1");

const contentCardFlow = document.createElement("section");
contentCardFlow.classList.add("content-cards", "card-2");

const contentCardUsers = document.createElement("section");
contentCardUsers.classList.add("content-cards", "card-3");

const contentHead = header(
  "Build The Community Your Fans Will Love",
  " Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion."
);
//comienza  las cartas

const contentWritten = createTag("div", [
  "content-written",
  "flex-and-direction",
]);
const together1 = createCard(
  "Grow Together",
  "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
  "images/illustration-grow-together.svg",
  contentCards
);

const cardFLow = createCard(
  "Flowing Conversations",
  "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
  "images/illustration-flowing-conversation.svg",
  contentCardFlow
);

const cardUsers = createCard(
  "Your Users",
  "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
  "images/illustration-your-users.svg",
  contentCardUsers
);

const contentCommunity = createTag("article", [
  "content-community",
  "flex-justify-and-item",
]);

const createRegister = (h2, button) => {
  const title = createCard("h2", [""]);
  title.textContent = h2;
  const btn = createTag("button", ["get-started", "buttons"]);
  btn.textContent = button;

  return contentCommunity;
};


// const titleCommunity = document.createElement("h2");
// titleCommunity.textContent = "Ready To Build Your Community?";
// const btnCommunity = document.createElement("button");
// btnCommunity.classList.add("get-started-2", "buttons");
// btnCommunity.textContent = "Get Started For Free";
//comienza footer

const footer = document.createElement("footer");
const contentFooter = document.createElement("section");
contentFooter.classList.add("content-footer");
const contactUs = document.createElement("article");
contactUs.classList.add("contact-us", "flex-and-direction");
const logoWhite = document.createElement("img");
logoWhite.classList.add("logo-white");
logoWhite.src = "images/logo-white.svg";

const contentInfo = document.createElement("div");
contentInfo.classList.add("content-info");
const info = document.createElement("div");
info.classList.add("info");
const iconInfo = document.createElement("div");
iconInfo.classList.add("icons-info");
const svgiconInfo = document.createElement("img");
svgiconInfo.src = "images/icon-location.svg";
const writtenFooter = document.createElement("p");
writtenFooter.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

const infoContact = document.createElement("div");
infoContact.classList.add("content-info");
const contact = document.createElement("div");
contact.classList.add("info");
const contentPhone = document.createElement("div");
contentPhone.classList.add("icons-info");
const phone = document.createElement("img");
phone.src = "images/icon-phone.svg";
const numContact = document.createElement("p");
numContact.textContent = "+1-543-123-4567";

const infoGmail = document.createElement("div");
infoGmail.classList.add("contentf-info");
const gmail = document.createElement("div");
gmail.classList.add("info");
const contentGmail = document.createElement("div");
contentGmail.classList.add("icons-info");
const gmailSvg = document.createElement("img");
gmailSvg.src = "images/icon-email.svg";
const writtenGmail = document.createElement("p");
writtenGmail.textContent = "example@huddle.com";

const contentList = document.createElement("article");
contentList.classList.add("list");

const textLi = ["About Us", "What We Do", "FAQ"];

function crearEL() {
  const ul = document.createElement("ul");
  ul.classList.add("flex-and-direction");

  contentList.append(ul);
  for (let i = 0; i < textLi.length; i++) {
    const li = document.createElement("li");

    li.textContent = textLi[i];
    ul.append(li);
  }

  return ul;
}

const list = crearEL();

const ulBlog = document.createElement("ul");
ulBlog.classList.add("flex-and-direction");
const liCareer = document.createElement("li");
liCareer.textContent = "Career";
const liBLog = document.createElement("li");
liBLog.textContent = "Blog";
const liContact = document.createElement("li");
liContact.textContent = "Contact Us";

const contentNetworks = document.createElement("article");
contentNetworks.classList.add("content-networks");
const facebook = document.createElement("img");
facebook.src = "images/facebook (4).svg";
const twitter = document.createElement("img");
twitter.src = "images/gorjeo (2).svg";
const instagram = document.createElement("img");
instagram.src = "images/instagram (3).svg";
head.appendChild(bgHeader);
menu.appendChild(logo);
// menu.appendChild(login);
menu.appendChild(document.createElement("button")).classList.add("login");
window.addEventListener("load", () => {
  const loginBtn = document.querySelector(".login");
  loginBtn.textContent = "Try It Free";
});
head.append(contentHead);

contentWritten.appendChild(contentCards);
contentCards.appendChild(together1);

contentCardFlow.append(cardFLow);

contentCardUsers.appendChild(cardUsers);

// contentCommunity.appendChild(titleCommunity);
// contentCommunity.appendChild(btnCommunity);

footer.appendChild(contentFooter);
contentFooter.appendChild(contactUs);
contactUs.appendChild(logoWhite);
contactUs.appendChild(contentInfo);
contentInfo.appendChild(info);
info.appendChild(iconInfo);
iconInfo.appendChild(svgiconInfo);
info.appendChild(writtenFooter);

contactUs.appendChild(infoContact);
infoContact.appendChild(contact);
contact.appendChild(contentPhone);
contentPhone.appendChild(phone);
contact.appendChild(numContact);

contactUs.appendChild(infoGmail);
infoGmail.appendChild(gmail);
gmail.appendChild(contentGmail);
contentGmail.appendChild(gmailSvg);
gmail.appendChild(writtenGmail);

contentFooter.appendChild(contentList);
contentList.appendChild(list);

contentList.appendChild(ulBlog);
// ulBlog.appendChild(liCareer);
// ulBlog.appendChild(liBLog);
// ulBlog.appendChild(liContact);

contentFooter.appendChild(contentNetworks);
contentNetworks.appendChild(facebook);
contentNetworks.appendChild(twitter);
contentNetworks.appendChild(instagram);
//nodos principales
container.append(
  head,
  contentWritten,
  contentCardFlow,
  contentCardUsers,
  footer
);
bgHeader.appendChild(menu);
bgHeader.appendChild(contentDescrption);
footer.appendChild(contentCommunity);
document.body.appendChild(container);
