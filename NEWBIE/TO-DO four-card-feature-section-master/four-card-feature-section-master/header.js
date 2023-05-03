import { createTagsCLass, createTags } from "./createElement.js";
export const wrapperHeader = (title, subtitle, written) => {
  const head = createTagsCLass("header", ["encabezado", "flex-and-direction"]);
  const sectionHeader = createTagsCLass("section", ["title"]);
  const titleHeader = createTags("h1");
  const subtitleHeader = createTags("h2");
  const writtenHeader = createTags("p");

  titleHeader.textContent = title;
  subtitleHeader.textContent = subtitle;
  writtenHeader.textContent = written;
  head.append(sectionHeader);
  sectionHeader.append(titleHeader, subtitleHeader, writtenHeader);

  return head;
};
