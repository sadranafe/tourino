'use client';

import { SuitcaseRollingIcon } from "@phosphor-icons/react";

const Suitcase = ({ weight = 'light' , customClasses }) => {
    return (
        <>
            <SuitcaseRollingIcon className = { customClasses } weight = {weight}/>
        </>
    );
};

export default Suitcase;