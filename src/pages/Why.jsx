import React, { useState } from "react";

import PlanTravail from '../assets/Plan_de_travail_14x_DnHtCfF.width-960.png'
import Illustration2 from '../assets/illustrations-02.width-800.png'
import PlanTravail1 from '../assets/Plan_de_travail_1_copie_32x.width-800.png'
import Data_3603x from '../assets/Data_3603x.width-800.png'
import Time_is_money_m6RL0zv from '../assets/Time_is_money_m6RL0zv.width-800.png'


const Why = () => {


    return (
        <>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16">
                        <div className="text-4xl font-bold text-left" style={{animation: 'fadeIn 1s ease-in both'}}>Dats+</div>
                        <div className="pt-4 text-left text-sm">Welcome to our young startup, a pioneer in the dynamic field of data management<br/>and the development of reports and dashboards in Morocco.<br/>At a time when the increasing demand for data analysis is transforming businesses,<br/>we emerge with the ambition to redefine industry standards in Morocco.</div>
                    </div>
                    <img src={PlanTravail} alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={Illustration2} className="w-56 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Opportunities in the Moroccan Market</div>
                        <div className="pt-4 text-left text-sm">Our strategic positioning in Morocco is based on the opportunities offered by a rapidly expanding market.<br/>The swift digitization of Moroccan businesses creates a growing demand for efficient data management solutions.<br/>Our startup is committed to addressing these needs by providing innovative services tailored to the local reality.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Global Vision, Local Action</div>
                        <div className="pt-4 text-left text-sm">Although based in Morocco, our vision knows no boundaries.<br/>We aspire to collaborate with clients worldwide, bringing our local expertise to a global scale.<br/>Our dedicated team works tirelessly to create versatile data management solutions, enabling our clients to thrive in an increasingly connected business environment.</div>
                    </div>
                    <img src={PlanTravail1} className="w-64 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={Illustration2} className="w-56 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Our Quality-Focused Vision</div>
                        <div className="pt-4 text-left text-sm">At the core of our startup lies an unwavering commitment to quality.<br/>We believe that top-notch data management solutions are the essential foundation for the success of our clients.<br/>From collection to analysis, we strive to ensure constant excellence, ensuring that every project we undertake is imbued with the highest possible quality.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Project Horizon Openness</div>
                        <div className="pt-4 text-left text-sm">We believe that innovation arises from diversity.<br/>Our startup is committed to undertaking diversified projects, ranging from small businesses to large corporations.<br/>Our open-minded approach to projects allows us to explore new ideas, remain flexible, and adapt our solutions to a diverse range of needs, contributing to the constant evolution of our expertise.</div>
                    </div>
                    <img src={Data_3603x} className="w-64 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={Time_is_money_m6RL0zv} className="w-56 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Encouraging Talented Youth Without Academic Requirements</div>
                        <div className="pt-4 text-left text-sm">With us, talent and competence take precedence over academic titles.<br/>We take pride in promoting an environment where gifted and talented youth can flourish, regardless of their educational background.<br/>Our startup recognizes and encourages practical skills, providing a platform where innovative youth can bring fresh ideas and contribute to our common mission of redefining data management.</div>
                    </div>
                </div>
            </div>
            
        </>
    )
  }
  
export default Why;