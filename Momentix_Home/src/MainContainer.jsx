import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
const MainContainer = ({ handleLogout }) => {
    return (
        <Routes>
            <Route path="/" element={<Home handleLogout={handleLogout} />}></Route>
        </Routes>
    )
}

export default MainContainer