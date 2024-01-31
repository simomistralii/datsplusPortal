import React, { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom";

import illustration from '../assets/homepage_Illustration.width-1000.png'
import elaboration from '../assets/elaboration_budgetaire.width-400.png'
import EPM from '../assets/EPM.width-400.png'
import Reporting from '../assets/Reporting_1.width-400.png'
import Centric from '../assets/User_centric3x.width-400.png'
import BluePoint from '../assets/Bulletpoint.width-280.png'

import easytodeploy from '../assets/easytodeploy.width-2000.gif'
import dataanywhere from '../assets/dataanywhere.width-2000.gif'
import customization from '../assets/customization.width-2000.gif'

const steps = [
    {title: 'Easy to deploy', txt: 'Build it once and deploy it unlimited times! Save time and increases performance!', img: easytodeploy},
    {title: 'Your data anywhere, anytime', txt: 'Built on a cloud technology, Nodata allow users to consult and comment dashboards from any device, accordingly to the organization security rules', img: dataanywhere},
    {title: 'Push customization to the next level', txt: 'Nodata allows dashboards makers to be totally free, regarding KPI to show, and design to apply! Get tailor made results for your unique and specifics needs', img: customization},
]

const Home = () => {

    const [step, setStep] = useState(0);

    useEffect(() => {
        AOS.refresh();
      }, [])

    return (
      <div className="bg-[#02174c] text-white w-full px-32 space-y-5">

        <div className="flex justify-around relative">
            <div className="absolute left-16 top-16">
                <div className="text-4xl font-bold text-left" style={{animation: 'fadeIn 1s ease-in both'}}>Dats, the missing tool for<br/>finance</div>
                <div className="pt-2 text-left">
                <TypeAnimation 
                    sequence={[
                        'A future oriented finance solution for driving powerful decisions!', 1000, 'An innovative financial solution geared towards shaping impactful decisions for the future!', 1000, 'A forward-thinking financial solution designed to empower strategic decision-making!', 1000
                    ]}
                    speed={50}
                    style={{ fontSize: '0.9em' }}
                    repeat={Infinity}
                />
                </div>
                <div className="text-left pt-5">
                    <Link to={'/request-demo'} className='cursor-pointer hover:scale-105 transition-all px-2 py-0.5 bg-orange-500 rounded-md text-lg animate-pulse'>Get a demo</Link>
                </div>
            </div>
            <img src={illustration} alt="" />
        </div>


        <div className="py-5">
            <div className="pb-14">
                <div>We create betterment</div>
                <div className="text-2xl font-bold">Strengthen your decision making</div>
            </div>
            <div className="flex justify-center space-x-10 my-10">
                
                <div className="bg-white hover:bg-gray-50 transition-all h-56 w-52 relative rounded-md px-2 group" >
                    <img src={elaboration} className=" group-hover:scale-110 transition-all absolute -top-16 w-32 left-0 right-0 m-auto" alt="" />
                    <div className="mt-16 text-black ">
                        <div className="font-bold">Data Integration Cleaning</div>
                        <div className="text-sm">Create different forecast scenarios to anticipate organizational changes impacts.</div>
                    </div>
                    <div className="absolute bottom-0.5 left-0 right-0 m-auto text-blue-800 hover:text-blue-900 cursor-pointer hover:scale-110 transition-all" style={{fontSize: '0.65rem'}}> More about solution</div>
                </div>
                <div className="bg-white hover:bg-gray-50 transition-all h-56 w-52 relative rounded-md px-2 group">
                    <img src={EPM} className=" group-hover:scale-110 transition-all absolute -top-16 w-32 left-0 right-0 m-auto" alt="" />
                    <div className="mt-16 text-black ">
                        <div className="font-bold">Data Analysis</div>
                        <div className="text-sm">Create different forecast scenarios to anticipate organizational changes impacts.</div>
                    </div>
                    <div className="absolute bottom-0.5 left-0 right-0 m-auto text-blue-800 hover:text-blue-900 cursor-pointer hover:scale-110 transition-all" style={{fontSize: '0.65rem'}}> More about solution</div>
                </div>
                <div className="bg-white hover:bg-gray-50 transition-all h-56 w-52 relative rounded-md px-2 group">
                    <img src={Reporting} className=" group-hover:scale-110 transition-all absolute -top-16 w-32 left-0 right-0 m-auto" alt="" />
                    <div className="mt-16 text-black ">
                        <div className="font-bold">Developement of reports & interactive dashboards</div>
                        <div className="text-sm">Create different forecast scenarios to anticipate organizational changes impacts.</div>
                    </div>
                    <div className="absolute bottom-0.5 left-0 right-0 m-auto text-blue-800 hover:text-blue-900 cursor-pointer hover:scale-110 transition-all" style={{fontSize: '0.65rem'}}> More about solution</div>
                </div>
                <div className="bg-white hover:bg-gray-50 transition-all h-56 w-52 relative rounded-md px-2 group">
                    <img src={Centric} className=" group-hover:scale-110 transition-all absolute -top-16 w-32 left-0 right-0 m-auto" alt="" />
                    <div className="mt-16 text-black ">
                        <div className="font-bold">Process Automation & Training & Support</div>
                        <div className="text-sm">Create different forecast scenarios to anticipate organizational changes impacts.</div>
                    </div>
                    <div className="absolute bottom-0.5 left-0 right-0 m-auto text-blue-800 hover:text-blue-900 cursor-pointer hover:scale-110 transition-all" style={{fontSize: '0.65rem'}}> More about solution</div>
                </div>
            </div>
        </div>


        <div className="py-4">
            <div className="text-2xl font-bold">A modern approach driven by data capitalizing management</div>
            <div className="text-sm py-2">Tailor your interface, no training required, users quickly adapt and adopt the solution.</div>

            <div className="px-44 pt-16 flex space-x-6">
                <div className="flex flex-col space-y-3 w-1/2">
                    {
                        steps.map((s, i) => {
                            return (
                                <div className="flex  cursor-pointer" onClick={() =>{setStep(i);}} key={i}>
                                    <img src={BluePoint} alt="" className="my-auto w-10" />
                                    <div className="text-left">
                                        <div className="my-auto">{s.title}</div>
                                        {step === i && <div className='my-auto text-xs transition-all'>{s.txt}</div>}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-1/3 my-auto">
                    {step >= 0 && <img src={steps[step].img} alt="" className="my-auto" />}
                </div>
                
            </div>

            
        </div>

      </div>
    )
  }
  
export default Home;