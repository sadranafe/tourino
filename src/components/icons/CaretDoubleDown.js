'use client';
import { CaretDoubleDownIcon } from '@phosphor-icons/react';

const CaretDoubleDownComponent = ({ customClasses , weight = 'light' }) => {
    return (
        <>
            <CaretDoubleDownIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default CaretDoubleDownComponent;