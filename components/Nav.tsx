import { TruckIcon, UserIcon } from "@heroicons/react/24/outline";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  MicrophoneIcon,
  ChevronDownIcon,
  TagIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../assests/logo.webp";
import twitter from "../assests/socials/twitter.svg";
import facebook from "../assests/socials/facebook.svg";
import pinterest from "../assests/socials/pinterest.svg";
import instagram from "../assests/socials/instagram.svg";

type Props = {};
function Nav({}: Props) {
  return (
    <div className="">
      <div className="  p-4  md:px-6 lg:hidden flex justify-between">
        <div className=" flex space-x-6">
          <Bars3Icon className=" w-8" />
          <UserIcon className="w-8" />
        </div>

        <Image src={logo} alt="logo" className=" w-20" />
        <div className=" flex space-x-6">
          <MagnifyingGlassIcon className=" w-8" />
          <ShoppingBagIcon className=" w-8" />
        </div>
      </div>
      {/*  Nav bar for large Screen */}
      <div className="   px-40 p-4 hidden lg:inline-block text-white text-sm w-full bg-[#262626]">
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
      <div className="  hidden  lg:inline-block w-full p-10  px-40  ">
        <div className=" flex justify-between items-center   ">
          <div>
            <Image src={logo} alt="logo" className="  w-20" />
          </div>
          <div className=" flex  space-x-4">
            <div className=" flex w-[400px] h-[70px] bg-slate-100 p-4 rounded-lg">
              <input
                className="  outline-none   flex-grow   bg-slate-100"
                placeholder="Search"
              ></input>
              <MagnifyingGlassIcon className=" w-8 flex " />
            </div>
            <div className="bg-slate-100  space-x-2 w-[240px]  rounded-lg  flex justify-center items-center p-2 ">
              <div>
                <MicrophoneIcon className="w-8 text-gray-500" />{" "}
              </div>

              <div className=" text-sm">
                <p className=" text-gray-400">Customer Support</p>
                <p className=" font-semibold">1-800-123-45-67</p>
              </div>
            </div>
            <div className=" flex space-x-6">
              <UserIcon className=" w-10" />
              <div className=" flex space-x-2 items-center">
                <ShoppingBagIcon className=" w-10" />
                <div>
                  <p className=" text-sm text-gray-400">Subtotal</p>
                  <p className=" font-bold">$100</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** NAV SECOND LINE  large screen*/}
        <div className=" pt-10 flex justify-between">
          <div className=" flex space-x-10">
            <div className="flex space-x-2 items-center group  cursor-pointer">
              <p className=" font-semibold">Stores</p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
            </div>
            <div className="flex space-x-2 items-center group  cursor-pointer">
              <p className=" font-semibold">Watch</p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
            </div>
            <div className="flex space-x-2 items-center group  cursor-pointer">
              <p className=" font-semibold">Smartphones</p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
            </div>
            <div className="flex space-x-2 items-center group  cursor-pointer">
              <p className=" font-semibold">Accessories</p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
            </div>
            <div className="flex space-x-2 items-center group  cursor-pointer">
              <p className=" font-semibold">Laptops</p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
            </div>
            <div className="flex space-x-2 items-center group  cursor-pointer">
              <p className=" font-semibold">Support</p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
            </div>
          </div>

          {/** ALL SALES AND SHIPPING  section */}
          <div className=" flex space-x-4">
            <div className=" flex items-center  space-x-2 text-gray-600">
              <TagIcon className=" w-6" />
              <p>All Sales</p>
            </div>
            <div className=" flex  items-center space-x-2 text-gray-600">
              <TruckIcon className=" w-6" />
              <p>Shipping and Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nav;
