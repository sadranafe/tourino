import Link from "next/link";
import TourinoLogo from "../tourinoLogo";

const Footer = () => {
    const trustLogos = [
        { id : 1 , src : './aira.png' , alt : 'https://www.aira.ir' },
        { id : 2 , src : './samandehi.png' , alt : 'https://samandehi.ir' },
        { id : 3 , src : './ecunion-qrcode.png' , alt : 'https://ecunion.ir' },
        { id : 4 , src : './passenger-rights.png' , alt : 'https://www.cao.ir/paxrights' },
        { id : 5 , src : './state-airline.png' , alt : 'https://caa.gov.ir' },
    ]

    return (
        <>
            <div className = "max-w-[1200px] p-3 mx-auto flex flex-wrap justify-between items-center border-t max-md:border-dashed max-md:gap-8">
               
                <div className =  "w-1/2 max-md:w-full max-md:justify-center flex justify-start items-baseline">
                    <div className = "flex justify-center items-center flex-wrap gap-2">
                        <h2 className = "w-full text-center text-xl font-semibold">تورینو</h2>
                        <div className = "flex flex-col justify-center items-center gap-2">
                            <Link href = '/about-us' className = "p-2 hover:text-green-500 transition-all">درباره ما</Link>
                            <Link href = '/contact-us' className = "p-2 hover:text-green-500 transition-all">تماس با ما</Link>
                            <Link href = '/why-tourino' className = "p-2 hover:text-green-500 transition-all">چرا تورینو</Link>
                            <Link href = '/insurence trip' className = "p-2 hover:text-green-500 transition-all">بیمه مسافرتی</Link>
                        </div>
                    </div>

                    <div className = "flex justify-center items-center flex-wrap gap-2">
                        <h2 className = "w-full text-center text-xl font-semibold">خدمات مشتریان</h2>
                        <div className = "flex flex-col justify-center items-center gap-2">
                            <Link href = '/' className = "p-2 hover:text-green-500 transition-all">پشتیبانی آنلابن</Link>
                            <Link href = '/' className = "p-2 hover:text-green-500 transition-all">راهنمایی خرید</Link>
                            <Link href = '/' className = "p-2 hover:text-green-500 transition-all">راهنمای استرداد</Link>
                            <Link href = '/faq' className = "p-2 hover:text-green-500 transition-all">پرسش و پاسخ</Link>
                        </div>
                    </div>
                </div>

                <div className = "w-1/2 max-md:w-full max-[400px]:block max-md:flex max-md:justify-between max-md:items-center max-md:flex-row-reverse">
                    <div className = "max-md:min-w-fit mb-5 max-md:mb-0 flex flex-col flex-wrap justify-center items-end gap-5">
                        <div>
                            <TourinoLogo/>
                        </div>

                        <p>
                            <span>تلفن پشتیبانی : </span>
                            <span dir = "ltr" className = "font-semibold">021 - 8574</span>
                        </p>
                    </div>
                    
                    <div className = "w-full flex flex-wrap flex-row-reverse justify-start items-end gap-10 max-md:gap-7 max-md:justify-end max-[400px]:justify-center max-[400px]:mt-5">
                        {
                            trustLogos.map(img => {
                                return(
                                    <Link href = {img.alt} key = {img.id}>
                                        <img src = {img.src} alt = {img.alt} className = "trustLogo"/>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>

                <div className = "w-full border-t pt-3 mt-3">
                    <p className = "text-center"> کلیه حقوق این وب سایت متعلق به <span className = "text-green-500 font-semibold"> تورینو </span> میباشد. </p>
                </div>
            </div>
        </>
    );
};

export default Footer;