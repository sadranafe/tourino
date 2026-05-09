import InvoiceIconComponent from "./icons/InVoiceIconComponent";
import WalletIconComponent from "./icons/WalletIconComponent";

const DashboardTransactionBox = ({ data }) => {
    const transData = data?.data;

    const sumPriceCalc = () => {
        let sumPrice = 0
        transData.map(tour => sumPrice += tour?.amount)
        return sumPrice
    }
    return (
        <>
            <div className = "bg-orange-300 rounded-xl p-5 flex flex-wrap justify-center items-center">
                <p className = "text-3xl text-center w-full">{ transData.length }</p>
               
                <p className = "flex justify-start items-center gap-3">
                    <InvoiceIconComponent customClasses = 'text-2xl'/>
                    <span className = "text-base">تراکنش موفق</span>
                </p>
            </div>

            <div className = "bg-sky-300 rounded-xl p-5 flex flex-wrap justify-center items-center">
                <p className = "text-3xl text-center w-full max-[400px]:text-2xl">
                    { sumPriceCalc()?.toLocaleString() }
                    <span className = "text-xs text-neutral-500 mr-1">تومان</span>
                </p>
               
                <p className = "flex justify-start items-center gap-3">
                    <WalletIconComponent customClasses = 'text-2xl'/>
                    <span className = "text-base max-[400px]:text-sm">ارزش کل تور های من</span>
                </p>
            </div>
        </>
    );
};

export default DashboardTransactionBox;