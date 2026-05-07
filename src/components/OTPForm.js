'use client';
import { useState } from "react";
import { useSendOTP, useVerifyOTP } from "@/services/mutations";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { DialogDescription , DialogTitle } from "@/components/ui/dialog";
import { PencilSimpleIcon } from "@phosphor-icons/react";
import { useTimer } from "@/hooks/useTimer";
import useRedirecting from "@/hooks/useRedirecting";

const OTPForm = ({ phoneNum , timer , setFormStep }) => {
    const [otp , setOtp] = useState('');
    const { isRedirecting , startRedirecting , stopRedirecting } = useRedirecting()
    const { mutate : resendOTP , isPending : isResending } = useSendOTP();
    const { mutate : verifyOTP , isPending : isVerifying , isError } = useVerifyOTP();
    const { startTimer } = useTimer()

    const resendOtpHandler = () => {
        resendOTP(phoneNum , {
            onSuccess : (data) => {
                startTimer()
                toast.success(`کد ورود  : ${data?.data?.code}` , { duration : 5000 })
            }
        })
    }

    const loginBtnHandler = () => {
        if(otp.length !== 6) return;
        startRedirecting()
        verifyOTP({ mobile : phoneNum , code : otp } , {
            onError : () => stopRedirecting()
        });
    }
    return (
        <>
            <DialogTitle>
                <p className = "text-2xl font-bold text-center">کد تایید را وارد کنید</p>
            </DialogTitle>

            <DialogDescription asChild>
                <div className = "w-full">
                    <div className = "flex flex-col justify-center items-center mb-5 text-neutral-500 text-xs">
                        <button onClick = { () => setFormStep('phone') } className = "flex justify-center items-center p-1 my-1.5 px-3 gap-1 hover:text-green-500 transition-all"><PencilSimpleIcon weight = "light" /> ویرایش شماره موبایل </button>
                        <p className = "text-sm">کد تایید به شماره <span className = "text-base mx-1">{phoneNum}</span> ارسال شد</p>

                        <div dir = "ltr">
                            <OTPInput value = {otp} numInputs = {6} shouldAutoFocus onChange = { val => { if(!isVerifying && !isRedirecting) {setOtp(val)} } } renderInput = { props => <input { ...props } disabled = {isVerifying && isRedirecting} style = {{ ...props.style , opacity: isVerifying || isRedirecting ? 0.5 : 1 }}/> } containerStyle = 'flex justify-center gap-2 w-full p-2' inputStyle = {`block w-[45px] max-[450px]:w-2/12 h-[45px] max-[450px]:h-[40px] border rounded-lg text-center text-lg border ${isError ? 'border-red-500' : 'border-neutral-500'} focus:outline focus:outline-green-500`} skipDefaultStyles/>
                        </div>
                        {
                            timer ? 
                            <p>ارسال مجدد تا {timer} ثانیه دیگر</p> : 
                            <button onClick = {resendOtpHandler} disabled = { isResending } className = "hover:text-green-500 transition-all p-1 px-3">{ isResending ? 'درحال ارسال . . .' : 'ارسال مجدد کد' }</button>
                        }
                    </div>

                    <div className = "w-9/12 max-[500px]:w-full mx-auto">
                        <button onClick = {loginBtnHandler} disabled = {otp.length !== 6 || isVerifying || isRedirecting} className = "disabled:bg-green-400 disabled:cursor-not-allowed outline-none w-full bg-green-500 hover:bg-green-600 transition-all rounded-md p-2.5 text-white">{ isVerifying ? 'درحال بررسی . . .' : isRedirecting ? 'درحال انتقال . . .' : 'ورود به تورینو' }</button>
                    </div>
                </div>
            </DialogDescription>
            
        </>
    );
};

export default OTPForm;