
import logo from "../assests/logo.webp";
import twitter from "../../assests/socials/twitter.svg"
import facebook from "../../assests/socials/facebook.svg";
import pinterest from "../../assests/socials/pinterest.svg";
import instagram from "../../assests/socials/instagram.svg";
import { MapIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
type Props = {}
function NavTopSection({}: Props) {
  return (
    <div className="  p-4 px-10 hidden lg:inline-block text-white text-sm w-full bg-[#262626]">
    <div className=" flex justify-between">
      <div className=" flex items-center space-x-2">
        <MapIcon className="w-6" />
        <p>Free Shipping Over $100</p>
      </div>
      <div className=" flex space-x-6 items-center">
        <p className="  hover:text-gray-500 transition-all ease-linear duration-150 cursor-pointer">
          Australia
        </p>
        <p className="  hover:text-gray-500 transition-all ease-linear duration-150 cursor-pointer">
          English{" "}
        </p>
        <Image
          src={twitter}
          alt="social icons"
          className=" w-6 invert cursor-pointer hover:scale-110 transition-all  ease-linear duration-200"
        />
        <Image
          src={facebook}
          alt="social icons"
          className=" w-6 invert cursor-pointer hover:scale-110 transition-all  ease-linear duration-200"
        />
        <Image
          src={pinterest}
          alt="social icons"
          className=" w-6 invert cursor-pointer hover:scale-110 transition-all  ease-linear duration-200"
        />
        <Image
          src={instagram}
          alt="social icons"
          className=" w-6 invert cursor-pointer hover:scale-110 transition-all  ease-linear duration-200"
        />
      </div>
    </div>
  </div>
  )
}
export default NavTopSection