import React, { useState } from "react";

import PlanTravail from '../../assets/Plan_de_travail_14x_R4mnsAD.width-960.png'
import YourOrganization from '../../assets/your_organisation.width-800.png'
import DataDrivenm from '../../assets/data-driven.width-800.png'
import Tracabilite3x from '../../assets/Tracabilite3x.width-800.png'
import LiveData from '../../assets/live-data.width-800.png'
import data_quality from '../../assets/data_quality.png'


const DataIntegrationCleaning = () => {


    return (
        <>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16">
                        <div className="text-4xl font-bold text-left" style={{animation: 'fadeIn 1s ease-in both'}}>Comprehensive Data Integration<br />and Cleaning Services</div>
                        <div className="pt-4 text-left text-sm">Maximize Data Potential: Integration and Cleaning Services.</div>
                    </div>
                    <img src={PlanTravail} alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={YourOrganization} className="w-56 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Unified Data Excellence</div>
                        <div className="pt-4 text-left text-sm">Our service begins with seamless data integration, bringing together disparate data sets from different platforms, databases, and applications. We ensure a smooth and efficient process, allowing your organization to consolidate information, eliminate silos, and create a unified view of your data ecosystem.<br />Once integrated, our meticulous data cleaning process kicks in. We understand that data quality is paramount for informed decision-making.<br />Our team employs advanced techniques to identify and rectify inconsistencies, inaccuracies, and redundancies within your data. This ensures that your data is not only integrated but is also reliable, accurate, and up-to-date.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-[400px]">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Holistic Data Integration</div>
                        <div className="pt-4 text-left text-sm">We integrate data from diverse sources, including databases, cloud platforms, and third-party applications, providing a comprehensive view of your information landscape.</div>
                    </div>
                    <img src={DataDrivenm} className="w-96 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={Tracabilite3x} className="w-72 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Efficient Cleaning Algorithms</div>
                        <div className="pt-4 text-left text-sm">Our advanced cleaning algorithms identify and rectify data anomalies, ensuring that your information is free from errors and inconsistencies.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-[400px]">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Customized Solutions</div>
                        <div className="pt-4 text-left text-sm">Tailored to meet your specific needs, our services are scalable and adaptable to the unique requirements of your business.</div>
                    </div>
                    <img src={DataDrivenm} className="w-96 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={data_quality} className="w-72 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Data Quality Assurance</div>
                        <div className="pt-4 text-left text-sm">We prioritize data quality, conducting rigorous checks to guarantee the accuracy, completeness, and consistency of your integrated data.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-[400px]">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Time and Cost Efficiency</div>
                        <div className="pt-4 text-left text-sm">Our streamlined processes not only save time but also reduce costs associated with manual data handling and correction.</div>
                    </div>
                    <img src={LiveData} className="w-64 absolute right-24" alt="" />
                </div>
            </div>
            
        </>
    )
  }
  
export default DataIntegrationCleaning;