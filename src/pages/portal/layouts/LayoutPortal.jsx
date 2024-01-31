import React, { useState, useEffect } from 'react';
//import Navbar from './Navbar';
//import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import datsLogo from '../../../assets/dats-logo-minim.png'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';



const LayoutPortal = () => {
  return (
    <>
      <div className="flex content-center mx-auto bg-[#02174c] text-gray-100">
        <Sidebar />
        <section className="main box-border relative w-full">
          <Navbar />
          <content className="main box-border my-5 px-4">
            <Outlet />
          </content>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default LayoutPortal;
