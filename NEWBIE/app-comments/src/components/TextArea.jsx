export const TextArea = () => {
  return (
    <section id="content-text-area">
      <div className="content-card">
        <aside className="avatar-commentary">
          <img src="./src/assets/avatars/image-juliusomo.png" alt="" />
        </aside>
        <section className="content-textarea">
          <textarea
            className="written"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="agregar comentario"
          ></textarea>
        </section>
        <article className="btn-commentary">
          <button>SEND</button>
        </article>
      </div>
    </section>
  );
};
