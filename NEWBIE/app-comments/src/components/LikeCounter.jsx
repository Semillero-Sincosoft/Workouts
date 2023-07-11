import IconPlus from "/src/assets/svg/icon-plus.svg";
import IconMinus from "/src/assets/svg/icon-minus.svg";

export const LikeCounter = ({ score }) => {
  return (
    <aside>
      <div className="button-likes">
        <button className="icon-plus">
          <img src={IconPlus} className="icon-plus-svg" alt="" />
        </button>
        <h2 className="score-likes">{score}</h2>
        <button className="icon-minus">
          <img src={IconMinus} className="icon-minus-svg" alt="" />
        </button>
      </div>
    </aside>
  );
};
