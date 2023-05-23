const comentario1 = {
  id: 1,
  content:
    "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  createdAt: "1 month ago",
  score: 12,
  user: {
    image: {
      png: "./images/avatars/image-amyrobson.png",
      webp: "./images/avatars/image-amyrobson.webp",
    },
    username: "amyrobson",
  },
  replies: [],
};
function createComment(timeAgo, img, username) {
  
  const { timeAgo, img, username } = comentario1[contador];

  const contentHome = document.getElementById("content-home");
  const card = document.createElement("article");
  contentHome.append(card);
  // contenedor de botón para likes
  const contentLikes = document.createElement("aside");
  card.append(contentLikes);
  // contenedor comentario
  const comment = document.createElement("section");
  card.append(comment);
  //Contenedor de encabezado del comentario
  const contentTitleComment = document.createElement("article");
  comment.append(contentTitleComment);
  //contenedor usuario
  const contentUser = document.createElement("div");
  contentTitleComment.append(contentUser);
  //información usuario
  const photoUser = document.createElement("img");
  photoUser.url = img;

  const nameUser = document.createElement("h2");
  nameUser.textContent = username;

  const createdAt = document.createElement("p");
  createdAt.textContent = timeAgo;
}
//id,p,timeAgo,score,img,username

createComment(
  comentario1.createdAt,
  comentario1.user.image.png,
  comentario1.user.username
);
