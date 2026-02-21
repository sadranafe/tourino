'use client';
import { CarProfileIcon } from '@phosphor-icons/react';

const CarIcon = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <CarProfileIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default CarIcon;