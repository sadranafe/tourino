'use client';
import { WalletIcon } from '@phosphor-icons/react';

const WalletIconComponent = ({ customClasses , weight = 'light' }) => {
    return (
        <>
            <WalletIcon className = {customClasses} weight = {weight}/>
        </>
    );
};

export default WalletIconComponent;