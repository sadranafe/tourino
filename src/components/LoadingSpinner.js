const LoadingSpinner = () => {
    return (
        <>
            <p className = 'flex justify-center items-center py-3'>
                <span className = 'w-5 h-5 inline-block border border-neutral-400 border-b-0 border-r-0 animate-spin rounded-full'></span>
            </p>
        </>
    );
};

export default LoadingSpinner;