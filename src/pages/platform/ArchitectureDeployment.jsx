import React, { useState } from "react";

import PlanTravail from '../../assets/Plan_de_travail_1_copie.width-800.png'
import customization from '../../assets/customization.width-800.png'
import BluePoint from '../../assets/Bulletpoint.width-280.png'
import collaboration from '../../assets/collaboration_site.width-800.gif'
import DataAPI from '../../assets/Data_API_qzJowEF.width-960.png'
import Creation_datablocks_and_dashboard_ from '../../assets/Creation_datablocks_and_dashboard_.width-800.gif'
import ordi from '../../assets/ordi_code_embedded_site_.width-800.png'
import users_management from '../../assets/users-management.width-800.png'
import Build_and_manage_9y4jnWu from '../../assets/Build_and_manage_9y4jnWu.width-600.png'
import Organise from '../../assets/Organise.width-600.png'
import Your_queries from '../../assets/Your_queries.width-600.png'

import azure from '../../assets/azure.width-250.png'
import bigsql from '../../assets/bigsql_cVegdZI.width-250.png'
import ibmdb2 from '../../assets/ibmdb2.width-250.png'
import mysql from '../../assets/mysql_9I7K4pD.width-250.png'
import Teradata from '../../assets/Teradata.width-250.png'
import netezza from '../../assets/netezza.width-250.png'
import aws from '../../assets/aws_Atsnj1h.width-250.png'
import oracle from '../../assets/oracle_A2v2E9L.width-250.png'
import hive from '../../assets/hive.width-250.png'
import pgsql from '../../assets/pgsql.width-250.png'
import bigquery from '../../assets/gbigquery.width-250.png'
import elastic from '../../assets/elastic_Me7dV4P.width-250.png'
import powerbi from '../../assets/powerbi.png'
import excel from '../../assets/excel.png'
import python from '../../assets/python.png'
import azure_devops from '../../assets/prod-ms-azure-devops-server_Big.png'
import canva from '../../assets/canva.png'
import google_analytic from '../../assets/google_analytics_official_logo_icon_169084.png'

