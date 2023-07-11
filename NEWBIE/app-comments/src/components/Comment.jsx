import "../../styles/main.css";
import { ContentBodyCard } from "./CardBody";
import { CardHeader } from "./CardHeader";
import Likes from "./Likes";
export const Card = () => {
  return (
    <article className="content-card">
      <Likes />
      <section className="content-comment">
        <CardHeader />

        <ContentBodyCard  />
      </section>
    </article>
  );
};
