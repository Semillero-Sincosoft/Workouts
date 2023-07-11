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
import {
  contact,
  footer,
  contentFooter,
  contactUs,
  logoWhite,
  contentList,
  list,
  contentNetworks,
  facebook,
  twitter,
  instagram,
} from "./footer.js";

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

// ======= registre card =======
const createRegister = (h2, button) => {
  const title = createTag("h2", [""]);
  title.textContent = h2;
  const btn = createTag("button", ["get-started", "buttons"]);
  btn.textContent = button;

  contentCommunity.append(title, btn);
  return btn;
};

const textRegister = createRegister(
  "Ready To Build Your Community?",
  "Get Started For Free"
);

const ubication = contact(
  "images/icon-location.svg",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
);

const numberContact = contact("images/icon-phone.svg", "+1-543-123-4567");

const gmail = contact("images/icon-email.svg", "example@huddle.com");

// aca esta la lista del footer

head.appendChild(bgHeader);
menu.appendChild(logo);

// menu.appendChild(login);

const loginBtn = document.createElement("button");
loginBtn.textContent = "Try It Free";
head.append(contentHead);
menu.appendChild(loginBtn).classList.add("login");

contentWritten.appendChild(contentCards);
contentCards.appendChild(together1);

contentCardFlow.append(cardFLow);

contentCardUsers.appendChild(cardUsers);

contentCommunity.appendChild(textRegister);

footer.appendChild(contentFooter);
contentFooter.appendChild(contactUs);
contactUs.append(logoWhite, ubication, numberContact, gmail);

contentFooter.appendChild(contentList);
contentList.appendChild(list);

contentFooter.appendChild(contentNetworks);
contentNetworks.append(facebook, twitter, instagram);

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
