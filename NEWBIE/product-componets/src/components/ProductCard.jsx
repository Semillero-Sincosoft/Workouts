import ProductImg from "./imgs/ProductImg";
import DescriptionProduct from "./DescriptionProduct";
import ProductCost from "./ProductCost";
import BtnAddProduct from "./BtnAddProduct";
const ProductCard = () => {
  return (
    <section className="flex content-perfume">
      <ProductImg />
      <div className="flex main-content">
        <DescriptionProduct />
        <ProductCost />
        <BtnAddProduct />
      </div>
    </section>
  );
};

export default ProductCard;
