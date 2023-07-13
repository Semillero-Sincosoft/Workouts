

const Img = ({route,classTag ,classImg}) => {
  return (
    <div className={classTag}>
      <img src={route} alt="" className={classImg} />
    </div>
  )
}

export default Img
