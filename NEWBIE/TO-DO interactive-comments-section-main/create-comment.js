import { createElement } from "./utilities-ui.js";
export const createComment = (comentarioPr) => {
  const idComment = comentarioPr.id;
  const contentText = comentarioPr.content;
  const scoreCard = comentarioPr.score;
  const timeAgo = comentarioPr.createdAt;
  const img = comentarioPr.user.image.png;
  const username = comentarioPr.user.username;

  const card = createElement("article", "content-card");
  card.setAttribute("id",idComment)

  const contentLikes = createElement("aside");
  card.append(contentLikes);
  
  const likes = createElement("div","button-likes");
  contentLikes.append(likes);

  const iconPlus = createElement("img","icon-plus");
  iconPlus.src = "images/icon-plus.svg";
  likes.append(iconPlus);

  const scoreLikes = createElement("h2","score-likes");
  scoreLikes.textContent = scoreCard;
  likes.append(scoreLikes)

  const iconMinus = createElement("img","icon-minus");
  iconMinus.src = "images/icon-minus.svg";
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

  const createdAt = createElement("p","text-title-comment");
  createdAt.textContent = timeAgo;
  contentUser.append(createdAt);

  const contentHome = document.getElementById("content-home");
  contentHome.append(card);
  // contenedor de botón reply
  const contentReply = createElement("div","content-reply")
  contentTitleComment.append(contentReply)
  //contenido botón reply
  const iconReply = createElement("img","icon-reply");
  iconReply.src = "images/icon-reply.svg"
  // iconReply.addEventListener("mouseover",function(){
  //   iconReply.fill.style.color ="hsl(239, 57%, 85%)"
  // })
  // iconReply.addEventListener("mouseout",function(){
  //   iconReply.style.color = ""
  // })
  contentReply.append(iconReply)

  const textReply = createElement("p","text-reply");
  textReply.textContent = "Reply";
  contentReply.append(textReply);
  //información usuario

  //texto Comentario
  const textComment = createElement("p","text-comment")
  textComment.textContent = contentText
  comment.append(textComment)
  //texto Comentario
};

