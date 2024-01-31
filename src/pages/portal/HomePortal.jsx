import React from "react"
import datsLogo from '../../assets/dats-logo-minim.png'
import OpenSoon from '../../assets/opening-soon-illustration-free-png.webp'


const sideNav = [
    'Dashboard',
    'Reports',
    'Charts',
    'Produts',
    'Inbox',
    'Settings'
  ];
  
  const topNavLeft = [
    'Home',
    'Name'
  ];
  
  const topNavRight = [
    'Home',
    'Kuntau'
  ];
  
 

const HomePortal = () => {
    

    return (
        <>
           <div className="flex items-center justify-center h-[81vh] overflow-y-hidden">
             <img src={OpenSoon} className="w-[400px] drop-shadow-2xl animate-bounce" alt="" />
           </div>
        </>
    )
}

export default HomePortal