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

export const getHttpErrorMessage = (statusCode , customMessage = {}) => {
    const defaultHttpErrorMessage = {
        400 : 'درخواست نامعتبر است',
        401 : 'دسترسی غیرمجاز: اطلاعات وارد شده صحیح نیست',
        403 : 'متاسفیم، شما اجازه دسترسی به این بخش رو ندارید. دوباره وارد شوید',
        404 : 'منبع موردنظر پیدا نشد',
        500 : "خطای داخلی سرور"
    }

    const merged = { ...defaultHttpErrorMessage , ...customMessage };
    return merged[statusCode] || 'خطای ناشناخته ای رخ داده !'
}

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

export const calclateTourDuration = ( startDate , endDate ) => {
    if(!startDate || !endDate) return null;
    const start = new DateObject(startDate).day;
    const end = new DateObject(endDate).day;

    const night = end - start
    const day = (end - start) + 1

    return { night , day };
}