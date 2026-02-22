import Image from 'next/image';
import React from 'react';

const ServiceHighlights = () => {
    const DummyServices = [
        { title : 'بصرفه ترین قیمت' , img : '/discount-ticket-vector.png' , desc : 'بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.' },
        { title : 'پشتیبانی' , img : '/message-vector.png' , desc : 'پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.' },
        { title : 'رضایت کاربران' , img : '/heart-vector.png' , desc : 'رضایت بیش از 10هزار کاربر از تور های ما. ' },
    ]
    return (
        <>
            <div className = 'flex max-md:flex-wrap justify-center items-center border-t pt-10 gap-10 my-10 max-md:gap-10 max-xl:px-5'>
                {
                    DummyServices.map((item , index) => {
                        return(
                            <div key = {index} className = 'flex justify-start items-center gap-3 max-md:gap-5 max-md:w-96'>
                                <div className = 'relative w-24 h-24 max-md:w-28 max-md:h-28 max-[400px]:w-32 max-[400px]:h-32'>
                                    <Image src = { item.img } alt = {` tourino | تورینو | ${item.title} `} fill sizes = "(max-width: 768px) 120px, 96px" className = 'object-contain'/>
                                </div>

                                <div>
                                    <h3 className = 'font-bold text-xl mb-2 max-[400px]:text-lg'>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ServiceHighlights;