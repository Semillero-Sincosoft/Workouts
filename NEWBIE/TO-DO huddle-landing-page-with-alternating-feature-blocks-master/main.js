//header
const contentHome = document.createElement("section");
contentHome.classList.add("content-home");
document.body.appendChild(contentHome);

const header = document.createElement("header");
contentHome.appendChild(header);

const content = document.createElement("article");
content.classList.add("content");
header.appendChild(content);

const logoHeader = document.createElement("img");
logoHeader.src = "images/logo.svg";
logoHeader.classList.add("logo-header");
content.appendChild(logoHeader);

const button = document.createElement("button");
content.appendChild(button);

const p = document.createElement("p");
p.textContent = "Try It Free";
button.appendChild(p);

const contentInfoHeader = document.createElement("article");
contentInfoHeader.classList.add("content-info-header");
header.appendChild(contentInfoHeader);

const textHeader = document.createElement("article");
textHeader.classList.add("text-header");
contentInfoHeader.appendChild(textHeader);

const h1 = document.createElement("h1");
h1.textContent = "Build The Community Your Fans Will Love";
const textParagr = document.createElement("p");
textParagr.textContent =
  "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.";
textHeader.append(h1, textParagr);

const firstButton = document.createElement("button");
firstButton.classList.add("firstButton");
textHeader.appendChild(firstButton);

const buttonTextSign = document.createElement("p");
buttonTextSign.classList.add("button-text-sign");
buttonTextSign.textContent = "Get Started For Free";
firstButton.appendChild(buttonTextSign);

const picture = document.createElement("picture");
contentInfoHeader.appendChild(picture);

const imgHeader = document.createElement("img");
imgHeader.classList.add("img-header");
imgHeader.src = "images/illustration-mockups.svg";
picture.appendChild(imgHeader);
//header

//main
const main = document.createElement("main");
contentHome.appendChild(main);

const contentCards = document.createElement("section");
contentCards.classList.add("content-cards");
main.appendChild(contentCards);

const cardOne = document.createElement("article");
cardOne.classList.add("card", "one");
contentCards.append(cardOne);

const pictureCardOne = document.createElement ('picture');
cardOne.append(pictureCardOne);

const imgCardOne = document.createElement('img');
imgCardOne.classList.add("img-card");
imgCardOne.src = 'images/illustration-grow-together.svg';
pictureCardOne.append(imgCardOne);

const contentTextCardOne = document.createElement('article');
contentTextCardOne.classList.add("content-text-card");
cardOne.append(contentTextCardOne);

const h3CardOne = document.createElement('h3');
h3CardOne.textContent = 'Grow Together';
contentTextCardOne.append(h3CardOne);

const pCardOne = document.createElement('p');
pCardOne.textContent = " Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
contentTextCardOne.append (pCardOne);

const cardTwo = document.createElement('article');
cardTwo.classList.add('card', 'two');
contentCards.append(cardTwo);

const pictureCardTwo = document.createElement('picture');
cardTwo.append(pictureCardTwo);

const imgCardTwo = document.createElement('img');
imgCardTwo.classList.add('img-card');
imgCardTwo.src = 'images/illustration-flowing-conversation.svg';
pictureCardTwo.append(imgCardTwo);

const contentTextCardTwo = document.createElement('article');
contentTextCardTwo.classList = 'content-text-card';
cardTwo.append(contentTextCardTwo);

const h3CardTwo = document.createElement('h3');
h3CardTwo.textContent = 'Flowing Conversations';
contentTextCardTwo.append(h3CardTwo);

const pCardTwo = document.createElement('p');
pCardTwo.textContent = "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.";
contentTextCardTwo.append(pCardTwo);

const cardThree = document.createElement('article');
cardThree.classList.add('card', 'three');
contentCards.append(cardThree);

const pictureCardThree = document.createElement('picture');
cardThree.append(pictureCardThree);

const imgCardThree = document.createElement('img');
imgCardThree.classList = "img-card";
imgCardThree.src = 'images/illustration-your-users.svg';
pictureCardThree.append(imgCardThree);

const contentTextCardThree = document.createElement('article');
contentTextCardThree.classList = 'content-text-card';
cardThree.append(contentTextCardThree);

