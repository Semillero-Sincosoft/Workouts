export const ListFooter = ({ text1, text2, text3 }) => {
  return (
    <>
      <ul className="flex-and-direction">
        <li>{text1}</li>
        <li>{text2}</li>
        <li>{text3}</li>
      </ul>
      <ul></ul>
    </>
  );
};
