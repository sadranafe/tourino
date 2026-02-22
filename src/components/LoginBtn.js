'use client';
import { useState } from "react";
import ModalComponent from "./layout/Modal";
import LoginIcon from "./icons/loginIcon";
import UserIconComponent from "./icons/userIcon";
import ErrorMessage from "./ErrorMessage";

const LoginBtn = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleOpen = () => setModalIsOpen(true);
    const handleClose = () => setModalIsOpen(false);

    return (
        <>
            <button onClick = {handleOpen} className = "border border-green-500 p-2 gap-2 text-green-500 transition-all hover:bg-green-500 hover:text-white rounded-lg flex justify-center items-center">
                <p className = "max-md:hidden block">ورود | ثبت‌ نام</p>
                <UserIconComponent weight = 'bold' customClassName = "max-md:hidden block"/>

                <LoginIcon customClasses = 'max-md:inline-block hidden'/>
            </button>

            <ModalComponent modalIsOpen = {modalIsOpen} handleClose = {handleClose}>
                <div className = "flex flex-wrap justify-center items-center content-center gap-10 w-10/12 h-full mx-auto">
                    <h1 className = "text-2xl font-bold text-center">ورود به تورینو</h1>
                    
                    <div className = "w-full">
                        <div className = "flex flex-col justify-center items-center mb-5">
                            <label htmlFor = "phoneNumber" className = "block w-full text-neutral-500">شماره موبایل خود را وارد کنید</label>
                            <input type = "number" id = "phoneNumber" placeholder = "4253***0912" className = "w-9/12 max-[500px]:w-full text-base max-md:text-sm my-2 border border-white/90 bg-white/20 outline-none rounded-lg p-3 px-5 shadow-[0_5px_10px_rgba(0,0,0,0.03)] caret-green-500 text-green-600 placeholder:text-neutral-400"/>
                            {/* <ErrorMessage/> */}
                        </div>

                        <div className = "w-9/12 max-[500px]:w-full mx-auto">
                            <button className = "w-full bg-green-500 hover:bg-green-600 transition-all rounded-md p-2.5 text-white">ارسال کد تایید</button>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </>
    );
};

export default LoginBtn;