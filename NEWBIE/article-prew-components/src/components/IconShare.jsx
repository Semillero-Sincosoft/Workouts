const IconShare = () => {
  return (
    <>
      <svg
        className="share-img"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
      >
        <path
          className="flecha"
          fill="#6098"
          d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
        ></path>
      </svg>
      <HoverIcon />
    </>
  );
};

const HoverIcon = () => {
  return (
    <div className="share hiden" id="redes">
      <span>SHARE</span>
      <a href="https://es-la.facebook.com/">
        <img src="./src/assets/images/icon-facebook.svg" alt="face" />
      </a>
      <a href="https://twitter.com/?lang=es">
        <img src="./src/assets/images/icon-twitter.svg" alt="tw" />
      </a>
      <a href="https://co.pinterest.com/login">
        <img src="./src/assets/images/icon-pinterest.svg" alt="pin" />
      </a>
    </div>
  );
};

export default IconShare;
