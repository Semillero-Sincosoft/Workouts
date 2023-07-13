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
      <section className="content"></section>
    </section>
  );
}

export default App;
