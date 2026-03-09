'use client';
import { useAuth } from "@/context/AuthContext";
import { PencilSimpleLineIcon } from "@phosphor-icons/react";

const AccountProfilePage = () => {
    const { user } = useAuth();
    const DUMMY_ACCOUNT_INFO = [
        {
            title : 'اطلاعات کاربری',
            inputs : [
                { inputID : 1, label : 'شماره موبایل', name : 'phoneNumber', type : 'text', placeholder : '09123456789', value : user?.mobile} ,
                { inputID : 2, label : 'ایمیل', name : 'email', type : 'email', placeholder : 'example@gmail.com', value : user?.email},
            ] ,
            hasOptionTag : false,
            icon : <PencilSimpleLineIcon weight = "light"/>,
        },
        {
            title : 'اطلاعات فردی',
            inputs : [
                { inputID : 1, label : 'نام و نام خانوادگی', name : 'fullname', type : 'text', placeholder : 'john doe', value : user?.firstName && user?.lastName ? `${user?.firstName} ${user?.lastName}` : '' } ,
                { inputID : 2, label : 'کد ملی', name : 'nationalCode', type : 'text', placeholder : '0123456789', value : user?.nationalCode },
                { inputID : 3, label : 'تاریخ تولد', name : 'birtDate', type : 'date', placeholder : '', value : user?.birthDate },
            ] ,
            hasOptionTag : true,
            icon : <PencilSimpleLineIcon weight = "light"/>,
        },
        {
            title : 'اطلاعات بانکی',
            inputs : [
                { inputID : 1, label : 'شماره کارت', name : 'debtCardCode', type : 'text', placeholder : '', value : user?.payment?.debitCard_code} ,
                { inputID : 2, label : 'شماره شبا', name : 'shebaCode', type : 'text', placeholder : '', value : user?.payment?.sheba_code},
            ] ,
            hasOptionTag : false,
            icon : <PencilSimpleLineIcon weight = "light"/>,
        },
    ]
    return (
        <>
            {
                DUMMY_ACCOUNT_INFO.map((card , index) => {
                    return (
                        <div key = {index} className = "account-card border rounded-xl p-5 my-3">
                            <h1 className = "text-xl">{card.title}</h1>
                            <div className = "relative w-full grid grid-cols-2 max-[400px]:grid-cols-1 max-[400px]:gap-3 max-[400px]:my-3 gap-y-3 max-[830px]:gap-x-3 items-center">
                                {
                                    card?.inputs?.map((input , index) => {
                                        return (
                                            <div key = {index}>
                                                <label htmlFor = {input.name} className = "text-neutral-400">{input.label}</label>
                                                <input type = {input.type} name = {input.name} placeholder = {input.placeholder} value = {input.value || '-'} disabled = { true } className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-500/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                                            </div>
                                        )
                                    })
                                }
                                <div className = "absolute max-[830px]:bottom-full min-[831px]:top-1/2 min-[831px]:-translate-y-1/2 left-0">
                                    <button className = "flex justify-center items-center p-2 text-sky-500 hover:text-sky-700 gap-1 max-sm:border max-sm:mt-2 max-sm:hover:bg-neutral-50 border-neutral-100 max-sm:w-full rounded-md">
                                        <PencilSimpleLineIcon weight = "light"/> ویرایش
                                    </button>
                                </div>
                                {/* <div className = "grid grid-cols-2 max-[400px]:grid-cols-1 max-[400px]:gap-3 max-[400px]:my-3 w-full items-center">
                                    <div>
                                        <label htmlFor = "debtCardCode" className = "text-neutral-500">شماره کارت : </label>
                                        <input type = "text" value = {user?.payment?.debitCard_code || '-'} disabled = {true} id = "debtCardCode" name = "debtCardCode" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                                    </div>

                                    <div>
                                        <label htmlFor = "shebaCode" className = "text-neutral-500">شماره شبا : </label>
                                        <input type = "text" value = {user?.payment?.sheba_code || '-'} disabled = {true} id = "shebaCode" name = "shebaCode" placeholder = "" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                                    </div>
                                </div>

                                <button className = "flex justify-center items-center p-2 text-sky-500 hover:text-sky-700 gap-1 max-sm:border max-sm:mt-2 max-sm:hover:bg-neutral-50 border-neutral-100 max-sm:w-full rounded-md">
                                    <PencilSimpleLineIcon weight = "light"/> ویرایش
                                </button> */}
                            </div>
                        </div>
                    )
                })
            }
            {/* <div className = "border rounded-xl p-5">
                <h1 className = "text-xl">اطلاعات کاربری</h1>
                <div className = "flex justify-between items-center max-sm:flex-wrap pr-5 mt-2">
                    <div className = "flex max-[400px]:flex-wrap max-[400px]:gap-3 max-[400px]:my-3 justify-start max-[870px]:justify-between w-full items-center">
                        <div className = "w-1/2 max-[870px]:w-fit">
                            <label htmlFor = "phoneNumber" className = "text-neutral-500">شماره موبایل : </label>
                            <input type = "text" value = {user?.mobile} disabled = {true} id = "phoneNumber" name = "phoneNumber" placeholder = "09109919520" className = "bg-blue-100 outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>

                        <div>
                            <label htmlFor = "email" className = "text-neutral-500">ایمیل : </label>
                            <input type = "text" value = {user?.email || '-'} disabled = {true} id = "email" name = "email" placeholder = "exmaple@gmail.com" className = "bg-blue-100 outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>
                    </div>

                    <button className = "flex justify-center items-center p-2 text-sky-500 hover:text-sky-700 gap-1 max-sm:border max-sm:mt-2 max-sm:hover:bg-neutral-50 border-neutral-100 max-sm:w-full rounded-md">
                        <PencilSimpleLineIcon weight = "light"/> ویرایش
                    </button>
                </div>
            </div>
            
            <div className = "border rounded-xl p-5 my-5">
                <h1 className = "text-xl">اطلاعات فردی</h1>
                <div className = "flex justify-between max-sm:flex-wrap items-center pr-5 mt-2">
                    <div className = "grid grid-cols-2 max-[400px]:grid-cols-1 gap-2 max-[400px]:gap-3 max-[400px]:my-3 w-full items-center">
                        <div className = "max-[925px]:flex max-[925px]:flex-col max-[925px]:justify-center">
                            <label htmlFor = "fullName" className = "text-neutral-500">نام و نام خانوادگی : </label>
                            <input type = "text" value = {user?.firstName && user?.lastName ? `${user?.firstName} ${user?.lastName}` : '-'} disabled = {true} id = "fullName" name = "fullName" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>

                        <div className = "max-[925px]:flex max-[925px]:flex-col max-[925px]:justify-center">
                            <label htmlFor = "nationalCode" className = "text-neutral-500">کد ملی : </label>
                            <input type = "text" value = {user?.nationalCode || '-'} disabled = {true} id = "nationalCode" name = "nationalCode" placeholder = "012345678" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>

                        <div className = "max-[925px]:flex max-[925px]:flex-col max-[925px]:justify-center">
                            <label htmlFor = "birthDate" className = "text-neutral-500">تاریخ تولد : </label>
                            <input type = "text" value = {user?.birthDate || '-'} disabled = {true} id = "birthDate" name = "birthDate" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>
                        
                        <div>
                            <label className = "text-neutral-500">جنسیت : </label>
                            <select name = "gender" id = "gender" className = "bg-transparent outline-none cursor-pointer disabled:cursor-not-allowed">
                                <option value = "male">مرد</option>
                                <option value = "woman">زن</option>
                            </select>
                        </div>
                    </div>

                    <button className = "flex justify-center items-center p-2 text-sky-500 hover:text-sky-700 gap-1 max-sm:border max-sm:mt-3 max-sm:hover:bg-neutral-50 border-neutral-100 max-sm:w-full rounded-md">
                        <PencilSimpleLineIcon weight = "light"/> ویرایش
                    </button>
                </div>
            </div>
            
            <div className = "border rounded-xl p-5">
                <h1 className = "text-xl">اطلاعات بانکی</h1>
                <div className = "flex justify-between max-sm:flex-wrap items-center pr-5 mt-2">
                    <div className = "grid grid-cols-2 max-[400px]:grid-cols-1 max-[400px]:gap-3 max-[400px]:my-3 w-full items-center">
                        <div>
                            <label htmlFor = "debtCardCode" className = "text-neutral-500">شماره کارت : </label>
                            <input type = "text" value = {user?.payment?.debitCard_code || '-'} disabled = {true} id = "debtCardCode" name = "debtCardCode" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>

                        <div>
                            <label htmlFor = "shebaCode" className = "text-neutral-500">شماره شبا : </label>
                            <input type = "text" value = {user?.payment?.sheba_code || '-'} disabled = {true} id = "shebaCode" name = "shebaCode" placeholder = "" className = "outline-none p-2 mr-2 border border-neutral-50 bg-neutral-50/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent"/>
                        </div>
                    </div>

                    <button className = "flex justify-center items-center p-2 text-sky-500 hover:text-sky-700 gap-1 max-sm:border max-sm:mt-2 max-sm:hover:bg-neutral-50 border-neutral-100 max-sm:w-full rounded-md">
                        <PencilSimpleLineIcon weight = "light"/> ویرایش
                    </button>
                </div>
            </div> */}
        </>
    );
};

export default AccountProfilePage;