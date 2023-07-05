import { modalDelete, modalHtml } from "../ui/modal.js";
import local from "../module/localStorage.js";

export const deleteLocal = (id) => {
  local.delete("comentarios", id);
};
export const deleteCommentary = () => {
  const modal = modalDelete();
  $(modal.cancel).on("click", () => {
    $(modalHtml).toggleClass("hidden");
    const deleteId = $(modalHtml).attr("idEliminar");
    deleteLocal(deleteId);
    $(`#${deleteId}`).remove()
  });
  $(modal.btnNoCancel).on("click", () => {
    $(modalHtml).toggleClass("hidden");
  });
};
