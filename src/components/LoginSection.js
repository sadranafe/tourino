'use client';
import { useEffect, useState } from "react";
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

const LoginSection = () => {
    const [formStep , setFormStep] = useState('phone'); // phone - otp
    const [phoneNum , setPhoneNum] = useState('');
    const [timer , setTimer] = useState(0);
    const { user } = useUser();
    const isAuthenticated = !!user
    const TIME = 120;

    const { mutate , isPending } = useSendOTP();

    useEffect(() => {
        if(timer <= 0) return;
        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        },1000)

        return () => clearInterval(interval)
    },[timer]);

    const formik = useFormik({
        initialValues : {
            phoneNumber : '',
        },
        validationSchema : UserSchema,
        validateOnMount : true,
        onSubmit : val => {
            mutate(val.phoneNumber , {
                onSuccess : (data) => {
                    setPhoneNum(val.phoneNumber);
                    setFormStep('otp');
                    toast.success(`کد ورود  : ${data?.data?.code}` , { duration : 5000 })
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
                    <DialogContent className = 'bg-neutral-50 w-[500px] h-[350px] max-sm:w-9/12 outline-none' style = {{ borderRadius : '20px' }}>
                        {
                            formStep === 'otp' ? <OTPForm timer = {timer} time = {TIME} setTimer = { setTimer } setFormStep = { setFormStep } phoneNum = {phoneNum}/> : <LoginForm isPending = {isPending} timer = {timer} formik = {formik}/>
                        }
                    </DialogContent>
                </Dialog>
            }
        </>
    );
};

export default LoginSection;