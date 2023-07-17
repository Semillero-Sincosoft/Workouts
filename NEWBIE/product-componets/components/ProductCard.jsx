import "../src/estilos.css";
import ProductImg from "./imgs/ProductImg";
import TextContent from "./TextContent";
import ProductCost from "./ProductCost";
import ButtonCard from "./ButtonCard";
const ProductCard = () => {
  return (
    <section className="flex content-perfume">
      <ProductImg />
      <div className="flex main-content">
        <TextContent />
        <ProductCost />
        <ButtonCard />
      </div>
    </section>
  );
};

export default ProductCard;
