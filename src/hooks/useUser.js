import { useGetUserData } from '@/services/queries';

const useUser = () => {
    const { data , isLoading , isPending , isError , error , isFetching } = useGetUserData();
    const user = data?.data;
    
    return { user , data , isLoading , isPending , isFetching , isError , error };
};

export default useUser;