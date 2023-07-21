import { ListFooter } from "./ListFooter";
import { ContentNetworks } from "./ContentNetworks";
import { ContactContainer } from "./ContactContainer";

export const Page = () => {
  return (
    <main className="container flex-and-direction">
      <footer>
        <section className="content-footer">
          <ContactContainer />
          <article className="list">
            <ListFooter text1="About Us" text2="What We Do" text3="FAQ" />
            <ListFooter text1="Career" text2="Blog" text3="Contact Us" />
          </article>
          <ContentNetworks />
        </section>
      </footer>
    </main>
  );
};
