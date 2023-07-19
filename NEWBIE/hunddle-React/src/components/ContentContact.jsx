export const ContentContact = ({ imageContact, text }) => {
  return (
    <div className="content-info">
      <div className="info">
        <div className="icons-info">{imageContact}</div>
        <p>{text}</p>
      </div>
    </div>
  );
};
