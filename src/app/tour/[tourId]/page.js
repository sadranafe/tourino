import HighlightedTour from "./HighlightedTour";

async function Page ({ params }){
    const { tourId } = params;
    const data = await fetch(`http://localhost:6500/tour/${tourId}`)
    const res = await data.json();
    return (
        <>
            <HighlightedTour { ...res }/>
        </>
    );
};

export default Page;