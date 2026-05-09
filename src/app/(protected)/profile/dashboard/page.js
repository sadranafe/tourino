'use client';
import useUser from "@/hooks/useUser";
import { useGetUserTours, useGetUserTransactions } from "@/services/queries";
import DashboardUserSection from "@/components/DashboardUserSection";
import LoadingSpinner from "@/components/LoadingSpinner";
import DashboardTransactionBox from "@/components/DashboardTransactionBox";
import DashboardUserToursBox from "@/components/DashboardUserToursBox";

const DashboardPage = () => {
    const { user , isPending : userPending } = useUser();
    const { data : transactionsData , isPending : transPending } = useGetUserTransactions();
    const { data : toursData , isPending : toursPending } = useGetUserTours();
    
    return (
        <>
            {
                userPending || transPending || toursPending ? 
                <LoadingSpinner /> : 
                <>
                    <DashboardUserSection user = {user}/>
                    <div className = "grid grid-cols-3 max-lg:grid-cols-2 max-[550px]:grid-cols-1 gap-5 my-10">
                        <DashboardTransactionBox data = {transactionsData}/>
                        <DashboardUserToursBox tours = {toursData}/>
                    </div>
                </>
            }
        </>
    );
};

export default DashboardPage;