

const TextContent = ({classTitle,textTitle,classText,text}) => {
  return (
    <>
      <h1 className={classTitle}>{textTitle}</h1>
      <p className={classText}>{text}</p>
    </>
  )
}

export default TextContent
