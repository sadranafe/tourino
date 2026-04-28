import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api"
import useHasToken from "@/hooks/useHasToken";

export const useGetUserData = () => {
    const hasToken = useHasToken();

    const queryFn = () => api.get('/user/profile');
    const queryKey = ['user-data']

    return useQuery({ queryKey , queryFn , enabled : hasToken , refetchOnWindowFocus : false })
}