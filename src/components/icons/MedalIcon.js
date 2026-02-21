'use client';
import { MedalIcon } from '@phosphor-icons/react';

const MedalIconComponent = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <MedalIcon className = { customClasses } weight = { weight }/>
        </>
    );
};

export default MedalIconComponent;