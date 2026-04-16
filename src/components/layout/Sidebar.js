'use client';
import Link from "next/link";
import { useState } from "react";

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
                <Link href = '/' className = "hover:text-green-500 p-3 transition-all">صفحه اصلی</Link>
                <Link href = '/tour-services' className = "hover:text-green-500 p-3 transition-all">خدمات گردشگری</Link>
                <Link href = '/about-us' className = "hover:text-green-500 p-3 transition-all">درباره ما</Link>
                <Link href = '/contact-us' className = "hover:text-green-500 p-3 transition-all">تماس با ما</Link>
            </div>
        </>
    );
};

export default Sidebar;