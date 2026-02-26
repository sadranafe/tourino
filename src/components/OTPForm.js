'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { setCookie } from "@/utils/cookie";
import { getHttpErrorMessage } from "@/helper/helper";
import OTPInput from "react-otp-input";
import toast from "react-hot-toast";
import ChevronLeftIcon from "./icons/ChevLeftIcon";

const OTPForm = ({ phoneNum , setModalIsOpen , formStepHandler , timer , setTimer }) => {
    const [otp , setOtp] = useState('');
    const [error , setError] = useState('')
    const router = useRouter();

    const resendOtpHandler = () => {
        api.post('/auth/send-otp' , { mobile : phoneNum });
        setTimer(12);
    }

    const loginBtnHandler = async () => {
        await api.post('/auth/check-otp' , { mobile : phoneNum , code : otp })
        .then(res => {
            setCookie('accessToken' , res.data.accessToken , 30);
            setCookie('refreshToken' , res.data.refreshToken , 365);
            router.replace('/profile');
            setModalIsOpen(false);
            setError('')
        })
        .catch(err => {
            const customError = getHttpErrorMessage(err?.status , { 400 : 'کد ورود اشتباه میباشد'});
            setError(err);
            toast.error(customError)
            console.log(customError)
        })
    }
    return (
        <>
            <h1 className = "text-2xl font-bold text-center">کد تایید را وارد کنید</h1>
            
            <div className = "w-full">
                <div className = "flex flex-col justify-center items-center mb-5 text-neutral-500 text-xs">
                    <p>کد تایید به شماره <span className = "text-base mx-1">{phoneNum}</span> ارسال شد</p>

                    <div dir = "ltr">
                        <OTPInput value = {otp} onChange = {setOtp} numInputs = {6} shouldAutoFocus renderInput = { props => <input { ...props } /> } containerStyle = 'flex justify-center gap-2 w-full p-2' inputStyle = {`block w-[45px] max-[450px]:w-2/12 h-[45px] max-[450px]:h-[40px] border rounded-lg text-center text-lg border ${error ? 'border-red-500' : 'border-neutral-500'} focus:outline focus:outline-green-500`} skipDefaultStyles/>
                    </div>
                    {
                        timer ? 
                        <p>ارسال مجدد تا {timer} ثانیه دیگر</p> : 
                        <button onClick = {resendOtpHandler}>ارسال مجدد کد</button>
                    }
                </div>

                <div className = "w-9/12 max-[500px]:w-full mx-auto">
                    <button onClick = {loginBtnHandler} disabled = {otp.length !== 6 ? true : false} className = "disabled:bg-green-400 disabled:cursor-not-allowed outline-none w-full bg-green-500 hover:bg-green-600 transition-all rounded-md p-2.5 text-white">ورود به تورینو</button>
                </div>
            </div>

            <button onClick = {() => formStepHandler('phone')} className = "absolute p-2 bg-neutral-50 text-neutral-500 hover:text-neutral-600 transition-all top-1.5 left-1.5 text-lg">
                <ChevronLeftIcon/>
            </button>
        </>
    );
};

export default OTPForm;