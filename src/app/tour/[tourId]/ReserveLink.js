'use client';
import api from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Tooltip , TooltipContent , TooltipTrigger } from '@/components/ui/tooltip';
import toast from 'react-hot-toast';
import useRedirecting from '@/hooks/useRedirecting';

const ReserveLink = ({ availableSeats , tourId }) => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { isRedirecting , startRedirecting , stopRedirecting } = useRedirecting()

    const { mutate , isPending } = useMutation({
        mutationFn : () => api.put(`/basket/${tourId}`),
        onSuccess : (res) => {
            startRedirecting()
            queryClient.invalidateQueries({ queryKey : ['basket'] })
            toast.success(res?.data?.message || 'تور به سبد خرید اضافه شد')
            router.push('/profile/basket');
        },
        onError : () => {
            stopRedirecting()
            toast.error('وارد حساب کاربری خود شوید')
        }
    })
    
    return (
        <>
            <Tooltip>
                <TooltipTrigger>
                    <p onClick = {() => {
                        if(isPending || isRedirecting) return;
                        mutate();
                    }}
                    className = {`text-base ${(isPending || isRedirecting) ? 'bg-green-400 cursor-not-allowed' : 'cursor-pointer bg-green-500 hover:bg-green-600'} max-[500px]:px-3 max-[500px]:text-sm transition-all text-white p-2.5 px-5 rounded-md`}>
                        {  isPending ? 'درحال بررسی . . .' : isRedirecting ? 'درحال افزودن . . . ' : 'رزرو و خرید'}
                    </p>
                </TooltipTrigger>

                <TooltipContent side = 'left' className = 'ml-2'>
                    <p>ظرفیت موجود : { availableSeats }</p>
                </TooltipContent>
            </Tooltip>
        </>
    );
};

export default ReserveLink;