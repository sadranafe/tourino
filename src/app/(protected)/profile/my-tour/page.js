'use client';
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import LoadingSpinner from "@/components/loadingSpinner";
import MyTours from "./MyTours";

const MyTourPage = () => {
    const { data , isPending } = useQuery({
        queryKey : ['trans'],
        queryFn : () => api.get('/user/tours'),
        retry : 5,
        refetchOnWindowFocus : false,
    })

    return (
        <div className = "flex flex-wrap justify-center items-center border rounded-lg p-5 gap-5">
            {
                isPending ? 
                <LoadingSpinner/> :
                data?.data.map((tour , index) => {
                    return (
                        <MyTours key = {index} tour = {tour}/>
                    )
                })
            }
        </div>
    );
};

export default MyTourPage;