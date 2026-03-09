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
        <div className = "flex justify-between max-[700px]:flex-wrap gap-5 p-5 px-10 max-lg:px-5 xl:w-[1280px] mx-auto">
            <div className = "sticky max-[400px]:text-xs z-10 bg-white max-[700px]:w-full max-[700px]:flex max-[700px]:justify-center max-[700px]:items-center max-[700px]:shadow-lg max-[700px]:shadow-neutral-50 top-5 border border-dashed rounded-xl overflow-hidden max-h-fit w-[200px]">
                <Link href = '/profile' className = "hover:bg-neutral-50 gap-1 hover:text-green-500 transition-all flex justify-start items-center p-3 border-b max-[700px]:border-l max-[700px]:border-b-0 w-full max-[700px]:justify-center">
                    <UserIconComponent customClassName = 'w-[18px] text-[15px]'/>
                    پروفایل
                </Link>

                <Link href = '/profile/my-tour' className = "hover:bg-neutral-50 gap-1 hover:text-green-500 transition-all flex justify-start items-center p-3 border-b max-[700px]:border-l max-[700px]:border-b-0 w-full max-[700px]:justify-center">
                    <SunHorizonIcon size = {18} weight = "light"/>
                    تور های من
                </Link>
                
                <Link href = '/profile/transactions' className = "hover:bg-neutral-50 gap-1 hover:text-green-500 transition-all flex justify-start items-center p-3 w-full max-[700px]:justify-center">
                    <SwapIcon size = {18} weight = "light"/>
                    تراکنش ها
                </Link>
            </div>

            <div className = "w-10/12 max-[700px]:w-full">{ children }</div>
        </div>
    )
}

export default ProtectedLayout;