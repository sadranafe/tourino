'use client';

import { TicketIcon } from "@phosphor-icons/react";

const TicketIconComponent = ({ weight = 'light' , customClasses }) => {
    return (
        <>
            <TicketIcon className = { customClasses } weight = {weight}/>
        </>
    );
};

export default TicketIconComponent;