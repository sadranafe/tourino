'use client';
import QuestionMark from "@/components/icons/QuestionMark";
import Suitcase from "@/components/icons/Suitcase";
import TicketIconComponent from "@/components/icons/TickectIconComponent";
import SmartContactForm from "./SmartContactForm";
import { useState } from "react";

const DummyContacts = [
    { intent : 'booking' , title : 'میخوام تور رزرو کنم' , desc : 'برای خرید تور مناسب راهنمایی بگیر' , icon : <Suitcase/>, },
    { intent : 'tourFaq' , title : 'درباره تورها سوال دارم' , desc : 'پاسخ سوالاتت درباره تورها رو از ما بگیر' , icon : <QuestionMark weight = 'light'/>, },
    { intent : 'support' , title : 'مشکل در پرداخت / حساب کاربری دارم' , desc : 'پشتیبانی در هر مشکلی کنارته' , icon : <TicketIconComponent />, },
]

const ContactIntentCard = () => {
    const [contactIntent , setContactIntent] = useState('')

    return (
        <>
            <div className = 'grid grid-cols-3 gap-3'>
                {
                    DummyContacts.map((card , index) => {
                        return(
                            <div onClick = {() => setContactIntent(card.intent)} key = {index} className = {`flex items-center gap-1.5 p-4 cursor-pointer border ${ card.intent === contactIntent ? 'bg-green-50 border-green-300' : 'border-neutral-100 bg-transparent' } hover:bg-green-50 hover:border-green-300 transition-all rounded-xl`}>
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