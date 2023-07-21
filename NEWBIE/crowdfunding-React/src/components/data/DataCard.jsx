import { CardStand } from "../CardStand";

export const DataCard = () => {
  const dataCard = [
    {
      stand: "Bamboo Stand",
      price: "Pledge $25 or more",
      text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      units: "101",
    },
    {
      stand: "Black Edition Stand",
      price: "Pledge $75 or more",
      text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      units: "64",
    },
    {
      stand: "Mahogany Special Edition",
      price: "Pledge $200 or more",
      text: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      units: "0",
    },
  ];

  return (
    <>
      {dataCard.map((card) => (
        <CardStand key={card.units} {...card} />
      ))}
    </>
  );
};
