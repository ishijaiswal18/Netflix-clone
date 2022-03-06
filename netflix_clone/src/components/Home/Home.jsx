import React from 'react';
// import {AcUnit } from '@material-ui/icons';

import Navbar from '../Navbar/Navbar';
import Featured from '../featured/featured';
import './home.scss';

export const Home = () => {
  return (
    <div className = "home">
      <Navbar />
      <Featured type = "movie"/>
         
    </div>
  )
}

export default Home;
