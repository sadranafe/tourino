'use client';
import { MapTrifoldIcon } from '@phosphor-icons/react';

const MapIcon = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <MapTrifoldIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default MapIcon;