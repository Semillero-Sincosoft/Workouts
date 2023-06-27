import { sectionAddComentary } from "../card/commentary.js";
import acciones from "../data/acciones.js";
import { commentLocal } from "../module/infoLocalStorage.js";
import { modalHtml } from "../ui/modal.js";
import { textUpdate } from "./UpdateComment.js";

export const validationReplies = (card, comentario, containerCard) => {
  $(card.replyButton).on("click", () => {
    const addReply = sectionAddComentary(
      commentLocal.currentUser.image.png,
      comentario.user.username,
      acciones.reply,
      comentario,
      containerCard
    );
    $(containerCard).append(addReply);
  });

  $(card.delete).on("click", () => {
    console.log("EVENTO DEL DELETE");
    $(modalHtml).toggleClass("hidden");
    $(modalHtml).attr("idEliminar", card.id);
  });

  $(card.edit).on("click", () => {
    // const texarea = createTextareaComment();
    // const btnUpdate = createBtn();
    const update = textUpdate();
    $(`#content-id${card.id}`).html(update);

    console.log("EVENTO DEL EDIT");
  });
};
