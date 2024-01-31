import React from 'react'
import DatsLogo from '../assets/dats-logo-minim.png'

const Footer = () => {
  return (
    <div class="bg-[#02174c] text-white w-full text-xs py-1.5">
        Copyright © {new Date().getFullYear()} Dats. All rights reserved.
    </div>
  )
}

export default Footer