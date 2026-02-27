'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProfileLayout = ({ children }) => {
    const { user } = useAuth();
    console.log(user)
    const router = useRouter();
    useEffect(() => {
        if(!user?.firstName || !user?.lastName){
            router.replace('/profile/complete-profile')
        }
    },[user])

    return ( <> { children } </> );
};

export default ProfileLayout;