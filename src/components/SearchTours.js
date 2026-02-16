'use client';
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import DateObject from "react-date-object";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import opacity from "react-element-popper/animations/opacity";
import "react-multi-date-picker/styles/colors/green.css"
import { CalendarDotIcon } from "@phosphor-icons/react";
import GlobalIcon from "./icons/GlobalIcon";
import MapPin from "./icons/MapPin";

const SearchTours = ({ dummyCities }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const hasFilters = searchParams.toString().length > 0;

    const [origin , setOrigin] = useState(searchParams.get('origin') || '');
    const [destination , setDestination] = useState(searchParams.get('destination') ||'');
    const [selectedDate , setSelectedDate] = useState(() => {
        const dateParam = searchParams.get('date');
        if(!dateParam) return '';
        return new DateObject({
            date : dateParam,
            format : 'YYYY/MM/DD',
            calendar : persian,
            locale : persian_fa,
        })
    })
    
    const query = {};
    if( origin && origin !== 'مبدا' ) query.origin = origin;
    if(destination && destination !== 'مقصد') query.destination = destination;
    if(selectedDate) query.date = selectedDate ? selectedDate.format('YYYY/MM/DD') : '';

    const searchLinkHandler = ev => {
        if(origin && destination && origin.toLowerCase() === destination.toLowerCase()) {
            ev.preventDefault();
            toast('مبدا و مقصد نمی تواند یکسان باشد' , { icon : '⚠️' })
        }
    }

    const clearFiltersHandler = () => {
        setOrigin('');
        setDestination('');
        setSelectedDate('');
        router.replace('/' , { scroll : false })
    }

    return (
        <>
            <div className = "relative max-md:border-0 border max-md:w-full border-dashed rounded-2xl p-1.5 max-md:grid max-md:grid-cols-2 max-[400px]:grid-cols-1 flex flex-wrap justify-center items-center max-md:gap-3 gap-5 mt-5 max-md:px-5">
                
                <div className = "flex justify-center items-center max-md:border max-md:rounded-xl border-l pl-3 max-md:px-0">
                    <label htmlFor = "origin" className = "flex justify-center items-center">
                        <MapPin customClasses = 'text-xl'/>
                    </label>

                    <select name = "origin" id = "origin" value = {origin} onChange = { ev => setOrigin(ev.target.value) } className = "bg-transparent outline-none text-center p-2 px-4 cursor-pointer">
                        <option value = ''>مبدا</option>
                        {
                            dummyCities.map((city , index) => {
                                return(
                                    <option value = {city.toLocaleLowerCase()} key = {index}>{ city }</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className = "flex justify-center items-center max-md:border max-md:rounded-xl border-l pl-3 max-md:px-0">
                    <label htmlFor = "destination" className = "flex justify-center items-center">
                        <GlobalIcon customClasses = 'text-xl'/>
                    </label>

                    <select name = "destination" id = "destination" value = {destination} onChange = { ev => setDestination(ev.target.value) } className = "bg-transparent outline-none text-center p-2 px-4 cursor-pointer">
                        <option value = ''>مقصد</option>
                        {
                            dummyCities.map((city , index) => {
                                return(
                                    <option value = {city.toLocaleLowerCase()} key = {index}>{ city }</option>
                                )
                            })
                        }
                    </select>
                </div>
                
                <div className = "flex max-md:flex-wrap max-md:col-span-2 max-[400px]:col-span-1 max-md:gap-2 justify-between items-center">
                    <div className = "max-md:w-full flex justify-center items-center max-md:border max-md:rounded-xl max-md:text-center max-md:px-0">
                        <label htmlFor = "date">
                            <CalendarDotIcon className = "text-xl"/>
                        </label>
                        <DatePicker name = "date" id = "date" value = {selectedDate} onChange = { ev => setSelectedDate(ev) } calendar = {persian} locale = {persian_fa} className = "green" animations = {[opacity()]} calendarPosition = "bottom-center" inputClass = "p-2.5 max-[400px]:px-0 bg-transparent outline-none rounded-xl max-md:text-center" placeholder = "تاریخ"/>
                    </div>
                    
                    <div className = {`${hasFilters ? 'max-md:w-9/12' : 'max-md:w-full'} transition-all`}>
                        <Link href = {{ pathname : '/' , query }} scroll = { false } onClick = {searchLinkHandler} className = "max-md:w-full bg-green-500 hover:bg-green-600 transition-all p-3 block w-40 text-center outline-none text-white rounded-xl">جستوجو</Link>
                    </div>
                    
                    {
                        hasFilters ?
                        <div className = "hidden max-md:block max-md:w-[21%] max-[260px]:min-w-fit bg-red-50">
                            <button onClick = {clearFiltersHandler} className = "w-full max-md:text-xs max-[400px]:text-[10px] border border-dashed border-red-400 hover:bg-red-50 transition-all p-3 px-4 text-center rounded-xl">حذف فیلتر ها</button>
                        </div> : null
                    }
                </div>

                {
                    hasFilters ? 
                    <div className = "max-md:hidden absolute -left-28 lg:top-0 md:-top-14 max-lg:left-0 max-md:bottom-0">
                        <button onClick = {clearFiltersHandler} className = "border border-dashed border-red-400 hover:bg-red-50 transition-all p-3 px-4 text-center rounded-xl">حذف فیلتر ها</button>
                    </div> : null
                }
            </div>
        </>
    );
};

export default SearchTours;