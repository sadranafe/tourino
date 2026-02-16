'use client';
import { GlobeIcon } from '@phosphor-icons/react';

const GlobalIcon = ({ weight = 'regular' , customClasses }) => {
    return (
        <>
            <GlobeIcon className = { customClasses } weight = {weight}/>
        </>
    );
};

export default GlobalIcon;