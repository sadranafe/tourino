import * as yup from 'yup';

const UserAccountSchema = {
    contact : yup.object().shape({
        mobile : yup.string(),
        email : yup.string()
            .required('ایمیل الزامی است')
            .email('ایمیل نامعتبر است')
    }),
    personal : yup.object().shape({
        fullname : yup.string()
            .min(2 , 'حداقل 2 کاراکتر الزامی میباشد')
            .max(30 , 'حداکثر 30 کاراکتر مجاز میباشد')
            .required('نام و نام خانوداگی الزامی میباشد'),
        nationalCode : yup.string()
            .required('کد ملی الزامی میباشد')
            .matches(/^\d{10}$/ , 'کد ملی باید 10 رقم باشد'),
        birthDate : yup.string().required('تاریخ تولد الزامی میباشد'),
        gender : yup.string(),
    }),
    banking : yup.object().shape({
        debitCardCode : yup.string().matches(/^\d{16}$/ , 'شماره کارت باید 16 رقم باشد'),
        shebaCode : yup.string()
    }),
}

const UserAccountFullSchema = yup.object().shape({
    mobile: yup.string(),
    email: yup.string()
        .required('ایمیل الزامی است')
        .email('ایمیل معتبر نیست'),
    fullname: yup.string()
        .required('نام و نام خانوادگی الزامی است')
        .min(2, 'نام باید حداقل 2 کاراکتر باشد')
        .max(30 , 'حداکثر 30 کاراکتر مجاز میباشد'),
    nationalCode: yup.string()
        .required('کد ملی الزامی است')
        .matches(/^\d{10}$/, 'کد ملی باید 10 رقم باشد'),
    birthDate : yup.string().required('تاریخ تولد الزامی میباشد'),
    gender : yup.string(),
    debitCardCode: yup.string()
        .matches(/^\d{16}$/, 'شماره کارت باید 16 رقم باشد'),
    shebaCode: yup.string()
})

export { UserAccountSchema , UserAccountFullSchema };