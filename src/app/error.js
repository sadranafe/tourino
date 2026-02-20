'use client';
const Error = ({ error , reset }) => {
    console.dir(error)
    return (
        <>
            <div className = 'flex max-md:flex-wrap justify-between max-md:justify-center max-md:gap-5 items-center p-10 max-md:px-5'>
                <div className = 'flex flex-wrap gap-5 max-md:gap-5 justify-center items-center w-1/2 max-md:w-full max-md:order-2'>
                    <h1 className = 'notFoundHeader text-4xl text-center w-full font-bold'>اتصال با سرور برقرار نیست !</h1>
                    <p>لطفا بعدا دوباره امتحان کنید.</p>
                </div>

                <div className = "max-md:order-1">
                    <img src = "ErrorLampRobot.png" alt = "tourino | تورینو | محمد صدرا نافع" className = "max-md:w-full" />
                </div>
            </div>
        </>
    );
};

export default Error;