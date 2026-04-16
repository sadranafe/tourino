import Link from "next/link";
import Sidebar from "./Sidebar";
import TourinoLogo from "../TourinoLogo";
import LoginSection from "../LoginSection";

const Navbar = () => {
    return (
        <>
            <nav className = "sticky z-30 top-1.5 max-lg:top-0 p-3 px-4 flex justify-between items-center maxWidth rounded-xl backdrop-blur-md bg-white/60 shadow-[0_5px_10px_rgba(0,0,0,0.02)]">
                <TourinoLogo linkClasses = 'max-md:hidden block'/>

                <div className = "max-md:hidden flex gap-4 w-7/12 justify-start items-center fo nt-bold">
                    <Link href = '/' className = "hover:text-green-500 rounded-md transition-all p-2 px-3">صفحه اصلی</Link>
                    <Link href = '/tour-services' className = "hover:text-green-500 rounded-md transition-all p-2 px-3">خدمات گردشگری</Link>
                    <Link href = '/about-us' className = "hover:text-green-500 rounded-md transition-all p-2 px-3">درباره ما</Link>
                    <Link href = '/contact-us' className = "hover:text-green-500 rounded-md transition-all p-2 px-3">تماس با ما</Link>
                </div>

                <Sidebar/>

                <LoginSection/>
            </nav>
        </>
    );
};

export default Navbar;