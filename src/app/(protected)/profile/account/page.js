'use client';
import { useAuth } from "@/provider/AuthProvider";
import { useFormik } from "formik";
import { UserAccountSchema , UserAccountFullSchema } from "@/utils/UserAccountSchema";
import AccountCard from "./AccountCard";
import { PencilSimpleLineIcon } from "@phosphor-icons/react";

const DUMMY_ACCOUNT_CARD_INFO = [
    {
        key : 'contact',
        title : 'اطلاعات کاربری',
        inputs : [
            { inputID : 1, label : 'شماره موبایل', name : 'mobile', type : 'text', placeholder : '09123456789'} ,
            { inputID : 2, label : 'ایمیل', name : 'email', type : 'email', placeholder : 'example@gmail.com'},
        ] ,
        hasOptionTag : false,
        icon : <PencilSimpleLineIcon weight = "light"/>,
    },
    {
        key : 'personal',
        title : 'اطلاعات فردی',
        inputs : [
            { inputID : 1, label : 'نام و نام خانوادگی', name : 'fullname', type : 'text', placeholder : 'john doe' } ,
            { inputID : 2, label : 'کد ملی', name : 'nationalCode', type : 'text', placeholder : '0123456789' },
        ],
        hasOptionTag : true,
        icon : <PencilSimpleLineIcon weight = "light"/>,
    },
    {
        key : 'banking',
        title : 'اطلاعات بانکی',
        inputs : [
            { inputID : 1, label : 'شماره کارت', name : 'debitCardCode', type : 'text', placeholder : ''} ,
            { inputID : 2, label : 'شماره شبا', name : 'shebaCode', type : 'text', placeholder : ''},
        ] ,
        hasOptionTag : false,
        icon : <PencilSimpleLineIcon weight = "light"/>,
    },
]

const AccountProfilePage = () => {
    const { user } = useAuth();
    const formik = useFormik({
        enableReinitialize : true,
        initialValues : {
            mobile : user?.mobile || '-',
            email : user?.email || '-',
            fullname : user?.firstName && user?.lastName ? `${user?.firstName} ${user?.lastName}` : '-',
            nationalCode : user?.nationalCode || '-',
            gender : user?.gender || 'male',
            birthDate : user?.birthDate || null,
            debitCardCode : user?.debitCardCode || '-',
            shebaCode : user?.shebaCode || '-'
        },
        validationSchema : UserAccountFullSchema,
        onSubmit : val => {
            console.log(val)
        },
    })

    const validateSection = async sectionKey => {
        const sectionSchema = UserAccountSchema[sectionKey];
        console.log('sectionSchema : ' , sectionSchema)
        const sectionFields = Object.keys(sectionSchema.fields);
        console.log('sectionFields : ' , sectionFields)
        const sectionValues = {};
        sectionFields.forEach(field => {
            sectionValues[field] = formik.values[field];
        })

        try {
            await sectionSchema.validate(sectionValues , { abortEarly : false });
            return { isValid : true , errors : {} };
        } catch (err) {
            const errors = {};
            err.inner.forEach(e => {
                errors[e.path] = e.message;
            })
            return { isValid : false , errors }
        }
    }

    const handleSectionSave = async sectionKey => {
        const { isValid , errors } = await validateSection(sectionKey);

        if(isValid) {
            const sectionSchema = UserAccountSchema[sectionKey];
            const sectionFields = Object.keys(sectionSchema.fields);
            const touched = {};
            sectionFields.forEach(field => {
                touched[field] = true;
            })
            formik.setTouched(touched);
            console.log(`section ${sectionKey} saved : ${formik.values}`)
        } else {
            const touched = {};
            Object.keys(errors).forEach(field => {
                touched[field] = true;
            })

            formik.setTouched(touched);
            formik.setErrors(errors);
        }

        return isValid;
    }

    return (
        <>
            {
                DUMMY_ACCOUNT_CARD_INFO.map( card => {
                    return (
                        <AccountCard key = { card.key } card = { card } formik = {formik} user = {user} onSave = {() => handleSectionSave(card.key)}/>
                    )
                })
            }
        </>
    );
};

export default AccountProfilePage;