const ComentaryCard = ({ classContent,route }) => {
  return (
    <article className={`content-cards ${classContent} `}>
      <div className="content-profile flex-and-direction"></div>
    </article>
  );
};
export const UserAvatar = ({route}) => {
  return (
  <div className="profile">
    <div className="img">
        <img className="imgs" src={route} alt="" />
    </div>
    <div className="names">
        
    </div>
  </div>
  )
};

export default ComentaryCard;
