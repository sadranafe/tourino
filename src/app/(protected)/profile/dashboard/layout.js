export const metadata = {
    title : 'داشبورد'
}

const layout = ({ children }) => {
    return (
        <>
            <div className = "rounded-xl p-10 bg-neutral-50/70 max-[400px]:p-7">
                { children }
            </div>
        </>
    );
};

export default layout;