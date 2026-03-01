'use client';
import { useAuth } from "@/context/AuthContext";
import { PencilSimpleLineIcon } from "@phosphor-icons/react";

const AccountProfilePage = () => {
    const { user } = useAuth();
    return (
        <>
            <div className = "border rounded-xl p-5">
                <h1 className = "text-xl">اطلاعات کاربری</h1>
                <div className = "flex justify-between items-center pr-5 mt-2">
                    <div className = "flex justify-start w-full items-center">
                        <div className = "w-1/2">
                            <label htmlFor = "phoneNumber" className = "text-neutral-500">شماره موبایل : </label>
                            <input type = "text" value = {user?.mobile} disabled = {true} id = "phoneNumber" name = "phoneNumber" placeholder = "09109919520" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>

                        <div>
                            <label htmlFor = "email" className = "text-neutral-500">ایمیل : </label>
                            <input type = "text" value = {user?.email || '-'} disabled = {true} id = "email" name = "email" placeholder = "exmaple@gmail.com" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>
                    </div>

                    <button className = "flex justify-center items-center p-2 text-sky-500 hover:text-sky-700 gap-1">
                        <PencilSimpleLineIcon weight = "light"/> ویرایش
                    </button>
                </div>
            </div>
            
            <div className = "border rounded-xl p-5 my-5">
                <h1 className = "text-xl">اطلاعات فردی</h1>
                <div className = "flex justify-between items-center pr-5 mt-2">
                    <div className = "grid grid-cols-2 w-full items-center">
                        <div>
                            <label htmlFor = "fullName" className = "text-neutral-500">نام و نام خانوادگی : </label>
                            <input type = "text" value = {user?.firstName && user?.lastName ? `${user?.firstName} ${user?.lastName}` : '-'} disabled = {true} id = "fullName" name = "fullName" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>

                        <div>
                            <label htmlFor = "nationalCode" className = "text-neutral-500">کد ملی : </label>
                            <input type = "text" value = {user?.nationalCode || '-'} disabled = {true} id = "nationalCode" name = "nationalCode" placeholder = "012345678" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>

                        <div>
                            <label htmlFor = "birthDate" className = "text-neutral-500">تاریخ تولد : </label>
                            <input type = "text" value = {user?.birthDate || '-'} disabled = {true} id = "birthDate" name = "birthDate" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>
                        
                        <div>
                            <label htmlFor = "gender" className = "text-neutral-500">جنسیت : </label>
                            <select name = "gender" id = "gender" className = "bg-transparent outline-none cursor-pointer disabled:cursor-not-allowed">
                                <option value = "male">مرد</option>
                                <option value = "woman">زن</option>
                            </select>
                        </div>
                    </div>

                    <button className = "flex justify-center items-center p-2 text-sky-500 hover:text-sky-700 gap-1">
                        <PencilSimpleLineIcon weight = "light"/> ویرایش
                    </button>
                </div>
            </div>
            
            <div className = "border rounded-xl p-5">
                <h1 className = "text-xl">اطلاعات بانکی</h1>
                <div className = "flex justify-between items-center pr-5 mt-2">
                    <div className = "grid grid-cols-2 w-full items-center">
                        <div>
                            <label htmlFor = "debtCardCode" className = "text-neutral-500">شماره کارت : </label>
                            <input type = "text" value = {user?.firstName && user?.lastName ? `${user?.firstName} ${user?.lastName}` : '-'} disabled = {true} id = "debtCardCode" name = "debtCardCode" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>

                        <div>
                            <label htmlFor = "shebaCode" className = "text-neutral-500">شماره شبا : </label>
                            <input type = "text" value = {user?.nationalCode || '-'} disabled = {true} id = "shebaCode" name = "shebaCode" placeholder = "012345678" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>
                    </div>

                    <button className = "flex justify-center items-center p-2 text-sky-500 hover:text-sky-700 gap-1">
                        <PencilSimpleLineIcon weight = "light"/> ویرایش
                    </button>
                </div>
            </div>
        </>
    );
};

export default AccountProfilePage;