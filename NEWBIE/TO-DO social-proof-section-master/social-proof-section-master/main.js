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
statThird.append(starThird);

const imgOneThird = document.createElement("img");
imgOneThird.src = "images/icon-star.svg";
starThird.append(imgOneThird);

const imgTwoThird = document.createElement("img");
imgTwoThird.src = "images/icon-star.svg";
starThird.append(imgTwoThird);

const imgThreeThird = document.createElement("img");
imgThreeThird.src = "images/icon-star.svg";
starThird.append(imgThreeThird);

const imgFourThird = document.createElement("img");
imgFourThird.src = "images/icon-star.svg";
starThird.append(imgFourThird);

const imgFiveThird = document.createElement("img");
imgFiveThird.src = "images/icon-star.svg";
starThird.append(imgFiveThird);

const h3Third = document.createElement("h3");
h3Third.textContent = "Rated 5 Stars in BestTech";
statThird.append(h3Third);

const contentComents = document.createElement("article");
contentComents.classList.add("content-coments");
contentElement.append(contentComents);

const cardOne = document.createElement("article");
cardOne.classList.add("card", "one");
contentComents.append(cardOne);

const contentUserCardOne = document.createElement("article");
contentUserCardOne.classList.add("content-user");
cardOne.append(contentUserCardOne);

const imgCardOne = document.createElement("img");
imgCardOne.src = "images/image-colton.jpg"
contentUserCardOne.append(imgCardOne);

const h3CardOne = document.createElement("h3");
h3CardOne.textContent = "Colton Smith";
contentUserCardOne.append(h3CardOne);

const brCardOne = document.createElement("br");
h3CardOne.append(brCardOne);

const spanCardOne = document.createElement("span");
spanCardOne.textContent = "Verified Buyer";
h3CardOne.append(spanCardOne);

const contentTextCardOne = document.createElement("article");
contentTextCardOne.classList.add("content-text");
cardOne.append(contentTextCardOne);

const pCardOne = document.createElement("p");
pCardOne.textContent = '" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "';
contentTextCardOne.append(pCardOne);

const cardTwo = document.createElement('article');
cardTwo.classList.add("card","two");
contentComents.append(cardTwo)

const contentUserCardTwo = document.createElement("article");
contentUserCardTwo.classList.add("content-user");
cardTwo.append(contentUserCardTwo);

const imgCardTwo = document.createElement("img");
imgCardTwo.src = "images/image-irene.jpg";
contentUserCardTwo.append(imgCardTwo);

const h3CardTwo = document.createElement("h3");
h3CardTwo.textContent = "Irene Roberts";
contentUserCardTwo.append(h3CardTwo);

const brCardTwo = document.createElement("br");
h3CardTwo.append(brCardTwo);

const spanCardTwo = document.createElement("span");
spanCardTwo.textContent = "Verified Buyer";
h3CardTwo.append(spanCardTwo);

const contentTextCardTwo = document.createElement("article");
contentTextCardTwo.classList.add("content-text");
cardTwo.append(contentTextCardTwo);

const pCardTwo = document.createElement("p");
pCardTwo.textContent = '" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "';
contentTextCardTwo.append(pCardTwo);

const cardThree = document.createElement("article");
cardThree.classList.add("card","three");
contentComents.append(cardThree);

const contentUserCardThree = document.createElement("article");
contentUserCardThree.classList.add("content-user");
cardThree.append(contentUserCardThree);

const imgCardThree = document.createElement("img");
imgCardThree.src = "images/image-anne.jpg";
contentUserCardThree.append(imgCardThree);

const h3CardThree = document.createElement("h3");
h3CardThree.textContent = "Irene Roberts";
contentUserCardThree.append(h3CardThree);

const brCardThree = document.createElement("br");
h3CardThree.append(brCardThree);

const spanCardThree = document.createElement("span");
spanCardThree.textContent = "Verified Buyer";
h3CardThree.append(spanCardThree);

const contentTextCardThree = document.createElement("article");
contentTextCardThree.classList.add("content-text");
cardThree.append(contentTextCardThree);

const pCardThree = document.createElement("p");
pCardThree.textContent = '" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "';
contentTextCardThree.append(pCardThree);