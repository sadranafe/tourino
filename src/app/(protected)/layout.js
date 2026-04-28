'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ActiveLink from "@/components/ActiveLink";
import { getCookie } from "@/utils/cookie";
import toast from "react-hot-toast";
import { Skeleton } from "@/components/ui/skeleton";
import UserIconComponent from "@/components/icons/userIcon";
import { CirclesFourIcon , SunHorizonIcon , SwapIcon } from "@phosphor-icons/react";
import { useGetUserData } from "@/services/queries";

const ProtectedLayout = ({ children }) => {
    const { data , isLoading } = useGetUserData();
    const user = data?.data;
    const router = useRouter();

    useEffect(() => {
        if(!user){
            router.replace('/')
            return;
        }

        const profileIsCompleted = user?.fullname && user?.nationalCode && user?.email

        if(!profileIsCompleted) {
            router.replace('/profile/account');
            toast.error('برای ادامه فرایند باید اطلاعات خود را کامل کنید')
        }
    },[ user , router ])

    return(
        <div className = "flex justify-between max-[700px]:flex-wrap gap-5 py-5 max-xl:px-10 max-lg:px-5 max-[320px]:px-2 xl:max-w-[1150px] mx-auto">
            <div className = "sticky max-[400px]:text-xs z-40 bg-white max-[700px]:w-full max-[700px]:flex max-[480px]:flex-wrap max-[700px]:justify-center max-[700px]:items-center max-[700px]:shadow-lg max-[700px]:shadow-neutral-50 max-[700px]:top-[70px] top-[85px] border border-dashed overflow-hidden rounded-xl max-h-fit w-[200px]">
                <ActiveLink href = '/profile/dashboard' activeClass = "text-green-600 bg-green-50" inactiveClass = "bg-transparent text-black hover:bg-neutral-50 hover:text-green-500" classLink = "gap-1 transition-all flex justify-start items-center p-3 border-b max-[700px]:border-l max-[480px]:border-b max-[700px]:border-b-0 w-full max-[700px]:justify-center max-[480px]:w-1/2">
                    <CirclesFourIcon weight = "light" size = {18} className = "w-[18px] text-[15px]"/>
                    داشبورد
                </ActiveLink>

                <ActiveLink href = '/profile/account' activeClass = "text-green-600 bg-green-50" inactiveClass = "bg-transparent text-black hover:bg-neutral-50 hover:text-green-500" classLink = "gap-1 transition-all flex justify-start items-center p-3 border-b max-[700px]:border-l max-[480px]:border-b max-[480px]:border-l-0 max-[700px]:border-b-0 w-full max-[700px]:justify-center text-nowrap max-[480px]:w-1/2 max-[320px]:text-xs">
                    <UserIconComponent customClassName = 'w-[18px] text-[15px]'/>
                    اطلاعات حساب کاربری
                </ActiveLink>

                <ActiveLink href = '/profile/my-tour' activeClass = "text-green-600 bg-green-50" inactiveClass = "bg-transparent text-black hover:bg-neutral-50 hover:text-green-500" classLink = "gap-1 transition-all flex justify-start items-center p-3 border-b max-[700px]:border-l max-[700px]:border-b-0 w-full max-[700px]:justify-center max-[515px]:text-xs text-nowrap max-[480px]:w-1/2">
                    <SunHorizonIcon size = {18} weight = "light"/>
                    تور های من
                </ActiveLink>

                <ActiveLink href = '/profile/transactions' activeClass = "text-green-600 bg-green-50" inactiveClass = "bg-transparent text-black hover:bg-neutral-50 hover:text-green-500" classLink = "gap-1 transition-all flex justify-start items-center p-3 w-full max-[700px]:justify-center max-[515px]:text-xs text-nowrap max-[480px]:w-1/2">
                    <SwapIcon size = {18} weight = "light"/>
                    تراکنش ها
                </ActiveLink>
            </div>

            <div className = "w-10/12 max-[700px]:w-full">
                {
                    isLoading ?
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