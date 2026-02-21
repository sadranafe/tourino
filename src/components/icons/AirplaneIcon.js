'use client';
import { AirplaneIcon } from '@phosphor-icons/react';
import React from 'react';

const AirplaneIconComponent = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <AirplaneIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default AirplaneIconComponent;