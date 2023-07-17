import { ContentNetworks } from "./ContentNetworks";
import { PersonaInfo } from "./PersonaInfo";
import { BackgroundCard } from "./data/img/BackgroundCard";

export const ContentProfile = () => {
  return (
    <main className="perfil">
      <section className="container">
        <BackgroundCard />
        <PersonaInfo />
        <ContentNetworks />
      </section>
    </main>
  );
};
