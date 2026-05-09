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
            <div className = "rounded-xl p-10 bg-neutral-50/70 shadow-lg shadow-neutral-100">
                {
                    userPending || transPending || toursPending ? 
                    <LoadingSpinner /> : 
                    <>
                        <DashboardUserSection user = {user}/>
                        <div className = "grid grid-cols-3 gap-5 my-10">
                            <DashboardTransactionBox data = {transactionsData}/>
                            <DashboardUserToursBox tours = {toursData}/>
                        </div>
                    </>
                }
            </div>
        </>
    );
};

export default DashboardPage;