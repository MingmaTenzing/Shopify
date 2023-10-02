
import { motion } from "framer-motion"
import iphoneImg from "@/../assests/banner iphone.jpg"
import Image from "next/image"
import { useRouter } from "next/navigation"

type Props = {}
function StoreHover({}: Props) {
  const router = useRouter()
  return (
    <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    className=" justify-between  z-20 flex p-10 absolute bg-white -bottom-[320px] w-[1200px]"
  >
    <div className=" space-y-3">
      <div>
        <h3 className=" text-xl font-bold">Shop</h3>
      </div>
      <div className=" space-y-2">
        <p  onClick={() => router.push("/shop/allproducts")}className=" text-gray-400">Shop All Products</p>
        <p  onClick={() => router.push("/shop/laptops")}className=" text-gray-400">Computer & Tablet</p>
        <p  onClick={() => router.push("/shop/smartphones")}className=" text-gray-400">Cellphone</p>
        <p  onClick={() => router.push("/shop/automotive")}className=" text-gray-400">Accessories</p>
        <p  onClick={() => router.push("/shop/mens-watches")}className=" text-gray-400">Woodstack Watch</p>
      </div>
    </div>
    <div className=" space-y-3">
      <div>
        <h3 className=" text-xl font-bold">Featured</h3>
      </div>
      <div className=" space-y-2">
        <p  onClick={() => router.push("/shop/mens-shirts")}className=" text-gray-400">Mens Clothes</p>
        <p  onClick={() => router.push("/shop/tops")}className=" text-gray-400">Womens Clothes</p>
      
        <p  onClick={() => router.push("/shop/mens-watches")}className=" text-gray-400">Woostock Watch Premium</p>
      </div>
    </div>
    <div className=" space-y-3">
      <div>
        <h3 className=" text-xl font-bold">Bestseller</h3>
      </div>
      <div className=" space-y-2">
        <p  onClick={() => router.push("/shop/laptops")}className=" text-gray-400">Gaming Laptops</p>
        <p  onClick={() => router.push("/shop/smartphones")}className=" text-gray-400">Smartphones</p>
        <p  onClick={() => router.push("/shop/skincare")}className=" text-gray-400">Skincare</p>
      </div>
    </div>
    <div>
      <Image
        src={iphoneImg}
        alt="Banner"
        width={300}
        height={300}
        className=" object-cover rounded-lg "
      />
    </div>
  </motion.div>
  )
}
export default StoreHover