
import { fetchLaptops } from "../dummyjson/fetchdata";
import { Product } from "../types/product-type";

import Image from "next/image";
import laptopBanne from "../assests/featured laptops.webp";
import ProductContainer from "../utils/ProductContainer";
import { useAppDispatch } from "../redux/hooks";

type Props = {};
async function TopLaptops({}: Props) {
  const featuredLaptops:Product[] = await fetchLaptops();


  return (
    <div className=" space-y-4 md:space-y-0 lg:w-[1200px] m-auto  md:flex md:flex-row-reverse md:justify-center md:items-center">
      <div className="  space-y-4 flex flex-col items-center  md:px-2">
        <div className=" relative lg:p-0 p-4">
          <h2 className="uppercase  font-semibold text-5xl text-gray-200">
            {" "}
            top laptops{" "}
          </h2>
          <p className=" uppercase text-lg absolute top-10 lg:top-6">
            Woodstock Choice
          </p>
        </div>
        <div className=" ">
          <span className=" lg:hidden flex  justify-center">
            {featuredLaptops?.slice(0, 2).map((device) => (
              <ProductContainer key={device.id} product={device} />
            ))}
          </span>
          <span className=" hidden lg:flex">
            {featuredLaptops?.slice(0, 3).map((device) => (
              <ProductContainer product={device} key={device.id} />
            ))}
          </span>
        </div>
        <div className="  ">
          <button className=" cursor-pointer border-blue-500 border text-blue-500 px-3 py-2 rounded-lg">
            View All
          </button>
        </div>
      </div>
      <div className=" ">
        <Image
          src={laptopBanne}
          alt=" laptops"
          className=" md:h-[500px] object-cover  "
        />
      </div>
    </div>
  );
};
export default TopLaptops;
