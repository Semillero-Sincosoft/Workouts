import { createTagsCLass, createTags } from "./createElement.js";
export const content = createTagsCLass("section", ["content"]);
export const cards = (title, written, img, clas) => {
  const contentCards = createTagsCLass("div", [
    "columns",
    "flex-and-direction",
  ]);

  const content = createTagsCLass("section", ["cards"]);
  content.classList.add(clas);
  contentCards.append(content);
  const contentTitle = createTagsCLass("article", ["title-content"]);
  const title2 = createTags("h2");
  title2.textContent = title;
  contentTitle.append(title2);
  const contentWritten = createTags("p");
  contentWritten.textContent = written;

  const contentImg = createTagsCLass("article", ["img", "flex-and-direction"]);
  const img1 = createTags("img");
  img1.src = img;

  content.append(contentTitle, contentImg);

  contentTitle.appendChild(contentWritten);
  contentImg.appendChild(img1);

  return contentCards;
};
