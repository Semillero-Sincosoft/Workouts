import LogoPageHeader from "./Imgs/LogoPageHeader";
import IlustrationHeader from "./Imgs/IlustrationHeader";
import BtnTryFree from "./BtnTryFree";

const HeaderPage = () => {
  return (
    <header className="head flex-justify-and-item">
      <div className="bg-header flex-and-direction">
        <article className="menu">
          <LogoPageHeader />
          <BtnTryFree />
        </article>
        <section className="content-description">
          <article className="description flex-and-direction">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
          </article>
          <article className="content-img">
            <IlustrationHeader />
          </article>
        </section>
      </div>
    </header>
  );
};

export default HeaderPage;
