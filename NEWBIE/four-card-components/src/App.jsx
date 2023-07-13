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
          titleCard={"Team Builder"}
          textCard={
            "scans our talent network to create the optimal team for your project"
          }
          img={"./src/assets/images/icon-team-builder.svg"}
        />
        <ContentCard
          calssCard={"card-2"}
          titleCard={"Team Builder"}
          textCard={
            "scans our talent network to create the optimal team for your project"
          }
          img={"./src/assets/images/icon-team-builder.svg"}
        />
        <ContentCard calssCard={"card-3"} />
      </section>
    </section>
  );
}

export default App;
