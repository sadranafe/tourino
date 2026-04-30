import api from "@/lib/api";
import { getCookie } from "@/utils/cookie";
import axios from "axios";
import { cookies } from "next/headers";
import Basket from "./basket";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const dynamic = 'force-dynamic';

const getServerToken = () => {
    const cookieStore = cookies();
    return cookieStore.get('accessToken')?.value
}

const page = async () => {
    const accessToken = getServerToken()
    const data = await fetch(`${BASE_URL}/basket` , {
        headers: {
            Authorization : `Bearer ${ accessToken }`
        },
        cache : 'no-store',
    })
    const res = await data.json();
    console.log(res)
    
    return (
        <div className = "bg-bl ue-50">
            <Basket { ...res } />
        </div>
    );
};

export default page;