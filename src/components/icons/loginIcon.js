'use client';
import { SignInIcon } from '@phosphor-icons/react/dist/ssr';

const LoginIcon = ({ customClasses , weight = 'regular' }) => {
    return (
        <>
            <SignInIcon weight = {weight} className = {customClasses}/>
        </>
    );
};

export default LoginIcon;