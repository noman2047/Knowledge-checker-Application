import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Components/Navbar/Navbar';


const Main = () => {
  return (
    <div>

      <NavBar></NavBar>
      <Outlet></Outlet>
      <p style={{marginTop:"40px"}}>Copyright © 2022  Abudlla Al Noman.</p>
    </div>
  );
};

export default Main;