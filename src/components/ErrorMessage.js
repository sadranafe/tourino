import InfoIconComponent from "./icons/InfoIcon";

const ErrorMessage = ({ fieldHasError , errorMsg }) => {
    return (
        <>
            <div className = {`group cursor-pointer p-1 text-red-500 relative w-1/12 ml-1 text-center transition ${fieldHasError ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <InfoIconComponent/>
                <p className = "absolute z-10 bg-red-100 p-2 px-4 rounded-lg text-start min-w-32 -right-6 top-6 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition">{errorMsg}</p>
            </div>
        </>
    );
};

export default ErrorMessage;