import Image from "next/image";
import watch from "../assests/collections/premium watch collections.webp";
import laptop from "../assests/collections/laptop.jpg";
import clothing from "../assests/collections/clothing.jpg";
import phone from "../assests/collections/iphone.jpg";
import TitleSection from "../utils/TitleSection";
import Link from "next/link";
type Props = {};
function Collections({}: Props) {
  return (
    <div className=" p-4 space-y-4 md:w-[90%] md:m-auto lg:w-[1200px]  pt-20">
      <TitleSection title="Collections" />

      {/** Collections Containers */}
      <div className=" flex    scrollbar-hide overflow-x-scroll space-x-4  ">
       <Link href="/shop/womens-watches">
        <div className="  overflow-hidden rounded-lg cursor-pointer group h-[340px]  md:h-[300px]   min-w-[320px] md:min-w-0 md:w-[310px] lg:w-[280px] relative ">
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
       </Link>
       <Link href="/shop/laptops">
        <div className=" overflow-hidden rounded-lg cursor-pointer group h-[340px]  md:h-[300px]   min-w-[320px] md:min-w-0 md:w-[310px] lg:w-[280px] relative ">
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
       </Link>
       <Link href="/shop/smartphones">
        <div className=" overflow-hidden rounded-lg cursor-pointer group h-[340px]  md:h-[300px]   min-w-[320px] md:min-w-0 md:w-[310px] lg:w-[280px] relative ">
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
       </Link>
       <Link href="/shop/womens-dresses">
        <div className=" overflow-hidden rounded-lg cursor-pointer group h-[340px]  md:h-[300px]   min-w-[320px] md:min-w-0 md:w-[310px] lg:w-[280px] relative ">
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
       </Link>
      </div>
    </div>
  );
}
export default Collections;
