'use client';
import { BoatIcon } from '@phosphor-icons/react';

const ShipIcon = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <BoatIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default ShipIcon;