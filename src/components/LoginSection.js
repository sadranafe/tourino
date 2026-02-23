'use client';
import { useState } from "react";
import { useFormik } from "formik";
import { UserSchema } from "@/utils/UserSchema";
import ModalComponent from "./layout/Modal";
import LoginIcon from "./icons/loginIcon";
import ErrorMessage from "./ErrorMessage";
import UserIconComponent from "./icons/userIcon";
import axios from "axios";
import LoginForm from "./LoginForm";

const LoginSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formStep , setFormStep] = useState('phone')
    const handleOpen = () => setModalIsOpen(true);
    const handleClose = () => setModalIsOpen(false);

    const formik = useFormik({
        initialValues : {
            phoneNumber : '',
        },
        validationSchema : UserSchema,
        validateOnMount : true,
        onSubmit : async (val , { setSubmitting }) => {
            try{
                await axios.post('http://localhost:6500/auth/send-otp', {
                    mobile : val.phoneNumber
                })
                setFormStep('otp');
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
                <div className = "flex flex-wrap justify-center items-center content-center gap-10 w-10/12 h-full mx-auto">
                    {
                        formStep === 'otp' ? <p>this is step 2</p> : <LoginForm formik = {formik}/>
                    }
                </div>
            </ModalComponent>
        </>
    );
};

export default LoginSection;