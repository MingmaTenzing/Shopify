import { ChevronRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import CategoriesLineup from "./small components/CategoriesLineup"
import bg from "../assests/shop bg.jpg"
type Props = {
    params: string | string[]
}
function ProductsHeader({params}: Props) {
  return (
    <div>   <div className=" h-[300px] md:h-[250px] w-full relative ">
    <Image
      src={bg}
      alt="shop bg"
      className=" h-[300px] md:h-[250px] brightness-50   w-full object-cover"
    />
    <span className=" w-full h-full  bg-blue-500 absolute top-0   brightness-50 opacity-50"></span>

    <div className=" p-4 md:pl-24 lg:pl-32 absolute top-1/2 -translate-y-1/2 space-y-4 text-white">
      <div className=" flex space-x-2">
        <p className=" opacity-80">Home</p>
        <ChevronRightIcon className=" w-6 opacity-80" />
        <p>{params}</p>
      </div>
      <h2 className="font-bold text-4xl uppercase text-white">{params}</h2>
    </div>
    {/** categories section */}
    <CategoriesLineup />
    {/*** end of categories section */}
  </div></div>
  )
}
export default ProductsHeader