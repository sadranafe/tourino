'use client';
import { XIcon } from '@phosphor-icons/react';

const XIconComponent = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <XIcon className = { customClasses } weight = { weight }/>
        </>
    );
};

export default XIconComponent;