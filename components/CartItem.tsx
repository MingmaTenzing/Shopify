import Image from "next/image"
import NumberofItems from "../utils/Number-of-Items"
import { TrashIcon } from "@heroicons/react/24/outline"
import test from "@/../assests/test1.webp"
import { Product } from "../types/product-type"

type Props = {
  product:Product
}
export default function CartItem({product}: Props) {
  return (
    <div className=" hover:bg-gray-100"> <div className=" p-4 flex items-center justify-between">
    <div className=" flex space-x-3 md:w-[250px]">
      <Image
        src={product.thumbnail}
        alt=" product image"
        width={96}
        height={50}
        className=" bg-[#fafafa] w-24 object-cover"
      />
      <div className=" space-y-2">
        <p className=" text-[12px]">Woodstock {product.category}</p>
        <p className=" font-semibold">{product.title}</p>
        <p className=" text-gray-500">Stock - {product.stock}</p>
        <p>${product.price}</p>
      </div>
    </div>
    <div className=" hidden lg:flex">
      <NumberofItems />
    </div>
    <div className=" hidden lg:flex font-semibold">$790</div>
    <div className=" hidden lg:flex">
      <TrashIcon className=" w-6  cursor-pointer" />
    </div>
    <div className=" lg:hidden  flex flex-col items-end space-y-4 justify-between ">
      <NumberofItems />
      <TrashIcon className=" w-6 cursor-pointer " />
    </div>
  </div></div>
  )
}