const ArchitectureDeployment = () => {


    return (
        <>
        
            <div className="relative pb-10">
                <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-96">
                    <div className="flex justify-around relative py-10">
                        <div className="absolute left-16 top-16">
                            <div className="text-4xl font-bold text-left" style={{animation: 'fadeIn 1s ease-in both'}}>Architecture & Deployment</div>
                            <div className="pt-4 text-left text-sm">Finally a modern way to collect and use data.<br />Save time to build and deploy tailor made dashboards, with high<br />performance and enforced security.</div>
                        </div>
                        <img src={DataAPI} alt="" />
                    </div>
                </div>
                <div className="rounded-xl shadow-2xl border absolute left-0 right-0 m-auto top-[340px] w-fit py-3 px-10 flex flex-col gap-2 bg-white">
                    <div className="text-xl font-bold">A unique and innovative architecture</div>
                    <div className="text-xs">Based on a 5 years work, our R&D team bring a new way to think data analtycs, combining <strong>flexibilty, security and performance</strong></div>
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={Creation_datablocks_and_dashboard_} className="w-96 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Use and reuse datablocks to build your dashboard</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">No IT skills are required to make quick and easy querying with Datablocks™</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Include your computing rules directly from the Datablock builder</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Build powerful dashboards based on your datablocks</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Infinite customization</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div>Push it to the next level</div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Flexible tool for specific business needs</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Pixel perfect design</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Design once, deploy infinitely</div>
                            </div>
                        </div>
                    </div>
                    <img src={customization} className="w-96 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={ordi} className="w-96 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Easy embedded in less than 15 minutes</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div>Low code for IT, no code for business!</div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Full web SDK (HTML, JS, etc…)</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Seamless indicators or dashboards into tier apps</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Smart integration according with user actions</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Live collaboration</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Share tasks with team members and built dashboards in live</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Versions management and modifications traceability</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Designed to be in an iterative project mode</div>
                            </div>
                        </div>
                    </div>
                    <img src={collaboration} className="w-96 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={users_management} className="w-56 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Users management</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">SSO authenfication supported (SAML V2)</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Tailor made role management accordingly to your organization!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Very simple to set up</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">The bridge: the link between data and dashboards, fully manageable</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Standard deployment, quickly operational</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">For more information, take a look at our <a className=" underline" href="">technical requirements</a>.</div>
                            </div>
                        </div>
                    </div>
                    <img src={PlanTravail} className="w-96 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex flex-col justify-around relative py-10">
                    <div>Need to go further?</div>
                    <div className="text-2xl font-bold">Discover our data management features</div>
                    <div className="text-sm">Build and manage all your data environment with Dats</div>
                    <div className="flex justify-center space-x-10 my-10 pt-10">
                        <div className="border border-[#02174c] bg-white transition-all h-56 w-64 relative rounded-md px-2 group shadow-2xl" >
                            <img src={Build_and_manage_9y4jnWu} className=" group-hover:scale-110 transition-all absolute -top-16 w-32 left-0 right-0 m-auto" alt="" />
                            <div className="mt-16 text-[#02174c] ">
                                <div className="font-bold">Data modeling</div>
                                <div className="text-sm">The modern way to manage your data model, from your web browser!</div>
                            </div>
                            <div className="absolute bottom-0.5 left-0 right-0 m-auto text-blue-600 hover:text-blue-900 cursor-pointer hover:scale-110 transition-all" style={{fontSize: '0.65rem'}}> More about solution</div>
                        </div>
                        <div className="border border-[#02174c] bg-white transition-all h-56 w-64 relative rounded-md px-2 group shadow-2xl">
                            <img src={Organise} className=" group-hover:scale-110 transition-all absolute -top-16 w-32 left-0 right-0 m-auto" alt="" />
                            <div className="mt-16 text-[#02174c] ">
                                <div className="font-bold">Dictionary</div>
                                <div className="text-sm">Bring all the stakeholders to a common view and enrich your model with metadata</div>
                            </div>
                            <div className="absolute bottom-0.5 left-0 right-0 m-auto text-blue-600 hover:text-blue-900 cursor-pointer hover:scale-110 transition-all" style={{fontSize: '0.65rem'}}> More about solution</div>
                        </div>
                        <div className="border border-[#02174c] bg-white transition-all h-56 w-64 relative rounded-md px-2 group shadow-2xl">
                            <img src={Your_queries} className=" group-hover:scale-110 transition-all absolute -top-16 w-32 left-0 right-0 m-auto" alt="" />
                            <div className="mt-16 text-[#02174c] ">
                                <div className="font-bold">Job monitoring</div>
                                <div className="text-sm">Follow jobs behaviour and status in live and detect anomalies and impacts in the dependency chain</div>
                            </div>
                            <div className="absolute bottom-0.5 left-0 right-0 m-auto text-blue-600 hover:text-blue-900 cursor-pointer hover:scale-110 transition-all" style={{fontSize: '0.65rem'}}> More about solution</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-fit">
                <div className="flex flex-col justify-around relative py-10 mt-32">
                    <div className="text-2xl font-bold">Connect to all DB & Cross analytics</div>
                    <div className="text-xs py-2">Bring data from any sources and make cross analytics from different systems!</div>
                    <div className="flex flex-col gap-3 py-4">
                        <div className="flex justify-center gap-3">
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={azure} alt="" className="m-auto" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={bigsql} alt="" className="m-auto" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={ibmdb2} alt="" className="m-auto" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={mysql} alt="" className="m-auto" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={Teradata} alt="" className="m-auto" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={netezza} alt="" className="m-auto" />
                            </div>
                        </div>
                        <div className="flex justify-center gap-3">
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={aws} alt="" className="m-auto" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={oracle} alt="" className="m-auto" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={hive} alt="" className="m-auto" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={pgsql} alt="" className="m-auto" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={bigquery} alt="" className="m-auto" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={elastic} alt="" className="m-auto" />
                            </div>
                        </div>
                        <div className="flex justify-center gap-3">
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={powerbi} alt="" className="m-auto" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={excel} alt="" className="m-auto" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={azure_devops} alt="" className="m-auto w-20" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={python} alt="" className="m-auto w-20" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={canva} alt="" className="m-auto w-20" />
                            </div>
                            <div className="bg-white w-32 h-24 p-2 flex  justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-all">
                                <img src={google_analytic} alt="" className="m-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
  }
  
export default ArchitectureDeployment;