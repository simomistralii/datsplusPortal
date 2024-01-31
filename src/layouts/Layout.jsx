import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  


  return (
    <div>
        <div className="relative min-h-full h-[100vh] overflow-y-hidden">
          <Navbar />
          <main className=" overflow-y-auto h-[calc(100%-80px)]"> {/* pt-2 pb-8 px-4 */}
            <Outlet />
          </main>
          <Footer />
        </div>
    </div>
  );
};

export default Layout;
