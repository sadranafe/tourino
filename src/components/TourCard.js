import Link from 'next/link';
import Image from 'next/image';
import { DateObject } from 'react-multi-date-picker';
import { vehicleTypeTranslate } from '@/helper/helper';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { useGetUserTours } from '@/services/queries';

const TourCard = ( props ) => {
    const { id , title , image : img , fleetVehicle , price , startDate , endDate , options : opt } = props;
    const { data : userToursData } = useGetUserTours();
    const purchasedTourId = userToursData?.data?.filter(tour => tour.id === id)[0]?.id === id

    const tourMonth = new DateObject(startDate).convert(persian , persian_fa).format('MMMM')
    const tourDurationInDays = new DateObject(endDate).format('DD') - new DateObject(startDate).format('DD');
    const hotelRate = opt[1];
    return (
        <>
            <div className = 'border rounded-xl'>
                <Link href = {`/tour/${id}`}>
                    <div className = 'relative w-full aspect-[4/3] sm:aspect-[16/9]'>
                        <Image src = {img} alt = {title} fill className = 'object-cover rounded-t-xl' sizes = "(max-width: 768px) 100vw, 25vw"/>
                    </div>

                    <div className = 'border-b p-4'>
                        <h2 className = 'text-lg'>{title}</h2>
                        <p className = 'text-neutral-500 text-xs'>{ `${tourMonth} ماه - ${tourDurationInDays} روزه - ${vehicleTypeTranslate[fleetVehicle.toLowerCase()] ? vehicleTypeTranslate[fleetVehicle.toLowerCase()] + ' - ' : ''} ${hotelRate}` }</p>
                    </div>
                </Link>

                <div className = 'flex justify-between items-center p-4'>
                    {
                        purchasedTourId ? 
                        <p className = 'p-1.5 px-5 rounded-md border border-green-300 text-green-500 border-dashed'>خریداری شده</p> : 
                        <Link href = {`/tour/${id}`} className = 'bg-green-500 text-white p-1.5 px-5 rounded-md hover:bg-green-600 transition-all'>رزرو</Link>
                    }
                    <p><span className = 'text-blue-500 ml-0.5'>{ price.toLocaleString() }</span> تومان</p>
                </div>
            </div>
        </>
    );
};

export default TourCard;