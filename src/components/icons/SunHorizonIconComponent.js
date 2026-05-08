'use client';
import { SunHorizonIcon } from '@phosphor-icons/react';

const SunHorizonIconComponent = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <SunHorizonIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default SunHorizonIconComponent;