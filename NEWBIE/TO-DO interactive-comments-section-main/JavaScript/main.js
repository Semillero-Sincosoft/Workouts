import { renderComments } from "./renderComments.js";
import { commentLocal } from "./module/infoLocalStorage.js";
import { mostrarMiPerfil } from "./youProfile.js";
import { deleteCommentary } from "./funcionality/funtionDeleteComment.jsc";
commentLocal.comments.map((comentario) => renderComments(comentario));
mostrarMiPerfil();
deleteCommentary();
