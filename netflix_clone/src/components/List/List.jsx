import { ArrowBackIos, ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import ListItem from "../listItem/ListItem"
import "./list.scss"

export default function List() {
  // const listRef = useRef()
  // const handleClick = (direction) =>
  // {
  //   let distance = listRef.current.getBoundingClientRect()
  //   if(direction === "left")
  //   {
  //     listRef.current.style.transform = 'translateX(230ps)';
  //   }
  //   console.log(distance)
  // }
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
      <ArrowBackIosOutlined className="sliderArrow left"  />
      <div className="container" >
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>

      </div>
      <ArrowForwardIosOutlined className="sliderArrow right" />

      </div>

    </div>
  )
}
