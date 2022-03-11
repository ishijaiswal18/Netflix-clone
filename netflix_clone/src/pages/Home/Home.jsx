import React from 'react';
// import {AcUnit } from '@material-ui/icons';

import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/featured/featured';
import List from '../../components/List/List';
import './home.scss';
import { useEffect, useState } from "react";
import axios from "axios";


const Home = (props) => {
  const type = props.type;
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        let path = `/lists${type ? "?type=" + type : ""}${
          genre ? "&genre=" + genre : ""
        }`;
        console.log(path);
        // giving query to the api
        const res = await axios.get(
          path
          ,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmFlNmY2ZTU0YTJmYTBjZjk3NmEwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Njk3OTUzOCwiZXhwIjoxNjQ3NDExNTM4fQ.SU_PcTHzueZUPw4uh5nouI9_1YZGjSAVXRAByGwV6bk",
            },
          }
        );
        setLists(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
    console.log(lists);
  }, [type, genre]);

  // console.log(lists);
  
  return (
    <div className = "home">
      <Navbar />
      <Featured type = {type} setGenre = {setGenre}/>
      {lists.map((list) => (
        <List key = {list._id} list = {list}/>
      ))}
    </div>
  )
}

export default Home;
