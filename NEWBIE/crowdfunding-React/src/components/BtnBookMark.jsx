import IconBookMark from "./imgs/IconBookMark"

const BtnBookMark = () => {
  return (
    <div className="bookmark">
        <button className="btn-bookmark" id="btn-bookmark">
            <IconBookMark />
        </button>
        <p id="p-bookmark">Bookmark</p>
    </div>
  )
}

export default BtnBookMark
