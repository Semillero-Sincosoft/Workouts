import { ContentCard } from "./components/ContentCards";
import TextContent from "./components/TextContent";
import "./four-card.css";

function App() {
  return (
    <section>
      <header className="encabezado flex-and-direction">
        <TextContent
          textTitle={"Reliable, efficient delivery"}
          textSubtitle={"Powered by Technology"}
          textParagraph={
            "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful"
          }
        />
      </header>
      <section className="content">
        <ContentCard
          calssCard={"card-1"}
          titleCard={"Supervisor"}
          textCard={" Monitors activity to identify project roadblocks"}
          img={"./src/assets/images/icon-supervisor.svg"}
        />
        <ContentCard
          calssCard={"card-2"}
          titleCard={"Team Builder"}
          textCard={
            "scans our talent network to create the optimal team for your project"
          }
          img={"./src/assets/images/icon-team-builder.svg"}
        />
        <ContentCard
          calssCard={"card-4"}
          titleCard={"Calculator"}
          textCard={
            "Uses data from past projects to provide better delivery estimates"
          }
          img={"./src/assets/images/icon-calculator.svg"}
        />
      </section>
    </section>
  );
}

export default App;
