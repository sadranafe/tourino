import Link from "next/link";
import { calclateTourDuration, vehicleTypeTranslate } from "@/helper/helper";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import MapIcon from "@/components/icons/MapIcon";
import MedalIconComponent from "@/components/icons/MedalIcon";
import UserIconComponent from "@/components/icons/userIcon";
import PathIconComponent from "@/components/icons/PathIcon";
import CalendarDots from "@/components/icons/CalendarDots";
import BusIconComponent from "@/components/icons/BusIcon";
import UsersIconComponent from "@/components/icons/UsersIcon";
import ShieldIconComponent from "@/components/icons/SheildIcon";
import TrainIconComponent from "@/components/icons/TrainIcon";
import AirplaneIconComponent from "@/components/icons/AirplaneIcon";
import ShipIcon from "@/components/icons/ShipIcon";
import CarIcon from "@/components/icons/CarIcon";
import ChevronLeftIcon from "@/components/icons/ChevLeftIcon";
import { Tooltip } from "@mui/material";
import ReserveLink from "./ReserveLink";


const HighlightedTour = props => {
    const { id , image : img , title , startDate , endDate , origin , fleetVehicle , price , availableSeats , capacity , insurance , options } = props;
    const tourDuration = calclateTourDuration(startDate , endDate);

    const tourKeyFeatures = [
        { icon : <UserIconComponent/> , title : 'تورلیدر از مبدا' },
        { icon : <MapIcon/> , title : 'برنامه سفر' },
        { icon : <MedalIconComponent/> , title : 'تضمین کیفیت' },
    ]

    const tourInfo = [
        { title : 'مبدا' , value : origin?.name , icon : <PathIconComponent customClasses = 'text-xl'/> },
        { title : 'تاریخ رفت' , value : new DateObject({ date : startDate , format : 'YYYY/MM/DD' , calendar : persian , locale : persian_fa }).format('DD  MMMM YYYY') , icon : <CalendarDots customClasses = 'text-xl'/> },
        { title : 'تاریخ برگشت' , value : new DateObject({ date : endDate , format : 'YYYY/MM/DD' , calendar : persian , locale : persian_fa }).format('DD  MMMM YYYY') , icon : <CalendarDots customClasses = 'text-xl'/> },
        { title : 'حمل و نقل' , value : vehicleTypeTranslate[fleetVehicle] , icon : fleetVehicle === 'bus' ? <BusIconComponent customClasses = 'text-xl'/> : fleetVehicle === 'train' ? <TrainIconComponent customClasses = 'text-xl'/> :  fleetVehicle === 'ship' ? <ShipIcon customClasses = 'text-xl'/> :  fleetVehicle === 'SUV' ? <CarIcon customClasses = 'text-xl'/> : <AirplaneIconComponent customClasses = 'text-xl'/> },
        { title : 'ظرفیت' , value : capacity , icon : <UsersIconComponent customClasses = 'text-xl'/> },
        { title : 'بیمه' , value : insurance ? 'دارد ✅' : ' ندارد ❌' , icon : <ShieldIconComponent customClasses = 'text-xl'/> },
    ]
    return (
        <>
            <div className = "relative border border-dashed w-11/12 mx-auto rounded-xl p-5 my-10">
                <Link href = '/' className = "bg-re d-100 p-1 absolute max-md:top-2 max-md:left-1.5 max-[500px]:left-1 left-5 text-2xl text-neutral-400 hover:text-neutral-600 transition-all">
                    <ChevronLeftIcon/>
                </Link>

                <div className = "flex max-md:flex-wrap justify-start items-center gap-6">
                    <div className = "overflow-hidden max-md:w-full">
                        <img src = {img} alt = { title } className = "w-[300px] h-[200px] rounded-3xl min-h-fit max-md:w-[94%] mx-auto"/>
                    </div>

                    <div className = "w-8/12 max-md:w-full">
                        <div className = "max-md:flex max-md:justify-between max-md:items-center">
                            <h1 className = "text-3xl font-bold">{`${title}`}</h1>
                            
                            <p className = "my-4 text-base">{`${tourDuration?.night} شب  و ${tourDuration?.day} روز`}</p>
                        </div>
                        
                        <div className = "flex max-[500px]:flex-wrap justify-between items-center max-[500px]:gap-5 max-[500px]:justify-center w-7/12 max-lg:w-10/12 max-md:w-full px-5 max-md:mb-10 max-md:my-5">
                            {
                                tourKeyFeatures.map((item , index) => {
                                    return(
                                        <div key = {index} className = "text-neutral-500 bg-re d-100 gap-1.5 flex justify-center items-center">
                                            {item.icon}
                                            <p>{item.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className = "flex justify-between items-center mt-5 max-md:mb-5">
                            <p>
                                <span className = "text-2xl text-blue-400 ml-1">{price?.toLocaleString()}</span> <span>تومان</span>
                            </p>

                            <ReserveLink tourId = {id} availableSeats = {availableSeats}/>
                        </div>
                    </div>
                </div>

                <div className = "tourInfoWrapper flex max-md:flex-wrap justify-between max-md:justify-center items-center gap-3 mt-5">
                    {
                        tourInfo.map((item , index) => {
                            return(
                                <div key = {index} className = "w-2/12 max-md:w-[160px] md:border-r max-[407px]:border-r max-[407px]:border-green-300 pr-5 py-2">
                                    <div className = "text-neutral-500 mb-2 flex justify-start items-center gap-2">
                                        {item.icon}
                                        <p className = "max-[850px]:text-nowrap">{item.title}</p>
                                    </div>
                                    <p className = "mr-3 max-[850px]:text-nowrap">{item.value}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default HighlightedTour;