'use client';
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/utils/cookie";
import UserIconComponent from "@/components/icons/userIcon";
import { SunHorizonIcon, SwapIcon } from "@phosphor-icons/react";

const ProtectedLayout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const token = getCookie('accessToken');
        if(!token) {
            router.replace('/');
        }
    },[])

    return(
        <div className = "flex justify-between gap-5 p-5 px-10 w-[1280px] mx-auto max-xl:p-5">
            <div className = "sticky top-5 border border-dashed rounded-xl overflow-hidden max-h-fit w-2/12">
                <Link href = '/profile' className = "hover:bg-neutral-50 gap-1 hover:text-green-500 transition-all flex justify-start items-center p-3 border-b w-full">
                    <UserIconComponent customClassName = 'w-[18px] text-[15px]'/>
                    پروفایل
                </Link>

                <Link href = '/profile/my-tour' className = "hover:bg-neutral-50 gap-1 hover:text-green-500 transition-all flex justify-start items-center p-3 border-b w-full">
                    <SunHorizonIcon size = {18} weight = "light"/>
                    تور های من
                </Link>
                
                <Link href = '/profile/transactions' className = "hover:bg-neutral-50 gap-1 hover:text-green-500 transition-all flex justify-start items-center p-3 w-full">
                    <SwapIcon size = {18} weight = "light"/>
                    تراکنش ها
                </Link>
            </div>

            <div className = "w-10/12 bord r">{ children }</div>
        </div>
    )
}

export default ProtectedLayout;