'use client';
import api from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Tooltip , TooltipContent , TooltipTrigger } from '@/components/ui/tooltip';
import toast from 'react-hot-toast';

const ReserveLink = ({ availableSeats , tourId }) => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutate , isPending } = useMutation({
        mutationFn : () => api.put(`/basket/${tourId}`),
        onSuccess : (res) => {
            queryClient.invalidateQueries({ queryKey : ['basket'] })
            toast.success(res?.data?.message || 'تور به سبد خرید اضافه شد')
            router.push('/profile/basket');
        },
        onError : () => {
            toast.error('وارد حساب کاربری خود شوید')
        }
    })
    
    return (
        <>
            <Tooltip>
                <TooltipTrigger>
                    <p onClick = { () => mutate() } className = "text-base bg-green-500 hover:bg-green-600 max-[500px]:px-3 max-[500px]:text-sm transition-all text-white p-2.5 px-5 rounded-md">{ isPending ? 'درحال افزودن . . .' : 'رزرو و خرید'}</p>
                </TooltipTrigger>

                <TooltipContent side = 'left' className = 'ml-2'>
                    <p>ظرفیت موجود : { availableSeats }</p>
                </TooltipContent>
            </Tooltip>
        </>
    );
};

export default ReserveLink;