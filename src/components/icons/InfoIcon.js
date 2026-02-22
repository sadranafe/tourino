'use client';
import { InfoIcon } from '@phosphor-icons/react';

const InfoIconComponent = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <InfoIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default InfoIconComponent;