import { createElement } from "./utilities-ui.js";
export const createComment = (comentarioPr) => {
  const idComment = comentarioPr.id;
  const contentText = comentarioPr.content;
  const scoreCard = comentarioPr.score;
  const timeAgo = comentarioPr.createdAt;
  const img = comentarioPr.user.image.png;
  const username = comentarioPr.user.username;

  const card = createElement("article", "content-card");

  const contentLikes = createElement("aside");
  card.append(contentLikes);

  // contenedor comentario
  const comment = createElement("section", "content-comment");
  card.append(comment);

  //Contenedor de encabezado del comentario
  const contentTitleComment = createElement("article", "content-title-card");
  comment.append(contentTitleComment);

  //contenedor usuario
  const contentUser = createElement("div", "content-user");
  contentTitleComment.append(contentUser);

  //información usuario
  const photoUser = createElement("img");
  photoUser.src = img;
  contentUser.append(photoUser);

  const nameUser = createElement("h2");
  nameUser.textContent = username;
  contentUser.append(nameUser);

  const createdAt = createElement("p");
  createdAt.textContent = timeAgo;
  contentUser.append(createdAt);

  const contentHome = document.getElementById("content-home");
  contentHome.append(card);
  // contenedor de botón para likes
};
//id,p,timeAgo,score,img,username
