import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DashboardPage from "./components/aem-components/DashboardPage";
import AemContent from "./components/aem-components/ContentFragment";
const MainContainer = ({ handleLogout }) => {
    return (
        <Routes>
            <Route path="/" element={<Home handleLogout={handleLogout} />} >
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="aem-content" element={<AemContent />} />
            </Route>    
        </Routes>
    )
}

export default MainContainer