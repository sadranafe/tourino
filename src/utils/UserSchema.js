import * as yup from 'yup';

export const UserSchema = yup.object({
    phoneNumber: yup
        .string()
        .matches(/^[0-9]{10,13}$/, "شماره موبایل نامعتبر است")
        .required("شماره موبایل الزامی میباشد"),
});