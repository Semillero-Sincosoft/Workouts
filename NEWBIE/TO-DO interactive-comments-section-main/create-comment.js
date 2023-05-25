import { createElement } from "./utilities-ui.js";
export const createComment = (comentarioPr) => {
  const idComment = comentarioPr.id;
  const contentText = comentarioPr.content;
  const scoreCard = comentarioPr.score;
  const timeAgo = comentarioPr.createdAt;
  const img = comentarioPr.user.image.png;
  const username = comentarioPr.user.username;

  const card = createElement("article", "content-card");
  card.setAttribute("id", idComment);

  const contentLikes = createElement("aside");
  card.append(contentLikes);

  const likes = createElement("div", "button-likes");
  contentLikes.append(likes);

  const iconPlus = createElement("div", "icon-plus");
  iconPlus.innerHTML = '<svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>'
  likes.append(iconPlus);

  const scoreLikes = createElement("h2", "score-likes");
  scoreLikes.textContent = scoreCard;
  likes.append(scoreLikes);

  const iconMinus = createElement("div", "icon-minus");
  iconMinus.innerHTML = '<svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg>'
  likes.append(iconMinus);

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

  const createdAt = createElement("p", "text-title-comment");
  createdAt.textContent = timeAgo;
  contentUser.append(createdAt);

  const contentHome = document.getElementById("content-home");
  contentHome.append(card);
  // contenedor de botón reply
  const contentReply = createElement("div", "content-reply");
  contentTitleComment.append(contentReply);
  //contenido botón reply
  const iconReply = createElement("div", "icon-reply");
  iconReply.innerHTML =
    '<svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>';

  contentReply.append(iconReply);

  const textReply = createElement("p", "text-reply");
  textReply.textContent = "Reply";
  contentReply.append(textReply);
  //información usuario

  //texto Comentario
  const textComment = createElement("p", "text-comment");
  textComment.textContent = contentText;
  comment.append(textComment);
  //texto Comentario
};
