import StatisticsInfoCard from "./StatisticsInfoCard"

const StatisticsCard = () => {
  return (
    <section className="content-tip">
        <div className="content-numbers">
            <StatisticsInfoCard />
        </div>
        <div className="content-stick">
            <div className="stick"></div>
        </div>
    </section>
  )
}

export default StatisticsCard
