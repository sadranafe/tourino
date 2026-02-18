import TourCard from "./TourCard";

async function ToursContainer() {
    const data = await fetch('http://localhost:6500/tour');
    const res = await data.json();

    return (
        <>
            <div className = "grid grid-cols-4 gap-3">
                {
                    res.map(data => {
                        return(
                            <TourCard key = {data.id} { ...data }/>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ToursContainer;