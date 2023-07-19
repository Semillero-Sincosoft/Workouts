
import ImgCardGrow from "../Imgs/ImgCardGrow";
import ImgCardFlowing from "../Imgs/ImgCardFlowing";
import ImgCardYour from "../Imgs/ImgCardYour";
import CardInfoPage from "../CardInfoPage";

const CardsInfoData = () => {
  const cardsData = [
    {
      classCard: "card-1",
      img: <ImgCardGrow />,
      title: "Grow Together",
      text: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
    },
    {
      classCard: "card-2",
      img: <ImgCardFlowing />,
      title: "Flowing Conversations",
      text: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    },
    {
      classCard: "card-3",
      img: <ImgCardYour />,
      title: "Your Users",
      text: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    },
  ];

  return (
    <>
      {cardsData.map((cardData) => (
        <CardInfoPage key={cardData.title} {...cardData} />
      ))}
    </>
  );
};

export default CardsInfoData;
