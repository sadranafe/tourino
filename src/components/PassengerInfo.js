
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_en from "react-date-object/locales/persian_en"

const PassengerInfo = props => {
    const { fullname , nationalCode , birthDate , gender } = props;
    return (
        <>
            <div className = "w-8/12 max-lg:w-10/12">
                <input type = "text" placeholder = 'نام و نام خانوداگی' defaultValue = {fullname} disabled className = "p-2 rounded-sm border border-neutral-300 w-full text-center disabled:bg-transparent disabled:cursor-not-allowed"/>
            </div>

            <div className = "w-8/12 max-lg:w-10/12">
                <input type = "text" placeholder = 'کد ملی' defaultValue = {nationalCode} disabled className = "p-2 rounded-sm border border-neutral-300 w-full text-center disabled:bg-transparent disabled:cursor-not-allowed"/>
            </div>

            <div className = "passenger-birthDate w-8/12 max-lg:w-10/12">
                <DatePicker name = "birthDate" id = 'birthDate' placeholder = "تاریخ تولد" value = {birthDate} disabled calendarPosition = "bottom-center" calendar = {persian} locale = {persian_en} inputClass = 'bg-transparent disabled:cursor-not-allowed outline-none outline-none border border-neutral-300 p-2 rounded-md w-full text-center'/>
            </div>

            <div className = "w-8/12 max-lg:w-10/12">
                <select name = "gender" id = "gender" defaultValue = {gender} disabled className = "bg-transparent p-2 rounded-sm border border-neutral-300 w-full text-center disabled:cursor-not-allowed ">
                    <option value = 'male'>مرد</option>
                    <option value = 'female'>زن</option>
                </select>
            </div>

        </>
    );
};

export default PassengerInfo;