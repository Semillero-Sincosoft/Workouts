import { ContentContact } from "./ContentContact";
import { ImageGmail } from "./images/ImageGmail";
import { ImageLocation } from "./images/ImageLocation";
import { ImagePhone } from "./images/ImagePhone";

export const ContactContainer = () => {
  return (
    <article className="contact-us flex-and-direction">
      <ContentContact
        imageContact={<ImageLocation />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />
      <ContentContact imageContact={<ImagePhone />} text="+1-543-123-4567" />
      <ContentContact imageContact={<ImageGmail />} text="example@huddle.com" />
    </article>
  );
};
