import ImgCard from "./ImgCard";
import { profile } from "./data/data";

export const TextContent = () => {
  return (
    <section className="content">
      <ImgCard
        route={"./src/assets/images/image-victor.jpg"}
        classTag={"img-perfil"}
      />
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
