import React from "react"
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/login-flow/LoginForm";
import Home from "home/home"
import { useSelector, useDispatch } from "react-redux";
import PrivateRoute from "./auth/PrivateRoute";
import { loginAction } from "./redux/LoginReducer";

const MainContainer = () => {
    const { isLoggedIn } = useSelector(state => state.loginState)
    const dispatch = useDispatch();
    const handleLogout = () => {
        console.log("Hello Indigo")
        dispatch(loginAction.logout())
    }
    return (
        <Routes>
            <Route path="/auth" element={<LoginForm />} />
            <Route element={<PrivateRoute isLoggednIn={isLoggedIn} />}>
                <Route path="/" element={<Home handleLogout={handleLogout} />} /> :
            </Route>
        </Routes>
    )
}
export default MainContainer