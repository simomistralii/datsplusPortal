import React, { useState } from "react";

import PlanTravail from '../../assets/Plan_de_travail_1_copie.width-800.png'
import Time_is_money_m6RL0zv from '../../assets/Time_is_money_m6RL0zv.width-800.png'

import embedded_analytics from '../../assets/embedded_analytics.original.width-960.png'
import customization from '../../assets/customization.width-800.png'
import BluePoint from '../../assets/Bulletpoint.width-280.png'
import app_iNNtry6 from '../../assets/embedded-data-in-your-app_iNNtry6.width-800.gif'
import collaboration from '../../assets/Collaboration.width-800.png'
import presentation from '../../assets/presentation.width-800.png'
import management from '../../assets/Management.width-800.png'



const MajorFeatures = () => {


    return (
        <>
        
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-96">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16">
                        <div className="text-4xl font-bold text-left" style={{animation: 'fadeIn 1s ease-in both'}}>Major features</div>
                        <div className="pt-4 text-left text-sm">Unleash the power of your data by deploying <strong>simple, clear and<br/>accurate</strong> business indicators.</div>
                    </div>
                    <img src={embedded_analytics} alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={customization} className="w-96 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Seamless customization</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Connect to all your data sources and business apps and unleash their power!</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Each team its own KPI. Get personalized insights and dashboards related to your reals needs, to make real data-driven decisions!</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">No training needed to use it</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Embedded data in your website and application</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div>Release the power of your data and get it where it really counts!</div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Through internal tools or public websites, get your data in the right spot. No need to come and go, your insights are already here!</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">It’s live Use filters and queries to get instants results</div>
                            </div>
                        </div>
                    </div>
                    <img src={app_iNNtry6} className="w-96 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={collaboration} className="w-96 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Enrich data with collaboration</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Get data-driven conversations, with the right person and at the right moment!</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Comment directly on the concerned data and see your comment anywhere the data will appear</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Different levels: note for yourself, tag a colleague or discuss with a group in private</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Pin your final answer and make it public to share it with every stakeholdert</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Presentation mode</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div>Standardized and automated presentation feature: share indicators with stakeholders in one-click</div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Verified accuracy of the data</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Keep history and compare with previous numbers in one look</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Time saving for the presenter</div>
                            </div>
                        </div>
                    </div>
                    <img src={presentation} className="w-96 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={Time_is_money_m6RL0zv} className="w-56 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Querying in Natural Language</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div>Dats takes part of the discussion!</div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Use natural language to ask directly the right data that you need, from your usual collaborative tools such as Slack or Teams</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Thanks to Dats proprietary AI, no need to explain, just ask! Dats bot will understand the conversation and keep the context in mind to deliver the right information</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02174c] text-white w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <div className="absolute left-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Nothing to install</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Get your dashboards on any device, anytime thanks to Nodata’s web architecture</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Consult and work your data directly from your browser</div>
                            </div>
                        </div>
                    </div>
                    <img src={PlanTravail} className="w-96 absolute right-24" alt="" />
                </div>
            </div>
            <div className="bg-white text-[#02174c] w-full px-32 space-y-5 h-80">
                <div className="flex justify-around relative py-10">
                    <img src={management} className="w-56 absolute left-24" alt="" />
                    <div className="absolute right-16 top-16 w-1/2">
                        <div className="text-2xl font-bold text-left">Get your data, and get it fast</div>
                        <div className="pt-4 text-left text-sm flex flex-col gap-3">
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Thanks to our unique technology, get the best performance from your data!</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Requests are not all the same. Nodata will use the right way to ask results from your DB, based on what you are asking</div>
                            </div>
                            <div className="flex">
                                <img src={BluePoint} className="my-auto w-10" alt="BluePoint" />
                                <div className="my-auto">Smart queries bring you performance, for the best User eXperience possible!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
  }
  
export default MajorFeatures;