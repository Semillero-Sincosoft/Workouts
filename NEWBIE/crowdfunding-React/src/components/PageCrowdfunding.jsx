import Header from "./Header";
import SupportCard from "./SupportCard";
import StatisticsCard from "./StatisticsCard";
import "./css/crow.css";
import { ContentCard } from "./ContentCard";
export const PageCrowdfunding = () => {
  return (
    <>
      <Header />
      <main className="container header">
        <SupportCard />
        <StatisticsCard />
        <ContentCard />
      </main>
    </>
  );
};
