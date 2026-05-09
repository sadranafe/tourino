'use client';
import api from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useGetUserTours } from '@/services/queries';
import { Tooltip , TooltipContent , TooltipTrigger } from '@/components/ui/tooltip';
import toast from 'react-hot-toast';
import useRedirecting from '@/hooks/useRedirecting';
import Link from 'next/link';

const ReserveLink = ({ availableSeats , tourId }) => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { data : userToursData } = useGetUserTours();
    const purchasedTourId = userToursData?.data?.filter(tour => tour.id === tourId)[0]?.id === tourId
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
            {
                purchasedTourId ? 
                <Link href = '/profile/my-tour' className = 'max-[500px]:px-3 max-[500px]:text-sm hover:bg-green-50 transition-all p-2.5 px-5 rounded-md border border-dashed border-green-500 text-green-500'>خریداری شده. مشاهده؟</Link>:
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
            }
        </>
    );
};

export default ReserveLink;