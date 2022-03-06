import React from 'react';
import List from '../List/list';
import list from '../List/list';
// import {AcUnit } from '@material-ui/icons';

import Navbar from '../Navbar/Navbar';
import './home.scss';

export const Home = () => {
  return (
    <div className = "home">
      <Navbar />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home;
