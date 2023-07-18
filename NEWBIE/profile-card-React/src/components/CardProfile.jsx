import { ContentNetworks } from "./ContentNetworks";
import { PersonaInfo } from "./PersonaInfo";
import { BackgroundCard } from "./data/img/BackgroundCard";

export const CardProfile = () => {
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
