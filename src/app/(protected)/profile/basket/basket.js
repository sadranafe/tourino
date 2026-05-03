import ChevronLeftIcon from "@/components/icons/ChevLeftIcon";
import UserIconComponent from "@/components/icons/userIcon";
import PassengerInfo from "@/components/PassengerInfo";
import { calculateTourDuration } from "@/helper/helper";
import Image from "next/image";

const Basket = props => {
    const { id , image : img , title , price , startDate , endDate , user } = props;
    const tourDuration = calculateTourDuration(startDate , endDate);

    const backBtnHandler = () => {
        console.log('first')
    }

    return (
        <div className = "grid grid-cols-3 max-[845px]:grid-cols-2 max-[500px]:grid-cols-1 gap-2">
            <div className = "relative border rounded-xl p-5 col-span-2 max-[845px]:col-span-1">
                <button onClick = {backBtnHandler} className = "left-4 top-4 absolute">
                    <ChevronLeftIcon customClasses = 'w-5 h-5 rounded-full text-neutral-400 cursor-pointer'/>
                </button>
                <div className = "flex justify-normal items-center gap-2 mb-5">
                    <UserIconComponent customClassName = 'text-2xl' weight = "light"/>
                    <h1 className = "text-2xl">مشخصات مسافر</h1>
                </div>

                <div className = "grid grid-cols-2 max-[845px]:grid-cols-1 items-center justify-items-center gap-y-2">
                    <PassengerInfo { ...user } />
                </div>
            </div>

            <div className = "border rounded-xl col-span-1">
                <div className = "w-full relative aspect-[16/9]">
                    <Image src = {img} alt = {title} fill sizes = "100vw" className = "object-cover"/>
                </div>

                <div className = "p-2">
                    <div className = "flex items-center justify-between my-2 mb-3 px-2">
                        <h1 className = "text-base font-bold">{title}</h1>
                        <p className = "text-neutral-400">{`${tourDuration?.night} شب  و ${tourDuration?.day} روز`}</p>
                    </div>

                    <div className = "border-t border-dashed border-neutral-300 pt-3 flex justify-between items-center px-2">
                        <p>قیمت نهایی </p>
                        <p>
                            <span className = "text-xl max-[1100px]:text-base text-blue-400 ml-1">{price?.toLocaleString()}</span> <span>تومان</span>
                        </p>
                    </div>

                    <div>
                        <button className = "w-full bg-green-500 hover:bg-green-600 transition-all text-white rounded-md p-2 mt-2">ثبت و خرید نهایی</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Basket;