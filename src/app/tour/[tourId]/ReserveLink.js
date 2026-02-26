'use client';
import { Tooltip , TooltipContent , TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';

const ReserveLink = ({ availableSeats , tourId }) => {
    return (
        <>
            {/* <Tooltip title = {`ظرفیت موجود : ${availableSeats}`}>
                <Link href = {`/basket/${tourId}`} className = "text-base bg-green-500 hover:bg-green-600 max-[500px]:px-3 max-[500px]:text-sm transition-all text-white p-2.5 px-5 rounded-md">رزرو و خرید</Link>
                </Tooltip> */}

            <Tooltip>
                <TooltipTrigger>
                    <Link href = {`/basket/${tourId}`} className = "text-base bg-green-500 hover:bg-green-600 max-[500px]:px-3 max-[500px]:text-sm transition-all text-white p-2.5 px-5 rounded-md">رزرو و خرید</Link>
                </TooltipTrigger>

                <TooltipContent side = 'left' className = 'ml-2'>
                    <p>ظرفیت موجود : { availableSeats }</p>
                </TooltipContent>
            </Tooltip>
        </>
    );
};

export default ReserveLink;