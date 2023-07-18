const ComentaryCard = ({ classContent, ImgUser, nameUser, textComment }) => {
  return (
    <article className={`content-cards ${classContent} `}>
      <div className="content-profile flex-and-direction"></div>
      <UserAvatar ImgUser={ImgUser} nameUser={nameUser} textComment={textComment} />
      <p>{textCard}</p>
    </article>
  );
};
export const UserAvatar = ({ ImgUser, nameUser,textComment }) => {
  return (
    <>
      <div className="profile">
        <div className="img">{ImgUser}</div>
        <div className="names">
          <h3>{nameUser}</h3>
          <h3>Verified Buyer</h3>
        </div>
      </div>
      <p>{textComment}</p>
    </>
  );
};

export default ComentaryCard;
