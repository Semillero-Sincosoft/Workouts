import { BtnReset } from "./BtnReset";
import PaymentContainer from "./PaymentContainer";

export const ContentAmount = () => {
  return (
    <section className="distribute">
      <div className="content-accounts">
        <PaymentContainer title="Tip Amount" />
        <PaymentContainer title="Total" />
      </div>
      <BtnReset />
    </section>
  );
};
