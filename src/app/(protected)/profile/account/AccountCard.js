'use client';
import { useState } from "react";
import { useFormik } from "formik";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_en from "react-date-object/locales/persian_en"
import { CheckIcon, PencilSimpleLineIcon } from "@phosphor-icons/react";
import { UserAccountSchema } from "@/utils/UserAccountSchema";
import ErrorMessage from "@/components/ErrorMessage";

const AccountCard = ({ card , formik , user }) => {
    const [isEditing , setIsEditing] = useState(false);
    const [selectedDate , setSelectedDate] = useState(user?.birthDate || new DateObject({ calendar : persian , locale : persian_en }));
    const [fieldHasError , setFieldHasError] = useState(false);

    const toggleEdit = (ev) => {
        setIsEditing(!isEditing)
        if(ev.target.name === 'saveDataBtn' && !fieldHasError){
            formik.handleSubmit();
        }
    }
    return (
        <>
            <div className = "account-card border rounded-xl p-5 my-3 bg-yellow-50">
                <h1 className = "text-xl">{card.title}</h1>
                <div className = "relative w-full grid grid-cols-2 bg-red-50 max-[400px]:grid-cols-1 max-[400px]:gap-3 my-3 gap-y-3 max-[830px]:gap-x-3 items-center">
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
                                <DatePicker name = "birthDate" id = 'birthDate' placeholder = "تاریخ تولد" value = {selectedDate} disabled = {!isEditing} calendarPosition = "bottom-center" calendar = {persian} locale = {persian_en} inputClass = "bg-transparent outline-none cursor-pointer disabled:cursor-default disabled:border-transparent outline-none border p-2 rounded-lg"/>
                            </div>
                            <div>
                                <label className = "text-neutral-400">جنسیت : </label>
                                <select name = "gender" id = "gender" disabled = {!isEditing} className = "bg-transparent outline-none cursor-pointer border rounded-lg p-1.5 disabled:border-transparent disabled:cursor-default disabled:appearance-none">
                                    <option value = "male">مرد</option>
                                    <option value = "female">زن</option>
                                </select>
                            </div>
                        </>
                    }
                    <div className = "absolute max-[830px]:bottom-full min-[831px]:top-1/2 min-[831px]:-translate-y-1/2 left-0">
                        {
                            isEditing && !fieldHasError ? 
                            <button onClick = {toggleEdit} type = "submit" name = 'saveDataBtn' className = "flex justify-center items-center p-2 text-sky-500 hover:text-sky-700 gap-1 max-sm:border max-sm:mt-2 max-sm:hover:bg-neutral-50 border-neutral-100 max-sm:w-full rounded-md">
                                <CheckIcon weight = "light"/> ذخیره
                            </button> :
                            <button onClick = {toggleEdit} className = "flex justify-center items-center p-2 text-sky-500 hover:text-sky-700 gap-1 max-sm:border max-sm:mt-2 max-sm:hover:bg-neutral-50 border-neutral-100 max-sm:w-full rounded-md">
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