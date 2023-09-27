import { motion } from "framer-motion"
import iphoneImg from "@/../assests/banner iphone.jpg"
import Image from "next/image"
type Props = {}
function StoreHover({}: Props) {
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
        <p className=" text-gray-400">Shop the latest</p>
        <p className=" text-gray-400">Computer & Tablet</p>
        <p className=" text-gray-400">Cellphone</p>
        <p className=" text-gray-400">Accessories</p>
        <p className=" text-gray-400">Woodstack Watch</p>
      </div>
    </div>
    <div className=" space-y-3">
      <div>
        <h3 className=" text-xl font-bold">Featured</h3>
      </div>
      <div className=" space-y-2">
        <p className=" text-gray-400">Audio & Video</p>
        <p className=" text-gray-400">Cameras, Camcorders</p>
        <p className=" text-gray-400">
          Cellphones & Accessories
        </p>
        <p className=" text-gray-400">Woostock Watch Premium</p>
      </div>
    </div>
    <div className=" space-y-3">
      <div>
        <h3 className=" text-xl font-bold">Bestseller</h3>
      </div>
      <div className=" space-y-2">
        <p className=" text-gray-400">Laptops</p>
        <p className=" text-gray-400">Gaming Laptops</p>
        <p className=" text-gray-400">Gaming Desktops</p>
        <p className=" text-gray-400">Watch</p>
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