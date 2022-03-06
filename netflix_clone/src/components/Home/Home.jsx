import React from 'react';
import List from '../List/List';
// import {AcUnit } from '@material-ui/icons';

import Navbar from '../Navbar/Navbar';
import './home.scss';

export const Home = () => {
  return (
    <div className = "home">
      <Navbar />
      
      <img 
        width = "100%"
        src = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt = "" />
        <List/>
      <List/>
      <List/>
      <List/>
    </div>
    
  )
}

export default Home;
