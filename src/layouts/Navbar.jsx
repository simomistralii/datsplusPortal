import React, {useState, useEffect, useRef} from 'react'
import { useAuth } from "../contexts/AuthContext";

import DatsLogo from '../assets/dats-logo-minim.png'
import {Link, useNavigate} from "react-router-dom";
import Embedded_small from '../assets/Embedded_small.width-70.png'
import Data_API_small from '../assets/Data_API_small.width-70.png'
import epm from '../assets/EPM.width-70.png'
import Reporting_1 from '../assets/Reporting_1.width-70.png'
import User_centric3x from '../assets/User_centric3x.width-70.png'
import elaboration_budgetaire from '../assets/elaboration_budgetaire.width-70.png'

const Navbar = () => {
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();
  const [platformIsOpen, setPlatformIsOpen] = useState(false)
  const [solutionsIsOpen, setSolutionsIsOpen] = useState(false)

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const refPlatfrom = useRef(null);
  const refSolution = useRef(null);

  useEffect(() => {
    const handleOutSideClickPlatform = (event) => { if (!refPlatfrom.current?.contains(event.target)) setPlatformIsOpen(false) };
    window.addEventListener("mousedown", handleOutSideClickPlatform);
    return () => { window.removeEventListener("mousedown", handleOutSideClickPlatform); };
  }, [refPlatfrom]);


  useEffect(() => {
    const handleOutSideClickSolution = (event) => { if (!refSolution.current?.contains(event.target)) setSolutionsIsOpen(false) };
    window.addEventListener("mousedown", handleOutSideClickSolution);
    return () => { window.removeEventListener("mousedown", handleOutSideClickSolution); };
  }, [refSolution]);

  return (
    <nav class="bg-[#02174c] text-white w-full">
      <div className='py-3 px-48 flex justify-between'>
        <Link className='flex' to={'/'}><img src={DatsLogo} alt="" className='my-auto w-28' /><span className='my-auto text-2xl -ml-3 text-white'>+</span></Link>
        <div className='flex justify-around text-sm space-x-8 my-auto '>
          <Link to={'/Why'} className='cursor-pointer hover:scale-105 transition-all my-auto text-white hover:text-white'>Why Dats+?</Link>
          <div className='my-auto relative z-50' ref={refPlatfrom}>
            <div className='cursor-pointer hover:scale-105 transition-all my-auto flex space-x-0.5' onClick={() => {setPlatformIsOpen(!platformIsOpen)}}>
              <span className='my-auto'>Platform</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 my-auto"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
            </div>
            {platformIsOpen && <div className='bg-white text-black absolute w-[400px] -left-5 top-7 rounded-md shadow-xl px-3 py-4' onClick={() => {setPlatformIsOpen(!platformIsOpen)}}>
              <div className='flex space-x-4 '>
                <Link to={'/Platform/major-features'} className='flex space-x-1 cursor-pointer group w-1/2'>
                  <img className='my-auto group-hover:scale-105 transition-all' src={Embedded_small} alt="" />
                  <div className='my-auto'>
                    <div className='text-xs font-medium text-[#02174c] group-hover:scale-105 transition-all'>Major features</div>
                    <div className='text-xs'>Bring data to match your business needs</div>
                  </div>
                </Link>
                <Link to={'/Platform/architecture-deployment'} className='flex space-x-1 cursor-pointer group w-1/2'>
                  <img className='my-auto group-hover:scale-105 transition-all' src={Data_API_small} alt="" />
                  <div className='my-auto'>
                    <div className='text-xs font-medium text-[#02174c] group-hover:scale-105 transition-all'>Architecture & Deployment</div>
                    <div className='text-xs'>Build and deploy</div>
                  </div>
                </Link>
              </div>
            </div>}
          </div>
          <div className='my-auto relative z-50' ref={refSolution}>
            <div className='cursor-pointer hover:scale-105 transition-all my-auto flex space-x-0.5' onClick={() => {setSolutionsIsOpen(!solutionsIsOpen)}}>
              <span className='my-auto'>Solutions</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 my-auto"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
            </div>
            {solutionsIsOpen && <div className='bg-white text-black absolute w-[500px] -left-5 top-7 rounded-md shadow-xl px-3 py-4 flex flex-col gap-4' onClick={() => {setSolutionsIsOpen(!solutionsIsOpen)}}>
              <div className='flex space-x-4 '>
                <Link to={'/solutions/data-integrations-cleaning'} className='flex space-x-1 cursor-pointer group w-1/2'>
                  <img className='my-auto group-hover:scale-105 transition-all' src={epm} alt="" />
                  <div className='my-auto'>
                    <div className='text-xs font-medium text-[#02174c] group-hover:scale-105 transition-all'>Data Integration Cleaning</div>
                    <div className='text-xs'>Accelerate performances thanks to automated and secured data collect and share KPIs within the organization.</div>
                  </div>
                </Link>
                <Link to={'/solutions/data-analysis'} className='flex space-x-1 cursor-pointer group w-1/2'>
                  <img className='my-auto group-hover:scale-105 transition-all' src={Reporting_1} alt="" />
                  <div className='my-auto'>
                    <div className='text-xs font-medium text-[#02174c] group-hover:scale-105 transition-all'>Data Analysis</div>
                    <div className='text-xs'>Accelerate performances thanks to automated and secured data collect and share KPIs within the organization.</div>
                  </div>
                </Link>
              </div>
              <div className='flex space-x-4 '>
                <Link to={'/solutions/developement-of-reports-and-interactive-dashboards'} className='flex space-x-1 cursor-pointer group w-1/2'>
                  <img className='my-auto group-hover:scale-105 transition-all' src={User_centric3x} alt="" />
                  <div className='my-auto'>
                    <div className='text-xs font-medium text-[#02174c] group-hover:scale-105 transition-all'>Developement of reports & interactive dashboards</div>
                    <div className='text-xs'>Accelerate performances thanks to automated and secured data collect and share KPIs within the organization.</div>
                  </div>
                </Link>
                <Link to={'/solutions/Process-Automation-and-Training-and-Support'} className='flex space-x-1 cursor-pointer group w-1/2'>
                  <img className='my-auto group-hover:scale-105 transition-all' src={elaboration_budgetaire} alt="" />
                  <div className='my-auto'>
                    <div className='text-xs font-medium text-[#02174c] group-hover:scale-105 transition-all'>Process Automation & Training & Support</div>
                    <div className='text-xs'>Accelerate performances thanks to automated and secured data collect and share KPIs within the organization.</div>
                  </div>
                </Link>
              </div>
            </div>}
          </div>
          <Link to={'/contact-us'} className='cursor-pointer hover:scale-105 transition-all my-auto text-white hover:text-white'>Contact us</Link>
          <div className='my-auto'>
            <Link to={'/request-demo'} className='cursor-pointer hover:scale-105 transition-all px-2 py-1.5 text-white hover:text-white bg-orange-500 rounded-md'>Get a demo</Link>
          </div>
          {!currentUser ? 
            <div className='my-auto'>
              <Link to={'/login'}  class="flex space-x-1 text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-1.5 text-center" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 my-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" /></svg>
                <span className='my-auto'>Login</span>
              </Link>
            </div>
            :
            <>
              <div className='my-auto'>
                <Link to={'/homeportal'}  class="flex space-x-1 text-white hover:text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-sm px-5 py-1.5 text-center" >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 my-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                  <span className='my-auto'>Account</span>
                </Link>
              </div>
              <div onClick={handleLogout} className='my-auto cursor-pointer flex space-x-1 text-white hover:text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg font-medium rounded-lg text-xs px-5 py-1.5 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 my-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                <span className='my-auto'>Logout</span>
              </div>
            </>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar