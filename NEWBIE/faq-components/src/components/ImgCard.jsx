const ImgCard = ({classImg, route}) => {
  return (
    <>
        <img className={classImg} src={route} alt="" />
    </>
  )
}

export default ImgCard
