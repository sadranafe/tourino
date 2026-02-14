'use client';
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
    const [sidebarIsOpen , setSidebarIsOpen] = useState(false);

    return (
        <>
            <button onClick = {() => setSidebarIsOpen(!sidebarIsOpen)} className = "max-md:inline-block hidden z-20 outline-none">
                {
                    sidebarIsOpen ? 
                    <>
                        <span className = "block w-8 h-0.5 bg-black mb-2 translate-y-2.5 rotate-45"></span>
                        <span className = "block w-8 h-0.5 bg-black my-2 -rotate-45"></span>
                    </>
                    :
                    <>
                        <span className = "block w-8 h-0.5 bg-black mt-2"></span>
                        <span className = "block w-8 h-0.5 bg-black mt-2"></span>
                        <span className = "block w-8 h-0.5 bg-black mt-2"></span>
                    </>
                }
            </button>

            <div className = {`${sidebarIsOpen ? 'block' : 'hidden'} overlay w-screen h-screen absolute top-0 left-0 bg-black/15`}></div>

            <div className = {`max-w-fit h-screen z-10 absolute top-0 ${sidebarIsOpen ? 'right-0' : '-right-full'} flex flex-col justify-center items-center p-10 gap-10 rounded-tl-xl rounded-bl-xl bg-white transition-all`}>
                <Link href = '/'>صفحه اصلی</Link>
                <Link href = '/tour-services'>خدمات گردشگری</Link>
                <Link href = '/about-us'>درباره ما</Link>
                <Link href = '/contact-us'>تماس با ما</Link>
            </div>
        </>
    );
};

export default Sidebar;