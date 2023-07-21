import HeaderPage from "./HeaderPage";
import CardsInfoData from "./Data/CardsInfoData";
import "../hubdle.css";
const Page = () => {
  return (
    <main className="container flex-and-direction">
      <HeaderPage />
      <div className="content-written flex-and-direction">
        <CardsInfoData />
      </div>
    </main>
  );
};

export default Page;
