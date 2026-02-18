import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_en from "react-date-object/locales/persian_en"

export const vehicleTypeTranslate =  {
    ship : 'کشتی',
    bus : 'اتوبوس',
    train : 'قطار',
    airplane : 'هواپیما',
    SUV : 'سواری شاسی بلند'
};

const dateConvertorToGregorian = ( date , format = 'YYYY/MM/DD' , calendar = persian , locale = persian_en ) => {
    if(!date) return null;
    return new DateObject({ date , format , calendar , locale }).convert().format();
}

export const isDateInRange = ( selectedDate , startDate , endDate ) => {
    const selected = dateConvertorToGregorian(selectedDate);
    const start = dateConvertorToGregorian(startDate);
    const end = dateConvertorToGregorian(endDate);
    
    if(!selected || !start || !end) return false;
    return selected >= start && selected <= end;
};