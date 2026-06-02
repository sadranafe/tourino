'use client';
import { useState } from "react";
import useUser from "@/hooks/useUser";
import { useSendOTP } from "@/services/mutations";
import { useFormik } from "formik";
import { UserSchema } from "@/utils/UserSchema";
import toast from "react-hot-toast";
import { Dialog , DialogContent , DialogTrigger } from "@/components/ui/dialog";
import UserMenu from "./UserMenu";
import LoginForm from "./LoginForm";
import OTPForm from "./OTPForm";
import LoginIcon from "./icons/loginIcon";
import UserIconComponent from "./icons/userIcon";
import { useTimer } from "@/hooks/useTimer";
import { Skeleton } from "./ui/skeleton";

const LoginSection = () => {
    const [formStep , setFormStep] = useState('phone'); // phone - otp
    const [phoneNum , setPhoneNum] = useState('');
    const { user , isLoading } = useUser();
    const isAuthenticated = !!user
    const { timer , startTimer } = useTimer()

    const { mutate , isPending } = useSendOTP();

    const formik = useFormik({
        initialValues : {
            phoneNumber : '',
        },
        validationSchema : UserSchema,
        validateOnMount : true,
        onSubmit : val => {
            mutate(val.phoneNumber , {
                onSuccess : (data) => {
                    const code = data?.data?.code
                    setPhoneNum(val.phoneNumber);
                    setFormStep('otp');
                    startTimer()
                    toast.success(
                        (t) => (
                            <div className = "flex items-center gap-3">
                                <span className = "text-base">کد ورود : <strong>{code}</strong></span>
                                <button
                                    onClick = { (e) => {
                                        e.stopPropagation();
                                        navigator.clipboard.writeText(code);
                                        toast.dismiss(t.id);
                                        toast.success('کد کپی شد!');
                                    }}
                                    className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md hover:bg-green-200 transition-all"
                                >
                                    کپی
                                </button>
                            </div>
                        ) , { duration : 7000 }
                    )
                },
                onError : err => {
                    toast.error('خطا')
                    console.error('error : ' , err)
                }
            })
        }
    })

    return (
        <>
            {
                isLoading ? 
                <Skeleton className = "h-[35px] w-[140px] rounded-sm"/>
                :
                isAuthenticated ? 
                <UserMenu/> :
                <Dialog>
                    <DialogTrigger asChild>
                        <button className = "border border-green-500 p-2 gap-2 outline-none text-green-500 transition-all hover:bg-green-500 hover:text-white rounded-lg flex justify-center items-center">
                            <p className = "max-md:hidden block">ورود | ثبت‌ نام</p>
                            <UserIconComponent weight = 'bold' customClassName = "max-md:hidden block"/>

                            <LoginIcon customClasses = 'max-md:inline-block hidden'/>
                        </button>
                    </DialogTrigger>
                    <DialogContent className = 'bg-neutral-50 w-[500px] h-[350px] max-sm:w-11/12 outline-none' style = {{ borderRadius : '15px' }} onPointerDownOutside = {e => {
                        if(e.target.closest('[role="status"]')){
                            e.preventDefault()
                        }
                    }}>
                        {
                            formStep === 'otp' ? <OTPForm timer = {timer} setFormStep = { setFormStep } phoneNum = {phoneNum}/> : <LoginForm isPending = {isPending} timer = {timer} formik = {formik}/>
                        }
                    </DialogContent>
                </Dialog>
            }
        </>
    );
};

export default LoginSection;