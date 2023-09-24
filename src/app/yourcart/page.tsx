import Image from "next/image";
import test from "../../../assests/test1.webp";
import NumberofItems from "../../../utils/Number-of-Items";
import { TrashIcon } from "@heroicons/react/24/outline";

type Props = {};

function YourCart({}: Props) {
  return (
    <div>
      <div className=" bg-[#fafafa]   p-10 space-y-2 ">
        <div className=" flex  space-x-2">
          <p className=" text-sm text-gray-500">Home</p>
          <p className=" text-sm text-gray-500">-</p>
          <p className=" text-sm">Your Cart</p>
        </div>
        <div>
          <p className=" font-bold text-5xl">Your Cart</p>
        </div>
      </div>

      <section id="cart items section">

      <div className=" hidden md:flex p-4   justify-between list-none">
        <li>Product</li>
        <li>Quantity </li>
        <li>Total </li>
      </div>
      <div className=" p-4 flex justify-between">
        <div className=" flex space-x-3">
          <Image
            src={test}
            alt=" product image"
            className=" bg-[#fafafa] w-24 object-cover"
          />
          <div className=" space-y-2">
            <p className=" text-[12px]">Woodstock category</p>
            <p className=" font-semibold">Watch Version 17</p>
            <p className=" text-gray-500">Stock - 12</p>
            <p>$200</p>
          </div>
        </div>
        <div className="  flex flex-col items-end justify-between ">
          <NumberofItems />
          <TrashIcon className=" w-6 cursor-pointer  hover:text-red-500" />
        </div>
      </div>
      </section>

    </div>
  );
}
export default YourCart;
