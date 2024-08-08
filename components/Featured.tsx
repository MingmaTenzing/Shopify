import FeaturedProduct from "../utils/FeaturedProduct";
import { Product } from "../types/product-type";
import { fetchSmartphones } from "../dummyjson/fetchdata";

import TitleSection from "../utils/TitleSection";
type Props = {};
async function Featured({}: Props) {
  const smartphones: Product[] = await fetchSmartphones();
  console.log(smartphones);

  return (
    <div className=" z-20 md:w-[90%] lg:w-[1200px] m-auto  p-4 py-20">
      <TitleSection title="Featured Products" />
      <div className="mt-4 lg:mt-8 flex flex-col  md:flex-row   items-center   overflow-x-scroll  scrollbar-hide  ">
        {smartphones?.slice(0, 5).map((device) => (
          <FeaturedProduct key={device.id} product={device} />
        ))}
      </div>
    </div>
  );
}
export default Featured;
