import Image from "next/image";
import { Suspense } from "react";
import SearchToursContainer from "@/components/SearchToursContainer";
import ToursContainer from "@/components/ToursListContainer";
import CTAbanner from "@/components/CTAbanner";
import TourSlider from "@/components/TourSlider";
import ServiceHighlights from "@/components/ServiceHighlights";
import ToursLoading from "@/components/ToursLoading";

export const dynamic = "force-dynamic";

const Page = () => {

  return (
    <>
        <div className = "relative w-full aspect-[1500/400]">
            <Image src = '/banner.png' alt = "تورینو | خرید آنلاین بلیط های تور خارجی و داخلی" fill priority className = "object-cover"/>
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