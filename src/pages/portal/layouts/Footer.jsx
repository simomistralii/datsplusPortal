import React from 'react'
import datsLogo from '../../../assets/dats-logo-minim.png'
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div className='flex justify-between px-10 bg-[#02174c]'>
      <div class=" text-white text-xs py-1.5">Copyright © {new Date().getFullYear()} Dats. All rights reserved.</div>
      <div className='flex justify-around space-x-2 my-auto'>
        <Link><CiMail size={18} /></Link>
        <Link><CiLinkedin size={18} /></Link>
        <Link><FaXTwitter size={18} /></Link>
      </div>
    </div>
  )
}

export default Footer