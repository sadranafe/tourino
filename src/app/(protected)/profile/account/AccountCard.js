'use client';
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_en from "react-date-object/locales/persian_en"
import ErrorMessage from "@/components/ErrorMessage";
import { ArrowClockwiseIcon, CheckIcon, PencilSimpleLineIcon } from "@phosphor-icons/react";

const AccountCard = ({ card , formik , user , onSave , loading , saveStatus }) => {
    const [isEditing , setIsEditing] = useState(false);
    const [selectedDate , setSelectedDate] = useState(user?.birthDate || null);

    const dateChangeHandler = date => {
        setSelectedDate(date);
        if(date) formik.setFieldValue('birthDate' , date.toString());
    }

    const genderChangeHandler = ev => {
        const value = ev.target.value;
        formik.setFieldValue('gender' , value);
    }

    const toggleEdit = async ev => {
        if(ev.target.name === 'saveDataBtn'){
            const result = await onSave();
            if(result?.success) setIsEditing(false)
        } else {
            setIsEditing(!isEditing)
        }
    }

    const renderSaveButton = () => {
        if(loading) {
            return (
                <button disabled className = "flex justify-center items-center p-2 text-gray-400 gap-1 max-sm:border max-sm:mt-2 max-sm:hover:bg-neutral-50 border-neutral-100 max-sm:w-full rounded-md">
                    <span className = "animate-spin">⏳</span> درحال ذخیره . . .
                </button>
            )
        }
        if(saveStatus === 'success') {
            return(
                <button disabled className = "flex justify-center items-center p-2 text-green-500 gap-1 max-sm:border max-sm:mt-2 max-sm:hover:bg-neutral-50 border-neutral-100 max-sm:w-full rounded-md">
                    <CheckIcon weight = "fill"/> ذخیره شد
                </button>
            )
        }

        if(saveStatus === 'error') {
            return(
                <button onClick = {toggleEdit} name = "saveDataBtn" className = "flex justify-center items-center p-2 text-red-500 hover:bg-red-50 transition-all gap-1 max-sm:border max-sm:mt-2 max-sm:hover:bg-neutral-50 border-neutral-100 max-sm:w-full rounded-md">
                    <ArrowClockwiseIcon weight = "light"/> تلاش مجدد
                </button>
            )
        }

        return(
            <button type = "button" onClick = {toggleEdit} name = "saveDataBtn" className = "flex justify-center items-center p-2 text-sky-500 hover:text-white hover:bg-blue-500 transition-all gap-1 max-sm:border max-sm:mt-2 max-sm:hover:bg-neutral-50 border-neutral-100 max-sm:w-full rounded-md">
                <CheckIcon weight = "light"/> ذخیره
            </button>
        )
    }
    
    return (
        <>
            <div className = {`${isEditing ? 'bg-blue-50 border-sky-200' : ''} account-card border border-neutral-100 rounded-xl p-7 px-10 mb-5`}>
                <h1 className = "text-xl">{card.title}</h1>
                <div className = "relative w-full grid grid-cols-2 max-[400px]:grid-cols-1 max-[400px]:gap-3 my-3 gap-y-3 max-[830px]:gap-x-3 items-center px-5">
                    {
                        card?.inputs?.map((input , index) => {
                            return (
                                <div key = {index} className = "relative account-card-input">
                                    <label htmlFor = {input.name} className = "text-neutral-400">{input.label}</label>
                                    <input type = {input.type} name = {input.name} id = {input.name} {...formik.getFieldProps(input.name)} disabled = {!isEditing} placeholder = {input.placeholder} className = "outline-none p-2 mr-2 border rounded-lg disabled:bg-transparent disabled:border-transparent"/>
                                    <div className = 'errorWrapper absolute -right-6 top-1/2 -translate-y-1/2'>
                                        <ErrorMessage fieldHasError = {formik.touched[input.name] && formik.errors[input.name]} errorMsg = {formik.errors[input.name]}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        card?.hasOptionTag &&
                        <>
                            <div className = "relative">
                                <label htmlFor = "birthDate" className = "text-neutral-400 ml-2">تاریخ تولد : </label>
                                <DatePicker name = "birthDate" id = 'birthDate' placeholder = "تاریخ تولد" value = {selectedDate} onChange = {dateChangeHandler} disabled = {!isEditing} calendarPosition = "bottom-center" calendar = {persian} locale = {persian_en} inputClass = {`${isEditing ? '' : 'bg-transparent'} outline-none cursor-pointer disabled:cursor-default disabled:border-transparent outline-none border p-2 rounded-lg`}/>
                                <div className = 'errorWrapper absolute -right-6 top-1/2 -translate-y-1/2'>
                                    <ErrorMessage fieldHasError = {formik.touched['birthDate'] && formik.errors['birthDate']} errorMsg = {formik.errors['birthDate']}/>
                                </div>
                            </div>
                            <div>
                                <label className = "text-neutral-400">جنسیت : </label>
                                <select name = "gender" id = "gender" disabled = {!isEditing} value = {formik?.values?.gender} onChange = {genderChangeHandler} className = "outline-none cursor-pointer border rounded-lg p-1.5 disabled:border-transparent disabled:cursor-default disabled:appearance-none">
                                    <option value = "male">مرد</option>
                                    <option value = "female">زن</option>
                                </select>
                            </div>
                        </>
                    }
                    <div className = "absolute max-[830px]:bottom-full min-[831px]:top-1/2 min-[831px]:-translate-y-1/2 left-0">
                        {
                            isEditing ?
                            renderSaveButton() :
                            <button  onClick = {toggleEdit} className = "flex justify-center items-center p-2 text-sky-600 hover:bg-sky-50 transition-all disabled:text-sky-400 disabled:hover:bg-transparent disabled:cursor-default gap-1 max-sm:border max-sm:mt-2 max-sm:hover:bg-neutral-50 border-neutral-100 max-sm:w-full rounded-md">
                                <PencilSimpleLineIcon weight = "light"/> ویرایش
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountCard;