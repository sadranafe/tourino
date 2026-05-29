import HighlightedTour from "./HighlightedTour";

export async function generateMetadata({ params }){
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/${params.tourId}`);
    const res = await data.json();
    return{
        title : res.title
    }
}


async function Page ({ params }){
    const { tourId } = params;
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/${tourId}`)
    const res = await data.json();
    return (
        <>
            <HighlightedTour { ...res }/>
        </>
    );
};

export default Page;