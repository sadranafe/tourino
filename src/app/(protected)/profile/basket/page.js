'use client'
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import useUser from "@/hooks/useUser";
import Basket from "./basket";
import ToursLoading from "@/components/ToursLoading";

const BasketPage = () => {
    const { user } = useUser();
    const { data: basketData , isPending } = useQuery({
        queryKey : ['basket'],
        queryFn : () => api.get('/basket'),
        refetchOnWindowFocus : false,
    })
    const res = basketData?.data;
    
    return (
        <>
            {
                isPending ? 
                <ToursLoading/> :
                <Basket { ...res } user = { user } />
            }
        </>
    );
};

export default BasketPage;