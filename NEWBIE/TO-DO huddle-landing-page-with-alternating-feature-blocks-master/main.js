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


//footer