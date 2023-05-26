import ui from "../../utilities-ui.js";

import icons from "../svgs.js";

export const createCommentHeader = (user, timeAgo) => {
  const header = ui.htmlElement("article", "content-title-card");

  const avatar = ui.avatar(user);
  const createdAt = ui.htmlElement("p", "text-title-comment");
  createdAt.textContent = timeAgo;

  const iconButton = ui.buttonIcon(icons.reply, "Reply");

  header.append(avatar, createdAt, iconButton);

  return header;
};
