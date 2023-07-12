import Img from "./Img";
const User = ({routeAvatar, nameAvatar, createAt}) => {
  return (
    <div className="content-boton">
      <Avatar
        routeAvatar={routeAvatar}
        nameAvatar={nameAvatar}
        createAt={createAt}
      />
    </div>
  );
};

export const Avatar = ({ routeAvatar, nameAvatar, createAt }) => {
  return (
    <>
      <div className="logo">
        {/* <img className="img-logo" src={routeAvatar} alt="" /> */}
        <Img route={routeAvatar} classTag={'content-avatar-user'} classImg={'img-logo'} />
        <div className="name">
          <h3>{nameAvatar}</h3>
          <p className="jun">{createAt}</p>
        </div>
      </div>
    </>
  );
};
export default User;
