'use client';
import { createContext, useContext, useEffect, useState } from "react";
import api from "@/lib/api";
import { deleteCookie, getCookie } from "@/utils/cookie";

const AuthContext = createContext(null);

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

    const userSetter = userData => {
        setUser(prev => {
            return {prev , ...userData}
        })
    }

    return (
        <AuthContext.Provider value = {{ user , userSetter , isAuthenticated , login , logout , loading }}>{children}</AuthContext.Provider>
    )
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined) throw new Error('Context was used outside provider');
    return context
}

export { useAuth };
export default AuthProvider;