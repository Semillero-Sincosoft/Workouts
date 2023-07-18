import { profile } from "./data/data";

export const ContentNetworks = () => {
  return (
    <section className="num">
      <article>
        <h1>{profile.SocialNetworkInformation.followers}</h1>
        <p>Followers</p>
      </article>
      <article>
        <h1>{profile.SocialNetworkInformation.likes}</h1>
        <p>Likes</p>
      </article>
      <article>
        <h1>{profile.SocialNetworkInformation.photo}</h1>
        <p>Photo</p>
      </article>
    </section>
  );
};
