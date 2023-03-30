//header
const contentHome = document.createElement('section');
contentHome.classList.add('content-home');
document.body.appendChild(contentHome);

const header = document.createElement('header');
contentHome.appendChild(header);

const content = document.createElement('article');
content.classList.add('content');
header.appendChild(content);

const logoHeader = document.createElement('img');
logoHeader.src = 'images/logo.svg';
logoHeader.classList.add('logo-header');
content.appendChild(logoHeader);

const button = document.createElement('button');
content.appendChild(button);

const p = document.createElement('p');
p.textContent = "Try It Free";
button.appendChild(p);

const contentInfoHeader = document.createElement('article');
contentInfoHeader.classList.add('content-info-header');
header.appendChild(contentInfoHeader);

const textHeader = document.createElement('article');
textHeader.classList.add('text-header');
contentInfoHeader.appendChild(textHeader);

const h1 = document.createElement('h1');
h1.textContent = "Build The Community Your Fans Will Love";
const textParagr = document.createElement('p');
textParagr.textContent = 'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.';
textHeader.append(h1,textParagr);

const firstButton = document.createElement('button');
firstButton.classList.add('firstButton');
textHeader.appendChild(firstButton);

const buttonTextSign = document.createElement('p');
buttonTextSign.classList.add('button-text-sign');
buttonTextSign.textContent = "Get Started For Free";
firstButton.appendChild(buttonTextSign);

const picture = document.createElement('picture');
contentInfoHeader.appendChild(picture);

const imgHeader = document.createElement('img');
imgHeader.classList.add('img-header');
imgHeader.src = "images/illustration-mockups.svg";
picture.appendChild(imgHeader);
//header

//main
const main =  document.createElement('main');
contentHome.appendChild(main);


const contentCards = document.createElement('section');
contentCards.classList.add('content-cards');
main.appendChild(contentCards);


const cardOne = document.createElement('article');
cardOne.classList.add('card lone');
contentCards.append(cardOne);


//main