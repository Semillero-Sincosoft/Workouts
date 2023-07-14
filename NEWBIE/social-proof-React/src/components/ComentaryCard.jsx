const ComentaryCard = ({ classContent, route, nameUser }) => {
  return (
    <article className={`content-cards ${classContent} `}>
      <div className="content-profile flex-and-direction"></div>
      <UserAvatar route={(route, nameUser)} />
      <p>{textCard}</p>
    </article>
  );
};
export const UserAvatar = ({ route, nameUser }) => {
  return (
    <div className="profile">
      <div className="img">
        <img className="imgs" src={route} alt="" />
      </div>
      <div className="names">
        <h3>{nameUser}</h3>
        <h3>Verified Buyer</h3>
      </div>
    </div>
  );
};

export default ComentaryCard;
