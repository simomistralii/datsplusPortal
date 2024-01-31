import React from "react";

import PlanTravail from '../../assets/Plan_de_travail_14x_e2UFdOE.width-960.png'
import User_centric3x from '../../assets/User_centric3x.width-800.png'
import EPM_HomePage from '../../assets/EPM_-_Home_page3x.width-800 (1).png'
import user_management from '../../assets/users-management.width-800 (1).png'
import finance_banner from '../../assets/Finance_banner5x_ANslyKq.width-800.png'
import Tracabilite3x from '../../assets/Tracabilite3x.width-800 (1).png'
import collaboration from '../../assets/Collaboration.width-800 (1).png'
import BluePoint from '../../assets/Bulletpoint.width-280.png'


const ProcessAutomation = () => {
    return (
        <>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16">
                        <div className="text-4xl font-bold text-left" style={{animation: 'fadeIn 1s ease-in both'}}>Process Automation<br />& Training & Support</div>
                        <div className="pt-4 text-left text-sm">Enhance data analysis, use and share to get reliable reports on the<br />company's financial situation.</div>
                    </div>
                    <img src={PlanTravail} alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={EPM_HomePage} className="w-72 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Forecasts and simulations</div>
                        <div className="pt-4 text-left text-sm">Create realistic scenarios to build your forecast and simulations.<br />Benefit from the iterative approach to compute the profitability on future strategies.<br />Follow the evolution of your scenarios in real time based on live automated data collect.<br />Dats ensures the reliability and feasibility of financial forecasts.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Data input</div>
                        <div className="pt-4 text-left text-sm">Input data from different stakeholders on common indicator, simultaneously.<br />With Dats, do not analyze two forecasts but one and only.<br />Designated users can validate the right value to the finest granularity level which automates the variables on the higher level.</div>
                    </div>
                    <img src={User_centric3x} className="w-96 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={collaboration} className="w-72 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Data unification</div>
                        <div className="pt-4 text-left text-sm">To manage a company, financial services require a global view of their data. Each data can come from different sources, gathering them is essential to have a complete and coherent view.<br />Dats allows the unification of data. Improve the collaboration between all the concerned services to have a global planning, which will optimize the accessibility and the restitution.<br />All data are connected, whatever their origin, to support the company's performance.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Data reliability</div>
                        <div className="pt-4 text-left text-sm">Dats guarantees the quality and reliability of data thanks to control rules and workflows:</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">As a flexible tool, it is possible to create custom control rules, tailored to the needs of finance teams.</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Any data modification goes through verification steps, to ensure veracity.</div>
                            </div>
                        </div>
                        <div className="pt-4 text-left text-sm">Ensure data compliance without any stress thanks to automatisation.</div>
                    </div>
                    <img src={user_management} className="w-64 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={finance_banner} className="w-72 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Real time collaboration</div>
                        <div className="pt-4 text-left text-sm">Collaboration between finance and business teams is an integral part of the analytical tool.<br />To make a business work, communication between stakeholders must be ensured.<br />With Dats, comment data or tag a colleague in real time.<br />Delete any risks of data misunderstanding.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">History and traceability</div>
                        <div className="pt-4 text-left text-sm">Dats simplifies budget preparation.<br />Data traceability and history of changes are a must for financial teams.<br />Dats saves time for its users.</div>
                    </div>
                    <img src={Tracabilite3x} className="w-64 absolute right-24" alt="" />
                </div>
            </div>
            
        </>
    )
  }
  
export default ProcessAutomation;