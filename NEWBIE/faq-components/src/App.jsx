import ImgCard from "./components/ImgCard";
import TitleCard from "./components/TitleCard";
import DropDownCard from "./components/DropDownCard";
import "./estilos.css";
function App() {
  return (
    <main className="container">
      <section className="content-1">
        <ImgCard
          classImg={"img-woman"}
          route={"./src/assets/images/illustration-woman-online-mobile.svg"}
        />
        <div className="content-shadow"></div>
      </section>
      <section className="content-2">
        <TitleCard classTitle={"title"} text={"FAQ"} />
        <DropDownCard
          classDetails={"content-2-details"}
          classSummary={"content-2-details-summary"}
          textSummary={"How many team members can I invite?"}
          classImg={"flecha"}
          route={"./src/assets/images/icon-arrow-down.svg"}
          classTextDetails={"content-2-details-parrafo"}
          textDetails={
            "you can invite up to 2 additional users on the free plan.there is no limit on team members for the premium plan."
          }
          classHr={"content2-line"}
        />
        <DropDownCard
          classDetails={"content-2-details"}
          classSummary={"content-2-details-summary"}
          textSummary={"What is the maximum file upload size?"}
          classImg={"flecha"}
          route={"./src/assets/images/icon-arrow-down.svg"}
          classTextDetails={"content-2-details-parrafo"}
          textDetails={
            "no more than 2GB.all files in your account must fit your allotted storage space"
          }
          classHr={"content2-line"}
        />
        <DropDownCard
          classDetails={"content-2-details"}
          classSummary={"content-2-details-summary"}
          textSummary={"How do I reset my password?"}
          classImg={"flecha"}
          route={"./src/assets/images/icon-arrow-down.svg"}
          classTextDetails={"content-2-details-parrafo"}
          textDetails={
            'Click "forgot password?" from the login page or "change password"from your profile page. a reset link will be emailed to you.'
          }
          classHr={"content2-line"}
        />
        <DropDownCard
          classDetails={"content-2-details"}
          classSummary={"content-2-details-summary"}
          textSummary={"Can I cancel my subscription?"}
          classImg={"flecha"}
          route={"./src/assets/images/icon-arrow-down.svg"}
          classTextDetails={"content-2-details-parrafo"}
          textDetails={
            "Yes! Send us a messages and we´ll process your request no questions asked."
          }
          classHr={"content2-line"}
        />
           <DropDownCard
          classDetails={"content-2-details"}
          classSummary={"content-2-details-summary"}
          textSummary={"Do you provide additional support?"}
          classImg={"flecha"}
          route={"./src/assets/images/icon-arrow-down.svg"}
          classTextDetails={"content-2-details-parrafo"}
          textDetails={
            "Chat and email support is avalable 24/7. Phone lines are open during normal business hours."
          }
          classHr={"content2-line"}
        />
      </section>
    </main>
  );
}

export default App;
