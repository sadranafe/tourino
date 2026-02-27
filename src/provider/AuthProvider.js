'use client';
import { AuthContext } from "@/context/AuthContext";
import api from "@/lib/api";
import { deleteCookie, getCookie } from "@/utils/cookie";
import { useEffect, useState } from "react";


const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null);
    const [isAuthenticated , setIsAuthenticated] = useState(false);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        const token = getCookie('accessToken');
        if(!token){
            setLoading(false);
            return;
        }

        fetchUser()
    },[])

    const fetchUser = async () => {
        try{
            const res = await api.get('/user/profile');
            setUser(res.data);
            setIsAuthenticated(true);
        } catch {
            logout()
        } finally {
            setLoading(false)
        }
    }

    const login = userData => {
        setUser(userData);
        setIsAuthenticated(true);
    }

    const logout = () => {
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        setIsAuthenticated(false);
        setUser(null);
        window.location.href = '/';
    }

    return (
        <AuthContext.Provider value = {{ user , isAuthenticated , login , logout , loading }}>{children}</AuthContext.Provider>
    )
};

export default AuthProvider;