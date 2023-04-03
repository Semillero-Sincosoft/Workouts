const contentHome = document.createElement('main');
contentHome.classList.add('content-home');
document.body.append(contentHome);

const contentElement = document.createElement('section');
contentElement.classList.add("content-element");
contentHome.append(contentElement);

const contentPr = document.createElement('article');
contentPr.classList.add('content-pr');
contentElement.append(contentPr);

const header = document.createElement('header');
header.classList.add('content-title');
contentPr.append(header);

const h1Header = document.createElement('h1');
h1Header.textContent = "10,000+ of our users love our products.";
header.append(h1Header);

const pHeader = document.createElement('p');
pHeader.textContent = "We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.";
header.append(pHeader);

const contentStats = document.createElement('article');
contentStats.classList.add("content-stats");
contentPr.append(contentStats);

const statFirst = document.createElement("article");
statFirst.classList.add("stat", "first");
contentStats.append(statFirst);

const starFirst = document.createElement('picture');
starFirst.classList.add("star");
statFirst.append(starFirst);

const imgOneFirst = document.createElement("img");
imgOneFirst.src = "images/icon-star.svg"
starFirst.append(imgOneFirst)

const imgTwoFirst = document.createElement("img");
imgTwoFirst.src = "images/icon-star.svg";
starFirst.append(imgTwoFirst);

const imgThreeFirst = document.createElement("img");
imgThreeFirst.src = "images/icon-star.svg";
starFirst.append(imgThreeFirst);

const imgFourFirst = document.createElement("img");
imgFourFirst.src = "images/icon-star.svg";
starFirst.append(imgFourFirst);

const imgFiveFirst = document.createElement("img");
imgFiveFirst.src = "images/icon-star.svg";
starFirst.append(imgFiveFirst);

const h3First = document.createElement("h3");
h3First.textContent = "Rated 5 Stars in Reviews";
statFirst.append(h3First);

const statSecond = document.createElement("article");
statSecond.classList.add("stat", "second");
contentStats.append(statSecond);

const starSecond = document.createElement("picture");
starSecond.classList.add("star");
statSecond.append(starSecond);

const imgOneSecond = document.createElement("img");
imgOneSecond.src = "images/icon-star.svg";
starSecond.append(imgOneSecond);

const imgTwoSecond = document.createElement("img");
imgTwoSecond.src = "images/icon-star.svg";
starSecond.append(imgTwoSecond);

const imgThreeSecond = document.createElement("img");
imgThreeSecond.src = "images/icon-star.svg";
starSecond.append(imgThreeSecond);

const imgFourSecond = document.createElement("img");
imgFourSecond.src = "images/icon-star.svg";
starSecond.append(imgFourSecond);

const imgFiveSecond = document.createElement("img");
imgFiveSecond.src = "images/icon-star.svg";
starSecond.append(imgFiveSecond);

const h3Second = document.createElement("h3");
h3Second.textContent = "Rated 5 Stars in Report Guru";
statSecond.append(h3Second)

const statThird = document.createElement("article");
statThird.classList.add("stat", "third");
contentStats.append(statThird);

const starThird = document.createElement("picture");
starThird.classList.add("star");
