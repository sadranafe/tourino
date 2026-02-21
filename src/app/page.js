import SearchToursContainer from "@/components/SearchToursContainer";
import ToursContainer from "@/components/ToursListContainer";
import CTAbanner from "@/components/CTAbanner";
import TourSlider from "@/components/TourSlider";
import ServiceHighlights from "@/components/ServiceHighlights";
import { Suspense } from "react";
import ToursLoading from "@/components/ToursLoading";
export const dynamic = "force-dynamic";

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
            <Suspense fallback = {<ToursLoading/>}>
              <ToursContainer/>
            </Suspense>
          </div>

          <div className = "p-3">
            <CTAbanner/>
          </div>

          <TourSlider/>

          <ServiceHighlights/>
        </div>

    </>
  );
};

export default Page;