import Image from "next/image";
import watch from "../assests/collections/premium watch collections.webp";
import laptop from "../assests/collections/laptop.jpg";
import clothing from "../assests/collections/clothing.jpg";
import phone from "../assests/collections/iphone.jpg";
type Props = {};
function Collections({}: Props) {
  return (
    <div className=" p-4 space-y-4 lg:w-[90%] lg:m-auto  pt-20">
        <div className="flex space-x-4 items-center">
      <h2 className=" font-semibold text-3xl lg:text-4xl">Collections</h2>
<span className=" hidden lg:flex w-full h-[4px] bg-gray-200"></span>
        </div>

      {/** Collections Containers */}
      <div className=" flex lg:justify-center    scrollbar-hide overflow-x-scroll space-x-4 lg:space-x-6  ">
        <div className="  overflow-hidden rounded-lg cursor-pointer group h-[340px]  md:h-[300px]   min-w-[320px] md:min-w-0 md:w-[310px] relative ">
          <Image
            src={watch}
            alt="watch collections"
            className="  group-hover:scale-105 transition-all ease-linear duration-150 w-full object-cover brightness-75 object-center h-full rounded-lg"
          />
          <div className=" absolute left-5 bottom-5">
            <p className=" font-semibold text-white text-2xl ">
              WooStock Premium Watches
            </p>
            <p className=" text-white  text-sm ">20 products</p>
          </div>
        </div>
        <div className=" overflow-hidden rounded-lg cursor-pointer group h-[340px]  md:h-[300px]   min-w-[320px] md:min-w-0 md:w-[310px] relative ">
          <Image
            src={laptop}
            alt="laptop collections"
            className=" group-hover:scale-105 transition-all ease-linear duration-150 w-full object-cover brightness-75 object-center h-full rounded-lg"
          />
          <div className=" absolute left-5 bottom-5">
            <p className=" font-semibold text-white text-2xl ">
              Computer & Tablet
            </p>
            <p className=" text-white  text-sm ">8 products</p>
          </div>
        </div>
        <div className=" overflow-hidden rounded-lg cursor-pointer group h-[340px]  md:h-[300px]   min-w-[320px] md:min-w-0 md:w-[310px] relative ">
          <Image
            src={phone}
            alt="phone collections"
            className=" group-hover:scale-105 transition-all ease-linear duration-150 w-full object-cover brightness-75 object-center h-full rounded-lg"
          />
          <div className=" absolute left-5 bottom-5">
            <p className=" font-semibold text-white text-2xl ">Smartphones</p>
            <p className=" text-white  text-sm ">10 products</p>
          </div>
        </div>
        <div className=" overflow-hidden rounded-lg cursor-pointer group h-[340px]  md:h-[300px]   min-w-[320px] md:min-w-0 md:w-[310px] relative ">
          <Image
            src={clothing}
            alt="clothing collections"
            className=" group-hover:scale-105 transition-all ease-linear duration-150 w-full object-cover brightness-75 object-center h-full rounded-lg"
          />
          <div className=" absolute left-5 bottom-5">
            <p className=" font-semibold text-white text-2xl ">Clothings</p>
            <p className=" text-white  text-sm ">17 products</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Collections;
