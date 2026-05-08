'use client';
import { DotOutlineIcon } from '@phosphor-icons/react';

const DotIconComponent = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <DotOutlineIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default DotIconComponent;