import SearchTours from "./SearchTours";

async function SearchToursContainer() {
    const data = await fetch('http://localhost:6500/tour');
    const res = await data.json();
    const dummyCities = [...new Set([... new Set(res.map(item => item.origin.name))].concat([... new Set(res.map(item => item.destination.name))]))]

    return (
        <>
            <div className = "flex flex-wrap justify-center items-center">
                <h1 className = "text-center w-full text-2xl max-sm:px-3"> <span className = "text-green-500">تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی</h1>
                
                <SearchTours dummyCities = {dummyCities}/>
            </div>
        </>
    );
};

export default SearchToursContainer;