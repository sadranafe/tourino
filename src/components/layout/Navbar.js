import ActiveLink from "../ActiveLink";
import Sidebar from "./Sidebar";
import TourinoLogo from "../TourinoLogo";
import LoginSection from "../LoginSection";

const Navbar = () => {
    return (
        <>
            <nav className = "sticky z-50 top-1.5 max-lg:top-0 p-3 px-4 flex justify-between items-center maxWidth rounded-xl backdrop-blur-md bg-white/45 shadow-[0_5px_10px_rgba(0,0,0,0.02)]">
                <TourinoLogo linkClasses = 'max-md:hidden block'/>

                <div className = "max-md:hidden flex gap-4 w-7/12 justify-start items-center">
                    <ActiveLink href = '/' classLink = "relative hover:text-green-500 rounded-md transition-all p-2 px-3" activeClass = 'text-green-500'>
                        صفحه اصلی
                    </ActiveLink>

                    <ActiveLink href = '/tour-services' classLink = 'relative hover:text-green-500 rounded-md transition-all p-2 px-3' activeClass = "text-green-500">
                        خدمات گردشگری
                    </ActiveLink>

                    <ActiveLink href = '/about-us' classLink = 'relative hover:text-green-500 rounded-md transition-all p-2 px-3' activeClass = "text-green-500">
                        درباره ما
                    </ActiveLink>

                    <ActiveLink href = '/contact-us' classLink = 'relative hover:text-green-500 rounded-md transition-all p-2 px-3' activeClass = "text-green-500">
                        تماس با ما
                    </ActiveLink>
                </div>

                <Sidebar/>

                <LoginSection/>
            </nav>
        </>
    );
};

export default Navbar;