import { ContentContact } from "./ContentContact";
import { ListFooter } from "./ListFooter";
import { ImageLocation } from "./images/ImageLocation";
import { ImagePhone } from "./images/ImagePhone";
import { ImageGmail } from "./images/ImageGmail";
import { ImageFacebook } from "./images/ImageFacebook";
import { ImageInstagram } from "./images/ImageInstagram";
import { ImageTwitter } from "./images/ImageTwitter";

export const Page = () => {
  return (
    <main className="container flex-and-direction">
      <footer>
        <section className="content-footer">
          <article className="contact-us flex-and-direction">
            <ContentContact
              imageContact={<ImageLocation />}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
            <ContentContact
              imageContact={<ImagePhone />}
              text="+1-543-123-4567"
            />
            <ContentContact
              imageContact={<ImageGmail />}
              text="example@huddle.com"
            />
          </article>
          <article className="list">
            <ListFooter text1="About Us" text2="What We Do" text3="FAQ" />
            <ListFooter text1="Career" text2="Blog" text3="Contact Us" />
          </article>
          <article className="content-networks">
            <ImageFacebook />
            <ImageInstagram />
            <ImageTwitter />
          </article>
        </section>
      </footer>
    </main>
  );
};
