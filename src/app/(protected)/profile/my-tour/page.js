'use client';
import LoadingSpinner from "@/components/LoadingSpinner";
import MyTours from "./MyTours";
import { useGetUserTours } from "@/services/queries";

const MyTourPage = () => {
    const { data , isPending , isFetching, isLoading } = useGetUserTours();

    return (
        <div className = "flex flex-wrap justify-center items-center border rounded-3xl p-5 gap-5">
            {
                isPending ? 
                <LoadingSpinner/> :
                data?.data?.length === 0 ? 
                <p>تا به حال تور خریداری نکرده اید 😮</p> :
                data?.data?.map((tour , index) => {
                    return (
                        <MyTours key = {index} tour = {tour}/>
                    )
                })
            }
        </div>
    );
};

export default MyTourPage;