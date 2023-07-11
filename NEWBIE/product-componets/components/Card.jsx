import "../src/estilos.css"
import Ilustration from "./Ilustration";
import TextContent from "./TextContent";
import Cost from "./Cost";
import Button from "./Button";
const Card = () => {
  return (
    <section className="flex content-perfume">
      <Ilustration />
      <div className="flex main-content">
        <TextContent />
        <Cost />
        <Button />
      </div>
    </section>
  );
};

export default Card;
