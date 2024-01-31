import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';


import Layout from './layouts/Layout';
import LayoutPortal from "./pages/portal/layouts/LayoutPortal";
import Home from './pages/Home';
import Why from "./pages/Why";
import MajorFeatures from "./pages/platform/MajorFeatures";
import ArchitectureDeployment from "./pages/platform/ArchitectureDeployment";
import DataIntegrationCleaning from "./pages/solutions/DataIntegrationCleaning";
import DataAnalysis from "./pages/solutions/DataAnalysis";
import ReportsandInteractiveDashboard from "./pages/solutions/ReportsandInteractiveDashboard";
import ProcessAutomation from "./pages/solutions/ProcessAutomation";
import ContactUs from "./pages/portal/ContactUs";
import RequestDemo from "./pages/portal/RequestDemo";

import Login from "./pages/portal/login";
import Profil from "./pages/portal/Profil";

import HomePortal from "./pages/portal/HomePortal";



class App extends Component {
    render() {
        return (
            <div className="App select-none">
                <AuthProvider>
                    <BrowserRouter basename=''>
                        <Routes>
                            <Route element={<Layout />} >
                                <Route path="/" element={<Home />} />
                                <Route path="/Why" element={<Why />} />
                                <Route path="/contact-us" element={<ContactUs />} />
                                <Route path="/request-demo" element={<RequestDemo />} />
                                <Route path="/Platform/major-features" element={<MajorFeatures />} />
                                <Route path="/Platform/architecture-deployment" element={<ArchitectureDeployment />} />
                                <Route path="/solutions/data-integrations-cleaning" element={<DataIntegrationCleaning />} />
                                <Route path="/solutions/data-analysis" element={<DataAnalysis />} />
                                <Route path="/solutions/developement-of-reports-and-interactive-dashboards" element={<ReportsandInteractiveDashboard />} />
                                <Route path="/solutions/Process-Automation-and-Training-and-Support" element={<ProcessAutomation />} />
                            </Route>

                            <Route path="/login" element={<Login />} />
                            <Route element={<LayoutPortal />} >
                                <Route path="/profil" element={<Profil />} />
                                <Route path="/homeportal" element={<HomePortal />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </div>
        );
    }
}

export default App;