const h3CardThree = document.createElement ('h3');
h3CardThree.textContent = 'Your Users';
contentTextCardThree.append(h3CardThree);

const pCardThree = document.createElement('p');
pCardThree.textContent = " It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.";
contentTextCardThree.append(pCardThree);
//main

//footer
const footer = document.createElement('footer');
contentHome.append(footer);

const contentAbove = document.createElement('section');
contentAbove.classList.add('content-above');
footer.append(contentAbove);

const h3ContentAbove = document.createElement('h3');
h3ContentAbove.textContent = "Ready To Build Your Community?";
contentAbove.append(h3ContentAbove);

const buttonContentAbove = document.createElement('button');
contentAbove.append(buttonContentAbove);

const pContentAbove = document.createElement('p');
pContentAbove.textContent = "Get Started For Free";
buttonContentAbove.append(pContentAbove);


const contentContact = document.createElement('section');
contentContact.classList.add("content-contact");
footer.append(contentContact);

const infoContact = document.createElement('article');
infoContact.classList.add('info-contact');
contentContact.append(infoContact);

const contentLogoFooter = document.createElement('article');
contentLogoFooter.classList.add ('content-logo-footer');
infoContact.append(contentLogoFooter);

const logoFooter = document.createElement('img');
logoFooter.classList.add ('logo-footer');
logoFooter.src = "images/logo-white.svg";
contentLogoFooter.append(logoFooter);

const contactInfo = document.createElement('article');
contactInfo.classList = 'contact-info';
infoContact.append(contactInfo);

const locationContent = document.createElement('article');
locationContent.classList = "location";
contactInfo.append(locationContent);

const iconLocation = document.createElement('img');
iconLocation.classList.add ("icon-location")
iconLocation.src = "images/icon-location.svg";
locationContent.append(iconLocation);

const pLocation = document.createElement('p');
pLocation.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
locationContent.append(pLocation);

const phone = document.createElement('article');
phone.classList.add("phone");
contactInfo.append(phone)

const imgPhone = document.createElement('img');
imgPhone.classList.add("icon-phone");
imgPhone.src = "images/icon-phone.svg";
phone.append(imgPhone);

const pPhone = document.createElement('p');
pPhone.textContent = "+1-543-123-4567";
phone.append(pPhone);

const email = document.createElement('article');
email.classList.add('email');
contactInfo.append(email);

const imgEmail = document.createElement('img');
imgEmail.classList.add("icon-email");
imgEmail.src = "images/icon-email.svg"
email.append(imgEmail);

const pEmail = document.createElement('p');
pEmail.textContent = "example@huddle.com";
email.append(pEmail);

const companyInfo = document.createElement('article');
companyInfo.classList = "company-info";
contentContact.append(companyInfo);

const column1 = document.createElement('article');
column1.classList.add('column-1');
companyInfo.append(column1);

const aboutUs = document.createElement('p');
aboutUs.textContent = "About Us";
column1.append(aboutUs);

const whatWeDo = document.createElement('p');
whatWeDo.textContent = "What We Do";
column1.append(whatWeDo);

const faq = document.createElement('p');
faq.textContent = "FAQ";
column1.append(faq);

const column2 = document.createElement('article')
column2.classList.add("column-2");
companyInfo.append(column2);

const career = document.createElement('p');
career.textContent = "Career";
column2.append(career);

const blog = document.createElement('p');
blog.textContent = 'Blog';
column2.append(blog);

const pContact = document.createElement('p');
pContact.textContent = "Contact";
column2.append(pContact);


const contentSocial = document.createElement('article');
contentSocial.classList.add("content-social");
contentContact.append(contentSocial);

const icons = document.createElement('article');
icons.classList.add("icons")
contentSocial.append(icons);

const contentIconFacebook = document.createElement('img');
contentIconFacebook.src = "images/facebook (4) (1).svg"
contentIconFacebook.classList.add("icon");
icons.append(contentIconFacebook);

const contentIconTwitter = document.createElement('img');
contentIconTwitter.src = "images/gorjeo (2) (1).svg";
contentIconTwitter.classList.add("icon");
icons.append(contentIconTwitter);

const contentIconInstagram = document.createElement('img');
contentIconInstagram.src = "images/instagram (3) (1).svg";
contentIconInstagram.classList.add("icon");
icons.append(contentIconInstagram);

//footer