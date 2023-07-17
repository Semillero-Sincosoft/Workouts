import { profile } from "./data/data";

export const ContentNetworks = () => {
  return (
    <section className="num">
      <article>
        <h1 className="follow">{profile.SocialNetworkInformation.followers}</h1>
        <p className="description">Followers</p>
      </article>
      <article className="like">
        <h1>{profile.SocialNetworkInformation.likes}</h1>
        <p className="description">Likes</p>
      </article>
      <article className="photo">
        <h1>{profile.SocialNetworkInformation.photo}</h1>
        <p className="description">Photo</p>
      </article>
    </section>
  );
};
