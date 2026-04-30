import { calculateTourDuration } from "@/helper/helper";

const Basket = props => {
    const { id , image : img , title , price , startDate , endDate } = props;
    const tourDuration = calculateTourDuration(startDate , endDate);

    return (
        <>
            <div className = "">
                test
            </div>

            <div className = "border rounded-xl w-3/12">
                <div>
                    <img src = {img} alt = {title} />
                </div>

                <div className = "p-2">
                    <div className = "flex items-center justify-between my-2 mb-3 px-2">
                        <h1 className = "text-base font-bold">{title}</h1>
                        <p className = "text-neutral-400">{`${tourDuration?.night} شب  و ${tourDuration?.day} روز`}</p>
                    </div>

                    <div className = "border-t border-dashed border-neutral-300 pt-3 flex justify-between items-center px-2">
                        <p>قیمت نهایی </p>
                        <p>
                            <span className = "text-xl text-blue-400 ml-1">{price?.toLocaleString()}</span> <span>تومان</span>
                        </p>
                    </div>

                    <div>
                        <button className = "w-full bg-green-500 hover:bg-green-600 transition-all text-white rounded-md p-2 mt-2">ثبت و خرید نهایی</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Basket;