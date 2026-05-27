'use client';
import QuestionMark from "@/components/icons/QuestionMark";
import Suitcase from "@/components/icons/Suitcase";
import TicketIconComponent from "@/components/icons/TickectIconComponent";
import SmartContactForm from "./SmartContactForm";
import { useState } from "react";
import XIconComponent from "@/components/icons/xIcon";

const DummyContacts = [
    { intent : 'booking' , title : 'میخوام تور رزرو کنم' , desc : 'برای خرید تور مناسب راهنمایی بگیر' , icon : <Suitcase/>, },
    { intent : 'tourFaq' , title : 'درباره تورها سوال دارم' , desc : 'پاسخ سوالاتت درباره تورها رو از ما بگیر' , icon : <QuestionMark weight = 'light'/>, },
    { intent : 'support' , title : 'مشکل در پرداخت / حساب کاربری دارم' , desc : 'پشتیبانی در هر مشکلی کنارته' , icon : <TicketIconComponent />, },
]

const ContactIntentCard = () => {
    const [contactIntent , setContactIntent] = useState(null)

    return (
        <>
            <div className = 'relative grid grid-cols-3 gap-3'>
                <button onClick = {() => setContactIntent(null)} className = {`${ contactIntent ? 'visible opacity-100 hover:bg-neutral-50' : 'invisible opacity-0' } rounded-md p-2 absolute right-3 -bottom-9 transition-all`}>
                    <XIconComponent weight = "light"/>
                </button>
                {
                    DummyContacts.map((card , index) => {
                        return(
                            <div onClick = {() => setContactIntent(card.intent)} key = {index} className = {`relative flex items-center gap-1.5 p-4 cursor-pointer border ${ card.intent === contactIntent ? 'bg-green-50 border-green-300' : 'border-neutral-100 bg-transparent' } hover:bg-green-50 hover:border-green-300 active:scale-95 transition-all rounded-xl`}>
                                <div className = 'w-1/12 text-xl'>{ card.icon }</div>
                                
                                <div>
                                    <h3 className = 'text-base'>{ card.title }</h3>
                                    <p className = 'text-neutral-400 text-xs'>{ card.desc }</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <SmartContactForm contactIntent = {contactIntent}/>
        </>
    );
};

export default ContactIntentCard;