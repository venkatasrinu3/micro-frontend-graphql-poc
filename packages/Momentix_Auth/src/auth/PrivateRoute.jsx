import React from "react"
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({isLoggednIn}) => {
    if(!isLoggednIn){
        return <Navigate to="/auth" />
    }else{
        return <Outlet />
    }
}
export default PrivateRoute;