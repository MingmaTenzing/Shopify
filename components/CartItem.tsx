import Image from "next/image"
import NumberofItems from "../utils/Number-of-Items"
import { TrashIcon } from "@heroicons/react/24/outline"
import test from "@/../assests/test1.webp"
import { Product } from "../types/product-type"
import { CartItem } from "../types/cartItem-type"
import { useDispatch } from "react-redux"
import { deletefromCart } from "../redux/slices/CartItems"
import { useRouter } from "next/navigation"

type Props = {
  product:CartItem
}
export default function CartItem({product}: Props) {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className=" hover:bg-gray-100 cursor-pointer"> <div className=" p-4 flex items-center justify-between">
    <div className=" flex space-x-3 md:w-[250px]">
      <Image
        src={product.thumbnail}
        alt=" product image"
        width={96}
        height={50}
        onClick={() => router.push(`/product/${product.id}`)} 
        className=" bg-[#fafafa] w-24 object-cover"
      />
      <div onClick={() => router.push(`/product/${product.id}`)}  className=" space-y-2">
        <p className=" text-[12px]">Woodstock {product.category}</p>
        <p className=" font-semibold">{product.title}</p>
        <p className=" text-gray-500">Stock - {product.stock}</p>
        <p>${product.price}</p>
      </div>
    </div>
    <div className=" hidden lg:flex">
      <NumberofItems product={product} />
    </div>
    <div className=" hidden lg:flex font-semibold">${product.price * product.quantity}</div>
    <div className=" hidden lg:flex">
      <TrashIcon onClick={() => dispatch(deletefromCart(product))} className=" w-6  cursor-pointer" />
    </div>
    <div className=" lg:hidden  flex flex-col items-end space-y-4 justify-between ">
      <NumberofItems product={product} />
      <TrashIcon onClick={() => dispatch(deletefromCart(product))} className=" w-6 cursor-pointer " />
    </div>
  </div></div>
  )
}