import Img from "./Img";
import IconShare from "./IconShare";
const ContentFooter = ({routeAvatar, nameAvatar, createAt}) => {
  return (
    <div className="content-boton">
      <Avatar
        routeAvatar={routeAvatar}
        nameAvatar={nameAvatar}
        createAt={createAt}
      />
      <IconShare />
    </div>
  );
};

export const Avatar = ({ routeAvatar, nameAvatar, createAt }) => {
  return (
    <>
      <div className="logo">
        <Img route={routeAvatar} classTag={'content-avatar-user'} classImg={'img-logo'} />
        <div className="name">
          <h3>{nameAvatar}</h3>
          <p className="jun">{createAt}</p>
        </div>
      </div>
    </>
  );
};
export default ContentFooter;
