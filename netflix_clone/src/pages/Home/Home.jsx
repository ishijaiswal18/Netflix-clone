import React from 'react';
// import {AcUnit } from '@material-ui/icons';

import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/featured/featured';
import List from '../../components/List/List';
import './home.scss';

export const Home = () => {
  return (
    <div className = "home">
      <Navbar />
      <Featured type = "movie"/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home;
