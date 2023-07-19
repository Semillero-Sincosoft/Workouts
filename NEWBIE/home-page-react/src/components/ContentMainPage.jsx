import BtnReadMore from "./BtnReadMore"
const ContentMainPage = ({img,title,text}) => {
  return (
    <>
      {img}
      <section className="info">
        <article className="title">
          <h1>{title}</h1>
        </article>
        <article className="written">
          <p>{text}</p>
          <BtnReadMore />
        </article>
      </section>
    </>
  )
}

export default ContentMainPage
