'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href , children , exact = true , activeClass = '' , inactiveClass = '' , classLink = '' , activeBullet = false , ...props }) => {
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    return (
        <>
           <Link href = {href} className = {`${classLink} ${isActive ? activeClass : inactiveClass}`} {...props}>
                { typeof children === 'function' ? children(isActive) :
                    isActive && activeBullet ? 
                    <>
                        <div className = "w-1 h-1 bg-green-500 rounded-full absolute right-0 top-1/2 -translate-y-1/2"></div>
                        {children}
                    </> : children
                }
           </Link>
        </>
    );
};

export default ActiveLink;