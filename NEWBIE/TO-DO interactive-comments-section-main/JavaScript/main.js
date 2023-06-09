import { sectionAddComentary } from "./card/commentary.js";
import { comentarios, currentUser } from "./comments.js";
import { renderComments } from "./renderComments.js";
comentarios.forEach(renderComments);

const contentHome = document.getElementById("content-home");
const youProfile = sectionAddComentary(
  currentUser.image.png,
  currentUser.username,
  false
);
contentHome.append(youProfile);
