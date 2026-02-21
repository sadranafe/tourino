'use client';
import { PathIcon } from '@phosphor-icons/react';

const PathIconComponent = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <PathIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default PathIconComponent;