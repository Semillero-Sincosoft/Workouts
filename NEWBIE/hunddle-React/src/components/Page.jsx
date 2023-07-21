import { ListFooter } from "./ListFooter";
import { ContentNetworks } from "./ContentNetworks";
import { ContactContainer } from "./ContactContainer";
import { ModalContent } from "./ModalContent";
import HeaderPage from "./HeaderPage";
import CardsInfoData from "./Data/CardsInfoData";
import "../hubdle.css";

export const Page = () => {
  return (
    <main className="container flex-and-direction">
          <HeaderPage />
      <div className="content-written flex-and-direction">
        <CardsInfoData />
      </div>
      <footer>
        <section className="content-footer">
          <ContactContainer />
          <article className="list">
            <ListFooter text1="About Us" text2="What We Do" text3="FAQ" />
            <ListFooter text1="Career" text2="Blog" text3="Contact Us" />
          </article>
          <ContentNetworks />
        </section>
        <ModalContent />
      </footer>
    </main>
  );
};

