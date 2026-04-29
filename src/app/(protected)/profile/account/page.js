'use client';
import { useState } from "react";
import { updateUserProfile } from "@/lib/api";
import useUser from "@/hooks/useUser";
import { useFormik } from "formik";
import { UserAccountSchema , UserAccountFullSchema } from "@/utils/UserAccountSchema";
import { SECTION_FIELDS } from "@/helper/helper";
import AccountCard from "./AccountCard";
import toast from "react-hot-toast";
import { PencilSimpleLineIcon } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const DUMMY_ACCOUNT_CARD_INFO = [
    {
        key : 'contact',
        title : 'اطلاعات کاربری',
        inputs : [
            { inputID : 1, label : 'شماره موبایل :', name : 'mobile', type : 'text', placeholder : '09123456789'} ,
            { inputID : 2, label : 'ایمیل :', name : 'email', type : 'email', placeholder : 'example@gmail.com'},
        ] ,
        hasOptionTag : false,
        icon : <PencilSimpleLineIcon weight = "light"/>,
    },
    {
        key : 'personal',
        title : 'اطلاعات فردی',
        inputs : [
            { inputID : 1, label : 'نام و نام خانوادگی  :', name : 'fullname', type : 'text', placeholder : 'john doe' } ,
            { inputID : 2, label : 'کد ملی :', name : 'nationalCode', type : 'text', placeholder : '0123456789' },
        ],
        hasOptionTag : true,
        icon : <PencilSimpleLineIcon weight = "light"/>,
    },
    {
        key : 'banking',
        title : 'اطلاعات بانکی',
        inputs : [
            { inputID : 1, label : 'شماره کارت :', name : 'debitCardCode', type : 'number', placeholder : ''} ,
            { inputID : 2, label : 'شماره شبا :', name : 'shebaCode', type : 'number', placeholder : ''},
        ] ,
        hasOptionTag : false,
        icon : <PencilSimpleLineIcon weight = "light"/>,
    },
]

const AccountProfilePage = () => {
    const { user } = useUser();
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn : updateUserProfile,
        onSuccess: res => {
            queryClient.invalidateQueries({ queryKey :['user-data'] })
            toast.success(res?.message || 'تغییرات با موفقیت ذخیره شد ')
        }
    })

    const [loading , setLoading] = useState(false);
    const [saveStatus , setSaveStatus] = useState({});
    const formik = useFormik({
        enableReinitialize : true,
        initialValues : {
            mobile : user?.mobile || '-',
            email : user?.email || '-',
            fullname : user?.fullname || '-',
            nationalCode : user?.nationalCode || '-',
            gender : user?.gender || 'male',
            birthDate : user?.birthDate || null,
            debitCardCode : user?.debitCardCode || '-',
            shebaCode : user?.shebaCode || '-'
        },
        validationSchema : UserAccountFullSchema,
    })

    const validateSection = async sectionKey => {
        const sectionSchema = UserAccountSchema[sectionKey];
        const sectionFields = Object.keys(sectionSchema.fields);
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

        if(!isValid) {
            const touched = {};
            Object.keys(errors).forEach(field => {
                touched[field] = true;
            });
            formik.setTouched(touched);
            formik.setErrors(errors);
            return { success : false , errors }
        }

        const fields = SECTION_FIELDS[sectionKey];
        const sectionData = {};
        fields.forEach(field => {
            sectionData[field] = formik.values[field];
        });

        try {
            setLoading(true);
            setSaveStatus(prev => ({...prev , [sectionKey] : 'loading'}));
            mutate({ ...sectionData })
            setSaveStatus(prev => ({ ...prev, [sectionKey]: 'success' }));
            const touched = {};
            fields.forEach(field => touched[field] = true);
            formik.setTouched(touched);

            setTimeout(() => {
                setSaveStatus(prev => ({ ...prev, [sectionKey]: null }));
            }, 2000);
            return { success : true };
        } catch (err) {
            console.error('Error saving section : ' , err);
            setSaveStatus(prev => ({ ...prev , [sectionKey] : 'error' }))
            return { success : false , error : err.message }
        } finally {
            setLoading(false);
        }
    }
    
    const cancelSectionHandler = sectionKey => {
        const fields = SECTION_FIELDS[sectionKey];
        fields.forEach(field => {
            formik.setFieldValue(field , user?.[field] ?? '-')
            formik.setFieldTouched(field , false);
            formik.setFieldError(field , undefined);
        })
        setSaveStatus(prev => ( { ...prev , [sectionKey] : null } ))
    }

    return (
        <>
            {
                DUMMY_ACCOUNT_CARD_INFO.map( card => {
                    return (
                        <AccountCard key = { card.key } card = { card } formik = {formik} user = {user} onSave = {() => handleSectionSave(card.key)} onCancel = { () => cancelSectionHandler(card.key) } loading = { loading || saveStatus[card.key] === 'loading' } saveStatus = {saveStatus[card.key]}/>
                    )
                })
            }
        </>
    );
};

export default AccountProfilePage;