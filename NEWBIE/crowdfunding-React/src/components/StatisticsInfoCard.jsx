import TextInfoStatisticsCard from "./TextInfoStatisticsCard"

const StatisticsInfoCard = () => {
  return (
    <>
        <article className="number backed">
        <TextInfoStatisticsCard title='$89,914' text='of $100,000 backed' />
        </article>
        <article className="number backers">
        <TextInfoStatisticsCard title='5,007' text='total backers' />
        </article>
        <article className="number days">
        <TextInfoStatisticsCard title='56' text='days left' />
        </article>
    </>
  )
}

export default StatisticsInfoCard
