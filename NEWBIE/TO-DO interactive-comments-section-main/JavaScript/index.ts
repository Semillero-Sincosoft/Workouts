import { renderComments } from "./renderComments.js";
import { commentLocal } from "./module/infoLocalStorage.js";
import { showMyProfile } from "./youProfile.js";
import { deleteCommentary } from "./funcionality/DeleteComment.js";
commentLocal.comments.map((comentario:string) => renderComments(comentario));
showMyProfile();
deleteCommentary();
