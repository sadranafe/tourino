import Link from 'next/link';
import CaretDoubleDownComponent from '@/components/icons/CaretDoubleDown';
import PhoneIconComponent from '@/components/icons/PhoneIconComponent';
import ContactIntentCard from './ContactIntentCard';

export const metadata = {
    title : 'تماس با ما'
}

const page = () => {

    return (
        <div className = 'maxWidth max-xl:px-5'>
            <div className = 'hero h-[520px] flex flex-wrap justify-center items-center content-center gap-5'>
                <h1 className = 'text-5xl max-md:text-4xl max-[550px]:text-[30px] max-[450px]:hidden'>برای سفر بعدی ات ، با <span className = 'text-green-500 font-bold'> ما </span> در ارتباط باش</h1>
                <h1 className = 'text-4xl max-[450px]:block max-[300px]:text-[27px] hidden text-center'>برای سفر بعدی ات <br/> با <span className = 'text-green-500 font-bold'> ما </span>  <br/> در ارتباط باش</h1>
                <p className = 'text-neutral-400 w-full text-center max-sm:text-xs'>۷ روز هفته، از ساعت ۸ تا ۲۴، از طریق ایمیل و تماس تلفنی پاسخگوی شما هستیم.</p>
                <CaretDoubleDownComponent customClasses = 'animate-pulse'/>
            </div>

            <div className = 'mb-20'>
                <h2 className = 'text-center text-2xl mb-5'>دسترسی سریع</h2>

                <ContactIntentCard/>
            </div>

            <div className = 'flex max-[450px]:flex-wrap justify-center items-center p-5 mb-10 border border-neutral-100 rounded-xl'>
                <div className = 'border-l max-[450px]:border-l-0 max-[450px]:border-b max-[450px]:pb-10 max-[450px]:mb-5 w-1/2 max-[450px]:w-full text-center'>
                    <h4 className = 'text-3xl max-sm:text-2xl font-bold'>مراجعه حضوری</h4>
                    <p className = 'text-neutral-400 mt-3 mb-5'>تهران ، ملاصدرا ، خیابان شیخ بهایی شمالی</p>

                    <Link href = '/contact-us' className = 'bg-green-500 p-2 px-3 rounded-md text-white hover:bg-green-600 transition-all'>مشاهده در نقشه</Link>
                </div>
                
                <div className = 'w-1/2 max-[450px]:w-full text-center'>
                    <h4 className = 'text-3xl max-sm:text-2xl font-bold'>پشتیبانی تلفنی</h4>
                    
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