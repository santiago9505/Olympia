// React
import React from 'react';

//Static Components
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

const Layout = ({ children }) => (
  <div className="relative">
    <Navbar/>
    { children }
    <Header/>
  </div>
);

export default Layout;