
import { ImgProfile } from "./data/img/imgProfile";
import { profile } from "./data/data-profile";

export const PersonaInfo = () => {
  return (
    <section className="content">
        <ImgProfile/>
      <div className="victor">
        <h1 className="name">
          {profile.user.name}
          <span className="year">{profile.user.age}</span>
        </h1>
        <p className="form">{profile.user.city}</p>
      </div>
    </section>
  );
};
