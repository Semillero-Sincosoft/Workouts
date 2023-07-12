import { ContentImage } from "./ContentImage";
import { ContentNerworks } from "./ContentNerworks";

export const ContentProfile = () => {
  return (
    <section className="content-boton">
      <ContentImage
        route={"./src/assets/images/avatar-michelle.jpg"}
        classe={"logo"}
        classeImg={"img-logo"}
      />
      <div className="name">
        <h3>Michelle Appleton</h3>
        <p className="jun">28 Jun 2020</p>
      </div>

      <svg
        className="share-img"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="13"
      >
        <path
          fill="#6E8098"
          d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
        />
      </svg>
      <ContentNerworks />
    </section>
  );
};
