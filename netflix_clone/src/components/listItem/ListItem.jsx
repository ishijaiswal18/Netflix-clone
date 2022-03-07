import "./listItem.scss"
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@material-ui/icons"
import { useState } from "react";
export default function ListItem({index}) {
  const [isHovered,setIsHovered] = useState(false);
  const trailer="https://www.youtube.com/embed/zSWdZVtXT7E?&autoplay=1&loop=1";
  return ( 
    <div className="listItem" style={{left: isHovered && index*225 -50 + index*2.5 }} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <img src="https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg" alt="" />
        {isHovered && (
        <>         
        <iframe width="100%" height="140" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"></iframe>
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownAltOutlined className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>2 Hour 14 mins</span>
            <span className="limit">+16</span>
            <span>2010</span>
          </div>
          <div className="desc">
            lorem ipsum dolor
          </div>
          <div className="genre">
            Adventure
          </div>
        </div>
        </>
        )
        }
    </div>
  )
}
