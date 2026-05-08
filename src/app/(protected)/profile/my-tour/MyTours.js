import { formatDate, tourStatus, vehicleTypeTranslate } from "@/helper/helper";
import AirplaneIconComponent from "@/components/icons/AirplaneIcon";
import BusIconComponent from "@/components/icons/BusIcon";
import CarIcon from "@/components/icons/CarIcon";
import ShipIcon from "@/components/icons/ShipIcon";
import SunHorizonIconComponent from "@/components/icons/SunHorizonIconComponent";
import TrainIconComponent from "@/components/icons/TrainIcon";
import DotIconComponent from "@/components/icons/DotIconComponent";

const MyTours = ({ tour }) => {
    const { origin , destination , startDate , endDate , fleetVehicle , id , price , title } = tour;
    const fleet = fleetVehicle.toLowerCase()
    const { formattedDate : formattedStartDate , weekDay : startDateWeekDay } = formatDate(startDate);
    const { formattedDate : formattedEndDate , weekDay : endDateWeekDay } = formatDate(endDate);
    const { status , msg : tourMsg } = tourStatus(startDate , endDate)

    return (
        <>
            <div className = "border rounded-xl w-full">
                <div className = "relative flex justify-between items-center w-full p-7">
                    <div className = "flex max-[400px]:flex-wrap max-[400px]:gap-3 justify-between items-center w-5/12 max-[1000px]:w-7/12 max-[790px]:w-8/12 max-[730px]:w-9/12 max-[500px]:w-full">
                        <div>
                            <p className = "flex justify-start items-center text-base gap-3">
                                <SunHorizonIconComponent weight = "light" customClasses = 'text-xl'/>
                                <span>{ title }</span>
                            </p>
                        </div>

                        <div>
                            <p className = "flex justify-start items-center gap-2">
                                { fleet === 'bus' ? <BusIconComponent customClasses = 'text-xl' weight = "light"/> : fleet === 'train' ? <TrainIconComponent weight = "light" customClasses = 'text-xl'/> :  fleet === 'ship' ? <ShipIcon weight = "light" customClasses = 'text-xl'/> :  fleet === 'suv' ? <CarIcon weight = "light" customClasses = 'text-xl'/> : <AirplaneIconComponent weight = "light" customClasses = 'text-xl'/> }
                                <span>سفر با { vehicleTypeTranslate[fleetVehicle.toLowerCase()] }</span>
                            </p>
                        </div>
                    </div>
                    
                    <div>
                        <p className = {`relative max-[500px]:absolute max-[500px]:top-2 max-[500px]:left-2.5 max-[500px]:text-nowrap rounded-lg text-xs p-1 px-3 max-w-fit ${ status === 'completed' ? 'text-green-700 bg-green-400/50' : status === 'ongoing'  ? 'bg-yellow-100 text-yellow-600' : 'bg-neutral-100'}`}>{ tourMsg }</p>
                    </div>
                </div>

                <div className = "flex justify-between items-center w-8/12 max-[1100px]:w-9/12 max-[1000px]:w-full p-7 max-[730px]:px-[18px] max-[700px]:px-7 max-[700px]:flex-wrap max-[700px]:gap-5 pt-0">
                    <div className = "flex justify-center items-center">
                        <h3 className = "font-bold text-base max-[800px]:text-sm">{origin?.name} به { destination?.name }</h3>
                        
                        <p className = "text-neutral-500 flex items-center justify-start max-[800px]:text-xs">
                            <DotIconComponent weight = "light"/>
                            {startDateWeekDay + ' ' + formattedStartDate}
                        </p>
                    </div>

                    <div className = "flex justify-center items-center">
                        <p className = "font-bold text-base max-[800px]:text-sm">تاریخ برگشت</p>
                        
                        <p className = "text-neutral-500 flex items-center justify-start max-[800px]:text-xs">
                            <DotIconComponent weight = "light"/>
                            { endDateWeekDay + ' ' + formattedEndDate }
                        </p>
                    </div>
                </div>

                <div className = "w-full h-[1px] bg-neutral-200"></div>

                <div className = "flex justify-start items-center gap-3 p-7 max-[400px]:flex-wrap">
                    <div>
                        <p className = "max-[400px]:text-xs">
                            <span className = "text-neutral-500 ml-1">شماره تور</span>{ id }
                        </p>
                    </div>

                    <div className = "border-r pr-3">
                        <p>
                            <span className = "text-neutral-500">مبلغ پرداخت شده </span>
                            <span className = "font-bold ml-2 mr-1.5">{ price.toLocaleString() }</span>
                            <span className = "text-neutral-500">تومان</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyTours;