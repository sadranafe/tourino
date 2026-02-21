'use client';
import { ShieldIcon } from '@phosphor-icons/react';

const ShieldIconComponent = ({ weight = 'regular' , customClasses }) => {
    return (
        <>
            <ShieldIcon className = { customClasses } weight = {weight}/>
        </>
    );
};

export default ShieldIconComponent;