import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import api from "@/lib/api"
import { setCookie } from "@/utils/cookie";
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

export const useVerifyOTP = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutationFn = ({ mobile , code }) => api.post('/auth/check-otp' , { mobile , code });

    return useMutation({
        mutationFn,
        onSuccess : res => {
            const { accessToken,  refreshToken , user } = res?.data;
            setCookie('accessToken' , accessToken , 30);
            setCookie('refreshToken' , refreshToken , 365);
            queryClient.setQueryData(['user-data'] , user);
            queryClient.invalidateQueries({ queryKey : ['user-data'] });
            router.replace('/profile/account');
            toast.success('با موفقیت وارد شدید');
        },
        onError : err => {
            const msg = err?.response?.data?.message || 'کد وارد شده اشتباه است';
            toast.error(msg);
        }
    })
}