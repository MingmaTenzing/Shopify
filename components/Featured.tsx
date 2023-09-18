import FeaturedProduct from "../utils/FeaturedProduct";
import { Product } from "../types/product-type";
import { fetchSmartphones } from "../dummyjson/fetchdata";

import TitleSection from "../utils/TitleSection";
type Props = {};
async function Featured({}: Props) {
  const smartphones: Product[] = await fetchSmartphones();

  return (
    <div className=" z-20 md:w-[90%] lg:w-[1200px] m-auto  p-4 py-20">
      <TitleSection title="Featured Products" />
      <div className="mt-4 lg:mt-8 flex flex-col  md:flex-row   items-center   overflow-x-scroll  scrollbar-hide  ">
        {smartphones?.slice(0, 5).map((device) => (
          <FeaturedProduct
            id={device.id}
            description={device.description}
            stock={device.stock}
            brand={device.brand}
            category={device.category}
            images={device.images}
            key={device.id}
            rating={device.rating}
            thumbnail={device.thumbnail}
            title={device.title}
            price={device.price}
            discountPercentage={device.discountPercentage}
          />
        ))}
      </div>
    </div>
  );
}
export default Featured;
