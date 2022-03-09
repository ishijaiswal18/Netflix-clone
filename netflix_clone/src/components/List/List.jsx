import { ArrowBackIos, ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import ListItem from "../listItem/ListItem"
import "./list.scss"
import { useRef } from "react"
import { useState } from "react";

export default function List({list}) {
  console.log("hello");
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  const listRef = useRef();

   const handleClick = (direction) =>{
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if(direction === "left" && slideNumber>0){
      setSlideNumber(slideNumber-1);
        distance=distance+230  ;
        listRef.current.style.transform = "translateX("+distance+"px)";
    }

    if(direction === "right" && slideNumber< 10 - clickLimit){
      setSlideNumber(slideNumber+1);
      distance=distance-230;  
      listRef.current.style.transform = "translateX("-230 +distance+"px)";
  }
  }
  console.log("hello");
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
      <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")} style = {{display: !isMoved && "none"}} />
      <div className="container" ref = {listRef}>
        Hello
        {list.content.map((item, index) => (
          // console.log(item)
          <ListItem key={index} index = {index} item={item} />
        ))}

      </div>
      <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")} />

      </div>

    </div>
  )
}
