import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoutes = ()=>{
    const token = useSelector((state) => state.auth.token);
    return token !== null ? <Outlet/> : <Navigate to ='login'/>
}

export default ProtectedRoutes;