import React, { useState } from "react";

import PlanTravail from '../../assets/Plan_de_travail_14x_DnHtCfF.width-960.png'
import Illustration2 from '../../assets/illustrations-02.width-800.png'
import PlanTravail1 from '../../assets/Plan_de_travail_1_copie_32x.width-800.png'
import Data_3603x from '../../assets/Data_3603x.width-800.png'
import Time_is_money_m6RL0zv from '../../assets/Time_is_money_m6RL0zv.width-800.png'
import Illustration_contact_us from '../../assets/Illustration_contact_us.width-960.png'
import address from '../../assets/address.png'

import { IoMail } from "react-icons/io5";
import { FaPhone, FaUser } from "react-icons/fa6";
import { FiVoicemail } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";



const ContactUs = () => {


    return (
        <>
            <div className="relative">
                <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-96">
                    <div className="flex justify-around relative py-10">
                        <div className="absolute left-16 top-16">
                            <div className="text-4xl font-bold text-left" style={{animation: 'fadeIn 1s ease-in both'}}>Contact us</div>
                            <div className="pt-4 text-left text-sm">You have a question?<br />Leave us a message.</div>
                            <div className="px-4 py-2 border rounded-lg my-2 flex space-x-1 shadow-xl">
                                <img className="my-auto h-6" src={address} alt="" />
                                <span className="my-auto text-xs">19 rue Galilée, 75116 PARIS, FRANCE</span>
                            </div>
                        </div>
                        <img src={Illustration_contact_us} className="w-1/2" alt="" />
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
                        <div className="flex justify-center items-center">
                        <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex space-x-2">
                            <SiMinutemailer className="my-auto" color="white" size={24} />
                            <span className="my-auto">Send message</span>
                        </button>
                       </div>
                   </div>
                </div>
            </div>
            <div className="h-96"></div>
            
        </>
    )
  }
  
export default ContactUs;