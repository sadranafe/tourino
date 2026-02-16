'use client';
import { useState } from "react";
import Link from "next/link";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import opacity from "react-element-popper/animations/opacity";
import "react-multi-date-picker/styles/colors/green.css"
import GlobalIcon from "./icons/GlobalIcon";
import MapPin from "./icons/MapPin";
import { CalendarDotIcon } from "@phosphor-icons/react";
import toast from "react-hot-toast";

const SearchTours = ({ dummyCities }) => {
    const [origin , setOrigin] = useState('');
    const [destination , setDestination] = useState('');
    const [selectedDate , setSelectedDate] = useState('')

    const searchLinkHandler = ev => {
        if(origin.toLowerCase() === destination.toLowerCase()) {
            ev.preventDefault();
            toast('مبدا و مقصد نمی تواند یکسان باشد' , { icon : '⚠️' })
        }
    }

    const query = {};
    if( origin && origin !== 'مبدا' ) query.origin = origin;
    if(destination && destination !== 'مقصد') query.destination = destination;
    if(selectedDate) query.date = selectedDate ? selectedDate.format('YYYY/MM/DD') : '';

    return (
        <>
            <div className = "border border-dashed rounded-2xl p-1.5 flex justify-center items-center gap-5 mt-5">
                
                <div className = "flex justify-center items-center border-l pl-3">
                    <label htmlFor = "origin" className = "flex justify-center items-center">
                        <MapPin customClasses = 'text-xl'/>
                    </label>

                    <select name = "origin" id = "origin" value = {origin} onChange = { ev => setOrigin(ev.target.value) } className = "outline-none text-center p-2 px-4 cursor-pointer">
                        <option>مبدا</option>
                        {
                            dummyCities.map((city , index) => {
                                return(
                                    <option value = {city.toLocaleLowerCase()} key = {index}>{ city }</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className = "flex justify-center items-center border-l pl-3">
                    <label htmlFor = "destination" className = "flex justify-center items-center">
                        <GlobalIcon customClasses = 'text-xl'/>
                    </label>

                    <select name = "destination" id = "destination" value = {destination} onChange = { ev => setDestination(ev.target.value) } className = "outline-none text-center p-2 px-4 cursor-pointer">
                        <option>مقصد</option>
                        {
                            dummyCities.map((city , index) => {
                                return(
                                    <option value = {city.toLocaleLowerCase()} key = {index}>{ city }</option>
                                )
                            })
                        }
                    </select>
                </div>
                
                <div className = "flex justify-center items-center">
                    <label htmlFor = "date">
                        <CalendarDotIcon className = "text-xl"/>
                    </label>
                    <DatePicker name = "date" id = "date" value = {selectedDate} onChange = { ev => setSelectedDate(ev) } calendar = {persian} locale = {persian_fa} className = "green" animations = {[opacity()]} calendarPosition = "bottom-center" inputClass = "p-2.5 outline-none rounded-xl" placeholder = "تاریخ"/>
                </div>
                
                <div>
                    <Link href = {{ pathname : '/' , query }} scroll = { false } onClick = {searchLinkHandler} className = "bg-green-500 hover:bg-green-600 transition-all p-3 block w-40 text-center outline-none text-white rounded-xl">جستوجو</Link>
                </div>
            </div>
        </>
    );
};

export default SearchTours;