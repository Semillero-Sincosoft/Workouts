import IlustrationPage from "../Imgs/IlustrationPage";
import ContentMainPage from "../ContentMainPage";
export const DataPageMain = () => {
  const dataMain = [
    {
      id: 1,
      img: <IlustrationPage />,
      title: "The Bright Future of Web 3.0?",
      text: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
    },
  ];
  return (
    <section className="description">
      {dataMain.map((element) => (
        <ContentMainPage key={element.id} {...element} />
      ))}
    </section>
  );
};
