// React
import React from 'react';

//Static Components
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import FloatOptions from '../FloatOptions/FloatOptions';

const Layout = ({ children }) => (
  <div className="relative">
    <Navbar/>
    { children }
    <Header/>
    <FloatOptions/>
  </div>
);

export default Layout;