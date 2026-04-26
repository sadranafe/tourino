import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api"
import toast from "react-hot-toast";

export const useSendOTP = () => {
    const mutationFn = data => api.post('/auth/send-otp' , { mobile : data})

    return useMutation({ 
        mutationFn , 
        onError : err => {
            toast.error('خطا در ارسال کد ورود')
            console.error('error occured : ' , err)
        }
    })
}
