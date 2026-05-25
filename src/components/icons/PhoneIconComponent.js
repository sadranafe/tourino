'use client';
import { PhoneIcon } from "@phosphor-icons/react";

const PhoneIconComponent = ({ weight = 'light' , customClasses }) => {
    return (
        <>
            <PhoneIcon className = { customClasses } weight = {weight}/>
        </>
    );
};

export default PhoneIconComponent;