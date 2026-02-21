'use client';
import { CalendarDotsIcon } from '@phosphor-icons/react';

const CalendarDots = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <CalendarDotsIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default CalendarDots;