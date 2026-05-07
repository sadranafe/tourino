import { useRouter } from "next/navigation";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import { calculateTourDuration } from "@/helper/helper";
import toast from "react-hot-toast";
import PassengerInfo from "@/components/PassengerInfo";
import ChevronLeftIcon from "@/components/icons/ChevLeftIcon";
import UserIconComponent from "@/components/icons/userIcon";
import useRedirecting from "@/hooks/useRedirecting";

const Basket = props => {
    const { image : img , title , price , startDate , endDate , user } = props;
    const tourDuration = calculateTourDuration(startDate , endDate);
    const router = useRouter();
    const { isRedirecting , startRedirecting , stopRedirecting } = useRedirecting()
    
    const mutationFn = () => {
        const { fullname , nationalCode , birthDate , gender } = user;
        return api.post('/order' , { fullName : fullname, nationalCode , gender , birthDate })
    }

    const { mutate , isPending } = useMutation({
        mutationKey : ['order'],
        mutationFn,
        onSuccess : res => {
            toast.success(res?.data?.message)
            startRedirecting();
            router.replace('/profile/transactions')
            // we have to redirect the user to the /profile/transactions and show the user's submitted tours
            // add a loader to the button 
        },
        onError : err => {
            stopRedirecting();
            console.log('error : ' + err)
        }
    })

    return (
        <div className = "grid grid-cols-3 max-[845px]:grid-cols-2 max-[500px]:grid-cols-1 gap-2">
            <div className = "relative border rounded-xl p-5 col-span-2 max-[845px]:col-span-1">
                <button onClick = {() => router.back()} className = "left-4 top-4 absolute hover:bg-neutral-100 rounded-full p-1.5 transition-all">
                    <ChevronLeftIcon customClasses = 'w-5 h-5 rounded-full text-neutral-400 cursor-pointer'/>
                </button>
                <div className = "flex justify-normal items-center gap-2 mb-5">
                    <UserIconComponent customClassName = 'text-2xl' weight = "light"/>
                    <h1 className = "text-2xl">مشخصات مسافر</h1>
                </div>

                <div className = "grid grid-cols-2 max-[845px]:grid-cols-1 items-center justify-items-center gap-y-4">
                    <PassengerInfo { ...user } />
                </div>
            </div>

            <div className = "border rounded-xl col-span-1">
                <div className = "w-full relative aspect-[16/9]">
                    <Image src = {img} alt = {title} priority fill sizes = "(max-width: 500px) 100vw, (max-width: 845px) 50vw, 33vw" className = "object-cover"/>
                </div>

                <div className = "p-2">
                    <div className = "flex items-center justify-between my-2 mb-3 px-2">
                        <h1 className = "text-base font-bold">{title}</h1>
                        <p className = "text-neutral-400">{`${tourDuration?.night} شب  و ${tourDuration?.day} روز`}</p>
                    </div>

                    <div className = "border-t border-dashed border-neutral-300 pt-3 flex justify-between items-center px-2 my-3">
                        <p>قیمت نهایی </p>
                        <p>
                            <span className = "text-xl max-[1100px]:text-base text-blue-400 ml-1">{price?.toLocaleString()}</span> <span>تومان</span>
                        </p>
                    </div>

                    <div>
                        <button onClick = { () => mutate() } disabled = { isPending || isRedirecting } className = "w-full bg-green-500 hover:bg-green-600 disabled:bg-green-400 disabled:cursor-not-allowed transition-all text-white rounded-md p-2 py-3">
                            { isPending ? 'درحال بررسی . . . ' : isRedirecting ? 'درحال انتقال . . .' :  'ثبت و خرید نهایی' }
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Basket;