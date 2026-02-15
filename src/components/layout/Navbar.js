import Link from "next/link";
import UserIconComponent from "@/components/icons/userIcon";
import LoginIcon from "../icons/loginIcon";
import Sidebar from "./Sidebar";
import TourinoLogo from "../tourinoLogo";

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

                <Link href = '/login' className = "border border-green-500 p-2 gap-2 text-green-500 transition-all hover:bg-green-500 hover:text-white rounded-lg flex justify-center items-center">
                    <p className = "max-md:hidden block">ورود | ثبت‌ نام</p>
                    <UserIconComponent weight = 'bold' customClassName = "max-md:hidden block"/>

                    <LoginIcon customClasses = 'max-md:inline-block hidden'/>
                </Link>
            </nav>
        </>
    );
};

export default Navbar;