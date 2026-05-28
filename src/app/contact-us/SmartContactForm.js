
const SmartContactForm = ({ contactIntent }) => {
    return (
        <>
            {
                contactIntent === 'booking' && 
                <>
                    <div className = 'grid grid-cols-9 gap-3 p-5 rounded-xl mt-5 items-center'>
                        <div className = 'col-span-8 max-lg:col-span-7 max-sm:col-span-9 grid grid-cols-2 max-[500px]:grid-cols-1 gap-2 max-[500px]:gap-x-0'>
                            <input className = 'contactUsInput max-[500px]:col-span-2' type = "text" placeholder = 'نام و نام خانوادگی'/>
                            <input type = "text" className = 'contactUsInput max-[500px]:col-span-2' placeholder = 'شماره تماس'/>
                            <input className = 'contactUsInput max-[500px]:col-span-2' type = "text" placeholder = 'مبدا'/>
                            <input className = 'contactUsInput max-[500px]:col-span-2' type = "text" placeholder = 'مقصد'/>
                            <textarea className = 'contactUsTextArea col-span-2' placeholder = 'توضیحات :'></textarea>
                        </div>
                        <button className = 'col-span-1 max-lg:col-span-2 max-sm:col-span-9 bg-green-500 text-white max-h-fit py-2 hover:bg-green-600 transition-all rounded-md'>ثبت درخواست</button>
                    </div>
                </>
            }

            {
                contactIntent === 'tourFaq' &&
                <>
                    <div className = 'grid grid-cols-9 gap-3 p-5 rounded-xl mt-5 items-center'>
                        <div className = 'col-span-8 max-lg:col-span-7 max-sm:col-span-9 grid grid-cols-2 max-[500px]:grid-cols-1 gap-2 max-[500px]:gap-x-0'>
                            <input type = "text" className = 'contactUsInput max-[500px]:col-span-2'  placeholder = 'نام و نام خانوادگی'/>
                            <input type = "text" className = 'contactUsInput max-[500px]:col-span-2'  placeholder = 'شماره تماس'/>
                            <textarea className = 'contactUsTextArea col-span-2' placeholder = 'سوال خود را بپرسید  :'></textarea>
                        </div>
                        <button className = 'col-span-1 max-lg:col-span-2 max-sm:col-span-9 bg-green-500 text-white max-h-fit py-2 hover:bg-green-600 transition-all rounded-md'>ثبت درخواست</button>
                    </div>
                </>
            }

            {
                contactIntent === 'support' &&
                <>
                    <div className = 'grid grid-cols-9 gap-3 p-5 rounded-xl mt-5 items-center'>
                        <div className = 'col-span-8 max-lg:col-span-7 max-sm:col-span-9 grid grid-cols-2 max-[500px]:grid-cols-1 gap-2 max-[500px]:gap-x-0'>
                            <input type = "text" className = 'contactUsInput max-[500px]:col-span-2' placeholder = 'نام و نام خانوادگی'/>
                            <input type = "text" className = 'contactUsInput max-[500px]:col-span-2' placeholder = 'شماره تماس'/>
                            <select className = 'outline-none p-3 border border-neutral-100 rounded-md max-[500px]:col-span-2 cursor-pointer text-black' name = "issues" id = "issues">
                                <option value = "login">ورود به حساب</option>
                                <option value = "signup">ثبت نام</option>
                                <option value = "reserve">ثبت رزرو</option>
                                <option value = "profileCompletion">تکمیل پروفایل</option>
                                <option value = "payment">سوابق پرداخت یا تراکنش ها</option>
                                <option value = "tourSeeking">مشاهده تورهای من</option>
                                <option value = "siteBug">خطای فنی سایت</option>
                                <option value = "cancellation">کنسلی / استرداد</option>
                                <option value = "others">مشکل من بین این گزینه ها نیست</option>
                            </select>
                            <textarea cols = {50} className = 'contactUsTextArea' placeholder = 'مشکل خود را با جزییات بیشتری توضیح دهید :'></textarea>
                        </div>
                        
                        <button className = 'col-span-1 max-lg:col-span-2 max-sm:col-span-9 bg-green-500 text-white max-h-fit py-2 hover:bg-green-600 transition-all rounded-md'>ثبت درخواست</button>
                    </div>
                </>
            }

        </>
    );
};

export default SmartContactForm;