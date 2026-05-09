'use client';
import { InvoiceIcon } from '@phosphor-icons/react';

const InvoiceIconComponent = ({ customClasses , weight = 'light' }) => {
    return (
        <>
            <InvoiceIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default InvoiceIconComponent;