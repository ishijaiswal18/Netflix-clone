import React from 'react';
// import {AcUnit } from '@material-ui/icons';

import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/featured/featured';
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
