import Link from "next/link";
import Sidebar from "./Sidebar";
import TourinoLogo from "../tourinoLogo";
import LoginSection from "../LoginSection";

const Navbar = () => {
    return (
        <>
            <nav className = "pt-2 max-xl:px-4 flex justify-between items-center max-w-[1200px] mx-auto">
                <TourinoLogo linkClasses = 'max-md:hidden block'/>

                <div className = "max-md:hidden flex gap-4 w-7/12 justify-start items-center">
                    <Link href = '/' className = "hover:text-green-500 transition-all p-2 px-3">صفحه اصلی</Link>
                    <Link href = '/tour-services' className = "hover:text-green-500 transition-all p-2 px-3">خدمات گردشگری</Link>
                    <Link href = '/about-us' className = "hover:text-green-500 transition-all p-2 px-3">درباره ما</Link>
                    <Link href = '/contact-us' className = "hover:text-green-500 transition-all p-2 px-3">تماس با ما</Link>
                </div>

                <Sidebar/>

                <LoginSection/>
            </nav>
        </>
    );
};

export default Navbar;