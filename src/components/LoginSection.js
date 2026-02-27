'use client';
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { UserSchema } from "@/utils/UserSchema";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import { Dialog , DialogContent , DialogTrigger } from "@/components/ui/dialog";
import UserMenu from "./UserMenu";
import LoginForm from "./LoginForm";
import OTPForm from "./OTPForm";
import LoginIcon from "./icons/loginIcon";
import UserIconComponent from "./icons/userIcon";

const LoginSection = () => {
    const [formStep , setFormStep] = useState('phone');
    const [phoneNum , setPhoneNum] = useState('');
    const [timer , setTimer] = useState(0);
    const {isAuthenticated , logout} = useAuth();

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
        onSubmit : async (val , { setSubmitting }) => {
            try{
                await api.post('/auth/send-otp' , { mobile : val.phoneNumber });
                setFormStep('otp');
                setPhoneNum(val.phoneNumber);
                setTimer(12);
            } catch (err){
                console.log(err)
            } finally {
                setSubmitting(false);
            }
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
                    <DialogContent className = 'bg-neutral-50 rounded-3xl w-[500px] h-[350px] max-sm:w-9/12 outline-none'>
                        {
                            formStep === 'otp' ? <OTPForm timer = {timer} setTimer = {setTimer} phoneNum = {phoneNum}/> : <LoginForm timer = {timer} formik = {formik}/>
                        }
                    </DialogContent>
                </Dialog>
            }
        </>
    );
};

export default LoginSection;