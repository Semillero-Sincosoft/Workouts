export const ContentImage = ({ route, classe, classeImg }) => {
  return (
    <section className={`${classe}`}>
      <img src={route} alt="" className={classeImg} />
    </section>
  );
};
