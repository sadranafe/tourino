import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_en from "react-date-object/locales/persian_en"

const Transactions = ({ data }) => {
    const { amount , id , createdAt } = data;
    return (
        <>
            <div className = "transactions-birthDate max-[800px]:col-span-2 max-[450px]:col-span-3 col-span-2 flex justify-center items-center">
                <p dir = "ltr" className = "mx-2">{ new Date(createdAt).getHours() + ':' + new Date(createdAt).getMinutes() }</p>
                -
                <DatePicker value = {createdAt} disabled calendar = {persian} locale = {persian_en} inputClass = "bg-transparent w-[80px] mx-2 disabled:cursor-default outline-none border-none disabled:bg-transparent disabled:border-none"/>
            </div>

            <div className = "col-span-1 max-[800px]:col-span-2 max-[450px]:col-span-2">
                <p>{amount.toLocaleString()}</p>
            </div>

            <div className = "col-span-2 max-[800px]:hidden">
                <p>ثبت‌ نام &nbsp; در &nbsp; تور &nbsp; گردشگری</p>
            </div>

            <div className = "transaction-id relative max-[800px]:col-span-3 max-[450px]:col-span-2 col-span-2 py-2 max-w-full max-[450px]:pl-0 text-nowrap overflow-x-scroll flex justify-center items-center max-[450px]:overflow-visible">
                <p className = "text-center max-[450px]:hidden">
                    <span>{id}</span>
                </p>

                <p className = "group min-[450px]:hidden transition-all">
                    <span className = "cursor-pointer">. . .</span>
                    <span className = "absolute bottom-0 -left-[35px] bg-neutral-50 rounded-xl border px-2 py-1.5 opacity-0 group-hover:opacity-100 transition-all invisible group-hover:visible">{id}</span>
                </p>
            </div>
        </>
    );
};

export default Transactions;