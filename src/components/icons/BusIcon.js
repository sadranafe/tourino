'use client';
import { BusIcon } from '@phosphor-icons/react';

const BusIconComponent = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <BusIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default BusIconComponent;