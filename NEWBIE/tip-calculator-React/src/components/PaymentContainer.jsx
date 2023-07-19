const PaymentContainer = ({ title }) => {
  return (
    <article className="content-proportion">
      <div className="amount">
        <h3>{title}</h3>
        <p>/ person</p>
      </div>
      <p className="price">$0.00</p>
    </article>
  );
};

export default PaymentContainer;
