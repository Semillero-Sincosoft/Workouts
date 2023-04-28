const container = document.createElement("main");
container.classList.add("container", "flex-and-direction");
const head = document.createElement("header");
head.classList.add("head", "flex-justify-and-item");
const bgHeader = document.createElement("div");
bgHeader.classList.add("bg-header", "flex-and-direction");
const menu = document.createElement("article");
menu.classList.add("menu");
const logo = document.createElement("img");
logo.src = "images/logo.svg";
logo.classList.add("logo");
const login = document.createElement("button");
// login.classList.add("login");
// login.textContent = "Try It Free";

const contentDescrption = document.createElement("section");
contentDescrption.classList.add("content-description");
const description = document.createElement("article");
description.classList.add("description", "flex-and-direction");
const titleDescription = document.createElement("h1");
titleDescription.textContent = "Build The Community Your Fans Will Love";
const writteDescription = document.createElement("p");
writteDescription.textContent =
  " Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.";
const ButtonGet = document.createElement("button");
ButtonGet.classList.add("get-started", "buttons");
ButtonGet.textContent = "Get Started For Free";
const ContentImg = document.createElement("article");
ContentImg.classList.add("content-img");
const imgDescription = document.createElement("img");
imgDescription.src = "images/illustration-mockups.svg";
imgDescription.classList.add("img-written");
//comienza  las cartas
const contentWritten = document.createElement("div");
contentWritten.classList.add("content-written", "flex-and-direction");

const contentCards = document.createElement("section");
contentCards.classList.add("content-cards", "card-1");
const cards = document.createElement("article");
cards.classList.add("cards", "flex-and-direction");
const h2Card = document.createElement("h2");
h2Card.textContent = "Grow Together";
const writtenGrow = document.createElement("p");
writtenGrow.textContent =
  "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.";
const contentImgTogether = document.createElement("article");
contentImgTogether.classList.add("content-img-together");
const imgTogether = document.createElement("img");
imgTogether.classList.add("imgs");
imgTogether.src = "images/illustration-grow-together.svg";

const contentCardFlow = document.createElement("section");
contentCardFlow.classList.add("content-cards", "card-2");
const cards2 = document.createElement("article");
cards2.classList.add("cards", "flex-and-direction");
const h2Flow = document.createElement("h2");
h2Flow.textContent = "Flowing Conversations";
const writtenFlow = document.createElement("p");
writtenFlow.textContent =
  "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.";
const contentImgFlow = document.createElement("article");
contentCardFlow.classList.add("content-img-together");
const imgFlow = document.createElement("img");
imgFlow.classList.add("imgs");
imgFlow.src = "images/illustration-flowing-conversation.svg";

const contentCardUsers = document.createElement("section");
contentCardUsers.classList.add("content-cards", "card-3");
const cards3 = document.createElement("article");
cards3.classList.add("cards", "flex-and-direction");
const h2User = document.createElement("h2");
h2User.textContent = "Your Users";
const writtenUsers = document.createElement("p");
writtenUsers.textContent =
  "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.";
const contentImgUsers = document.createElement("article");
contentImgUsers.classList.add("content-img-together");
const imgUsers = document.createElement("img");
imgUsers.classList.add("imgs");
imgUsers.src = "images/illustration-your-users.svg";

const community = document.createElement("section");
community.classList.add("community");
const contentCommunity = document.createElement("article");
contentCommunity.classList.add("content-community", "flex-justify-and-item");
const titleCommunity = document.createElement("h2");
titleCommunity.textContent = "Ready To Build Your Community?";
const btnCommunity = document.createElement("button");
btnCommunity.classList.add("get-started-2", "buttons");
btnCommunity.textContent = "Get Started For Free";
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

const ul = document.createElement("ul");
ul.classList.add("flex-and-direction");
const liAbout = document.createElement("li");
liAbout.textContent = "About Us";
const liWhat = document.createElement("li");
liWhat.textContent = "What We Do";
const liFaq = document.createElement("li");
liFaq.textContent = "FAQ";

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
facebook.src="images/facebook (4).svg"
const twitter =document.createElement("img")
twitter.src="images/gorjeo (2).svg"
const instagram =document.createElement("img")
instagram.src="images/instagram (3).svg"
head.appendChild(bgHeader);
menu.appendChild(logo);
// menu.appendChild(login);
menu.appendChild(document.createElement("button")).classList.add("login");
window.addEventListener("load", () => {
  const loginBtn = document.querySelector(".login");
  loginBtn.textContent = "Try It Free";
});
head.appendChild(contentDescrption);
contentDescrption.appendChild(description);
description.appendChild(titleDescription);
description.appendChild(writteDescription);
contentDescrption.appendChild(ContentImg);
ContentImg.appendChild(imgDescription);

contentWritten.appendChild(contentCards);
contentCards.appendChild(cards);
cards.appendChild(h2Card);
cards.appendChild(writtenGrow);
contentCards.appendChild(contentImgTogether);
contentImgTogether.appendChild(imgTogether);

contentCardFlow.appendChild(cards2);
cards2.appendChild(h2Flow);
cards2.appendChild(writtenFlow);
contentCardFlow.appendChild(contentImgFlow);
contentImgFlow.appendChild(imgFlow);

contentCardUsers.appendChild(cards3);
cards3.appendChild(h2User);
cards3.appendChild(writtenUsers);
contentCardUsers.appendChild(contentImgUsers);
contentImgUsers.appendChild(imgUsers);

community.appendChild(contentCommunity);
contentCommunity.appendChild(titleCommunity);
contentCommunity.appendChild(btnCommunity);

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
contentList.appendChild(ul);
ul.appendChild(liAbout);
ul.appendChild(liWhat);
ul.appendChild(liFaq);

contentList.appendChild(ulBlog);
ulBlog.appendChild(liCareer);
ulBlog.appendChild(liBLog);
ulBlog.appendChild(liContact);

contentFooter.appendChild(contentNetworks)
contentNetworks.appendChild(facebook)
contentNetworks.appendChild(twitter)
contentNetworks.appendChild(instagram)
//nodos principales
container.appendChild(head);
bgHeader.appendChild(menu);
bgHeader.appendChild(contentDescrption);
container.appendChild(contentWritten);
container.appendChild(contentCardFlow);
container.appendChild(contentCardUsers);
footer.appendChild(community);
container.appendChild(footer);
document.body.appendChild(container);
