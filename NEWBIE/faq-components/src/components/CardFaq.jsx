import ImgIllustration from "./img/ImgIllustration";
import TitleCard from "./TitleCard";
import CardQuestion from "./CardQuestion";
import "../estilos.css";
const CardFaq = () => {
  return (
    <>
      <main className="container">
        <section className="content-1">
          <ImgIllustration />
        </section>
        <section className="content-2">
          <TitleCard classTitle={"title"} text={"FAQ"} />
          <CardQuestion
            textSummary="How many team members can I invite?"
            textDetails="you can invite up to 2 additional users on the free plan.there is no limit on team members for the premium plan."
          />
          <CardQuestion
            textSummary="What is the maximum file upload size?"
            textDetails="no more than 2GB.all files in your account must fit your allotted storage space"
          />
          <CardQuestion
            textSummary="How do I reset my password?"
            textDetails='Click "forgot password?" from the login page or "change password"from your profile page. a reset link will be emailed to you.'
          />
          <CardQuestion
            textSummary="Can I cancel my subscription?"
            textDetails="Yes! Send us a messages and we´ll process your request no questions asked."
          />
          <CardQuestion
            textSummary="Do you provide additional support?"
            textDetails="Chat and email support is avalable 24/7. Phone lines are open during normal business hours."
          />
        </section>
      </main>
    </>
  );
};

export default CardFaq;
