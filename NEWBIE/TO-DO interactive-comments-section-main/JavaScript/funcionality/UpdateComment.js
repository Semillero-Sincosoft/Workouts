import { createBtn, createElement } from "../utilities-ui.js";

export const textUpdate = () => {
  const contentUpdate = createElement("section", "update");
  const text = createElement("textarea", "update-textarea");
  const btnUpdate = createBtn("UPDATE");
  contentUpdate.append(text, btnUpdate);
  return contentUpdate;
};
