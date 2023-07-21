import IconHamburguer from "./imgs/IconHamburguer";
const NavBarHeader = () => {
  return (
    <>
      <nav>
        <ul>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </nav>
      <div className="menu-button content-nav">
        <button className="menu-hamburger">
          <IconHamburguer />
        </button>
      </div>
    </>
  );
};

export default NavBarHeader;
