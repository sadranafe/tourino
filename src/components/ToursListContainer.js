import TourList from "./TourList";

async function ToursContainer() {
    const data = await fetch('http://localhost:6500/tour');
    const res = await data.json();

    return (
        <>
            <div className = "grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[400px]:grid-cols-1 gap-3 p-5">
                <TourList DummyTours = { res }/>
            </div>
        </>
    );
};

export default ToursContainer;