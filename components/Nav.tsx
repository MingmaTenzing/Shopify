"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TruckIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
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
import { useRef } from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import { useHover } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import iphoneImg from "../assests/banner iphone.jpg";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
type Props = {};
function Nav({}: Props) {
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);
  const watchHover = useRef(null);
  const isHover = useHover(watchHover);
  const accessoriesHover = useRef(null);
  const isAccessoriesHover = useHover(accessoriesHover);
  const storeHover = useRef(null);
  const isStoresHover = useHover(storeHover);
  const { isScrollingUp, isScrollingDown, isScrollingY } = useScrollDirection();
  const [sticktoTop, setSticktoTop] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (isScrollingUp) {
      setSticktoTop(" sticky top-0");
    }
    if (isScrollingDown) {
      setSticktoTop("");
    }
  }, [isScrollingY]);
  return (
    <div
      className={`z-50 ${sticktoTop}  transition-all ease-linear duration-200`}
    >
      {/** NAV BAR FOR SMALL SCREENS */}
      <div className="  p-4 bg-white  z-50 relative  md:px-6 lg:hidden flex justify-between">
        <div className=" flex space-x-6">
          {
            isModalOpen ? (<XMarkIcon className=" w-8 cursor-pointer"  onClick={() => setisModalOpen(!isModalOpen)}/>) : (<Bars3Icon
              className=" w-8 cursor-pointer"
              onClick={() => setisModalOpen(!isModalOpen)}
            />)
          }
          
          <UserIcon className="w-8" />
        </div>

        <Image src={logo} alt="logo" onClick={() => router.push("/")} className=" cursor-pointer w-20" />
        <div className=" flex space-x-6">
          <MagnifyingGlassIcon className=" w-8" />
          <ShoppingBagIcon className=" w-8" />
        </div>

        {/** MODAL FOR SMALL DEVICES */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div 
            initial={{x:-20}}
            animate={{x:0, transition:{stiffness:300,  type:"spring"}}}
            transition={{duration:0.3,  ease:"linear"}}
            exit={{x:-20, opacity:0}}
            
            className=" space-y-5 absolute left-0 top-[72px] bg-white w-[80%] md:w-[300px] p-4 ">
              <div className=" flex  flex-col space-y-2">
                <Link href="/shop/allproducts" >
                
                <div onClick={() => setisModalOpen(false)} className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between">
                  <p>All Products</p>
                  <ChevronRightIcon className=" w-4" />
                </div>
                </Link>
                <Link href="/shop/mens-watches">
                <div onClick={() => setisModalOpen(false)} className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between">
                  <p>Watch</p>
                  <ChevronRightIcon className=" w-4" />
                </div>
                </Link>
                <Link href="/shop/smartphones">
                <div onClick={() => setisModalOpen(false)} className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between">
                  <p>Smartphones</p>
                  <ChevronRightIcon className=" w-4" />
                </div>
                </Link>
                <Link href="/shop/laptops">
                <div onClick={() => setisModalOpen(false)} className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between">
                  <p>Laptops</p>
                  <ChevronRightIcon className=" w-4" />
                </div>
                </Link>
                <Link href="/shop/automotive">
                <div  onClick={() => setisModalOpen(false)} className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between">
                  <p>Accessories</p>
                  <ChevronRightIcon className=" w-4" />
                </div>
                </Link>
                <Link href="/shop/skincare">
                <div  onClick={() => setisModalOpen(false)} className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between">
                  <p>Skincare</p>
                  <ChevronRightIcon className=" w-4" />
                </div>
                </Link>
              </div>
              <div className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between">
                <div className=" flex space-x-3 items-center">
                  <MicrophoneIcon className="w-6" />
                  <div>
                    <p className=" text-[10px] font-light">Customer Support</p>
                    <p>1-800-123-45-67</p>
                  </div>
                </div>
              </div>
              <div className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-around">
                <Image src={facebook} alt="socials" className=" w-8" />
                <Image src={pinterest} alt="socials" className=" w-8" />
                <Image src={twitter} alt="socials" className=" w-8" />
                <Image src={instagram} alt="socials" className=" w-8" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/*  Nav bar for large Screen */}
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
      <div className="  bg-white  hidden  lg:inline-block w-full p-10    ">
        <div className=" flex justify-between items-center   ">
          <div>
            <Image src={logo} alt="logo" onClick={() => router.push("/")} className="  cursor-pointer w-20" />
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
        <div className="  pt-10 flex justify-between">
          <div className=" flex space-x-10">
            <div
              ref={storeHover}
              className="flex  relative space-x-2 items-center group  cursor-pointer"
            >
              <p className=" font-semibold hover:underline transition ease-linear duration-150">
                Stores
              </p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
              {/*** OPTIONS ON HOVER */}
              {/**STORES DROPDOWN MENU */}
              <AnimatePresence>
                {isStoresHover && (
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
                )}
              </AnimatePresence>
              {/****   end of stored dropdown menu  */}
            </div>

            <div
              ref={watchHover}
              className="flex relative space-x-2 items-center group  cursor-pointer"
            >
              <p className=" font-semibold hover:underline transition ease-linear duration-150">
                Watch
              </p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
              {/** HOVER OPTIONS */}
              <AnimatePresence>
                {isHover && (
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    className=" bg-white absolute z-20 -bottom-[154px] -right-14    space-y-3   rounded-lg  w-[180px] p-6  "
                  >
                    <div className="group/category">
                      <p>Men&apos;s Watch</p>
                      <div className=" w-0 h-[1px] group-hover/category:w-full transition-all ease-linear  duration-200 bg-black"></div>
                    </div>

                    <div className="group/category">
                      <p>Women&apos;s Watch</p>
                      <div className=" w-0 h-[1px] group-hover/category:w-full transition-all ease-linear  duration-200 bg-black"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex space-x-2 items-center group  cursor-pointer">
              <p className=" font-semibold hover:underline transition ease-linear duration-150">
                Smartphones
              </p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
            </div>
            <div
              ref={accessoriesHover}
              className="flex relative space-x-2 items-center group  cursor-pointer"
            >
              <p className=" font-semibold hover:underline transition ease-linear duration-150">
                Accessories
              </p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
              {/** HOVER OPTIONS */}
              <AnimatePresence>
                {isAccessoriesHover && (
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    className=" bg-white absolute -bottom-[154px] z-20 -right-14    space-y-3   rounded-lg  w-[180px] p-6  "
                  >
                    <div className="group/category">
                      <p>Automotive</p>
                      <div className=" w-0 h-[1px] group-hover/category:w-full transition-all ease-linear  duration-200 bg-black"></div>
                    </div>

                    <div className="group/category">
                      <p>Motorcycle</p>
                      <div className=" w-0 h-[1px] group-hover/category:w-full transition-all ease-linear  duration-200 bg-black"></div>
                    </div>
                    <div className="group/category">
                      <p>Lightning</p>
                      <div className=" w-0 h-[1px] group-hover/category:w-full transition-all ease-linear  duration-200 bg-black"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex space-x-2 items-center group  cursor-pointer">
              <p className=" font-semibold hover:underline transition ease-linear duration-150">
                Laptops
              </p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
            </div>
            <div className="flex space-x-2 items-center group  cursor-pointer">
              <p className=" font-semibold hover:underline transition ease-linear duration-150">
                Support
              </p>
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
