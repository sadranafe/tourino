'use client';
import { Tooltip } from '@mui/material';
import Link from 'next/link';

const ReserveLink = ({ availableSeats , tourId }) => {
    return (
        <>
            <Tooltip title = {`ظرفیت موجود : ${availableSeats}`}>
                <Link href = {`/basket/${tourId}`} className = "text-base bg-green-500 hover:bg-green-600 max-[500px]:px-3 max-[500px]:text-sm transition-all text-white p-2.5 px-5 rounded-md">رزرو و خرید</Link>
            </Tooltip>
        </>
    );
};

export default ReserveLink;