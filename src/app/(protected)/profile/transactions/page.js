'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import Transactions from './Transactions';
import LoadingSpinner from '@/components/loadingSpinner';

const TransactionPage = () => {
    const { data , isPending } = useQuery({
        queryKey : ['trans'],
        queryFn : () => api.get('/user/transactions'),
        retry : 5,
        refetchOnWindowFocus : false,
    })

    return (
        <>
            <div className = 'border rounded-xl overflow-hidden'>
                <div className = 'bg-neutral-100 py-2.5 text-base max-[450px]:text-sm grid grid-cols-7 justify-items-center items-center'>
                    <div className = 'col-span-2 max-[800px]:col-span-2 max-[450px]:col-span-3'>
                        <p>تاریخ و ساعت</p>
                    </div>
                    <div className = 'col-span-1 max-[800px]:col-span-2 max-[450px]:col-span-2'>
                        <p>مبلغ (تومان)</p>
                    </div>
                    <div className = 'col-span-2 max-[800px]:hidden'>
                        <p>نوع تراکنش</p>
                    </div>
                    <div className = 'col-span-2 max-[800px]:col-span-3 max-[450px]:col-span-2'>
                        <p>شماره سفارش</p>
                    </div>
                </div>

                {
                    isPending ? 
                    <LoadingSpinner/>
                    :
                    <div className = 'grid grid-cols-7 justify-items-center items-center gap-y-2 px-3 max-[500px]:pr-5 max-[450px]:pr-1 max-[390px]:pr-5 py-4'>
                        {
                            data?.data?.length === 0 ?
                            <p className = 'text-center col-span-7'>تراکنشی تا به حال انجام نشده 😮</p> :
                            data?.data.map((trans , index) => (
                                <Transactions data = {trans} key = { index }/>
                            ))
                        }
                    </div>
                }
            </div>
        </>
    );
};

export default TransactionPage;