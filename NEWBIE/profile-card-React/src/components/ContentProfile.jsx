import { ContentNetworks } from "./ContentNetworks";
import ImgCard from "./ImgCard";
import { TextContent } from "./TextContent";

export const ContentProfile = () => {
  return (
    <main className="perfil">
      <section className="container">
        <ImgCard route={"./src/assets/images/bg-pattern-card.svg"} />
        <TextContent />
        <ContentNetworks />
      </section>
    </main>
  );
};
