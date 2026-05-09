import HighlightedTour from "./HighlightedTour";

export async function generateMetadata({ params }){
    const data = await fetch(`http://localhost:6500/tour/${params.tourId}`);
    const res = await data.json();
    return{
        title : res.title
    }
}


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