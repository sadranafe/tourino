'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/utils/cookie";

const ProtectedLayout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const token = getCookie('accessToken');
        if(!token) {
            router.replace('/');
        }
    },[])

    return children;
}

export default ProtectedLayout;