import { useGetUserData } from '@/services/queries';

const useUser = () => {
    const { data , isLoading , isPending , isError , error , isFetching , status } = useGetUserData();
    const user = data?.data;
    
    return { user , data , isLoading , isPending , isFetching , isError , error , status };
};

export default useUser;