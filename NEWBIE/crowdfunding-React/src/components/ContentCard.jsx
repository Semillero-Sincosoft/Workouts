import { CardExplication } from "./CardExplication";
import { DataCard } from "./data/DataCard";

export const ContentCard = () => {
  return (
    <section className="content-cards">
      <CardExplication />
      <DataCard />
    </section>
  );
};
