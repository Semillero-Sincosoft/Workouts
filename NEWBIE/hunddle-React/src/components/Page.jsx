import HeaderPage from "./HeaderPage"
import CardInfoPage from "./CardInfoPage"
import ImgCardFlowing from "./Imgs/ImgCardFlowing"
import '../hubdle.css'
const Page = () => {
  return (
    <main className="container flex-and-direction">
      <HeaderPage />
      <div className="content-written flex-and-direction">
        <CardInfoPage />
      </div>
    </main>
  )
}

export default Page
