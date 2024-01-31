import React, { useState } from "react";
import { TypeAnimation } from 'react-type-animation';

import Illustration_contact_us from '../../assets/Illustration_contact_us.width-960.png'
import demo from '../../assets/demo.jpg'

import { TbLocationQuestion } from "react-icons/tb";
import { IoMail } from "react-icons/io5";
import { FaPhone, FaUser } from "react-icons/fa6";
import { FiVoicemail } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import { GiMailedFist } from "react-icons/gi";




const RequestDemo = () => {


    return (
        <>
            <div className="relative">
                <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-96">
                    <div className="flex justify-around relative py-10">
                        <div className="absolute left-16 top-16">
                            <div className="text-4xl font-bold text-left" style={{animation: 'fadeIn 1s ease-in both'}}>Request a Demo</div>
                            <div className="pt-4 text-left text-sm">See how Dats+ makes it easy for you to:</div>
                            <div className="ml-2 flex flex-col gap-3 mt-4">
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="none" viewBox="0 0 22 22"><path fill="#00B7CD" fill-rule="evenodd" d="M19.095 3.196A1 1 0 0119.5 4v10.74a1 1 0 01-1.293.956L9.295 12.97a1 1 0 01-.925.62H8.3v4.37a1 1 0 01-1 1H5.15a1 1 0 01-.98-.803L3.25 13.59H3a1 1 0 01-1-1V6.15a1 1 0 011-1h5.37a1 1 0 01.924.618l8.914-2.724a1 1 0 01.887.152zM17.5 13.388l-8.13-2.487V7.836L17.5 5.35v8.037zM4 7.15v4.44h3.37V7.15H4zm1.969 9.81l-.678-3.37H6.3v3.37h-.331z" clip-rule="evenodd"></path></svg>
                                    <span className="my-auto text-xs">Find and attract candidates</span>
                                </div>
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="none" viewBox="0 0 22 22"><path fill="#00B7CD" fill-rule="evenodd" d="M20 2.018c-.302 0-.607-.005-.915-.01-1.673-.026-3.437-.054-5.284.68-2.22.879-4.057 2.405-5.542 4.227L2.802 8.018a1 1 0 00-.593 1.592l2.604 3.363c-.164.42-.314.837-.452 1.249a1 1 0 00.242 1.023l3.08 3.08a1 1 0 001.023.242c.415-.139.835-.29 1.257-.455l3.421 2.674a1 1 0 001.6-.614l.963-5.454c1.851-1.494 3.404-3.349 4.293-5.591l.002-.007c.775-1.992.767-3.75.76-5.56v-.001L21 3.018a1 1 0 00-1-1zM4.777 9.659l1.827-.37a23.394 23.394 0 00-.873 1.603l-.954-1.233zm9.742 3.64c-.07.041-.135.092-.194.15-1.695 1.293-3.683 2.3-5.671 3.019L6.46 14.274c1.477-4.091 4.174-8.182 8.078-9.726h.002c1.447-.577 2.765-.56 4.429-.539h.033c0 1.619-.048 2.904-.623 4.384-.765 1.928-2.155 3.565-3.86 4.906zm-.886 3.026l-.329 1.86-1.267-.99a23.466 23.466 0 001.595-.87zm2.777-8.197a1.63 1.63 0 11-3.26 0 1.63 1.63 0 013.26 0zM4.707 16.291a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414l2-2a1 1 0 011.414 0zm2 3.414a1 1 0 10-1.414-1.414l-1 1a1 1 0 101.414 1.414l1-1z" clip-rule="evenodd"></path></svg>
                                    <span className="my-auto text-xs">Move the right applicants forward</span>
                                </div>
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="none" viewBox="0 0 22 22"><path fill="#00B7CD" fill-rule="evenodd" d="M11.047 1a1 1 0 01.895.569l2.512 5.252 5.687.87a1 1 0 01.548 1.704l-4.149 4.057.937 5.768a1 1 0 01-1.462 1.04l-5.072-2.738-5.11 2.674a1 1 0 01-1.448-1.059l1.01-5.758-4.102-4.102A1 1 0 011.86 7.58l5.698-.806 2.586-5.218A1 1 0 0111.047 1zm-.023 3.284l-1.908 3.85a1 1 0 01-.756.546l-4.236.6 3.053 3.053a1 1 0 01.278.88l-.749 4.27 3.78-1.979a1 1 0 01.939.006l3.752 2.025-.694-4.275a1 1 0 01.288-.875l3.088-3.02-4.23-.646a1 1 0 01-.751-.558l-1.854-3.877z" clip-rule="evenodd"></path></svg>
                                    <span className="my-auto text-xs">Make the best hire, in half the time</span>
                                </div>
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="none" viewBox="0 0 22 22"><path fill="#00B7CD" fill-rule="evenodd" d="M12.15 2a1 1 0 10-2 0v1.15H5a1 1 0 00-1 1v15.78a1 1 0 001 1h1.498a1.006 1.006 0 00.284 0h8.716a1.006 1.006 0 00.284 0h1.508a1 1 0 001-1V4.15a1 1 0 00-1-1h-5.14V2zm4.14 14.519V5.15H6v11.338a5.519 5.519 0 012.374-2.792 3.7 3.7 0 115.545.01 5.533 5.533 0 012.371 2.813zM7.64 18.93h7v-.48c0-1.928-1.572-3.5-3.5-3.5a3.5 3.5 0 00-3.5 3.5v.48zm3.51-9.38a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4z" clip-rule="evenodd"></path></svg>
                                    <span className="my-auto text-xs">Onboard and manage reports and Data</span>
                                </div>
                            </div>
                        </div>
                        <img src={demo} className="w-1/2 absolute right-6 -top-14" alt="" />
                    </div>
                </div>
                <div className="rounded-xl shadow-2xl border absolute left-0 right-0 m-auto top-[340px] w-[70vw] py-4 px-8 flex flex-col gap-2 bg-white">
                   <div className="grid grid-cols-2 gap-5 w-full">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <IoMail color="gray" size={18} />
                            </div>
                            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  text-xs" placeholder="Your email"/>
                        </div>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaUser color="gray" size={18}  />
                            </div>
                            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  text-xs" placeholder="Your name"/>
                        </div>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaPhone color="gray" size={18}  />
                            </div>
                            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  text-xs" placeholder="Your phone number"/>
                        </div>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FiVoicemail color="gray" size={18} />
                            </div>
                            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  text-xs" placeholder="Your subject"/>
                        </div>
                        <div className="relative w-full">
                            <textarea rows={10} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-xs" placeholder="Your message"/>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                            <div className="flex justify-center items-center">
                                <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex space-x-2">
                                    <SiMinutemailer className="my-auto" color="white" size={24} />
                                    <span className="my-auto">Send message</span>
                                </button>
                            </div>
                            <div className="border rounded-lg shadow-xl w-fit px-3 py-3 flex flex-col gap-2 bg-[#02174c] text-white">
                                <div className="flex space-x-2">
                                    <TbLocationQuestion />
                                    <div className="font-semibold text-sm my-auto">What to expect in your demo:</div>
                                </div>
                                <div className="flex flex-col gap-1 ml-2">
                                    <div className="flex space-x-2 text-xs">
                                        <GiMailedFist color="white" className="my-auto" size={20} />
                                        <span className="my-auto">Discuss your hiring goals</span>
                                    </div>
                                    <div className="flex space-x-2 text-xs">
                                        <GiMailedFist color="white" className="my-auto" size={20} />
                                        <span className="my-auto">Explore relevant features</span>
                                    </div>
                                    <div className="flex space-x-2 text-xs">
                                        <GiMailedFist color="white" className="my-auto" size={20} />
                                        <span className="my-auto">Review plans and pricing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                   <div className="text-xs my-1 py-2 bg-[#02174c] text-white rounded-md shadow-xl">
                   <TypeAnimation 
                        sequence={[
                            'Join the thousands of companies worldwide who rely on Dats+ for seamless, efficient, and successful management.', 1000, 
                        ]}
                        speed={50}
                        style={{ fontSize: '0.9em' }}
                        repeat={Infinity}
                    />
                   </div>
                </div>
            </div>
            <div className="h-96"></div>
            
        </>
    )
  }
  
export default RequestDemo;