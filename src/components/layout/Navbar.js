import Link from "next/link";
import UserIconComponent from "@/components/userIcon";

const Navbar = () => {
    return (
        <>
            <nav className = "pt-2 bg-white flex justify-between items-center max-w-[1200px] mx-auto">
                <Link href = '/login' className = "border border-green-500 p-2 gap-2 text-green-500 transition-all hover:bg-green-500 hover:text-white rounded-lg flex justify-center items-center">
                    <p>ورود | ثبت‌ نام</p>
                    <UserIconComponent weight = 'bold'/>
                </Link>

                <div className = "flex flex-row-reverse gap-4 w-7/12 justify-start items-center">
                    <Link href = '/' className = "hover:text-green-500 transition-all p-2 px-3">صفحه اصلی</Link>
                    <Link href = '/tour-services' className = "hover:text-green-500 transition-all p-2 px-3">خدمات گردشگری</Link>
                    <Link href = '/about-us' className = "hover:text-green-500 transition-all p-2 px-3">درباره ما</Link>
                    <Link href = '/contact-us' className = "hover:text-green-500 transition-all p-2 px-3">تماس با ما</Link>
                </div>
                
                <Link href = '/'>
                    <img src = "tourino-logo.png" alt = "tourino" width = {130}/>
                </Link>
            </nav>
        </>
    );
};

export default Navbar;