'use client';
import { useState } from "react";
import ActiveLink from "../ActiveLink";

const Sidebar = () => {
    const [sidebarIsOpen , setSidebarIsOpen] = useState(false);

    return (
        <>
            <button onClick = {() => setSidebarIsOpen(!sidebarIsOpen)} className = "max-md:inline-block hidden z-[100] outline-none -translate-y-1">
                <span className = {`${sidebarIsOpen ? 'rotate-45 translate-y-[10px]' : 'rotate-0'} block w-8 h-0.5 bg-black mt-2 transition-all`}></span>
                <span className = {`${sidebarIsOpen ? 'invisible opacity-0' : 'visible opacity-100'} transition-all block w-8 h-0.5 bg-black mt-2`}></span>
                <span className = {`${sidebarIsOpen ? '-rotate-45 translate-y-[-10px]' : 'rotate-0'} block w-8 h-0.5 bg-black mt-2 transition-all`}></span>
            </button>

            <div onClick = {() => setSidebarIsOpen(false)} className = {`${sidebarIsOpen ? 'block' : 'hidden'} overlay w-screen h-screen z-[90] absolute top-0 left-0 bg-black/15`}></div>

            <div className = {`max-w-fit h-screen z-[99] absolute top-0 ${sidebarIsOpen ? 'right-0' : '-right-full'} flex flex-col justify-center items-center p-20 gap-5 rounded-tl-2xl rounded-bl-2xl bg-white transition-all`}>
                <ActiveLink href = '/' classLink = "relative hover:text-green-500 rounded-md transition-all p-2 px-3" activeClass = 'text-green-500'> صفحه اصلی </ActiveLink>
                <ActiveLink href = '/tour-services' classLink = 'relative hover:text-green-500 rounded-md transition-all p-2 px-3' activeClass = "text-green-500"> خدمات گردشگری </ActiveLink>
                <ActiveLink href = '/about-us' classLink = 'relative hover:text-green-500 rounded-md transition-all p-2 px-3' activeClass = "text-green-500"> درباره ما </ActiveLink>
                <ActiveLink href = '/contact-us' classLink = 'relative hover:text-green-500 rounded-md transition-all p-2 px-3' activeClass = "text-green-500"> تماس با ما </ActiveLink>
            </div>
        </>
    );
};

export default Sidebar;