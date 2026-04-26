import { DialogDescription , DialogTitle } from "@/components/ui/dialog";
import ErrorMessage from './ErrorMessage';

const LoginForm = ({ formik , timer , isPending }) => {
    return (
        <>
            <DialogTitle className = 'flex justify-center items-center'>
                <p className = "text-2xl font-bold text-center">ورود به تورینو</p>
            </DialogTitle>
            
            <DialogDescription asChild>
                <div className = "w-full">
                    <div className = "flex flex-col justify-center items-center">
                        <label htmlFor = "phoneNumber" className = "block w-full text-neutral-500">شماره موبایل خود را وارد کنید</label>
                        <div className = "relative flex flex-wrap justify-center items-center w-full">
                            <input type = "number" name = "phoneNumber" id = "phoneNumber" {...formik.getFieldProps('phoneNumber')} placeholder = "4253***0912" className = "w-9/12 max-[500px]:w-full text-base max-md:text-sm my-2 border border-white/90 bg-white/20 outline-none rounded-lg p-3 px-5 shadow-[0_5px_10px_rgba(0,0,0,0.03)] caret-green-500 text-green-600 placeholder:text-neutral-400"/>
                            <div className = "absolute left-6 max-[600px]:left-4 max-[500px]:-left-7">
                                <ErrorMessage fieldHasError = {formik.touched.phoneNumber && formik.errors.phoneNumber} errorMsg = {formik.errors.phoneNumber}/>
                            </div>
                        </div>
                    </div>

                    <div className = "w-9/12 max-[500px]:w-full mx-auto">
                        {/* <button type = "submit" onClick = {formik.handleSubmit} disabled = {!formik.dirty || !formik.isValid || formik.isSubmitting || timer > 0} className = "disabled:bg-green-400 disabled:cursor-not-allowed outline-none w-full bg-green-500 hover:bg-green-600 transition-all rounded-md p-2.5 text-white"> */}
                        <button type = "submit" onClick = {formik.handleSubmit} disabled = {!formik.isValid || isPending || timer > 0} className = "disabled:bg-green-400 disabled:cursor-not-allowed outline-none w-full bg-green-500 hover:bg-green-600 transition-all rounded-md p-2.5 text-white">
                            {
                                isPending ? (
                                    <>
                                        درحال ارسال کد . . .
                                        <span className = "inline-block animate-spin h-4 w-4 mr-3 border-2 border-white border-t-transparent rounded-full"></span>
                                    </>
                                ) : timer > 0 ? `ارسال مجدد کد تا ${timer} ثانیه دیگر` : 'دریافت کد تایید'

                                // formik.isSubmitting ? (
                                //     <>
                                //         درحال ارسال کد . . .
                                //         <span className = "inline-block animate-spin h-4 w-4 mr-3 border-2 border-white border-t-transparent rounded-full"></span>
                                //     </>
                                // ) : timer > 0 ? `ارسال مجدد کد تا ${timer} ثانیه دیگر` : 'دریافت کد تایید'
                            }
                        </button>
                    </div>
                </div>
            </DialogDescription>
        </>
    );
};

export default LoginForm;