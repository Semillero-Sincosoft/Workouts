export const InputValueNum = ({ titleInput, imageIcon, id }) => {
  return (
    <article className="content-bill">
      <p>{titleInput}</p>
      <div className="bill">
        {imageIcon}
        <input className="add" type="number" placeholder="0" id={id}></input>
      </div>
    </article>
  );
};
