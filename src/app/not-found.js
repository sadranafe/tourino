import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title : 'چیزی پیدا نشد'
}

const NotFound = () => {
    return (
        <>
            <div className = 'flex max-md:flex-wrap justify-between max-md:justify-center items-center px-10 max-md:px-5'>
                <div className = 'flex flex-wrap gap-10 max-md:gap-5 justify-center items-center w-1/2 max-md:w-full max-md:order-2'>
                    <h1 className = 'notFoundHeader text-4xl text-center w-full font-bold'>صفحه مورد نظر یافت نشد !</h1>
                    <Link href = '/' className = 'notFoundBtn bg-green-200 rounded-xl text-lg p-3 px-10 max-md:px-5 text-green-600 hover:bg-green-300 hover:text-green-700 transition-all'>بازگشت به صفحه اصلی</Link>
                </div>

                <div className = "max-md:order-1 relative w-[550px] h-[450px] max-md:w-full max-md:h-[300px]">
                    <Image src = '/Error_TV.png' alt = "tourino 404 page illustration" fill sizes = "(max-width: 768px) 100vw, 450px" className = "object-contain" priority/>
                </div>
            </div>
        </>
    );
};

export default NotFound;