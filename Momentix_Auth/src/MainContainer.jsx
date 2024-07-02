import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/login-flow/LoginForm";
import Home from "home/home"
import { useSelector} from "react-redux";
import PrivateRoute from "./auth/PrivateRoute";

const MainContainer = () => {
    const { isLoggedIn } = useSelector(state => state.loginState)
    
    console.log("This is the value of the isLogged In", isLoggedIn)
    return (
        <Routes>
            <Route path="/auth" element={<LoginForm />} />
            <Route element={<PrivateRoute isLoggednIn={isLoggedIn}/>}>
                <Route path="/" element={<Home/>} /> :
            </Route>
        </Routes>
    )
}   
export default MainContainer