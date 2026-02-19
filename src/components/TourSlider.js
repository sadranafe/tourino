'use client';
import { Swiper  , SwiperSlide } from "swiper/react";
import { EffectCards , Pagination , Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import QuestionMark from "./icons/QuestionMark";


const TourSlider = () => {
    const sliderImgs = [
        { src : 'tour_slider_pic4.png' , alt : 'tourino | تورینو' },
        { src : 'tour_slider_pic3.png' , alt : 'tourino | تورینو' },
        { src : 'tour_slider_pic1.png' , alt : 'tourino | تورینو' },
        { src : 'tour_slider_pic2.png' , alt : 'tourino | تورینو' },
    ]
    return (
        <>
            <div className = "flex justify-between items-center max-lg:px-3">
                <div className = "w-1/2">
                    <div className = "flex justify-start items-center gap-2.5">
                        <div className = "w-fit rounded-full bg-gradient-to-t from-green-800 to-green-500 text-white p-2">
                            <QuestionMark customClasses = '-scale-x-100 text-2xl' weight = 'bold'/>
                        </div>
                        <h2 className = "font-bold text-3xl"> چرا <span className = "text-green-500 mx-0.5"> تورینو </span> ؟ </h2>
                    </div>

                    <div className = "text-base">
                        <p className = "font-bold my-5 mr-[70px]">تور طبیعت گردی و تاریخی </p>
                        <p className = "leading-10 w-9/12 mx-auto text-justify">اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را خریداری کنید.</p>
                    </div>
                </div>

                <div className = "w-1/2 p-10">
                    <Swiper effect = "cards" modules = {[ EffectCards , Pagination , Navigation ]} navigation = {true} pagination = {{ type : 'fraction' }} grabCursor = {true} className = 'mySwiper'>
                        {
                            sliderImgs.map((img , index) => {
                                return(
                                    <SwiperSlide key = {index}>
                                        <img src = {img.src} alt = {img.alt} className = "w-full h-[400px] object-cover rounded-[40px] overflow-hidden"/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default TourSlider;