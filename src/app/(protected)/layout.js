'use client';
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/provider/AuthProvider";
import { getCookie } from "@/utils/cookie";
import toast from "react-hot-toast";
import { Skeleton } from "@/components/ui/skeleton";
import UserIconComponent from "@/components/icons/userIcon";
import { SunHorizonIcon, SwapIcon } from "@phosphor-icons/react";

const ProtectedLayout = ({ children }) => {
    const { user , loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const token = getCookie('accessToken');
        if(!token) {
            router.replace('/');
            return;
        }

        if(loading) return;
        const hasFullname = !!user?.fullname;
        const hasNationalCode = !!user?.nationalCode;
        const hasEamil = !!user?.email;
        const isProfileComplete  = hasFullname && hasNationalCode && hasEamil;

        if(!isProfileComplete) {
            router.replace('/profile/account');
            toast.error('برای ادامه فرایند باید اطلاعات خود را کامل کنید')
        }
    },[ user , router , loading ])

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

            <div className = "w-10/12 max-[700px]:w-full">
                {
                    loading ?
                    <div className = "w-full h-full p-5 border rounded-xl">
                        <Skeleton className = "h-5 w-1/2 mb-3" />
                        <div className = "w-full grid grid-cols-2 gap-2">
                            <Skeleton className = "h-[35px] w-1/2" />
                            <Skeleton className = "h-[35px] w-1/2" />
                            <Skeleton className = "h-[35px] w-1/2" />
                            <Skeleton className = "h-[35px] w-1/2" />
                        </div>
                    </div> :
                    children
                }
            </div>
        </div>
    )
}

export default ProtectedLayout;