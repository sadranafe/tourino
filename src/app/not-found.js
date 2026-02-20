import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <div className = 'flex justify-between items-center px-10'>
                <div className = 'flex flex-wrap gap-10 justify-center items-center w-1/2'>
                    <h1 className = 'text-4xl text-center w-full font-bold'>صفحه مورد نظر یافت نشد !</h1>
                    <Link href = '/' className = 'bg-green-200 rounded-xl text-lg p-3 px-10 text-green-600 hover:bg-green-300 hover:text-green-700 transition-all'>بازگشت به صفحه اصلی</Link>
                </div>

                <div>
                    <img src = "Error_TV.png" alt = "tourino | تورینو | محمد صدرا نافع" />
                </div>
            </div>
        </>
    );
};

export default NotFound;