'use client';
import { UserIcon } from "@phosphor-icons/react/dist/ssr";
const UserIconComponent = ({ customClassName , weight = 'regular' }) => {
    return (
        <>
            <UserIcon weight = { weight } className = { customClassName }/>
        </>
    );
};

export default UserIconComponent;