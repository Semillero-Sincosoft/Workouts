import { ContentDescription } from "./ContentDescription";
import ContentImage from "./ContentImage";

export const ContentCard = () => {
  return (
    <section className="flex content-perfume">
      <ContentImage />
      <ContentDescription />
    </section>
  );
};
