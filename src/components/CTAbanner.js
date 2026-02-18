import Link from "next/link";
import Phone from "./icons/Phone";

const CTAbanner = () => {
  return (
    <div className = "border rounded-xl w-full flex justify-between items-center">
        <div className = "flex justify-between items-center w-9/12 bg-green-500 pr-10 pt-5 rounded-xl text-white">
            <div>
                <h2 className = "text-5xl font-extrabold">
                خرید تلفنی از <span className="text-green-900">تورینو</span>
                </h2>
                <p className = "text-2xl mt-2">به هرکجا که میخواهید!</p>
            </div>

            <div>
                <img src = "./professional-cartoon-man-talking-phone-icon-illustration.png" alt="tourino تورینو | خرید انلاین تور " />
            </div>
        </div>

        <div className = "w-4/12 flex flex-col justify-center gap-2 items-center">
            <p dir="ltr" className="flex justify-center items-center text-xl">
                <Phone weight="bold" />
                <span className="font-semibold">021 - 1840</span>
            </p>

            <Link href="/contact-us" className="bg-green-500 rounded-lg p-2 px-10 text-white hover:bg-green-600 transition-all">طلاعات بیشتر</Link>
        </div>
    </div>
  );
};

export default CTAbanner;
