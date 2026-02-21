'use client';
import { UsersIcon } from '@phosphor-icons/react';

const UsersIconComponent = ({ weight = 'regular' , customClasses }) => {
    return (
        <>
            <UsersIcon className = { customClasses } weight = {weight}/>
        </>
    );
};

export default UsersIconComponent;