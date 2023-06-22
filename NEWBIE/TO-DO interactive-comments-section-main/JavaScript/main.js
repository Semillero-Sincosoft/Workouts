import { renderComments } from "./renderComments.js";
import { commentLocal } from "./infoLocalStorage.js";
import { mostrarMiPerfil } from "./youProfile.js";
import { deleteCommentary } from "./funtionDeleteComment.js";
commentLocal.comments.map((x) => renderComments(x));
mostrarMiPerfil();
deleteCommentary();
