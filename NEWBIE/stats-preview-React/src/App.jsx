import { TextContent } from "./components/TextContent";
import { ContentImage } from "./components/ContentImage";
import "./estilos.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="text-component">
          <TextContent
            classTitle={"title"}
            textTitle={`get insights that help your business grow.`}
            classText={"subtitle"}
            text={
              "Discover the benefits of data analytics and make better decisions regarding revenue, customer experenrience,and overall effciency"
            }
          />
          <div className="numbers">
            <div>
              <TextContent classTitle={'num'} classText={'letter-num'} textTitle={'10k'} text={'companies'} />
            </div>
            <div>
            <TextContent classTitle={'num'} classText={'letter-num'} textTitle={'314'} text={'templates'} />
            </div>
            <div>
            <TextContent classTitle={'num'} classText={'letter-num'} textTitle={'12m'} text={'queries'} />
            </div>
          </div>
        </div>
          <ContentImage />
      </div>
    </div>
  );
}

export default App;
