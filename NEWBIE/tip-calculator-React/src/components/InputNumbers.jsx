export const InputNumbers = ({ titleInput, imageIcon, id }) => {
  return (
    <article className="content-bill">
      <p>{titleInput}</p>
      <div className="bill">
        <img src={imageIcon} alt="" />
        <input className="add" type="number" placeholder="0" id={id}></input>
      </div>
    </article>
  );
};
