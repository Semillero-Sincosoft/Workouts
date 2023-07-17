import SvgShoppingCart from "./imgs/SvgShoppingCart";
const ButtonCard = () => {
  return (
    <>
      <button className="flex align-justify btn-cart">
        <SvgShoppingCart />
        <span> Add to cart </span>
      </button>
    </>
  );
};

export default ButtonCard;
