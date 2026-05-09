import Link from "next/link";
import Image from "next/image";
import Phone from "./icons/Phone";

const CTAbanner = () => {
  return (
    <div className = "border rounded-xl w-full flex max-[500px]:flex-wrap justify-between items-center mt-10">
        <div className = "flex max-[350px]:flex-wrap max-[350px]:justify-center max-[350px]:gap-4 justify-between items-center w-9/12 max-[500px]:w-full bg-green-500 pr-10 max-[400px]:pr-3 max-[350px]:pr-0 pt-5 rounded-xl text-white">
            <div className = "CTAheaderContainer max-[350px]:order-2 max-[350px]:text-center">
                <h2 className = "text-5xl font-extrabold">
                خرید تلفنی از <span className = "text-green-900">تورینو</span>
                </h2>
                <p className = "text-2xl mt-2 max-[350px]:mt-0 max-[350px]:mb-2">به هرکجا که میخواهید!</p>
            </div>

            <div className = "max-[350px]:w-full max-[350px]:flex max-[350px]:justify-center max-[350px]:order-1">
                <Image src = '/professional-cartoon-man-talking-phone-icon-illustration.png' alt = "تورینو | خرید آنلاین تور" sizes = "(max-width: 350px) 100vw, 260px" width = {0} height = {0} priority = {false} className = "max-w-[260px] w-full h-auto"/>
            </div>
        </div>

        <div className = "w-4/12 flex max-[500px]:flex-row max-[500px]:w-full max-[500px]:p-2 max-[500px]:gap-5 max-[350px]:gap-1 flex-col justify-center gap-2 items-center">
            <p dir = "ltr" className = "flex justify-center gap-1 items-center text-xl max-[350px]:text-lg">
                <Phone weight = "bold" />
                <span className = "font-semibold">021 - 1840</span>
            </p>

            <Link href = "/contact-us" className = "bg-green-500 rounded-lg p-2 px-10 max-sm:px-5 max-[350px]:px-3 text-white hover:bg-green-600 transition-all">اطلاعات بیشتر</Link>
        </div>
    </div>
  );
};

export default CTAbanner;
