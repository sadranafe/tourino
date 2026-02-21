'use client';
import { TrainIcon } from '@phosphor-icons/react';
import React from 'react';

const TrainIconComponent = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <TrainIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default TrainIconComponent;