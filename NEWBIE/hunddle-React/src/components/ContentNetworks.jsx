import { ImageFacebook } from "./images/ImageFacebook";
import { ImageInstagram } from "./images/ImageInstagram";
import { ImageTwitter } from "./images/ImageTwitter";

export const ContentNetworks = () => {
  return (
    <article className="content-networks">
      <ImageFacebook />
      <ImageInstagram />
      <ImageTwitter />
    </article>
  );
};
