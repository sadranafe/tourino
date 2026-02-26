'use client';
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { UserSchema } from "@/utils/UserSchema";
import api from "@/lib/api";
import ModalComponent from "./layout/Modal";
import LoginForm from "./LoginForm";
import OTPForm from "./OTPForm";
import LoginIcon from "./icons/loginIcon";
import UserIconComponent from "./icons/userIcon";

const LoginSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formStep , setFormStep] = useState('phone');
    const [phoneNum , setPhoneNum] = useState('');
    const [timer , setTimer] = useState(0);
    const handleOpen = () => setModalIsOpen(true);
    const handleClose = () => {
        setModalIsOpen(false);
        setFormStep('phone')
    }

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
            <button onClick = {handleOpen} className = "border border-green-500 p-2 gap-2 text-green-500 transition-all hover:bg-green-500 hover:text-white rounded-lg flex justify-center items-center">
                <p className = "max-md:hidden block">ورود | ثبت‌ نام</p>
                <UserIconComponent weight = 'bold' customClassName = "max-md:hidden block"/>

                <LoginIcon customClasses = 'max-md:inline-block hidden'/>
            </button>

            <ModalComponent modalIsOpen = {modalIsOpen} handleClose = {handleClose}>
                <div className = {`flex flex-wrap justify-center items-center content-center ${formStep === 'otp' ? 'gap-3' : 'gap-10'} w-10/12 h-full mx-auto`}>
                    {
                        formStep === 'otp' ? <OTPForm formStepHandler = {setFormStep} setModalIsOpen = {setModalIsOpen} timer = {timer} setTimer = {setTimer} phoneNum = {phoneNum}/> : <LoginForm timer = {timer} formik = {formik}/>
                    }
                </div>
            </ModalComponent>
        </>
    );
};

export default LoginSection;