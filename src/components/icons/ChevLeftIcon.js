'use client';
import { CaretLeftIcon } from '@phosphor-icons/react';

const ChevronLeftIcon = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <CaretLeftIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default ChevronLeftIcon;