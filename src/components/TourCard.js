import Link from 'next/link';
import { DateObject } from 'react-multi-date-picker';
import { vehicleTypeTranslate } from '@/helper/helper';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

const TourCard = ( props ) => {
    const { id , title , image : img , fleetVehicle , price , startDate , endDate , options : opt } = props;
    const tourMonth = new DateObject(startDate).convert(persian , persian_fa).format('MMMM')
    const tourDurationInDays = new DateObject(endDate).format('DD') - new DateObject(startDate).format('DD');
    const hotelRate = opt[1];
    return (
        <>
            <div className = 'border rounded-xl'>
                <Link href = {`/tour/${id}`}>
                    <div>
                        <img src = { img } alt = { title } className = 'w-full'/>
                    </div>

                    <div className = 'border-b p-2'>
                        <h2 className = 'text-lg'>{title}</h2>
                        <p className = 'text-neutral-500 text-xs'>{ `${tourMonth} ماه - ${tourDurationInDays} روزه - ${vehicleTypeTranslate[fleetVehicle]} - ${hotelRate}` }</p>
                    </div>
                </Link>

                <div className = 'flex justify-between items-center p-2'>
                    <button className = 'bg-green-500 text-white p-1 px-5 rounded-md hover:bg-green-600 transition-all'>رزرو</button>
                    <p><span className = 'text-blue-500 ml-0.5'>{ price.toLocaleString() }</span> تومان</p>
                </div>
            </div>
        </>
    );
};

export default TourCard;