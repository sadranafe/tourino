'use client';
import { PhoneIcon } from '@phosphor-icons/react';

const Phone = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <PhoneIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default Phone;