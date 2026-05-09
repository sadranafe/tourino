import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api"
import useHasToken from "@/hooks/useHasToken";

export const useGetUserData = () => {
    const hasToken = useHasToken();

    const queryFn = () => api.get('/user/profile');
    const queryKey = ['user-data']

    return useQuery({ queryKey,
        queryFn,
        enabled : hasToken,
        staleTime : 5 * 60 * 1000,
        refetchOnWindowFocus : false,
    })
}

export const useGetUserTours = () => {
    const hasToken = useHasToken();
    return useQuery({
        queryKey : ['my-tours'],
        queryFn : () => api.get('/user/tours'),
        enabled : hasToken,
        refetchOnWindowFocus : false,
        retry : 3,
    })
}

export const useGetUserTransactions = () => {
    const hasToken = useHasToken();
    return useQuery({
        queryKey : ['trans'],
        queryFn : () => api.get('/user/transactions'),
        enabled : hasToken,
        retry : 5,
        refetchOnWindowFocus : false,
    })
}