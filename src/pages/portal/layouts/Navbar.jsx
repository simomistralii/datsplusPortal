import React from "react"
import { useAuth } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";




const topNavLeft = [
  { name: 'Home', link: '/' },
  { name: 'Analytics', link: '/analytic' },
];


const Navbar = () => {
  const { currentUser } = useAuth();


  return (
    <>
      <nav className="top-nav sticky inset-0 box-border flex justify-between px-3  w-full h-auto py-3 overflow-hidden bg-[#02174c] z-50 text-gray-100">
        <div className="flex self-center space-x-3">
          {topNavLeft.map(n => {
            return (
              <Link to={n.link} className="hover:scale-110 cursor-pointer transition-all text-sm" >
                {n.name}
              </Link>
            )
          })}
        </div>
        <div className="inline-flex self-center">
          <input disabled
            className="search ml-2 px-4 content-center shadow rounded-l text-xs outline outline-transparent text-[#02174c]"
            type="text"
            placeholder="Press / to focus search"
          />
          <button className="btn inline-block text-white text-core bg-green-500 hover:bg-green-600 h-6 px-2 py-1 rounded-r shadow hover:animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
          </button>
        </div>
        <div className="top-nav-right ">
          <ul className="flex justify-end items-center space-x-1">
            <li className="inline-block hover:scale-110 transition-all  text-xs">{currentUser?.email}</li>
            <a className="" href="#"></a>
            <li className="inline-block">
              <a href="#">
                <img
                  className="h-6 rounded-full shadow-lg"
                  src="https://gravatar.com/avatar/d69aae377ffa1f6fd90935a888933070"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Navbar