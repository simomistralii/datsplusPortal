import React, { useState } from "react";

import PlanTravail from '../../assets/Plan_de_travail_14x_e2UFdOE.width-960.png'
import customization from '../../assets/customization.width-800.png'
import EPM_HomePage from '../../assets/EPM_-_Home_page3x.width-800.png'
import business_opportunities from '../../assets/business-opportunities.width-800.png'
import decision_based_product10x from '../../assets/decision_based_product10x.width-800.png'
import LiveData from '../../assets/live-data.width-800.png'
import campaign_analysis from '../../assets/campaign-analysis.width-800.png'
import Reports_analystics from '../../assets/Reports-analystics-min.png'


const DataAnalysis = () => {


    return (
        <>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16">
                        <div className="text-4xl font-bold text-left" style={{animation: 'fadeIn 1s ease-in both'}}>Data Analysis</div>
                        <div className="pt-4 text-left text-sm">Advanced Data Analysis Services for Informed Decision-Making.</div>
                    </div>
                    <img src={PlanTravail} alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={customization} className="w-72 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Strategic Data Empowerment</div>
                        <div className="pt-4 text-left text-sm">Transform decision-making with advanced Data Analysis Services, offering beyond interpretation to unlock actionable insights.<br />Our experienced analysts use cutting-edge techniques, empowering organizations to make informed, strategic decisions and mitigate risks through a systematic, data-driven approach.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Customized Data Analytics</div>
                        <div className="pt-4 text-left text-sm">Tailored to meet the unique needs of your business, our data analysis services are designed to address specific challenges and objectives, ensuring relevance and applicability.</div>
                    </div>
                    <img src={EPM_HomePage} className="w-96 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={business_opportunities} className="w-64 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Predictive Analytics</div>
                        <div className="pt-4 text-left text-sm"> Leverage the power of predictive modeling to forecast future trends, enabling proactive decision-making and strategic planning.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Descriptive and Diagnostic Analytics</div>
                        <div className="pt-4 text-left text-sm">Gain insights into historical data and understand the factors influencing specific outcomes, providing a foundation for performance improvement and optimization.</div>
                    </div>
                    <img src={decision_based_product10x} className="w-64 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={LiveData} className="w-64 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Interactive Data Visualization</div>
                        <div className="pt-4 text-left text-sm">Our team employs advanced visualization tools to transform complex data sets into intuitive, easy-to-understand visual representations, facilitating better communication and comprehension.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Real-Time Analytics</div>
                        <div className="pt-4 text-left text-sm">Stay ahead in a dynamic business environment with real-time data analysis, allowing your organization to respond promptly to changing conditions and emerging opportunities.</div>
                    </div>
                    <img src={campaign_analysis} className="w-64 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={Reports_analystics} className="w-64 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Comprehensive Reporting</div>
                        <div className="pt-4 text-left text-sm">Receive detailed reports and actionable recommendations based on our analyses, empowering your team with the information needed to drive meaningful outcomes.</div>
                    </div>
                </div>
            </div>
        </>
    )
  }
  
export default DataAnalysis;