import SearchToursContainer from "@/components/SearchToursContainer";

const Page = () => {

  return (
    <>
        <div>
            <img src = "./banner.png" alt = "تورینو | خرید آنلاین بلیط های تور خارجی و داخلی" />
        </div>

        <div className = "my-5">
          <SearchToursContainer/>
        </div>
    </>
  );
};

export default Page;