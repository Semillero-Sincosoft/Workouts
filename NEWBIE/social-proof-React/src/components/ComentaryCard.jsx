const ComentaryCard = ({ classContent, routeImgUser, nameUser }) => {
  return (
    <article className={`content-cards ${classContent} `}>
      <div className="content-profile flex-and-direction"></div>
      <UserAvatar route={(routeImgUser, nameUser)} />
      <p>{textCard}</p>
    </article>
  );
};
export const UserAvatar = ({ routeImgUser, nameUser }) => {
  return (
    <div className="profile">
      <div className="img">
        <img className="imgs" src={routeImgUser} alt="" />
      </div>
      <div className="names">
        <h3>{nameUser}</h3>
        <h3>Verified Buyer</h3>
      </div>
    </div>
  );
};

export default ComentaryCard;
