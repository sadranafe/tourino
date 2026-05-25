import Link from 'next/link';
import CaretDoubleDownComponent from '@/components/icons/CaretDoubleDown';
import PhoneIconComponent from '@/components/icons/PhoneIconComponent';
import ContactIntentCard from './ContactIntentCard';

const page = () => {

    return (
        <div className = 'maxWidth'>
            <div className = 'hero h-[520px] flex flex-wrap justify-center items-center content-center gap-10'>
                <h1 className = 'text-5xl w-full text-center'>برای سفر بعدی ات ، با <span className = 'text-green-500 font-bold'> ما </span> در ارتباط باش</h1>
                <CaretDoubleDownComponent customClasses = 'animate-pulse'/>
            </div>

            <div className = 'mb-28'>
                <h2 className = 'text-center text-2xl mb-5'>دسترسی سریع</h2>

                <ContactIntentCard/>
            </div>

            <div className = 'flex justify-center items-center p-5 mb-10 border border-neutral-100 rounded-xl'>
                <div className = 'border-l w-1/2 text-center'>
                    <h4 className = 'text-3xl font-bold'>درخواست پشتیبانی</h4>
                    <p className = 'text-neutral-400 my-3 mb-5'>درخواستتان را به دست ما برسانید</p>

                    <Link href = '/contact-us' className = 'bg-green-500 p-2 px-3 rounded-xl text-white hover:bg-green-600 transition-all'>ثبت تیکت درخواست</Link>
                </div>
                
                <div className = 'w-1/2 text-center'>
                    <h4 className = 'text-3xl font-bold'>پشتیبانی تلفنی</h4>
                    
                    <p className = 'text-neutral-400 my-3'>24 ساعته پشتیبان شما هستیم</p>

                    <Link dir = 'ltr' href = 'tel:+98218574' className = 'flex text-base justify-center items-center mx-auto gap-1 pt-0.5 px-2 w-fit hover:bg-green-50 hover:border-green-300 transition-all border border-transparent rounded-3xl'>
                        <p>021 - 8574</p>
                        <PhoneIconComponent />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;