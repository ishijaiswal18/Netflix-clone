import "./listItem.scss"
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@material-ui/icons"
export default function ListItem() {
  return (
    <div className="listItem">
        <img src="https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg" alt="" />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownAltOutlined/>
          </div>
        </div>
    </div>
  )
}
