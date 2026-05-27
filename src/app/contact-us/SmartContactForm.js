
const SmartContactForm = ({ contactIntent }) => {
    return (
        <>
            {
                contactIntent === 'booking' && 
                <>
                    <div className = 'grid grid-cols-9 gap-3 p-5 rounded-xl mt-5 items-center'>
                        <div className = 'col-span-8 grid grid-cols-2 gap-2'>
                            <input className = 'contactUsInput' type = "text"  placeholder = 'نام و نام خانوادگی'/>
                            <input type = "text" className = 'contactUsInput'  placeholder = 'شماره تماس'/>
                            <input className = 'contactUsInput' type = "text"  placeholder = 'مبدا'/>
                            <input className = 'contactUsInput' type = "text"  placeholder = 'مقصد'/>
                            <textarea className = 'contactUsTextArea col-span-2' placeholder = 'توضیحات :'></textarea>
                        </div>
                        <button className = 'col-span-1 bg-green-500 text-white max-h-fit py-2 hover:bg-green-600 transition-all rounded-md'>ثبت درخواست</button>
                    </div>
                </>
            }

            {
                contactIntent === 'tourFaq' &&
                <>
                    <div className = 'grid grid-cols-9 gap-3 p-5 rounded-xl mt-5 items-center'>
                        <div className = 'col-span-8 grid grid-cols-2 gap-2'>
                            <input type = "text" className = 'contactUsInput'  placeholder = 'نام و نام خانوادگی'/>
                            <input type = "text" className = 'contactUsInput'  placeholder = 'شماره تماس'/>
                            <textarea className = 'contactUsTextArea' placeholder = 'سوال خود را بپرسید  :'></textarea>
                        </div>
                        <button className = 'col-span-1 bg-green-500 text-white max-h-fit py-2 hover:bg-green-600 transition-all rounded-md'>ثبت درخواست</button>
                    </div>
                </>
            }

            {
                contactIntent === 'support' &&
                <>
                    <div className = 'grid grid-cols-9 gap-3 p-5 rounded-xl mt-5 items-center'>
                        <div className = 'col-span-8 grid grid-cols-2 gap-2'>
                            <input type = "text" className = 'contactUsInput' placeholder = 'نام و نام خانوادگی'/>
                            <input type = "text" className = 'contactUsInput' placeholder = 'شماره تماس'/>
                            <select className = 'outline-none p-3 border border-neutral-100 rounded-md cursor-pointer text-black' name = "issues" id = "issues">
                                <option value = "login">ورود به حساب</option>
                                <option value = "signup">ثبت نام</option>
                                <option value = "reserve">ثبت رزرو</option>
                                <option value = "profileCompletion">تکمیل پروفایل</option>
                                <option value = "payment">سوابق پرداخت یا تراکنش ها</option>
                                <option value = "tourSeeking">مشاهده تورهای من</option>
                                <option value = "siteBug">خطای فنی سایت</option>
                                <option value = "cancellation">کنسلی / استرداد</option>
                                <option value = "others">موارد دیگر</option>
                            </select>
                            <textarea cols = {50} className = 'contactUsTextArea' placeholder = 'مشکل خود را با جزییات بیشتری توضیح دهید :'></textarea>
                        </div>
                        
                        <button className = 'col-span-1 bg-green-500 text-white max-h-fit py-2 hover:bg-green-600 transition-all rounded-md'>ثبت درخواست</button>
                    </div>
                </>
            }

        </>
    );
};

export default SmartContactForm;