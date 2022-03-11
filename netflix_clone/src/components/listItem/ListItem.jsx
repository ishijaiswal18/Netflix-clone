import "./listItem.scss"
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@material-ui/icons"
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListItem({index, item}) {
  const [isHovered,setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item._id, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmFlNmY2ZTU0YTJmYTBjZjk3NmEwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Njk3OTUzOCwiZXhwIjoxNjQ3NDExNTM4fQ.SU_PcTHzueZUPw4uh5nouI9_1YZGjSAVXRAByGwV6bk",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  const trailer="https://www.youtube.com/embed/zSWdZVtXT7E?&autoplay=1&loop=1";
  return ( 
    <Link to = {{pathname : "/watch", movie: movie}}>
      <div className="listItem" style={{left: isHovered && index*225 -50 + index*2.5 }} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
          <img src = {movie ? movie.imgSm: ""} alt="" />
          {isHovered && (
          <>         
          <iframe width="100%" height="140" src={movie.trailer}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" loop></iframe>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">
              {movie.genre}
            </div>
          </div>
          </>
          )
          }
      </div>
    </Link>
  )
}
