import ContentFooter from "./User"
const TextContent = ({mainText, text}) => {
  return (
    <div className="content-escrito flex-direction-column">
      <div className="title">
        <h1>{mainText}</h1>
      </div>
      <div className="escrito">
        <p>{text}</p>
      </div>
      <ContentFooter
          routeAvatar="./src/assets/images/avatar-michelle.jpg"
          nameAvatar={"Michelle Appleton"}
          createAt={"28 Jun 2020"}
        />
    </div>
  )
}

export default TextContent