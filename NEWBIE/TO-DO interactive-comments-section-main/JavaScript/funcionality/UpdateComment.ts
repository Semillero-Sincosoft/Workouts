import { createBtn, createElement } from "../utilities-ui.js";
import { replace } from "./validation.js";
import local from "../module/localStorage.js";
export const textUpdate = (texto, id) => {
  const contentUpdate = createElement("section", "update");
  const text = createElement("textarea", "update-textarea");
  text.textContent = texto;
  const btnUpdate = createBtn("UPDATE");
  $(btnUpdate).on("click", () => {
    const newTextUpdate = text.value;
    const textReplace = $("<p>", {
      class: "update",
    }).text(newTextUpdate);
    replace(id, textReplace);
    local.update("comentarios", id, "content", newTextUpdate);
  });
  contentUpdate.append(text, btnUpdate);
  return contentUpdate;
};
