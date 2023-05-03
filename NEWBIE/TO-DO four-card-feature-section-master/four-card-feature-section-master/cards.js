//funcion que crea etiquetas con clases
import { createTags } from "./createElement.js";
import { wrapperHeader } from "./header.js";
import { content, cards } from "./section.js";
const main = createTags("section");

//creacion de una funcion que crea tarjetas
export const header = wrapperHeader(
  "Reliable, efficient delivery",
  "Powered by Technology",
  "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful"
);

const supervisor = cards(
  "Supervisor",
  "Monitors activity to identify project roadblocks",
  "images/icon-supervisor.svg",
  "card-1"
);

const builder = cards(
  "Team Builder",
  "scans our talent network to create the optimal team for your project",
  "images/icon-team-builder.svg",
  "card-2"
);
const karma = cards(
  "Karma",
  "Regularly evaluates our talent to ensure quality",
  "images/icon-karma.svg",
  "card-3"
);
const calculator = cards(
  "Calculator",
  "Uses data from past projects to provide better delivery estimates",
  "images/icon-calculator.svg",
  "card-4"
);

main.append(header, content);
content.append(supervisor, builder, calculator);
builder.append(karma);
document.body.append(main);
