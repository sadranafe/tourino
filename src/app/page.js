import SearchToursContainer from "@/components/SearchToursContainer";
import ToursContainer from "@/components/ToursListContainer";
import CTAbanner from "@/components/CTAbanner";

const Page = () => {

  return (
    <>
        <div>
            <img src = "./banner.png" alt = "تورینو | خرید آنلاین بلیط های تور خارجی و داخلی" />
        </div>

        <div className = "max-w-[1200px] mx-auto">
          <div className = "my-5">
            <SearchToursContainer/>
          </div>

          <div>
            <h1 className = "text-3xl max-xl:px-4">همه تور ها</h1>
            <ToursContainer/>
          </div>

          <div className = "p-3">
            <CTAbanner/>
          </div>
        </div>

    </>
  );
};

export default Page;