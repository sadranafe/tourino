import AirplaneIconComponent from "./icons/AirplaneIcon";
import DotIconComponent from "./icons/DotIconComponent";

const DashboardUserToursBox = ({ tours }) => {
    const data = tours?.data;

    return (
        <>
            <div className = "bg-violet-300 rounded-xl p-5">
                <p className = "flex justify-start items-center gap-3 mb-2">
                    <AirplaneIconComponent customClasses = 'rotate-45 text-2xl'/>
                    <span className = "text-xl">کارنامه سفر : </span>
                </p>

                <div className = "pr-5">
                    {
                        data?.map((tour , index) => {
                            return(
                                <p className = "flex justify-start items-center gap-1" key = {index}>
                                    <DotIconComponent weight = "light" customClasses = 'text-base'/>
                                    <span>{tour?.title}</span>
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default DashboardUserToursBox;