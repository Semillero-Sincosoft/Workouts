import { ContentProfile } from "./ContentProfile";

export const DescriptionCard = () => {
  return (
    <section className="content-escrito flex-direction-column">
      <div className="title">
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
      </div>
      <div className="escrito">
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
      </div>
        <ContentProfile />
    </section>
  );
};
