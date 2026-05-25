import React from 'react';

const SmartContactForm = ({ contactIntent }) => {
    return (
        <>
            {
                contactIntent === 'booking' && 
                <>
                    <div>
                        <input type = "text"  placeholder = 'نام و نام خانوادگی'/>
                        <input type = "tel"  placeholder = 'شماره تماس'/>
                        <input type = "text"  placeholder = 'مبدا'/>
                        <input type = "text"  placeholder = 'مقصد'/>
                        <textarea placeholder = 'توضیحات :'></textarea>
                    </div>
                </>
            }

            {
                contactIntent === 'tourFaq' &&
                <>
                    <div>
                        <input type = "text"  placeholder = 'نام و نام خانوادگی'/>
                        <input type = "tel"  placeholder = 'شماره تماس'/>
                        <textarea placeholder = 'سوال خود را بپرسید ؟ :'></textarea>
                    </div>
                </>
            }

            {
                contactIntent === 'support' &&
                <>
                    <div>
                        <input type = "text"  placeholder = 'نام و نام خانوادگی'/>
                        <input type = "tel"  placeholder = 'شماره تماس'/>
                        <select name = "issues" id = "issues">
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
                        <textarea cols = {50} placeholder = 'مشکل خود را با جزییات بیشتری توضیح دهید :'></textarea>
                    </div>
                </>
            }

        </>
    );
};

export default SmartContactForm;