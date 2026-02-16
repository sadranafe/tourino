'use client';

import { MapPinIcon } from "@phosphor-icons/react";

const MapPin = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <MapPinIcon weight = {weight} className = {customClasses}/>
        </>
    );
};

export default MapPin;