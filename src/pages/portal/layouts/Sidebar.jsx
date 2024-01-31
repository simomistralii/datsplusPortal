import React, {useState} from "react"
import datsLogo from '../../../assets/dats-logo-minim.png'


const sideNav = [
  'Dashboard',
  'Reports',
  'Charts',
  'Produts',
  'Inbox',
  'Settings'
];





const Sidebar = () => {


  const [activeLink, setActiveLink] = useState(sideNav[0])


  return (
    <>
      <div className="z-50 w-52 fixed px-2 py-3 text-gray-100">
        <div className="store text-blue-800 font-medium px-1 py-2 mb-3">
          <a className="overflow-hidden flex justify-center" href="#">
            <img src={datsLogo} className=" drop-shadow-2xl w-1/2 " alt="dats+Logo" />
            <span className='my-auto text-2xl -ml-3 text-white'>+</span>
          </a>
        </div>
        <nav className="pt-3">
          <p className="title uppercase text-xs  tracking-wider">
            main
          </p>
          <ul className="ml-4 mt-2">
            {sideNav.map((s, i) => {
              return (
                <button key={i} class="flex space-x-2 px-2 py-1 hover:scale-110 transition-all ease-in-out group" onClick={() => {setActiveLink(s)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4 my-auto group-hover:animate-ping"><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg>
                  <a class={"hover:scale-110 cursor-pointer transition-all text-sm" + (activeLink === s ? ' active' : '')} href="#">{s}</a>
                </button>
              )
            })}
          </ul>
        </nav>
      </div>

    </>
  )
}

export default Sidebar