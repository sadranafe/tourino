'use client';
import { AuthContext } from "@/context/AuthContext";
import { getCookie, setCookie } from "@/utils/cookie";
import { useEffect, useState } from "react";


const AuthProvider = ({ children }) => {
    const [isAuthenticated , setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = getCookie('accessToken');
        setIsAuthenticated(!!token);
    },[])

    const logout = () => {
        setCookie('accessToken' , '' , 0);
        setCookie('refreshToken' , '' , 0);
        setIsAuthenticated(false);
        window.location.href = '/';
    }

    return (
        <AuthContext.Provider value = {{ isAuthenticated , logout }}>{children}</AuthContext.Provider>
    )
};

export default AuthProvider;