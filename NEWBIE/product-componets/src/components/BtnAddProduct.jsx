import SvgShoppingCart from "./imgs/SvgShoppingCart";
const BtnAddProduct = () => {
  return (
    <>
      <button className="flex align-justify btn-cart">
        <SvgShoppingCart />
        <span> Add to cart </span>
      </button>
    </>
  );
};

export default BtnAddProduct;
